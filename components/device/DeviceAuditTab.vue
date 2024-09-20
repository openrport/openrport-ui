<template>
  <div class="h-full w-full flex-1">
    <div data-v-8efdf101="" class="min-h-[600px] w-full px-1">
      <div data-v-8efdf101="" class="flex w-full">
        <div data-v-8efdf101="" data-headlessui-state="" id="vtd" class="relative w-full">
          <!----><label
            class="relative block"
            id="headlessui-popover-button-31"
            aria-expanded="false"
            data-headlessui-state=""
            ><div data-v-8efdf101="" class="flex">
              <div data-v-8efdf101="" class="relative w-full lg:w-1/2">
                <input
                  data-v-8efdf101=""
                  id="startDate"
                  class="border-1 peer block w-full min-w-[250px] appearance-none rounded border-gray-300 bg-transparent px-2.5 pb-2.5 pr-12 pt-4 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                  type="text"
                /><label
                  data-v-8efdf101=""
                  class="absolute left-1 top-2 z-10 origin-[0] -trangray-y-4 scale-75 transform bg-theme px-2 text-sm text-theme-label duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-trangray-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-trangray-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary"
                  for="startDate"
                  >Audit starting date (UTC) </label
                ><button
                  data-v-8efdf101=""
                  type="button"
                  class="inline-flex items-center duration-200 focus:outline-none rounded-full p-3 absolute right-0 top-0 text-gray-500 peer-focus:text-primary"
                >
                  <span
                    class="flex items-center justify-center"
                    style="width: 24px; height: 24px"
                    ><svg
                      data-v-ca945699=""
                      data-v-8efdf101=""
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      class="icon"
                    >
                      <path
                        fill="currentColor"
                        d="M5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V3q0-.425.288-.713T7 2q.425 0 .713.288T8 3v1h8V3q0-.425.288-.713T17 2q.425 0 .713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10ZM5 8h14V6H5v2Zm0 0V6v2Zm7 6q-.425 0-.713-.288T11 13q0-.425.288-.713T12 12q.425 0 .713.288T13 13q0 .425-.288.713T12 14Zm-4 0q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12q.425 0 .713.288T9 13q0 .425-.288.713T8 14Zm8 0q-.425 0-.713-.288T15 13q0-.425.288-.713T16 12q.425 0 .713.288T17 13q0 .425-.288.713T16 14Zm-4 4q-.425 0-.713-.288T11 17q0-.425.288-.713T12 16q.425 0 .713.288T13 17q0 .425-.288.713T12 18Zm-4 0q-.425 0-.713-.288T7 17q0-.425.288-.713T8 16q.425 0 .713.288T9 17q0 .425-.288.713T8 18Zm8 0q-.425 0-.713-.288T15 17q0-.425.288-.713T16 16q.425 0 .713.288T17 17q0 .425-.288.713T16 18Z"
                      ></path></svg
                  ></span>
                </button>
              </div></div></label
          ><!----><!---->
        </div>
      </div>
      <div data-v-8efdf101="" class="table-responsive-wrap mt-4 flex w-full">
        <div data-v-8efdf101="" class="relative z-10 w-full">
          <!---->
          <div
            class="flow-root overflow-hidden border border-gray-100 ring-1 ring-black ring-opacity-10 dark:border-gray-600 sm:rounded-lg"
          >
            <div class="overflow-auto relative z-10 -mb-2">
              <div class="inline-block min-w-full align-middle">
                <div class="sm:rounded-t-lg overflow-hidden">
                  <div>
                    <table
                      class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                    >
                      <thead class="rounded-lg bg-gray-50 dark:bg-gray-950">
                        <tr>
                          <th
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
                            scope="col"
                          >
                            <button disabled="">
                              <span>Application</span
                              ><!---->
                            </button>
                          </th>
                          <th
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
                            scope="col"
                          >
                            <button disabled="">
                              <span>Action</span
                              ><!---->
                            </button>
                          </th>
                          <th
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
                            scope="col"
                          >
                            <button disabled="">
                              <span>Date</span
                              ><!---->
                            </button>
                          </th>
                          <th
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
                            scope="col"
                          >
                            <button disabled="">
                              <span></span
                              ><!---->
                            </button>
                          </th>
                          <th
                            class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-800 sm:pl-6"
                          ></th>
                          <!---->
                        </tr>
                      </thead>
                      <tbody
                        class="z-10 divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900"
                      >
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client script</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Execution ended</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 16:20 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-93"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 316px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
                        </tr>
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client script</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Execution ended</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 16:19 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-95"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 377px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
                        </tr>
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client script</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Execution started</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 16:15 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-97"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 438px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
                        </tr>
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client script</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Execution ended</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 16:14 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-99"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 499px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
                        </tr>
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client script</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Execution started</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 16:14 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-101"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 560px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
                        </tr>
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client script</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Execution started</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 16:14 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-103"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 621px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
                        </tr>
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client script</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Execution ended</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 15:57 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-105"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 682px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
                        </tr>
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client script</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Execution ended</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 15:52 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-107"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 743px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
                        </tr>
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client script</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Execution started</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 15:52 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-109"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 804px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
                        </tr>
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client script</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Execution started</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 15:52 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-111"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 865px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
                        </tr>
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client script</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Execution ended</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 15:51 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-113"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 926px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
                        </tr>
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client script</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Execution started</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 15:51 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-115"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 987px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
                        </tr>
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client script</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Execution ended</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 15:50 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-117"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 1048px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
                        </tr>
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client script</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Execution started</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 15:50 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-119"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 1109px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
                        </tr>
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client script</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Execution started</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 15:49 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-121"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 1170px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
                        </tr>
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client script</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Execution started</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 15:42 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-123"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 1231px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
                        </tr>
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client tunnel</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Created</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 15:40 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-125"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 1292px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
                        </tr>
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client script</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Execution started</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 15:37 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-127"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 1353px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
                        </tr>
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client script</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Execution started</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 15:37 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-129"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 1414px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
                        </tr>
                        <tr
                          class="border-t-1 group relative border-gray-200 transition-all duration-300"
                        >
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Application</span
                            ><span data-v-8efdf101="" class="capitalize"
                              >client script</span
                            >
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Action</span
                            ><span data-v-8efdf101="">Execution started</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          >
                            <span data-v-8efdf101="" class="font-semibold lg:hidden"
                              >Date</span
                            ><span data-v-8efdf101="">2024-07-02 15:36 UTC</span>
                          </td>
                          <td
                            class="w-full lg:w-52 group-hover:bg-gray-table-tr-hover text-right text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
                          ></td>
                          <td
                            class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
                          >
                            <div
                              data-headlessui-state=""
                              class="text-blue-600 hover:text-blue-900"
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-131"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <div
                                    class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"
                                  >
                                    <svg
                                      data-v-ca945699=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      class="icon"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div class="z-20">
                                <div style="top: 1475px" class="fixed z-30"><!----></div>
                              </div>
                            </div>
                          </td>
                          <!----><!---->
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
                  class="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-950"
                >
                  <div>
                    <div
                      colspan="6"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-600 sm:pl-6"
                    >
                      <div class="flex w-full items-center justify-between">
                        <div class="flex items-center justify-between">
                          <span class="text-xs text-gray-500">
                            Showing <span class="font-medium">1</span> to
                            <span class="font-medium">20</span> of
                            <span class="font-medium">23</span> results
                          </span>
                        </div>
                        <div class="flex-1"></div>
                        <div
                          class="flex w-full max-w-[90px] items-center justify-between"
                        >
                          <button
                            disabled=""
                            class="rounded-full p-1 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-primary-600 disabled:cursor-not-allowed disabled:text-gray-300 hover:disabled:bg-transparent hover:dark:bg-gray-900 disabled:dark:text-gray-700 hover:dark:disabled:bg-transparent"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              class="h-6 w-6"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                clip-rule="evenodd"
                              ></path>
                            </svg></button
                          ><button
                            class="rounded-full p-1 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-primary-600 disabled:cursor-not-allowed disabled:text-gray-300 hover:disabled:bg-transparent hover:dark:bg-gray-900 disabled:dark:text-gray-700 hover:dark:disabled:bg-transparent"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              class="h-6 w-6"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clip-rule="evenodd"
                              ></path>
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
          <div class="h-12 w-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>
