<template>
  <div
    ref="chart"
    style="width: 100%; height: 400px"
  ></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

// 注册必须的组件
echarts.use([TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer])

const chart = ref(null)

onMounted(() => {
  const myChart = echarts.init(chart.value)
  const options = {
    title: {
      text: '柱状图示例'
    },
    tooltip: {},
    xAxis: {
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: [120, 200, 150, 80, 70, 110, 130]
      }
    ]
  }
  myChart.setOption(options)
})
</script>

<style scoped>

</style>
