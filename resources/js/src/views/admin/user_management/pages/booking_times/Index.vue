<template xmlns="http://www.w3.org/1999/html">
  <div>
    <breadcrumbs :items="breadcrumbsItems"/>
    <booking-times-table :key="tablesIndex" v-if="data.length > 0" :bookingTimes="data" :title="'booking_times'"></booking-times-table>

  </div>
</template>

<script>

import {ref} from "@vue/composition-api";
import BookingTimesTable from "./parts/BookingTimesTable.vue"
import Breadcrumbs from "../../../../../components/common/Breadcrumbs";
import {mdiClose} from "@mdi/js";
export default {
  name: "admin-booking_times",
  components: {
    BookingTimesTable,
    Breadcrumbs
  },
  setup(){
    let path = '/booking'
    const tablesIndex = ref( 'initBookingTime')
    const data = ref([])
    console.log(data)
    const bookingTimeData = ref([])
    let icons = {
      mdiClose,
    }
    store.dispatch('setSimpleLoader',true)
    axios.get(path).then(response => {
      data.value = response.data.data
      store.dispatch('setSimpleLoader',false)
      tablesIndex.value = Math.random()
    }).catch(error => {})


    return {
      data,
      icons,
      bookingTimeData,
      tablesIndex,

      breadcrumbsItems:[
        {text: 'dashboard', disabled: false, link: { name:'admin-dashboard'}, icon:'mdiHomeOutline'},
        {text: 'booking_times', disabled: true, link: null}
      ]
    }
  }
}
</script>

<style scoped>
.text-small{font-size: 10px;}
</style>
