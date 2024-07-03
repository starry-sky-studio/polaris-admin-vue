<template>
  <div class="container">
    <Bar />
    <LineChart />
    <pie />
  </div>
 <div
    ref="chart"
    style="width: 90%; height: 450px"
  ></div>
</template>

<script setup lang="ts" name="Father">
import Pie from '@/pages/Home/cpns/pie.vue'
import Bar from '@/pages/Home/cpns/bar.vue'
import LineChart from '@/pages/Home/cpns/linechart.vue'
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

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
