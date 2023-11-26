<script setup lang="ts">
let message: string = 'Hello, World!'
console.log(message)
</script>

<template>
  <div class="bg-slate-400 h-screen flex justify-between">
    <div class="w-0 bg-orange-100 h-full sm:w-[50%]">我是AuthLayout</div>
    <div class="w-full bg-orange-300 h-full sm:w-[50%] flex justify-center items-center">
      <div class="h-96 w-80 p-4 rounded bg-white">
        <router-view />
      </div>
    </div>
  </div>
</template>
