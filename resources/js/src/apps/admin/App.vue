<template>
  <component :is="resolveLayoutVariant" :class="`skin-variant--${appSkinVariant}`">
    <v-progress-linear :active="loading" :indeterminate="loading" absolute top color="primary"></v-progress-linear>
    <v-overlay :value="fullLoading">
<!--      <img src="/assets/images/gifUmbau.gif">-->
    </v-overlay>
    <transition :name="appRouteTransition" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </component>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { computed, ref } from '@vue/composition-api'
// eslint-disable-next-line import/no-unresolved
import useAppConfig from '@core/@app-config/useAppConfig'
import { useRouter } from '@core/utils'
import { useLayout } from '@core/layouts/composable/useLayout'

// Layouts
import LayoutContentVerticalNav from '@/layouts/variants/content/vertical-nav/LayoutContentVerticalNav.vue'
import LayoutContentHorizontalNav from '@/layouts/variants/content/horizontal-nav/LayoutContentHorizontalNav.vue'
import LayoutBlank from '@/layouts/variants/blank/LayoutBlank.vue'

// Dynamic vh
import useDynamicVh from '@core/utils/useDynamicVh'

export default {
  components: {
    LayoutContentVerticalNav,
    LayoutContentHorizontalNav,
    LayoutBlank,
  },
  setup() {
    const { route } = useRouter()
    const { appContentLayoutNav, appSkinVariant, appRouteTransition } = useAppConfig()

    const { handleBreakpointLayoutSwitch } = useLayout()
    handleBreakpointLayoutSwitch()
    const loading = ref(false)
    const fullLoading = ref(false)

    const resolveLayoutVariant = computed(() => {
      loading.value = store.getters.getSimpleLoading
      fullLoading.value = store.getters.getFullLoading
      if (route.value.meta.layout === 'blank') return 'layout-blank'
      if (route.value.meta.layout === 'content') return `layout-content-${appContentLayoutNav.value}-nav`

      return null
    })

    useDynamicVh()

    return {
      loading,
      fullLoading,
      resolveLayoutVariant,
      appSkinVariant,
      appRouteTransition,
    }
  },
}
</script>
