<script setup lang="ts">
import router from '@/router'
import { FormInst, FormItemRule, FormRules, useMessage } from 'naive-ui'
import { ref, reactive } from 'vue'

import GitHubIcon from '~icons/ant-design/github-outlined'
import GoogleIcon from '~icons/logos/google-icon'

const formRef = ref<FormInst | null>(null)
const message = useMessage()

const formData = reactive({
  username: 'admin',
  password: '123456'
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
    <div class="text-2xl pb-4 text-[#333] dark:text-[#fff]">登录</div>

    <n-form
      ref="formRef"
      :model="formData"
      :rules="rules"
      class="w-full"
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
        <n-button
          class="w-full"
          type="primary"
          @click="handleLogin"
        >
          登录
        </n-button>
      </n-form-item>

      <div
        @click="router.push('/signup')"
        class="hover:text-indigo-400 cursor-pointer"
      >
        没有账户？
        <span class="text-indigo-400">注册</span>
      </div>
      <n-divider class="!my-4"> 第三方登录 </n-divider>
      <div></div>
      <div class="flex justify-center items-center gap-2">
        <div class="cursor-pointer">
          <n-button circle>
            <template #icon>
              <n-icon
                :component="GitHubIcon"
                size="26"
              />
            </template>
          </n-button>
        </div>
        <div class="cursor-pointer">
          <n-button circle>
            <template #icon>
              <n-icon
                size="26"
                :component="GoogleIcon"
              />
            </template>
          </n-button>
        </div>
      </div>
    </n-form>
  </div>
</template>

<style lang="scss" scoped>
::v-deep .n-form-item.n-form-item--top-labelled {
  grid-template-rows: auto;
  grid-template-columns: minmax(0, 100%);
}
::v-deep .n-divider .n-divider__title {
  font-weight: 400;
}
</style>
