<template>
  <div class="auth-wrapper auth-v2">
    <div class="auth-inner">
      <!-- brand logo -->
      <router-link to="/" class="brand-logo d-flex align-center">
        <v-img :src="appLogo" max-height="80px" max-width="150px" alt="logo" contain
               class="me-3"></v-img>
      </router-link>
      <!--/ brand logo -->

      <v-row class="auth-row ma-0">
        <v-col lg="8" class="d-none d-lg-block position-relative overflow-hidden pa-0">
          <div class="auth-illustrator-wrapper">
            <!-- triangle bg -->
            <img height="362" class="auth-mask-bg" :src="`/assets/images/misc/mask-v2-${$vuetify.theme.dark ? 'dark' : 'light'}.png`" alt=""/>

            <!-- tree -->
<!--            <v-img height="226" width="300" class="auth-tree"-->
<!--                   src="/assets/images/misc/tree-4.png">-->
<!--            </v-img>-->

            <!-- 3d character -->
            <div class="d-flex align-center h-full pa-16 pe-0">
<!--            <img alt="image" src="/assets/images/3d-characters/group-light.png" style="background-size: contain;height: 602px;max-width: 100%;" class="auth-3d-group"/>-->
              <v-img contain max-width="100%" height="692" class="auth-3d-group" :src="loginImage"></v-img>
            </div>
          </div>
        </v-col>

        <v-col lg="4" class="d-flex align-center auth-bg pa-10 pb-0">
          <v-row>
            <v-col cols="12" sm="8" md="6" lg="12" class="mx-auto">
              <v-card flat>
                <v-card-text>
                  <p class="text-2xl font-weight-semibold text--primary mb-2">{{$t('welcome_to')}} {{ appName }}</p>
                  <p class="mb-2">{{$t('welcome_to_umbau_subtitle')}}</p>
                </v-card-text>
                <!-- login form -->
                <v-card-text>
                  <v-form @submit.prevent="login">
                    <v-text-field v-model="email" outlined :label="$t('email')" :placeholder="$t('email')"
                                  hide-details="auto" class="mb-6"></v-text-field>

                    <v-text-field
                      v-model="password"
                      outlined
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :label="$t('password')"
                      :placeholder="$t('password')"
                      :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
                      hide-details="auto"
                      class="mb-2"
                      @click:append="isPasswordVisible = !isPasswordVisible"
                    ></v-text-field>

                    <div class="d-flex align-center justify-space-between flex-wrap">
                      <v-checkbox hide-details :label="$t('remember_me')" class="mt-0"></v-checkbox>

                      <!-- forget link -->
                      <router-link :to="{ name: 'auth-forgot-password' }" class="d-flex align-center text-sm">{{$t('forgot_password')}}</router-link>
                    </div>

                    <v-btn block color="primary" type="submit" class="mt-6" :loading="isButtonLoading('/login')"> {{ $t('login') }}</v-btn>
                  </v-form>
                </v-card-text>

                <!-- create new account  -->
<!--                <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">-->
<!--                  <p class="mb-0 me-2">{{ $t('new_on_our_platform') }}</p>-->
<!--                  <span @click="register()"> <a>{{$t('create_an_account')}}</a> </span>-->
<!--                </v-card-text>-->
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
    // eslint-disable-next-line object-curly-newline
    import {mdiEyeOutline, mdiEyeOffOutline} from '@mdi/js'
    import {ref} from '@vue/composition-api'
    import themeConfig from '@themeConfig'

    export default {
        setup() {
            const isPasswordVisible = ref(false)
            const email = ref('')
            const password = ref('')

            function login() {
                axios.post("/login", {'email': email.value, 'password': password.value})
                    .then(response => {
                        console.log('res', response)
                        if (response.data.status == true) {

                            flashMsg('success', i18n.t('hold_on_we_are_logging_you_in'))
                            // axios.defaults.headers.common['Authorization'] = responseData.token_type + ' ' + responseData.access_token;
                            store.dispatch('updateToken', response.data.data.remember_token);
                            store.dispatch('updateUser', response.data.data);
                            window.user = store.state.user
                           window.location = '/';
                        }
                    }).catch(error => {
                        console.log(error);
                      // flashMsg('error', error.response.data.message)
                      // if(error.response.data.errors == 'not_verified'){
                      //   router.replace('/send-email-verification')
                      // }
                  })
            }

            const register = () => {
                router.replace('/register')
            }
            return {
                isPasswordVisible,
                email,
                password,
                login,
                register,
                // Icons
                icons: {
                    mdiEyeOutline,
                    mdiEyeOffOutline,
                },

                // themeConfig
                appName: themeConfig.app.name,
                appLogo: themeConfig.app.logo,
                loginImage: themeConfig.app.loginImage,
            }
        },
    }
</script>

<style lang="scss" scoped>
  @import '@resources/sass/preset/pages/auth.scss';
</style>
