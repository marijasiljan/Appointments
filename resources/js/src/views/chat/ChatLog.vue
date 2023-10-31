<template>
  <div class="chat-log pa-5">
    <div v-for="(msgGrp, index) in formattedChatData.formattedChatLog" :key="msgGrp.senderId+String(index)" class="chat-group d-flex align-start"
      :class="[{'flex-row-reverse': msgGrp.senderId === user.id}, { 'mb-8': formattedChatData.formattedChatLog.length-1 !== index }]">
      <div class="chat-avatar" :class="msgGrp.senderId === user.id ? 'ms-4 mr-2' : 'me-4 ml-2'">
        <!-- <b-avatar
          size="36"
          class="avatar-border-2 box-shadow-1"
          variant="transparent"
          :src="msgGrp.senderId === formattedChatData.user.id ? formattedChatData.user.profile_picture : profileUserAvatar"
        /> -->
        <v-avatar size="38" class="v-avatar-light-bg" v-if="msgGrp.senderId === user.id">
          <v-img v-if="user.profile_picture" :src="user.profile_picture+'?api_token='+token"></v-img>
          <span v-else>{{ avatarText(user.name+' '+user.last_name) }}</span>
        </v-avatar>
        <v-avatar size="38" class="v-avatar-light-bg" v-else>
          <v-img v-if="formattedChatData.otherUser.avatar" :src="formattedChatData.otherUser.avatar+'?api_token='+token"></v-img>
          <span v-else>{{ avatarText(formattedChatData.otherUser.name) }}</span>
        </v-avatar>
      </div>
      <div class="chat-body d-inline-flex flex-column" :class="msgGrp.senderId === user.id ? 'align-end' : 'align-start'">
        <p v-for="(msgData, msgIndex) in msgGrp.messages" :key="'chat_'+Math.random()" class="chat-content py-3 px-4 elevation-1"
          :class="[
            msgGrp.senderId === user.id ? 'primary white--text chat-right' : 'bg-card chat-left',
            msgGrp.messages.length-1 !== msgIndex ? 'mb-2' : 'mb-1'
          ]">
          <span v-if="msgData.msg != null && msgData.msg.includes('lang.')"> {{$t(msgData.msg.split('.')[1],{name:tenantName})}}</span>
          <span v-else>{{ msgData.msg }}</span>
          <a v-if="msgData.isFile != null" :href="msgData.isFile+'?api_token='+token" target="_blank" style="color:inherit">
            <span class="project-images-box">
              <v-img class="project-images-icon" lazy :src="require('@/assets/images/icons/file-icons/image.png').default"></v-img>
              <span class="project-images-title">{{ msgData.fileName }}</span>
            </span>
          </a>
        </p>
        <div :class="{'text-right': msgGrp.senderId === user.id}">
<!--          <span class="text-xs me-1 text&#45;&#45;disabled">{{ formatDate(msgGrp.messages[msgGrp.messages.length-1].time, { hour: 'numeric', minute: 'numeric' }) }}</span>-->
          <span class="text-xs me-1 text--disabled">{{ msgGrp.messages[msgGrp.messages.length-1].time }}</span>
          <v-icon v-if="msgGrp.senderId === user.id" size="16"
            :color="resolveFeedbackIcon(msgGrp.messages[msgGrp.messages.length-1].feedback).color">
            {{ resolveFeedbackIcon(msgGrp.messages[msgGrp.messages.length-1].feedback).icon }}
          </v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
import { formatDate, avatarText } from '@core/utils/filter'

import ThemeConfig from '@themeConfig'
import { mdiCheck, mdiCheckAll } from '@mdi/js'

export default {
  props: {
    chatData: {
      type: Object,
      required: true,
    },
    profileUserAvatar: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const formattedChatData = computed(() => {
      const otherUser = {
        id: props.chatData.user.id,
        name: props.chatData.user.name,
        avatar: props.chatData.user.profile_picture,
      }

      let chatLog = []
      if (props.chatData.chat) {
        chatLog = props.chatData.chat
      }

      const formattedChatLog = []
      let chatMessageSenderId = chatLog[0] ? chatLog[0].senderId : undefined
      let msgGroup = {
        senderId: chatMessageSenderId,
        messages: [],
      }

      chatLog.forEach((msg, index) => {
        if (chatMessageSenderId === msg.senderId) {
          msgGroup.messages.push({
            fileName: msg.fileName,
            isFile: msg.isFile,
            msg: msg.message,
            time: msg.time,
            feedback: msg.feedback,
          })
        } else {
          chatMessageSenderId = msg.senderId
          formattedChatLog.push(msgGroup)
          msgGroup = {
            senderId: msg.senderId,
            messages: [
              {
                fileName: msg.fileName,
                isFile: msg.isFile,
                msg: msg.message,
                time: msg.time,
                feedback: msg.feedback,
              },
            ],
          }
        }
        if (index === chatLog.length - 1) formattedChatLog.push(msgGroup)
      })

      return {
        formattedChatLog,
        otherUser,
        profileUserAvatar: props.profileUserAvatar,
      }
    })

    // Feedback icon
    const resolveFeedbackIcon = feedback => {
      if (feedback.isRead) return { icon: mdiCheckAll, color: 'success' }
      if (feedback.isDelivered) return { icon: mdiCheckAll, color: null }
      return { icon: mdiCheck, color: null }
    }

    return {
      formattedChatData,

      tenantName: ThemeConfig.app.name,

      // Filter
      formatDate,
      avatarText,

      // Feedback Icon
      resolveFeedbackIcon,

      // Icons
      icons: {
        mdiCheck,
        mdiCheckAll,
      },
    }
  },
}
</script>

<style lang="scss">
.project-images-icon{
  width:32px
}
.project-images-box{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:120px;
  padding-top:10px;
  cursor:pointer;
}
.project-images-title{
  margin-top:5px;
  font-size:12px;
  text-decoration:none;
  align-self:normal;
}
</style>
