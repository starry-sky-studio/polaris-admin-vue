<template>
  <div
    style="max-width: 480px"
    class="card"
    ref="chart"
  ></div>
</template>
<script setup lang="ts" name="Child">
import { ref, onMounted } from 'vue'
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
.card {
  width: 480px;
  height: 300px;
  /* background-color: #fff; */
  /* border: 1px solid; */
  /* border-color: rgba(0, 0, 0, 0.1); */
  /* box-shadow: 5px 5px 5px #ccc; */
}
</style>
