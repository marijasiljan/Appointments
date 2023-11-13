<template>
  <div>
    <v-row>
      <v-col cols="12" md="12" class="align-self-end">
        <admin-dashboard-header></admin-dashboard-header>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="3" sm="6">
        <statistics-card-with-images
            :avatar="customersOptions.avatar"
            :avatar-width="customersOptions.avatarWidth"
            :change="customersOptions.change"
            :chip-color="customersOptions.chipColor"
            :chip-text="customersOptions.chipText"
            :statistics="customersOptions.statistics.value"
            :stat-title="customersOptions.statTitle"
        ></statistics-card-with-images>
      </v-col>
        <v-col cols="12" md="3" sm="6">
        <statistics-card-with-images
            :avatar="customersOptionClients.avatar"
            :avatar-width="customersOptionClients.avatarWidth"
            :change="customersOptionClients.change"
            :chip-color="customersOptionClients.chipColor"
            :chip-text="customersOptionClients.chipText"
            :statistics="customersOptionClients.statistics.value"
            :stat-title="customersOptionClients.statTitle"
        ></statistics-card-with-images>
      </v-col>
        <v-col cols="12" md="6" sm="6">
        <analytics-statistics-card></analytics-statistics-card>
        </v-col>
    </v-row>
    <v-row class="centered">
      <v-col cols="9" sm="6" md="10">
        <crm-weekly-sales></crm-weekly-sales>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import StatisticsCardHorizontal from '@/@core/components/statistics-card/StatisticsCardHorizontal.vue'
import StatisticsCardWithImages from '@/@core/components/statistics-card/StatisticsCardWithImages.vue'
import StatisticsCardProfitLineChart from '@/@core/components/statistics-card/StatisticsCardProfitLineChart.vue'
import AnalyticsStatisticsCard from './AnalyticsStatisticsCard'
import CrmWeeklySales from './CrmWeeklySales'

import VueApexCharts from 'vue-apexcharts'
import apexChatData from './apexChartData'
import { mdiAccountOutline, mdiPoll } from '@mdi/js'
import StatisticsCard from './CardStatisticsCard.vue'
import AdminDashboardHeader from "./parts/DashboardHeader";
import {onMounted, ref} from "@vue/composition-api";

  export default {
    name: "admin-dashboard",
      components: {
        AdminDashboardHeader,
        VueApexCharts,
        StatisticsCardHorizontal,
        StatisticsCardWithImages,
        StatisticsCardProfitLineChart,
        StatisticsCard,
        AnalyticsStatisticsCard,
        CrmWeeklySales,
      },
    setup() {
      const fetchNewCustomers = async () => {
        try {
          const response = await axios.get('/users/employee');
          const responseClient = await axios.get('/users/client');

          if (response && response.data && Array.isArray(response.data.data)) {
            const numberOfCustomers = response.data.data.length;
            const numberOfClients = responseClient.data.data.length;
            customersOptions.statistics.value = numberOfCustomers.toString();
            customersOptionClients.statistics.value = numberOfClients.toString();
          } else {
            customersOptions.statistics = 'Data not available';
          }
        } catch (error) {
          console.error('Error fetching new customers:', error);
          customersOptions.statistics = 'Error';
        }
      };

      onMounted(() => {
        fetchNewCustomers();
      });

      const customersOptions = {
        statTitle: 'Employees',
        statistics: ref(''),
        chipText: 'Total Employees',
        chipColor: 'info',
        avatar: require('@/assets/images/avatars/10.png'),
        avatarWidth: '88',
      }

      const customersOptionClients = {
        statTitle: 'Clients',
        statistics: ref(''),
        chipText: 'Total Clients',
        chipColor: 'info',
        avatar: require('@/assets/images/avatars/11.png'),
        avatarWidth: '88',
      }

      return {
        apexChatData,
        customersOptions,
        customersOptionClients,
      }
    },
  }
</script>
<style scoped>
.centered{
  justify-content:center;
}
</style>
