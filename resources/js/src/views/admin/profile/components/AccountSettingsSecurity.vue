<template>
  <v-card flat class="mt-5">
    <v-form ref="form">
      <div class="px-3">
        <v-card-text class="pt-5">
          <v-row>
            <v-col cols="12" sm="8" md="6">
              <!-- current password -->
              <v-text-field
                v-model="old_password"
                :error-messages="errorMessages['old_password']" v-on:keyup="() => {errorMessages['old_password'] = ''}"
                :type="isCurrentPasswordVisible ? 'text' : 'password'"
                :append-icon="isCurrentPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
                :label="$t('current_password')"
                outlined dense
                @click:append="isCurrentPasswordVisible = !isCurrentPasswordVisible"
              ></v-text-field>

              <!-- new password -->
              <v-text-field
                v-model="password"
                :error-messages="errorMessages['password']" v-on:keyup="() => {errorMessages['password'] = ''}"
                :type="isNewPasswordVisible ? 'text' : 'password'"
                :append-icon="isNewPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
                :label="$t('new_password')"
                outlined dense persistent-hint
                :hint="$t('make_sure_its_8_chars')"
                @click:append="isNewPasswordVisible = !isNewPasswordVisible"
              ></v-text-field>

              <!-- confirm password -->
              <v-text-field
                v-model="password_confirmation"
                :error-messages="errorMessages['password_confirmation']" v-on:keyup="() => {errorMessages['password_confirmation'] = ''}"
                :type="isCPasswordVisible ? 'text' : 'password'"
                :append-icon="isCPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
                :label="$t('confirm_new_password')"
                outlined dense class="mt-3"
                @click:append="isCPasswordVisible = !isCPasswordVisible"
              ></v-text-field>

              <!-- action buttons -->
              <div style="text-align: right">
                <v-btn color="primary" @click="saveModal" class="me-3 mt-3">{{ $t('save') }}</v-btn>
              </div>
            </v-col>

            <v-col cols="12" sm="4" md="6" class="d-none d-sm-flex justify-center position-relative">
              <v-img
                contain
                max-width="170"
                :src="require('@/assets/images/3d-characters/pose-m-1.png').default"
                class="security-character"
              ></v-img>
            </v-col>
          </v-row>
        </v-card-text>
      </div>


    </v-form>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiKeyOutline, mdiLockOpenOutline, mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    let path = '/password/reset'
    const isCurrentPasswordVisible = ref(false)
    const isNewPasswordVisible = ref(false)
    const isCPasswordVisible = ref(false)
    const errorMessages = ref([])
    const form = ref(null)

    const old_password = ref('')
    const password = ref('')
    const password_confirmation = ref('')

    function saveModal(){
      if(form.value.validate()){
        store.dispatch('setSimpleLoader',true)
        let fd = new FormData();
        fd.append("old_password",                old_password.value);
        fd.append("password",                    password.value);
        fd.append("password_confirmation",       password_confirmation.value);

        axios.post(path, fd).then(response => {
          if(response.data.status == true){
            errorMessages.value = []
            old_password.value = ''
            password.value = ''
            password_confirmation.value = ''
            flashMsg('success',response.data.message)
          }
          store.dispatch('setSimpleLoader',false)

        }).catch(error => {
          if(error.response.status == 422){
            errorMessages.value = error.response.data.errors
          }
        })
      }
    }

    return {
      form,
      saveModal,
      isCurrentPasswordVisible,
      isNewPasswordVisible,
      errorMessages,
      old_password,
      isCPasswordVisible,
      password,
      password_confirmation,
      icons: {
        mdiKeyOutline,
        mdiLockOpenOutline,
        mdiEyeOffOutline,
        mdiEyeOutline,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.two-factor-auth {
  max-width: 25rem;
}
.security-character {
  position: absolute;
  bottom: -0.5rem;
}
</style>
