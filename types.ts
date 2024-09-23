export interface ILoginInput {
	username: string;
	password: string;
	remember_me: string;
}
export interface UpdateSummary {
	title: string;
	description: string;
	reboot_required: boolean;
	is_security_update: boolean;
}
export interface UpdatesStatus {
	refreshed: Date;
	updates_available: number;
	security_updates_available: number;
	update_summaries: UpdateSummary[];
	reboot_pending: boolean;
}
export interface ClientAuth {
	id: string;
	password: string;
}

export interface ClientAuthResponse {
	data: ClientAuth[];
	meta: Meta;
}
export interface Client {
	id: string;
	name: string;
	address?: string;
	hostname?: string;
	os: string;
	os_full_name: string;
	os_version?: string;
	os_arch?: string;
	os_family: string;
	os_kernel: string;
	os_virtualization_system?: string;
	os_virtualization_role?: string;
	num_cpus?: number;
	cpu_family?: string;
	cpu_model?: string;
	cpu_model_name?: string;
	cpu_vendor?: string;
	mem_total?: number;
	timezone?: string;
	client_auth_id?: string;
	version?: string;
	disconnected_at: null;
	last_heartbeat_at?: Date;
	connection_state?: string;
	ipv4: string[];
	ipv6?: string[];
	tags: any[];
	allowed_user_groups?: null;
	tunnels?: any[];
	updates_status?: UpdatesStatus;
	client_configuration?: any;
	groups?: any[];
	labels?: any;
}
export interface ClientMetric {
	cpu_usage_percent: number;
	io_usage_percent: number;
	memory_usage_percent: number;
	timestamp: string;
}

export interface ClientMountpoint {
	mountpoints: any;
	timestamp: string;
}
export interface Meta {
	count: number;
}
export interface ClientsResponse {
	data: Client[];
	meta: Meta;
}
export interface ClientMetricsResponse {
	data: ClientMetric[];
	meta: Meta;
}
export interface ClientMountpointsResponse {
	data: ClientMountpoint;
	meta: Meta;
}
export interface ClientGroup {
	id: string;
	description: string;
	num_clients: number;
	clients_ids?: string[];
	params?: any;
	allowed_user_groups?: string[];
}
export interface ClientGroupResponse {
	data: ClientGroup[];
	meta: Meta;
}

export interface ClientResponse {
	data: Client;
}
export interface ServerStatus {
	auditlog: object;
	auth_header: boolean;
	caddy_integration_enabled: boolean;
	clients_auth_mode: string;
	clients_auth_source: string;
	clients_connected: number;
	clients_disconnected: number;
	connect_url: Array<string>;
	excluded_ports: Array<string>;
	fingerprint: string;
	group_permissions_enabled: boolean;
	monitoring_enabled: boolean;
	pairing_url: string;
	tunnel_host: string;
	tunnel_proxy_enabled: boolean;
	two_fa_delivery_method: string;
	two_fa_enabled: boolean;
	used_ports: Array<string>;
	users_auth_source: string;
	version: string;
}
export interface TwoFa {
	send_to: string;
	delivery_method: string;
	totp_key_status: string;
}
export interface ApiLoginResponse {
	data: ILoginResponse;
}
export interface ILoginResponse {
	token: string;
	two_fa: TwoFa;
}
export interface ProfileResponse {
	data: Profile;
}
export interface Profile {
	username: string;
	password_expired: boolean;
	groups: string[];
	two_fa_send_to: string;
	effective_user_permissions: Permissions;
	group_permissions_enabled: boolean;
}
export interface UserListResponse {
	data: User[];
}
export interface Permissions {
	commands: boolean;
	monitoring: boolean;
	scheduler: boolean;
	scripts: boolean;
	tunnels: boolean;
	uploads: boolean;
	vault: boolean;
	auditlog: boolean;
}
export interface EffectiveExtendedPermissions {
	tunnels_restricted: object;
	commands_restricted: object;
}
export interface User {
	username: string;
	password_expired: boolean;
	groups: string[];
	two_fa_send_to: string;
	effective_user_permissions: Permissions;
	effective_extended_permissions: EffectiveExtendedPermissions;
}

export interface UserPayload {
	username: string;
	groups: string[];
	password: string;
}

export interface UserGroup {
	name: string;
	permissions: Permissions;
}

export interface UserGroupResponse {
	data: UserGroup[];
}

export interface Status {
	auditlog: Auditlog;
	auth_header: boolean;
	caddy_integration_enabled: boolean;
	clients_auth_mode: string;
	clients_auth_source: string;
	clients_connected: number;
	clients_disconnected: number;
	connect_url: string[];
	excluded_ports: string[];
	fingerprint: string;
	group_permissions_enabled: boolean;
	monitoring_enabled: boolean;
	pairing_url: string;
	tunnel_host: string;
	tunnel_proxy_enabled: boolean;
	two_fa_delivery_method: string;
	two_fa_enabled: boolean;
	used_ports: string[];
	users_auth_source: string;
	version: string;
}

export interface Auditlog {
	enabled: boolean;
	rotation: string;
}
export interface StatusResponse {
	data: Status;
}
export interface Tunnel {
	name: string;
	protocol: string;
	lhost: string;
	lport: string;
	lport_random: boolean;
	rhost: string;
	rport: string;
	scheme: string;
	acl: string;
	idle_timeout_minutes: number;
	auto_close: number;
	http_proxy: boolean;
	host_header: string;
	auth_user: string;
	auth_password: string;
	tunnel_url: string;
	id: string;
	client_id: string;
	created_at: Date;
}
export interface TunnelFurtherOptions {
	'idle-timeout-minutes': number;
	'is_service_forwarding': boolean;
	'protocol': string;
}
export interface StoredTunnel {
	id: string;
	name: string;
	acl: string;
	created_at: Date;
	public_port: number;
	remote_ip: string;
	remote_port: number;
	scheme: string;
	further_options: TunnelFurtherOptions;
}

export interface TunnelResponse {
	data: Tunnel[];
}

export interface StoredTunnelResponse {
	data: StoredTunnel[];
	meta: Meta;
}

export interface AuditLog {
	timestamp: Date;
	username: string;
	remote_ip: string;
	application: string;
	action: string;
	affected_id: string;
	client_id: string;
	client_hostname: string;
	request: string;
	response: string;
}
export interface AuditLogResponse {
	data: AuditLog[];
	meta: Meta;
}

export interface FilePayload {
	upload: string;
	client_id: string;
	group_id?: string;
	tags?: any;
	dest: string;
	force: string;
	sync: string;
	mode: string;
	user: string;
	group: string;
}
