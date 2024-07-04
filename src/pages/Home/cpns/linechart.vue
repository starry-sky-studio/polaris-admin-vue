<template>
  <div
     class="w-[400px] h-[300px]"
    ref="chart"
  ></div>
</template>
<script setup lang="ts" name="Child">
import * as echarts from 'echarts'
import 'echarts/lib/chart/pie'

const chart = ref(null)
onMounted(() => {
  const myChart = echarts.init(chart.value)
  const options = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  }
  myChart.setOption(options)
})
</script>

<style scoped>

</style>
