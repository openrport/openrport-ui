<template>
    <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
        <div class="lg:hidden">
            <div class="flex items-center justify-between bg-primary-500 px-4 py-2 sm:px-6">
                <div>
                    <div class="flex justify-center py-6 text-white"><span><svg height="15px" version="1.1"
                                viewBox="0 0 27 15" width="27px" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                                    <g id="Group-16" fill="currentColor" transform="translate(-28.000000, -31.000000)">
                                        <g id="Group" transform="translate(28.000000, 31.000000)">
                                            <path id="Rectangle"
                                                d="M17.5217391,0 C19.4427296,0 21,1.52630199 21,3.40909091 L21,11.5909091 C21,13.473698 19.4427296,15 17.5217391,15 L8.47826087,15 C6.55727044,15 5,13.473698 5,11.5909091 L5,11 L8.478,11 L8.47826087,11.5909091 L17.5217391,11.5909091 L17.5217391,3.40909091 L8.47826087,3.40909091 L8.478,4 L5,4 L5,3.40909091 C5,1.52630199 6.55727044,0 8.47826087,0 L17.5217391,0 Z"
                                                fill-rule="nonzero"></path>
                                            <polygon id="Path" fill-rule="nonzero" points="13 6 13 9 0 9 0 6"></polygon>
                                            <rect id="Rectangle" height="3" width="4" x="23" y="6"></rect>
                                        </g>
                                    </g>
                                </g>
                            </svg></span></div>
                </div>
                <div><button
                        class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        type="button"><span class="sr-only">Open sidebar</span><svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                            class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                        </svg></button></div>
            </div>
        </div>
        <main class="flex flex-1 overflow-hidden">
            <div class="flex flex-1 flex-col overflow-y-auto xl:overflow-hidden"><!---->
                <div class="flex flex-1 xl:overflow-hidden"><!----><!---->
                    <div class="scrollbar-hide max-h-screen flex-1 xl:overflow-y-auto">
                        <div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
                            <div
                                class="home-intro flex h-screen items-center justify-center after:fixed after:inset-x-0 after:bottom-0 after:top-[125px] after:z-[2] after:flex after:bg-white after:content-[''] lg:after:top-[45px] xl:after:top-0">
                                <div class="relative z-[5] w-full text-center"><video autoplay="" class="mx-auto">
                                        <source src="https://qoqbcjgo.users.openrport.io/_nuxt/welcome.6d44cb8b.webm"
                                            type="video/webm">
                                    </video>
                                    <div
                                        class="relative mt-10 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-0">
                                        <nuxt-link to="dashboard"
                                            class="hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none bg-primary flex w-40 max-w-full items-center justify-center"
                                            type="button"><!----> Start </nuxt-link>
                                        <div
                                            class="mb-6 flex items-start md:absolute md:right-0 md:top-1/2 md:-trangray-y-1/2 md:transform">
                                            <div class="flex h-5 items-center">
                                                <input id="showAnimation"
                                                    class="h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-0"
                                                    type="checkbox">
                                            </div><label class="ml-2 text-sm font-medium text-muted"
                                                for="showAnimation"> Don't
                                                show animation after login </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <!-- <div class="page-master">
        <div class="page-wrapper">
            -- Page header --
            -- Page body --
            <div class="page-body">
                <div class="container-xl d-flex flex-column justify-content-center">
                    <div class="empty">
                        <div class="empty-img"><img src="/img/illustrations/undraw_printing_invoices_5r4r.svg" height="128"
                                alt="">
                        </div>
                        <p class="empty-title">No clients found</p>
                        <p class="empty-subtitle text-muted">
                            Try adjusting your search or filter to find what you're looking for.
                        </p>
                        <div class="empty-action">
                            <a href="./." class="btn btn-primary">

                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 5l0 14" />
                                    <path d="M5 12l14 0" />
                                </svg>
                                Add your first client
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>
<script lang="ts" setup>
</script>
