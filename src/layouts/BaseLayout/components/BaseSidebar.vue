<script setup lang="ts">
import { menuOptions } from '@/constants'
import { useSidebarStore } from '@/store'
const sidebarStore = useSidebarStore()

const handleSidebar = (collapsed: boolean) => {
  sidebarStore.changeSidebar(collapsed)
}
</script>

<template>
  <n-layout-sider
    bordered
    show-trigger
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :native-scrollbar="false"
    :inverted="false"
    @update:collapsed="handleSidebar"
  >
    <n-menu
      :inverted="false"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
    />
  </n-layout-sider>
</template>
