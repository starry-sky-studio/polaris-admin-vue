<script setup lang="ts">
import BaseFooter from './components/BaseFooter.vue'
import BaseContent from './components/BaseContent.vue'
import BaseSidebar from './components/BaseSidebar.vue'
import BaseHeader from './components/BaseHeader.vue'
</script>

<template>
  <n-layout class="h-screen">
    <base-header />
    <n-layout
      has-sider
      class="h-[calc(100vh-130px)]"
    >
      <base-sidebar />
      <base-content />
    </n-layout>
    <base-footer />
  </n-layout>
</template>
