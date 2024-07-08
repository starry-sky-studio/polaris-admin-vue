<script setup lang="ts">
import router from '@/router'
import { FormInst, FormItemRule, FormRules, useMessage, FormValidationError } from 'naive-ui'
import { ref, reactive } from 'vue'
import GitHubIcon from '~icons/ant-design/github-outlined'
import GoogleIcon from '~icons/logos/google-icon'

const formRef = ref<FormInst | null>(null)
const message = useMessage()
const [loading, dispatcher] = useLoading()

const state = ref(false)
const pwState = ref('password')
const eyeState = ref(false)
const imgUrl1 = ref(
  'https://img2.baidu.com/it/u=2986947564,869533318&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
)
const imgUrl2 = ref('https://pic.616pic.com/ys_img/00/33/92/Nk3hTdYoJE.jpg')
let showImgUrl = ref(
  'https://img2.baidu.com/it/u=2986947564,869533318&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
)

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
onMounted(() => {
  if (localStorage.getItem('username') && localStorage.getItem('password')) {
    formData.username = localStorage.getItem('username') as string
    formData.password = localStorage.getItem('password') as string
    state.value = true
  }
})

const updateType = () => {
  // showImgUrl = showImgUrl === imgUrl1 ? imgUrl2 : imgUrl1
  eyeState.value = !eyeState.value
  if (eyeState.value) {
    pwState.value = 'text'
    showImgUrl = imgUrl2
  } else {
    pwState.value = 'password'
    showImgUrl = imgUrl1
  }
}

const handleLogin = async () => {
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
    if (state.value === true) {
      localStorage.setItem('username', formData.username)
      localStorage.setItem('password', formData.password)
    }
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
      <n-form-item
        path="password"
        class="relative"
      >
        <n-input
          :type="pwState"
          v-model:value="formData.password"
          placeholder="请输入密码"
        />

        <img
          class="w-[20px] h-[40-px] absolute top-1.5 right-1"
          :src="showImgUrl"
          @click="updateType"
          alt=""
        />
      </n-form-item>
      <n-form-item>
        <n-checkbox
          type="checkbox"
          v-model:checked="state"
          >记住密码</n-checkbox
        >
      </n-form-item>

      <n-form-item>
        <n-button
          class="w-full"
          type="primary"
          @click="handleLogin"
          :loading="loading"
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
:deep(.n-form-item.n-form-item--top-labelled) {
  grid-template-rows: auto;
  grid-template-columns: minmax(0, 100%);
}

:deep(.n-divider .n-divider__title) {
  font-weight: 400;
}
</style>
