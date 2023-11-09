<template xmlns="http://www.w3.org/1999/html">
  <div>
    <breadcrumbs :items="breadcrumbsItems"/>
    <availability-table :key="tablesIndex['availability']" v-if="data.length > 0" :title="'Availabilities'" :availability="data"></availability-table>
  </div>
</template>

<script>

import {ref} from "@vue/composition-api";
import AvailabilityTable from "./parts/BookingTimesTable.vue"
import Breadcrumbs from "../../../../../components/common/Breadcrumbs";
import {mdiClose} from "@mdi/js";
export default {
  name: "admin-availability-list",
  components: {
    AvailabilityTable,
    Breadcrumbs
  },
  setup(){
    let path = '/availability'
    const tablesIndex = ref( {'availability': 'initAvailability'})
    const data = ref([])
    console.log(data)
    const availabilityTimeData = ref([])
    let icons = {
      mdiClose,
    }
    store.dispatch('setSimpleLoader',true)
    axios.get(path).then(response => {
      data.value = response.data.data
      store.dispatch('setSimpleLoader',false)
    }).catch(error => {})


    return {
      data,
      icons,
      availabilityTimeData,
      tablesIndex,

      breadcrumbsItems:[
        {text: 'dashboard', disabled: false, link: { name:'admin-dashboard'}, icon:'mdiHomeOutline'},
        {text: 'Availabilities', disabled: true, link: null}
      ]
    }
  }
}
</script>

<style scoped>
.text-small{font-size: 10px;}
</style>
