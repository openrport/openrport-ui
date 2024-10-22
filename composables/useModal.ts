import { ref } from 'vue';

export const useModal = () => {
	const isOpen = ref(false);
	const modalData = ref(null);

	const open = (data = null) => {
		isOpen.value = true;
		modalData.value = data;
	};

	const close = () => {
		isOpen.value = false;
		modalData.value = null;
	};

	return {
		isOpen,
		modalData,
		open,
		close,
	};
};
