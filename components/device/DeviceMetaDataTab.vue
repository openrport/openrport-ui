<template>
	<div class="h-full w-full flex-1">
		<div
			class="flex flex-1 flex-col divide-y divide-gray-50 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-900 mt-5"
		>
			<!---->
			<div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
				<div class="h-full w-full">
					<!---->
					<div
						class="flex flex-1 flex-col divide-y divide-gray-50 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-900"
					>
						<!---->
						<div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
							<div class="h-full w-full">
								<div class="flex flex-col items-center justify-center">
									<div class="flex flex-col items-center justify-center">
										<button
											type="button"
											class="inline-flex items-center duration-200 focus:outline-none rounded-full p-3 h-15 w-15 cursor-default justify-center rounded-full bg-theme shadow"
										>
											<span
												class="flex items-center justify-center"
												style="width: 24px; height: 24px;"
											><svg
												data-v-ca945699=""
												xmlns="http://www.w3.org/2000/svg"
												width="24px"
												height="24px"
												viewBox="0 0 24 24"
												class="icon"
											>
												<path
													fill="currentColor"
													d="M22 18v4h-4v-3h-3v-3h-3l-2.26-2.26c-.55.17-1.13.26-1.74.26a6 6 0 0 1-6-6a6 6 0 0 1 6-6a6 6 0 0 1 6 6c0 .61-.09 1.19-.26 1.74L22 18M7 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"
												/>
											</svg></span>
										</button>
										<div class="mt-4 p-1 text-3xl font-bold">
											<h3>The vault is locked or not initialized.</h3>
										</div>
										<div class="mt-2 p-1 text-sm underline">
											<a
												href="https://kb.rport.io/activate-the-vault"
												target="_blank"
											> Learn
												more </a>
										</div><a
											href="/vault"
											class="mx-auto mt-4 inline-flex h-11 items-center rounded-full bg-secondary px-5 font-medium uppercase text-black-087 shadow"
										>Unlock
											vault </a>
									</div>
								</div>
							</div>
						</div><!---->
					</div>
					<div
						class="fixed inset-0 z-50 overflow-y-auto transition"
						style="display: none;"
					>
						<div class="fixed inset-0 bg-theme-backdrop/75 transition" />
						<div
							class="fixed inset-0 overflow-y-auto transition"
							style="display: none;"
						>
							<div class="flex min-h-full items-center justify-center text-center">
								<div
									class="relative mx-4 transform overflow-hidden rounded bg-theme px-6 py-4 text-left shadow-xl sm:w-full sm:max-w-lg"
								>
									<div as="div">
										<h3 class="mt-2 text-3xl font-medium leading-6 text-theme-inverted">
											<span
												class="text-sm font-medium text-gray-600"
											>Unsaved changes</span>
										</h3>
									</div>
									<div class="pt-4 pb-2">
										<p class="text-sm font-medium text-gray-600">
											You have unsaved changes in the
											current document "". Do you want to discard or save them?
										</p>
									</div>
									<div class="mt-5 flex justify-end">
										<button
											class="hover:opacity-80 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none primary plain mr-2"
											type="button"
										>
											<!----><!----> Discard
										</button><button
											class="hover:opacity-80 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none primary"
											type="button"
										>
											<!----><svg
												data-v-ca945699=""
												xmlns="http://www.w3.org/2000/svg"
												width="16px"
												height="16px"
												viewBox="0 0 24 24"
												class="icon mr-2"
											>
												<path
													fill="currentColor"
													d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h11.175q.4 0 .763.15t.637.425l2.85 2.85q.275.275.425.638t.15.762V19q0 .825-.588 1.413T19 21H5Zm7-3q1.25 0 2.125-.875T15 15q0-1.25-.875-2.125T12 12q-1.25 0-2.125.875T9 15q0 1.25.875 2.125T12 18Zm-5-8h7q.425 0 .713-.288T15 9V7q0-.425-.288-.713T14 6H7q-.425 0-.713.288T6 7v2q0 .425.288.713T7 10Z"
												/>
											</svg> Save
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div><!---->
		</div>
	</div>
</template>
