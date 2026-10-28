import { defineStore } from 'pinia';
import type { Theme } from '~/constants/settings';

export interface UserSettings {
	commandHistoryMaxEntries: number;
	sshUseChromeApp: boolean;
	theme: Theme;
	rdpConnectType: string;
	defaultRdpUsername: string;
	rdpWindowResolution: { width: number; height: number };
	rdpLocalKeyboardLayout: string;
	navigationMenuPosition: string;
	rdpCustomWindowSize: boolean;
}

const ONE_YEAR = 60 * 60 * 24 * 365;

const systemTheme = (): Theme => (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light');

// Browser-local settings, kept in the same "settings" cookie the reference UI uses
const defaults = (saved: Partial<UserSettings> | null | undefined): UserSettings => ({
	commandHistoryMaxEntries: saved?.commandHistoryMaxEntries ?? 50,
	// The reference wrote booleans but read back strings
	sshUseChromeApp: saved?.sshUseChromeApp === true || String(saved?.sshUseChromeApp) === 'true',
	theme: saved?.theme === 'Dark' || saved?.theme === 'Light' ? saved.theme : systemTheme(),
	rdpConnectType: saved?.rdpConnectType ?? 'microsoft_remote_desktop',
	defaultRdpUsername: saved?.defaultRdpUsername ?? '',
	rdpWindowResolution: {
		width: saved?.rdpWindowResolution?.width ?? 1024,
		height: saved?.rdpWindowResolution?.height ?? 768,
	},
	rdpLocalKeyboardLayout: saved?.rdpLocalKeyboardLayout ?? 'en-us-qwerty',
	navigationMenuPosition: saved?.navigationMenuPosition ?? 'Vertical',
	rdpCustomWindowSize: saved?.rdpCustomWindowSize ?? false,
});

export const useSettingsStore = defineStore('settings', () => {
	const cookie = useCookie<Partial<UserSettings> | null>('settings', { maxAge: ONE_YEAR, sameSite: 'lax' });
	const settings = ref<UserSettings>(defaults(cookie.value));

	const applyTheme = () => {
		document.documentElement.classList.toggle('dark', settings.value.theme === 'Dark');
	};

	const save = (next: UserSettings) => {
		settings.value = structuredClone(toRaw(next));
		cookie.value = settings.value;
		applyTheme();
	};

	return { settings, save, applyTheme };
});
