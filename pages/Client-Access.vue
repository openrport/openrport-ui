<template>
    <new-page-wrapper isExtra="true">
        <div class="flex flex-1 xl:overflow-hidden">
            <new-settings-sidebar />
            <div class="scrollbar-hide max-h-screen flex-1 xl:overflow-y-auto">
                <div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
                    <div class="px-3">
                        <div class="relative z-20 flex h-16 items-center justify-between">
                            <div class="">
                                <h3 class="text-3xl leading-6 text-gray-800 dark:text-white">Client Access</h3>
                                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">&nbsp;</p>
                            </div>
                            <div class="flex-1"></div>
                            <div class="ml-2 flex-shrink-0"><a href="https://kb.rport.io/organize-clients-with-groups"
                                    rel="noopener noreferrer" target="_blank"
                                    class="cursor-pointer text-primary-500 underline transition-all duration-300 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-400 text-sm">
                                    Learn more </a><button
                                    class="bg-primary-500 hover:bg-primary-800 focus-visible:outline-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ml-4"
                                    type="button"><!----><!----><span
                                        class="flex items-center justify-center gap-x-2"><!----> Add Access
                                    </span></button>
                                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">&nbsp;</p>
                            </div>
                        </div><!---->
                        <div class="py-8">
                            <div class="relative flex max-w-screen-md items-center justify-between">
                                <div class="flex flex-col w-full">
                                    <div class="relative mt-1 flex w-full flex-col"><input id="e6Aa3nqDCJ"
                                            class="pr-10 primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
                                            placeholder=" " type="text" autocomplete="off"><label
                                            class="absolute left-1.5 top-1.5 z-10 origin-[0] -trangray-y-4 scale-75 transform px-1 text-theme-label duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-trangray-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-trangray-y-4 peer-focus:scale-75 peer-focus:px-1 text-theme-label peer-focus:text-primary bg-theme text-sm font-normal"
                                            for="e6Aa3nqDCJ">Search for a client ID</label></div><!----><!---->
                                </div>
                                <button type="button"
                                    class="inline-flex items-center duration-200 focus:outline-none rounded-full py-0 px-3 absolute right-0 top-1 flex h-10 items-center justify-center"><span
                                        class="flex items-center justify-center" style="width: 22px; height: 22px;"><svg
                                            data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px"
                                            height="24px" viewBox="0 0 24 24" class="icon">
                                            <path fill="currentColor"
                                                d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z">
                                            </path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
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
                                                                    disabled=""><span>ID</span><!----></button></th>
                                                            <th class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
                                                                scope="col"><button
                                                                    disabled=""><span>Password</span><!----></button>
                                                            </th>
                                                            <th class="w-max text-right py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
                                                                scope="col"><button
                                                                    disabled=""><span></span><!----></button></th>
                                                            <th
                                                                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-800 sm:pl-6">
                                                            </th><!---->
                                                        </tr>
                                                    </thead>
                                                    <tbody
                                                        class="z-10 divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                                                        <tr
                                                            class="border-t-1 group relative border-gray-200 transition-all duration-300">
                                                            <td
                                                                class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
                                                                <div class="flex items-center">
                                                                    <div class="inline-flex w-max cursor-pointer ml-3">
                                                                        <span class="cursor-pointer">client1</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td
                                                                class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
                                                                <div class="inline-flex w-max cursor-pointer ml-3"><span
                                                                        class="cursor-pointer">riepucohLooki6ofaj</span>
                                                                </div>
                                                            </td>
                                                            <td
                                                                class="w-max text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
                                                            </td>
                                                            <td
                                                                class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal">
                                                                <div data-headlessui-state=""
                                                                    class="text-blue-600 hover:text-blue-900">
                                                                    <div><button id="headlessui-menu-button-14"
                                                                            type="button" aria-haspopup="menu"
                                                                            aria-expanded="false"
                                                                            data-headlessui-state="">
                                                                            <div
                                                                                class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300">
                                                                                <svg data-v-ca945699=""
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="20px" height="20px"
                                                                                    viewBox="0 0 24 24" class="icon">
                                                                                    <path fill="currentColor"
                                                                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z">
                                                                                    </path>
                                                                                </svg>
                                                                            </div>
                                                                        </button></div>
                                                                    <div class="z-20">
                                                                        <div style="top: 316px;" class="fixed z-30">
                                                                            <!---->
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td><!----><!---->
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
                                                <div colspan="5"
                                                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-600 sm:pl-6">
                                                    <div class="flex w-full items-center justify-between">
                                                        <div class="flex items-center justify-between"><span
                                                                class="text-xs text-gray-500"> Showing <span
                                                                    class="font-medium">1</span> to <span
                                                                    class="font-medium">1</span> of <span
                                                                    class="font-medium">1</span> results </span></div>
                                                        <div class="flex-1"></div>
                                                        <div
                                                            class="flex w-full max-w-[90px] items-center justify-between">
                                                            <button disabled=""
                                                                class="rounded-full p-1 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-primary-600 disabled:cursor-not-allowed disabled:text-gray-300 hover:disabled:bg-transparent hover:dark:bg-gray-900 disabled:dark:text-gray-700 hover:dark:disabled:bg-transparent"><svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20" fill="currentColor"
                                                                    aria-hidden="true" class="h-6 w-6">
                                                                    <path fill-rule="evenodd"
                                                                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg></button><button disabled=""
                                                                class="rounded-full p-1 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-primary-600 disabled:cursor-not-allowed disabled:text-gray-300 hover:disabled:bg-transparent hover:dark:bg-gray-900 disabled:dark:text-gray-700 hover:dark:disabled:bg-transparent"><svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20" fill="currentColor"
                                                                    aria-hidden="true" class="h-6 w-6">
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
                        </div><!----><!----><!---->
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="container mt-4 tw-max-w-7xl tw-mx-auto">
            <page-header title="Client Access" hasAction={true} actionName="Add Client" @action="openAddClient"/>
            <div class="tw-py-8">
                <div class="tw-relative tw-flex tw-max-w-screen-md tw-items-center tw-justify-between">
                    <div class="tw-flex tw-flex-col tw-w-full">
                        <div class="tw-relative tw-mt-1 tw-flex tw-w-full tw-flex-col">
                            <input @keyup.enter="filterList" v-model="filter" class="form-control tw-pr-10 tw-primary tw-input-text focus:tw-border-1 tw-peer tw-order-2 tw-block tw-h-10 tw-w-full tw-rounded tw-bg-transparent tw-text-theme-inverted tw-shadow-sm focus:tw-outline-0 focus:tw-ring-0 sm:tw-text-sm" placeholder="" type="text" autocomplete="off">
                            <label class="tw-absolute tw-left-1.5 tw-top-1.5 tw-z-10 tw-origin-[0] -tw-trangray-y-4 tw-scale-75 tw-transform tw-px-1 tw-text-theme-label tw-duration-300 peer-placeholder-shown:tw-top-1/2 peer-placeholder-shown:-tw-trangray-y-1/2 peer-placeholder-shown:tw-scale-100 peer-focus:tw-top-1.5 peer-focus:-tw-trangray-y-4 peer-focus:tw-scale-75 peer-focus:tw-px-1 tw-text-theme-label peer-focus:tw-text-primary tw-bg-theme tw-text-sm tw-font-normal">Search for a client ID</label>
                        </div>!----!---
                    </div>
                    <button v-if="filter.length === 0"  type="button" class="tw-inline-flex tw-items-center tw-duration-200 focus:tw-outline-none tw-rounded-full tw-py-0 tw-px-3 tw-absolute tw-right-0 tw-top-1 tw-flex tw-h-10 tw-items-center tw-justify-center">
                        <span class="tw-flex tw-items-center tw-justify-center" style="width: 22px; height: 22px;">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" class="icon">
                                <path fill="currentColor" d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"></path>
                            </svg>
                        </span>
                    </button>
                    <button v-else type="button" @click="filter = ''" class="tw-inline-flex tw-items-center tw-duration-200 focus:tw-outline-none tw-rounded-full tw-py-0 tw-px-3 tw-absolute tw-right-0 tw-top-1 tw-flex tw-h-10 tw-items-center tw-justify-center">
                        <span class="tw-flex tw-items-center tw-justify-center" style="width: 22px; height: 22px;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" class="icon">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12L7 7m5 5l5 5m-5-5l5-5m-5 5l-5 5"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div class="tw-relative tw-z-10 tw-w-full">
                <div class="tw-flow-root tw-overflow-hidden tw-border tw-border-gray-100 tw-ring-1 tw-ring-black tw-ring-opacity-10 dark:tw-border-gray-600 sm:tw-rounded-lg">
                    <div class="tw-overflow-auto tw-relative tw-z-10 -tw-mb-2">
                        <div class="tw-inline-block tw-min-w-full tw-align-middle">
                            <div class="sm:tw-rounded-t-lg tw-overflow-hidden">
                                <div>
                                    <table class="tw-min-w-full tw-divide-y tw-divide-gray-200 dark:tw-divide-gray-700">
                                        <thead class="tw-rounded-lg tw-bg-gray-50 dark:tw-bg-gray-950">
                                            <tr>
                                                <th class="tw-text-left tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-semibold tw-text-gray-600 dark:tw-text-gray-200 sm:tw-pl-6" scope="col">
                                                    <button disabled>
                                                        <span>ID</span>
                                                    </button>
                                                </th>
                                                <th class="tw-text-left tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-semibold tw-text-gray-600 dark:tw-text-gray-200 sm:tw-pl-6" scope="col">
                                                    <button disabled>
                                                        <span>Password</span>
                                                    </button>
                                                </th>
                                                <th class="tw-text-left tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-semibold tw-text-gray-600 dark:tw-text-gray-200 sm:tw-pl-6" scope="col">
                                                    <button disabled>
                                                        <span></span>
                                                    </button>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="tw-z-10 tw-divide-y tw-divide-gray-200 tw-bg-white dark:divide-gray-700 dark:bg-gray-900">
                                            <tr v-for="client in response?.data" :key="client.id" class="border-t-1 tw-group tw-relative tw-border-gray-200 tw-transition-all tw-duration-300">
                                                <td class="tw-text-left tw-min-h-[42px] tw-whitespace-nowrap tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-normal tw-text-gray-800 dark:text-white sm:tw-pl-6">
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger as-child>
                                                                <div @click="copy(client.id)" class="tw-flex tw-items-center">
                                                                    <div class="tw-inline-flex tw-w-max tw-cursor-pointer tw-ml-3">
                                                                        <span class="tw-cursor-pointer">{{ client.id }}</span>
                                                                    </div>
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <span v-if="!copied">Copy to Clipboard</span>
                                                                <span v-else>Copied to Clipboard</span>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </td>
                                                <td class="tw-text-left tw-min-h-[42px] tw-whitespace-nowrap tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-normal tw-text-gray-800 dark:text-white sm:tw-pl-6">
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger as-child>
                                                                <div @click="copy(client.password)" class="tw-flex tw-items-center">
                                                                    <div class="tw-inline-flex tw-w-max tw-cursor-pointer tw-ml-3">
                                                                        <span class="tw-cursor-pointer">{{ client.password }}</span>
                                                                    </div>
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <span v-if="!copied">Copy to Clipboard</span>
                                                                <span v-else>Copied to Clipboard</span>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </td>
                                                <td class="tw-text-left tw-min-h-[42px] tw-whitespace-nowrap tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-normal tw-text-gray-800 dark:text-white sm:tw-pl-6"></td>
                                                <td class="tw-pr-4 sm:pr-6 tw-relative tw-w-8 tw-whitespace-nowrap tw-py-3.5 tw-pl-4 tw-text-sm tw-font-normal">
                                                    <DropdownMenu >
                                                        <DropdownMenuTrigger as-child>
                                                            <button>
                                                                <div class="z-20 tw-inline-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-full tw-bg-opacity-20 tw-p-1 tw-text-gray-600 tw-transition-all tw-duration-300 hover:tw-bg-primary-500 hover:tw-bg-opacity-30 hover:tw-text-gray-200 focus:outline-none">
                                                                    <svg data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="icon">
                                                                        <path fill="currentColor" d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"></path>
                                                                    </svg>
                                                                </div>
                                                            </button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent class="tw-absolute tw-w-56 -tw-right-3 tw-mt-2">
                                                            <div class="tw-px-1 tw-py-1">
                                                                <DropdownMenuItem class="focus:tw-text-white focus:tw-bg-gray-500 tw-text-xs">
                                                                    <Wrench class="tw-mr-2 tw-h-4 tw-w-4"/>
                                                                    <span>Install client</span>
                                                                </DropdownMenuItem>
                                                            </div>
                                                            <DropdownMenuSeparator />
                                                            <div class="tw-px-1 tw-py-1">
                                                                <DropdownMenuItem @click="triggerDelete(client)" class="focus:tw-text-white focus:tw-bg-gray-500 tw-text-xs">
                                                                    <Trash2 class="tw-mr-2 tw-h-4 tw-w-4"/>
                                                                    <span>Delete</span>
                                                                </DropdownMenuItem>
                                                            </div>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tw-relative tw-z-0 -tw-mx-4 tw-mt-2 sm:-tw-mx-6 lg:tw-px-8">
                        <div class="tw-inline-block tw-min-w-full tw-align-middle sm:tw-px-6 lg:tw-px-8">
                            <div class="tw-border-t tw-border-gray-200 tw-bg-gray-50 dark:tw-border-gray-700 dark:tw-bg-gray-500">
                                <div>
                                    <div colspan="5" class="tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-left tw-text-sm tw-font-semibold tw-text-gray-600 sm:tw-pl-6">
                                        <div class="tw-flex tw-w-full tw-items-center tw-justify-between">
                                            <div class="tw-flex tw-items-center tw-justify-between">
                                                <span class="tw-text-xs tw-text-gray-500"> Showing <span class="tw-font-medium">{{ 1 + (page*20)}}</span> to <span class="tw-font-medium">{{ response?.data?.length + (page*20) }}</span> of <span class="tw-font-medium">{{ response?.meta?.count}}</span> results </span>
                                            </div>
                                            <div class="tw-flex-1"></div>
                                            <div class="tw-flex tw-w-full tw-max-w-[90px] tw-items-center tw-justify-between">
                                                <button @click="previous" class="tw-rounded-full tw-p-1 tw-text-gray-500 tw-transition-all tw-duration-300 hover:tw-bg-gray-300 hover:tw-text-primary-600 disabled:tw-cursor-not-allowed disabled:tw-text-gray-300 hover:disabled:tw-bg-transparent hover:dark:tw-bg-gray-900 disabled:dark:tw-text-gray-700 hover:dark:disabled:tw-bg-transparent" :disabled="page === 0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="tw-h-6 tw-w-6">
                                                        <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd"></path>
                                                    </svg>
                                                </button>
                                                <button @click="next" class="tw-rounded-full tw-p-1 tw-text-gray-500 tw-transition-all tw-duration-300 hover:tw-bg-gray-300 hover:tw-text-primary-600 disabled:tw-cursor-not-allowed disabled:tw-text-gray-300 hover:disabled:tw-bg-transparent hover:dark:tw-bg-gray-900 disabled:dark:tw-text-gray-700 hover:dark:disabled:tw-bg-transparent" :disabled="disabledNext">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="tw-h-6 tw-w-6">
                                                        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tw-h-12 tw-w-full"></div>
            </div>
        </div>
        <AddClientModal :is_active="clientModal" @close="closeModal" @save="createClientAccess"></AddClientModal>
        <Confirm v-if="activeClient" :is_active="delConfirm" @close="() => delConfirm = false" >
            <div>Are you sure you want to delete #{{ activeClient?.id }}?</div>
        </Confirm> -->
    </new-page-wrapper>
</template>
<script setup lang="ts">
import { Wrench, Trash2 } from "lucide-vue-next";
// import TooltipProvider from "@/components/ui/tooltip/TooltipProvider.vue";
// import Tooltip from "@components/ui/tooltip/Tooltip.vue";
// import TooltipTrigger from "@/components/ui/tooltip/TooltipTrigger.vue";
// import TooltipContent from "@/components/ui/tooltip/TooltipContent.vue";
const { $api } = useNuxtApp();
import { useClipboard } from '@vueuse/core'
import AddClientModal from "~/components/clients/AddClientModal.vue";
// import Confirm from "@/components/ui/dialog/Confirm.vue";

import type { ClientAuth } from "#build/types";
const { copy, copied } = useClipboard()

const clientsAuth = ref([])
const meta = ref({})
const page = ref(0);
const filter = ref('');
const activeClient = ref(null);
const delConfirm = ref(false);

const clientModal = ref(false);

const { data: response, pending, refresh } = useAsyncData(`clients-auth-${page.value}`, () => $api.clientAuth.paginate(page.value, filter.value));

const triggerDelete = (client) => {
    activeClient.value = client;
    delConfirm.value = true;
}

const disabledNext = computed(() => {
    return Math.ceil(response?.value?.meta?.count / 20) === page.value + 1
});
const next = async () => {
    page.value += 1;
    await refresh()
}

const previous = async () => {
    page.value -= 1;
    await refresh()
}

const filterList = () => {
    refresh()
}

const closeModal = async () => {
    clientModal.value = false;
}
const openAddClient = () => {
    clientModal.value = true;
}

const createClientAccess = async (data) => {
    const authClient: ClientAuth = {
        id: data.id,
        password: data.password
    };
    await $api.clientAuth.create(authClient);
    await closeModal();
    await refresh();
}
</script>

<style scoped>
.icon {
    display: inline-block;
    vertical-align: middle;
}
</style>
