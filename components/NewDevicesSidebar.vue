<template>
    <nav aria-label="Sections" class="hidden h-screen w-96 flex-shrink-0 overflow-auto border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 xl:flex xl:flex-col">
        <div>
            <div class="relative h-screen w-full p-3 px-2">
                <div class="flex h-10 w-full cursor-pointer items-center justify-between rounded border border-gray-400 bg-theme-lighter px-2 text-sm">
                    <form class="w-full">
                      <input class="h-full w-full bg-transparent focus:outline-none" placeholder="Filter">
                    </form>
                  <svg data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" class="icon text-primary">
                        <path fill="currentColor" d="M6 13h12v-2H6M3 6v2h18V6M10 18h4v-2h-4v2Z"></path>
                    </svg>
                </div>
                <div class="relative z-30 mb-4 mt-2 flex flex-nowrap justify-between gap-1">
                    <div class="w-full"><!----></div>
                    <div class="relative flex w-[108px] justify-between gap-0 rounded border border-gray-400 bg-theme-lighter px-1">
                        <div class="inline-flex w-max cursor-pointer">
                          <button  type="button" class="inline-flex items-center duration-200 focus:outline-none rounded-full p-3 px-1 py-2">
                            <span class="flex items-center justify-center">
                              <svg data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 256 256" class="icon">
                                <path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm48-88a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 8 8Z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div class="inline-flex w-max cursor-pointer">
                          <button type="button" class="inline-flex items-center duration-200 focus:outline-none rounded-full p-3 mx-1 px-1 py-2">
                            <span class="flex items-center justify-center" style="">
                              <svg data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="icon">
                                <path fill="currentColor" d="M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      <button @click="toggleClientSetting" type="button" class="inline-flex items-center duration-200 focus:outline-none rounded-full p-3 px-1 py-2">
                        <span class="flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="icon">
                            <path fill="currentColor" d="M13.875 22h-3.75q-.375 0-.65-.25t-.325-.625l-.3-2.325q-.325-.125-.613-.3t-.562-.375l-2.175.9q-.35.125-.7.025t-.55-.425L2.4 15.4q-.2-.325-.125-.7t.375-.6l1.875-1.425Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L2.65 9.9q-.3-.225-.375-.6t.125-.7l1.85-3.225q.175-.35.537-.438t.713.038l2.175.9q.275-.2.575-.375t.6-.3l.3-2.325q.05-.375.325-.625t.65-.25h3.75q.375 0 .65.25t.325.625l.3 2.325q.325.125.613.3t.562.375l2.175-.9q.35-.125.7-.025t.55.425L21.6 8.6q.2.325.125.7t-.375.6l-1.875 1.425q.025.175.025.338v.674q0 .163-.05.338l1.875 1.425q.3.225.375.6t-.125.7l-1.85 3.2q-.2.325-.563.438t-.712-.013l-2.125-.9q-.275.2-.575.375t-.6.3l-.3 2.325q-.05.375-.325.625t-.65.25Zm-1.825-6.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.012 2.475T12.05 15.5Zm0-2q-.625 0-1.063-.438T10.55 12q0-.625.438-1.063t1.062-.437q.625 0 1.063.438T13.55 12q0 .625-.438 1.063t-1.062.437ZM12 12Zm-1 8h1.975l.35-2.65q.775-.2 1.438-.588t1.212-.937l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12q0-.4-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587L11 20Z"></path>
                          </svg>
                        </span>
                      </button>
                        <div v-if="isClientSettingOpen">
                            <div class="absolute right-0 top-full z-20 mt-2 w-52 rounded border border-gray-400 bg-white p-2.5 text-gray-900">
                                <h3 class="pb-1 text-sm font-normal">Client list settings</h3>
                              <div>
                                <button @click="selectItem(1)" class="flex w-full items-center items-center gap-1 rounded-t p-0.5 text-sm font-normal" type="button">
                                  <svg v-if="selectedSettingOpt === 1" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 512 512" class="icon">
                                    <path d="M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z" fill="currentColor"></path>
                                  </svg>
                                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 512 512" class="icon">
                                    <path d="M256 48C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.399c-91.518 0-166.399-74.882-166.399-166.399S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.399 256 422.399z" fill="currentColor"></path>
                                  </svg>
                                  <span>Condensed, single line</span>
                                </button>
                                <button @click="selectItem(2)" class="flex w-full items-center items-center gap-1 p-0.5 text-sm font-normal" type="button">
                                  <svg v-if="selectedSettingOpt === 2" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 512 512" class="icon">
                                    <path d="M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z" fill="currentColor"></path>
                                  </svg>

                                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 512 512" class="icon">
                                    <path d="M256 48C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.399c-91.518 0-166.399-74.882-166.399-166.399S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.399 256 422.399z" fill="currentColor"></path>
                                  </svg>
                                  <span>Comfortable, two lines</span>
                                </button>
                                <button @click="selectItem(3)" class="flex w-full items-center items-center gap-1 rounded-b p-0.5 text-sm font-normal" type="button">
                                  <svg v-if="selectedSettingOpt === 3" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 512 512" class="icon">
                                    <path d="M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z" fill="currentColor"></path>
                                  </svg>

                                  <svg v-else  xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 512 512" class="icon">
                                    <path d="M256 48C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.399c-91.518 0-166.399-74.882-166.399-166.399S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.399 256 422.399z" fill="currentColor"></path>
                                  </svg>
                                  <span>Spacious, three lines</span>
                                </button>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>

<!--                <div class="absolute inset-x-0 bottom-0 top-32">&lt;!&ndash;&ndash;&gt;-->
<!--                    <div class="w-full px-1">-->
<!--                        <div class="relative z-20 flex min-h-10 cursor-pointer items-center justify-between gap-1 rounded py-1 pl-2 pr-2 text-primary-500 hover:bg-gray-200 dark:text-primary-400 hover:dark:bg-gray-800">-->
<!--                            <div class="absolute left-1.5 top-1.5">-->
<!--                              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="icon text-current">-->
<!--                                    <path fill="currentColor"-->
<!--                                        d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.588 1.413T20 20H4ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12V6Z">-->
<!--                                    </path>-->
<!--                                </svg>-->
<!--                            </div>-->
<!--                            <div class="info w-full pl-6">-->
<!--                                <div class="inline-flex w-max cursor-pointer min-w-full">-->
<!--                                    <div class="text-sm font-normal text-current">All</div>-->
<!--                                </div>-->
<!--                            </div>&lt;!&ndash;&ndash;&gt;-->
<!--                        </div>-->
<!--                      <div class="accordion-content">-->

<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="w-full px-1">-->
<!--                        <div class="relative z-20 flex min-h-10 cursor-pointer items-center justify-between gap-1 rounded py-1 pl-2 pr-2 text-primary-500 hover:bg-gray-200 dark:text-primary-400 hover:dark:bg-gray-800">-->
<!--                            <div class="absolute left-1.5 top-1.5">-->
<!--                              <svg  xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="icon text-current">-->
<!--                                    <path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.588 1.413T20 20H4ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12V6Z"></path>-->
<!--                                </svg>-->
<!--                            </div>-->
<!--                            <div class="info w-full pl-6">-->
<!--                                <div class="inline-flex w-max cursor-pointer min-w-full">-->
<!--                                    <div class="text-sm font-normal text-current">Favorites</div>-->
<!--                                </div>-->
<!--                            </div>&lt;!&ndash;&ndash;&gt;-->
<!--                        </div>&lt;!&ndash;&ndash;&gt;-->
<!--                    </div>-->
<!--                    <div class="mt-4 flex w-full items-center justify-center">&lt;!&ndash;&ndash;&gt;</div>-->
<!--                    <div class="my-4 flex items-center justify-between">&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;</div>-->
<!--                </div>-->
              <Accordion :list-style="selectedSettingOpt" :items="accordionItems">
                <template v-slot:title="{ item }">
                  {{ item.title }}
                </template>
                <template v-slot:content="{ item }">
                  {{ item.content}}
                </template>
              </Accordion>
            </div>
        </div>
    </nav>
</template>
<script setup>
import {
  IconFolder,
  IconBrandDebian
} from '@tabler/icons-vue';
import Accordion from './Accordion.vue';
import { useLocalStorage } from "@vueuse/core";

const props = defineProps({
  accordionItems: Array,
  default: [
    { title: "All", content: "Content for item 1" },
    { title: "Favorites", content: "Content for item 2" },
  ]
});

const isClientSettingOpen = ref(false);
const selectedSettingOpt = useLocalStorage('dashboard_nav_drawer_item_lines', 1);

const toggleClientSetting = () => {
  isClientSettingOpen.value = !isClientSettingOpen.value
}

const selectItem = (item) => {
  selectedSettingOpt.value = item;
  isClientSettingOpen.value = false;
}
</script>


