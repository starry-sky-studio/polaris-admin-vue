<template>
  <div class="flex justify-between">
    <Bar />
    <LineChart />
    <pie />
  </div>
  <Earth />
</template>

<script setup lang="ts" name="Father">
import Pie from '@/pages/Home/cpns/pie.vue'
import Bar from '@/pages/Home/cpns/bar.vue'
import LineChart from '@/pages/Home/cpns/linechart.vue'
import Earth from '@/pages/Home/cpns/earth.vue'
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
