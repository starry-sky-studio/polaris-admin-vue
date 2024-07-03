<template>
  <div
    style="max-width: 480px"
    class="card"
    ref="chart"
  ></div>
</template>
<script setup lang="ts" name="Child">
import { ref, onMounted, reactive } from 'vue'
import * as echarts from 'echarts/core'
import { LegendComponent } from 'echarts/components'
echarts.use([LegendComponent])
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
};
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
