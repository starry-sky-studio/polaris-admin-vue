<script setup lang="ts">
import router from '@/router'
import { signupModel } from '@/types'
import { reactive } from 'vue'

const formData = reactive<signupModel>({
  username: '',
  password: '',
  confirmPassword: ''
})

const handleSignup = () => {}
</script>

<template>
  <div class="flex flex-col justify-start items-center w-full h-full">
    <div class="text-2xl pb-4 text-[#333] dark:text-[#fff]">注册</div>
    <n-form
      class="w-full"
      ref="formRef"
      :model="formData"
      label-placement="left"
      label-width="auto"
      require-mark-placement="right-hanging"
    >
      <n-form-item path="username">
        <n-input
          v-model:value="formData.username"
          placeholder="Input"
        />
      </n-form-item>
      <n-form-item path="password">
        <n-input
          v-model:value="formData.password"
          placeholder="Input"
        />
      </n-form-item>
      <n-form-item path="confirmPassword">
        <n-input
          v-model:value="formData.confirmPassword"
          placeholder="Input"
        />
      </n-form-item>
      <n-form-item>
        <n-button
          @click="handleSignup"
          class="w-full"
          type="primary"
          >注册</n-button
        >
      </n-form-item>
      <div
        @click="router.push('/login')"
        class="hover:text-indigo-400 cursor-pointer"
      >
        已有账户？
        <span class="text-indigo-400">登录</span>
      </div>
    </n-form>
  </div>
</template>
