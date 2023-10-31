<template>
  <transition :name="appRouteTransition" mode="out-in" appear>
    <router-view></router-view>
  </transition>
</template>

<script>
import useAppConfig from '@core/@app-config/useAppConfig'
import ThemeConfig from "../../../themeConfig";
export default {
  setup() {
    const { appRouteTransition } = useAppConfig()

    return {
      appRouteTransition,
    }
  },
}
</script>
