<template xmlns="http://www.w3.org/1999/html">
  <div>
    <breadcrumbs :items="breadcrumbsItems"/>
    <price-table :key="tablesIndex['price']" v-if="data.length > 0" :prices="data" :title="'price'"></price-table>
  </div>
</template>

<script>

import {ref} from "@vue/composition-api";
import PriceTable from "./parts/PriceTable.vue"
import Breadcrumbs from "../../../../../components/common/Breadcrumbs";
import {mdiClose} from "@mdi/js";
export default {
  name: "admin-price",
  components: {
    PriceTable,
    Breadcrumbs
  },
  setup(){
    let path = '/price'
    const tablesIndex = ref({'price': 'initPrice'})
    const data = ref([])
    const priceData = ref([])
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
      priceData,
      tablesIndex,

      breadcrumbsItems:[
        {text: 'dashboard', disabled: false, link: { name:'admin-dashboard'}, icon:'mdiHomeOutline'},
        {text: 'prices', disabled: true, link: null}
      ]
    }
  }
}
</script>

<style scoped>
.text-small{font-size: 10px;}
</style>
