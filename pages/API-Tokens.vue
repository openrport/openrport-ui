<template>
    <new-page-wrapper isExtra="true">
        <div class="flex flex-1 xl:overflow-hidden">
            <new-settings-sidebar />
            <div class="scrollbar-hide max-h-screen flex-1 xl:overflow-y-auto">
                <div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
                    <div class="relative z-20 flex h-16 items-center justify-between">
                        <div class="">
                            <h3 class="text-3xl leading-6 text-gray-800 dark:text-white">API Tokens</h3>
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">&nbsp;</p>
                        </div>
                        <div class="flex-1"></div>
                        <div class="ml-2 flex-shrink-0"><button
                                class="bg-primary-500 hover:bg-primary-800 focus-visible:outline-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                type="button"><!----><!----><span
                                    class="flex items-center justify-center gap-x-2"><!---->
                                    Add API Token</span></button>
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">&nbsp;</p>
                        </div>
                    </div><!---->
                    <div class="relative z-10 w-full"><!---->
                        <div
                            class="flow-root overflow-hidden border border-gray-100 ring-1 ring-black ring-opacity-10 dark:border-gray-600 sm:rounded-lg">
                            <div class="overflow-auto relative z-10 -mb-2">
                                <div class="inline-block min-w-full align-middle">
                                    <div class="sm:rounded-t-lg overflow-hidden">
                                        <div>
                                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                <thead class="rounded-lg bg-gray-50 dark:bg-gray-950">
                                                    <tr>
                                                        <th class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
                                                            scope="col"><button
                                                                disabled=""><span>Prefix</span><!----></button></th>
                                                        <th class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
                                                            scope="col"><button
                                                                disabled=""><span>Scope</span><!----></button></th>
                                                        <th class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
                                                            scope="col"><button
                                                                disabled=""><span>Name</span><!----></button></th>
                                                        <th class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
                                                            scope="col"><button
                                                                disabled=""><span>Created</span><!----></button></th>
                                                        <th class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
                                                            scope="col"><button
                                                                disabled=""><span>Expires</span><!----></button></th>
                                                        <th class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
                                                            scope="col"><button
                                                                disabled=""><span></span><!----></button>
                                                        </th>
                                                        <th
                                                            class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-800 sm:pl-6">
                                                        </th><!---->
                                                    </tr>
                                                </thead>
                                                <tbody
                                                    class="z-10 divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                                                    <tr class="h-[210px] bg-white/10 backdrop-blur-sm dark:bg-black/10">
                                                        <td colspan="8"
                                                            class="w-full flex-1 text-center text-gray-800 dark:text-gray-200">
                                                            No results</td><!---->
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="relative z-0 -mx-4 mt-2 sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full align-middle sm:px-6 lg:px-8">
                                    <div
                                        class="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-950">
                                        <div>
                                            <div colspan="8"
                                                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-600 sm:pl-6">
                                                <div class="flex w-full items-center justify-between">
                                                    <div class="flex items-center justify-between"><span
                                                            class="text-xs text-gray-500"> Showing <span
                                                                class="font-medium">1</span> to <span
                                                                class="font-medium">0</span> of <span
                                                                class="font-medium">0</span> results </span></div>
                                                    <div class="flex-1"></div>
                                                    <div class="flex w-full max-w-[90px] items-center justify-between">
                                                        <button disabled=""
                                                            class="rounded-full p-1 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-primary-600 disabled:cursor-not-allowed disabled:text-gray-300 hover:disabled:bg-transparent hover:dark:bg-gray-900 disabled:dark:text-gray-700 hover:dark:disabled:bg-transparent"><svg
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                                fill="currentColor" aria-hidden="true" class="h-6 w-6">
                                                                <path fill-rule="evenodd"
                                                                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                                                    clip-rule="evenodd"></path>
                                                            </svg></button><button disabled=""
                                                            class="rounded-full p-1 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-primary-600 disabled:cursor-not-allowed disabled:text-gray-300 hover:disabled:bg-transparent hover:dark:bg-gray-900 disabled:dark:text-gray-700 hover:dark:disabled:bg-transparent"><svg
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                                fill="currentColor" aria-hidden="true" class="h-6 w-6">
                                                                <path fill-rule="evenodd"
                                                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                    clip-rule="evenodd"></path>
                                                            </svg></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="h-12 w-full"></div>
                    </div><!---->
                </div>
            </div>
        </div>
        <!-- <div class="container mt-4">
            <page-header title="API Tokens" hasAction={true} actionName="Reload" />
            <div class="card table-responsive">

                <table class="table table-vcenter">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th class="w-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Paweł Kuna</td>
                            <td class="text-secondary">
                                UI Designer, Training
                            </td>
                            <td class="text-secondary"><a href="#" class="text-reset">paweluna@howstuffworks.com</a>
                            </td>
                            <td class="text-secondary">
                                User
                            </td>
                            <td>
                                <a href="#">Edit</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Jeffie Lewzey</td>
                            <td class="text-secondary">
                                Chemical Engineer, Support
                            </td>
                            <td class="text-secondary"><a href="#" class="text-reset">jlewzey1@seesaa.net</a></td>
                            <td class="text-secondary">
                                Admin
                            </td>
                            <td>
                                <a href="#">Edit</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Mallory Hulme</td>
                            <td class="text-secondary">
                                Geologist IV, Support
                            </td>
                            <td class="text-secondary"><a href="#" class="text-reset">mhulme2@domainmarket.com</a>
                            </td>
                            <td class="text-secondary">
                                User
                            </td>
                            <td>
                                <a href="#">Edit</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Dunn Slane</td>
                            <td class="text-secondary">
                                Research Nurse, Sales
                            </td>
                            <td class="text-secondary"><a href="#" class="text-reset">dslane3@epa.gov</a></td>
                            <td class="text-secondary">
                                Owner
                            </td>
                            <td>
                                <a href="#">Edit</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Emmy Levet</td>
                            <td class="text-secondary">
                                VP Product Management, Accounting
                            </td>
                            <td class="text-secondary"><a href="#" class="text-reset">elevet4@senate.gov</a></td>
                            <td class="text-secondary">
                                Admin
                            </td>
                            <td>
                                <a href="#">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="row">
                    <div class="col">
                        <div class="p-2">Showing 1 to 0 of 0 results</div>
                    </div>
                </div>
            </div>
        </div> -->
    </new-page-wrapper>
</template>
<script></script>