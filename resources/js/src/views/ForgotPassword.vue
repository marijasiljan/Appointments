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

        <v-col v-if="emailSentStatus == false" lg="4" class="d-flex align-center auth-bg pa-10 pb-0">
          <v-row>
            <v-col cols="12" sm="8" md="6" lg="12" class="mx-auto">
              <v-card flat>
                <v-card-text>
                  <p class="text-2xl font-weight-semibold text--primary mb-2">{{$t('forgot_password')}} 🔒</p>
                  <p class="mb-2">{{$t('forgot_password_text')}}</p>
                </v-card-text>

                <!-- login form -->
                <v-card-text>
                  <v-form ref="form">
                    <v-text-field :rules="[required,emailValidator]" v-model="email" outlined :label="$t('email')" placeholder="john@example.com" hide-details class="mb-4"></v-text-field>
                    <v-btn block color="primary" @click="sendLink"> {{$t('send_reset_link')}} </v-btn>
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
        <v-col v-else lg="4" class="d-flex align-center auth-bg pa-10 pb-0">
          <v-row>
            <v-card flat>
              <v-card-text  style="display: flex;flex-direction:column;align-items: center;">
                <v-icon color="success" x-large>{{icons.mdiCheckOutline}}</v-icon>
                              <span>{{$t('your_email_has_been_sent_please_check_email_for_reset_link')}}</span>
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


          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mdiChevronLeft,mdiCheckOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
import themeConfig from '@themeConfig'
import { required, emailValidator } from '@core/utils/validation'

export default {
  name: "auth-forgot-password",
  setup() {
    const isPasswordVisible = ref(false)
    const emailSentStatus = ref(false)
    const email = ref('')
      const form = ref(null)
      const sendLink = async () =>{
        if (form.value.validate()){
          if (await confirmAlert()){
              axios.post("/password/email", {'email': email.value})
              .then(response => {
                  if (response.data.status == true) {
                      emailSentStatus.value =  true
                  } else {
                      flashMsg('error', response.data.message)
                  }
              })
          }
        }
      }
    return {
      isPasswordVisible,
      email,
      form,
      required,
      emailValidator,
      // themeConfig
      appName: themeConfig.app.name,
      appLogo: themeConfig.app.logo,
      sendLink,
      emailSentStatus,
      icons: {
        mdiChevronLeft,
          mdiCheckOutline
      },
    }
  },
}
</script>

<style lang="scss">
@import '@resources/sass/preset/pages/auth.scss';
</style>
