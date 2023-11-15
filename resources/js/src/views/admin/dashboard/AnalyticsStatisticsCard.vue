<template>
  <v-card>
    <v-card-title class="align-start">
      <span class="font-weight-semibold">Appointments</span>
      <v-spacer></v-spacer>
    </v-card-title>

    <v-card-subtitle class="mb-8 mt-n5">

    </v-card-subtitle>

    <v-card-text>
      <v-row>
        <v-col
          v-for="data in statisticsData"
          :key="data.title"
          cols="8"
          md="4"
          class="d-flex align-center"
        >
          <v-avatar
            size="44"
            :color="resolveStatisticsIconVariation (data.title).color"
            rounded
            class="elevation-1"
          >
            <v-icon
              dark
              color="white"
              size="30"
            >
              {{ resolveStatisticsIconVariation (data.title).icon }}
            </v-icon>
          </v-avatar>
          <div class="ms-3">
            <p class="text-xs mb-0">
              {{ data.title }}
            </p>
            <h3 class="text-xl font-weight-semibold">
              {{ data.total.value }}
            </h3>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiAccountOutline, mdiCurrencyUsd, mdiTrendingUp, mdiDotsVertical, mdiLabelOutline } from '@mdi/js'
import {onMounted, ref} from "@vue/composition-api";

export default {
  setup() {
    const statisticsData = [
      {
        title: 'Appointments',
        total: ref(''),
      },
      {
        title: 'Availability',
        total: ref(''),
      },
      {
        title: 'Services',
        total: ref(''),
      },
    ]

    const fetchAppointments = async () => {
      try {
        const appointments = await axios.get('/appointments');
        const availability = await axios.get('/availability');
        const services = await axios.get('/services');

        if (appointments && availability && services) {
          const numberOfAppointments = appointments.data.data.length;
          const numberOfAvailabilities = availability.data.data.length;
          const numberOfServices = services.data.data.length;

          statisticsData[0].total.value = numberOfAppointments.toString();
          statisticsData[1].total.value = numberOfAvailabilities.toString();
          statisticsData[2].total.value = numberOfServices.toString();
        } else {
          console.error('Error fetching appointments:', error);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    onMounted(() => {
      fetchAppointments();
    });

    const resolveStatisticsIconVariation = data => {
      if (data === 'Availability') return { icon: mdiTrendingUp, color: 'primary' }
      if (data === 'Customers') return { icon: mdiAccountOutline, color: 'success' }
      if (data === 'Services') return { icon: mdiLabelOutline, color: 'warning' }

      return { icon: mdiAccountOutline, color: 'success' }
    }

    return {
      statisticsData,
      resolveStatisticsIconVariation,

      icons: {
        mdiDotsVertical,
        mdiTrendingUp,
        mdiAccountOutline,
        mdiLabelOutline,
        mdiCurrencyUsd,
      },
    }
  },
}
</script>
