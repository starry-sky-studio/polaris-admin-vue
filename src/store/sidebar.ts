export const useSidebarStore = defineStore('sidebar', () => {
  const sidebarInverted = ref(false)

  const toggleSidebar = () => (sidebarInverted.value = !sidebarInverted.value)

  const changeSidebar = (param: boolean) => {
    sidebarInverted.value = param
  }

  return { sidebarInverted, toggleSidebar, changeSidebar }
})
