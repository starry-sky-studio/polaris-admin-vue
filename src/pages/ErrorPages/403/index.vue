<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <main class="absolute inset-0 m-auto flex items-center justify-center pb-20">
    <div>
      403

      {{ t('403') }}
    </div>
  </main>
</template>
