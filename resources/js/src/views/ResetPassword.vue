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
                  <p class="text-2xl font-weight-semibold text--primary mb-2">{{$t('reset_password')}} 🔒</p>
                  <p class="mb-2">{{$t('reset_password_text')}}</p>
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

                    </v-text-field>
                    <v-btn block color="primary" @click="resetPasswordFunction"> {{$t('reset')}} </v-btn>
                  </v-form>
                </v-card-text>

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
import { required, emailValidator,confirmedValidator } from '@core/utils/validation'

export default {
  name: "auth-reset-password",
  setup(props,context) {
    const isPasswordVisible = ref(false)
    const isConfirmPasswordVisible = ref(false)
    const resetPassword = ref({
      password:'',
      password_confirmation:'',
      token:context.root.$route.params.token
    })
    const email = ref('')
      const form = ref(null)
      const checkToken = () =>{
          axios.post("/password/checkToken", {'token': context.root.$route.params.token})
          .then(response => {
            if (response.data.status == false){
                router.replace('/forgot-password')
                flashMsg('error', response.data.message)
            }
          }).catch(error=>{
              router.replace('/forgot-password')
              flashMsg('error', error.response.data.errors)
          })
      }
      checkToken()
      const resetPasswordFunction = async() =>{
        if (form.value.validate()){
          if ( await confirmAlert()){
              axios.post("/password/reset", resetPassword.value)
              .then(response => {
                  if (response.data.status == true) {
                      router.replace('/login')
                  } else {
                      flashMsg('error', response.data.message)
                  }
              })
          }
        }
      }
    return {
      isPasswordVisible,
      isConfirmPasswordVisible,
      email,
      form,
      required,
      emailValidator,
        confirmedValidator,
        resetPassword,
        resetPasswordFunction,
      // themeConfig
      appName: themeConfig.app.name,
      appLogo: themeConfig.app.logo,
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
