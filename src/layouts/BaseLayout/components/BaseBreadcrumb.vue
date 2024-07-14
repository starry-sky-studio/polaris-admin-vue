<script setup lang="ts">
import { myMenuOptions, getMenuItem } from '@/constants'

import { MenuOption, DropdownOption } from 'naive-ui'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRoute()
let arr = ref<String[]>([])

interface breadcrumbDataitem {
  Option: MenuOption | undefined | MenuOption[]
  value: string
}

const breadcrumbData = ref<breadcrumbDataitem[]>([
  {
    Option: myMenuOptions,
    value: route.meta?.title as string
  }
])




const handleMenus = (path: string) => {
  const pathSplit = path.split('/').filter((i) => i)
  const items = ref<String[]>([])
  pathSplit.forEach((cur: string) => {
    const breadcrumbItem = getMenuItem(cur, myMenuOptions)
    items.value.push(
      breadcrumbItem?.label as string
    )
  }
  )
  return items.value
}

watch(
  () => router.fullPath,
  () => {

  arr.value = handleMenus(router.fullPath)
  },
  {
    immediate: true
  }
)
</script>

<template>
  <n-breadcrumb separator=">">
    <n-breadcrumb-item v-for="item in arr"> {{ item }}</n-breadcrumb-item>
  </n-breadcrumb>
</template>
