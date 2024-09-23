<template>
	<new-page-wrapper is-extra="true">
		<div class="flex flex-1 xl:overflow-hidden">
			<new-settings-sidebar />
			<div class="scrollbar-hide max-h-screen flex-1 xl:overflow-y-auto">
				<div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
					<div>
						<div class="relative z-20 flex h-16 items-center justify-between">
							<div class="">
								<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
									Support options
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
						<div class="mt-10 flex w-full flex-wrap justify-start gap-4 xl:flex-nowrap xl:justify-center">
							<div
								class="flex flex-1 flex-col divide-y divide-gray-50 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-900 divide-none"
							>
								<div class="p-4 px-6">
									<a
										href="https://rport.io/support"
										rel="noopener noreferrer"
										target="_blank"
										class="cursor-pointer text-primary-500 underline transition-all duration-300 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-400"
									>
										<h5 class="text-sm uppercase">Premium Support</h5>
									</a>
								</div>
								<div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
									<div class="h-full w-full">
										<p class="mb-3 text-sm">
											Get fast and reliable support from the RPort creators.
											RealVNC offers affordable support plans to safeguard your RPort server and
											clients.
										</p>
									</div>
								</div>
								<div class="max-h-20 px-4 py-4 sm:px-6">
									<button
										class="bg-primary-500 hover:bg-primary-800 focus-visible:outline-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-full"
										type="button"
										target="_blank"
									>
										<!----><a
											href="https://rport.io/support"
											rel="noopener noreferrer"
											target="_blank"
											class="absolute inset-0"
										/><span
											class="flex items-center justify-center gap-x-2"
										><!----><svg
											data-v-ca945699=""
											xmlns="http://www.w3.org/2000/svg"
											width="20px"
											height="20px"
											viewBox="0 0 24 24"
											class="icon"
										>
											<path
												fill="currentColor"
												fillRule="evenodd"
												d="M12.26 21.997a10.276 10.276 0 0 1-.52 0a10.004 10.004 0 0 1-8.983-6.173a10.034 10.034 0 0 1 .017-7.69A10.015 10.015 0 0 1 4.908 4.95l.042-.042a10.015 10.015 0 0 1 3.167-2.126a10.034 10.034 0 0 1 7.753-.006a10.015 10.015 0 0 1 3.186 2.138l.03.03c.913.917 1.65 2.01 2.153 3.223a10.012 10.012 0 0 1 .76 3.985a10.004 10.004 0 0 1-6.226 9.112a10.013 10.013 0 0 1-3.512.733Zm1.772-6.55l2.874 2.873a8.004 8.004 0 0 1-9.812 0l2.874-2.874a4.007 4.007 0 0 0 4.064 0Zm-5.478-1.415L5.68 16.906a8.004 8.004 0 0 1 0-9.812l2.874 2.874a4.007 4.007 0 0 0 0 4.064Zm1.528-1.463a2.01 2.01 0 0 1-.014-1.087a1.99 1.99 0 0 1 .518-.896a1.99 1.99 0 0 1 1.932-.518c.328.088.639.26.896.518a1.99 1.99 0 0 1 .518 1.932c-.088.328-.26.639-.518.896a1.99 1.99 0 0 1-1.932.518a1.991 1.991 0 0 1-.896-.518a1.99 1.99 0 0 1-.504-.845Zm3.95-4.015a4.007 4.007 0 0 0-4.064 0L7.094 5.68a8.004 8.004 0 0 1 9.812 0l-2.874 2.874Zm4.288 8.352a8.004 8.004 0 0 0 0-9.812l-2.874 2.874a4.007 4.007 0 0 1 0 4.064l2.874 2.874Z"
												clipRule="evenodd"
											/>
										</svg><span class="pl-2">Discover support plans</span></span>
									</button>
								</div>
							</div>
							<div
								class="flex flex-1 flex-col divide-y divide-gray-50 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-900 divide-none"
							>
								<div class="p-4 px-6">
									<a
										href="https://kb.rport.io/"
										rel="noopener noreferrer"
										target="_blank"
										class="cursor-pointer text-primary-500 underline transition-all duration-300 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-400"
									>
										<h5 class="text-sm uppercase">Documentation</h5>
									</a>
								</div>
								<div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
									<div class="h-full w-full">
										<p class="mb-3 text-sm">
											Read the documentation and find solutions for the most
											common issues.
										</p>
									</div>
								</div>
								<div class="max-h-20 px-4 py-4 sm:px-6">
									<button
										class="bg-primary-500 hover:bg-primary-800 focus-visible:outline-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-full"
										type="button"
										target="_blank"
									>
										<!----><a
											href="https://kb.rport.io/"
											rel="noopener noreferrer"
											target="_blank"
											class="absolute inset-0"
										/><span
											class="flex items-center justify-center gap-x-2"
										><!----><svg
											data-v-ca945699=""
											xmlns="http://www.w3.org/2000/svg"
											width="20px"
											height="20px"
											viewBox="0 0 32 32"
											class="icon"
										>
											<path
												fill="currentColor"
												d="M2 6h2v20H2zm4-2h2v24H6zm8 18h12v2H14zm0-6h12v2H14z"
											/>
											<path
												fill="currentColor"
												d="m29.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3H12c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7zM22 4.4l5.6 5.6H22V4.4zM28 28H12V4h8v6c0 1.1.9 2 2 2h6v16z"
											/>
										</svg><span class="pl-2">Visit RPort Knowledge base</span></span>
									</button>
								</div>
							</div>
							<div
								class="flex flex-1 flex-col divide-y divide-gray-50 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-900 divide-none"
							>
								<div class="p-4 px-6">
									<a
										href="https://rport.io/forum"
										rel="noopener noreferrer"
										target="_blank"
										class="cursor-pointer text-primary-500 underline transition-all duration-300 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-400"
									>
										<h5 class="text-sm uppercase">Community Support</h5>
									</a>
								</div>
								<div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
									<div class="h-full w-full">
										<p class="mb-3 text-sm">
											Ask the community for help. Friendly people are always
											willing to help each other. Post your question to our forum on GitHub.
										</p>
									</div>
								</div>
								<div class="max-h-20 px-4 py-4 sm:px-6">
									<button
										class="bg-primary-500 hover:bg-primary-800 focus-visible:outline-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-full"
										type="button"
										target="_blank"
									>
										<!----><a
											href="https://rport.io/forum"
											rel="noopener noreferrer"
											target="_blank"
											class="absolute inset-0"
										/><span
											class="flex items-center justify-center gap-x-2"
										><!----><svg
											data-v-ca945699=""
											xmlns="http://www.w3.org/2000/svg"
											width="20px"
											height="20px"
											viewBox="0 0 24 24"
											class="icon"
										>
											<path
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.5"
												d="M7 18v-1a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v1M1 18v-1a3 3 0 0 1 3-3v0m19 4v-1a3 3 0 0 0-3-3v0m-8-2a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-8 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm16 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"
											/>
										</svg><span class="pl-2">Join forum</span></span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="container mt-4">
            <page-header title="Support options" />
            <div class="row">
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-header">Support</div>
                        <div class="card-body">
                            <p>Get fast and reliable support from the RPort creators. RealVNC offers affordable support
                                plans to safeguard your RPort server and clients.</p>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary">Discover support plans</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-header">Documentation</div>
                        <div class="card-body">
                            <p>Read the documentation and find solutions for the most common issues.</p>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary">Visit RPort Knowledge base</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-header">Community</div>
                        <div class="card-body">
                            <p>Ask the community for help. Friendly people are always willing to help each other. Post your
                                question to our forum on GitHub.
                            </p>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary">Join forum</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
	</new-page-wrapper>
</template>

<script></script>
