<template>
	<div class="px-3 pt-16">
		<form @submit="handleSubmit">
			<div class="flex flex-col gap-y-8">
				<div
					class="flex flex-1 flex-col divide-y divide-slate-50 overflow-hidden rounded-lg bg-white shadow dark:divide-slate-700 dark:bg-slate-900"
				>
					<TunnelFormHeader @cancel="tunnelStore.closeAddTunnel()" />
					<div class="flex-1 px-4 py-5 text-slate-950 dark:text-slate-50 sm:p-6">
						<div class="h-full w-full">
							<div class="px-4 py-6">
								<FormSection
									title="Service to access on theremote site"
									number="1"
								>
									<div class="grid-cols-3 grid gap-2">
										<div class="col-span-2">
											<div class="relative mt-1 flex w-full flex-col">
												<select
													v-model="formState.service"
													class="primary focus:border-1 peer order-2 block h-10 w-full rounded border-theme-border bg-transparent shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
												>
													<option
														disabled=""
														hidden=""
														value=""
													/>
													<option
														v-for="option in TUNNEL_OPTIONS"
														:key="option.id"
														:value="option.id"
													>
														{{ option.label }}
													</option>
												</select><label
													class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-medium"
												>Select a service</label>
											</div><!----><!---->
										</div>
										<div
											class="grid gap-2"
											:class="formState.service === 'other' || formState.service === 'forwarding' ? 'grid-cols-2' : 'grid-cols-1'"
										>
											<div v-if="formState.service === 'other'">
												<div class="relative mt-1 flex w-full flex-col">
													<select
														id="Kz5gjthDsT"
														v-model="formState.protocol"
														class="primary focus:border-1 peer order-2 block h-10 w-full rounded border-theme-border bg-transparent shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
													>
														<option
															disabled=""
															hidden=""
															value=""
														/>
														<option value="tcp">
															TCP
														</option>
														<option value="udp">
															UDP
														</option>
														<option value="tcp+udp">
															TCP + UDP
														</option>
													</select>
													<label
														class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary order-1 text-sm font-medium"
														for="Kz5gjthDsT"
													>Protocol</label>
												</div><!----><!---->
											</div>
											<div v-if="formState.service === 'forwarding'">
												<div class="relative mt-1 flex w-full flex-col">
													<select
														id="GnYHBlJMkN"
														v-model="formState.forwardingService"
														class="primary focus:border-1 peer order-2 block h-10 w-full rounded border-theme-border bg-transparent shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
													>
														<option
															disabled=""
															hidden=""
															value=""
														/>
														<option
															v-for="option in TUNNEL_OPTIONS.filter((item) => item.id !== 'forwarding')"
															:key="option.id"
															:value="option.id"
														>
															{{ option.label }}
														</option>
													</select>
													<label
														class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary order-1 text-sm font-medium"
														for="GnYHBlJMkN"
													>Select a service</label>
												</div><!----><!---->
											</div>
											<div class="flex flex-col">
												<div class="relative mt-1 flex w-full flex-col">
													<input
														id="ylrgHFl5sf"
														v-model="formState.port"
														class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
														placeholder=" "
														type="number"
														autocomplete="off"
													><label
														class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
														for="ylrgHFl5sf"
													>Port</label>
												</div><!----><!---->
											</div>
										</div>
									</div>
									<div class="mt-2 grid grid-cols-3 gap-2">
										<div class="col-span-2 flex items-start justify-between">
											<div class="mr-5 pt-9">
												<div class="flex flex-col">
													<label
														class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label"
													><input
														v-model="formState.storeInLibrary"
														type="checkbox"
														class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
													>Store
														in library for later re-use</label><!---->
												</div>
											</div>
											<div
												v-if="formState.storeInLibrary"
												class="flex flex-col flex flex-1"
											>
												<div class="relative mt-1 flex w-full flex-col">
													<input
														id="H1aqUNVHq0"
														v-model="formState.name"
														class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
														:class="formState.name?.length === 0 ? 'error' : ''"
														placeholder=" "
														type="text"
														autocomplete="off"
													>
													<label
														class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
														for="H1aqUNVHq0"
													>Name or hint</label>
												</div>
												<p
													v-if="formState.name?.length === 0"
													class="mt-1 pl-1 text-sm text-red-500"
												>
													Name or hint is required
												</p><!---->
											</div>
										</div>
										<div
											v-if="formState.service === 'forwarding'"
											class="flex items-start justify-between"
										>
											<div class="flex flex-col">
												<div class="relative mt-1 flex w-full flex-col">
													<input
														id="VnwXpFNc5z"
														v-model="formState.forwardDestination"
														class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
														:class="forwardingError ? 'error' : ''"
														placeholder=" "
														type="text"
														autocomplete="off"
													><label
														class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
														for="VnwXpFNc5z"
													>Destination IP / Hostname</label>
												</div>
												<p
													v-if="forwardingError"
													class="mt-1 pl-1 text-sm text-red-500"
												>
													Invalid IP or hostname
												</p>
												<!---->
											</div><a
												href="https://kb.rport.io/using-the-remote-access/creating-tunnels#service-forwardings"
												class="primary-text mt-9 text-sm underline"
												target="_blank"
											> Learn more </a>
										</div>
									</div>
									<div
										v-if="formState.service === 'rdp'"
										class="mt-1 grid grid-cols-3 items-center gap-2"
									>
										<div class="flex flex-col col-span-2 mr-8 mt-6">
											<label class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label">
												<input
													type="checkbox"
													class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
												>Enable RDP via browser</label><!---->
										</div>
										<a
											href="https://kb.openrport.io/using-the-remote-access/creating-tunnels/rdp-via-browser"
											class="primary-text mt-6 text-sm underline"
											target="_blank"
										> Learn more about RDP via browser </a>
									</div>
									<div
										v-if="formState.service === 'vnc'"
										class="mt-1 grid grid-cols-3 items-center gap-2"
									>
										<div class="flex flex-col col-span-2 mr-8 mt-6">
											<label class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label"><input
												type="checkbox"
												class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
											>Enable NoVNC (VNC via Browser)</label><!---->
										</div><a
											href="https://kb.rport.io/using-the-remote-access/creating-tunnels/vnc-via-browser"
											class="primary-text mt-6 text-sm underline"
											target="_blank"
										> Learn more about the NoVNC Integration </a>
									</div>
									<div
										v-if="formState.service === 'realvnc'"
										class="mt-1 grid items-center justify-end gap-2"
									>
										<a
											href="https://kb.rport.io/using-the-remote-access/creating-tunnels/vnc-via-realvnc"
											class="primary-text mt-6 text-sm underline"
											target="_blank"
										> Learn more about the RealVNC® integration </a>
									</div>
									<div
										v-if="formState.service === 'http' || formState.service === 'https'"
										class="mt-1"
									>
										<div class="grid grid-cols-4 gap-2">
											<div class="flex flex-col mt-6">
												<label class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label">
													<input
														v-model="formState.http_proxy"
														type="checkbox"
														class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
													>Enable HTTP Reverse Proxy</label><!---->
											</div>
											<div
												v-if="formState.http_proxy"
												class="flex flex-col"
											>
												<div class="relative mt-1 flex w-full flex-col">
													<input
														id="0aEBi1Nb70"
														v-model="formState.host_header"
														class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
														placeholder=" "
														type="text"
														autocomplete="off"
													><label
														class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
														for="0aEBi1Nb70"
													>Overwrite Host-Header to</label>
												</div><!----><!---->
											</div>
											<div
												v-if="formState.http_proxy"
												class="flex flex-col"
											>
												<div class="relative mt-1 flex w-full flex-col">
													<input
														id="lXXYwJIK67"
														v-model="formState.auth_user"
														class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
														placeholder=" "
														type="text"
														autocomplete="off"
													><label
														class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
														for="lXXYwJIK67"
													>Require username</label>
												</div><!----><!---->
											</div>
											<div
												v-if="formState.http_proxy"
												class="flex flex-col"
											>
												<div class="relative mt-1 flex w-full flex-col">
													<input
														id="h9Uloe2fyp"
														v-model="formState.auth_password"
														class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
														placeholder=" "
														type="password"
														autocomplete="off"
													><label
														class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
														for="h9Uloe2fyp"
													>Require password</label>
												</div><!----><!---->
											</div>
										</div><div class="mt-6">
											<a
												href="https://kb.rport.io/using-the-remote-access/creating-tunnels#built-in-http-reverse-proxy"
												class="primary-text text-sm underline"
												target="_blank"
											> Learn more about the HTTP reverse proxy </a>
										</div>
									</div>
									<!---->
								</FormSection>
								<FormSection
									title="Public Port"
									number="2"
								>
									<div class="grid grid-cols-3 gap-2">
										<div class="col-span-2">
											<div class="relative mt-1 flex w-full flex-col">
												<select
													id="j98xCvnmDA"
													v-model="formState.lport_random"
													class="primary focus:border-1 peer order-2 block h-10 w-full rounded border-theme-border bg-transparent shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
												>
													<option
														disabled=""
														hidden=""
														value=""
													/>
													<option value="random">
														Random free port
													</option>
													<option value="specify">
														Specific port
													</option>
												</select><label
													class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary order-1 text-sm font-medium"
													for="j98xCvnmDA"
												>Select a port</label>
											</div>
											<p
												v-if="formState.lport_random === 'specify'"
												class="mt-1 pl-1 text-sm text-gray-500"
											>
												Allowed public ports: 20000-30000 with 1-1024 excluded.
											</p>
											<!---->
										</div>
										<div
											v-if="formState.lport_random === 'specify'"
											class="flex flex-col"
										>
											<div class="relative mt-1 flex w-full flex-col">
												<input
													id="f0EHciUkRI"
													v-model="formState.lport"
													class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
													:class="{ error: lportError }"
													placeholder=" "
													type="number"
													autocomplete="off"
												><label
													class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
													for="f0EHciUkRI"
												>Port</label>
											</div>
											<p
												v-if="lportError"
												class="mt-1 pl-1 text-sm text-red-500"
											>
												{{ lportErrorMessage }}
											</p>
											<!---->
										</div>
									</div><!---->
								</FormSection>

								<FormSection
									title="ACL, who is allowed to use the tunnel"
									number="3"
								>
									<div class="grid grid-cols-3 gap-2">
										<div class="col-span-2">
											<div class="relative mt-1 flex w-full flex-col">
												<select
													id="DQwQIB4Yu3"
													v-model="formState.acl_model"
													class="primary focus:border-1 peer order-2 block h-10 w-full rounded border-theme-border bg-transparent shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
												>
													<option
														disabled=""
														hidden=""
														value=""
													/>
													<option value="current">
														Only my current IP address
													</option>
													<option value="specific">
														Specific network range
													</option>
													<option value="anyone">
														No restrictions (anyone can access)
													</option>
												</select>
												<label
													class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary order-1 text-sm font-medium"
													for="DQwQIB4Yu3"
												>Select an ACL</label>
											</div><!----><!---->
										</div>
										<div
											v-if="formState.acl_model === 'current'"
											class="opacity-50 flex flex-col"
										>
											<div class="relative mt-1 flex w-full flex-col">
												<input
													id="phyGwyytY6"
													v-model="formState.acl"
													class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
													placeholder=" "
													readonly=""
													type="text"
													autocomplete="off"
												><label
													class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
													for="phyGwyytY6"
												>IP Address</label>
											</div>
										</div>
										<div
											v-else-if="formState.acl_model == 'specific'"
											class="flex"
										>
											<div class="flex flex-col flex-1">
												<div class="relative mt-1 flex w-full flex-col">
													<input
														id="QjW3A9fc9B"
														v-model="formState.acl"
														class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
														placeholder=" "
														type="text"
														autocomplete="off"
													><label
														class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
														for="QjW3A9fc9B"
													>Network Range</label>
												</div><!----><!---->
											</div>
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger as-child>
														<div class="inline-flex w-max cursor-pointer">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="24px"
																height="24px"
																viewBox="0 0 24 24"
																class="icon primary-text ml-2 mt-9 cursor-pointer"
															><path
																fill="currentColor"
																d="M11 18h2v-2h-2v2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-14a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2a2 2 0 0 1 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4Z"
															/></svg>
														</div>
													</TooltipTrigger>
													<TooltipContent class="bg-gray-600 text-white">
														Use CIDR notation, multiple ranges separated by comma.
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</div>
										<div
											v-else-if="formState.acl_model === 'anyone'"
											class="flex flex-col ml-2 mt-7"
										>
											<label class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label">
												<input
													v-model="formState.acl_risk"
													type="checkbox"
													class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
												>I am aware of the risk! (Please confirm)</label>
											<p
												v-if="!formState.acl_risk"
												class="mt-1 pl-1 text-sm text-red-500"
											>
												Risk aware is required
											</p>
										</div>
										<!---->
										<!----><!---->
									</div><!----><!---->
								</FormSection>

								<FormSection
									title="Further options"
									number="4"
								>
									<div class="grid grid-cols-3 gap-2">
										<div class="col-span-2 grid grid-cols-4 gap-2">
											<div class="flex flex-col col-span-3 mt-6">
												<label
													class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label"
												>
													<input
														v-model="formState.skip_idle_timeout"
														type="checkbox"
														class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
													>Close
													tunnel after inactivity of</label><!---->
											</div>
											<div
												:class="{ 'opacity-50': !formState.skip_idle_timeout }"
												class="flex flex-col"
											>
												<div class="relative mt-1 flex w-full flex-col">
													<input
														id="VHShsDa9Lv"
														v-model="formState.idle_timeout_minutes"
														class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
														placeholder=" "
														type="number"
														:readonly="!formState.skip_idle_timeout"
														autocomplete="off"
													><label
														class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
														for="VHShsDa9Lv"
													>Minutes</label>
												</div><!----><!---->
											</div>
										</div>
									</div>
									<div class="grid grid-cols-3 gap-2">
										<div class="col-span-2 grid grid-cols-4 gap-2">
											<div class="flex flex-col col-span-2 mt-6">
												<label
													class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label"
												><input
													v-model="formState.autoclose_enable"
													type="checkbox"
													class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
												>Destroy
													tunnel after</label><!---->
											</div>
											<div
												:class="{ 'opacity-50': !formState.autoclose_enable }"
												class="flex flex-col"
											>
												<div class="relative mt-1 flex w-full flex-col">
													<input
														id="BcEkEe6Wuw"
														v-model="formState.autoclose_hour"
														class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
														placeholder=" "
														:readonly="!formState.autoclose_enable"
														type="number"
														autocomplete="off"
													><label
														class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
														for="BcEkEe6Wuw"
													>Hours</label>
												</div><!----><!---->
											</div>
											<div
												:class="{ 'opacity-50': !formState.autoclose_enable }"
												class="lex flex-col"
											>
												<div class="relative mt-1 flex w-full flex-col">
													<input
														id="fNg7mYStCA"
														v-model="formState.autoclose_minute"
														class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
														placeholder=" "
														:readonly="!formState.autoclose_enable"
														type="number"
														autocomplete="off"
													><label
														class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
														for="fNg7mYStCA"
													>Minutes</label>
												</div><!----><!---->
											</div>
										</div>
									</div>
								</FormSection>
							</div>
						</div>
					</div><!---->
				</div>
				<div class="flex w-full items-center justify-end">
					<button
						class="bg-vtd-primary-500 hover:bg-vtd-primary-700 focus-visible:outline-vtd-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
						type="submit"
					>
						<span
							v-if="isLoading"
							class="absolute inset-0 flex items-center justify-center rounded-md bg-gray-300/10 backdrop-blur-sm"
						><svg

							xmlns="http://www.w3.org/2000/svg"
							width="24px"
							height="24px"
							viewBox="0 0 24 24"
							class="icon text-white mr-2 animate-spin"
						><path
							fill="currentColor"
							d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
							opacity=".25"
						/><path
							fill="currentColor"
							d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
						><animateTransform
							attributeName="transform"
							dur="0.75s"
							repeatCount="indefinite"
							type="rotate"
							values="0 12 12;360 12 12"
						/></path></svg></span>
						<!---->
						<span class="flex items-center justify-center gap-x-2"><!----> Add Tunnel </span>
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
import { TUNNEL_OPTIONS } from '~/constants';
import TunnelFormHeader from '~/components/tunnels/TunnelFormHeader.vue';
import FormSection from '~/components/tunnels/FormSection.vue';
import { useTunnelForm } from '~/composables/tunnels/useTunnelForm';

const tunnelStore = useTunnelStore();

const props = defineProps({
	device: {
		type: Object,
		required: true,
	},
});
const {
	formState,
	lportError,
	lportErrorMessage,
	forwardingError,
	isLoading,
	handleSubmit,
} = useTunnelForm(props.device);
</script>
