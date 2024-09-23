import { ref } from 'vue';

export const useModal = () => {
	const modalIsActive = ref(false);

	const openModal = () => {
		modalIsActive.value = true;
	};

	const closeModal = () => {
		modalIsActive.value = false;
	};

	return {
		modalIsActive,
		openModal,
		closeModal,
	};
};
