<script setup lang="ts">
import BaseTabs from './BaseTabs.vue'
</script>

<template>
  <n-layout class="h-[calc(100vh-130px)] pl-4">
    <base-tabs />
    <n-layout class="h-[calc(100vh-171px)]">
      <router-view />
    </n-layout>
  </n-layout>
</template>
