<template>
  <div
    class="flex flex-1 flex-col divide-y divide-gray-50 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-900"
  >
    <div class="px-4 py-4 sm:flex sm:items-center sm:px-6">
      <div class="flex max-h-16 flex-1 content-center items-center">
        <h3 class="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50">
          CPU, memory &amp; disks
        </h3>
        <p
          class="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-500"
        ></p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          class="bg-primary-800 hover:bg-primary-800 focus-visible:outline-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          type="button">
          <!----><!----><span class="flex items-center justify-center gap-x-2"
            ><!----><svg
              data-v-ca945699=""
              xmlns="http://www.w3.org/2000/svg"
              width="14px"
              height="14px"
              viewBox="0 0 24 24"
              class="icon"
            >
              <path
                fill="currentColor"
                d="M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z"
              ></path>
            </svg>
            Reload</span
          ></button
        ><!---->
      </div>
    </div>
    <div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
      <div class="h-full w-full">
        <div>
          <table class="w-full">
            <tbody>
              <tr v-if="device?.cpu_family?.length > 0" class="flex flex-col md:table-row">
                <td class="w-full whitespace-nowrap p-1 font-medium tracking-tight text-primary md:w-fit md:min-w-min">
                  CPU Family:
                </td>
                <td class="w-full p-1"> {{ device?.cpu_family}}</td>
              </tr>
              <tr class="flex flex-col md:table-row">
                <td
                  class="w-full whitespace-nowrap p-1 font-medium tracking-tight text-primary md:w-fit md:min-w-min"
                >
                  CPU Model:
                </td>
                <td class="w-full p-1">{{ device?.cpu_model }}</td>
              </tr>
              <tr class="flex flex-col md:table-row">
                <td
                  class="w-full whitespace-nowrap p-1 font-medium tracking-tight text-primary md:w-fit md:min-w-min"
                >
                  CPU Model Name:
                </td>
                <td class="w-full p-1">{{ device?.cpu_model_name }}</td>
              </tr>
              <tr class="flex flex-col md:table-row">
                <td
                  class="w-full whitespace-nowrap p-1 font-medium tracking-tight text-primary md:w-fit md:min-w-min"
                >
                  Number of CPUs:
                </td>
                <td class="w-full p-1">{{ device?.num_cpus}}</td>
              </tr>
              <tr v-if="metrics.length > 0" class="flex flex-col md:table-row">
                <td class="w-full whitespace-nowrap p-1 font-medium tracking-tight text-primary md:w-fit md:min-w-min">
                  CPU Usage ( {{ cpu_usage_percent }} %):
                </td>
                <td class="w-full p-1">
                  <div class="h-3 w-full bg-gray-200">
                    <div class="bg-primary h-full" :style="{ width: `${cpu_usage_percent}%`}"></div>
                  </div>
                </td>
              </tr>
              <tr class="flex flex-col md:table-row">
                <td class="w-full whitespace-nowrap p-1 font-medium tracking-tight text-primary md:w-fit md:min-w-min">
                  Total Memory:
                </td>
                <td class="w-full p-1">{{  bytesToSize(device?.mem_total) }}</td>
              </tr>
              <tr class="flex flex-col md:table-row" v-if="metrics.length > 0">
                <td class="w-full whitespace-nowrap p-1 font-medium tracking-tight text-primary md:w-fit md:min-w-min">
                  Memory Usage ({{ memory_usage_percent }}%):
                </td>
                <td class="w-full p-1">
                  <div class="h-3 w-full bg-gray-200">
                    <div class="bg-primary h-full" :style="{ width: `${memory_usage_percent}%`}"></div>
                  </div>
                </td>
              </tr>
              <tr v-if="metrics.length > 0" class="flex flex-col md:table-row" :style="{ width: `${io_usage_percent}%`}">
                <td class="w-full whitespace-nowrap p-1 font-medium tracking-tight text-primary md:w-fit md:min-w-min">
                  IO Usage ({{ io_usage_percent }}%):
                </td>
                <td class="w-full p-1">
                  <div class="h-3 w-full bg-gray-200"><div class="h-full"></div></div>
                </td>
              </tr>
            </tbody>
            <!---->
          </table>
        </div>
      </div>
    </div>
    <!---->
  </div>
</template>
<script setup>
import {bytesToSize} from "../../lib/utils";

const props = defineProps({
  device: {
    type: Object,
    required: true,
  },
  metrics: {
    type: Array,
    default: []
  }
})
const memory_usage_percent = computed(() => {
  if (props.metrics.length <= 0) {
    return 0;
  }
  return parseFloat(String(props.metrics[0].memory_usage_percent)).toFixed(2);
})
const cpu_usage_percent = computed(() => {
  if (props.metrics.length <= 0) {
    return 0;
  }
  return parseFloat(String(props.metrics[0].cpu_usage_percent)).toFixed(2);
})
const io_usage_percent = computed(() => {
  if (props.metrics.length <= 0) {
    return 0;
  }
  return parseFloat(String(props.metrics[0].io_usage_percent)).toFixed(2);
})

</script>