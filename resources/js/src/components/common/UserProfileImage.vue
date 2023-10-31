<template>
  <div v-if="tmpUser">
    <div v-if="type == 1 || type == 2 || type == 3">
      <div class="v-avatar-light-bg-list" v-if="tmpUser.role == 'admin'">
        <span v-if="tmpUser.id == 1">
          <v-avatar class="v-avatar-light-bg" start size="25">
            <img v-if="logo" :src="logo" :alt="name"
                 onerror="this.onerror=null;this.src='/assets/images/default/no-image.png';"/>
            <span v-else>{{ avatarText(name) }}</span>
          </v-avatar>
          <span v-if="type == 2 || type == 3">{{ name }}</span>
        </span>
        <span v-else>
           <v-avatar class="v-avatar-light-bg" start size="25">
              <img v-if="tmpUser.profile_picture" :src="tmpUser.profile_picture" :alt="tmpUser.name"
                   onerror="this.onerror=null;this.src='/assets/images/default/no-image.png';"/>
              <span v-else>{{ avatarText(tmpUser.name) }}</span>
            </v-avatar>
            <span v-if="type == 2 || type == 3">{{ tmpUser.name }}</span>
        </span>
      </div>
      <div class="v-avatar-light-bg-list" v-if="tmpUser.role == 'client'">
        <v-avatar class="v-avatar-light-bg" start size="25">
          <img v-if="tmpUser.profile_picture" :src="tmpUser.profile_picture+ '?api_token='+token" :alt="tmpUser.name"
               onerror="this.onerror=null;this.src='/assets/images/default/no-image.png';">
          <span v-else>{{ avatarText(tmpUser.name) }}</span>
        </v-avatar>
        <span v-if="type == 2 || type == 3">{{ tmpUser.name }}</span>
      </div>
      <div class="v-avatar-light-bg-list" style="display: flex" v-if="tmpUser.role == 'company'">
        <v-avatar class="v-avatar-light-bg" start size="25">
          <span>
            <img v-if="tmpUser.company.logo" :src="tmpUser.company.logo + '?api_token='+token" :alt="tmpUser.company.name"
                 onerror="this.onerror=null;this.src='/assets/images/default/no-image.png';"/>
            <span v-else>{{ avatarText(tmpUser.company.name) }}</span>
          </span>
        </v-avatar>
        <span v-if="type == 2">{{ tmpUser.company.name }}</span>
        <span v-if="type == 3" class="d-flex flex-column align-items-center" style="margin-left: 10px">
          <span>{{ tmpUser.name }}</span>
          <span style="font-size: 10px">{{ tmpUser.company.name}}</span>
        </span>
      </div>
    </div>
    <div v-if="type == 4">
      <v-tooltip top>
        <template #activator="{ on, attrs }">
          <v-avatar size="25px" v-bind="attrs" class="v-avatar-light-bg" v-on="on" style="margin-right: 5px">
            <div v-if="tmpUser.role == 'admin'">
              <img v-if="logo" v-bind="attrs" v-on="on" :src="logo" alt="UM" onerror="this.onerror=null;this.src='/assets/images/default/no-image.png';"/>
              <span v-else v-bind="attrs" v-on="on" >{{ avatarText('UM') }}</span>
            </div>
            <div v-if="tmpUser.role == 'client'">
              <img v-if="tmpUser.profile_picture" v-bind="attrs" v-on="on" :src="tmpUser.profile_picture+'?api_token='+token" alt="UM"
                   onerror="this.onerror=null;this.src='/assets/images/default/no-image.png';"/>
              <span v-else v-bind="attrs" v-on="on" >{{ avatarText(tmpUser.name) }}</span>
            </div>
            <div v-if="tmpUser.role == 'company'">
              <img v-if="tmpUser.company.logo" v-bind="attrs" v-on="on" :src="tmpUser.company.logo+'?api_token='+token" alt="UM"
                   onerror="this.onerror=null;this.src='/assets/images/default/no-image.png';"/>
              <span v-else v-bind="attrs" v-on="on" >{{ avatarText(tmpUser.company.name) }}</span>
            </div>
          </v-avatar>
        </template>
        <span v-if="tmpUser.role == 'company'">{{tmpUser.company.name}}</span>
        <span v-else>{{tmpUser.name}}</span>
      </v-tooltip>
    </div>

  </div>
</template>

<script>
import {} from "@vue/composition-api";
import { avatarText } from '@core/utils/filter'
import themeConfig from '@themeConfig'

export default {
  name: "user-profile-image",
  props: {
    tmpUser: {
      required: true,
    },
    type: {
      required: true,
      default: 1,
    }
  },
  setup(){
    return {
      avatarText,
      logo: themeConfig.app.logoCircle,
      name: themeConfig.app.name,
    }
  }
}
</script>

<style>
.v-application .v-avatar.v-avatar-light-bg{
 background-color: white !important;
}
</style>
