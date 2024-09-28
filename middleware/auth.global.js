import { useReloadPage, useRouteType } from "~/composables/state"

export default defineNuxtRouteMiddleware((to, from) => {
    if (process.server){ // 在服务器端处理路由
      const nuxtApp = useNuxtApp()
    } else { // 在客户端处理路由

      console.log('check route and device')
      console.log(from.fullPath)
      console.log(to.fullPath)
      // 是否是移动端设备
      const isMobile = /(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(navigator.userAgent)
      
      // 是否是手机端路由
      const isRouterMobile = /^\/mobile\//.test(to.fullPath) || to.fullPath.includes('/mobile')
      
      console.log(isMobile)
      console.log(isRouterMobile)

      // const device = useDevice()
      // const routeType = useRouteType()
      // if(isMobile){
      //   device.value = 'mobile'
      // }else{
      //   device.value = 'PC'
      // }
      // if(isRouterMobile){
      //   routeType.value = 'mobile'
      // }else{
      //   routeType.value = 'PC'
      // }
      // console.log(device.value)
      // console.log(routeType.value)

      // 设置一个全局变量，一旦发生因设备产生的路由跳转，就会要求刷新页面，以便重新加载样式
      const reloadPage = useReloadPage()

      // 移动端并且 不是/m开头路由
      if(isMobile && !isRouterMobile){
        reloadPage.value = true
        return navigateTo(`/mobile${to.fullPath}`)
      }
  
      // 不是移动端 是/m开头路由
      if( !isMobile && isRouterMobile){
        reloadPage.value = true
        return navigateTo(`${to.fullPath.replace('/mobile','')}`)
      }
    }
  })