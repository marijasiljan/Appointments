<template>
  <div class="chat-left-sidebar h-full">
    <div class="d-flex align-center pa-4">
      <v-badge bottom overlap dot bordered :color="resolveAvatarBadgeVariant(profileUserMinimalData.status)" offset-x="11" offset-y="11" class="me-3 user-status-badge">
        <v-avatar size="2.375rem" class="cursor-pointer"
          :class="`v-avatar-light-bg ${resolveAvatarBadgeVariant(profileUserMinimalData.status)}--text`"
          @click="$emit('open-chat-user-profile-sidebar-content', true); $vuetify.breakpoint.smAndDown && $emit('close-left-sidebar')">
          <v-img v-if="profileUserMinimalData.profile_picture" :src="profileUserMinimalData.profile_picture+'?api_token='+token"></v-img>
          <span v-else>{{ avatarText(profileUserMinimalData.name+' '+profileUserMinimalData.last_name) }}</span>
        </v-avatar>
      </v-badge>
      <v-text-field v-model="searchQuery" placeholder="search..." hide-details outlined rounded dense class="chat-search" :prepend-inner-icon="icons.mdiMagnify"
      ></v-text-field>
      <v-icon class="d-inline-flex d-md-none ms-1" @click="$emit('close-left-sidebar')">
        {{ icons.mdiClose }}
      </v-icon>
    </div>

    <v-divider></v-divider>

    <perfect-scrollbar :options="perfectScrollbarOptions" class="ps-chat-left-sidebar pt-7 pb-3 px-3">
      <div style="display:flex;justify-content: space-between">
        <p class="font-weight-medium text-xl primary--text ms-3">
          {{ $t(primary_tab) }}
        </p>
        <p class="font-weight-medium text-sm default--text ms-3 cursor-pointer" @click="changeLeftSidebarContent">
          {{ $t(secondary_tab) }}
        </p>
      </div>
      <div v-if="tab==0">
        <chat-contact v-for="chat in filteredChatsContacts" :key="`chat-${chat.id}`" :chat="chat" is-chat-contact :is-active="activeChatContactId === chat.userId"
          :class="{'bg-gradient-primary active-chat-contact': activeChatContactId === chat.userId}"
          @click="$emit('open-chat', chat.id)"
          @archive-chat="archiveChat(chat.id)"/>
      </div>

      <div v-if="tab==1">
        <chat-contact v-for="chat in filteredArchivedChatsContacts" :key="`chat-${chat.id}`" :chat="chat" is-chat-contact :is-active="activeChatContactId === chat.userId"
          :class="{'bg-gradient-primary active-chat-contact': activeChatContactId === chat.userId}"
          @click="$emit('open-chat', chat.id)"
          @archive-chat="archiveChat(chat.id)"/>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
import { mdiMagnify, mdiClose } from '@mdi/js'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import { ref, computed } from '@vue/composition-api'
import { avatarText } from '@core/utils/filter'
import ChatContact from './ChatContact.vue'
import useChat from './modules/useChat'
// import {
//   setTimeout
// } from "../../../../../public/backend/assets/plugins/custom/tinymce/tinymce.bundle";

export default {
  components: {
    PerfectScrollbar,
    ChatContact,
  },
  props: {
    chatsContacts: {
      type: Array,
      required: true,
    },
    archivedChatsContacts: {
      type: Array,
      required: true,
    },
    activeChatContactId: {
      type: Number,
      default: null,
    },
    profileUserMinimalData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { resolveAvatarBadgeVariant } = useChat()

    const tab = ref(0)
    const primary_tab = ref('chats')
    const secondary_tab = ref('archived')

    // Search Query
    const searchQuery = ref('')

    const searchFilterFunction = chat => chat.user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const filteredChatsContacts = computed(() => props.chatsContacts.filter(searchFilterFunction))
    const filteredArchivedChatsContacts = computed(() => props.archivedChatsContacts.filter(searchFilterFunction))

    // Perfect scrollbar options
    const perfectScrollbarOptions = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
      wheelSpeed: 0.7,
    }

    function changeLeftSidebarContent(){
      tab.value = !tab.value
      let tmp_tab = primary_tab.value
      primary_tab.value = secondary_tab.value
      secondary_tab.value = tmp_tab
    }

    function archiveChat(chat_id){
      axios.delete("/chats/"+chat_id).then(response => {
          if (response.data.status == true) {
            if(tab.value == 0 && response.data.data == 0){
              const chat = props.chatsContacts.find(c => c.id == chat_id)
              props.chatsContacts.splice(props.chatsContacts.indexOf(chat),1)
              props.archivedChatsContacts.unshift(chat)
            }else if(tab.value == 1 && response.data.data){
              const chat = props.archivedChatsContacts.find(c => c.id == chat_id)
              props.archivedChatsContacts.splice(props.archivedChatsContacts.indexOf(chat),1)
              props.chatsContacts.unshift(chat)
              changeLeftSidebarContent()
            }
          } else {
            flashMsg('error', response.data.message)
          }
        })
    }

    return {
      // Use Chat
      tab,
      primary_tab,
      secondary_tab,
      resolveAvatarBadgeVariant,
      changeLeftSidebarContent,
      archiveChat,

      // Search
      searchQuery,
      filteredChatsContacts,
      filteredArchivedChatsContacts,

      // Perfect Scrollbar options
      perfectScrollbarOptions,

      // Filter
      avatarText,

      // Icons
      icons: {
        mdiMagnify,
        mdiClose,
      },
    }
  },
}
</script>
