<template>
  <el-card
    style="max-width: 480px"
    class="card"
  >
  </el-card>
</template>
<script setup lang="ts" name="Child">
import { ref } from 'vue'
import { ElButton, ElCard } from 'element-plus'
const toy = ref('奥特曼')
</script>

<style scoped>
.card {
  width: 480px;
  height: 300px;
}
</style>
