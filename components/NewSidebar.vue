<template>
	<div class="hidden lg:flex lg:flex-shrink-0">
		<div class="w-56 relative z-40 flex flex-col transition-all">
			<div class="flex min-h-0 flex-1 flex-col bg-primary-800">
				<div class="flex-1">
					<div class="flex items-center justify-center bg-primary-800 py-4">
						<div class="flex justify-center py-6 text-white">
							<span>
								<svg
									height="15px"
									version="1.1"
									viewBox="0 0 27 15"
									width="27px"
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
								>
									<g
										id="Page-1"
										fill="none"
										fill-rule="evenodd"
										stroke="none"
										stroke-width="1"
									>
										<g
											id="Group-16"
											fill="currentColor"
											transform="translate(-28.000000, -31.000000)"
										>
											<g
												id="Group"
												transform="translate(28.000000, 31.000000)"
											>
												<path
													id="Rectangle"
													d="M17.5217391,0 C19.4427296,0 21,1.52630199 21,3.40909091 L21,11.5909091 C21,13.473698 19.4427296,15 17.5217391,15 L8.47826087,15 C6.55727044,15 5,13.473698 5,11.5909091 L5,11 L8.478,11 L8.47826087,11.5909091 L17.5217391,11.5909091 L17.5217391,3.40909091 L8.47826087,3.40909091 L8.478,4 L5,4 L5,3.40909091 C5,1.52630199 6.55727044,0 8.47826087,0 L17.5217391,0 Z"
													fill-rule="nonzero"
												/>
												<polygon
													id="Path"
													fill-rule="nonzero"
													points="13 6 13 9 0 9 0 6"
												/>
												<rect
													id="Rectangle"
													height="3"
													width="4"
													x="23"
													y="6"
												/>
											</g>
										</g>
									</g>
								</svg>
							</span>
						</div>
					</div>
					<nav class="flex flex-col items-center space-y-3 px-3 py-6">
						<nuxt-link
							to="/dashboard"
							class="nav-link items-start gap-x-4 px-4 flex w-full rounded-lg py-2 text-primary-50 transition-all hover:bg-primary-700"
						>
							<svg
								data-v-ca945699=""
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								viewBox="0 0 32 32"
								class="icon h-6 w-6"
								aria-hidden="true"
							>
								<circle
									cx="9"
									cy="6"
									r="1"
									fill="currentColor"
								/>
								<path
									fill="currentColor"
									d="M26 10H6a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h20a2.002 2.002 0 0 1 2 2v4a2.002 2.002 0 0 1-2 2ZM6 4v4h20V4Z"
								/>
								<circle
									cx="9"
									cy="16"
									r="1"
									fill="currentColor"
								/>
								<path
									fill="currentColor"
									d="M26 20H6a2.002 2.002 0 0 1-2-2v-4a2.002 2.002 0 0 1 2-2h20a2.002 2.002 0 0 1 2 2v4a2.002 2.002 0 0 1-2 2ZM6 14v4h20v-4Z"
								/>
								<circle
									cx="9"
									cy="26"
									r="1"
									fill="currentColor"
								/>
								<path
									fill="currentColor"
									d="M26 30H6a2.002 2.002 0 0 1-2-2v-4a2.002 2.002 0 0 1 2-2h20a2.002 2.002 0 0 1 2 2v4a2.002 2.002 0 0 1-2 2ZM6 24v4h20v-4Z"
								/>
							</svg>
							<span>Clients</span>
						</nuxt-link>

						<nuxt-link
							to="/tunnels"
							class="items-start gap-x-4 px-4 flex w-full rounded-lg py-2 text-primary-50 transition-all hover:bg-primary-700"
						>
							<svg
								data-v-ca945699=""
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								viewBox="0 0 24 24"
								class="icon h-6 w-6"
								aria-hidden="true"
							>
								<g fill="currentColor">
									<path
										d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-4v2h1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h1v-2H5a3 3 0 0 1-3-3V6zm9 11v2h2v-2h-2zM5 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5z"
									/>
								</g>
							</svg>
							<span>Tunnels</span>
							<!-- <span
                                class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> -->
						</nuxt-link>
						<nuxt-link
							to="/inventory"
							class="items-start gap-x-4 px-4 flex w-full rounded-lg py-2 text-primary-50 transition-all hover:bg-primary-700"
						>
							<svg
								data-v-ca945699=""
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								viewBox="0 0 24 24"
								class="icon h-6 w-6"
								aria-hidden="true"
							>
								<g fill="currentColor">
									<path
										d="M5 5a1 1 0 0 0-1 1v1h16V6a1 1 0 0 0-1-1H5zM2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1a2 2 0 0 1-1 1.732V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8.732A2 2 0 0 1 2 7V6zm3 3v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9H5zm4 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1z"
									/>
								</g>
							</svg>
							<span>Inventory</span>
							<!-- <span
                                class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span> -->
						</nuxt-link>

						<nuxt-link
							to="/documentation"
							class="items-start gap-x-4 px-4 flex w-full rounded-lg py-2 text-primary-50 transition-all hover:bg-primary-700"
						>
							<svg
								data-v-ca945699=""
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								viewBox="0 0 16 16"
								class="icon h-6 w-6"
								aria-hidden="true"
							>
								<path
									fill="currentColor"
									d="M1 2.828c.885-.37 2.154-.769 3.388-.893c1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493c-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752c1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81c-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02c1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877c1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
								/>
							</svg>
							<span>Documentation</span>
						</nuxt-link>
						<nuxt-link
							to="/commands"
							class="items-start gap-x-4 px-4 flex w-full rounded-lg py-2 text-primary-50 transition-all hover:bg-primary-700"
						>
							<svg
								data-v-ca945699=""
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								viewBox="0 0 24 24"
								class="icon h-6 w-6"
								aria-hidden="true"
							>
								<g fill="currentColor">
									<path
										d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5zm1.617 2.076a1 1 0 0 1 1.09.217l4 4a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 6 16V8a1 1 0 0 1 .617-.924zM8 10.414v3.172L9.586 12L8 10.414zM12 16a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1z"
									/>
								</g>
							</svg>
							<span>Commands</span>
						</nuxt-link>
						<nuxt-link
							to="/scripts"
							class="items-start gap-x-4 px-4 flex w-full rounded-lg py-2 text-primary-50 transition-all hover:bg-primary-700"
						>
							<svg
								data-v-ca945699=""
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								viewBox="0 0 256 256"
								class="icon h-6 w-6"
								aria-hidden="true"
							>
								<path
									fill="currentColor"
									d="M96 104a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16h-64a8 8 0 0 1-8-8Zm8 40h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16Zm128 48a32 32 0 0 1-32 32H88a32 32 0 0 1-32-32V64a16 16 0 0 0-32 0c0 5.74 4.83 9.62 4.88 9.66A8 8 0 0 1 24 88a7.89 7.89 0 0 1-4.79-1.61C18.05 85.54 8 77.61 8 64a32 32 0 0 1 32-32h136a32 32 0 0 1 32 32v104h8a8 8 0 0 1 4.8 1.6c1.2.86 11.2 8.79 11.2 22.4ZM96.26 173.48A8.07 8.07 0 0 1 104 168h88V64a16 16 0 0 0-16-16H67.69A31.71 31.71 0 0 1 72 64v128a16 16 0 0 0 32 0c0-5.74-4.83-9.62-4.88-9.66a7.82 7.82 0 0 1-2.86-8.86ZM216 192a12.58 12.58 0 0 0-3.23-8h-94a26.92 26.92 0 0 1 1.21 8a31.82 31.82 0 0 1-4.29 16H200a16 16 0 0 0 16-16Z"
								/>
							</svg>
							<span>Scripts</span>
						</nuxt-link>
						<nuxt-link
							to="/schedules"
							class="items-start gap-x-4 px-4 flex w-full rounded-lg py-2 text-primary-50 transition-all hover:bg-primary-700"
						>
							<svg
								data-v-ca945699=""
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								viewBox="0 0 24 24"
								class="icon h-6 w-6"
								aria-hidden="true"
							>
								<path
									fill="currentColor"
									d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m5 11.9l-.7 1.3l-5.3-2.9V7h1.5v4.4l4.5 2.5Z"
								/>
							</svg>
							<span>Schedules</span>
						</nuxt-link>
						<nuxt-link
							to="/profile"
							class="items-start gap-x-4 px-4 flex w-full rounded-lg py-2 text-primary-50 transition-all hover:bg-primary-700"
						>
							<svg
								data-v-ca945699=""
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								viewBox="0 0 24 24"
								class="icon h-6 w-6"
								aria-hidden="true"
							>
								<path
									fill="currentColor"
									d="M13.875 22h-3.75q-.375 0-.65-.25t-.325-.625l-.3-2.325q-.325-.125-.613-.3t-.562-.375l-2.175.9q-.35.125-.7.025t-.55-.425L2.4 15.4q-.2-.325-.125-.7t.375-.6l1.875-1.425Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L2.65 9.9q-.3-.225-.375-.6t.125-.7l1.85-3.225q.175-.35.537-.438t.713.038l2.175.9q.275-.2.575-.375t.6-.3l.3-2.325q.05-.375.325-.625t.65-.25h3.75q.375 0 .65.25t.325.625l.3 2.325q.325.125.613.3t.562.375l2.175-.9q.35-.125.7-.025t.55.425L21.6 8.6q.2.325.125.7t-.375.6l-1.875 1.425q.025.175.025.338v.674q0 .163-.05.338l1.875 1.425q.3.225.375.6t-.125.7l-1.85 3.2q-.2.325-.563.438t-.712-.013l-2.125-.9q-.275.2-.575.375t-.6.3l-.3 2.325q-.05.375-.325.625t-.65.25Zm-1.825-6.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.012 2.475T12.05 15.5Zm0-2q-.625 0-1.063-.438T10.55 12q0-.625.438-1.063t1.062-.437q.625 0 1.063.438T13.55 12q0 .625-.438 1.063t-1.062.437ZM12 12Zm-1 8h1.975l.35-2.65q.775-.2 1.438-.588t1.212-.937l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12q0-.4-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587L11 20Z"
								/>
							</svg>
							<span>Settings</span>
						</nuxt-link>
						<nuxt-link
							to="/library"
							class="items-start gap-x-4 px-4 flex w-full rounded-lg py-2 text-primary-50 transition-all hover:bg-primary-700"
						>
							<svg
								data-v-ca945699=""
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								viewBox="0 0 20 20"
								class="icon h-6 w-6"
								aria-hidden="true"
							>
								<path
									fill="currentColor"
									d="M3.5 2C2.67 2 2 2.67 2 3.498v12.981c0 .828.671 1.498 1.5 1.498h1c.827 0 1.499-.67 1.499-1.498V3.498C5.999 2.67 5.327 2 4.499 2h-1Zm4.998 0c-.828 0-1.5.67-1.5 1.498v12.981c0 .828.672 1.498 1.5 1.498h1c.828 0 1.499-.67 1.499-1.498V3.498c0-.827-.671-1.498-1.5-1.498h-1Zm7.22 4.157a1.5 1.5 0 0 0-1.87-1.106l-.745.21a1.498 1.498 0 0 0-1.06 1.742l2.003 9.799a1.5 1.5 0 0 0 1.839 1.151l.985-.25c.79-.2 1.274-.994 1.092-1.787l-2.244-9.76Z"
								/>
							</svg>
							<span>Library</span>
						</nuxt-link>
						<nuxt-link
							to="/audits"
							class="items-start gap-x-4 px-4 flex w-full rounded-lg py-2 text-primary-50 transition-all hover:bg-primary-700"
						>
							<svg
								data-v-ca945699=""
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								viewBox="0 0 24 24"
								class="icon h-6 w-6"
								aria-hidden="true"
							>
								<path
									fill="currentColor"
									d="M15.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5M5 3h14c1.11 0 2 .89 2 2v8.03c-.5-.8-1.19-1.49-2-2.03V5H5v14h4.5c.31.75.76 1.42 1.31 2H5c-1.11 0-2-.89-2-2V5c0-1.11.89-2 2-2m2 4h10v2H7V7m0 4h5.03c-.8.5-1.49 1.19-2.03 2H7v-2m0 4h2.17c-.11.5-.17 1-.17 1.5v.5H7v-2Z"
								/>
							</svg>
							<span>Audit Logs</span>
						</nuxt-link>
						<a
							href="#"
							class="items-start gap-x-4 px-4 flex w-full rounded-lg py-2 text-primary-50 transition-all hover:bg-primary-700 transition-all"
						>
							<svg
								data-v-ca945699=""
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								viewBox="0 0 24 24"
								class="icon h-6 w-6"
								aria-hidden="true"
							>
								<path
									fill="currentColor"
									d="M15.325 16.275q-.275-.325-.275-.737t.275-.688l1.85-1.85H10q-.425 0-.713-.288T9 12q0-.425.288-.713T10 11h7.175l-1.85-1.85q-.3-.3-.3-.713t.3-.712q.275-.3.688-.3t.687.275l3.6 3.6q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-3.6 3.6q-.325.325-.713.288t-.662-.313ZM5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h6q.425 0 .713.288T12 4q0 .425-.288.713T11 5H5v14h6q.425 0 .713.288T12 20q0 .425-.288.713T11 21H5Z"
								/>
							</svg>
							<span>Logout</span>
						</a>
					</nav>
				</div>
			</div>
		</div>
	</div>
</template>
