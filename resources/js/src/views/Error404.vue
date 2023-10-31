<template>
  <div id="misc">
    <img class="misc-mask" height="226"
      :src="require(`@/assets/images/misc/misc-mask-${$vuetify.theme.dark ? 'dark' : 'light'}.png`).default"
    />

    <div class="page-title text-center px-4">
      <h2 class="text-2xl font-weight-semibold text--primary d-flex align-center justify-center">
        <span class="me-2">{{ $t('page_not_found') }}</span>
        <v-icon color="warning">
          {{ icons.mdiAlert }}
        </v-icon>
      </h2>
      <p class="text-sm">{{$t('page_not_found_subtitle')}}</p>
      <a color="primary" href="/" class="mb-4">{{$t('back_to_home')}}</a>

      <div class="misc-character d-flex justify-center">
        <v-img max-width="700" src="/assets/images/3d-characters/error.png"></v-img>
      </div>

    </div>
  </div>
</template>

<script>
import { mdiAlert } from '@mdi/js'

export default {
  setup() {

    return {
      icons: {
        mdiAlert,
      },
    }
  },
}
</script>

<style lang="scss">
</style>
