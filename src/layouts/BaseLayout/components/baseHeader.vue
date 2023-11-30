<script setup lang="ts">
import UserAvatarIcon from '~icons/carbon/user-avatar-filled-alt'
import NotificationIcon from '~icons/ic/baseline-notifications-none'
import SettingIcon from '~icons/ic/outline-settings'
import FullScreenIcon from '~icons/ic/round-fullscreen'
import ExitFullscreenIcon from '~icons/ic/round-fullscreen-exit'
import LanguageIcon from '~icons/ion/language-outline'
import DiscordIcon from '~icons/line-md/discord'
import DocsIcon from '~icons/line-md/document-list'
import GithubIcon from '~icons/line-md/github-loop'
import HideMenuIcon from '~icons/line-md/menu-fold-left'
import ShowMenuIcon from '~icons/line-md/menu-fold-right'
import SunIcon from '~icons/line-md/moon-alt-to-sunny-outline-loop-transition'
import MoonIcon from '~icons/line-md/sunny-filled-loop-to-moon-alt-filled-loop-transition'

import BaseBreadcrumb from './BaseBreadcrumb.vue'

import { useFullscreen } from '@vueuse/core'
const { isFullscreen, toggle } = useFullscreen()

import { useRouter } from 'vue-router'

import { AuthUtils } from '@/utils'

import { useSidebarStore, useThemeStore } from '@/store'
import { useMessage } from 'naive-ui'
const sidebarStore = useSidebarStore()
const themeStore = useThemeStore()
const message = useMessage()
const router = useRouter()

enum UserAction {
  'USER.INFO',
  'CHANGE.PASSWORD',
  'QUIT'
}

const userOptions = ref([
  {
    label: '个人信息',
    key: UserAction['USER.INFO']
  },
  {
    label: '修改密码',
    key: UserAction['CHANGE.PASSWORD']
  },
  {
    label: '退出登录',
    key: UserAction.QUIT
  }
])

const logout = () => {
  router.replace('/login').then(() => {
    message.success('退出成功')
    AuthUtils.clearToken()
  })
}

const selectUserOption = (key: UserAction) => {
  switch (key) {
    case UserAction['USER.INFO']:
      router.push('/user-info')
      break
    case UserAction['CHANGE.PASSWORD']:
      router.push('/change-password')
      break
    case UserAction.QUIT:
      logout()
      break
    default:
      break
  }
}
</script>

<template>
  <n-layout-header
    bordered
    class="h-16"
  >
    <div class="h-16 flex">
      <div
        :class="sidebarStore.sidebarInverted ? 'w-16' : 'w-[240px]'"
        class="h-full flex justify-center items-center gap-2"
      >
        <img
          src="../../../assets/img/favicon.ico"
          height="36"
          width="36"
        />
        <div v-if="!sidebarStore.sidebarInverted">{{ AppMetadata.APP_NAME }}</div>
      </div>
      <div
        :class="sidebarStore.sidebarInverted ? 'w-[calc(100%-64px)]' : 'w-[calc(100%-240px)]'"
        class="h-full"
      >
        <div class="flex justify-between h-full items-center">
          <div><base-breadcrumb /></div>
          <div class="pr-4 space-x-2">
            <NTooltip
              placement="bottom"
              trigger="hover"
            >
              <template #trigger>
                <NIcon
                  class="cursor-pointer"
                  size="20"
                  :component="isFullscreen ? FullScreenIcon : ExitFullscreenIcon"
                  @click="() => toggle()"
                />
              </template>
              {{ isFullscreen ? '退出全屏' : '全屏' }}
            </NTooltip>
            <NTooltip
              placement="bottom"
              trigger="hover"
            >
              <template #trigger>
                <NIcon
                  class="cursor-pointer"
                  size="20"
                  :component="GithubIcon"
                  @click="() => BrowserUtils.openNewWindow(AppMetadata.REPO_GITHUB_URL)"
                />
              </template>
              Github
            </NTooltip>
            <NTooltip
              placement="bottom"
              trigger="hover"
            >
              <template #trigger>
                <NIcon
                  class="cursor-pointer"
                  size="20"
                  :color="themeStore.isLightTheme ? '#FDC022' : '#FED736'"
                  :component="themeStore.isDarkTheme ? SunIcon : MoonIcon"
                  @click="() => themeStore.toggleTheme()"
                />
              </template>
              主题
            </NTooltip>

            <NDropdown
              trigger="hover"
              :options="userOptions"
              @select="selectUserOption"
            >
              <NIcon
                class="cursor-pointer"
                size="22"
                :component="UserAvatarIcon"
              />
            </NDropdown>
          </div>
        </div>
      </div>
    </div>
  </n-layout-header>
</template>
