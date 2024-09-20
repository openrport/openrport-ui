<template>
    <new-page-wrapper>
        <div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
            <div class="h-full flex-1">
                <div class="relative z-20 flex h-16 items-center justify-between">
                    <div class="">
                        <h3 class="text-3xl leading-6 text-gray-800 dark:text-white">Scripts</h3>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Execute script on multiple clients</p>
                    </div>
                    <div class="flex-1"></div>
                    <div class="ml-2 flex-shrink-0">
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">&nbsp;</p>
                    </div>
                </div>
                <div class="mt-5 flex h-full flex-col pb-24">
                    <div class="primary relative grid grid-cols-7">
                        <div class="bg-primary-800 col-span-2">
                            <div class="max-h-[550px] min-h-[550px] overflow-y-auto px-6 py-4">
                                <div class="flex flex-col">
                                    <div class="relative mt-1 flex w-full flex-col">
                                        <input id="UCYjjifvFm"
                                            class="border-white text-white focus:border-white input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
                                            placeholder=" " type="text" autocomplete="off">
                                        <label class="order-1 flex pb-1 pl-1 text-white text-sm font-normal"
                                            for="UCYjjifvFm">Script name</label>
                                    </div>
                                </div>
                                <div data-v-e6ecae96="" class="flex flex-col mt-1">
                                    <label data-v-e6ecae96="" class="text-sm font-normal text-white">Tags</label>
                                    <div data-v-e6ecae96=""
                                        class="mt-1 flex min-h-[40px] flex-wrap overflow-hidden rounded border border-white">
                                        <input data-v-e6ecae96=""
                                            class="flex-auto border-none bg-transparent p-2 text-sm text-white placeholder-gray-300 outline-none"
                                            placeholder="Add a tag by typing">
                                    </div>
                                </div>
                                <div class="flex flex-col mt-1">
                                    <div class="relative mt-1 flex w-full flex-col">
                                        <input id="cGFVgCmi0v"
                                            class="border-white text-white focus:border-white input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
                                            placeholder=" " type="text" autocomplete="off">
                                        <label class="order-1 flex pb-1 pl-1 text-white text-sm font-normal"
                                            for="cGFVgCmi0v">Working Directory</label>
                                    </div>
                                </div>
                                <div class="mt-1 text-white">
                                    <div class="relative mt-1 flex w-full flex-col">
                                        <select id="RQzIGFFCdQ"
                                            class="border-white focus:border-white focus:border-1 peer order-2 block h-10 w-full rounded border-theme-border bg-transparent shadow-sm focus:outline-0 focus:ring-0 sm:text-sm">
                                            <option disabled="" hidden="" value=""></option>
                                            <option value="cmd">cmd (Windows only)</option>
                                            <option value="powershell">PowerShell (Windows only)</option>
                                            <option value="systemDefaultShell">System default shell</option>
                                            <option value="tacoscript">Tacoscript (Experimental)</option>
                                        </select>
                                        <label
                                            class="order-1 flex pb-1 pl-1 text-white peer-focus:text-white order-1 text-sm font-medium"
                                            for="RQzIGFFCdQ">Interpreter</label>
                                    </div>
                                </div>
                                <div class="flex flex-col mt-1">
                                    <div class="relative mt-1 flex w-full flex-col">
                                        <input id="lDvEcgdEiZ"
                                            class="border-white text-white focus:border-white input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
                                            placeholder=" " type="number" autocomplete="off">
                                        <label class="order-1 flex pb-1 pl-1 text-white text-sm font-normal"
                                            for="lDvEcgdEiZ">Time out (seconds)</label>
                                    </div>
                                </div>
                                <div class="mt-4 flex justify-center">
                                    <label class="relative inline-flex cursor-pointer items-center text-theme-label">
                                        <input type="checkbox" class="peer sr-only" value="1">
                                        <div
                                            class="after:border-secondary after:bg-secondary peer-checked:bg-secondary peer-checked:bg-opacity-30 peer-checked:after:border-secondary bg-gray-200 bg-opacity-30 peer h-6 w-11 rounded-full after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:after:trangray-x-full peer-focus:ring-0">
                                        </div>
                                        <span class="ml-2 text-sm text-gray-300"> Use sudo
                                            <span class="text-xs">(Unix only)</span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div class="flex h-[55px] items-center justify-center border-t border-[#133B66]">
                                <div class="grid grid-cols-3 rounded-l-md">
                                    <button
                                        class="cursor-not-allowed hover:opacity-100 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none col-span-3 secondary"
                                        disabled="" type="button"> Save </button>
                                </div>
                                <button
                                    class="hover:opacity-80 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none ml-2 bg-white bg-opacity-10"
                                    type="button"> Load </button>
                            </div>
                        </div>
                        <div class="col-span-5">
                            <div
                                class="command-editor max-h-[550px] min-h-[550px] overflow-auto overflow-auto bg-[#224A75] text-xs text-gray-200">
                                <command-editor></command-editor>
                            </div>
                            <div
                                class="flex h-[55px] items-center justify-between border-t border-[#133B66] bg-[#224A75] p-2 shadow-md">
                                <div>
                                    <button
                                        class="cursor-not-allowed hover:opacity-100 px-4 py-2 text-sm text-black rounded inline-flex items-center duration-200 focus:outline-none bg-gray-100 opacity-50"
                                        disabled="" type="button">
                                        <svg data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px"
                                            height="24px" viewBox="0 0 24 24" class="icon mr-2">
                                            <path fill="currentColor"
                                                d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m5 11.9l-.7 1.3l-5.3-2.9V7h1.5v4.4l4.5 2.5Z">
                                            </path>
                                        </svg>
                                        <span class="pr-2">Schedule</span>
                                    </button>
                                </div>
                                <div class="flex items-center">
                                    <div class="flex flex-col mr-6">
                                        <label
                                            class="flex cursor-pointer select-none items-center justify-start text-sm text-gray-200"><input
                                                type="checkbox"
                                                class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 text-transparent">Abort
                                            on error</label>
                                    </div>
                                    <div class="flex flex-col mr-6">
                                        <label
                                            class="flex cursor-pointer select-none items-center justify-start text-sm text-gray-200"><input
                                                type="checkbox"
                                                class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 text-transparent">Execute
                                            concurrently</label>
                                    </div>
                                    <span class="mr-4 text-xs text-gray-300">
                                        (CMD + ENTER) </span>
                                    <button
                                        class="hover:opacity-80 px-4 py-2 text-sm text-black rounded inline-flex items-center duration-200 focus:outline-none bg-[#C6F94C]"
                                        type="button">
                                        <svg data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px"
                                            height="24px" viewBox="0 0 24 24" class="icon mr-2">
                                            <path fill="currentColor"
                                                d="M9.5 9.325v5.35q0 .6.525.875t1.025-.05l4.15-2.65q.475-.275.475-.85t-.475-.85L11.05 8.5q-.5-.325-1.025-.05t-.525.875ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-10Zm0 8q3.325 0 5.663-2.337T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.337T4 12q0 3.325 2.337 5.663T12 20Z">
                                            </path>
                                        </svg>
                                        <span class="pr-2">Execute</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="class relative max-h-[1720px] min-h-[480px] flex-1">
                        <div
                            class="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-theme-dark/80">
                            <span class="text-primary"> Execute scripts on many clients concurrently. The client list
                                will be defined by: </span>
                            <div class="flex w-1/4 flex-col items-center justify-center space-y-2">
                                <button
                                    class="hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none flex w-full items-start justify-start space-x-2 bg-primary"
                                    type="button">
                                    <svg data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px"
                                        height="24px" viewBox="0 0 256 256" class="icon">
                                        <path fill="currentColor"
                                            d="m120 137l-72 64a12 12 0 1 1-16-18l61.91-55L32 73a12 12 0 1 1 16-18l72 64a12 12 0 0 1 0 18Zm96 43h-96a12 12 0 0 0 0 24h96a12 12 0 0 0 0-24Z">
                                        </path>
                                    </svg>
                                    <span>Individual Clients</span>
                                </button>
                                <button
                                    class="hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none flex w-full items-start justify-start space-x-2 bg-primary"
                                    type="button">
                                    <svg data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px"
                                        height="24px" viewBox="0 0 2048 2048" class="icon">
                                        <path fill="currentColor"
                                            d="M1664 1536h-128v-128h128v128zm-256 0h-128v-128h128v128zm256-512h-128V896h128v128zm-256 0h-128V896h128v128zm320-896q40 0 75 15t61 41t41 61t15 75v1472H128V320q0-40 15-75t41-61t61-41t75-15h1408zm64 1152H256v384h1536v-384zm0-512H256v384h1536V768zm0-128V320q0-26-19-45t-45-19H320q-26 0-45 19t-19 45v320h1536zm-256-256h128v128h-128V384zm-256 0h128v128h-128V384z">
                                        </path>
                                    </svg>
                                    <span>Client Groups</span>
                                </button>
                                <button
                                    class="hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none flex w-full items-start justify-start space-x-2 bg-primary"
                                    type="button">
                                    <svg data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px"
                                        height="24px" viewBox="0 0 24 24" class="icon">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round"
                                            strokeLinejoin="round" strokeWidth="1.5"
                                            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5">
                                        </path>
                                    </svg>
                                    <span>Clients Matching</span>
                                </button>
                                <button
                                    class="hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none flex w-full items-start justify-start space-x-2 bg-primary"
                                    type="button">
                                    <svg data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px"
                                        height="24px" viewBox="0 0 24 24" class="icon">
                                        <g fill="none" stroke="currentColor" strokeLinecap="round"
                                            strokeLinejoin="round" strokeWidth="1.5">
                                            <path
                                                d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607l-9.58-9.58A2.25 2.25 0 0 0 9.568 3Z">
                                            </path>
                                            <path d="M6 6h.008v.008H6V6Z"></path>
                                        </g>
                                    </svg>
                                    <span>Clients by tags</span>
                                </button>
                            </div>
                        </div>
                        <div class="relative z-10">
                            <div class="sm:hidden">
                                <label class="sr-only" for="tabs">Select an option</label>
                                <select id="tabs"
                                    class="block w-full rounded-md border-gray-300 bg-theme focus:border-primary focus:ring-primary"
                                    name="tabs">
                                    <option class="text-theme-inverted">Individual Clients</option>
                                    <option class="text-theme-inverted">Client Groups</option>
                                    <option class="text-theme-inverted">Clients Matching</option>
                                    <option class="text-theme-inverted">Clients by tags</option>
                                </select>
                            </div>
                            <div class="hidden sm:block">
                                <div class="border-b border-gray-200">
                                    <div aria-label="Tabs" class="-mb-px flex">
                                        <button
                                            class="border-transparent text-theme-inverted hover:border-primary hover:text-primary group flex w-1/4 items-center justify-center space-x-1 border-b-2 px-1 py-4 text-center text-sm font-medium"><svg
                                                data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px"
                                                height="24px" viewBox="0 0 256 256" class="icon">
                                                <path fill="currentColor"
                                                    d="m120 137l-72 64a12 12 0 1 1-16-18l61.91-55L32 73a12 12 0 1 1 16-18l72 64a12 12 0 0 1 0 18Zm96 43h-96a12 12 0 0 0 0 24h96a12 12 0 0 0 0-24Z">
                                                </path>
                                            </svg>
                                            <span>Individual Clients</span>
                                        </button>
                                        <button
                                            class="border-transparent text-theme-inverted hover:border-primary hover:text-primary group flex w-1/4 items-center justify-center space-x-1 border-b-2 px-1 py-4 text-center text-sm font-medium"><svg
                                                data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px"
                                                height="24px" viewBox="0 0 2048 2048" class="icon">
                                                <path fill="currentColor"
                                                    d="M1664 1536h-128v-128h128v128zm-256 0h-128v-128h128v128zm256-512h-128V896h128v128zm-256 0h-128V896h128v128zm320-896q40 0 75 15t61 41t41 61t15 75v1472H128V320q0-40 15-75t41-61t61-41t75-15h1408zm64 1152H256v384h1536v-384zm0-512H256v384h1536V768zm0-128V320q0-26-19-45t-45-19H320q-26 0-45 19t-19 45v320h1536zm-256-256h128v128h-128V384zm-256 0h128v128h-128V384z">
                                                </path>
                                            </svg>
                                            <span>Client Groups</span>
                                        </button>
                                        <button
                                            class="border-transparent text-theme-inverted hover:border-primary hover:text-primary group flex w-1/4 items-center justify-center space-x-1 border-b-2 px-1 py-4 text-center text-sm font-medium"><svg
                                                data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px"
                                                height="24px" viewBox="0 0 24 24" class="icon">
                                                <path fill="none" stroke="currentColor" strokeLinecap="round"
                                                    strokeLinejoin="round" strokeWidth="1.5"
                                                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5">
                                                </path>
                                            </svg>
                                            <span>Clients Matching</span>
                                        </button>
                                        <button
                                            class="border-transparent text-theme-inverted hover:border-primary hover:text-primary group flex w-1/4 items-center justify-center space-x-1 border-b-2 px-1 py-4 text-center text-sm font-medium"><svg
                                                data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px"
                                                height="24px" viewBox="0 0 24 24" class="icon">
                                                <g fill="none" stroke="currentColor" strokeLinecap="round"
                                                    strokeLinejoin="round" strokeWidth="1.5">
                                                    <path
                                                        d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607l-9.58-9.58A2.25 2.25 0 0 0 9.568 3Z">
                                                    </path>
                                                    <path d="M6 6h.008v.008H6V6Z"></path>
                                                </g>
                                            </svg>
                                            <span>Clients by tags</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </new-page-wrapper>
</template>

<script>
export default {

}
</script>
<style scoped></style>