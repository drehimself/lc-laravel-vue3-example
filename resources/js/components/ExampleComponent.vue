<template>
  <Menu>
    <MenuButton>More</MenuButton>
    <MenuItems>
      <MenuItem v-slot="{ active }">
        <a :class='{ "bg-blue-500": active }' href="/account-settings">
          Account settings
        </a>
      </MenuItem>
      <MenuItem v-slot="{ active }">
        <a :class='{ "bg-blue-500": active }' href="/account-settings">
          Documentation
        </a>
      </MenuItem>
      <MenuItem disabled>
        <span class="opacity-75">Invite a friend (coming soon!)</span>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>

<script>
import { ref } from 'vue'
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue"

export default {
    components: {
      Menu,
      MenuButton,
      MenuItems,
      MenuItem,
    },
    props: ['foo'],
    setup() {
        const greeting = ref('hello there')

        return {
            greeting
        }
    }
}
</script>

<style>

</style>
