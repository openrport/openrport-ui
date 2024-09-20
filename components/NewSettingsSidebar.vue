<template>
    <nav aria-label="Sections"
        class="hidden w-96 flex-shrink-0 border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 xl:flex xl:flex-col">
        <div class="flex h-16 flex-shrink-0 items-center border-b border-gray-200 px-6 dark:border-gray-700">
            <p class="text-lg font-medium text-gray-900 dark:text-gray-50">Settings</p>
        </div>
        <div class="min-h-0 flex-1 overflow-y-auto">
            <nuxt-link to="/profile"
                class="hover:bg-blue-300 hover:bg-opacity-50 flex border-b border-gray-200 p-6 dark:border-gray-700"><svg
                    data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"
                    class="icon -mt-0.5 h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true">
                    <path fill="currentColor"
                        d="M12 11q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11Zm0 2q-1.65 0-2.825-1.175Q8 10.65 8 9q0-1.65 1.175-2.825Q10.35 5 12 5q1.65 0 2.825 1.175Q16 7.35 16 9q0 1.65-1.175 2.825Q13.65 13 12 13Zm0 11q-2.475 0-4.662-.938q-2.188-.937-3.825-2.574Q1.875 18.85.938 16.663Q0 14.475 0 12t.938-4.663q.937-2.187 2.575-3.825Q5.15 1.875 7.338.938Q9.525 0 12 0t4.663.938q2.187.937 3.825 2.574q1.637 1.638 2.574 3.825Q24 9.525 24 12t-.938 4.663q-.937 2.187-2.574 3.825q-1.638 1.637-3.825 2.574Q14.475 24 12 24Zm0-2q1.8 0 3.375-.575T18.25 19.8q-.825-.925-2.425-1.612q-1.6-.688-3.825-.688t-3.825.688q-1.6.687-2.425 1.612q1.3 1.05 2.875 1.625T12 22Zm-7.7-3.6q1.2-1.3 3.225-2.1q2.025-.8 4.475-.8q2.45 0 4.463.8q2.012.8 3.212 2.1q1.1-1.325 1.713-2.95Q22 13.825 22 12q0-2.075-.788-3.887q-.787-1.813-2.15-3.175q-1.362-1.363-3.175-2.151Q14.075 2 12 2q-2.05 0-3.875.787q-1.825.788-3.187 2.151Q3.575 6.3 2.788 8.113Q2 9.925 2 12q0 1.825.6 3.463q.6 1.637 1.7 2.937Z">
                    </path>
                </svg>
                <div class="ml-3 text-sm">
                    <p class="font-medium text-gray-900 dark:text-gray-50">Profile</p>
                    <p class="mt-1 text-gray-500 dark:text-gray-400">Personalize your profile</p>
                </div>
            </nuxt-link>
            <nuxt-link to="/users"
                class="hover:bg-blue-300 hover:bg-opacity-50 flex border-b border-gray-200 p-6 dark:border-gray-700"><svg
                    data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                    viewBox="0 0 256 256" class="icon -mt-0.5 h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true">
                    <path fill="currentColor"
                        d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56Z">
                    </path>
                </svg>
                <div class="ml-3 text-sm">
                    <p class="font-medium text-gray-900 dark:text-gray-50">Users</p>
                    <p class="mt-1 text-gray-500 dark:text-gray-400"> Manage users access</p>
                </div>
            </nuxt-link>
            <nuxt-link to="/user-groups"
                class="hover:bg-blue-300 hover:bg-opacity-50 flex border-b border-gray-200 p-6 dark:border-gray-700"><svg
                    data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                    viewBox="0 0 256 256" class="icon -mt-0.5 h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true">
                    <path fill="currentColor"
                        d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1-7.37-4.89a8 8 0 0 1 0-6.22A8 8 0 0 1 192 112a24 24 0 1 0-23.24-30a8 8 0 1 1-15.5-4A40 40 0 1 1 219 117.51a67.94 67.94 0 0 1 27.43 21.68a8 8 0 0 1-1.63 11.21ZM190.92 212a8 8 0 1 1-13.84 8a57 57 0 0 0-98.16 0a8 8 0 1 1-13.84-8a72.06 72.06 0 0 1 33.74-29.92a48 48 0 1 1 58.36 0A72.06 72.06 0 0 1 190.92 212ZM128 176a32 32 0 1 0-32-32a32 32 0 0 0 32 32Zm-56-56a8 8 0 0 0-8-8a24 24 0 1 1 23.24-30a8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.51a67.94 67.94 0 0 0-27.4 21.68a8 8 0 1 0 12.8 9.61A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8Z">
                    </path>
                </svg>
                <div class="ml-3 text-sm">
                    <p class="font-medium text-gray-900 dark:text-gray-50">User groups</p>
                    <p class="mt-1 text-gray-500 dark:text-gray-400">Manage user groups and their permissions
                    </p>
                </div>
            </nuxt-link>
            <nuxt-link to="/client-access"
                class="hover:bg-blue-300 hover:bg-opacity-50 flex border-b border-gray-200 p-6 dark:border-gray-700"><svg
                    data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"
                    class="icon -mt-0.5 h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true">
                    <path fill="currentColor"
                        d="M2 20v-3h2V6q0-.825.588-1.413T6 4h15v2H6v11h6v3H2Zm13 0q-.425 0-.713-.288T14 19V9q0-.425.288-.713T15 8h6q.425 0 .713.288T22 9v10q0 .425-.288.713T21 20h-6Zm1-3h4v-7h-4v7Z">
                    </path>
                </svg>
                <div class="ml-3 text-sm">
                    <p class="font-medium text-gray-900 dark:text-gray-50">Client access</p>
                    <p class="mt-1 text-gray-500 dark:text-gray-400">Manage client access and permissions</p>
                </div>
            </nuxt-link>
            <nuxt-link to="/client-groups"
                class="hover:bg-blue-300 hover:bg-opacity-50 flex border-b border-gray-200 p-6 dark:border-gray-700"><svg
                    data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                    viewBox="0 0 2048 2048" class="icon -mt-0.5 h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true">
                    <path fill="currentColor"
                        d="M1664 1536h-128v-128h128v128zm-256 0h-128v-128h128v128zm256-512h-128V896h128v128zm-256 0h-128V896h128v128zm320-896q40 0 75 15t61 41t41 61t15 75v1472H128V320q0-40 15-75t41-61t61-41t75-15h1408zm64 1152H256v384h1536v-384zm0-512H256v384h1536V768zm0-128V320q0-26-19-45t-45-19H320q-26 0-45 19t-19 45v320h1536zm-256-256h128v128h-128V384zm-256 0h128v128h-128V384z">
                    </path>
                </svg>
                <div class="ml-3 text-sm">
                    <p class="font-medium text-gray-900 dark:text-gray-50">Client groups</p>
                    <p class="mt-1 text-gray-500 dark:text-gray-400">Manage client groups</p>
                </div>
            </nuxt-link>
            <nuxt-link to="/vault"
                class="hover:bg-blue-300 hover:bg-opacity-50 flex border-b border-gray-200 p-6 dark:border-gray-700"><svg
                    data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                    viewBox="0 0 256 256" class="icon -mt-0.5 h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true">
                    <path fill="currentColor"
                        d="M216 40H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h16v16a8 8 0 0 0 16 0v-16h112v16a8 8 0 0 0 16 0v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 152H40V56h176v64h-16.68a48 48 0 1 0 0 16H216v56Zm-50.16-72a16 16 0 1 0 0 16H183a32 32 0 1 1 0-16Z">
                    </path>
                </svg>
                <div class="ml-3 text-sm">
                    <p class="font-medium text-gray-900 dark:text-gray-50">Vault</p>
                    <p class="mt-1 text-gray-500 dark:text-gray-400">Initialize, lock and unlock the encrypted
                        database.</p>
                </div>
            </nuxt-link>
            <nuxt-link to="/api-tokens"
                class="hover:bg-blue-300 hover:bg-opacity-50 flex border-b border-gray-200 p-6 dark:border-gray-700"><svg
                    data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"
                    class="icon -mt-0.5 h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true">
                    <path fill="currentColor"
                        d="M12 21.7q-.25 0-.5-.062t-.475-.188l-7-3.875q-.475-.275-.75-.738T3 15.825v-7.65q0-.55.275-1.012t.75-.738l7-3.875q.225-.125.475-.187T12 2.3q.25 0 .5.063t.475.187l7 3.875q.475.275.75.738T21 8.175v7.65q0 .55-.275 1.013t-.75.737l-7 3.875q-.225.125-.475.188t-.5.062ZM9.1 9.25q.55-.575 1.288-.913T12 8q.875 0 1.613.338t1.287.912l3-1.675L12 4.3L6.1 7.575l3 1.675Zm1.9 9.9v-3.275q-1.3-.35-2.15-1.413T8 12q0-.275.025-.525t.1-.475L5 9.25v6.575l6 3.325ZM12 14q.825 0 1.413-.588T14 12q0-.825-.588-1.413T12 10q-.825 0-1.413.588T10 12q0 .825.588 1.413T12 14Zm1 5.15l6-3.325V9.25L15.875 11q.075.25.1.488T16 12q0 1.4-.85 2.463T13 15.875v3.275Z">
                    </path>
                </svg>
                <div class="ml-3 text-sm">
                    <p class="font-medium text-gray-900 dark:text-gray-50">API Tokens</p>
                    <p class="mt-1 text-gray-500 dark:text-gray-400">Manage and generate API tokens</p>
                </div>
            </nuxt-link>
            <nuxt-link to="/info"
                class="hover:bg-blue-300 hover:bg-opacity-50 flex border-b border-gray-200 p-6 dark:border-gray-700"><svg
                    data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"
                    class="icon -mt-0.5 h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true">
                    <path fill="currentColor"
                        d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.713T12 11q-.425 0-.713.288T11 12v4q0 .425.288.713T12 17Zm0-8q.425 0 .713-.288T13 8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8q0 .425.288.713T12 9Zm0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z">
                    </path>
                </svg>
                <div class="ml-3 text-sm">
                    <p class="font-medium text-gray-900 dark:text-gray-50">Info</p>
                    <p class="mt-1 text-gray-500 dark:text-gray-400">Get all the information about your system
                    </p>
                </div>
            </nuxt-link>
            <nuxt-link to="/support"
                class="hover:bg-blue-300 hover:bg-opacity-50 flex border-b border-gray-200 p-6 dark:border-gray-700"><svg
                    data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"
                    class="icon -mt-0.5 h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true">
                    <path fill="currentColor"
                        d="M11.95 18q.525 0 .888-.363t.362-.887q0-.525-.362-.888t-.888-.362q-.525 0-.887.363t-.363.887q0 .525.363.888t.887.362Zm.05 4q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Zm.1-4.3q.625 0 1.088.4t.462 1q0 .55-.337.975t-.763.8q-.575.5-1.012 1.1t-.438 1.35q0 .35.263.588t.612.237q.375 0 .638-.25t.337-.625q.1-.525.45-.938t.75-.787q.575-.55.988-1.2t.412-1.45q0-1.275-1.038-2.087T12.1 6q-.95 0-1.812.4T8.975 7.625q-.175.3-.113.638t.338.512q.35.2.725.125t.625-.425q.275-.375.688-.575t.862-.2Z">
                    </path>
                </svg>
                <div class="ml-3 text-sm">
                    <p class="font-medium text-gray-900 dark:text-gray-50">Support</p>
                    <p class="mt-1 text-gray-500 dark:text-gray-400">Request assistance and guidance</p>
                </div>
            </nuxt-link>
            <!-- <a href="https://downloads.rport.io/frontend/license.html" rel="noopener noreferrer" target="_self"
                class="hover:bg-blue-300 hover:bg-opacity-50 flex border-b border-gray-200 p-6 dark:border-gray-700"><svg
                    data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"
                    class="icon -mt-0.5 h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true">
                    <path fill="currentColor"
                        d="M7 16q.425 0 .713-.288T8 15q0-.425-.288-.713T7 14q-.425 0-.713.288T6 15q0 .425.288.713T7 16Zm0-3q.425 0 .713-.288T8 12V9q0-.425-.288-.713T7 8q-.425 0-.713.288T6 9v3q0 .425.288.713T7 13Zm4 2h6q.425 0 .713-.288T18 14q0-.425-.288-.713T17 13h-6q-.425 0-.713.288T10 14q0 .425.288.713T11 15Zm0-4h6q.425 0 .713-.288T18 10q0-.425-.288-.713T17 9h-6q-.425 0-.713.288T10 10q0 .425.288.713T11 11Zm-7 9q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm0-2h16V6H4v12Zm0 0V6v12Z">
                    </path>
                </svg>
                <div class="ml-3 text-sm">
                    <p class="font-medium text-gray-900 dark:text-gray-50">License</p>
                    <p class="mt-1 text-gray-500 dark:text-gray-400">See your license</p>
                </div>
            </a> -->
        </div>
    </nav><!---->
</template>