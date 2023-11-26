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
  <div>
    <n-form
      ref="formRef"
      :label-width="80"
      :model="formData"
      :rules="rules"
    >
      <n-form-item
        label="用户名"
        path="user.name"
      >
        <n-input
          v-model:value="formData.username"
          placeholder="输入用户名"
        />
      </n-form-item>

      <n-form-item
        label="密码"
        path="phone"
      >
        <n-input
          v-model:value="formData.password"
          placeholder="请输入密码"
        />
      </n-form-item>
      <n-form-item>
        <n-button
          attr-type="button"
          @click="handleLogin"
        >
          登录
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>
