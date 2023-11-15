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


                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                            :rules="[rules.required]" :error-messages="errorMessages['days']"
                            v-on:keyup="() => {errorMessages['days'] = ''}"
                            v-on:keypress.enter="saveModal"
                            v-model="editedItem.days" required :label="$t('days')"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                            :rules="[rules.required]" :error-messages="errorMessages['employee']"
                            v-on:keyup="() => {errorMessages['employee'] = ''}"
                            v-on:keypress.enter="saveModal"
                            v-model="editedItem.employee" item-value="id" required :label="$t('employee')"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                            :rules="[rules.required]" :error-messages="errorMessages['date']"
                            v-on:keyup="() => {errorMessages['date'] = ''}"
                            v-on:keypress.enter="saveModal" type="date"
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
  name: "AvailabilityTable",
  components: {SimpleTable},
  props: {
    availability: {
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
    const adminUsers = ref([]);
    onMounted(async () => {
      try {
        const response = await axios.get('/users/employee');
        adminUsers.value = response.data;
      } catch (error) {
        console.error("Error fetching admin users:", error);
      }
    });
    data.value = props.availability

    function standardModel() {
      return {
        id: 0,
        start_time: null,
        end_time: null,
        days: null,
        employee_id: null,
        affiliate_id: null,
        date: null,
        status: 1,
      };
    }

    editedItem.value = standardModel()

    const transformedData = computed(() => {
      return props.availability.map(item => {
        const hoursArray = JSON.parse(item.hours);
        const daysArray = JSON.parse(item.days);
console.log("hours", hoursArray)
        const startTimes = hoursArray.map(hour => hour.start_time).join(', ');
        const endTimes = hoursArray.map(hour => hour.end_time).join(', ');
        const formattedHours = hoursArray.map(hour => {
          return `${hour.start_time}-${hour.end_time}`;
        }).join('<br>');
        const formattedDays = daysArray.join(',');
        const employee = item.employee;


        return {
          id: item.id,
          start_time: startTimes,
          end_time: endTimes,
          hours: formattedHours,
          days: formattedDays,
          employee: employee ? `${employee.name} ${employee.surname}` : 'N/A',
          date: item.date ? item.date : '/',
          status: item.status,
        };
      });
    });

    headers.value = [
      {text: 'id', align: 'start', value: 'id', search: true},
      //{text: 'Start Time', value: 'start_time', search: true},
      //{text: 'End Time', value: 'end_time', search: true},
      {text: 'Hours', value: 'hours', search: true, customSlot: true},
      {text: 'Days', value: 'days', search: true},
      {text: 'Employee', value: 'employee', search: true},
      {text: 'Date', value: 'date', search: true},
      {text: 'status', value: 'status', search: true, customSlot: true},
      {
        text: 'actions',
        value: 'actions',
        sortable: false,
        customSlot: true,
        search: false
      }
    ]

    data.value = transformedData.value;

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
        fd.append("id", editedItem.value.id);

        fd.append("start_time", editedItem.value.start_time);
        fd.append("end_time", editedItem.value.end_time);
        fd.append("status", editedItem.value.status);



        axios.post('/availability/store', fd).then(response => {
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

    async function changeStatus(item) {
      if (await confirmAlert({'subtitle': 'confirmation_standards_change_status'})) {
        isLoading.value = true
        axios.put('/availability/changeStatus', {
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
    }

    async function deleteItem(item) {
      if (await confirmAlert({'subtitle':'confirmation_um_company_delete'})) {
        isLoading.value = true
        axios.put( `/availability/${item.id}/delete`, {'id': item.id}).then(response => {
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
