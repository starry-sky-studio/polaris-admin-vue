<script setup lang="ts">
import { menuOptions } from '@/constants'
import router from '@/router'
import { MenuOption } from 'naive-ui'
import { useRoute } from 'vue-router'
const route = useRoute()
//一级菜单
const firstLevelOptions = ref(menuOptions)

//一级菜单路径

const firstPath = ref()

//二级菜单选项
const secondLevelOptions = ref<MenuOption[]>([])

//二级菜单路径
const secondPath = ref()

const handleSelect = (key: string) => router.push({ name: key })

watch(
  () => route.fullPath,
  () => {
    console.log(route.fullPath)
    if (route.fullPath === '/') {
      firstLevelOptions.value = []
      secondLevelOptions.value = []
      return
    }
    const routePath = route.fullPath.split('/')
    console.log(routePath)

    const first = menuOptions.find((option) => option.key === routePath[1])
    if (!first) {
      secondLevelOptions.value = []
      return
    }
    firstPath.value = first.label

    //二级菜单
    secondLevelOptions.value = first.children as MenuOption[]

    const second = first.children?.find((option) => {
      option.key = routePath[2]
    })

    if (!second) {
      secondPath.value = ''
      return
    }

    secondPath.value = second.label
  },
  {
    immediate: true
  }
)
</script>

<template>
  <n-breadcrumb>
    <!-- <n-breadcrumb-item>
      <n-dropdown :options="firstLevelOptions">
        <div class="trigger">{{ firstPath }}</div>
      </n-dropdown>
    </n-breadcrumb-item>
    <n-breadcrumb-item v-if="secondLevelOptions">
      <n-dropdown :options="secondLevelOptions">
        <div class="trigger">{{ secondPath }}</div>
      </n-dropdown>
    </n-breadcrumb-item> -->
  </n-breadcrumb>
</template>
