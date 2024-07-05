<script setup lang="ts"></script>

<template>
  <div class="bg-slate-400 h-screen flex justify-between">
    <div
      class="w-0 bg-indigo-100 dark:bg-gray-700 h-full sm:w-[50%] flex justify-center items-center"
    >
      <div class="flex flex-col justify-center items-center">
        <img
          width="100"
          height="100"
          src="../../assets/img/favicon.ico"
        />
        <div>{{ AppMetadata.APP_NAME }}</div>
      </div>
    </div>

    <div
      class="w-full bg-indigo-300 dark:bg-slate-500 h-full sm:w-[50%] flex justify-center items-center"
    >
      <div class="h-fit w-80 p-4 rounded bg-white dark:bg-gray-900">
        <router-view />
      </div>
    </div>
  </div>
</template>
