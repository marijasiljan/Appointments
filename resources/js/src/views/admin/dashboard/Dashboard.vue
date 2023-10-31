<template>
    <v-row>
      <v-col cols="12" md="12" class="align-self-end">
        <admin-dashboard-header></admin-dashboard-header>
      </v-col>


    </v-row>
</template>

<script>

  import AdminDashboardHeader from "./parts/DashboardHeader";
  export default {
    name: "admin-dashboard",
      components: {
        AdminDashboardHeader
      },
  }
</script>
