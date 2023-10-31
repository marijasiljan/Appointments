<template>
  <div class="user-profile-sidebar-content h-full">
    <!-- Close Button -->
    <div class="pt-2 me-2 text-right">
      <v-btn icon small @click="$emit('close-user-profile-sidebar')">
        <v-icon>
          {{ icons.mdiClose }}
        </v-icon>
      </v-btn>
    </div>

    <!-- User Avatar + Name + Role -->
    <div class="text-center px-6 pt-4">
      <v-badge bottom overlap bordered :color="resolveAvatarBadgeVariant(profileUserData.status)" offset-x="24" offset-y="18" class="user-status-badge-lg mb-5">
        <v-avatar size="80" :class="`v-avatar-light-bg ${resolveAvatarBadgeVariant(profileUserData.status)}--text`">
          <v-img v-if="profileUserData.profile_picture" :src="profileUserData.profile_picture+'?api_token='+token"></v-img>
          <span v-else class="text-3xl">{{ avatarText(profileUserData.name+' '+profileUserData.last_name) }}</span>
        </v-avatar>
      </v-badge>
      <h2 class="mb-1 font-weight-medium text-base">
        {{ profileUserData.name+' '+profileUserData.last_name }}
      </h2>
      <p class="text-capitalize" v-if="profileUserData.role =='company'">
        {{ profileUserData.company.company_name }}
      </p>
      <p class="text-capitalize" v-else>
        {{ profileUserData.role }}
      </p>
    </div>

<!--    &lt;!&ndash; User Data &ndash;&gt;-->
<!--    <perfect-scrollbar class="ps-chat-user-profile-sidebar-content pb-6 px-6" :options="perfectScrollbarOptions">-->

<!--      &lt;!&ndash; Status &ndash;&gt;-->
<!--      <div class="mb-5">-->
<!--        <span class="text-xs text&#45;&#45;disabled" :class="rootThemeClasses">STATUS</span>-->
<!--        <v-radio-group v-model="profileUserData.status" class="mt-2">-->
<!--          <v-radio v-for="radioOption in userStatusRadioOptions" :key="radioOption.title" :label="radioOption.title" :value="radioOption.value" :color="radioOption.color"></v-radio>-->
<!--        </v-radio-group>-->
<!--      </div>-->
<!--    </perfect-scrollbar>-->
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiClose, mdiCheckCircleOutline, mdiBellOutline, mdiAccountOutline, mdiTrashCanOutline } from '@mdi/js'
import useVuetify from '@core/utils/vuetify'
import { avatarText } from '@core/utils/filter'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import useChat from './modules/useChat'

export default {
  components: {
    PerfectScrollbar,
  },
  props: {
    profileUserData: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { resolveAvatarBadgeVariant } = useChat()
    const { rootThemeClasses } = useVuetify()

    const userStatusRadioOptions = [
      { title: 'Online', value: 'online', color: 'success' },
      { title: 'Away', value: 'away', color: 'warning' },
      { title: 'Do not disturb', value: 'busy', color: 'error' },
      { title: 'Offline', value: 'offline', color: 'secondary' },
    ]

    // Perfect scrollbar options
    const perfectScrollbarOptions = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
    }

    return {
      // useChat
      resolveAvatarBadgeVariant,

      userStatusRadioOptions,

      // Perfect Scrollbar
      perfectScrollbarOptions,

      // Vuetify
      rootThemeClasses,

      // Filter
      avatarText,

      // Icons
      icons: {
        mdiClose,
        mdiCheckCircleOutline,
        mdiBellOutline,
        mdiAccountOutline,
        mdiTrashCanOutline,
      },
    }
  },
}
</script>

<style>
</style>
