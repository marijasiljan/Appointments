<template xmlns="http://www.w3.org/1999/html">
    <div>
        <breadcrumbs :items="breadcrumbsItems"/>
        <clients-table :key="tablesIndex['client']" v-if="data.length > 0" :users="data" :title="'clients'" :role="'client'"></clients-table>
    </div>
</template>

<script>

import {ref} from "@vue/composition-api";
import ClientsTable from "./parts/ClientsTable"
import Breadcrumbs from "../../../../../components/common/Breadcrumbs";
import {mdiClose} from "@mdi/js";
export default {
    name: "admin-users-clients",
    components: {
        ClientsTable,
        Breadcrumbs
    },
    setup(){
        let path = '/users/client'
        const tablesIndex = ref({'client': 'initClient'})
        const data = ref([])
        const employeeData = ref([])
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
            employeeData,
            tablesIndex,

            breadcrumbsItems:[
                {text: 'dashboard', disabled: false, link: { name:'admin-dashboard'}, icon:'mdiHomeOutline'},
                {text: 'clients', disabled: true, link: null}
            ]
        }
    }
}
</script>

<style scoped>
.text-small{font-size: 10px;}
</style>
