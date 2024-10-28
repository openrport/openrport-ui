import type { TunnelFormState } from '~/types';
import { validation } from '~/lib/validation';

export function useTunnelValidation(formState: TunnelFormState) {
	const lportError = computed(() => {
		if (!formState.lport) return false;
		if (formState.lport.toString().length === 0) return true;
		return formState.lport < 20000 || formState.lport > 30000;
	});

	const lportErrorMessage = computed(() => {
		if (!formState.lport || formState.lport.toString().length === 0) {
			return 'Port minimun value is 20000';
		}
		if (formState.lport < 20000) return 'Port minimum value is 20000';
		if (formState.lport > 30000) return 'Port maximum value is 30000';
		return '';
	});
	const isFormValid = computed(() => {
		if (formState.acl_model === 'anyone' && !formState.acl_risk) return false;
		if (formState.storeInLibrary && !formState.name) return false;
		if (formState.lport_random === 'specify' && lportError.value) return false;
		return true;
	});
	const forwardingError = computed(() => {
		return !validation.isValidHostnameOrIP(String(formState.forwardDestination));
	});
	return {
		lportError,
		lportErrorMessage,
		forwardingError,
		isFormValid,
	};
}
