<template>
  <div id="misc">
    <img
      class="misc-mask"
      height="226"
      :src="require(`@/assets/images/misc/misc-mask-${$vuetify.theme.dark ? 'dark' : 'light'}.png`).default"
    />

    <v-img class="misc-tree" src="/assets/images/misc/tree-2.png"></v-img>

    <div class="page-title text-center px-5">
      <h2 class="text-2xl font-weight-semibold text--primary">{{$t('you_are_not_authorised')}}</h2>
      <p class="text-sm">{{$t('you_are_not_authorised_subtitle')}}</p>

      <div class="misc-character d-flex justify-center">
        <v-img max-width="700" src="/assets/images/3d-characters/not-authorized.png"></v-img>
      </div>

      <v-btn color="primary" :to="'/'+user.role" class="mb-4"> {{$t('dashboard')}} </v-btn>
    </div>
  </div>
</template>

<script>


    export default {
        name:'NotAuthorized',
        setup(_, context) {

        },
    }
</script>

<style lang="scss">
@import '@resources/sass/preset/misc.scss';
</style>
