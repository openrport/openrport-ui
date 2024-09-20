<template>
  <div
    class="flex flex-col flex-1 overflow-hidden bg-white divide-y rounded-lg shadow divide-gray-50 dark:divide-gray-700 dark:bg-gray-900"
  >
    <div class="px-4 py-4 sm:flex sm:items-center sm:px-6">
      <div class="flex items-center content-center flex-1 max-h-16">
        <h3 class="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50">
          Allowed user groups
        </h3>
        <p class="max-w-2xl mt-1 text-sm leading-6 text-gray-500 dark:text-gray-500"></p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          class="bg-primary-800 hover:bg-primary-800 focus-visible:outline-primary-800 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          type="button"
        >
          <span class="flex items-center justify-center gap-x-2"
            ><svg
              data-v-ca945699=""
              xmlns="http://www.w3.org/2000/svg"
              width="14px"
              height="14px"
              viewBox="0 0 24 24"
              class="icon"
            >
              <path
                fill="currentColor"
                d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM4 21q-.425 0-.713-.288T3 20v-2.825q0-.2.075-.388t.225-.337l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225T6.825 21H4Z"
              ></path>
            </svg>
            Edit</span
          >
        </button>
      </div>
    </div>
    <div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
      <div class="w-full h-full">
        <div class="relative w-full">
          <div
            class="relative flex flex-col items-center justify-between w-full lg:flex-row"
          >
            <div class="flex items-center w-full">
              <span>Operations</span>
              <div class="inline-flex cursor-pointer w-max">
                <span class="pl-2"
                  ><span> +</span><span class="italic">Administrators</span></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
