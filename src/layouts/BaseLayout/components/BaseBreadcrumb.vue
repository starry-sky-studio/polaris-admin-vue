<script setup lang="ts">
import { myMenuOptions, getMenuItem } from '@/constants'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const breadcrumbData = ref<string[]>([])

const handleBreadcrumbData = (path: string) => {
  // debugger

  const pathSplit = path.split('/').filter((i) => i)
  breadcrumbData.value = []
  console.log(pathSplit)
  pathSplit.forEach((cur: string) => {
    const breadcrumbItem = getMenuItem(cur, myMenuOptions)
    console.log(breadcrumbItem)
    breadcrumbItem && breadcrumbData.value.push(breadcrumbItem?.label as string)
  })

  console.log(breadcrumbData.value)
}

watch(
  () => route.fullPath,
  () => {
    handleBreadcrumbData(route.fullPath)
  },
  {
    immediate: true
  }
)
</script>

<template>
  <Button @click="() => router.push({ name: '404' })">1231</Button>
  <n-breadcrumb separator=">">
    <n-breadcrumb-item
      v-for="item in breadcrumbData"
      :key="item"
    >
      {{ item }}</n-breadcrumb-item
    >
  </n-breadcrumb>
</template>
