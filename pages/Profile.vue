<template>
	<new-page-wrapper is-extra="true">
		<div class="flex flex-1 xl:overflow-hidden">
			<new-settings-sidebar />
			<div class="scrollbar-hide max-h-screen flex-1 xl:overflow-y-auto">
				<div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
					<form>
						<div class="relative z-20 flex h-16 items-center justify-between">
							<div class="">
								<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
									Profile
								</h3>
								<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
&nbsp;
								</p>
							</div>
							<div class="flex-1" />
							<div class="ml-2 flex-shrink-0">
								<button
									class="bg-primary-500 hover:bg-primary-800 focus-visible:outline-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
									type="button"
								>
									<!----><!----><span
										class="flex items-center justify-center gap-x-2"
									><!----> Reload</span>
								</button>
								<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
&nbsp;
								</p>
							</div>
						</div><!---->
						<div class="flex flex-col gap-y-8">
							<div
								class="flex flex-1 flex-col divide-y divide-gray-50 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-900"
							>
								<div class="px-4 py-4 sm:flex sm:items-center sm:px-6">
									<div class="flex max-h-16 flex-1 content-center items-center">
										<h3 class="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50">
											Update profile info
										</h3>
										<p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-500" />
									</div><!---->
								</div>
								<div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
									<div class="h-full w-full">
										<div class="opacity-50 flex flex-col mt-8">
											<div class="relative mt-1 flex w-full flex-col">
												<input
													id="1dIVMpzYO6"
													class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
													placeholder=" "
													readonly=""
													type="text"
													autocomplete="off"
												><label
													class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
													for="1dIVMpzYO6"
												>Username</label>
											</div><!---->
											<p class="mt-1 pl-1 text-sm text-theme-inverted">
												The username field is not
												editable
											</p>
										</div>
										<div class="flex flex-col mt-4">
											<div class="relative mt-1 flex w-full flex-col">
												<input
													id="CSNl6oSWY5"
													class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
													placeholder=" "
													type="text"
													autocomplete="off"
												><label
													class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
													for="CSNl6oSWY5"
												>Two-factor send to</label>
											</div><!----><!---->
										</div>
										<div class="flex flex-col py-6">
											<label
												class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label"
											><input
												type="checkbox"
												class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
											>Change
												password</label><!---->
										</div>
									</div>
								</div><!---->
							</div><!---->
						</div>
					</form>
					<div class="mt-8 pb-8">
						<form>
							<div class="relative z-20 flex h-16 items-center justify-between">
								<div class="">
									<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
										Settings
									</h3>
									<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
&nbsp;
									</p>
								</div>
								<div class="flex-1" />
								<div class="ml-2 flex-shrink-0">
									<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
&nbsp;
									</p>
								</div>
							</div><!---->
							<div class="flex flex-col gap-y-8">
								<div
									class="flex flex-1 flex-col divide-y divide-gray-50 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-900"
								>
									<div class="px-4 py-4 sm:flex sm:items-center sm:px-6">
										<div class="flex max-h-16 flex-1 content-center items-center">
											<h3 class="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50">
												General
											</h3>
											<p
												class="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-500"
											/>
										</div><!---->
									</div>
									<div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
										<div class="h-full w-full">
											<div class="mt-4">
												<div class="relative mt-1 flex w-full flex-col">
													<select
														id="zKC0s1Gc1T"
														class="primary focus:border-1 peer order-2 block h-10 w-full rounded border-theme-border bg-transparent shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
													>
														<option
															disabled=""
															hidden=""
															value=""
														/>
														<option value="Light">
															Light
														</option>
														<option value="Dark">
															Dark
														</option>
													</select><label
														class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary order-1 text-sm font-medium"
														for="zKC0s1Gc1T"
													>Selected theme</label>
												</div><!----><!---->
											</div>
											<div>
												<div class="mt-4">
													<div class="relative mt-1 flex w-full flex-col">
														<select
															id="uDMB3DAEKQ"
															class="primary focus:border-1 peer order-2 block h-10 w-full rounded border-theme-border bg-transparent shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
															disabled=""
														>
															<option
																disabled=""
																hidden=""
																value=""
															/>
															<option value="true">
																Yes
															</option>
															<option value="false">
																No
															</option>
														</select><label
															class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary order-1 text-sm font-medium"
															for="uDMB3DAEKQ"
														>Use Secure Shell Extension for
															Chrome</label>
													</div><!----><!---->
												</div>
												<div
													class="flex items-center justify-between space-x-0.5 pl-1 pt-1 text-sm text-gray-500"
												>
													<div>
														<span>Launch SSH connections directly in your
															browser.</span><span class="w-1 shrink-0">&nbsp;</span><a
															href="https://chrome.google.com/webstore/detail/secure-shell-app/iodihamcpbpeioajjeobimgagajmlibd"
															class="primary"
															target="_blank"
														>Requires the Secure Shell
															extension for Chrome. </a>
													</div>
													<div class="flex-1" /><button
														class="bg-primary-500 hover:bg-primary-800 focus-visible:outline-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
														type="button"
													>
														<!----><!----><span
															class="flex items-center justify-center gap-x-2"
														><!----><a
															href="https://chrome.google.com/webstore/detail/secure-shell-app/iodihamcpbpeioajjeobimgagajmlibd"
															target="_blank"
														> Install Now</a></span>
													</button>
												</div>
											</div>
											<div
												class="flex flex-col mt-4"
												modelmodifiers="[object Object]"
											>
												<div class="relative mt-1 flex w-full flex-col">
													<input
														id="lXseOVzBfm"
														class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
														placeholder=" "
														type="number"
														autocomplete="off"
													><label
														class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
														for="lXseOVzBfm"
													>Command history max entries</label>
												</div>
												<!---->
												<p class="mt-1 pl-1 text-sm text-theme-inverted">
													0 - 200
												</p>
											</div>
										</div>
									</div><!---->
								</div>
								<div
									class="flex flex-1 flex-col divide-y divide-gray-50 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-900"
								>
									<div class="px-4 py-4 sm:flex sm:items-center sm:px-6">
										<div class="flex max-h-16 flex-1 content-center items-center">
											<h3 class="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50">
												RDP
											</h3>
											<p
												class="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-500"
											/>
										</div><!---->
									</div>
									<div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
										<div class="h-full w-full">
											<div class="mt-4">
												<div class="relative mt-1 flex w-full flex-col">
													<select
														id="KXSJoJIuLz"
														class="primary focus:border-1 peer order-2 block h-10 w-full rounded border-theme-border bg-transparent shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
													>
														<option
															disabled=""
															hidden=""
															value=""
														/>
														<option value="microsoft_remote_desktop">
															Microsoft Remote
															Desktop via RDP file download (Win &amp; Mac)
														</option>
														<option value="schema_link">
															Open a rdp:// schema link (Linux
															&amp; FreeRDP, custom scripts)
														</option>
													</select><label
														class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary order-1 text-sm font-medium"
														for="KXSJoJIuLz"
													>Open non-browser-based RDP connections
														with</label>
												</div><!----><!---->
											</div>
											<div class="mt-4 grid grid-cols-2 gap-4">
												<div modelmodifiers="[object Object]">
													<div class="relative mt-1 flex w-full flex-col">
														<select
															id="LtPRgDEHkP"
															class="primary focus:border-1 peer order-2 block h-10 w-full rounded border-theme-border bg-transparent shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
														>
															<option
																disabled=""
																hidden=""
																value=""
															/>
															<option value="960">
																960
															</option>
															<option value="1024">
																1024
															</option>
															<option value="1280">
																1280
															</option>
														</select><label
															class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary order-1 text-sm font-medium"
															for="LtPRgDEHkP"
														>Preferred window width for RDP
															connections</label>
													</div><!----><!---->
												</div>
												<div modelmodifiers="[object Object]">
													<div class="relative mt-1 flex w-full flex-col">
														<select
															id="mR1ssRdYGd"
															class="primary focus:border-1 peer order-2 block h-10 w-full rounded border-theme-border bg-transparent shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
														>
															<option
																disabled=""
																hidden=""
																value=""
															/>
															<option value="720">
																720
															</option>
															<option value="768">
																768
															</option>
															<option value="960">
																960
															</option>
														</select><label
															class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary order-1 text-sm font-medium"
															for="mR1ssRdYGd"
														>Preferred window height for RDP
															connections</label>
													</div><!----><!---->
												</div>
											</div>
											<div class="flex flex-col mt-4">
												<div class="relative mt-1 flex w-full flex-col">
													<input
														id="liTVvYrv39"
														class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
														placeholder=" "
														type="text"
														autocomplete="off"
													><label
														class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
														for="liTVvYrv39"
													>Default RDP username</label>
												</div>
												<!----><!---->
											</div>
											<div class="mt-4">
												<div class="relative mt-1 flex w-full flex-col">
													<select
														id="dvmVMJe2id"
														class="primary focus:border-1 peer order-2 block h-10 w-full rounded border-theme-border bg-transparent shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
													>
														<option
															disabled=""
															hidden=""
															value=""
														/>
														<option value="pt-br-qwerty">
															Brazilian (Portuguese)
														</option>
														<option value="en-gb-qwerty">
															English (UK)
														</option>
														<option value="en-us-qwerty">
															English (US)
														</option>
														<option value="fr-fr-azerty">
															French
														</option>
														<option value="fr-be-azerty">
															French (Belgian)
														</option>
														<option value="fr-ch-qwertz">
															French (Swiss)
														</option>
														<option value="de-de-qwertz">
															German
														</option>
														<option value="de-ch-qwertz">
															German (Swiss)
														</option>
														<option value="hu-hu-qwertz">
															Hungarian
														</option>
														<option value="it-it-qwerty">
															Italian
														</option>
														<option value="ja-jp-qwerty">
															Japanese
														</option>
														<option value="no-no-qwerty">
															Norwegian
														</option>
														<option value="es-es-qwerty">
															Spanish
														</option>
														<option value="es-latam-qwerty">
															Spanish (Latin American)
														</option>
														<option value="tr-tr-qwerty">
															Turkish-Q
														</option>
													</select><label
														class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary order-1 text-sm font-medium"
														for="dvmVMJe2id"
													>Local keyboard layout for browser-based
														RDP</label>
												</div><!----><!---->
											</div>
											<div class="mt-4">
												<button
													class="bg-primary-500 hover:bg-primary-800 focus-visible:outline-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
													type="button"
												>
													<!----><!----><span
														class="flex items-center justify-center gap-x-2"
													><!----> Edit
														the RDP File Template</span>
												</button>
											</div>
										</div>
									</div><!---->
								</div>
								<div class="flex w-full items-center justify-end">
									<button
										class="bg-primary-500 hover:bg-primary-800 focus-visible:outline-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
										type="submit"
									>
										<!----><!----><span
											class="flex items-center justify-center gap-x-2"
										><!----> Save
											settings</span>
									</button>
								</div>
							</div>
						</form><!---->
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="container mt-4">
            <page-header title="Profile" hasAction={true} actionName="Reload" />
            <div class="card ">
                <div class="card-body">
                    <h3 class="card-title">Update profile info</h3>
                    <div class="mb-3">
                        <label class="form-label">Username</label>
                        <input disabled type="text" :value="profile.username" class="form-control"
                            name="example-text-input" placeholder="Input placeholder" />
                    </div>
                    <div v-if="two_fa?.send_to !== undefined" class="mb-3">
                        <label class="form-label">Two-factor send to</label>
                        <input type="text" class="form-control" name="example-password-input"
                            placeholder="Input placeholder" />
                    </div>
                    <div class="mb-3">
                        <label class="form-colorinput">
                            <input name="color" type="radio" value="lime" class="form-colorinput-input" />
                            <span class="form-colorinput-color"></span>
                        </label>
                        Change password
                    </div>

                </div>
            </div>
            <page-header title="Settings" />
            <div class="card mb-3">
                <div class="card-body">
                    <h3 class="card-title">General</h3>
                    <div class="mb-3">
                        <label class="form-label">Selected theme</label>
                        <select name="theme" class="form-select">
                            <option>Light</option>
                            <option>Dark</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Use Secure Shell Extension for Chrome</label>
                        <div>
                            <select name="secure_shell_extension" class="form-select">
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                            <small class="form-hint">Launch SSH connections directly in your browser. <a
                                    href="https://chrome.google.com/webstore/detail/secure-shell-app/iodihamcpbpeioajjeobimgagajmlibd"
                                    class="text-primary" target="_blank">Requires the Secure Shell extension for Chrome.
                                </a></small>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Command history max entries</label>
                        <div>
                            <input type="number" class="form-control" name="shell_history" />
                            <small class="hint">0 - 200</small>
                        </div>
                    </div>

                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title">RDP</h3>
                    <div class="mb-3">
                        <label class="form-label">Open non-browser-based RDP connections with</label>
                        <select name="non_browser_connections" class="form-select">
                            <option>Microsoft Remote Desktop via RDP file download (Win & Mac)</option>
                            <option>Open a rdp:// schema link (Linux & FreeRDP, custom scripts)</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Default RDP username</label>
                        <input type="text" class="form-control" name="example-password-input" placeholder="" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Local keyboard layout for browser-based RDP</label>
                        <select name="secure_shell_extension" class="form-select">
                            <option value="pt-br-qwerty">Brazilian (Portuguese)</option>
                            <option value="en-gb-qwerty">English (UK)</option>
                            <option selected value="en-us-qwerty">English (US)</option>
                            <option value="fr-fr-azerty">French</option>
                            <option value="fr-be-azerty">French (Belgian)</option>
                            <option value="fr-ch-qwertz">French (Swiss)</option>
                            <option value="de-de-qwertz">German</option>
                            <option value="de-ch-qwertz">German (Swiss)</option>
                            <option value="hu-hu-qwertz">Hungarian</option>
                            <option value="it-it-qwerty">Italian</option>
                            <option value="ja-jp-qwerty">Japanese</option>
                            <option value="no-no-qwerty">Norwegian</option>
                            <option value="es-es-qwerty">Spanish</option>
                            <option value="es-latam-qwerty">Spanish (Latin American)</option>
                            <option value="tr-tr-qwerty">Turkish-Q</option>
                        </select>

                    </div>
                    <div class="mb-3">
                        <button type="button" class="btn btn-primary ms-auto">Edit the RDP File Template</button>
                    </div>

                </div>
            </div>
            <div class="d-flex w-100 align-items-center justify-content-end my-4">
                <button type="button" class="btn btn-primary ms-auto">Save settings</button>
            </div>
        </div> -->
	</new-page-wrapper>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Index from '~/pages/dashboard/index.vue';

const store = useProfile();
const authStore = useTokenStore();
const { profile } = storeToRefs(store);
const { two_fa } = storeToRefs(authStore);

console.log(two_fa);
await store.fetchProfile();
</script>

<style scoped>
/* Estilos de la página (opcional) */
</style>
