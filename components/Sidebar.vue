<template>
    <!-- Sidebar -->
    <aside class="navbar navbar-vertical navbar-expand-lg l-navbar bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
            <button @click="toggleNav" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar-menu"
                aria-controls="sidebar-menu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <h1 class="navbar-brand navbar-brand-autodark mt-4 mb-5">
                <a href=".">
                    <img src="/img/logo-small.svg" width="110" height="32" alt="Tabler" class="navbar-brand-image">
                </a>
            </h1>
            <div class="navbar-nav flex-row d-lg-none navbar-left">
                <div class="nav-item d-none d-lg-flex me-3">
                    <div class="btn-list">
                        <a href="https://github.com/tabler/tabler" class="btn" target="_blank" rel="noreferrer">

                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>
                            Source code
                        </a>
                        <a href="https://github.com/sponsors/codecalm" class="btn" target="_blank" rel="noreferrer">

                            <svg xmlns="http://www.w3.org/2000/svg" class="icon text-pink" width="24" height="24"
                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>
                            Sponsor
                        </a>
                    </div>
                </div>
                <div class="d-none d-lg-flex">
                    <a href="?theme=dark" class="nav-link px-0 hide-theme-dark" title="Enable dark mode"
                        data-bs-toggle="tooltip" data-bs-placement="bottom">

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                        </svg>
                    </a>
                    <a href="?theme=light" class="nav-link px-0 hide-theme-light" title="Enable light mode"
                        data-bs-toggle="tooltip" data-bs-placement="bottom">

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                            <path
                                d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                        </svg>
                    </a>
                    <div class="nav-item dropdown d-none d-md-flex me-3">
                        <a href="#" class="nav-link px-0" data-bs-toggle="dropdown" tabindex="-1"
                            aria-label="Show notifications">

                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                            </svg>
                            <span class="badge bg-red"></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Last updates</h3>
                                </div>
                                <div class="list-group list-group-flush list-group-hoverable">
                                    <div class="list-group-item">
                                        <div class="row align-items-center">
                                            <div class="col-auto"><span
                                                    class="status-dot status-dot-animated bg-red d-block"></span></div>
                                            <div class="col text-truncate">
                                                <a href="#" class="text-body d-block">Example 1</a>
                                                <div class="d-block text-muted text-truncate mt-n1">
                                                    Change deprecated html tags to text decoration classes (#29604)
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <a href="#" class="list-group-item-actions">

                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon text-muted"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path
                                                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list-group-item">
                                        <div class="row align-items-center">
                                            <div class="col-auto"><span class="status-dot d-block"></span></div>
                                            <div class="col text-truncate">
                                                <a href="#" class="text-body d-block">Example 2</a>
                                                <div class="d-block text-muted text-truncate mt-n1">
                                                    justify-content:between ⇒ justify-content:space-between (#29734)
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <a href="#" class="list-group-item-actions show">

                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon text-yellow"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path
                                                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list-group-item">
                                        <div class="row align-items-center">
                                            <div class="col-auto"><span class="status-dot d-block"></span></div>
                                            <div class="col text-truncate">
                                                <a href="#" class="text-body d-block">Example 3</a>
                                                <div class="d-block text-muted text-truncate mt-n1">
                                                    Update change-version.js (#29736)
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <a href="#" class="list-group-item-actions">

                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon text-muted"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path
                                                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list-group-item">
                                        <div class="row align-items-center">
                                            <div class="col-auto"><span
                                                    class="status-dot status-dot-animated bg-green d-block"></span></div>
                                            <div class="col text-truncate">
                                                <a href="#" class="text-body d-block">Example 4</a>
                                                <div class="d-block text-muted text-truncate mt-n1">
                                                    Regenerate package-lock.json (#29730)
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <a href="#" class="list-group-item-actions">

                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon text-muted"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path
                                                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown"
                        aria-label="Open user menu">
                        <span class="avatar avatar-sm" style="background-image: url(./static/avatars/000m.jpg)"></span>
                        <div class="d-none d-xl-block ps-2">
                            <div>Profile</div>
                            <div class="mt-1 small text-muted">UI Designer</div>
                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <a href="#" class="dropdown-item">Status</a>
                        <a href="./profile.html" class="dropdown-item">Profile</a>
                        <a href="#" class="dropdown-item">Feedback</a>
                        <div class="dropdown-divider"></div>
                        <a href="./settings.html" class="dropdown-item">Settings</a>
                        <a href="./sign-in.html" class="dropdown-item">Logout</a>
                    </div>
                </div>
            </div>
            <div :class="['collapse', { 'show': isNavOpen }]" class="navbar-collapse" id="sidebar-menu">
                <ul class="navbar-nav pt-lg-3">
                    <li class="nav-item mt-2">
                        <nuxt-link class="nav-link mx-3 px-3" to="/dashboard" exact>
                            <span class="nav-link-icon d-md-none d-lg-inline-block me-3">
                                <IconServer color="white" />
                            </span>
                            <strong class="text-white">
                                Clients
                            </strong>
                        </nuxt-link>
                    </li>
                    <li class="nav-item mt-2">
                        <nuxt-link class="nav-link mx-3 px-3" to="/tunnels" exact>
                            <span class="nav-link-icon d-md-none d-lg-inline-block me-3">
                                <IconDeviceDesktop color="white"/>
                            </span>
                            <strong class="text-white">
                                Tunnels
                            </strong>
                        </nuxt-link>
                    </li>
                    <li class="nav-item mt-2">
                        <nuxt-link class="nav-link mx-3 px-3" to="/inventory" exact>
                            <span class="nav-link-icon d-md-none d-lg-inline-block me-3">
                                <IconArchive color="white"/>
                            </span>
                            <strong class="text-white">
                                Inventory
                            </strong>
                        </nuxt-link>
                    </li>
                    <li class="nav-item mt-2">
                        <nuxt-link class="nav-link mx-3 px-3" to="/documentation" exact>
                            <span class="nav-link-icon d-md-none d-lg-inline-block me-3">
                                <IconBook color="white"/>
                            </span>
                            <strong class="text-white">
                                Documentation
                            </strong>
                        </nuxt-link>
                    </li>
                    <li class="nav-item mt-2">
                        <nuxt-link class="nav-link mx-3 px-3" to="/commands" exact>
                            <span class="nav-link-icon d-md-none d-lg-inline-block me-3">
                                <IconTerminal2 color="white"/>
                            </span>
                            <strong class="text-white">
                                Commands
                            </strong>
                        </nuxt-link>
                    </li>
                    <li class="nav-item mt-2">
                        <nuxt-link class="nav-link mx-3 px-3" to="/scripts" exact>
                            <span class="nav-link-icon d-md-none d-lg-inline-block me-3">
                                <IconScript color="white"/>
                            </span>
                            <strong class="text-white">
                                Scripts
                            </strong>
                        </nuxt-link>
                    </li>
                    <li class="nav-item mt-2">
                        <nuxt-link class="nav-link mx-3 px-3" to="/schedules" exact>
                            <span class="nav-link-icon d-md-none d-lg-inline-block me-3">
                                <IconClockHour4 color="white"/>
                            </span>
                            <strong class="text-white">
                                Schedules
                            </strong>
                        </nuxt-link>
                    </li>
                    <li class="nav-item mt-2">
                        <nuxt-link class="nav-link mx-3 px-3" to="/profile" exact>
                            <span class="nav-link-icon d-md-none d-lg-inline-block me-3">
                                <IconSettings color="white"/>
                            </span>
                            <strong class="text-white">
                                Settings
                            </strong>
                        </nuxt-link>
                    </li>
                    <li class="nav-item mt-2">
                        <nuxt-link class="nav-link mx-3 px-3" to="/library" exact>
                            <span class="nav-link-icon d-md-none d-lg-inline-block me-3">
                                <IconBooks color="white"/>
                            </span>
                            <strong class="text-white">
                                Library
                            </strong>
                        </nuxt-link>
                    </li>
                    <li class="nav-item mt-2">
                        <nuxt-link class="nav-link mx-3 px-3" to="/audits" exact>
                            <span class="nav-link-icon d-md-none d-lg-inline-block me-3">
                                <IconReportSearch color="white"/>
                            </span>
                            <strong class="text-white">
                                Audit Logs
                            </strong>
                        </nuxt-link>
                    </li>
                    <li class="nav-item mt-2">
                        <nuxt-link class="nav-link mx-3 px-3" to="./" exact>
                            <span class="nav-link-icon d-md-none d-lg-inline-block me-3">
                                <IconLogout color="white"/>
                            </span>
                            <strong class="text-white">
                                Logout
                            </strong>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </aside>

    <aside class="navbar navbar-vertical flex-column navbar-expand-lg navbar-extra-w" v-if="isSettingsRoute">
        <div class="container-fluid">
            <button @click="toggleSettingsBarNav" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#settings"
                aria-controls="settings" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div :class="['collapse', { 'show': isSettingsBarOpen }]" class="navbar-collapse" id="settings">
                <Settings />
            </div>
        </div>
    </aside>
</template>
<script>
import {
    IconServer,
    IconDeviceDesktop,
    IconArchive,
    IconBook,
    IconTerminal2,
    IconScript,
    IconClockHour4,
    IconSettings,
    IconBooks,
    IconReportSearch,
    IconLogout,
} from '@tabler/icons-vue';
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
export default {
    components: {
        IconServer,
        IconDeviceDesktop,
        IconArchive,
        IconBook,
        IconTerminal2,
        IconScript,
        IconClockHour4,
        IconSettings,
        IconBooks,
        IconReportSearch,
        IconLogout,
        Button
    },
    data() {
        return {
            isActive: false,
            isNavOpen: false,
            isDeviceBarOpen: false,
            isSettingsBarOpen: false
        };
    },
    computed: {
        isDashboardRoute() {
            const deviceFilterRoutes = [
                '/dashboard',
                '/device'
            ];
            return deviceFilterRoutes.includes(this.$route.path);
        },
        isSettingsRoute() {
            const settingRoutes = [
                '/profile',
                '/users',
                '/user-groups',
                '/client-access',
                '/client-groups',
                '/vault',
                '/api-tokens',
                '/info',
                '/support'
            ];
            return settingRoutes.includes(this.$route.path);
        }
    },
    methods: {
      cn,
        toggleNav() {
            this.isNavOpen = !this.isNavOpen;
        },
        toggleDeviceBarNav() {
            this.isDeviceBarOpen = !this.isDeviceBarOpen;
        },
        toggleSettingsBarNav() {
            this.isSettingsBarOpen = !this.isSettingsBarOpen;
        }
    }
}
</script>
<style scoped>
.router-link-active,
.router-link-exact-active {
    background-color: #0369a1;
    color: #fff;
}
</style>
