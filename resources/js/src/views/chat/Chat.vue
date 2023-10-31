<template>
  <div>
    <div class="d-flex justify-space-between">
      <breadcrumbs :items="breadcrumbsItems" />
      <div v-if="filteredChatList.admin">
        <v-menu v-model="findChat" :close-on-content-click="false" offset-y left nudge-bottom="14" min-width="600" content-class="list-style mr-4 notification-menu-content">
          <template v-slot:activator="{on, attrs}">
            <v-btn color="primary" @click="findChat = true">
              {{ $t('contact_list') }}
              <v-icon> {{ icons.mdiChatPlusOutline }}</v-icon>
            </v-btn>
          </template>
          <v-card class="app-bar-notification-content-container" style="min-width:600px !important;max-width: 600px !important; padding:10px">
            <div class="d-flex flex-column">
              <h3>{{ name }}</h3>
              <v-divider horizontal></v-divider>
              <div style="padding: 5px 0;cursor:pointer;" @click="openChat(filteredChatList.admin,0)">
                <div class="v-avatar-light-bg-list" style="display: flex;align-items:center;" >
                  <v-avatar class="v-avatar-light-bg mr-2" start size="45">
                      <span>
                        <img v-if="filteredChatList.admin.profile_picture" :src="filteredChatList.admin.profile_picture + '?api_token='+token" :alt="filteredChatList.admin.name" style="max-width:50px;max-height:50px;" />
                        <span v-else>{{ avatarText(filteredChatList.admin.name) }}</span>
                      </span>
                  </v-avatar>
                  <span>{{ filteredChatList.admin.name }}</span>
                </div>
              </div>
              <div v-if="filteredChatList.project_managers.length > 0">
                <div v-for="(project_manager,index) in filteredChatList.project_managers"
                  :key="'manager_'+index" @click="openChat(project_manager,0)"
                  style="padding: 5px 0;cursor:pointer;">
                    <div class="v-avatar-light-bg-list" style="display: flex;align-items:center;">
                      <v-avatar class="v-avatar-light-bg mr-2" start size="45">
                      <span>
                        <img v-if="project_manager.profile_picture" :src="project_manager.profile_picture + '?api_token='+token" :alt="project_manager.name" style="max-width:50px;max-height:50px;" />
                        <span v-else>{{ avatarText(project_manager.name) }}</span>
                      </span>
                      </v-avatar>
                      <span>{{ project_manager.name }}</span>
                    </div>
                </div>
              </div>
              <br>
              <div v-if="filteredChatList.companies.length > 0">
                <h3>{{ $t('chatlist_involved_companies') }}</h3>
                <v-divider horizontal></v-divider>
                <div>
                  <div v-for="(company,index) in filteredChatList.companies" :key="'cmp_'+index" style="padding: 5px 0;cursor:pointer;" @click="openChat(company,1)">
                    <div class="v-avatar-light-bg-list" style="display: flex;align-items:center;" >
                      <v-avatar class="v-avatar-light-bg mr-2" start size="45">
                      <span>
                        <img v-if="company.logo" :src="company.logo + '?api_token='+token" :alt="company.name" style="max-width:50px;max-height:50px;" />
                        <span v-else>{{ avatarText(company.name) }}</span>
                      </span>
                      </v-avatar>
                      <span class="d-flex flex-column align-items-center" style="margin-left: 10px">
                      <span>{{ company.user.name }}</span>
                      <span style="font-size: 12px">{{ company.name}}</span>
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-menu>
      </div>
    </div>
    <v-card class="max-h-content-container app-chat position-relative overflow-hidden text-sm">
      <!-- Navigation Drawer: Left Sidebar -->
      <v-navigation-drawer v-model="isLeftSidebarOpen" width="374" touchless :right="$vuetify.rtl" mobile-breakpoint="sm" :temporary="$vuetify.breakpoint.xsOnly" absolute>
        <chat-left-sidebar-content
          ref="leftSideBar"
          :chats-contacts="chatsContacts"
          :archived-chats-contacts="archivedChatsContacts"
          :active-chat-contact-id="activeChat.user ? activeChat.user.id : null"
          :profile-user-minimal-data="profileUserDataMinimal"
          @close-left-sidebar="isLeftSidebarOpen = false"
          @open-chat="openChatOfContact"
          @open-chat-user-profile-sidebar-content="isUserProfileSidebarOpen = true"
          v-if="chatsContacts"
        ></chat-left-sidebar-content>
      </v-navigation-drawer>

      <!-- Navigation Drawer: User Profile -->
      <v-navigation-drawer v-model="isUserProfileSidebarOpen" width="374" absolute :right="$vuetify.rtl" touchless temporary>
        <chat-user-profile-sidebar-content :profile-user-data="profileUserData" @close-user-profile-sidebar="isUserProfileSidebarOpen = false"></chat-user-profile-sidebar-content>
      </v-navigation-drawer>

      <!-- Navigation Drawer: Active Chat -->
      <v-navigation-drawer v-model="isActiveChatUserProfileSidebarOpen" width="374" absolute temporary :right="!$vuetify.rtl" touchless>
        <chat-active-chat-user-profile-sidebar-content
          v-if="activeChat.user"
          :profile-user-data="activeChat.user"
          @close-active-chat-user-profile-sidebar="isActiveChatUserProfileSidebarOpen = false"
        ></chat-active-chat-user-profile-sidebar-content>
      </v-navigation-drawer>
      <div class="chat-content-area h-full d-flex flex-column" :style="contentStyles">
        <div v-if="activeChat.user" class="h-full">
          <div class="d-flex align-center justify-space-between px-5 py-4" style="height: 72px">
            <div class="d-flex align-center">
              <v-btn icon class="me-2 d-inline-block d-md-none">
                <v-icon v-show="!isLeftSidebarOpen" @click="isLeftSidebarOpen = true">
                  {{ icons.mdiMenu }}
                </v-icon>
              </v-btn>
              <v-badge bottom overlap dot bordered :color="resolveAvatarBadgeVariant(activeChat.user.status)" offset-x="11" offset-y="11" class="me-3 user-status-badge">
                <v-avatar size="38" class="cursor-pointer"
                          :class="`v-avatar-light-bg ${resolveAvatarBadgeVariant(activeChat.user.status)}--text`"
                          @click="isActiveChatUserProfileSidebarOpen = true">
                  <v-img v-if="activeChat.user.profile_picture" :src="activeChat.user.profile_picture+'?api_token='+token"></v-img>
                  <span v-else>{{ avatarText(activeChat.user.name) }}</span>
                </v-avatar>
              </v-badge>
              <div class="d-flex flex-column">
                <p class="mb-0 text--primary font-weight-medium">
                  {{ activeChat.user.name }}
                </p>
                <span class="text--disabled text-xs" v-if="activeChat.user.role == 'client'">{{ $t(activeChat.user.role) }}</span>
                <span class="text--disabled text-xs" v-if="activeChat.user.role == 'admin'"><a href="/" target="_blank">{{ name }}</a></span>
                <span class="text--disabled text-xs" v-if="activeChat.user.role == 'company'">{{activeChat.user.company.name}}</span>
              </div>
            </div>
          </div>

          <v-divider></v-divider>

          <perfect-scrollbar ref="refChatLogPS" :options="perfectScrollbarOptions" class="ps-chat-log h-full">
            <chat-log :chat-data="activeChat" :profile-user-avatar="profileUserDataMinimal.name"></chat-log>
          </perfect-scrollbar>
          <v-form autocomplete="off" @submit.prevent="sendMessage">
            <v-text-field :key="activeChat.user.id" v-model="chatInputMessage" :placeholder="$t('type_your_message_here')" solo class="pb-5 px-5 flex-grow-0 msg-input" hide-details height="50" autofocus>
              <template #prepend>
                <div>
                  <v-file-input style="height:35px;min-height:35px;margin:-10px 10px 0 0; padding:0;" ref="file" :key="chatInputAttachmentKey">
                    <v-icon large>
                      {{ icons.mdiAttachment }}
                    </v-icon>
                  </v-file-input>
                </div>
              </template>
              <template #append>
                <v-btn color="primary" elevation="0" type="submit" :icon="$vuetify.breakpoint.xsOnly" :loading="isButtonLoading('/chats/'+activeChat.id)">
                  <template v-if="$vuetify.breakpoint.smAndUp">
                    {{$t('send')}}
                  </template>
                  <template v-else>
                    <v-icon>{{ icons.mdiSendOutline }}</v-icon>
                  </template>
                </v-btn>
              </template>
            </v-text-field>
          </v-form>
        </div>

        <!-- Start Conversation -->
        <div v-else class="d-flex align-center justify-center flex-grow-1 flex-column">
          <v-avatar size="109" class="elevation-3 mb-6 bg-card">
            <v-icon size="50" class="rounded-0 text--primary">
              {{ icons.mdiMessageTextOutline }}
            </v-icon>
          </v-avatar>
          <p class="mb-0 px-6 py-1 font-weight-medium text-lg elevation-3 rounded-xl text--primary bg-card" :class="[{ 'cursor-pointer': $vuetify.breakpoint.smAndDown }]"
             @click="startConversation">
            {{ $t('start_conversation') }}
          </p>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { useResponsiveLeftSidebar } from '@core/comp-functions/ui'
// eslint-disable-next-line object-curly-newline
import {
  mdiMenu,
  mdiMessageTextOutline,
  mdiPhone,
  mdiVideoOutline,
  mdiMagnify,
  mdiDotsVertical,
  mdiAttachment,
  mdiMicrophone,
  mdiSendOutline,
  mdiChatPlusOutline,
} from '@mdi/js'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import ThemeConfig from '@themeConfig'
import { ref, onUnmounted, nextTick, onMounted } from '@vue/composition-api'
import { until, invoke } from '@vueuse/core'
import { getVuetify } from '@core/utils'
import { avatarText } from '@core/utils/filter'
import store from '@/store'
import chatStoreModule from './modules/chatStoreModule'
import useChat from './modules/useChat'

// Local Components
import ChatLeftSidebarContent from './ChatLeftSidebarContent.vue'
import ChatUserProfileSidebarContent from './ChatUserProfileSidebarContent.vue'
import ChatActiveChatUserProfileSidebarContent from './ChatActiveChatUserProfileSidebarContent.vue'
import ChatLog from './ChatLog.vue'
import Breadcrumbs from "../../components/common/Breadcrumbs";
import { useRouter } from '@core/utils';
export default {
  name:'chat',
  components: {
    PerfectScrollbar,
    ChatLog,

    // Local Components
    ChatLeftSidebarContent,
    ChatUserProfileSidebarContent,
    ChatActiveChatUserProfileSidebarContent,
    Breadcrumbs,
  },
  setup(_,context) {
    const { resolveAvatarBadgeVariant } = useChat()
    const $vuetify = getVuetify()
    const { route } = useRouter()
    const chatInputAttachmentKey = ref('init')
    const { isLeftSidebarOpen, contentStyles } = useResponsiveLeftSidebar({ sidebarWidth: 374 })
    const filteredChatList = ref([])
    const findChat = ref(false)
    const leftSideBar = ref(null)
    // * Store module Registration
    const CHAT_APP_STORE_MODULE_NAME = 'app-chat'

    // Register module
    if (!store.hasModule(CHAT_APP_STORE_MODULE_NAME)) store.registerModule(CHAT_APP_STORE_MODULE_NAME, chatStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(CHAT_APP_STORE_MODULE_NAME)) store.unregisterModule(CHAT_APP_STORE_MODULE_NAME)
    })

    // Scroll to Bottom ChatLog
    const refChatLogPS = ref(null)
    const scrollToBottomInChatLog = () => {
      const scrollEl = refChatLogPS.value?.$el || refChatLogPS.value
      if(scrollEl != null)
        scrollEl.scrollTop = scrollEl.scrollHeight
    }

    // ————————————————————————————————————
    //* ——— User Profile Sidebar
    // ————————————————————————————————————
    // ? Will contain all details of profile user (e.g. settings, about etc.)
    const profileUserData = ref({})

    // ? Will contain id, name and avatar & status
    const profileUserDataMinimal = ref({})

    const isUserProfileSidebarOpen = ref(false)

    // * One time watch for fetching user profile sidebar data
    invoke(async () => {
      await until(isUserProfileSidebarOpen).toBe(true)
      profileUserData.value = store.state.user

    })

    // ————————————————————————————————————
    //* ——— Chats & Contacts
    // ————————————————————————————————————
    const chatsContacts = ref([])
    const archivedChatsContacts = ref([])

    const fetchChatAndContacts = () => {
      store.dispatch('app-chat/fetchChatsAndContacts').then(response => {
        store.dispatch('setChatsNr', -(store.getters.getChatsNr))

        filteredChatList.value = response.data.data.chatList
        chatsContacts.value = response.data.data.chats
        archivedChatsContacts.value = response.data.data.archivedChats
        profileUserDataMinimal.value = store.state.user
        Echo.private(`tenant.${tenant_id}.chatsAndAlerts.${profileUserDataMinimal.value.id}`)
          .listen('.chatNewMessagesEvent', (e)=>{
            let contact = chatsContacts.value.find(c => c.id == e.chat_id)
            if(!contact){
              contact = archivedChatsContacts.value.find(c => c.id == e.chat_id)
            }
            if (contact && activeChat.value.id != contact.id) {
              if(contact.unseenMsgs == null)
                contact.unseenMsgs = 1;
              else
                contact.unseenMsgs += 1;
            }
          })
      })
    }

    fetchChatAndContacts()

    // ————————————————————————————————————
    //* ——— Single Chat
    // ————————————————————————————————————

    const file = ref(null)
    const activeChat = ref({})
    const chatInputMessage = ref('')

    const openChatOfContact = chatId => {
      if(activeChat.value.user){
        Echo.private(`tenant.${tenant_id}.chat.${activeChat.value.id}`)
          .stopListening('.chatEvent')
      }

      chatInputMessage.value = ''

      store.dispatch('app-chat/getChat', { chatId }).then(response => {
        Echo.private(`tenant.${tenant_id}.chat.${chatId}`)
          .listen('.chatEvent', (e)=>{
            if(e.data.message)
              chatListener(e.data.message)
            else
              updateReadMessages(e.data)
          });

        activeChat.value = response.data.data

        // Set unseenMsgs to 0
        let contact = chatsContacts.value.find(c => c.id === chatId)
        if(!contact){
          contact = archivedChatsContacts.value.find(c => c.id === chatId)
          if(contact){
            leftSideBar.value.tab = 1;
          }
        }else{
          leftSideBar.value.tab = 0;
        }
        if (contact) {
          contact.unseenMsgs = 0
          contact.chat = response.data.data.chat
        }

        // Scroll to bottom
        nextTick(() => {
          scrollToBottomInChatLog()
        })
      })

      // if smAndDown =>  Close Chat & Contacts left sidebar
      if ($vuetify.breakpoint.smAndDown) isLeftSidebarOpen.value = false
    }

      onMounted(() => {
        if (route.value.query.chat){
            openChatOfContact(route.value.query.chat)
        }
      })

    const sendMessage = () => {
      file.value = context.refs.file.$refs.input.files[0]
      if (!chatInputMessage.value && file.value == undefined) return
      const payload = {
        chatId: activeChat.value.id,
        message: chatInputMessage.value,
        file: file.value,
      }
      store.dispatch('setSimpleLoader', true)
      store.dispatch('app-chat/sendMessage', payload).then(response => {
        const newMessageData = response.data.data
        if(newMessageData.length > 0){
          newMessageData.forEach((i) => {
            activeChat.value.chat.push(i)
          })
        }else{
          activeChat.value.chat.push(newMessageData)
        }

        chatInputMessage.value = ''
        file.value = null
        store.dispatch('setSimpleLoader', false)

        let chat = chatsContacts.value.find(c => c.id === activeChat.value.id)
        if(!chat){
          chat = archivedChatsContacts.value.find(c => c.id === activeChat.value.id)
        }
        if(chat)
          chat.lastMessage = newMessageData

        chatInputAttachmentKey.value = Math.random()
        nextTick(() => {
          scrollToBottomInChatLog()
        })
      })
    }

    const chatListener = (data) => {
      if(data) {
        if (activeChat.value != null && activeChat.value.id == data.chat_id && data.senderId != user.id) {
          activeChat.value.chat.push(data)
        }
        let chat = chatsContacts.value.find(c => c.id === activeChat.value.id)
        if(!chat){
          chat = archivedChatsContacts.value.find(c => c.id === activeChat.value.id)
        }
        if (chat)
          chat.lastMessage = data
        nextTick(() => {
          scrollToBottomInChatLog()
        })
      }
    }
    const updateReadMessages = (data) => {
      if(data) {
        if (activeChat.value != null && activeChat.value.id == data.chat_id) {
          let currentChat = chatsContacts.value.find(c => c.id === activeChat.value.id)
          if(!currentChat){
            currentChat = archivedChatsContacts.value.find(c => c.id === activeChat.value.id)
          }
          if (currentChat) {
            currentChat.chat[currentChat.chat.length - 1].feedback = {
              isDelivered: true,
              isRead: true,
              isSent: true
            }
          }
        }
        nextTick(() => {
          scrollToBottomInChatLog()
        })
      }
    }

    function openChat(tmpUser,type){
      //type 1 == company (has user as relation), 0 => admin (direct user)
      let user_id = type == 1 ? tmpUser.user.id : tmpUser.id;
      let contact = chatsContacts.value.find(c => c.userId === user_id)
      if(!contact){
        contact = archivedChatsContacts.value.find(c => c.userId === user_id)
        if(contact){
          leftSideBar.value.tab = 1;
        }else{
          let path = '/chats/' + user_id;
          axios.put(path).then(async response => {
            if (response.data.status == true) {
              await fetchChatAndContacts();
              openChatOfContact(response.data.data.chat_id)
            }
          }).catch(error => console.log('error', error))
          return;
        }
      }else{
        leftSideBar.value.tab = 0;
      }
      openChatOfContact(contact.id)
    }



    // ————————————————————————————————————
    //* ——— Active Chat
    // ————————————————————————————————————

    const isActiveChatUserProfileSidebarOpen = ref(false)

    // Open Sidebar in smAndDown when "start conversation" is clicked
    const startConversation = () => {
      if ($vuetify.breakpoint.mdAndUp) return
      isLeftSidebarOpen.value = true
    }
    startConversation()

    // Perfect scrollbar options
    const perfectScrollbarOptions = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
    }

    return {
      // useChat
      resolveAvatarBadgeVariant,
      filteredChatList,
      openChat,

      // Layout
      isLeftSidebarOpen,
      contentStyles,

      // Templare ref
      chatInputAttachmentKey,
      refChatLogPS,

      // User Profile Sidebar
      profileUserDataMinimal,
      profileUserData,
      isUserProfileSidebarOpen,

      // Chat & Contacts
      chatsContacts,
      archivedChatsContacts,

      // Single Chat
      file,
      activeChat,
      chatInputMessage,
      openChatOfContact,
      sendMessage,

      // Active Chat
      isActiveChatUserProfileSidebarOpen,

      // startConversation
      startConversation,

      // Perfect Scrollbar
      perfectScrollbarOptions,

      // Filter
      avatarText,

      findChat,
      leftSideBar,

      name: ThemeConfig.app.name,

      icons: {
        mdiChatPlusOutline,
        mdiMenu,
        mdiMessageTextOutline,
        mdiPhone,
        mdiVideoOutline,
        mdiMagnify,
        mdiDotsVertical,
        mdiAttachment,
        mdiMicrophone,
        mdiSendOutline,
      },
      breadcrumbsItems:[
        {text: 'dashboard', disabled: false, link: { name:user.role+'-dashboard'}, icon:'mdiHomeOutline'},
        {text: 'chat', disabled: true, link: null}
      ]
    }
  },
}
</script>

<style lang="scss">
@import '~@resources/sass/preset/apps/chat.scss';
</style>
