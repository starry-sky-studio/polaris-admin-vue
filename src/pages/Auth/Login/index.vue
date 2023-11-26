<script setup lang="ts">
import { FormInst, FormItemRule, FormRules, useMessage } from 'naive-ui'

const formRef = ref<FormInst | null>(null)
const message = useMessage()

const formData = reactive({
  username: '',
  password: ''
})

const rules: FormRules = {
  username: [
    {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入用户名'
    }
  ],
  password: [
    {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入密码'
    },
    {
      validator: (_: FormItemRule, value: string) => value.length >= 6,
      trigger: ['blur', 'input'],
      message: '密码长度请大于6'
    }
  ]
}

const handleLogin = () => {
  console.log('11')
}
</script>

<template>
  <div class="flex flex-col justify-start items-center w-full h-full">
    <div class="text-2xl pb-4 text-[#333] bg-amber-300">登录</div>

    <n-form
      ref="formRef"
      :model="formData"
      :rules="rules"
      class="w-full bg-green-700"
    >
      <n-form-item path="username">
        <n-input
          v-model:value="formData.username"
          placeholder="输入用户名"
        />
      </n-form-item>

      <n-form-item path="password">
        <n-input
          v-model:value="formData.password"
          placeholder="请输入密码"
        />
      </n-form-item>

      <n-form-item>
        <n-button type="primary"> 验证 </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>
