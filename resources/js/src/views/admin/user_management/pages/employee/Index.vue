<template xmlns="http://www.w3.org/1999/html">
    <div>
        <breadcrumbs :items="breadcrumbsItems" v-if="data.companies" />
        <employee-table :key="tablesIndex['employee']" v-if="data.employee" :users="data.employee" :title="'employee'" :role="'employee'"></employee-table>
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
        let path = '/'+user.role+'/users/employee'
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
                {text: 'companies', disabled: true, link: null}
            ]
        }
    }
}
</script>

<style scoped>
.text-small{font-size: 10px;}
</style>
