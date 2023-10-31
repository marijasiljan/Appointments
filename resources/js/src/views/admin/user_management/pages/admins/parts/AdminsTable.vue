<template xmlns="http://www.w3.org/1999/html">
  <div>
    <SimpleTable ref="simpleTable" :key="simpleTableKey" :items="data" :headers="headers" :isLoading="isLoading" :title="title">
      <template v-slot:custom-step6address="slotItems">
        <div>
          {{ slotItems.item.street }} {{ slotItems.item.street_nr }} <br />{{ slotItems.item.zip }} {{ slotItems.item.city }}
        </div>
      </template>

      <!--        <template v-slot:custom-role="slotItems">-->
      <!--          <v-edit-dialog v-if="slotItems.item.id != 1" :return-value.sync="slotItems.item.role"  @open="openRoleModal(slotItems.item.role,slotItems.item.employed_role)">-->
      <!--            <v-card class="pa-2 mx-2">-->
      <!--              {{ slotItems.item.employed_role != null ? $t(slotItems.item.employed_role) : $t(slotItems.item.role) }}-->
      <!--              <v-icon small>-->
      <!--                {{ icons.mdiPencil }}-->
      <!--              </v-icon>-->
      <!--            </v-card>-->

      <!--            <template v-slot:input>-->
      <!--              <div style="padding: 10px;">-->
      <!--                <v-radio-group @change="changeRole(slotItems.item.id)" v-model="tmpRole" class="mt-0" hide-details>-->
      <!--                  <v-radio-->
      <!--                    v-for="(item, key) in [{value:'admin',text:$t('admin')},{value:'project_manager',text:$t('project_manager')},{value:'client',text:$t('client')}]"-->
      <!--                    :key="key"-->
      <!--                    :label="item.text"-->
      <!--                    :value="item.value"-->
      <!--                  ></v-radio>-->
      <!--                </v-radio-group>-->
      <!--              </div>-->
      <!--            </template>-->
      <!--          </v-edit-dialog>-->
      <!--        </template>-->

      <template v-slot:custom-status="slotItems">
        <v-chip x-small class="v-chip-light-bg primary--text" color="primary" v-if="slotItems.item.status == 1">
          {{$t('active')}}
          <span v-if="slotItems.item.isVerified == 0"> - {{ $t('not_verified') }}</span>
        </v-chip>
        <v-chip x-small v-else class="v-chip-light-bg error--text" color="error">
          {{$t('inactive')}}
        </v-chip>
      </template>

      <template v-slot:custom-actions="slotItems">
        <div style="display:flex" >

          <v-btn class="mr-1" v-on:click="openModal(slotItems.item)" color="primary" x-small :style="(user.id != 1 && slotItems.item.id == 1) ? 'display:none' : 'display:block'">
            <v-icon small color="white">
              {{ icons.mdiPencil }}
            </v-icon>
          </v-btn>

          <v-btn v-if="slotItems.item.id != 1" class="mr-1" v-on:click="changeStatus(slotItems.item)" :color="getStatusIcon(slotItems.item.status)['style']" x-small>
            <v-icon small color="white" >
              {{ getStatusIcon(slotItems.item.status)['icon'] }}
            </v-icon>
          </v-btn>
          <v-btn v-if="slotItems.item.id != 1" class="mr-1" v-on:click="deleteItem(slotItems.item)" color="error" x-small>
            <v-icon small color="white" >
              {{ icons.mdiTrashCanOutline }}
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
            <v-btn color="primary" x-small dark v-bind="attrs" v-on="on" v-on:click="openModal('new')">
              <v-icon small color="white" >
                {{ icons.mdiPlusThick }}
              </v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <div class="text-h5">{{ $t(title) }} <span v-if="editedItem.id != 0">: {{ editedItem.name +' '+editedItem.last_name }}</span></div>
            </v-card-title>

            <v-divider></v-divider>

            <v-form ref="form">
              <div style="max-height: 70vh;overflow: auto">
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-file-input show-size ref="file" accept="image/*" :label="$t('file_input')"></v-file-input>
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

<!--                      <v-col cols="12" sm="6" md="6">-->
<!--                        <v-text-field-->
<!--                          type="password" :error-messages="errorMessages['password']" v-on:keyup="() => {errorMessages['password'] = ''}" v-on:keypress.enter="saveModal"-->
<!--                          v-model="editedItem.password" required :label="$t('password')"></v-text-field>-->
<!--                      </v-col>-->
<!--                      <v-col cols="12" sm="6" md="6">-->
<!--                        <v-text-field-->
<!--                          type="password" :error-messages="errorMessages['password_confirmation']" v-on:keyup="() => {errorMessages['password_confirmation'] = ''}" v-on:keypress.enter="saveModal"-->
<!--                          v-model="editedItem.password_confirmation" required :label="$t('password_confirmation')"></v-text-field>-->
<!--                      </v-col>-->

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

                      <v-col cols="12" sm="6" md="2">
                        <label class="text-small" for="newsletter">{{$t('newsletter')}}</label>
                        <v-switch id="newsletter" v-model="editedItem.newsletter" inset :true-value="1" :false-value="0"></v-switch>
                      </v-col>
                      <v-col cols="12" sm="6" md="2">
                        <label class="text-small" for="email_notifications">{{$t('email_notifications')}}</label>
                        <v-switch id="email_notifications" v-model="editedItem.email_notifications" inset :true-value="1" :false-value="0"></v-switch>
                      </v-col>
                      <v-col cols="12" sm="6" md="2">
                        <label class="text-small" for="push_notifications">{{$t('push_notifications')}}</label>
                        <v-switch id="push_notifications" v-model="editedItem.push_notifications" inset :true-value="1" :false-value="0"></v-switch>
                      </v-col>

                      <v-col cols="12" sm="6" md="6">
                        <v-select :error-messages="errorMessages['service_in_canton']" v-on:change="() => {errorMessages['service_in_canton'] = ''}"
                                  :items="['AG','AI','AR','BE','BL','BS','FR','GE','GL','GR','JU','LU','NE','NW','OW','SG','SH','SO','SZ','TG','TI','UR','VD','VS','ZG','ZH']"
                                  :label="$t('service_in_canton')" hide-details v-model="editedItem.service_in_canton"></v-select>
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
                <v-btn color="primary" @click="saveModal" :loading="isButtonLoading('/'+user.role+'/users/admin/store')">
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
  mdiSendOutline,
  mdiPencil, mdiPlusThick, mdiTrashCanOutline
} from "@mdi/js";
import {computed, ref} from "@vue/composition-api";
import SimpleTable from "@/components/common/SimpleTable";
import { required, integerValidator, emailValidator } from '@core/utils/validation'
import { useRouter } from '@core/utils';

export default {
  name: "admin-users-clients-table",
  components: {SimpleTable},
  props: {
    users: {
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
  setup(props,context){
    const { route } = useRouter()
    let rules = { required, integerValidator, emailValidator }
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
      mdiAccountOutline,
      mdiSendOutline,
    }

    let path = '/'+user.role+'/users/admin'
    const tmpRole = ref(null)
    const form = ref('')
    const simpleTableKey = ref(props.title)
    const errorMessages = ref([])
    const isLoading = ref(false)
    const dialog = ref(false)
    const data = ref([])
    const tmpItem = ref({})
    const headers = ref([])
    const editedItem = ref({})
    data.value = props.users

    function standardModel() {
      return {
        id:0,
        gender:null,
        name:null,
        last_name:null,
        email:null,
        mobile:null,
        tel:null,
        street:null,
        street_nr:null,
        zip:null,
        city:null,
        role:'admin',
        service_in_canton:'ZH',
        // password:null,
        // password_confirmation:null,
        newsletter:1,
        push_notifications:1,
        email_notifications:0,
        status:1,
      };
    }
    editedItem.value = standardModel()

    headers.value = [
      {text: 'id', align: 'start', value: 'id',search: true},
      {text: 'name', value: 'name',sortable:true,search:true},
      {text: 'last_name', value: 'last_name',sortable: true,search:true},
      {text: 'email', value: 'email',search:true},
      {text: 'mobile', value: 'mobile',search:true},
      {text: 'step6address', value: 'step6address',customSlot:true,search:false},
      // {text: 'role', value: 'role',customSlot:true,search:false},
      {text: 'status', value: 'status',customSlot:true,search:false},
      {text: 'actions', value: 'actions', sortable: false, customSlot:true,search:false}
    ]

    function openModal(item){
      if(item == 'new'){
        item = standardModel()
      }
      tmpItem.value = item;
      let tmp = JSON.stringify(item);
      editedItem.value = JSON.parse(tmp)
      editedItem.value.password = null
      dialog.value = true;
    }

    function closeModal () {
      dialog.value = false
      editedItem.value = standardModel()
    }

    function saveModal(){
      if(form.value.validate()){
        isLoading.value = true

        let file = context.refs.file.$refs.input.files[0]
        let fd = new FormData();
        fd.append("image", file);
        fd.append("role",       'admin');
        fd.append("employed_role",props.role == 'admin' ? '' : props.role);

        fd.append("id",         editedItem.value.id);

        fd.append("gender",     editedItem.value.gender);
        fd.append("name",       editedItem.value.name);
        fd.append("last_name",  editedItem.value.last_name);
        fd.append("email",      editedItem.value.email);
        fd.append("mobile",     editedItem.value.mobile);
        fd.append("tel",        editedItem.value.tel);
        fd.append("street",     editedItem.value.street);
        fd.append("street_nr",  editedItem.value.street_nr);
        fd.append("zip",        editedItem.value.zip);
        fd.append("city",       editedItem.value.city);
        // fd.append("password",   editedItem.value.password);
        // fd.append("password_confirmation",       editedItem.value.password_confirmation);
        fd.append("newsletter", editedItem.value.newsletter);
        fd.append("email_notifications", editedItem.value.email_notifications);
        fd.append("push_notifications", editedItem.value.push_notifications);
        fd.append("status",     editedItem.value.status);
        fd.append("service_in_canton",       editedItem.value.service_in_canton);

        axios.post(path+'/store', fd).then(response => {
          if(response.data.status == true){
            if(response.data.meta == true){
              data.value.unshift(response.data.data)
            }else{
              let checkItem = data.value.filter(item => item.id == tmpItem.value.id)
              data.value[data.value.indexOf(checkItem[0])] = response.data.data

            }
            simpleTableKey.value = Math.random();
            errorMessages.value = []
            dialog.value = false
          }
          isLoading.value = false
        }).catch(error => {
          if(error.response.status == 422){
            errorMessages.value = error.response.data.errors
          }
          isLoading.value = false
        })
      }
    }

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
    function getStatusIcon(status){
      let statusIcons = [
        {
          'icon':icons.mdiEyeCheckOutline,
          'style':'primary'
        },
        {
          'icon':icons.mdiEyeOffOutline,
          'style':'error'
        }
      ]
      return statusIcons[status]
    }

    function changeStatus (item) {
      isLoading.value = true
      axios.put(path+'/changeStatus', {'id':item.id,'status':item.status?0:1}).then(response => {
        if(response.data.status){
          item.status = response.data.data
          flashMsg('success',response.data.message)
        }
        isLoading.value = false
      }).catch(error => {
        if(error.response.status == 422){
          flashMsg('error',error.response.data.message)
        }
        isLoading.value = false
      })
    }

    async function deleteItem (item) {
      if(await confirmAlert({'subtitle':'confirmation_um_admin_delete'})){
        isLoading.value = true
        axios.put(path+'/delete', {'id':item.id}).then(response => {
          if(response.data.status){
            let checkItem = data.value.filter(i => i.id == item.id)
            data.value.splice(data.value.indexOf(checkItem[0]),1);
          }
          isLoading.value = false
        }).catch(error => {
          if(error.response.status == 422){
            flashMsg('error',error.response.data.message)
          }
          isLoading.value = false
        })
      }
    }

    function openRoleModal(role,employed_role){
      if(employed_role != null)
        tmpRole.value = employed_role
      else
        tmpRole.value = role
    }

    async function changeRole(id){
      if(await confirmAlert()) {
        store.dispatch('setSimpleLoader', true)
        axios.put(path + '/role', {'id': id, 'role': tmpRole.value}).then(response => {
          if (response.data.status) {
            const checkItem = data.value.filter(i => i.id == id)
            checkItem[0].role = tmpRole.value;
            context.emit('addToOtherTable',checkItem[0],tmpRole.value)
            data.value.splice(data.value.indexOf(checkItem[0]),1);
          }
          store.dispatch('setSimpleLoader', false)
        }).catch(error => {
          if (error.response.status == 422) {
            flashMsg('error', error.response.data.message)
          }
          store.dispatch('setSimpleLoader', false)
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
      changeRole,
      openRoleModal,
      sendVerifyEmail,
      simpleTableKey,
      errorMessages,
      isLoading,
      deleteItem,
      rules,
      form,
      tmpRole,
      loginAsOtherUser
    }
  }
}
</script>

<style scoped>

</style>
