<template>
  <div class="chat-contact d-flex align-center pa-3 cursor-pointer rounded-lg" :class="{'bg-gradient-primary active-chat-contact': isActive}" v-on="$listeners">
    <v-badge bottom overlap dot bordered :color="resolveAvatarBadgeVariant(chat.user.status)" offset-x="11" offset-y="11" class="me-3 user-status-badge" :value="isChatContact">
      <v-avatar size="38" class="v-avatar-light-bg" :class="[{'bg-static-white': isChatContact && isActive}, `${resolveAvatarBadgeVariant(chat.user.status)}--text`]">
        <v-img v-if="chat.user.profile_picture" :src="chat.user.profile_picture+'?api_token='+token"></v-img>
        <span v-else>{{ avatarText(chat.user.name) }}</span>
      </v-avatar>
    </v-badge>
    <div class="flex-grow-1 overflow-hidden" style="display:flex;justify-content: space-between">
      <p class="mb-0 font-weight-medium text--primary" v-if="chat.user.role == 'admin'">
        {{ chat.user.name }}<br />
        <small>{{ name }}</small>
      </p>
      <p class="mb-0 font-weight-medium text--primary" v-if="chat.user.role == 'client'">
        {{ chat.user.name }}<br />
        <small>{{$t('client')}}</small>
      </p>
      <p class="mb-0 font-weight-medium text--primary" v-if="chat.user.role == 'company'">
        {{ chat.user.name }}<br />
        <small>{{chat.user.company.name}}</small>
      </p>
      <p class="text--disabled mb-0 text-truncate">
<!--        {{ isChatContact ? chat.chat.lastMessage.message : chat.about }}-->
<!--        <span v-if="chat.lastMessage">{{ chat.lastMessage.message }}</span>-->
      </p>
      <p>
        <v-btn x-small color="default" @click="$emit('archive-chat')" style="height: 20px !important;min-width: 13px !important;width: 26px;">
          <v-icon small >{{icons.mdiArchiveOutline}}</v-icon>
        </v-btn>
      </p>
    </div>
    <div  class="chat-meta d-flex flex-column align-self-stretch align-end">
      <p class="text-no-wrap mb-0">
<!--        {{ formatDateToMonthShort(chat.chat.lastMessage.time, { hour: 'numeric', minute: 'numeric' }) }}-->
<!--        <span v-if="chat.lastMessage">{{ chat.lastMessage.time }}</span>-->
      </p>
      <v-badge v-if="chat.unseenMsgs" color="error" inline :content="chat.unseenMsgs" class="number-badge"></v-badge>
    </div>
  </div>
</template>

<script>
import { formatDateToMonthShort, avatarText } from '@core/utils/filter'
import useChat from './modules/useChat'
import ThemeConfig from '@themeConfig'
import {
  mdiArchiveOutline
} from "@mdi/js";
export default {
  props: {
    chat: {
      type: Object,
      required: true,
    },
    isChatContact: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { resolveAvatarBadgeVariant } = useChat()

    return {
      formatDateToMonthShort,
      resolveAvatarBadgeVariant,
      avatarText,
      name: ThemeConfig.app.name,
      icons:{mdiArchiveOutline}}
  },
}
</script>

<style>
</style>
