// Same values and cookie layout as the reference UI, so saved settings carry over

export const THEMES = ['Light', 'Dark'] as const;
export type Theme = typeof THEMES[number];

export const RDP_CONNECT_TYPES = [
	{ text: 'Microsoft Remote Desktop via RDP file download (Win & Mac)', value: 'microsoft_remote_desktop' },
	{ text: 'Open a rdp:// schema link (Linux & FreeRDP, custom scripts)', value: 'schema_link' },
];

// Width and height options are paired by position
export const RDP_WINDOW_WIDTHS = [960, 1024, 1280];
export const RDP_WINDOW_HEIGHTS = [720, 768, 960];

export const RDP_KEYBOARD_LAYOUTS = [
	{ text: 'Brazilian (Portuguese)', value: 'pt-br-qwerty' },
	{ text: 'English (UK)', value: 'en-gb-qwerty' },
	{ text: 'English (US)', value: 'en-us-qwerty' },
	{ text: 'French', value: 'fr-fr-azerty' },
	{ text: 'French (Belgian)', value: 'fr-be-azerty' },
	{ text: 'French (Swiss)', value: 'fr-ch-qwertz' },
	{ text: 'German', value: 'de-de-qwertz' },
	{ text: 'German (Swiss)', value: 'de-ch-qwertz' },
	{ text: 'Hungarian', value: 'hu-hu-qwertz' },
	{ text: 'Italian', value: 'it-it-qwerty' },
	{ text: 'Japanese', value: 'ja-jp-qwerty' },
	{ text: 'Norwegian', value: 'no-no-qwerty' },
	{ text: 'Spanish', value: 'es-es-qwerty' },
	{ text: 'Spanish (Latin American)', value: 'es-latam-qwerty' },
	{ text: 'Turkish-Q', value: 'tr-tr-qwerty' },
];

export const SECURE_SHELL_EXTENSION_ID = 'iodihamcpbpeioajjeobimgagajmlibd';
export const SECURE_SHELL_DOWNLOAD_URL = `https://chrome.google.com/webstore/detail/secure-shell-app/${SECURE_SHELL_EXTENSION_ID}`;

export const RDP_FILE_TEMPLATE = `
screen mode id:i:1
use multimon:i:0
desktopwidth:i:{WINDOW_WIDTH}
desktopheight:i:{WINDOW_HEIGHT}
client bpp:i:32
winposstr:s:0,3,0,0,800,600a
compression:i:1
keyboardhook:i:2
audiocapturemode:i:0
videoplaybackmode:i:1
connection type:i:7
networkautodetect:i:1
bandwidthautodetect:i:1
displayconnectionbar:i:1
enableworkspacereconnect:i:0
disable wallpaper:i:0
allow font smoothing:i:0
allow desktop composition:i:0
disable full window drag:i:1
disable menu anims:i:1
disable themes:i:0
disable cursor setting:i:0
bitmapcachepersistenable:i:1
full address:s:{HOST}
audiomode:i:2
redirectprinters:i:0
redirectcomports:i:0
redirectsmartcards:i:0
redirectclipboard:i:1
redirectposdevices:i:0
drivestoredirect:s:
autoreconnection enabled:i:1
authentication level:i:2
prompt for credentials:i:0
negotiate security layer:i:1
remoteapplicationmode:i:0
alternate shell:s:
shell working directory:s:
gatewayhostname:s:
gatewayusagemethod:i:4
gatewaycredentialssource:i:4
gatewayprofileusagemethod:i:0
promptcredentialonce:i:0
gatewaybrokeringtype:i:0
use redirection server name:i:0
rdgiskdcproxy:i:0
kdcproxyname:s:
username:s:{USERNAME}
`;
