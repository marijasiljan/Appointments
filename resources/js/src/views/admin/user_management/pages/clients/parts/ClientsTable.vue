<template xmlns="http://www.w3.org/1999/html">
  <div>
    <SimpleTable ref="simpleTable" :key="simpleTableKey" :items="data" :headers="headers"
                 :isLoading="isLoading" :title="title">

      <template v-slot:custom-status="slotItems">
        <div style="display:flex">
          <v-chip :color="slotItems.item.status == 1 ? 'success' : 'error'">
            {{ slotItems.item.status==1 ? 'active' : 'inactive'}}
          </v-chip>
        </div>
      </template>

      <template v-slot:custom-actions="slotItems">
        <div style="display:flex">

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
              <div class="text-h5"><span v-if="editedItem.id != 0">{{ editedItem.name }}</span>
              </div>
            </v-card-title>

            <v-divider></v-divider>

            <v-form ref="form">
              <div style="max-height: 70vh;overflow: auto">
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field
                            :rules="[rules.required]" :error-messages="errorMessages['name']"
                            v-on:keyup="() => {errorMessages['name'] = ''}"
                            v-on:keypress.enter="saveModal"
                            v-model="editedItem.name" required :label="$t('name')"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field
                            :rules="[rules.required]" :error-messages="errorMessages['surname']"
                            v-on:keyup="() => {errorMessages['surname'] = ''}"
                            v-on:keypress.enter="saveModal"
                            v-model="editedItem.surname" required
                            :label="$t('surname')"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="4">
                        <v-text-field
                            :rules="[rules.emailValidator]" :error-messages="errorMessages['email']"
                            v-on:keyup="() => {errorMessages['email'] = ''}"
                            v-on:keypress.enter="saveModal"
                            v-model="editedItem.email" required :label="$t('email')"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                            type="password" :error-messages="errorMessages['password']"
                            v-on:keyup="() => {errorMessages['password'] = ''}"
                            v-on:keypress.enter="saveModal"
                            v-model="editedItem.password" required
                            :label="$t('password')"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                            :rules="[rules.required]" :error-messages="errorMessages['birthday']"
                            v-on:keyup="() => {errorMessages['birthday'] = ''}"
                            v-on:keypress.enter="saveModal" type="date"
                            v-model="editedItem.birthday" required :label="$t('birthday')"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                            :rules="[rules.required]" :error-messages="errorMessages['status']"
                            v-on:keyup="() => {errorMessages['status'] = ''}"
                            v-on:keypress.enter="saveModal"
                            v-model="editedItem.status" required :label="$t('status')"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                            :rules="[rules.required]" :error-messages="errorMessages['role']"
                            v-on:keyup="() => {errorMessages['role'] = ''}"
                            v-on:keypress.enter="saveModal"
                            v-model="editedItem.role" required :label="$t('role')"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                            :rules="[rules.required]" :error-messages="errorMessages['affiliate_id']"
                            v-on:keyup="() => {errorMessages['affiliate_id'] = ''}"
                            v-on:keypress.enter="saveModal"
                            v-model="editedItem.affiliate_id" required :label="$t('affiliate_id')"></v-text-field>
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
                <v-btn color="primary" @click="saveModal" :loading="isButtonLoading('/users/store')">
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
import axios from "axios";
import {can} from "../../../../../../@core/libs/acl/utils";
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

    const tmpRole = ref(null)
    const form = ref('')
    const simpleTableKey = ref('init')
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
        id: 0,
        name: null,
        surname: null,
        email: null,
        birthday: null,
        role: 'admin',
        password: null,
        password_confirmation: null,
        push_notifications: 1,
        email_notifications: 0,
        status: 1,
      };
    }

    editedItem.value = standardModel()

    headers.value = [
      {text: 'id', align: 'start', value: 'id', search: true},
      {text: 'name', value: 'name', search: true},
      {text: 'Last name', value: 'surname', search: true},
      {text: 'email', value: 'email', search: true, sortable: false},
      {text: 'birthday', value: 'birthday', search: true, sortable: false},
      {text: 'status', value: 'status', search: true, customSlot: true},
      {
        text: 'actions',
        value: 'actions',
        sortable: false,
        customSlot: true,
        search: false
      }
    ]
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
      // return statusIcons[status]
      return statusIcons.find(icon => icon.icon === status) || statusIcons[0];

    }
    async function openModal(item) {
      if (item == 'new') {
        item = standardModel()
      }

      tmpItem.value = item;
      let tmp = JSON.stringify(item);
      editedItem.value = JSON.parse(tmp)
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

        //let file = context.refs.file.$refs.input.files[0]
        //let logo = context.refs.logo.$refs.input.files[0]
        let fd = new FormData();
        fd.append("role", 'client');

        fd.append("id", editedItem.value.id);

        //fd.append("gender", editedItem.value.gender);
        fd.append("name", editedItem.value.name);
        fd.append("surname", editedItem.value.surname);
        fd.append("email", editedItem.value.email);
        fd.append("password", editedItem.value.password);
        fd.append("birthday", editedItem.value.birthday);
        fd.append("status", editedItem.value.status);
        fd.append("role", editedItem.value.role);
        fd.append("affiliate_id", editedItem.value.affiliate_id);


        axios.post('/users/store', fd).then(response => {
          console.log(response.data)
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
          isLoading.value = false;
          window.location.reload();
        }).catch(error => {
          if (error.response.status == 422) {
            errorMessages.value = error.response.data.errors
          }
          isLoading.value = false
        })
      }
    }
    async function changeStatus(item) {
      if (await confirmAlert({'subtitle': 'confirmation_standards_change_status'})) {
        isLoading.value = true
        axios.put('/users/changeStatus', {
          'id': item.id,
          'status': item.status ? 0 : 1
        }).then(response => {
          if (response.data.status) {
            item.status = response.data.data.status
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
    }

    async function deleteItem(item) {
      if (await confirmAlert({'subtitle':'confirmation_um_clients_delete'})) {
        isLoading.value = true
        axios.put( `/users/${item.id}/delete`, {'id': item.id}).then(response => {
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
      changeStatus,
      simpleTableKey,
      errorMessages,
      getStatusIcon,
      isLoading,
      deleteItem,
      rules,
      form,
      tmpRole,
    };
  },
}
</script>

<style scoped>

</style>
