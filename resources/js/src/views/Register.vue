<template>
  <div class="auth-wrapper auth-v2 background-image-container">
    <div class="auth-inner">
      <!-- brand logo -->
      <router-link to="/" class="brand-logo d-flex align-center">
<!--          <div class="background-image-container">-->
<!--              <img src="../assets/images/Barbershop.png" alt="Background Image">-->
<!--          </div>-->
      </router-link>
      <!--/ brand logo -->

      <v-row class="auth-row ma-0">
        <v-col lg="7" class="d-none d-lg-block position-relative overflow-hidden pa-0">
          <div class="auth-illustrator-wrapper">
            <!-- triangle bg -->
            <!-- 3d character -->
          </div>
        </v-col>

        <v-col lg="5" class="align-center">
<!--          <div class="background-image-container">-->
<!--              <img src="../assets/images/Barbershop.png" alt="Background Image">-->
<!--          </div>-->
          <v-row>
            <v-col cols="12" sm="8" md="6" lg="12" class="mx-auto">
              <v-card flat style="max-width: 100% !important;">
                <v-card-text>
                  <p class="text-2xl font-weight-semibold text--primary my-2">{{$t('register_and_start_title')}}</p>
                </v-card-text>

                <!-- login form -->
                <v-card-text>
                  <v-form ref="registerForm" @submit.prevent="handleFormSubmit">
                  <v-row>
                    <v-col sm="12" md="6">
                      <v-text-field
                        v-model="name"
                        outlined
                        :label="$t('name')"
                        :error-messages="errorMessages.name"
                        :rules="[validators.required, validators.alphaValidator]"
                        :placeholder="$t('name')"
                        hide-details="auto"
                        class="mb-6"
                        color="#cf814d"
                      ></v-text-field>
                    </v-col>
                    <v-col sm="12" md="6">
                      <v-text-field
                        v-model="surname"
                        outlined
                        :label="$t('surname')"
                        :error-messages="errorMessages.last_name"
                        :rules="[validators.required, validators.alphaValidator]"
                        :placeholder="$t('surname')"
                        hide-details="auto"
                        class="mb-6"
                        color="#cf814d"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                      <v-row>
                      <v-col sm="12" md="6">
                    <v-text-field
                      v-model="email"
                      outlined
                      :error-messages="errorMessages.email"
                      :rules="[validators.required, validators.emailValidator]"
                      :label="$t('email')"
                      :placeholder="$t('email')"
                      hide-details="auto"
                      class="mb-6"
                      color="#cf814d"
                    ></v-text-field>
                      </v-col>
                          <v-col sm="12" md="6">
                          <v-text-field
                          v-model="password"
                          :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
                          outlined
                          :rules="[validators.required, validators.passwordValidator]"
                          :type="isPasswordVisible ? 'text' : 'password'"
                          :label="$t('password')"
                          density="compact"
                          placeholder="Enter your password"
                          prepend-inner-icon="mdi-lock-outline"
                          variant="outlined"
                          class="mb-6"
                          @click:append-inner="isPasswordVisible = !isPasswordVisible"
                          color="#cf814d"
                      ></v-text-field>
                          </v-col>
                          <v-col sm="12" md="6">
                          <v-text-field
                              v-model="passwordConfirmation"
                              :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
                              outlined
                              :rules="[validators.required, matchPassword]"
                              :type="isPasswordVisible ? 'text' : 'password'"
                              :label="$t('confirm_password')"
                              density="compact"
                              placeholder="Confirm your password"
                              prepend-inner-icon="mdi-lock-outline"
                              variant="outlined"
                              class="mb-6"
                              @click:append-inner="isPasswordVisible = !isPasswordVisible"
                              color="#cf814d"
                          ></v-text-field>
                      </v-col>

                    <v-col sm="12" md="6">
                        <v-menu
                            ref="menu1"
                            v-model="dateMenuModal"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="formatDate"
                                    :label="$t('date')"
                                    :prepend-icon="icons.mdiCalendar"
                                    v-bind="attrs"
                                    v-on="on"
                                    color="#cf814d"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="birthday"
                                :first-day-of-week="1"
                                @input="()=>{dateMenuModal = false;}">
                            </v-date-picker>
                        </v-menu>
                    </v-col>
                      </v-row>

                    <v-text-field
                       v-model="role"
                       outlined
                       :error-messages="errorMessages.role"
                       :rules="[validators.required]"
                       :label="$t('role')"
                       :placeholder="$t('role')"
                       hide-details="auto"
                       class="mb-6"
                       color="#cf814d"
                     ></v-text-field>

<!--                    <v-checkbox-->
<!--                      v-model="privacy_policy"-->
<!--                      :error-messages="errorMessages.privacy_policy"-->
<!--                      :rules="[validators.required]"  hide-details class="mt-0">-->
<!--                      <template #label>-->
<!--                        <div class="d-flex align-center flex-wrap">-->
<!--                          <span class="me-2">{{$t('i_agree_to')}}</span-->
<!--                          ><a href="/datenschutz" target="_blank">{{$t('privacy_policy')}}  </a>-->
<!--                          {{$t('and')}}<a href="/agb" target="_blank"> {{$t('terms')}}</a>-->
<!--                        </div>-->
<!--                      </template>-->
<!--                    </v-checkbox>-->

                    <v-btn block color="#cf814d" type="submit" class="mt-6">{{$t('sign_up')}}</v-btn>
                  </v-form>
                </v-card-text>

                <!-- create new account  -->
                <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
                  <p class="mb-0 me-2">{{$t('already_have_an_account')}}</p>
                  <router-link style="color: #cf814d" :to="{ name: 'auth-login' }">{{$t('sign_in_instead')}}</router-link>
                </v-card-text>

                <!-- divider -->
<!--                <v-card-text class="d-flex align-center mt-2">-->
<!--                  <v-divider></v-divider>-->
<!--                  <span class="mx-5">{{$t('or')}}</span>-->
<!--                  <v-divider></v-divider>-->
<!--                </v-card-text>-->

<!--                &lt;!&ndash; social links &ndash;&gt;-->
<!--                <v-card-actions class="d-flex justify-center">-->
<!--                  <v-btn v-for="link in socialLink" :key="link.icon" icon class="ms-1">-->
<!--                    <v-icon :color="$vuetify.theme.dark ? link.colorInDark : link.color">-->
<!--                      {{ link.icon }}-->
<!--                    </v-icon>-->
<!--                  </v-btn>-->
<!--                </v-card-actions>-->
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
import { mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
// eslint-disable-next-line object-curly-newline
import { required, emailValidator, passwordValidator, alphaValidator } from '@core/utils/validation'
import { ref, getCurrentInstance ,computed} from '@vue/composition-api'
import { useRouter } from '@core/utils'
import themeConfig from '@themeConfig'
import moment from 'moment'

export default {
  setup() {
    // Template Refs
    const registerForm = ref(null)

    const vm = getCurrentInstance().proxy
    const { router } = useRouter()

    const isPasswordVisible = ref(false)
    const name = ref('john')
    const surname = ref('doe')
    const email = ref('john@example.com')
    const password = ref('');
    const tmpDate = new Date()
    const birthday = ref(tmpDate.getFullYear() +'-'+ (tmpDate.getMonth()+1) +'-'+ tmpDate.getDate())
    const role = ref('client')
    const errorMessages = ref([])
    const dateMenuModal = ref(false)
    const formatDate = computed(() => {
          return moment(birthday.value).format('DD.MM.YYYY')
      })
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

    const handleFormSubmit = () => {
      const isFormValid = registerForm.value.validate()
      if (!isFormValid) return

      axios.post('/register', {
        name: name.value,
        surname: surname.value,
        email: email.value,
        password: password.value,
        birthday:birthday.value,
        role: role.value
      })
        .then(response => {
          if (response.data.status){
              console.log(email)
              router.push({path: '/register-success-page', query: { email: email.value } })
          }
          // const { tokens } = response.data.data.tokens
          // const { user } = response.data.data.user
          //   axios.defaults.headers.common['Authorization'] = tokens.token_type + ' ' + tokens.access_token;
          //   store.dispatch('updateToken', tokens.access_token);
          //   store.dispatch('updateUser', user);
          //     window.user = store.state.user
          //     //as now only admin is used in this version it has postfix _new
          //     window.location = '/' + user.role + '_new';

        })
        .catch(error => {
          // TODO: Next Update - Show notification
          console.error('Oops, Unable to Register!')
          console.log('error :>> ', error.response)
          errorMessages.value = error.response.data.errors
        })
    }

    return {
      isPasswordVisible,
      name,
      surname,
      email,
      birthday,
      role,
      password,
      errorMessages,
      handleFormSubmit,
      socialLink,
      dateMenuModal,
      formatDate,
      moment,
      icons: {

        mdiEyeOutline,
        mdiEyeOffOutline,
      },
      validators: {
        required,
        emailValidator,
        passwordValidator,
        alphaValidator,
      },

      // themeConfig
      appName: themeConfig.app.name,
      appLogo: themeConfig.app.logo,
      loginImage: themeConfig.app.loginImage,

      // Template Refs
      registerForm,
    }
  },
    computed: {
        matchPassword() {
            return (value) => value === this.password;
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@resources/sass/preset/pages/auth.scss';
.auth-inner {
    position: relative;
    margin: 0;
    padding: 0;
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
    width: 100%;
    height: 100%;
}
</style>
