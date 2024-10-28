import { storeToRefs } from 'pinia';
import type { TunnelFormState, TunnelPayload } from '~/types';
import { useTunnelValidation } from '~/composables/tunnels/useTunnelValidation';
import { TUNNEL_OPTIONS } from '~/constants';
import { toQueryString } from '~/lib/utils';

export function useTunnelForm(client: any) {
	const tunnelStore = useTunnelStore();
	const profileStore = useProfile();
	const { ip: serverIp } = storeToRefs(profileStore);
	const errors = ref({});

	const formState = reactive<TunnelFormState>({
		service: 'ssh',
		forwardingService: 'ssh',
		forwardDestination: '192.250.198.203',
		port: 22,
		storeInLibrary: false,
		protocol: 'tcp',
		name: '',
		lport_random: 'random',
		lport: 20000,
		acl_model: 'current',
		acl_risk: false,
		acl: '',
		http_proxy: false,
		auth_user: '',
		auth_password: '',
		host_header: '',
		skip_idle_timeout: true,
		idle_timeout_minutes: 5,
		autoclose_enable: false,
		autoclose_hour: 2,
		autoclose_minute: 30,
	});

	const isLoading = ref(false);

	const { lportError, lportErrorMessage, forwardingError, isFormValid } = useTunnelValidation(formState);

	const handleServiceChange = (newService: string) => {
		const config = TUNNEL_OPTIONS.find(config => config.id === newService);
		if (config?.ports) {
			formState.port = parseInt(config.ports);
		}
	};

	const handleAclModelChange = (acl: string) => {
		switch (acl) {
			case 'current':
				formState.acl = '';
				break;
			case 'specific':
				formState.acl = `${serverIp.value}/24`;
				break;
			case 'anyone':
				formState.acl = '0.0.0.0/0';
				break;
			default:
				break;
		}
	};

	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		const payload: TunnelPayload = {
			remote: String(formState.port),
			scheme: formState.service,
			acl: formState.acl,
			protocol: formState.protocol,
		};

		if (formState.service === 'forwarding' && formState.forwardingService) {
			payload.scheme = formState.forwardingService;
			payload.remote = `${formState.forwardDestination}:${formState.port}`;
		}
		if (formState.skip_idle_timeout) {
			payload['idle-timeout-minutes'] = formState.idle_timeout_minutes;
		}
		else {
			payload['skip-idle-timeout'] = 1;
		}

		if (formState.autoclose_enable) {
			payload['auto-close'] = `${formState.autoclose_hour}h${formState.autoclose_minute}m`;
		}
		if (formState.http_proxy) {
			payload.http_proxy = formState.http_proxy;
		}
		try {
			isLoading.value = true;
			const { data, error } = await tunnelStore.createTunnel(client.id, payload);
			if (error) {
				errors.value = error;
			}
			else {
				tunnelStore.closeAddTunnel();
			}
			isLoading.value = false;
		}
		catch (e) {
			console.log(e);
		}
		finally {
			isLoading.value = false;
		}
		console.log(toQueryString(payload));
	};

	watch(() => formState.service, handleServiceChange);
	watch(() => formState.acl_model, handleAclModelChange);

	onMounted(async () => {
		await profileStore.loadServerIp();
		formState.acl = serverIp.value;
	});
	return {
		formState,
		isLoading,
		lportError,
		lportErrorMessage,
		forwardingError,
		isFormValid,
		handleSubmit,
	};
}
