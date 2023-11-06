<template>
  <div>
    <h2>Availability Generator</h2> <v-divider></v-divider>
    <label for="days">Select Days:</label> <v-divider></v-divider>
    <v-container fluid style="display: flex">
      <div v-for="(day, index) in days" :key="index" class="day-checkbox">
        <label :for="'day-' + index">{{ day }}</label>
      <v-checkbox
          v-model="selectedDays"
          :value="day"
          :id="'day-' + index"
      ></v-checkbox>
      </div>
    </v-container>
    <v-container fluid style="display: flex">
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
            <v-form ref="form">
              <div style="max-height: 70vh;overflow: auto">
                <v-card-text>
                  <v-container>
                    <v-row>
                      <div>
                        <label for="start-time">Start Time:</label>
                        <input type="time" id="start-time" v-model="startTime"/>
                      </div>
                      <div>
                        <label for="end-time">End Time:</label>
                        <input type="time" id="end-time" v-model="endTime"/>
                      </div>
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
      <div  class="day-checkbox">
        <label for="start-time">Start Time:</label>
        <input type="time" id="start-time" v-model="startTime"/>
      </div>
      <div  class="day-checkbox">
        <label for="end-time">End Time:</label>
        <input type="time" id="end-time" v-model="endTime"/>
      </div>
    </v-container>
      <button>Save Availability</button>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from "@vue/composition-api";
import {
  mdiAccountMultipleOutline, mdiAccountOutline,
  mdiCheck,
  mdiCloseThick,
  mdiDelete, mdiDotsVertical,
  mdiEyeCheckOutline,
  mdiEyeOffOutline,
  mdiEyeOutline, mdiInformationOutline, mdiLink,
  mdiPencil, mdiPlusThick, mdiSendOutline, mdiTrashCanOutline
} from "@mdi/js";

export default {
  setup(props, context) {
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
    const selectedDays = ref([])
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    function standardModel() {
      return {
        startTime: '09:00',
        endTime: '17:00',
      };
    }

    editedItem.value = standardModel()

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

        fd.append("service_id", editedItem.value.service);
        fd.append("value", editedItem.value.value);
        fd.append("status", editedItem.value.status);



        axios.post('/price/store', fd).then(response => {
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
      services,
      selectedDays,
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    };
  },
};

</script>
<style scoped>
.day-checkbox {
  margin-right: 20px;
}
</style>
