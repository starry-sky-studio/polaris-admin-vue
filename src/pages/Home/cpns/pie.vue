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
import 'echarts/lib/chart/pie'
echarts.use([LegendComponent])
const chart = ref(null)
onMounted(() => {
  const myChart = echarts.init(chart.value)
  const options = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Vue' },
          { value: 735, name: 'React' },
          { value: 580, name: 'Js' },
          { value: 484, name: 'Html' },
          { value: 300, name: 'Css' }
        ]
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
