<template xmlns="http://www.w3.org/1999/html">
    <div>
        <breadcrumbs :items="breadcrumbsItems"/>
        <employee-table :key="tablesIndex['employee']" v-if="data.length > 0" :users="data" :title="'employees'" :role="'admin'"></employee-table>
    </div>
</template>

<script>

import {ref} from "@vue/composition-api";
import EmployeeTable from "./parts/EmployeeTable"
import Breadcrumbs from "../../../../../components/common/Breadcrumbs";
import {mdiClose} from "@mdi/js";
export default {
    name: "admin-users-employee",
    components: {
        EmployeeTable,
        Breadcrumbs
    },
    setup(){
        let path = '/users/employeeAdmin'
        const tablesIndex = ref({'employee': 'initEmployee'})
        const data = ref([])
        const employeeData = ref([])
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
            employeeData,
            tablesIndex,

            breadcrumbsItems:[
                {text: 'dashboard', disabled: false, link: { name:'admin-dashboard'}, icon:'mdiHomeOutline'},
                {text: 'employees', disabled: true, link: null}
            ]
        }
    }
}
</script>

<style scoped>
.text-small{font-size: 10px;}
</style>
