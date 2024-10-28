import type { TunnelOptionsProps, TunnelOptionsState } from '~/types';

export function useTunnelOptions(
	props: TunnelOptionsProps,
	emit: (event: 'update:modelValue', value: TunnelOptionsState) => void,
) {
	const localState = ref <TunnelOptionsState>({ ...props.modelValue });

	const MAX_IDLE_TIMEOUT = 10080; // 7 days in minutes
	const MAX_HOURS = 168; // 7 days in hours
	const MAX_MINUTES = 59; // 7 days in minutes

	const updateState = (newState: Partial<TunnelOptionsState>) => {
		const updatedState = {
			...localState.value,
			...newState,
		};
		localState.value = updatedState;
		emit('update:modelValue', updatedState);
	};

	const handleIdleTimeoutToggle = (enabled: boolean) => {
		updateState({
			skip_idle_timeout: enabled,
			idle_timeout_minutes: enabled ? 5 : 0,
		});
	};
	const handleAutocloseToggle = (enabled: boolean) => {
		updateState({
			autoclose_enable: enabled,
			autoclose_hour: enabled ? localState.value.autoclose_hour : 0,
			autoclose_minute: enabled ? localState.value.autoclose_minute : 0,
		});
	};

	const validateIdleTimeout = (minutes: number): string | null => {
		if (minutes < 0) return 'Idle timeout cannot be negative';
		if (minutes > MAX_IDLE_TIMEOUT) return `Idle timeout cannot exceed ${MAX_IDLE_TIMEOUT} minutes`;
		return null;
	};

	const validateAutoclose = computed(() => {
		if (!localState.value.autoclose_enable) return null;
		const { autoclose_hour, autoclose_minute } = localState.value;

		if (autoclose_hour < 0 || autoclose_hour > MAX_MINUTES) {
			return `Hours must be between 0 and ${MAX_HOURS}`;
		}

		if (autoclose_minute < 0 || autoclose_minute > MAX_MINUTES) {
			return `Minutes must be between 0 and ${MAX_MINUTES}`;
		}

		if (autoclose_hour === 0 && autoclose_minute === 0) {
			return 'Total duration must be greater than 0';
		}

		return null;
	});
	// Watch for external changes
	watch(() => props.modelValue, (newValue) => {
		localState.value = { ...newValue };
	}, { deep: true });

	return {
		localState,
		handleIdleTimeoutToggle,
		handleAutocloseToggle,
		validateIdleTimeout,
		updateState,
		validateAutoclose,
		MAX_IDLE_TIMEOUT,
		MAX_HOURS,
		MAX_MINUTES,
	};
}
