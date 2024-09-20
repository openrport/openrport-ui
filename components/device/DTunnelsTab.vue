<template>
  <page-header title="Tunnels" actionName="Reload" />
  <!-- <page-table /> -->
  <div class="card table-responsive">
    <table class="table table-vcenter">
      <thead>
      <tr>
        <th>Client</th>
        <th>Allowed clients</th>
        <th>Exposed port</th>
        <th>HTTP proxy</th>
        <th>Protocol</th>
        <th>Destination</th>
        <th>Port</th>
        <th>Name</th>
        <th>Created at</th>
        <th class="w-1"></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>My raspberry</td>
        <td class="text-secondary">
          192.168.0.1
        </td>
        <td class="text-secondary">
          <a href="#" class="text-reset">27000</a>
        </td>
        <td class="text-secondary">
          <span class="badge">Disabled</span>
        </td>
        <td>tcp:ssh</td>
        <td>127.0.0.1</td>
        <td>22</td>
        <td></td>
        <td>1 minute ago</td>
        <td>
          <div class="dropdown">
            <a href="#" class="btn dropdown-toggle border-0"
               data-bs-toggle="dropdown">...</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Copy</a>
              <a class="dropdown-item" href="#">Launch</a>
              <a class="dropdown-item" href="#">Terminate</a>
            </div>
          </div>

        </td>
      </tr>
      </tbody>
      <!-- <tfoot>
      </tfoot> -->
    </table>
    <div class="row">
      <div class="col">
        <div class="p-2">Showing 1 to 0 of 0 results</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  device: {
    type: Object
  }
})
</script>
