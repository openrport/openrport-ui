import type { TunnelOption, InstallerOption } from '~/types';

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

export const TUNNEL_OPTIONS: TunnelOption[] = [
	{
		id: 'ssh',
		label: 'SSH',
		ports: '22',
	},
	{
		id: 'rdp',
		label: 'Remote Desktop (RDP)',
		ports: '3389',
		link: 'https://kb.openrport.io/using-the-remote-access/creating-tunnels/rdp-via-browser',
		linkLabel: 'Learn more about RDP via browser',
	},
	{
		id: 'vnc',
		label: 'VNC',
		ports: '5900',
		link: 'https://kb.openrport.io/using-the-remote-access/creating-tunnels/vnc-via-browser',
		linkLabel: 'Lean more bout the NoVNC Integration',
	},
	{
		id: 'realvnc',
		label: 'RealVNC®',
		ports: '5900',
		link: 'https://kb.openrport.io/using-the-remote-access/creating-tunnels/vnc-via-realvnc',
		linkLabel: 'Lean more about the RealVNC® integration',
	},
	{
		id: 'http',
		label: 'HTTP',
		ports: '80',
		link: 'https://kb.openrport.io/using-the-remote-access/creating-tunnels#built-in-http-reverse-proxy',
		linkLabel: 'Lean more about the HTTP reverse proxy',
	},
	{
		id: 'https',
		label: 'HTTPs',
		ports: '443',
		link: 'https://kb.openrport.io/using-the-remote-access/creating-tunnels#built-in-http-reverse-proxy',
		linkLabel: 'Lean more about the HTTP reverse proxy',
	},
	{
		id: 'other',
		label: 'Any Service',
		ports: '80',
	},
	{
		id: 'forwarding',
		label: 'Service Forwarding',
		ports: '',
	},
] as const;
