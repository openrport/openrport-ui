import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

// Favorite client IDs, kept in this browser under the same "favorites" key as the reference UI
export const useFavoritesStore = defineStore('favorites', () => {
	const ids = useStorage<string[]>('favorites', []);

	const has = (id: string) => ids.value.includes(id);

	const toggle = (id: string) => {
		ids.value = has(id) ? ids.value.filter(favorite => favorite !== id) : [...ids.value, id];
	};

	return { ids, has, toggle };
});
