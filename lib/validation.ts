export const validation = {
	// IPv4 validation
	isValidIPv4: (ip: string): boolean => {
		const ipv4Regex = /^(25[0-5]|2[0-4]\d|1\d{2}|\d{1,2})\.(25[0-5]|2[0-4]\d|1\d{2}|\d{1,2})\.(25[0-5]|2[0-4]\d|1\d{2}|\d{1,2})\.(25[0-5]|2[0-4]\d|1\d{2}|\d{1,2})$/;
		if (!ipv4Regex.test(ip)) return false;

		return ip.split('.').every((octet) => {
			const num = parseInt(octet);
			return num >= 0 && num <= 255;
		});
	},

	// IPv6 validation
	isValidIPv6: (ip: string): boolean => {
		const ipv6Regex = /^(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}$/i;
		return ipv6Regex.test(ip);
	},

	// Hostname validation according to RFC 1123
	isValidHostname: (hostname: string): boolean => {
		// Hostname max length is 253 characters
		if (hostname.length > 253) return false;

		// Hostname regex following RFC 1123
		const hostnameRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		if (!hostnameRegex.test(hostname)) return false;

		// Check individual label lengths
		const labels = hostname.split('.');
		if (labels.some(label => label.length > 63)) return false;

		return true;
	},

	// Combined validation for IP or hostname
	isValidHostnameOrIP: (value: string): boolean => {
		return validation.isValidIPv4(value)
			|| validation.isValidIPv6(value)
			|| validation.isValidHostname(value);
	},
};
