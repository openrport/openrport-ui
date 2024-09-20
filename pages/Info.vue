<template>
    <new-page-wrapper isExtra="true">
        <div class="flex flex-1 xl:overflow-hidden">
            <new-settings-sidebar />
            <div class="scrollbar-hide max-h-screen flex-1 xl:overflow-y-auto">
                <div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
                    <div class="relative z-20 flex h-16 items-center justify-between">
                        <div class="">
                            <h3 class="text-3xl leading-6 text-gray-800 dark:text-white">Info</h3>
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">&nbsp;</p>
                        </div>
                        <div class="flex-1"></div>
                        <div class="ml-2 flex-shrink-0"><button
                                class="bg-primary-500 hover:bg-primary-800 focus-visible:outline-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                type="button"><!----><!----><span
                                    class="flex items-center justify-center gap-x-2"><!----> Reload</span></button>
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">&nbsp;</p>
                        </div>
                    </div><!---->
                    <div class="flex flex-col gap-y-8">
                        <div
                            class="flex flex-1 flex-col divide-y divide-gray-50 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-900">
                            <div class="px-4 py-4 sm:flex sm:items-center sm:px-6"><!----><!----></div>
                            <div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
                                <div class="h-full w-full">
                                    <div>
                                        <div class="px-4 sm:px-0">
                                            <h3 class="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50">
                                                Server Api</h3>
                                            <p
                                                class="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-500">
                                            </p>
                                        </div>
                                        <div class="mt-6 border-t border-gray-200 dark:border-gray-700">
                                            <dl class="divide-y divide-gray-200 dark:divide-gray-700">
                                                <div class="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt
                                                        class="text-sm font-medium leading-6 text-gray-950 dark:text-white">
                                                        Clients Auth Mode</dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
                                                        <span
                                                            class="bg-primary-50 dark:bg-primary-500/10 text-primary-800 dark:text-primary-400 ring-primary-600/20 dark:ring-primary-400/30 px-2 py-1 inline-flex items-center gap-x-1.5 rounded-md text-xs font-medium ring-1 ring-inset"><!----><svg
                                                                data-v-ca945699="" xmlns="http://www.w3.org/2000/svg"
                                                                width="16px" height="16px" viewBox="0 0 24 24"
                                                                class="icon">
                                                                <path fill="currentColor"
                                                                    d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM4 21q-.425 0-.713-.288T3 20v-2.825q0-.2.075-.388t.225-.337l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225T6.825 21H4Z">
                                                                </path>
                                                            </svg> Read Write<!----></span>
                                                    </dd>
                                                </div>
                                                <div class="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt
                                                        class="text-sm font-medium leading-6 text-gray-950 dark:text-white">
                                                        Clients Auth Mode</dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
                                                        DB</dd>
                                                </div>
                                                <div class="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt
                                                        class="text-sm font-medium leading-6 text-gray-950 dark:text-white">
                                                        Clients connected</dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
                                                        0</dd>
                                                </div>
                                                <div class="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt
                                                        class="text-sm font-medium leading-6 text-gray-950 dark:text-white">
                                                        Clients disconnected</dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
                                                        0</dd>
                                                </div>
                                                <div class="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt
                                                        class="text-sm font-medium leading-6 text-gray-950 dark:text-white">
                                                        Users Auth Source</dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
                                                        <span
                                                            class="bg-primary-50 dark:bg-primary-500/10 text-primary-800 dark:text-primary-400 ring-primary-600/20 dark:ring-primary-400/30 px-2 py-1 inline-flex items-center gap-x-1.5 rounded-md text-xs font-medium ring-1 ring-inset"><!----><span><!---->
                                                            </span><span>DB</span><!----></span>
                                                    </dd>
                                                </div>
                                                <div class="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt
                                                        class="text-sm font-medium leading-6 text-gray-950 dark:text-white">
                                                        Two-factor authentication enabled</dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
                                                        <span
                                                            class="bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 ring-green-600/20 dark:ring-green-400/30 px-2 py-1 inline-flex items-center gap-x-1.5 rounded-md text-xs font-medium ring-1 ring-inset"><!----><svg
                                                                data-v-ca945699="" xmlns="http://www.w3.org/2000/svg"
                                                                width="18px" height="18px" viewBox="0 0 24 24"
                                                                class="icon">
                                                                <g fill="currentColor">
                                                                    <path
                                                                        d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z">
                                                                    </path>
                                                                    <path
                                                                        d="M15.707 9.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0z">
                                                                    </path>
                                                                </g>
                                                            </svg><!----></span>
                                                    </dd>
                                                </div>
                                                <div class="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt
                                                        class="text-sm font-medium leading-6 text-gray-950 dark:text-white">
                                                        Two-factor authentication delivery method</dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
                                                        script</dd>
                                                </div>
                                                <div class="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt
                                                        class="text-sm font-medium leading-6 text-gray-950 dark:text-white">
                                                        Fingerprint</dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
                                                        9b:5e:5b:6a:39:74:49:31:ac:1f:ff:ed:24:d1:e7:2d</dd>
                                                </div>
                                                <div class="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt
                                                        class="text-sm font-medium leading-6 text-gray-950 dark:text-white">
                                                        Version</dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
                                                        0.9.14</dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div><!---->
                        </div>
                        <div
                            class="flex flex-1 flex-col divide-y divide-gray-50 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-900">
                            <div class="px-4 py-4 sm:flex sm:items-center sm:px-6"><!----><!----></div>
                            <div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
                                <div class="h-full w-full">
                                    <div>
                                        <div class="px-4 sm:px-0">
                                            <h3 class="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50">
                                                Frontend</h3>
                                            <p
                                                class="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-500">
                                            </p>
                                        </div>
                                        <div class="mt-6 border-t border-gray-200 dark:border-gray-700">
                                            <dl class="divide-y divide-gray-200 dark:divide-gray-700">
                                                <div class="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt
                                                        class="text-sm font-medium leading-6 text-gray-950 dark:text-white">
                                                        Version</dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
                                                        rport-frontend-0.9.12-17-build-1145
                                                    </dd>
                                                </div>
                                                <div class="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt
                                                        class="text-sm font-medium leading-6 text-gray-950 dark:text-white">
                                                        Download the latest version of VNC® Viewer</dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
                                                        <a href="https://www.realvnc.com/en/connect/download/viewer/"
                                                            rel="noopener noreferrer" target="_blank"
                                                            class="cursor-pointer text-primary-500 underline transition-all duration-300 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-400">go
                                                            to downloads</a>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div><!---->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="container px-5 py-10">
            <page-header title="Info" hasAction={true} actionName="Reload"/>
            <div class="d-flex flex-column gap-3">
              <div class="card table-responsive mb-3">
                <div class="card-header">
                  <h3 class="card-title">Server Api</h3>
                </div>
                <div class="card-body px-6">
                  <div class="mt-1">
                    <dl class="divide-y">
                      <div class="row gap-sm-4 py-4">
                        <dt class="col px-0 fw-medium">Clients Auth Mode</dt>
                        <dd class="col-8 ">
                            <span class="tag bg-azure-lt border text-primary fw-medium">
                              <IconPencil :size="18" />
                              {{ serverStatus?.clients_auth_mode }}
                            </span>
                        </dd>
                      </div>
                      <div class="row gap-sm-4 py-4">
                        <dt class="col px-0 fw-medium">Clients Auth Mode</dt>
                        <dd class="col-8 ">{{ serverStatus?.clients_auth_source }}</dd>
                      </div>
                      <div class="row gap-sm-4 py-4">
                        <dt class="col px-0 fw-medium">Clients connected</dt>
                        <dd class="col-8 ">{{ serverStatus?.clients_connected }}</dd>
                      </div>
                      <div class="row gap-sm-4 py-4">
                        <dt class="col px-0 fw-medium">Clients disconnected</dt>
                        <dd class="col-8 ">{{ serverStatus?.clients_disconnected }}</dd>
                      </div>
                      <div class="row gap-sm-4 py-4">
                        <dt class="col px-0 fw-medium">Users Auth Source</dt>
                        <dd class="col-8 ">
                            <span class="tag bg-azure-lt border text-primary fw-medium">
                              {{ serverStatus?.users_auth_source }}
                          </span>
                        </dd>
                      </div>
                      <div class="row gap-sm-4 py-4">
                        <dt class="col px-0 fw-medium">Two-factor authentication enabled</dt>
                        <dd class="col-8 ">
                            <span v-if="serverStatus?.two_fa_enabled" class="tag bg-green-lt border text-primary fw-medium">
                              <IconXboxX color="green" :size="18" />
                          </span>
                            <span v-else class="tag bg-red-lt border text-primary fw-medium">
                              <IconXboxX color="red" :size="18" />
                          </span>
                        </dd>
                      </div>
                      <div class="row gap-sm-4 py-4">
                        <dt class="col px-0 fw-medium">Two-factor authentication delivery method</dt>
                        <dd class="col-8 ">{{ serverStatus?.two_fa_delivery_method}}</dd>
                      </div>
                      <div class="row gap-sm-4 py-4">
                        <dt class="col px-0 fw-medium">Fingerprint</dt>
                        <dd class="col-8 ">{{ serverStatus?.fingerprint }}</dd>
                      </div>
                      <div class="row gap-sm-4 py-4">
                        <dt class="col px-0 fw-medium">Version</dt>
                        <dd class="col-8 ">{{ serverStatus?.version }}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">Frontend</div>
                <div class="card-body">
                  <table class="table">
                    <tbody>

                    <tr>
                      <td>Version</td>
                      <td>0.0.0</td>
                    </tr>
                    <tr>
                      <td>Download the latest version of VNC® Viewer</td>
                      <td>go to downloads</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div> -->
    </new-page-wrapper>
</template>
<script setup lang="ts">
import { defineComponent } from "vue";
import { IconPencil, IconXboxX, IconCircleCheck } from "@tabler/icons-vue";
import type { Status } from "~/types";

const { $api } = useNuxtApp();
const serverStatus = ref({} as Status)
const { data: status, pending, error } = await $api.status.show();

serverStatus.value = status.value.data as Status


</script>
