<template xmlns="http://www.w3.org/1999/html">
  <div>
    <SimpleTable ref="simpleTable" :key="simpleTableKey" :items="data" :headers="headers"
                 :isLoading="isLoading" :title="title">
      <template v-slot:custom-companyOwner="slotItems">
        <div>
          {{ slotItems.item.id }}.{{ slotItems.item.name }} {{ slotItems.item.last_name }} <br/>
          {{ slotItems.item.email }}<br/>
          {{ slotItems.item.tel+'/'+slotItems.item.mobile }}<br/>
          {{ slotItems.item.street }} {{ slotItems.item.street_nr }}, {{ slotItems.item.zip }} {{ slotItems.item.city }}
        </div>
      </template>

      <template v-slot:custom-logo="slotItems">
        <v-img :src="slotItems.item.company.logo"></v-img>
      </template>

      <template v-slot:custom-categories="slotItems">
        <v-chip x-small class="v-chip-light-bg primary--text mr-1" color="primary"
                v-for="(category,index) in slotItems.item.company.categories"
                :key="'company_'+index">
          {{ category.name[user.lang] }}
        </v-chip>
      </template>

      <template v-slot:custom-status="slotItems">
        <v-chip x-small class="v-chip-light-bg primary--text" color="primary"
                v-if="slotItems.item.status == 1">
          {{$t('active')}}
          <span v-if="slotItems.item.isVerified == 0"> - {{ $t('not_verified') }}</span>
        </v-chip>
        <v-chip x-small v-else class="v-chip-light-bg error--text" color="error">
          {{$t('inactive')}}
        </v-chip>
      </template>

      <template v-slot:custom-actions="slotItems">
        <div style="display:flex">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="mr-1" v-on:click="$emit('openEmployeeTable',slotItems.item.id)"
                     v-bind="attrs" v-on="on" x-small>
                <v-icon small color="black">
                  {{ icons.mdiAccountMultipleOutline }}
                </v-icon>
              </v-btn>
            </template>
            <span>{{ $t('employees') }}</span>
          </v-tooltip>

          <v-btn class="mr-1" v-on:click="openModal(slotItems.item)" color="primary" x-small>
            <v-icon small color="white">
              {{ icons.mdiPencil }}
            </v-icon>
          </v-btn>

          <v-btn class="mr-1" v-on:click="changeStatus(slotItems.item)"
                 :color="getStatusIcon(slotItems.item.status)['style']" x-small>
            <v-icon small color="white">
              {{ getStatusIcon(slotItems.item.status)['icon'] }}
            </v-icon>
          </v-btn>
          <v-btn class="mr-1" v-on:click="deleteItem(slotItems.item)" color="error" x-small>
            <v-icon small color="white">
              {{ icons.mdiTrashCanOutline }}
            </v-icon>
          </v-btn>
          <v-btn v-if="$can('view','user_activities')" class="mr-1" v-on:click="openActivity(slotItems.item)" color="secondary" x-small>
            <v-icon small color="white">
              {{ icons.mdiInformationOutline }}
            </v-icon>
          </v-btn>
          <v-tooltip top v-if="$can('view','alternative_user_login')">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="mr-1" v-bind="attrs" v-on="on" color="info" x-small
                     v-on:click="loginAsOtherUser(slotItems.item)">
                <v-icon small color="white" >
                  {{ icons.mdiAccountOutline }}
                </v-icon>
              </v-btn>
            </template>
            <span>{{ $t('login_as_other_user') }}</span>
          </v-tooltip>
          <v-tooltip top v-if="slotItems.item.isVerified == 0">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="" v-bind="attrs" v-on="on" color="secondary" x-small
                     v-on:click="sendVerifyEmail(slotItems.item)">
                <v-icon small color="white" >
                  {{ icons.mdiSendOutline }}
                </v-icon>
              </v-btn>
            </template>
            <span>{{ $t('resend_verification_email') }}</span>
          </v-tooltip>

        </div>

      </template>

      <template v-slot:add-button>
        <v-dialog v-model="dialog" max-width="1000px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" x-small dark v-bind="attrs" v-on="on"
                   v-on:click="openModal('new')">
              <v-icon small color="white">
                {{ icons.mdiPlusThick }}
              </v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <div class="text-h5"><span v-if="editedItem.id != 0">{{ editedItem.company.company_name }}</span>
              </div>
            </v-card-title>

            <v-divider></v-divider>

            <v-form ref="form">
              <div style="max-height: 70vh;overflow: auto">
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <h4>{{$t('company_profile')}} - {{$t('owner')}}</h4>
                      </v-col>
                      <v-col cols="12">
                        <label>{{$t('company_owner_picture')}}</label>
                        <v-file-input show-size ref="file" accept="image/*"
                                      :label="$t('file_input')"></v-file-input>
                      </v-col>
                      <v-col cols="12" sm="6" md="2">
                        <v-select
                          :rules="[rules.required]" :error-messages="errorMessages['gender']" v-on:change="() => {errorMessages['gender'] = ''}"
                          :items="[{value:'Male',text:$t('male')},{text:'Female',value:$t('female')}]"
                          :label="$t('gender')" item-text="text" item-value="value" hide-details v-model="editedItem.gender"></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field
                          :rules="[rules.required]" :error-messages="errorMessages['name']"
                          v-on:keyup="() => {errorMessages['name'] = ''}"
                          v-on:keypress.enter="saveModal"
                          v-model="editedItem.name" required :label="$t('name')"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field
                          :rules="[rules.required]" :error-messages="errorMessages['last_name']"
                          v-on:keyup="() => {errorMessages['last_name'] = ''}"
                          v-on:keypress.enter="saveModal"
                          v-model="editedItem.last_name" required
                          :label="$t('last_name')"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="4">
                        <v-text-field
                          :rules="[rules.emailValidator]" :error-messages="errorMessages['email']"
                          v-on:keyup="() => {errorMessages['email'] = ''}"
                          v-on:keypress.enter="saveModal"
                          v-model="editedItem.email" required :label="$t('email')"></v-text-field>
                      </v-col>

<!--                      <v-col cols="12" sm="6" md="6">-->
<!--                        <v-text-field-->
<!--                          type="password" :error-messages="errorMessages['password']"-->
<!--                          v-on:keyup="() => {errorMessages['password'] = ''}"-->
<!--                          v-on:keypress.enter="saveModal"-->
<!--                          v-model="editedItem.password" required-->
<!--                          :label="$t('password')"></v-text-field>-->
<!--                      </v-col>-->
<!--                      <v-col cols="12" sm="6" md="6">-->
<!--                        <v-text-field-->
<!--                          type="password" :error-messages="errorMessages['password_confirmation']"-->
<!--                          v-on:keyup="() => {errorMessages['password_confirmation'] = ''}"-->
<!--                          v-on:keypress.enter="saveModal"-->
<!--                          v-model="editedItem.password_confirmation" required-->
<!--                          :label="$t('password_confirmation')"></v-text-field>-->
<!--                      </v-col>-->

                      <v-col cols="12">
                        {{ $t('address')}}
                      </v-col>

                      <v-col cols="12" sm="8" md="8">
                        <v-text-field
                          :rules="[rules.required]" :error-messages="errorMessages['street']"
                          v-on:keyup="() => {errorMessages['street'] = ''}"
                          v-on:keypress.enter="saveModal"
                          v-model="editedItem.street" required :label="$t('street')"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" md="4">
                        <v-text-field
                          :rules="[rules.required]" :error-messages="errorMessages['street_nr']"
                          v-on:keyup="() => {errorMessages['street_nr'] = ''}"
                          v-on:keypress.enter="saveModal"
                          v-model="editedItem.street_nr" required
                          :label="$t('street_nr')"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" md="4">
                        <v-text-field
                          :rules="[rules.required]" :error-messages="errorMessages['zip']"
                          v-on:keyup="() => {errorMessages['zip'] = ''}"
                          v-on:keypress.enter="saveModal"
                          v-model="editedItem.zip" required :label="$t('zip')"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="8" md="8">
                        <v-text-field
                          :rules="[rules.required]" :error-messages="errorMessages['city']"
                          v-on:keyup="() => {errorMessages['city'] = ''}"
                          v-on:keypress.enter="saveModal"
                          v-model="editedItem.city" required :label="$t('city')"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          :rules="[rules.required]" :error-messages="errorMessages['mobile']"
                          v-on:keyup="() => {errorMessages['mobile'] = ''}"
                          v-on:keypress.enter="saveModal"
                          v-model="editedItem.mobile" required :label="$t('mobile_nr')"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-on:keypress.enter="saveModal"
                          v-model="editedItem.tel" required :label="$t('tel_nr')"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="4">
                        <label class="text-small" for="newsletter">{{$t('newsletter')}}</label>
                        <v-switch id="newsletter" v-model="editedItem.newsletter" inset
                                  :true-value="1" :false-value="0"></v-switch>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <label class="text-small" for="email_notifications">{{$t('email_notifications')}}</label>
                        <v-switch id="email_notifications" v-model="editedItem.email_notifications"
                                  inset :true-value="1" :false-value="0"></v-switch>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <label class="text-small" for="push_notifications">{{$t('push_notifications')}}</label>
                        <v-switch id="push_notifications" v-model="editedItem.push_notifications"
                                  inset :true-value="1" :false-value="0"></v-switch>
                      </v-col>

                      <v-col cols="12">
                        <h4>{{$t('company_profile')}} - {{$t('company')}}</h4>
                      </v-col>

                      <v-col cols="12">
                        <label>{{$t('company_logo')}}</label>
                        <v-file-input show-size ref="logo" accept="image/*"
                                      :label="$t('file_input')"></v-file-input>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-on:keypress.enter="saveModal"
                          v-model="editedItem.company.mwst_number" required
                          :label="$t('mwst_number')"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          :rules="[rules.required]" :error-messages="errorMessages['company_name']"
                          v-on:keyup="() => {errorMessages['company_name'] = ''}"
                          v-on:keypress.enter="saveModal"
                          v-model="editedItem.company.company_name" required
                          :label="$t('company_name')"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <span><strong>{{$t('payment_information')}}</strong></span>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-row>
                          <v-col cols="11">
                            <v-textarea
                              v-model="editedItem.company.bank_details" required
                              :label="$t('bank_details')"
                            ></v-textarea>
                          </v-col>
                          <v-col cols="1" class="d-flex">
                            <v-tooltip top>
                              <template v-slot:activator="{ on, attrs }">
                                <v-icon v-bind="attrs"
                                        v-on="on">{{icons.mdiInformationOutline}}
                                </v-icon>
                              </template>
                              <span>{{$t('bank_details_text_information')}}</span>
                            </v-tooltip>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="12" sm="12" md="7">
                        <v-row>
                          <v-col cols="1" class="d-flex">
                            <v-tooltip top>
                              <template v-slot:activator="{ on, attrs }">
                                <v-icon v-bind="attrs"
                                        v-on="on">{{icons.mdiInformationOutline}}
                                </v-icon>
                              </template>
                              <span>{{$t('qr_iban_text_information')}}</span>
                            </v-tooltip>
                          </v-col>

                          <v-col cols="11">
                            <v-text-field
                              :error-messages="errorMessages['qr_iban']" v-on:keyup="() => {errorMessages['qr_iban'] = ''}" v-on:keypress.enter="saveModal"
                              v-model="editedItem.company.qr_iban" :label="$t('qr_iban')"></v-text-field>
                          </v-col>
                        </v-row>

                      </v-col>
                      <v-col cols="12" sm="12" md="5">
                        <v-text-field
                          :error-messages="errorMessages['iban']" v-on:keyup="() => {errorMessages['iban'] = ''}" v-on:keypress.enter="saveModal"
                          v-model="editedItem.company.iban" required :label="$t('iban')"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="12" md="12">
                        <v-textarea
                          v-model="editedItem.company.description" required
                          :label="$t('description')"></v-textarea>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field
                          v-on:keypress.enter="saveModal"
                          v-model="editedItem.company.website" required
                          :label="$t('website')"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="6">
                        <v-select chips multiple
                                  :items="categories"
                                  item-value="id"
                                  :item-text="'name['+user.lang+']'"
                                  :label="$t('category')" hide-details
                                  v-model="editedItem.company.categories">
                          <template v-slot:selection="{ item, index }">
                            <v-chip v-if="index <= 2">
                              <span>{{ item.name[user.lang] }}</span>
                            </v-chip>
                            <span v-if="index === 3" class="grey--text text-caption">
                              (+ {{ editedItem.company.categories.length - 1 }})
                            </span>
                          </template>
                        </v-select>
                      </v-col>

                      <v-col cols="12" sm="6" md="6">
                        <v-select :error-messages="errorMessages['service_in_canton']"
                                  v-on:change="() => {errorMessages['service_in_canton'] = ''}"
                                  :items="['AG','AI','AR','BE','BL','BS','FR','GE','GL','GR','JU','LU','NE','NW','OW','SG','SH','SO','SZ','TG','TI','UR','VD','VS','ZG','ZH']"
                                  :label="$t('service_in_canton')" hide-details
                                  v-model="editedItem.service_in_canton"></v-select>
                      </v-col>

                    </v-row>
                  </v-container>
                </v-card-text>
              </div>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="closeModal">
                  {{ $t('cancel') }}
                </v-btn>
                <v-btn color="primary" @click="saveModal" :loading="isButtonLoading('/'+user.role+'/users/company/store')">
                  {{ $t('save') }}
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>

        </v-dialog>
      </template>
    </SimpleTable>
  </div>
</template>

<script>
import {
  mdiAccountOutline,
  mdiCheck,
  mdiCloseThick,
  mdiDelete, mdiDotsVertical,
  mdiEyeCheckOutline,
  mdiEyeOffOutline,
  mdiEyeOutline,
  mdiLink,
  mdiAccountMultipleOutline,
  mdiPencil, mdiPlusThick, mdiTrashCanOutline,
  mdiInformationOutline,
  mdiSendOutline,
} from "@mdi/js";
import {computed, ref} from "@vue/composition-api";
import SimpleTable from "@/components/common/SimpleTable";
import {required, integerValidator, emailValidator} from '@core/utils/validation'
import {useRouter} from '@core/utils';
import {can} from "../../../../../../@core/libs/acl/utils";
export default {
  name: "admin-users-companies-table",
  components: {SimpleTable},
  props: {
    users: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    }
  },
  setup(props, context) {
    const {route} = useRouter()
    let rules = {required, integerValidator, emailValidator}
    let icons = {
      mdiDelete,
      mdiPencil,
      mdiEyeCheckOutline,
      mdiEyeOffOutline,
      mdiEyeOutline,
      mdiCheck,
      mdiCloseThick,
      mdiDotsVertical,
      mdiTrashCanOutline,
      mdiPlusThick,
      mdiLink,
      mdiAccountMultipleOutline,
      mdiInformationOutline,
      mdiAccountOutline,
      mdiSendOutline
    }

    let singlePath = '/' + user.role + '/users/company'
    const tmpRole = ref(null)
    const form = ref('')
    const simpleTableKey = ref('init')
    const errorMessages = ref([])
    const isLoading = ref(false)
    const dialog = ref(false)
    const data = ref([])
    const categories = ref([])
    const tmpItem = ref({})
    const headers = ref([])
    const editedItem = ref({})
    data.value = props.users
    categories.value = props.categories

    function standardModel() {
      return {
        id: 0,
        company: {
          id: 0,
          company_name: null,
          mwst_number: null,
          capacity_of_services: null,
          website: null,
          description: null,
          categories: [],
          qr_iban: null,
          bank_details: null,
        },
        name: null,
        last_name: null,
        email: null,
        mobile: null,
        tel: null,
        street: null,
        street_nr: null,
        zip: null,
        city: null,
        role: 'company',
        service_in_canton: 'ZH',
        // password: null,
        // password_confirmation: null,
        newsletter: 1,
        push_notifications: 1,
        email_notifications: 0,
        status: 1,
      };
    }

    editedItem.value = standardModel()

    headers.value = [
      {text: 'id', align: 'start', value: 'company.id', search: true},
      {text: 'company_name', value: 'company.company_name', search: true},
      {
        text: 'company_owner',
        value: 'companyOwner',
        customSlot: true,
        sortable: false,
        search: false
      },
      {text: 'website', value: 'company.website', search: true, sortable: false},
      {text: 'mwst', value: 'company.mwst_number', search: true, sortable: false},
      {text: 'logo', value: 'company.logo',customSlot:true,sortable:false,search:true},
      {text: 'signature', value: 'company.signature_data',sortable:false,search:true},
      {text: 'categories', value: 'company.categories',customSlot:true,sortable:false,search:true},
      {text: 'status', value: 'status', customSlot: true, sortable: false, search: true},
      {
        text: 'actions',
        value: 'actions',
        sortable: false,
        customSlot: true,
        search: false
      }
    ]

    async function loginAsOtherUser(user) {
      if (await confirmAlert({'subtitle': 'confirmation_login_as_other_user'})) {
        let tmpUser = JSON.stringify(store.getters.getUser)
        tmpUser = JSON.parse(tmpUser)
        let tmpToken = JSON.stringify(store.getters.getToken)
        tmpToken = JSON.parse(tmpToken)
        axios.post('/admin/loginAsOtherUser', {'id': user.id})
          .then(response => {
            let responseData = response.data.data;
            if (response.data.status == true) {
              flashMsg('success', i18n.t('hold_on_we_are_logging_you_in'))
              store.dispatch('updateLogInBack', {
                lastUser:tmpUser,
                lastUserToken:tmpToken,
              });
              axios.defaults.headers.common['Authorization'] = responseData.token_type + ' ' + responseData.access_token;
              store.dispatch('updateToken', responseData.access_token);
              axios.post("/getUser")
                .then(async response2 => {
                  if (response2.data.status == true) {
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
      }
    }
    async function openModal(item) {
      if (item == 'new') {
        item = standardModel()
      }
      tmpItem.value = item;
      let tmp = JSON.stringify(item);
      editedItem.value = JSON.parse(tmp)
      let tmpArr = [];
      await editedItem.value.company.categories.forEach(i => {
        tmpArr.push(i.id);
      })
      editedItem.value.company.categories = tmpArr;
      // editedItem.value.password = null
      dialog.value = true;
    }

    function closeModal() {
      dialog.value = false
      editedItem.value = standardModel()
    }

    function saveModal() {
      if (form.value.validate()) {
        isLoading.value = true

        let file = context.refs.file.$refs.input.files[0]
        let logo = context.refs.logo.$refs.input.files[0]
        let fd = new FormData();
        fd.append("image", file);
        fd.append("logo", logo);
        fd.append("role", 'company');

        fd.append("id", editedItem.value.id);

        fd.append("gender", editedItem.value.gender);
        fd.append("name", editedItem.value.name);
        fd.append("last_name", editedItem.value.last_name);
        fd.append("email", editedItem.value.email);
        fd.append("mobile", editedItem.value.mobile);
        fd.append("tel", editedItem.value.tel);
        fd.append("street", editedItem.value.street);
        fd.append("street_nr", editedItem.value.street_nr);
        fd.append("zip", editedItem.value.zip);
        fd.append("city", editedItem.value.city);
        // fd.append("password", editedItem.value.password);
        fd.append("newsletter", editedItem.value.newsletter);

        fd.append("email_notifications", editedItem.value.email_notifications);
        fd.append("push_notifications", editedItem.value.push_notifications);
        fd.append("status", editedItem.value.status);
        fd.append("service_in_canton", editedItem.value.service_in_canton);
        // fd.append("password_confirmation", editedItem.value.password_confirmation);

        fd.append("company_name", editedItem.value.company.company_name);
        fd.append("mwst_number", editedItem.value.company.mwst_number);
        fd.append("capacity_of_services", editedItem.value.company.capacity_of_services);
        fd.append("website", editedItem.value.company.website);
        fd.append("description", editedItem.value.company.description);
        fd.append("category", JSON.stringify(editedItem.value.company.categories));
        fd.append("iban", editedItem.value.company.iban);
        fd.append("qr_iban", editedItem.value.company.qr_iban);
        fd.append("bank_details", editedItem.value.company.bank_details);

        axios.post(singlePath + '/store', fd).then(response => {
          if (response.data.status == true) {
            if (response.data.meta == true) {
              data.value.unshift(response.data.data)
            } else {
              let checkItem = data.value.filter(item => item.id == tmpItem.value.id)
              data.value[data.value.indexOf(checkItem[0])] = response.data.data

            }
            simpleTableKey.value = Math.random();
            errorMessages.value = []
            dialog.value = false
          }
          isLoading.value = false
        }).catch(error => {
          if (error.response.status == 422) {
            errorMessages.value = error.response.data.errors
          }
          isLoading.value = false
        })
      }
    }

    function getStatusIcon(status) {
      let statusIcons = [
        {
          'icon': icons.mdiEyeCheckOutline,
          'style': 'primary'
        },
        {
          'icon': icons.mdiEyeOffOutline,
          'style': 'error'
        }
      ]
      return statusIcons[status]
    }

    function openActivity(user) {
      router.push('/admin/user_management/activity/' + user.id)
    }
    function changeStatus(item) {
      isLoading.value = true
      axios.put(singlePath + '/changeStatus', {
        'id': item.id,
        'status': item.status ? 0 : 1
      }).then(response => {
        if (response.data.status) {
          item.status = response.data.data
          flashMsg('success', response.data.message)
        }
        isLoading.value = false
      }).catch(error => {
        if (error.response.status == 422) {
          flashMsg('error', error.response.data.message)
        }
        isLoading.value = false
      })
    }

    async function deleteItem(item) {
      if (await confirmAlert({'subtitle':'confirmation_um_company_delete'})) {
        isLoading.value = true
        axios.put(singlePath + '/delete', {'id': item.id}).then(response => {
          if (response.data.status) {
            let checkItem = data.value.filter(i => i.id == item.id)
            data.value.splice(data.value.indexOf(checkItem[0]), 1);
          }
          isLoading.value = false
        }).catch(error => {
          if (error.response.status == 422) {
            flashMsg('error', error.response.data.message)
          }
          isLoading.value = false
        })
      }
    }

    const sendVerifyEmail = async (user) =>{
      if (await confirmAlert()){
        axios.post("/verify/email/resend", {'email': user.email})
          .then(response => {
            if (response.data.status == false) {
              flashMsg('error', response.data.message)
            }
          })
      }
    }

    return {
      route,
      headers,
      data,
      icons,
      editedItem,
      dialog,
      closeModal,
      openModal,
      saveModal,
      getStatusIcon,
      changeStatus,
      simpleTableKey,
      errorMessages,
      isLoading,
      deleteItem,
      rules,
      form,
      tmpRole,
      openActivity,
      loginAsOtherUser,
      sendVerifyEmail,
    }
  }
}
</script>

<style scoped>

</style>
