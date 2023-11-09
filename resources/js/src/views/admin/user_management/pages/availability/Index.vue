<template xmlns="http://www.w3.org/1999/html">
  <div>
    <h2>Availability Generator</h2> <br>
<!--    <select v-for="emp in employees" v-model="employees">-->
<!--      <option :value="emp">{{emp}}</option>-->
<!--    </select>-->
    <v-select
        :items="adminUsers.data"
        item-text="name"
        item-value="id"
        v-model="selectedAdminUserId"
        required
        label="Choose employee:"
    ></v-select>

    <label for="days">Select Days:</label> <v-divider></v-divider> <br>
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
    <v-container>
        <div class="d-flex mb-5" v-for="(availability,index) in availabilities" :key="index">
          <div  class="day-checkbox">
            <label for="start-time">Start Time:</label>
            <input type="time" id="start-time" v-model="availability.start_time"/>
          </div>
          <div  class="day-checkbox">
            <label for="end-time">End Time:</label>
            <input type="time" id="end-time" v-model="availability.end_time"/>
          </div>

          <v-btn color="error" x-small dark
                 @click="removeAvailability(index)">
            <v-icon small color="white">
              {{ icons.mdiDelete }}
            </v-icon>
          </v-btn>

        </div>

      <v-btn color="primary" x-small dark
             @click="addAvailability()">
        <v-icon small color="white">
          {{ icons.mdiPlusThick }}
        </v-icon>
      </v-btn>

    </v-container>
    <v-btn color="primary" @click="saveAvailability" :loading="isButtonLoading('/availability/store')">
      {{ $t('save') }}
    </v-btn>
  </div>
</template>

<script>
import axios from "axios";
import {onMounted, ref} from "@vue/composition-api";
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
  setup() {

    const adminUsers = ref([]);
    const selectedAdminUserId = ref(null);

    onMounted(async () => {
      try {
        const response = await axios.get('/users/employee');
        adminUsers.value = response.data;
      } catch (error) {
        console.error("Error fetching admin users:", error);
      }
    });

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
    const editedItem = ref({})
    const employees = ref([])
    employees.value = data.value.map((i)=> i.employee)
    const selectedDays = ref([])
    const days = ref(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
    const availabilities = ref([{
      start_time:'09:00',
      end_time:'17:00'
    }])

    const addAvailability = () =>{
      availabilities.value.push({
        start_time:'09:00',
        end_time:'17:00'
      })
    }


    const removeAvailability = (index) =>{
      availabilities.value.splice(index,1)
    }


    function standardModel() {
      return {
        startTime: '09:00',
        endTime: '17:00',
        days: 'Monday, Tuesday'
      }
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


    function saveAvailability() {
      // availabilities.value.forEach((item) => {
      //   console.log('item',item.start_time)
      // })
      isLoading.value = true;

      const availabilityData = {
        employee_id: selectedAdminUserId.value,
        hours: availabilities.value,
        days: this.selectedDays
      };

      axios.post('/availability/store', availabilityData).then(response => {
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


    return {
      data,
      icons,
      editedItem,
      dialog,
      closeModal,
      openModal,
      saveAvailability,
      simpleTableKey,
      errorMessages,
      isLoading,
      form,
      tmpRole,
      selectedDays,
      days,
      availabilities,
      addAvailability,
      removeAvailability,
      adminUsers,
      selectedAdminUserId,
         };
    },
}


</script>
<style scoped>
.day-checkbox {
  margin-right: 20px;
}
</style>
