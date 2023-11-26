<script setup lang="ts">
import { darkTheme, lightTheme } from 'naive-ui'

import { useThemeStore } from '@/store'
const themeStore = useThemeStore()
</script>

<template>
  <n-config-provider
    :theme="themeStore.theme === 'light' ? lightTheme : darkTheme"
    :theme-overrides="
      themeStore.theme === 'light' ? themeStore.lightThemeOverrides : themeStore.darkThemeOverrides
    "
  >
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped></style>
