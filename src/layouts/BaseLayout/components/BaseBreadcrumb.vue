<script setup lang="ts">
import { myMenuOptions, getMenuItem } from '@/constants'
import { useRoute } from 'vue-router'

const router = useRoute()
const breadcrumbData = ref<string[]>([])

const handleBreadcrumbData = (path: string) => {
  const pathSplit = path.split('/').filter((i) => i)
  breadcrumbData.value = []
  pathSplit.forEach((cur: string) => {
    const breadcrumbItem = getMenuItem(cur, myMenuOptions)
    breadcrumbItem && breadcrumbData.value.push(breadcrumbItem?.label as string)
  })
}

watch(
  () => router.fullPath,
  () => {
    handleBreadcrumbData(router.fullPath)
  },
  {
    immediate: true
  }
)
</script>

<template>
  <n-breadcrumb separator=">">
    <n-breadcrumb-item
      v-for="item in breadcrumbData"
      :key="item"
    >
      {{ item }}</n-breadcrumb-item
    >
  </n-breadcrumb>
</template>
