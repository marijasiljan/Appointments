<template>
  <div class="auth-wrapper auth-v2">
    <div class="auth-inner">
      <!-- brand logo -->
      <router-link to="/" class="brand-logo d-flex align-center">
        <v-img :src="appLogo" max-height="80px" max-width="150px" alt="logo" contain class="me-3"></v-img>

        <h2 class="text--primary">
          {{ appName }}
        </h2>
      </router-link>
      <!--/ brand logo -->

      <v-row class="auth-row ma-0">
        <v-col lg="8" class="d-none d-lg-block position-relative overflow-hidden pa-0">
          <div class="auth-illustrator-wrapper">
            <img height="362" class="auth-mask-bg" src="/assets/images/misc/mask-v2-light.png"/>

            <v-img height="226" width="300" class="auth-tree" src="/assets/images/misc/tree-4.png"></v-img>

            <div class="d-flex align-center h-full pa-16 pe-0">
              <v-img contain max-width="100%" height="692" class="auth-3d-group" src="/assets/images/3d-characters/illustration-forgot-password-light"></v-img>
            </div>
          </div>
        </v-col>

        <v-col lg="4" class="d-flex align-center auth-bg pa-10 pb-0">
          <v-row>
            <v-col cols="12" sm="8" md="6" lg="12" class="mx-auto">
              <v-card flat>
                <v-card-text>
                  <p class="text-2xl font-weight-semibold text--primary mb-2">{{$t('create_password')}} 🔒</p>
                </v-card-text>

                <!-- login form -->
                <v-card-text>
                  <v-form ref="form">
                    <v-text-field :rules="[required]"
                                  v-model="resetPassword.password"
                                  :type="isPasswordVisible ? 'text' : 'password'"
                                  label="Password"
                                  placeholder="Password"
                                  :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
                                  hide-details="auto"
                                  class="mb-2"
                                  @click:append="isPasswordVisible = !isPasswordVisible"
                    >

                    </v-text-field>
                    <v-text-field :rules="[required, confirmedValidator(resetPassword.password_confirmation,resetPassword.password)]"
                                  v-model="resetPassword.password_confirmation"
                                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                                  label="Confirm Password"
                                  placeholder="Confirm Password"
                                  :append-icon="isConfirmPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
                                  hide-details="auto"
                                  class="mb-2"
                                  @click:append="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                    >

                    </v-text-field> <v-btn block color="primary" @click="verifyEmail"> {{$t('create_password_and_verify')}} </v-btn>
                  </v-form>
                </v-card-text>

                <v-card-actions class="d-flex justify-center align-center">
                  <router-link :to="{ name: 'auth-login' }" class="d-flex align-center text-sm">
                    <v-icon size="24" color="primary">
                      {{ icons.mdiChevronLeft }}
                    </v-icon>
                    <span>{{$t('back_to_login')}}</span>
                  </router-link>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mdiChevronLeft,mdiEyeOffOutline,mdiEyeOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
import themeConfig from '@themeConfig'
import { useRouter } from '@core/utils';
import { required, emailValidator,confirmedValidator } from '@core/utils/validation'

export default {
  name: "verify-account",
  setup(props, context) {
    const { route } = useRouter()
    const emailSentStatus = ref(false)
    const isPasswordVisible = ref(false)
    const isConfirmPasswordVisible = ref(false)
    const resetPassword = ref({
      password:'',
      password_confirmation:'',
      hash:route.value.params.hash
    })
    const form = ref(null)
    const verifyEmail = async () =>{
      if (form.value.validate()){
        if (await confirmAlert()){
            axios.post("/verify/email", resetPassword.value)
            .then(response => {
                flashMsg('success', response.data.message)
                axios.post("/login", {'email': response.data.data.email, 'password': resetPassword.value.password})
                  .then(response => {
                    let responseData = response.data.data;
                    if (response.data.status == true) {
                      flashMsg('success', i18n.t('hold_on_we_are_logging_you_in'))
                      axios.defaults.headers.common['Authorization'] = responseData.token_type + ' ' + responseData.access_token;
                      store.dispatch('updateToken', responseData.access_token);
                      axios.post("/getUser")
                        .then(async response2 => {
                          if (response2.data.meta == true) {
                            await store.dispatch('updateUser', response2.data.data);
                            window.user = store.state.user
                            window.location = '/' + response2.data.data.role; //router.push had problems because of the menu initialising on created and had no user
                          } else {
                            flashMsg('error', response2.data.message)
                          }
                        })
                    } else {
                      flashMsg('error', response.data.message)
                    }
                  })
            })
        }
      }
    }
    return {
      isPasswordVisible,
      form,
      required,
      emailValidator,
      confirmedValidator,
      // themeConfig
      appName: themeConfig.app.name,
      appLogo: themeConfig.app.logo,
      verifyEmail,
      isConfirmPasswordVisible,
      resetPassword,
      route,
      emailSentStatus,
      icons: {
        mdiChevronLeft,
        mdiEyeOffOutline,
        mdiEyeOutline
      },
    }
  },
}
</script>

<style lang="scss">
@import '@resources/sass/preset/pages/auth.scss';
</style>
