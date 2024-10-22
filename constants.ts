export const INSTALLER_OPTIONS: InstallerOption[] = [
	{
		id: 'remote',
		label: 'Enable remote script and command',
		flag: 'x',
		platformSupport: 'all',
	},
	{
		id: 'sudoright',
		label: 'Give remote scripts and command sudo rights',
		flag: 's',
		platformSupport: 'linux',
	},
	{
		id: 'filetransfer',
		label: 'Enable file transfer',
		flag: 'r',
		platformSupport: 'all',
	},
	{
		id: 'sudotransfer',
		label: 'Enable file transfer sudo rights',
		flag: 'b',
		platformSupport: 'linux',
	},
	{
		id: 'tacoscript',
		label: 'Install Tacoscript along with the RPort client',
		flag: 'i',
		platformSupport: 'all',
	},
] as const;
