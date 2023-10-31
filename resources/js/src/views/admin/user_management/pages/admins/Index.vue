<template xmlns="http://www.w3.org/1999/html">
  <div>
    <breadcrumbs :items="breadcrumbsItems" v-if="data.admins" />
    <admins-table :key="tablesIndex['admin']" @addToOtherTable="addToOtherTable" v-if="data.admins" :users="data.admins" :title="'admins'" :role="'admin'"></admins-table>
    <admins-table :key="tablesIndex['project_manager']" @addToOtherTable="addToOtherTable" v-if="data.project_managers" :users="data.project_managers" :title="'project_managers'" :role="'project_manager'"></admins-table>
  </div>
</template>

<script>

import {ref} from "@vue/composition-api";
import AdminsTable from "./parts/AdminsTable"

import Breadcrumbs from "../../../../../components/common/Breadcrumbs";
export default {
  name: "admin-users-admins",
  components: {
    AdminsTable,
    Breadcrumbs,
  },
  setup(){
    let path = '/'+user.role+'/users/admins'
    const tablesIndex = ref({'admin': 'initAdmin', 'project_manager': 'initProjectManager'})
    const data = ref([])
    store.dispatch('setSimpleLoader',true)
    axios.get(path).then(response => {
      data.value = response.data.data
      store.dispatch('setSimpleLoader',false)
    }).catch(error => {})

    function addToOtherTable(item,role){
      if(data.value[role+'s'] != undefined){
        data.value[role+'s'].unshift(item)
        tablesIndex.value[role] = Math.random()
      }
    }

    return {
      data,
      tablesIndex,
      addToOtherTable,
      breadcrumbsItems:[
        {text: 'dashboard', disabled: false, link: { name:'admin-dashboard'}, icon:'mdiHomeOutline'},
        {text: 'admins', disabled: true, link: null}
      ]
    }
  }
}
</script>

<style scoped>
.text-small{font-size: 10px;}
</style>
