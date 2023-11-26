<script setup lang="ts"></script>

<template>
  <div class="bg-slate-400 h-screen flex justify-between">
    <div class="w-[50%] bg-blue-100 h-full">我是AuthLayout</div>
    <div class="w-[50%] bg-blue-300 h-full flex justify-center items-center">
      <router-view />
    </div>
  </div>
</template>
