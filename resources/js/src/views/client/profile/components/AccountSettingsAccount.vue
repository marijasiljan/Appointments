<template>
  <v-card flat class="pa-3 mt-2">

    <v-card-text>
      <v-form ref="form" class="multi-col-validation mt-6">
        <v-row>
          <v-col cols="4">
            <v-avatar rounded size="120" class="me-6">
              <v-avatar :color="user.profile_picture ? '' : 'primary'" :class="user.profile_picture ? '' : 'v-avatar-light-bg primary--text'" size="120" rounded class="mb-4">
                <v-img v-if="user.profile_picture" :src="user.profile_picture+'?api_token='+token"></v-img>
                <span v-else class="font-weight-semibold text-5xl">{{ avatarText(user.name+' '+user.last_name) }}</span>
              </v-avatar>
            </v-avatar>
          </v-col>
          <v-col cols="8">
            <v-file-input show-size ref="file" accept="image/*" :label="$t('image_input')"></v-file-input>
          </v-col>
          <v-col cols="12" sm="6" md="2">
            <v-select
              :rules="[rules.required]" :error-messages="errorMessages['gender']" v-on:change="() => {errorMessages['gender'] = ''}"
              :items="[{value:'Male',text:$t('male')},{text:'Female',value:$t('female')}]"
              :label="$t('gender')" item-text="text" item-value="value" hide-details v-model="editedItem.gender"></v-select>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              :rules="[rules.required]" :error-messages="errorMessages['name']" v-on:keyup="() => {errorMessages['name'] = ''}" v-on:keypress.enter="saveModal"
              v-model="editedItem.name" required :label="$t('name')"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              :rules="[rules.required]" :error-messages="errorMessages['last_name']" v-on:keyup="() => {errorMessages['last_name'] = ''}" v-on:keypress.enter="saveModal"
              v-model="editedItem.last_name" required :label="$t('last_name')"></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <v-text-field
              :rules="[rules.emailValidator]" :error-messages="errorMessages['email']" v-on:keyup="() => {errorMessages['email'] = ''}" v-on:keypress.enter="saveModal"
              v-model="editedItem.email" required :label="$t('email')"></v-text-field>
          </v-col>

          <v-col cols="12">
            {{ $t('address')}}
          </v-col>

          <v-col cols="12" sm="8" md="8">
            <v-text-field
              :rules="[rules.required]" :error-messages="errorMessages['street']" v-on:keyup="() => {errorMessages['street'] = ''}" v-on:keypress.enter="saveModal"
              v-model="editedItem.street" required :label="$t('street')"></v-text-field>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-text-field
              :rules="[rules.required]" :error-messages="errorMessages['street_nr']" v-on:keyup="() => {errorMessages['street_nr'] = ''}" v-on:keypress.enter="saveModal"
              v-model="editedItem.street_nr" required :label="$t('street_nr')"></v-text-field>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-text-field
              :rules="[rules.required]" :error-messages="errorMessages['zip']" v-on:keyup="() => {errorMessages['zip'] = ''}" v-on:keypress.enter="saveModal"
              v-model="editedItem.zip" required :label="$t('zip')"></v-text-field>
          </v-col>
          <v-col cols="12" sm="8" md="8">
            <v-text-field
              :rules="[rules.required]" :error-messages="errorMessages['city']" v-on:keyup="() => {errorMessages['city'] = ''}" v-on:keypress.enter="saveModal"
              v-model="editedItem.city" required :label="$t('city')"></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-text-field
              :rules="[rules.required]" :error-messages="errorMessages['mobile']" v-on:keyup="() => {errorMessages['mobile'] = ''}" v-on:keypress.enter="saveModal"
              v-model="editedItem.mobile" required :label="$t('mobile_nr')"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-on:keypress.enter="saveModal"
              v-model="editedItem.tel" required :label="$t('tel_nr')"></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <label class="text-small" for="newsletter">{{$t('newsletter')}}</label>
            <v-switch id="newsletter" v-model="editedItem.newsletter" inset :true-value="1" :false-value="0"></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <label class="text-small"
                   for="email_notifications">{{$t('email_notifications')}}</label>
            <v-switch id="email_notifications" v-model="editedItem.email_notifications"
                      inset :true-value="1" :false-value="0"></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <label class="text-small" for="push_notifications">{{$t('push_notifications')}}</label>
            <v-switch id="push_notifications" v-model="editedItem.push_notifications"
                      inset :true-value="1" :false-value="0"></v-switch>
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-select :error-messages="errorMessages['service_in_canton']" v-on:change="() => {errorMessages['service_in_canton'] = ''}"
                      :items="['AG','AI','AR','BE','BL','BS','FR','GE','GL','GR','JU','LU','NE','NW','OW','SG','SH','SO','SZ','TG','TI','UR','VD','VS','ZG','ZH']"
                      :label="$t('service_in_canton')" hide-details v-model="editedItem.service_in_canton"></v-select>
          </v-col>

          <v-col cols="12">
            <v-btn color="primary" @click="saveModal" class="me-3 mt-4">
              {{ $t('save') }}
            </v-btn>

          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiAlertOutline, mdiCloudUploadOutline } from '@mdi/js'
import {ref} from "@vue/composition-api/dist/vue-composition-api";
import {mdiBriefcaseVariantOutline, mdiCheck, mdiCheckboxBlankCircle} from "@mdi/js";
import { required, integerValidator, emailValidator } from '@core/utils/validation';
import { avatarText } from '@core/utils/filter'

export default {
  props: {
    accountData: {
      type: Object,
      default: () => {},
    },
  },
  setup(_,context) {

    let rules = { required, integerValidator, emailValidator }
    let path = '/'+user.role+'/profile'
    const form = ref(null)
    const errorMessages = ref([])
    const editedItem = ref({})
    let tmp = JSON.stringify(user)
    editedItem.value = JSON.parse(tmp)
    editedItem.value.tel == 'null' ? editedItem.value.tel = '' : JSON.parse(tmp).tel

    function saveModal(){
      if(form.value.validate()){
        store.dispatch('setSimpleLoader',true)
        let file = context.refs.file.$refs.input.files[0]
        let fd = new FormData();
        fd.append("image", file);
        fd.append("role",'company');
        fd.append("gender",                      editedItem.value.gender);
        fd.append("name",                        editedItem.value.name);
        fd.append("last_name",                   editedItem.value.last_name);
        fd.append("email",                       editedItem.value.email);
        fd.append("mobile",                      editedItem.value.mobile);
        fd.append("tel",                         editedItem.value.tel);
        fd.append("street",                      editedItem.value.street);
        fd.append("street_nr",                   editedItem.value.street_nr);
        fd.append("zip",                         editedItem.value.zip);
        fd.append("city",                        editedItem.value.city);
        fd.append("newsletter",                  editedItem.value.newsletter);
        fd.append("email_notifications",         editedItem.value.email_notifications);
        fd.append("push_notifications",          editedItem.value.push_notifications);
        fd.append("status",                      editedItem.value.status);
        fd.append("service_in_canton",           editedItem.value.service_in_canton);

        fd.append("company_name",                user.company.company_name);
        fd.append("mwst_number",                 user.company.mwst_number);
        fd.append("capacity_of_services",        user.company.capacity_of_services);
        fd.append("website",                     user.company.website);
        fd.append("description",                 user.company.description);
        fd.append("qr_iban",                     user.company.qr_iban);
        fd.append("besr_id",                     user.company.besr_id);
        fd.append("bank_details",                user.company.bank_details);
        fd.append("insurance", user.company.insurance);

        axios.post(path, fd).then(response => {
          if(response.data.status == true){
            store.dispatch('updateUser',response.data.data)
            errorMessages.value = []
            window.location = '/'+user.role+'/profile'
          }
          store.dispatch('setSimpleLoader',false)

        }).catch(error => {
          store.dispatch('setSimpleLoader',false)
          if(error.response.status == 422){
            errorMessages.value = error.response.data.errors
          }
        })
      }
    }
    return {
      form,
      errorMessages,
      rules,
      editedItem,
      avatarText,
      saveModal,

      icons: {
        mdiAlertOutline,
        mdiCloudUploadOutline,
        mdiCheck,
        mdiBriefcaseVariantOutline,
        mdiCheckboxBlankCircle,
      },
    }
  },
}
</script>
