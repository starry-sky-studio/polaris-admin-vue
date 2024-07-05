<template>
  <div
    ref="chart"
    class="h-[450px]"
  ></div>
</template>
<script setup lang="ts" name="Child">
import * as echarts from 'echarts'
import 'echarts-gl'

const chart = ref(null)
onMounted(() => {
  const myChart = echarts.init(chart.value)
  const options = {
    // backgroundColor: '#000',
    globe: {
      baseTexture: '../../../src/assets/img/earth.jpg',
      shading: 'lambert',
      // environment: '../../../src/assets/img/starfield.jpg',
      atmosphere: {
        show: true
      },
      light: {
        ambient: {
          intensity: 0.1
        },
        main: {
          intensity: 1.5
        }
      }
    },
    series: []
  }
  options && myChart.setOption(options)
})
</script>

<style scoped></style>
