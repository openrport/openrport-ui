<template>
    <div class="nav-settings relative">
        <div class="px-3 pt-3">
            <h3>Settings</h3>
        </div>
        <ul class="list-group">
            <nuxt-link to="/profile" class="list-group-item list-group-item-action rounded-0">
                <div class="row">
                    <div class="col-auto">
                        <IconUserCircle />
                    </div>
                    <div class="col">
                        <h5 class="mb-1">Profile</h5>
                        <p class="mb-1">Personalize your profile</p>
                    </div>
                </div>
            </nuxt-link>
            <nuxt-link to="/users" class="list-group-item list-group-item-action rounded-0">
                <div class="row">
                    <div class="col-auto">
                        <IconUser />
                    </div>
                    <div class="col">
                        <h5 class="mb-1">Users</h5>
                        <p class="mb-1">Manage users access</p>
                    </div>
                </div>
            </nuxt-link>
            <nuxt-link to="/user-groups" class="list-group-item list-group-item-action rounded-0">
                <div class="row">
                    <div class="col-auto">
                        <IconUsersGroup />
                    </div>
                    <div class="col">
                        <h5 class="mb-1">User groups</h5>
                        <p class="mb-1">Manage user groups and their permissions</p>
                    </div>
                </div>
            </nuxt-link>
            <nuxt-link to="/client-access" class="list-group-item list-group-item-action rounded-0">
                <div class="row">
                    <div class="col-auto">
                        <IconDevices />
                    </div>
                    <div class="col">
                        <h5 class="mb-1">Client access</h5>
                        <p class="mb-1">Manage client access and permissions</p>
                    </div>
                </div>
            </nuxt-link>
            <nuxt-link to="/client-groups" class="list-group-item list-group-item-action rounded-0">
                <div class="row">
                    <div class="col-auto">
                        <IconServer />
                    </div>
                    <div class="col">
                        <h5 class="mb-1">Client groups</h5>
                        <p class="mb-1">Manage client groups</p>
                    </div>
                </div>
            </nuxt-link>
            <nuxt-link to="/vault" class="list-group-item list-group-item-action rounded-0">
                <div class="row">
                    <div class="col-auto">
                        <IconShieldLock />
                    </div>
                    <div class="col">
                        <h5 class="mb-1">Vault</h5>
                        <p class="mb-1">Initialize, lock and unlock the encrypted database.</p>
                    </div>
                </div>
            </nuxt-link>
            <nuxt-link to="/api-tokens" class="list-group-item list-group-item-action rounded-0">
                <div class="row">
                    <div class="col-auto">
                        <IconBrandCodesandbox />
                    </div>
                    <div class="col">
                        <h5 class="mb-1">API Tokens</h5>
                        <p class="mb-1">Manage and generate API tokens</p>
                    </div>
                </div>
            </nuxt-link>
            <nuxt-link to="/info" class="list-group-item list-group-item-action rounded-0">
                <div class="row">
                    <div class="col-auto">
                        <IconInfoCircle />
                    </div>
                    <div class="col">
                        <h5 class="mb-1">Info</h5>
                        <p class="mb-1">Get all the information about your system</p>
                    </div>
                </div>
            </nuxt-link>
            <nuxt-link to="/support" class="list-group-item list-group-item-action rounded-0">
                <div class="row">
                    <div class="col-auto">
                        <IconHelp />
                    </div>
                    <div class="col">
                        <h5 class="mb-1">Support</h5>
                        <p class="mb-1">Request assistance and guidante</p>
                    </div>
                </div>
            </nuxt-link>
        </ul>
    </div>
</template>
<script>
import { 
    IconUserCircle,
    IconUser,
    IconUsersGroup,
    IconServer,
    IconDevices,
    IconShieldLock,
    IconBrandCodesandbox,
    IconInfoCircle,
    IconHelp

} from '@tabler/icons-vue';
export default {
    components: {
        IconUserCircle,
        IconUser,
        IconUsersGroup,
        IconServer,
        IconDevices,
        IconShieldLock,
        IconBrandCodesandbox,
        IconInfoCircle,
        IconHelp
    }
}
</script>
<style>
.nav-settings {
    width: 100%;
    /* height: 100vh; */
    border-right: 1px solid #dbdef0;
    background-color: rgb(255 255 255);
}

.list-group-item {
    border: none;
    /* Remove default border */
    border-top: 1px solid #dee2e6;
    /* Add top border */
    border-bottom: 1px solid #dee2e6;
    /* Add bottom border */
    /* transition: background-color 0.3s ease; */
    /* Smooth transition for background color */

}

.list-group-item:hover {
    /* background-color: #93c5fd; */
    background-color: rgb(147 197 253/.5);
    color: #000;
        /* Change background color on hover */
}</style>