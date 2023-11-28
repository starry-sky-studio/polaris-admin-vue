<script setup lang="ts">
import BaseBreadcrumb from './BaseBreadcrumb.vue'
import { useSidebarStore } from '@/store'
const sidebarStore = useSidebarStore()
</script>

<template>
  <n-layout-header
    bordered
    class="h-16"
  >
    <div class="h-16 flex">
      <div
        :class="sidebarStore.sidebarInverted ? 'w-16' : 'w-[240px]'"
        class="h-full flex justify-center items-center gap-2"
      >
        <img
          src="../../../assets/img/favicon.ico"
          height="36"
          width="36"
        />
        <div v-if="!sidebarStore.sidebarInverted">{{ AppMetadata.APP_NAME }}</div>
      </div>
      <div
        :class="sidebarStore.sidebarInverted ? 'w-[calc(100%-64px)]' : 'w-[calc(100%-240px)]'"
        class="h-full"
      >
        <div class="flex justify-between h-full items-center">
          <div><base-breadcrumb /></div>
          <div class="pr-2">登录</div>
        </div>
      </div>
    </div>
  </n-layout-header>
</template>
