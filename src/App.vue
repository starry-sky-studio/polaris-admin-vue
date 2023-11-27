<script setup lang="ts">
import { useThemeStore, useLangStore } from '@/store'
const themeStore = useThemeStore()
const langStore = useLangStore()
</script>

<template>
  <n-config-provider
    :locale="langStore.naiveLang"
    :date-locale="langStore.naiveDateLang"
    :theme="themeStore.naiveTheme"
    :theme-overrides="themeStore.naiveThemeOverrides"
  >
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped></style>
