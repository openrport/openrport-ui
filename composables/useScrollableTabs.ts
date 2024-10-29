export function useScrollableTabs() {
	// Scroll states and refs
	const translateX = ref(0);
	const containerWidth = ref(0);
	const tabsListWidth = ref(0);
	const tabsListRef = ref<HTMLElement | null>(null);

	const isAtStart = computed(() => translateX.value === 0);
	const isAtEnd = computed(() => tabsListWidth.value + translateX.value <= containerWidth.value);

	// Scroll functions
	function scrollLeft() {
		const scrollAmount = containerWidth.value * 0.75;
		translateX.value = Math.min(translateX.value + scrollAmount, 0);
	}

	function scrollRight() {
		const scrollAmount = containerWidth.value * 0.75;
		const maxScroll = containerWidth.value - tabsListWidth.value;
		translateX.value = Math.max(translateX.value - scrollAmount, maxScroll);
	}

	// Initialize widths and fetch data on mount
	onMounted(async () => {
		if (tabsListRef.value) {
			containerWidth.value = tabsListRef.value.offsetParent?.clientWidth || 0;
			tabsListWidth.value = tabsListRef.value.scrollWidth;
		}
	});

	return {
		translateX,
		containerWidth,
		tabsListWidth,
		tabsListRef,
		isAtStart,
		isAtEnd,
		scrollLeft,
		scrollRight,
	};
}
