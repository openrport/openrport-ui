import type { Updater } from '@tanstack/vue-table';
import type { Ref } from 'vue';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { QueryParams, TunnelPayload } from '~/types';

export function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref) {
	ref.value
    = typeof updaterOrValue === 'function'
			? updaterOrValue(ref.value)
			: updaterOrValue;
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function randomPassword(length: number) {
	const characters = '!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const passwordArray = [];
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		passwordArray.push(characters[randomIndex]);
	}

	return passwordArray.join('');
}
export function randomSanitizedPassword(length: number) {
	const characters = '_+-.:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const passwordArray = [];
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		passwordArray.push(characters[randomIndex]);
	}

	return passwordArray.join('');
}
export function randomID(length: number) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const IDArray = [];
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		IDArray.push(characters[randomIndex]);
	}
	return IDArray.join('');
}
export function formatedDate(dateString: string) {
	const date = new Date(dateString);
	return `${date.getUTCDate().toString().padStart(2, '0')}-${(date.getUTCMonth() + 1).toString().padStart(2, '0')}-${date.getUTCFullYear().toString().substr(-2)} ${date.getUTCHours().toString().padStart(2, '0')}:${date.getUTCMinutes().toString().padStart(2, '0')}:${date.getUTCSeconds().toString().padStart(2, '0')} UTC`;
}
export function bytesToSize(bytes: number): string {
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	if (bytes === 0) return 'n/a';
	const i = parseInt(String(Math.floor(Math.log(bytes) / Math.log(1024))), 10);
	if (i === 0) return `${bytes} ${sizes[i]})`;
	return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`;
}

export function toQueryString(params: QueryParams | TunnelPayload): string {
	const queryParams = Object.entries(params)
		.filter(([_, value]) => value !== undefined && value !== null)
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
		.join('&');
	return queryParams ? `?${queryParams}` : '';
}

// Same output as the `filesize` defaults used by the reference UI: base 1000, two decimals ("33.31 GB")
export function formatFileSize(bytes: number): string {
	if (!bytes) {
		return '0 B';
	}
	const units = ['B', 'kB', 'MB', 'GB', 'TB', 'PB'];
	const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1000)), units.length - 1);
	return `${Math.round((bytes / 1000 ** exponent) * 100) / 100} ${units[exponent]}`;
}

// Disk sizes as the reference shows them: binary GB with one decimal, TB above 1024 GB
export function formatDiskSize(bytes: number): string {
	const gigabytes = bytes / 1073741824;
	return gigabytes >= 1024 ? `${(gigabytes / 1024).toFixed(1)}TB` : `${gigabytes.toFixed(1)}GB`;
}
