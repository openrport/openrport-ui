import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { QueryParams, TunnelPayload } from '~/types';

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
