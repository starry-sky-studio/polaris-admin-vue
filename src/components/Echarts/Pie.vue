<template>
  <div
    class="w-[400px] h-[300px]"
    ref="chart"
  ></div>
</template>
<script setup lang="ts" name="Child">
import * as echarts from 'echarts/core'
import 'echarts/lib/chart/pie'

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

<style scoped></style>
