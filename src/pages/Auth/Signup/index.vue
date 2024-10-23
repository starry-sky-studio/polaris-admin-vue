<script setup lang="ts">
import router from '@/router'
import { signupModel } from '@/types'
import { useMessage } from 'naive-ui'
import { FormInst, FormItemRule, FormRules } from 'naive-ui'

const message = useMessage()

const [loading, dispatcher] = useLoading()

const formData = reactive<signupModel>({
  username: '',
  password: '',
  confirmPassword: ''
})

const formRef = ref<FormInst | null>(null)

const rules: FormRules = {
  username: [
    {
      required: true,
      message: '请输入用户名'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码'
    }
  ],
  reenteredPassword: [
    {
      required: true,
      message: '请再次输入密码',
      trigger: ['input', 'blur']
    },
    {
      validator: validatePasswordSame,
      message: '两次密码输入不一致',
      trigger: ['blur', 'password-input']
    }
  ]
}

function validatePasswordSame(rule: FormItemRule, value: string): boolean {
  return value === formData.password
}

const handleSignup = async () => {
  try {
    await formRef.value!.validate()
  } catch (errors) {
    const errorMessage = (errors as FormValidationError[])[0][0].message
    if (errorMessage) {
      message.error(errorMessage)
    }
    return
  }
  loading.value = true

  const sendRequest = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        // 模拟请求成功
        resolve('Request successful!')
        // 模拟请求失败
        // reject('Request failed!');
      }, 1000)
    })
  }

  try {
    await sendRequest()
    router.push('/')
  } catch (error) {
    console.error('Error sending request:', error)
  } finally {
    dispatcher.loaded()
  }
}
</script>

<template>
  <div class="flex flex-col justify-start items-center w-full h-full">
    <div class="text-2xl pb-4 text-[#333] dark:text-[#fff]">注册1</div>
    <div class="text-2xl pb-4 text-[#333] dark:text-[#fff]">注册2</div>
    <div class="text-2xl pb-4 text-[#333] dark:text-[#fff]">注册3</div>
    <n-form
      class="w-full"
      ref="formRef"
      :rules="rules"
      :model="formData"
      label-placement="left"
      label-width="auto"
      require-mark-placement="right-hanging"
    >
      <n-form-item path="username">
        <n-input
          v-model:value="formData.username"
          placeholder="请输入用户名"
        />
      </n-form-item>
      <n-form-item path="password">
        <n-input
          v-model:value="formData.password"
          placeholder="请输入密码"
        />
      </n-form-item>
      <n-form-item path="confirmPassword">
        <n-input
          v-model:value="formData.confirmPassword"
          placeholder="请确认密码"
        />
      </n-form-item>
      <n-form-item>
        <n-button
          @click="handleSignup"
          class="w-full"
          type="primary"
          :loading="loading"
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
