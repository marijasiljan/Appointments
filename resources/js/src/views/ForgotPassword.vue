<template>
  <div class="auth-wrapper auth-v2 background-image-container">
    <div class="auth-inner">
      <!-- brand logo -->
      <router-link to="/" class="brand-logo d-flex align-center">
        <v-img :src="appLogo" max-height="80px" max-width="150px" alt="logo" contain class="me-3"></v-img>

      </router-link>
      <!--/ brand logo -->

      <v-row class="auth-row ma-0">
        <v-col lg="8" class="d-none d-lg-block position-relative overflow-hidden pa-0">
          <div class="auth-illustrator-wrapper">

          </div>
        </v-col>

        <v-col v-if="emailSentStatus == false" lg="4" class="align-center">
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
                    <v-text-field :rules="[required,emailValidator]" v-model="email" outlined :label="$t('email')" placeholder="john@example.com" hide-details class="mb-4" color="#cf814d"></v-text-field>
                    <v-btn block color="#cf814d" @click="sendLink"> {{$t('send_reset_link')}} </v-btn>
                  </v-form>
                </v-card-text>

                <v-card-actions class="d-flex justify-center align-center">
                  <router-link :to="{ name: 'auth-login' }" class="d-flex align-center text-sm">
                    <v-icon size="24" color="#cf814d">
                      {{ icons.mdiChevronLeft }}
                    </v-icon>
                    <span style="color: #cf814d" >{{$t('back_to_login')}}</span>
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
.auth-inner {
    position: relative;
}

.background-image-container {
    background-image:url('../assets/images/Barbershop.png') !important;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    //z-index: -1; /* Ensure the background stays behind other elements */
}

.background-image-container img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
</style>
