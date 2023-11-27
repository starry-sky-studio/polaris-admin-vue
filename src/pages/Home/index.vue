<script setup lang="ts">
import { useThemeStore } from '@/store'
import { ThemeModel } from '@/types'
const themeStore = useThemeStore()
const toggleTheme = (theme: ThemeModel) => {
  themeStore.changeTheme(theme)
}

const formValue = ref({
  user: {
    name: '',
    age: ''
  },
  phone: ''
})
</script>

<template>
  <div>
    我是home

    <n-form
      inline
      :label-width="80"
      :model="formValue"
    >
      <n-form-item
        label="姓名"
        path="user.name"
      >
        <n-input
          v-model:value="formValue.user.name"
          placeholder="输入姓名"
        />
      </n-form-item>
      <n-form-item
        label="年龄"
        path="user.age"
      >
        <n-input
          v-model:value="formValue.user.age"
          placeholder="输入年龄"
        />
      </n-form-item>
      <n-form-item
        label="电话号码"
        path="phone"
      >
        <n-input
          v-model:value="formValue.phone"
          placeholder="电话号码"
        />
      </n-form-item>
    </n-form>

    <n-button @click="toggleTheme(ThemeModel.DARK)">切换主题暗黑模式</n-button>
    <n-button @click="toggleTheme(ThemeModel.LIGHT)">切换主题白天模式</n-button>
    <n-button type="tertiary"> Tertiary </n-button>
    <n-button type="primary"> Primary </n-button>
    <n-button type="info"> Info </n-button>
    <n-button type="success"> Success </n-button>
    <n-button type="warning"> Warning </n-button>
    <n-button type="error"> Error </n-button>
    <n-card> 我是cards </n-card>
    <div class="w-full h-16 bg-indigo-100 dark:bg-slate-200">bg-indigo-100</div>
    <div class="w-full h-16 bg-indigo-200 dark:bg-slate-200">bg-indigo-200</div>
    <div class="w-full h-16 bg-indigo-300 dark:bg-slate-200">bg-indigo-300</div>
    <div class="w-full h-16 bg-indigo-400 dark:bg-slate-200">bg-indigo-400</div>
    <div class="w-full h-16 bg-indigo-500 dark:bg-slate-200">bg-indigo-500</div>
  </div>
</template>
