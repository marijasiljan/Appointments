<template>
  <div>
    <v-row>
      <v-col cols="12" md="12" class="align-self-end">
        <admin-dashboard-header></admin-dashboard-header>
      </v-col>
    </v-row>
    <v-row>
    <v-col cols="12" md="3" sm="6">
      <statistics-card-horizontal
          :stat-title="newCustomerOptions.statTitle"
          :change="newCustomerOptions.change"
          :color="newCustomerOptions.color"
          :icon="newCustomerOptions.icon"
          :statistics="newCustomerOptions.statistics"
      ></statistics-card-horizontal>
    </v-col>
    <v-col cols="12" md="3" sm="6">
      <statistics-card-horizontal
          :change="totalProfit.change"
          :color="totalProfit.color"
          :icon="totalProfit.icon"
          :statistics="totalProfit.statistics"
          :stat-title="totalProfit.statTitle"
      ></statistics-card-horizontal>
    </v-col>
    <v-col cols="12" md="3" sm="6">
      <statistics-card-with-images
          :avatar="customersOptions.avatar"
          :avatar-width="customersOptions.avatarWidth"
          :change="customersOptions.change"
          :chip-color="customersOptions.chipColor"
          :chip-text="customersOptions.chipText"
          :statistics="customersOptions.statistics"
          :stat-title="customersOptions.statTitle"
      ></statistics-card-with-images>
    </v-col>
    <v-col cols="6" md="2" sm="4">
      <statistics-card-profit-line-chart
          :stat-title="profitLineChart.statTitle"
          :statistics="profitLineChart.statistics"
          :chart-series="profitLineChart.series"
          :chart-color="$vuetify.theme.currentTheme.primary"
      ></statistics-card-profit-line-chart>
    </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" md="8" sm="4">
      <vue-apex-charts
          type="line"
          height="400"
          :options="apexChatData.lineChartSimple.chartOptions"
          :series="apexChatData.lineChartSimple.series"
      />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import StatisticsCardHorizontal from '@/@core/components/statistics-card/StatisticsCardHorizontal.vue'
import StatisticsCardWithImages from '@/@core/components/statistics-card/StatisticsCardWithImages.vue'
import StatisticsCardProfitLineChart from '@/@core/components/statistics-card/StatisticsCardProfitLineChart.vue'

import VueApexCharts from 'vue-apexcharts'
import apexChatData from './apexChartData'
import { mdiAccountOutline, mdiPoll } from '@mdi/js'
import StatisticsCard from './CardStatisticsCard.vue'
import AdminDashboardHeader from "./parts/DashboardHeader";

  export default {
    name: "admin-dashboard",
      components: {
        AdminDashboardHeader,
        VueApexCharts,
        StatisticsCardHorizontal,
        StatisticsCardWithImages,
        StatisticsCardProfitLineChart,
        StatisticsCard,
      },
    setup() {
      const newCustomerOptions = {
        statTitle: 'New Customers',
        statistics: $,
        change: '-10.2%',
        icon: mdiAccountOutline,
        color: 'primary',
      }

      const totalProfit = {
        statTitle: 'Total Profit',
        statistics: '2,856',
        change: '+25.8%',
        icon: mdiPoll,
        color: 'warning',
      }

      const customersOptions = {
        statTitle: 'Customers',
        statistics: '2,856',
        change: '+59%',
        chipText: 'Daily Customers',
        chipColor: 'info',
        avatar: require('@/assets/images/avatars/11.png').default,
        avatarWidth: '88',
      }

      const profitLineChart = {
        statTitle: 'Total Profit',
        statistics: '$86.4k',
        series: [
          {
            data: [0, 20, 5, 30, 15, 45],
          },
        ],
      }

      return {
        apexChatData,
        newCustomerOptions,
        totalProfit,
        customersOptions,
        profitLineChart
      }
    },
  }
</script>
