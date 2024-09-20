<template>
  <button type="button" class="inline-flex items-center duration-200 focus:outline-none rounded-full p-0 flex items-center justify-center p-0  w-7 h-7" :class="iconLogo?.color">
    <span class="flex items-center justify-center" style="width: 20px; height: 20px;">
        <Icon :name="iconLogo.icon" :size="`${size}px`" mode="svg" :class="[iconLogo?.iconColor]"/>
      </span>
  </button>
</template>
<script setup>

const props = defineProps({
  os_full_name: {
    type: String,
  },
  os_kernel: {
    type: String,
  },
  os_family: {
    type: String
  },
  os: {
    type: String,
  },
  size: {
    type: Number,
    default: 24
  }
})

const icons = {
  default: {
    name: "server",
    color: "bg-secondary",
    icon: "mdi:server",
    iconColor: 'text-white',
    iconSize: 24,
    iconActiveClass: "text-white"
  },
  ubuntu: {
    name: "ubuntu",
    color: "transparent",
    icon: "mdi:ubuntu",
    iconColor: 'text-icon-ubuntu',
    iconSize: 24,
    iconActiveClass: "text-icon-ubuntu"
  },
  debian: {
    name: "debian",
    color: "bg-icon-debian",
    icon: "mdi:debian",
    iconColor: 'text-white',
    iconSize: 24,
    iconActiveClass: "text-white"
  },
  apple: {
    name: "apple",
    color: "transparent",
    icon: "mdi:apple",
    iconColor: 'gray-500',
    iconSize: 24,
    iconActiveClass: "text-white"
  },
  aws: {
    name: "aws",
    color: "bg-gray-500",
    icon: "mdi:apple",
    iconColor: 'text-white',
    iconSize: 24,
    iconActiveClass: "text-white"
  },
  centos: {
    name: "centos",
    color: "bg-gray-500",
    icon: "mdi:centos",
    iconColor: 'text-white',
    iconSize: 24,
    iconActiveClass: "text-white"
  },
  fedora: {
    name: "fedora",
    color: "bg-gray-500",
    icon: "mdi:fedora",
    iconColor: 'text-white',
    iconSize: 24,
    iconActiveClass: "text-white"
  },
  freebsd: {
    name: "freebsd",
    color: "bg-gray-500",
    icon: "mdi:freebsd",
    iconColor: 'text-white',
    iconSize: 24,
    iconActiveClass: "text-white"
  },
  linux: {
    name: "linux",
    color: "transparent",
    icon: "mdi:linux",
    iconColor: 'gray-500',
    iconSize: 24,
    iconActiveClass: "text-white"
  },
  alpine: {
    name: "alpine",
    color: "transparent",
    icon: "mdi:linux",
    iconColor: 'gray-500',
    iconSize: 24,
    iconActiveClass: "text-white"
  },
  oracle: {
    name: "oracle",
    color: "transparent",
    icon: "mdi:oracle",
    iconColor: 'gray-500',
    iconSize: 24,
    iconActiveClass: "text-white"
  },
  rocky: {
    name: "rocky",
    color: "transparent",
    icon: "mdi:linux",
    iconColor: 'gray-500',
    iconSize: 24,
    iconActiveClass: "text-white"
  },
  redhat: {
    name: "redhat",
    color: "bg-icon-redhat",
    icon: "mdi:redhat",
    iconColor: 'gray-500',
    iconSize: 24,
    iconActiveClass: "text-white"
  },
  suse: {
    name: "suse",
    color: "bg-icon-suse",
    icon: "mdi:linux",
    iconColor: 'gray-500',
    iconSize: 24,
    iconActiveClass: "text-white"
  },
  windows: {
    name: "windows",
    color: "bg-icon-windows",
    icon: "mdi:linux",
    iconColor: 'text-white',
    iconSize: 24,
    iconActiveClass: "text-white"
  },
  axisIpCamera: {
    name: "axisIpCamera",
    color: "bg-icon-axisIpCamera",
    icon: "mdi:camera",
    iconColor: 'text-white',
    iconSize: 24,
    iconActiveClass: "text-white"
  },
  almalinux: {
    name: "almalinux",
    color: "transparent",
    icon: "mdi:linux",
    iconColor: 'text-white',
    iconSize: 24,
    iconActiveClass: "text-white"
  },
  arch: {
    name: "arch",
    color: "bg-icon-arch",
    icon: "mdi:arch",
    iconColor: 'text-white',
    iconSize: 24,
    iconActiveClass: "text-white"
  }
}

const iconLogo = computed(() => {
  switch (props.os_kernel) {
    case 'linux':
      return getLinuxIcon(props.os_full_name, props.os_family, props.os);
    case 'windows':
      return icons.windows;
    case 'darwin':
      return icons.apple;
    case 'macos':
      return icons.apple;
    case 'freebsd':
      return icons.freebsd
    default:
      return icons.default;
  }
})

const getLinuxIcon = (os_full_name, os_family, os) => {
  const lowerCaseFUllName = os_full_name?.toLowerCase() || '';
  const firstWord = lowerCaseFUllName.trim().split(' ')[0];

  switch (true) {
    case lowerCaseFUllName.includes('debian'):
      return icons.debian;
    case lowerCaseFUllName.includes('ubuntu'):
      return icons.ubuntu;
    case lowerCaseFUllName.includes('fedora'):
      return icons.fedora;
    case lowerCaseFUllName.includes('alpine'):
      return icons.alpine;
    case lowerCaseFUllName.includes('rocky'):
      return icons.rocky;
    case lowerCaseFUllName.includes('suse'):
      return icons.suse;
    case firstWord === 'axis':
      return icons.axisIpCamera;
    case firstWord === 'almalinux':
      return icons.almalinux;
    case firstWord === 'oracle':
      return icons.oracle;
    case os_family === 'arch':
      return icons.arch;
    case os?.includes('ubuntu') || os?.includes('Ubuntu'):
      return icons.ubuntu;
    case os_family === 'debian':
      return icons.debian;
    case os_family === 'fedora':
      return icons.fedora;
    case os_family === 'alpine':
      return icons.alpine;
    case os_family === 'rhel' && os?.includes('compute'):
      return icons.aws;
    case os_family === 'rhel':
      return icons.redhat;
    case os_family === 'suse':
      return icons.suse;
    default:
      return icons.linux;
  }
    return 'debian';
}
</script>

<style scoped>
.text-icon-ubuntu {
  color: #e64a19;
}
.bg-icon-debian {
  background-color: #a80030;
}
.bg-icon-arch {
  --tw-bg-opacity: 1;
  background-color: #1793d1;
}
.bg-icon-aws {
  --tw-bg-opacity: 1;
  background-color: #232f3e;
}
.bg-icon-axisIpCamera {
  --tw-bg-opacity: 1;
  background-color: #4a148c;
}
.bg-icon-centos {
  --tw-bg-opacity: 1;
  background-color: #262577;
}
.bg-icon-redhat {
  --tw-bg-opacity: 1;
  background-color: #cf0000;
}

.bg-icon-suse {
  --tw-bg-opacity: 1;
  background-color: #7cb342;
}
.bg-icon-windows {
  --tw-bg-opacity: 1;
  background-color: #0078d4;
}

.bg-neutral-100 {
  --tw-bg-opacity: 1;
  background-color: #f5f5f5;
}
</style>