<template>
  <v-card>
    <v-card-title class="align-start">
      <div>
        <p class="mb-2">
          Weekly Appointments
        </p>
      </div>
      <v-spacer></v-spacer>
<!--      <v-btn-->
<!--        icon-->
<!--        small-->
<!--        class="mt-n2 me-n3"-->
<!--      >-->
<!--        <v-icon size="22">-->
<!--          {{ icons.mdiDotsVertical }}-->
<!--        </v-icon>-->
<!--      </v-btn>-->
    </v-card-title>
    <v-card-text v-if="dataFetched">
      <!-- Chart -->
      <vue-apex-charts
        height="250"
        :options="chartOptions"
        :series="chartData"
      ></vue-apex-charts>

    </v-card-text>
  </v-card>
</template>

<script>
import { mdiDotsVertical, mdiTrendingUp, mdiCurrencyUsd } from '@mdi/js'
import axios from 'axios';
import { getVuetify, addAlpha } from '@core/utils'
import {onMounted, ref} from "@vue/composition-api";

export default {
  components: {
    VueApexCharts: () => import('vue-apexcharts'),
  },
  setup() {
    const $vuetify = getVuetify()

    const chartOptions = {
      colors: [
        addAlpha($vuetify.theme.currentTheme.primary, 0.1),
        addAlpha($vuetify.theme.currentTheme.primary, 0.1),
        addAlpha($vuetify.theme.currentTheme.primary, 0.1),
        addAlpha($vuetify.theme.currentTheme.primary, 0.1),
        $vuetify.theme.currentTheme.primary,
        addAlpha($vuetify.theme.currentTheme.primary, 0.1),
        addAlpha($vuetify.theme.currentTheme.primary, 0.1),
      ],
      chart: {
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '60%',
          distributed: true,
          borderRadius: 4,
          startingShape: 'rounded',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tickPlacement: 'on',
        labels: {
          style: {
            fontSize: '12px',
          },
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
        padding: {
          top: -20,
          left: -10,
          right: -10,
        },
      },
    }

    const chartData = ref([
      {
        data: [],
      },
    ]);

    const dataFetched = ref(false);

    const fetchData = async () => {
      try {
        const response = await axios.get('/appointments');
        const appointments = response.data.data;

        const appointmentsByDay = Array.from({ length: 7 }, () => 0);

        appointments.forEach((appointment) => {
          const appointmentDate = new Date(appointment.date);
          const dayOfWeek = appointmentDate.getDay();
          appointmentsByDay[dayOfWeek] += 1;
        });

        chartData.value[0].data = appointmentsByDay;
        dataFetched.value = true; // Set dataFetched to true after data is fetched
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      chartOptions,
      chartData,
      dataFetched,

      icons: {
        mdiDotsVertical,
        mdiTrendingUp,
        mdiCurrencyUsd,
      },
    }
  },
}
</script>
