export interface InventoryColumn {
	key: string;
	label: string;
	align?: 'left' | 'center';
	// Shown in "More Filters" when the column is visible; client and ips map to combined API filters
	filterable: boolean;
	enabledByDefault: boolean;
}

// Same columns, labels and defaults as the reference inventory table
export const INVENTORY_COLUMNS: InventoryColumn[] = [
	{ key: 'connection_state', label: 'Connection State', filterable: false, enabledByDefault: false },
	{ key: 'name', label: 'Name', filterable: true, enabledByDefault: false },
	{ key: 'client', label: 'Client', filterable: true, enabledByDefault: true },
	{ key: 'id', label: 'ID', filterable: true, enabledByDefault: true },
	{ key: 'os', label: 'OS', filterable: true, enabledByDefault: true },
	{ key: 'os_arch', label: 'OS Arch.', filterable: true, enabledByDefault: false },
	{ key: 'os_family', label: 'OS Family', filterable: true, enabledByDefault: false },
	{ key: 'os_full_name', label: 'OS Full Name', filterable: true, enabledByDefault: false },
	{ key: 'os_kernel', label: 'OS Kernel', filterable: true, enabledByDefault: false },
	{ key: 'os_version', label: 'OS Version', filterable: true, enabledByDefault: false },
	{ key: 'os_virtualization_role', label: 'OS Virt. Role', filterable: true, enabledByDefault: false },
	{ key: 'cpu_family', label: 'CPU Family', filterable: true, enabledByDefault: false },
	{ key: 'cpu_model', label: 'CPU Model', filterable: true, enabledByDefault: false },
	{ key: 'cpu_model_name', label: 'CPU Model Name', filterable: true, enabledByDefault: false },
	{ key: 'cpu_vendor', label: 'CPU Vendor', filterable: true, enabledByDefault: false },
	{ key: 'num_cpus', label: 'No. of CPUs', filterable: true, enabledByDefault: false },
	{ key: 'mem_total', label: 'Memory', filterable: true, enabledByDefault: false },
	{ key: 'ips', label: 'IPs', filterable: true, enabledByDefault: true },
	{ key: 'ipv4', label: 'IPv4', filterable: true, enabledByDefault: true },
	{ key: 'ipv6', label: 'IPv6', filterable: true, enabledByDefault: false },
	{ key: 'version', label: 'Client Version', filterable: true, enabledByDefault: true },
	{ key: 'tags', label: 'Tags', filterable: true, enabledByDefault: false },
	{ key: 'updates', label: 'Updates', align: 'center', filterable: false, enabledByDefault: true },
	{ key: 'security_updates', label: 'Security Updates', align: 'center', filterable: false, enabledByDefault: true },
	{ key: 'groups', label: 'Client groups', align: 'center', filterable: true, enabledByDefault: false },
];

export const INVENTORY_FIELDS = 'id,name,os,os_arch,os_family,os_kernel,os_full_name,os_version,os_virtualization_system,os_virtualization_role,cpu_family,cpu_model,cpu_model_name,cpu_vendor,num_cpus,mem_total,timezone,hostname,ipv4,ipv6,tags,version,address,tunnels,disconnected_at,client_auth_id,allowed_user_groups,updates_status,connection_state,groups';

// Column filters become prefix matches; "client" searches name and address, "ips" both IP families
export const inventoryFilterParams = (filters: Record<string, string>) => Object.entries(filters)
	.filter(([, value]) => value?.trim())
	.map(([key, value]) => {
		const column = { client: 'name|address', ips: 'ipv4|ipv6' }[key] || key;
		return `filter[${column}]=${encodeURIComponent(`${value.trim()}*`)}`;
	});

// Kept for the session (like the reference store) so the table keeps its columns when navigating away and back
export const useInventoryColumns = () => useState<string[]>(
	'inventory-columns',
	() => INVENTORY_COLUMNS.filter(column => column.enabledByDefault).map(column => column.key),
);
