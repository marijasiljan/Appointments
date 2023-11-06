<template xmlns="http://www.w3.org/1999/html">
  <div>
    <breadcrumbs :items="breadcrumbsItems"/>
    <appointments-table :key="tablesIndex['Appointments']" v-if="data.length > 0" :appointments="data" :title="'appointments'" ></appointments-table>
  </div>
</template>

<script>

import {ref} from "@vue/composition-api";
import AppointmentsTable from "./parts/AppointmentsTable.vue"
import Breadcrumbs from "../../../../../components/common/Breadcrumbs";
import {mdiClose} from "@mdi/js";
export default {
  name: "admin-appointments",
  components: {
    AppointmentsTable,
    Breadcrumbs
  },
  setup(){
    let path = '/appointments'
    const tablesIndex = ref({'appointment': 'initAppointment'})
    const data = ref([])
    const appointmentData = ref([])
    let icons = {
      mdiClose,
    }
    store.dispatch('setSimpleLoader',true)
    axios.get(path).then(response => {
      console.log(response.data.data)
      data.value = response.data.data
      store.dispatch('setSimpleLoader',false)
    }).catch(error => {})


    return {
      data,
      icons,
      appointmentData,
      tablesIndex,

      breadcrumbsItems:[
        {text: 'dashboard', disabled: false, link: { name:'admin-dashboard'}, icon:'mdiHomeOutline'},
        {text: 'appointment', disabled: true, link: null}
      ]
    }
  }
}
</script>

<style scoped>
.text-small{font-size: 10px;}
</style>
