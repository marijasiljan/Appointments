<template xmlns="http://www.w3.org/1999/html">
  <div>
    <breadcrumbs :items="breadcrumbsItems"/>
    <service-table :key="tablesIndex['service']" v-if="data.length > 0" :services="data" :title="'services'"></service-table>
  </div>
</template>

<script>

import {ref} from "@vue/composition-api";
import ServiceTable from "./parts/ServiceTable.vue"
import Breadcrumbs from "../../../../../components/common/Breadcrumbs";
import {mdiClose} from "@mdi/js";
export default {
  name: "admin-services",
  components: {
    ServiceTable,
    Breadcrumbs
  },
  setup(){
    let path = '/services'
    const tablesIndex = ref({'service': 'initService'})
    const data = ref([])
    const serviceData = ref([])
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
      serviceData,
      tablesIndex,

      breadcrumbsItems:[
        {text: 'dashboard', disabled: false, link: { name:'admin-dashboard'}, icon:'mdiHomeOutline'},
        {text: 'services', disabled: true, link: null}
      ]
    }
  }
}
</script>

<style scoped>
.text-small{font-size: 10px;}
</style>
