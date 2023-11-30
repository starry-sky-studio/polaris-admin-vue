<script setup lang="ts">
import { MenuOption } from 'naive-ui'
import { menuOptions } from '@/constants'
import { useSidebarStore } from '@/store'
import router from '@/router'

const sidebarStore = useSidebarStore()

const activeValue = ref('/')

const handleSidebar = (collapsed: boolean) => {
  sidebarStore.changeSidebar(collapsed)
}

const handleMenu = (key: string, item: MenuOption) => {
  // if (item.children) {
  //   return
  // }
  activeValue.value = key
  console.log(key)
  // router.push({ name: key })
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
    {{ activeValue }}
    <n-menu
      :value="activeValue"
      :inverted="false"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      @update:value="handleMenu"
    />
  </n-layout-sider>
</template>
