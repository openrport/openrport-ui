<template>
    <div class="h-full w-full flex-1">
        <div class="relative">
            <div class="primary relative grid grid-cols-7"><!---->
                <div class="primary col-span-2">
                    <div class="max-h-[550px] min-h-[550px] overflow-y-auto px-6 py-4">
                        <div class="flex flex-col">
                            <div class="relative mt-1 flex w-full flex-col"><input id="op07NLb9G5"
                                    class="border-white text-white focus:border-white input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
                                    placeholder=" " type="text" autocomplete="off"><label
                                    class="order-1 flex pb-1 pl-1 text-white text-sm font-normal"
                                    for="op07NLb9G5">Command name</label></div><!----><!---->
                        </div>
                        <div data-v-e6ecae96="" class="flex flex-col mt-1"><label data-v-e6ecae96=""
                                class="text-sm font-normal text-white">Tags</label>
                            <div data-v-e6ecae96=""
                                class="mt-1 flex min-h-[40px] flex-wrap overflow-hidden rounded border border-white">
                                <input data-v-e6ecae96=""
                                    class="flex-auto border-none bg-transparent p-2 text-sm text-white placeholder-gray-300 outline-none"
                                    placeholder="Add a tag by typing"></div><!----><!----><!----><!---->
                        </div><!----><!----><!----><!---->
                        <div class="flex flex-col mt-1">
                            <div class="relative mt-1 flex w-full flex-col"><input id="v5KL7SbcZQ"
                                    class="border-white text-white focus:border-white input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
                                    placeholder=" " type="number" autocomplete="off"><label
                                    class="order-1 flex pb-1 pl-1 text-white text-sm font-normal" for="v5KL7SbcZQ">Time
                                    out (seconds)</label></div><!----><!---->
                        </div><!----><!---->
                    </div>
                    <div class="flex h-[55px] items-center justify-center border-t border-[#133B66]">
                        <div class="grid grid-cols-3 rounded-l-md"><button
                                class="cursor-not-allowed hover:opacity-100 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none col-span-3 secondary"
                                disabled="" type="button"><!----> Save </button><!----></div><button
                            class="hover:opacity-80 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none ml-2 bg-white bg-opacity-10"
                            type="button"><!----> Load </button><!---->
                    </div>
                </div>
                <div class="col-span-5">
                    <div
                        class="command-editor max-h-[550px] min-h-[550px] overflow-auto overflow-auto bg-[#224A75] text-xs text-gray-200">
                        <div class="prism-editor-wrapper my-editor p-2">
                            <div class="prism-editor__line-numbers"
                                style="min-height: 16px; border-top-left-radius: 0px; border-bottom-left-radius: 0px; background-color: rgba(0, 0, 0, 0); margin-top: 0px; padding-top: 0px; font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace; font-size: 12px; line-height: 16px; margin-bottom: 0px;"
                                aria-hidden="true">
                                <div class="prism-editor__line-width-calc"
                                    style="height: 0px; visibility: hidden; pointer-events: none;">999</div>
                                <div class="prism-editor__line-number token comment">1</div>
                            </div>
                            <div class="prism-editor__container"><textarea
                                    class="prism-editor__textarea prism-editor__textarea--empty" spellcheck="false"
                                    autocapitalize="none" autocomplete="off" autocorrect="off" data-gramm="false"
                                    placeholder="" data-testid="textarea"></textarea>
                                <pre class="prism-editor__editor" data-testid="preview"
                                    style="border-top-left-radius: 0px; border-bottom-left-radius: 0px;"><br></pre>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex h-[55px] items-center justify-between border-t border-[#133B66] bg-[#224A75] p-2 shadow-md">
                        <div><button
                                class="cursor-not-allowed hover:opacity-100 px-4 py-2 text-sm text-black rounded inline-flex items-center duration-200 focus:outline-none bg-gray-100 opacity-50"
                                disabled="" type="button"><!----><svg data-v-ca945699=""
                                    xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"
                                    class="icon mr-2">
                                    <path fill="currentColor"
                                        d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m5 11.9l-.7 1.3l-5.3-2.9V7h1.5v4.4l4.5 2.5Z">
                                    </path>
                                </svg><span class="pr-2">Schedule</span></button></div>
                        <div class="flex items-center">
                            <div class="flex flex-col mr-6"><label
                                    class="flex cursor-pointer select-none items-center justify-start text-sm text-gray-200"><input
                                        type="checkbox"
                                        class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 text-transparent">Abort
                                    on error</label><!----></div><!----><span class="mr-4 text-xs text-gray-300"> (CMD +
                                ENTER) </span><button
                                class="hover:opacity-80 px-4 py-2 text-sm text-black rounded inline-flex items-center duration-200 focus:outline-none bg-[#C6F94C]"
                                type="button"><!----><svg data-v-ca945699="" xmlns="http://www.w3.org/2000/svg"
                                    width="24px" height="24px" viewBox="0 0 24 24" class="icon mr-2">
                                    <path fill="currentColor"
                                        d="M9.5 9.325v5.35q0 .6.525.875t1.025-.05l4.15-2.65q.475-.275.475-.85t-.475-.85L11.05 8.5q-.5-.325-1.025-.05t-.525.875ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-10Zm0 8q3.325 0 5.663-2.337T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.337T4 12q0 3.325 2.337 5.663T12 20Z">
                                    </path>
                                </svg><span class="pr-2">Execute</span></button>
                        </div>
                    </div>
                </div>
            </div><!----><!----><!---->
        </div>
    </div>
</template>
