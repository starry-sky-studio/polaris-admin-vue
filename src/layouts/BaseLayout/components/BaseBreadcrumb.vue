<script setup lang="ts">
import { myMenuOptions, getMenuItem } from '@/constants'

import { MenuOption, DropdownOption } from 'naive-ui'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRoute()

//根据路由路径寻找 option

// const test = [
//   {
//     options1: [
//       {
//         label: '错误页面',
//         key: 'error-pages',
//         children: [
//           {
//             label: '500',
//             key: '500'
//           },
//           {
//             label: '404',
//             key: '404'
//           }
//         ]
//       }
//     ]
//   },
//   {
//     options1: [
//       {
//         label: '错误页面',
//         key: 'error-pages',
//         children: [
//           {
//             label: '500',
//             key: '500'
//           },
//           {
//             label: '404',
//             key: '404'
//           }
//         ]
//       }
//     ]
//   }
// ]

interface breadcrumbDataitem {
  Option: MenuOption | undefined | MenuOption[]
  value: string
}

const breadcrumbData = ref<breadcrumbDataitem[]>([
  {
    Option: myMenuOptions,
    value: route.meta?.title as string
  }
])
//[
// {
//   options1: [
//     {
//       label: '首页',
//       key: 'home'
//     },
//     {
//       label: '首页',
//       key: 'home',

//       children: [
//         {
//           label: '用户管理',
//           key: 'user-management'
//         }
//       ]
//     }
//   ]
// },
// {
//   options1: [
//     {
//       label: 'David Tao',
//       key: 1,
//       children: [
//         {
//           label: '黑色柳丁',
//           key: 2
//         },
//         {
//           label: '黑色柳丁',
//           key: 2
//         }
//       ]
//     },
//     {
//       label: '黑色柳丁',
//       key: 2
//     }
//   ]
// }
//]

const handleMenus = (path: string) => {
  console.log(path)

  const pathSplit = path.split('/').filter((i) => i)

  const sum = pathSplit.reduce((acc, cur) => {
    console.log(acc, 'acc'), console.log(cur, 'cur')

    const breadcrumbItem = getMenuItem(cur, myMenuOptions)
    console.log(breadcrumbItem)

    // breadcrumbData.value.push({
    //   Option: breadcrumbItem,
    //   value: breadcrumbItem.label
    // })
    return
  }, [])

  console.log(sum, 'sum')

  pathSplit.forEach(() => {})
  console.log(getMenuItem('2-1', myMenuOptions))
}

watch(
  () => router.fullPath,
  () => {
    handleMenus(router.fullPath)
  },
  {
    immediate: true
  }
)
</script>

<template>
  <div>
    <!-- <n-button @click="handleMenus">test</n-button> -->
  </div>
  <n-breadcrumb>
    <n-breadcrumb-item
      v-for="(item, index) in breadcrumbData"
      :key="index"
    >
      <n-dropdown :options="item.options1">
        <div class="trigger">面包屑</div>
      </n-dropdown>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>
