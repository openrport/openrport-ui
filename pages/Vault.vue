<template>
    <new-page-wrapper isExtra="true">
        <div class="flex flex-1 xl:overflow-hidden">
            <new-settings-sidebar />
            <div class="scrollbar-hide max-h-screen flex-1 xl:overflow-y-auto">
                <div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
                    <div>
                        <div class="relative z-20 flex h-16 items-center justify-between">
                            <div class="">
                                <h3 class="text-3xl leading-6 text-gray-800 dark:text-white">Vault</h3>
                                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">&nbsp;</p>
                            </div>
                            <div class="flex-1"></div>
                            <div class="ml-2 flex-shrink-0">
                                <div class="bg-orange-50 dark:bg-orange-500/10 rounded-md p-4 uppercase">
                                    <div class="flex items-end justify-center gap-x-3"><span class="flex-shrink-0"><svg
                                                data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="20px"
                                                height="20px" viewBox="0 0 256 256"
                                                class="icon text-orange-700 dark:text-orange-400" aria-hidden="true">
                                                <path fill="currentColor"
                                                    d="M216 40H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h16v16a8 8 0 0 0 16 0v-16h112v16a8 8 0 0 0 16 0v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 152H40V56h176v64h-16.68a48 48 0 1 0 0 16H216v56Zm-50.16-72a16 16 0 1 0 0 16H183a32 32 0 1 1 0-16Z">
                                                </path>
                                            </svg></span><span><span class="text-orange-700 dark:text-orange-400">Needs
                                                Initialization</span></span><!----></div>
                                </div>
                                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">&nbsp;</p>
                            </div>
                        </div><!---->
                        <div
                            class="flex flex-1 flex-col divide-y divide-gray-50 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-900">
                            <div class="px-4 py-4 sm:flex sm:items-center sm:px-6">
                                <div class="flex max-h-16 flex-1 content-center items-center">
                                    <h3 class="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50"></h3>
                                    <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-500">
                                        Initialize the vault by setting a passphrase</p>
                                </div><!---->
                            </div>
                            <div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
                                <div class="h-full w-full">
                                    <div>
                                        <div class="mb-4 flex w-full items-center">
                                            <div class="flex flex-col w-full">
                                                <div class="relative mt-1 flex w-full flex-col"><input id="jhe68x5q9Q"
                                                        class="h-14 primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
                                                        placeholder=" " type="text" autocomplete="off"><label
                                                        class="absolute left-1.5 top-1.5 z-10 origin-[0] -trangray-y-4 scale-75 transform px-1 text-theme-label duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-trangray-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-trangray-y-4 peer-focus:scale-75 peer-focus:px-1 text-theme-label peer-focus:text-primary bg-theme text-sm font-normal"
                                                        for="jhe68x5q9Q">passphrase</label></div><!----><!---->
                                            </div><button
                                                class="bg-primary-500 hover:bg-primary-800 focus-visible:outline-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ml-1"
                                                type="button" button-icon-size="20"><!----><!----><span
                                                    class="flex items-center justify-center gap-x-2"><!----><svg
                                                        data-v-ca945699="" xmlns="http://www.w3.org/2000/svg"
                                                        width="24px" height="24px" viewBox="0 0 24 24" class="icon">
                                                        <path fill="currentColor"
                                                            d="M12.65 10a5.998 5.998 0 0 0-6.88-3.88c-2.29.46-4.15 2.29-4.63 4.58A6.006 6.006 0 0 0 7 18a5.99 5.99 0 0 0 5.65-4H17v2c0 1.1.9 2 2 2s2-.9 2-2v-2c1.1 0 2-.9 2-2s-.9-2-2-2h-8.35zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z">
                                                        </path>
                                                    </svg></span></button>
                                        </div>
                                        <div class="mb-4 w-full">
                                            <div class="flex flex-col w-full">
                                                <div class="relative mt-1 flex w-full flex-col"><input id="yBeBb25iJr"
                                                        class="h-14 primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
                                                        placeholder=" " type="text" autocomplete="off"><label
                                                        class="absolute left-1.5 top-1.5 z-10 origin-[0] -trangray-y-4 scale-75 transform px-1 text-theme-label duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-trangray-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-trangray-y-4 peer-focus:scale-75 peer-focus:px-1 text-theme-label peer-focus:text-primary bg-theme text-sm font-normal"
                                                        for="yBeBb25iJr">Repeat passphrase</label></div><!----><!---->
                                            </div>
                                        </div>
                                        <div class="mb-4 w-full rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800"
                                            role="alert"> Please, be aware that it's not possible to recover a lost
                                            passphrase. Store your passphrase safely and consider making clear text
                                            backups of your vault. </div><!---->
                                        <div class="mb-4 flex w-full items-center justify-end"><button
                                                class="bg-primary-500 hover:bg-primary-800 focus-visible:outline-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-3.5 py-2.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-primary"
                                                type="button"><!----><!----><span
                                                    class="flex items-center justify-center gap-x-2"><!----><!----><!----><svg
                                                        data-v-ca945699="" xmlns="http://www.w3.org/2000/svg"
                                                        width="16px" height="16px" viewBox="0 0 256 256" class="icon">
                                                        <path fill="currentColor"
                                                            d="M216 40H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h16v16a8 8 0 0 0 16 0v-16h112v16a8 8 0 0 0 16 0v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 152H40V56h176v64h-16.68a48 48 0 1 0 0 16H216v56Zm-50.16-72a16 16 0 1 0 0 16H183a32 32 0 1 1 0-16Z">
                                                        </path>
                                                    </svg><!----><!----><span>Initialize vault</span></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div><!---->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="container mt-4">
            <page-header title="Vault" hasAction={true} actionName="Reload"/>
            <div class="card ">
                <div class="card-body">
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="text" class="form-control" name="example-password-input"
                            placeholder="Input placeholder" />
                    </div>

                </div>
            </div>
        </div> -->
    </new-page-wrapper>
</template>
<script></script>