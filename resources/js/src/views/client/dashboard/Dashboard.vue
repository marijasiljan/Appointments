<template>
    <v-row>
        <v-col cols="12" md="12" class="align-self-end">
            <client-dashboard-header></client-dashboard-header>
        </v-col>
    </v-row>
</template>

<script>

import ClientDashboardHeader from "./parts/DashboardHeader";
export default {
    name: "client-dashboard",
    components: {
        ClientDashboardHeader,
    }
}


</script>

<style scoped>

</style>
