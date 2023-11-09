<template xmlns="http://www.w3.org/1999/html">
  <div>

    <SimpleTable ref="simpleTable" :key="simpleTableKey" :items="data" :headers="headers"
                 :isLoading="isLoading" :title="title">

      <template v-slot:custom-hours="slotItems">

        <div v-html="slotItems.item.hours">

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
                            :rules="[rules.required]" :error-messages="errorMessages['start_time']"
                            v-on:keyup="() => {errorMessages['start_time'] = ''}"
                            v-on:keypress.enter="saveModal"
                            v-model="editedItem.start_time" required :label="$t('Start time')"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                            :rules="[rules.required]" :error-messages="errorMessages['end_time']"
                            v-on:keyup="() => {errorMessages['end_time'] = ''}"
                            v-on:keypress.enter="saveModal"
                            v-model="editedItem.end_time" required :label="$t('End Time')"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="3">
                        <v-select
                            :items="clients"
                            item-text="name"
                            item-value="id"
                            v-model="editedItem.client"
                            required :label="$t('client')"
                        ></v-select>
                      </v-col>

                      <v-col cols="12" sm="6" md="3">
                        <v-select
                            :items="employees"
                            item-text="name"
                            item-value="id"
                            v-model="editedItem.employee"
                            required :label="$t('employee')"
                        ></v-select>
                      </v-col>

                      <v-col cols="12" sm="6" md="3">
                        <v-select
                            :items="services"
                            item-text="name"
                            item-value="id"
                            v-model="editedItem.service"
                            required :label="$t('service')"
                        ></v-select>
                      </v-col>

                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                            :rules="[rules.required]" :error-messages="errorMessages['date']"
                            v-on:keyup="() => {errorMessages['date'] = ''}"
                            v-on:keypress.enter="saveModal"
                            v-model="editedItem.date" required :label="$t('date')"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                            :rules="[rules.required]" :error-messages="errorMessages['status']"
                            v-on:keyup="() => {errorMessages['status'] = ''}"
                            v-on:keypress.enter="saveModal"
                            v-model="editedItem.status" required :label="$t('status')"></v-text-field>
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
                <v-btn color="primary" @click="saveModal" :loading="isButtonLoading('/availability/store')">
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
import {computed, onMounted, ref} from "@vue/composition-api";
import SimpleTable from "@/components/common/SimpleTable";
import {required, integerValidator, emailValidator} from '@core/utils/validation'
import {useRouter} from '@core/utils';
import axios from "axios";
import {can} from "../../../../../../@core/libs/acl/utils";
export default {
  name: "AppointmentsTable",
  components: {SimpleTable},
  props: {
    appointments: {
      type: Array,
      required: true,
    },
    title: {
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
    const employees = ref([])
    const clients = ref([])
    const services = ref([])
    data.value = props.appointments

    onMounted(async () => {
      try {
        const clientsResponse = await axios.get('/users/client');
        const employeesResponse = await axios.get('/users/employee');
        const servicesResponse = await axios.get('/services');

        clients.value = clientsResponse.data.data;
        employees.value = employeesResponse.data.data;
        services.value = servicesResponse.data.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });

    function standardModel() {
      return {
        id: 0,
        start_time: null,
        end_time: null,
        client_id: null,
        employee_id: null,
        service_id: null,
        price: null,
        date: null,
        status: 1,
      };
    }

    editedItem.value = standardModel()


    headers.value = [
      {text: 'id', align: 'start', value: 'id', search: true},
      {text: 'Start Time', value: 'start_time', search: true},
      {text: 'End Time', value: 'end_time', search: true},
      {text: 'Client',  value: 'client.name', search: true},
      {text: 'Employee', value: 'employee.name', search: true},
      {text: 'Service', value: 'service.name', search: true},
      {text: 'Price', value: 'price', search: true},
      {text: 'Date', value: 'date', search: true},
      {text: 'status', value: 'status', search: true},
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
      return statusIcons.find(icon => icon.icon === status) || statusIcons[0];

    }

    async function openModal(item) {
      if (item == 'new') {
        item = standardModel()
      }

      tmpItem.value = item;
      let tmp = JSON.stringify(item);
      editedItem.value = JSON.parse(tmp)
      dialog.value = true;
    }

    function closeModal() {
      dialog.value = false
      editedItem.value = standardModel()
    }

    function saveModal() {
      if (form.value.validate()) {
        isLoading.value = true

        let fd = new FormData();
        console.log('editedItem',editedItem)
        fd.append("id", editedItem.value.id);

        fd.append("start_time", editedItem.value.start_time);
        fd.append("end_time", editedItem.value.end_time);
        fd.append("client_id", editedItem.value.client);
        fd.append("employee_id", editedItem.value.employee);
        fd.append("service_id", editedItem.value.service);
        fd.append("price", editedItem.value.price);
        fd.append("date", editedItem.value.date);
        fd.append("status", editedItem.value.status);



        axios.post('/appointments/store', fd).then(response => {
          console.log(response.data.data)
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
          console.log('error', error)
          if (error.response.status == 422) {
            errorMessages.value = error.response.data.errors
          }
          isLoading.value = false
        })
      }
    }

    function changeStatus(item) {
      isLoading.value = true
      axios.put('/appointments/changeStatus', {
        'id': item.id,
        'status': item.status ? 0 : 1
      }).then(response => {
        if (response.data.status) {
          item.status = response.data.data
          flashMsg('success', response.data.message)
        }
        isLoading.value = false;
        window.location.reload();
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
        axios.put( `/appointments/${item.id}/delete`, {'id': item.id}).then(response => {
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
      clients,
      employees,
      services,
    };
  },
}
</script>
<style scoped>

</style>
