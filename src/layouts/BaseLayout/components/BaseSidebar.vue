<script setup lang="ts">
import { MenuOption, MenuInst } from 'naive-ui'
import { myMenuOptions } from '@/constants'
import { useSidebarStore } from '@/store'

import { useRouter } from 'vue-router'

const router = useRouter()

const sidebarStore = useSidebarStore()

const menuInstRef = ref<MenuInst | null>(null)
const menuData = ref(myMenuOptions)

const activeValue = ref()

const handleSidebar = (collapsed: boolean) => {
  sidebarStore.changeSidebar(collapsed)
}

const handleMenu = (key: string, item: MenuOption) => {
  if (item.children) {
    return
  }
  router.push({ name: key })
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
      ref="menuInstRef"
      :value="activeValue"
      :inverted="false"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuData"
      @update:value="handleMenu"
    />
  </n-layout-sider>
</template>
