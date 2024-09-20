<template>
  <div class="h-full w-full flex-1">
    <div class="relative">
      <div class="min-h-[400px]">
        <div class="relative mb-4 rounded border border-theme-border">
          <input
            id="file"
            type="file"
            class="h-15 w-full opacity-0"
            placeholder=" "
          /><svg
            data-v-ca945699=""
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            class="icon absolute top-1/2 left-2.5 -trangray-y-1/2 transform text-theme-label"
          >
            <path
              fill="currentColor"
              d="M9 16h6v-6h4l-7-7l-7 7h4v6zm3-10.17L14.17 8H13v6h-2V8H9.83L12 5.83zM5 18h14v2H5z"
            ></path></svg
          ><!----><label
            for="file"
            class="absolute top-1/2 z-10 origin-[0] transform bg-theme py-0 px-1 text-sm font-normal text-theme-label duration-300 left-8 -trangray-y-1/2"
            >Local file to be uploaded</label
          ><!---->
        </div>
        <div class="flex flex-col mb-4">
          <div class="relative mt-1 flex w-full flex-col">
            <input
              id="RnW14XEFRT"
              class="h-15 primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
              placeholder=" "
              type="text"
              autocomplete="off"
            /><label
              class="absolute left-1.5 top-1.5 z-10 origin-[0] -trangray-y-4 scale-75 transform px-1 text-theme-label duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-trangray-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-trangray-y-4 peer-focus:scale-75 peer-focus:px-1 text-theme-label peer-focus:text-primary bg-theme text-sm font-normal"
              for="RnW14XEFRT"
              >Remote path (folder + file name, e.g. /tmp/test.txt,
              C:\Windows\temp\test.txt)</label
            >
          </div>
          <!----><!---->
        </div>
        <div
          class="mb-4 mb-4 flex h-15 items-center justify-between rounded border border-theme-border px-4 text-sm font-normal text-theme-label text-theme-inverted"
        >
          <div>Force overwriting existing files (optional)</div>
          <label class="relative inline-flex cursor-pointer items-center text-theme-label"
            ><input type="checkbox" class="peer sr-only" value="1" />
            <div
              class="after:border-theme-border peer-checked:bg-blue-600 peer-checked:after:border-white bg-black bg-opacity-30 peer h-6 w-11 rounded-full after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:after:trangray-x-full peer-focus:ring-0"
            ></div
          ></label>
        </div>
        <div
          class="mb-4 mb-4 flex h-15 items-center justify-between rounded border border-theme-border px-4 text-sm font-normal text-theme-label text-theme-inverted"
        >
          <div>Sync (optional)</div>
          <label class="relative inline-flex cursor-pointer items-center text-theme-label"
            ><input type="checkbox" class="peer sr-only" value="1" />
            <div
              class="after:border-theme-border peer-checked:bg-blue-600 peer-checked:after:border-white bg-black bg-opacity-30 peer h-6 w-11 rounded-full after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:after:trangray-x-full peer-focus:ring-0"
            ></div
          ></label>
        </div>
        <div
          class="mb-4 flex items-start items-center gap-2 rounded bg-primary-100 p-2 text-sm font-normal text-white md:gap-4 md:p-4"
          role="alert"
        >
          <div class="min-w-[22px]">
            <svg
              data-v-ca945699=""
              xmlns="http://www.w3.org/2000/svg"
              width="22px"
              height="22px"
              viewBox="0 0 24 24"
              class="icon text-current"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M12 15v-3m0-3v0"></path>
              </g>
            </svg>
          </div>
          <div>
            If sync is enabled, the client looks if a file already exists on the
            destination. If the md5 sum of the destination equals the md5 sum of the
            source, and if the ownership and mode are as desired (Linux only) , the copy
            is skipped, and the process is considered successfully.
          </div>
        </div>
        <div>
          <div class="flex flex-col mb-4">
            <div class="relative mt-1 flex w-full flex-col">
              <input
                id="2oGR1W3hIL"
                class="h-15 primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
                placeholder=" "
                type="text"
                autocomplete="off"
              /><label
                class="absolute left-1.5 top-1.5 z-10 origin-[0] -trangray-y-4 scale-75 transform px-1 text-theme-label duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-trangray-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-trangray-y-4 peer-focus:scale-75 peer-focus:px-1 text-theme-label peer-focus:text-primary bg-theme text-sm font-normal"
                for="2oGR1W3hIL"
                >Mode (optional)</label
              >
            </div>
            <!----><!---->
          </div>
          <div
            class="mb-4 flex items-start items-center gap-2 rounded bg-primary-100 p-2 text-sm font-normal text-white md:gap-4 md:p-4"
            role="alert"
          >
            <div class="min-w-[22px]">
              <svg
                data-v-ca945699=""
                xmlns="http://www.w3.org/2000/svg"
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                class="icon text-current"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 15v-3m0-3v0"></path>
                </g>
              </svg>
            </div>
            <div>
              Enter the file permissions (mode) of the remote file using four-digit
              numeric octal notation. e.g. 0500
            </div>
          </div>
          <div class="flex flex-col mb-4">
            <div class="relative mt-1 flex w-full flex-col">
              <input
                id="3cPWo0AEGh"
                class="h-15 primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
                placeholder=" "
                type="text"
                autocomplete="off"
              /><label
                class="absolute left-1.5 top-1.5 z-10 origin-[0] -trangray-y-4 scale-75 transform px-1 text-theme-label duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-trangray-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-trangray-y-4 peer-focus:scale-75 peer-focus:px-1 text-theme-label peer-focus:text-primary bg-theme text-sm font-normal"
                for="3cPWo0AEGh"
                >User (optional)</label
              >
            </div>
            <!----><!---->
          </div>
          <div class="flex flex-col mb-4">
            <div class="relative mt-1 flex w-full flex-col">
              <input
                id="zhW7rlIlkK"
                class="h-15 primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
                placeholder=" "
                type="text"
                autocomplete="off"
              /><label
                class="absolute left-1.5 top-1.5 z-10 origin-[0] -trangray-y-4 scale-75 transform px-1 text-theme-label duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-trangray-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-trangray-y-4 peer-focus:scale-75 peer-focus:px-1 text-theme-label peer-focus:text-primary bg-theme text-sm font-normal"
                for="zhW7rlIlkK"
                >Group (optional)</label
              >
            </div>
            <!----><!---->
          </div>
          <div
            class="mb-4 flex items-start items-center gap-2 rounded bg-primary-100 p-2 text-sm font-normal text-white md:gap-4 md:p-4"
            role="alert"
          >
            <div class="min-w-[22px]">
              <svg
                data-v-ca945699=""
                xmlns="http://www.w3.org/2000/svg"
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                class="icon text-current"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 15v-3m0-3v0"></path>
                </g>
              </svg>
            </div>
            <div>
              Specify the user and group the file should belong to. If not set, the file
              is owned by the user and group that runs the rport client.
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center py-4">
          <button
            class="hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none mx-auto mt-2 bg-secondary text-sm font-bold uppercase text-black shadow-3xl"
            type="button"
          >
            <!---->
            Upload
          </button>
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>
