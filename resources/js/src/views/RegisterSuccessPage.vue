<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link to="/" class="d-flex align-center">
            <v-img :src="appLogo" max-height="80px" max-width="150px" alt="logo" contain class="me-3"></v-img>

            <h2 class="text-2xl font-weight-semibold">
              {{ appName }}
            </h2>
          </router-link>
        </v-card-title>

        <!-- title -->
<!--        <v-card-text style="text-align: center">-->
<!--          <p class="text-2xl font-weight-semibold text&#45;&#45;primary mb-2">{{$t('thank_you_for_register')}}</p>-->
<!--          <p class="mb-2">{{$t('please_check_email_and_login')}}</p>-->
<!--        </v-card-text>-->

          <v-card-text style="text-align: center">
              <p class="text-2xl font-weight-semibold text--primary mb-2">{{$t('thank_you_for_register')}}</p>
              <p class="mb-2">{{$t('please_check_email_and_login')}}</p>

              <v-icon color="success" x-large>{{icons.mdiAccountCheckOutline }}</v-icon>
<!--              <router-link to="/login"><v-btn block color="primary" class="mt-6"> {{$t('login')}} </v-btn></router-link>-->

              <!-- New input field for verification code -->
              <v-text-field
                  v-model="verificationCode"
                  outlined
                  :label="$t('verificationCode')"
                  hide-details="auto"
                  class="mt-6"
              ></v-text-field>
              <v-btn block color="primary" class="mt-6" @click="checkVerificationCode"> {{$t('verificationCode')}} </v-btn>
          </v-card-text>

        <!-- login form -->
<!--        <v-card-text style="text-align: center">-->
<!--          <v-icon color="success" x-large>{{icons.mdiAccountCheckOutline }}</v-icon>-->
<!--          <router-link to="/login"><v-btn block color="primary" class="mt-6"> {{$t('login')}} </v-btn></router-link>-->
<!--        </v-card-text>-->
      </v-card>
    </div>

    <!-- background triangle shape  -->
    <img
      class="auth-mask-bg"
      height="173"
      :src="require(`@/assets/images/misc/mask-${$vuetify.theme.dark ? 'dark' : 'light'}.png`).default"
    />

    <!-- tree -->
    <v-img class="auth-tree" width="247" height="185" src="/assets/images/misc/tree.png"></v-img>

    <!-- tree  -->
    <v-img
      class="auth-tree-3"
      width="377"
      height="289"
      src="/assets/images/misc/tree-3.png"
    ></v-img>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEyeOutline, mdiEyeOffOutline,mdiAccountCheckOutline  } from '@mdi/js'
import { ref } from '@vue/composition-api'
import themeConfig from '@themeConfig'
import { useRouter } from '@core/utils'
export default {
  setup() {
      const { route } = useRouter()
    const isPasswordVisible = ref(false)
    const email = ref('')
    const password = ref('')
    const verificationCode = ref('')
      const socialLink = [
      {
        icon: mdiFacebook,
        color: '#4267b2',
        colorInDark: '#4267b2',
      },
      {
        icon: mdiTwitter,
        color: '#1da1f2',
        colorInDark: '#1da1f2',
      },
      {
        icon: mdiGithub,
        color: '#272727',
        colorInDark: '#fff',
      },
      {
        icon: mdiGoogle,
        color: '#db4437',
        colorInDark: '#db4437',
      },
    ]

      const checkVerificationCode = () => {
              if (verificationCode.value) {
                  const emailFromQuery = route.value.query.email
                  axios.post(`/password/verify`, { email: emailFromQuery, verificationCode: verificationCode.value})
                      .then(response => {
                          if (response.data.status === true) {
                              router.push({ name: 'auth-login', query: { successMessage: 'Your account is verified. You can log in now!' } });
                          } else {
                              console.log('Invalid verification code');
                          }
                      })
                      .catch(error => {
                          console.error('Error validating verification code:', error);
                      });
              }
      };

      return {
      checkVerificationCode,
      verificationCode,
      isPasswordVisible,
      email,
      password,
      socialLink,

      // themeConfig
      appName: themeConfig.app.name,
      appLogo: themeConfig.app.logo,

      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
          mdiAccountCheckOutline
      },
    }
  },
}
</script>

<style lang="scss">
@import '@resources/sass/preset/pages/auth.scss';
</style>
