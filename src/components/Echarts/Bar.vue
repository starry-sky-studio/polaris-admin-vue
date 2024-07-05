<template>
  <div
    class="w-[400px] h-[300px]"
    ref="chart"
  ></div>
</template>
<script setup lang="ts" name="Child">
import * as echarts from 'echarts'
const chart = ref(null)
onMounted(() => {
  const myChart = echarts.init(chart.value)
  const options = {
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: [23, 24, 18, 25, 27, 28, 25]
      }
    ]
  }
  myChart.setOption(options)
})
</script>

<style scoped></style>
