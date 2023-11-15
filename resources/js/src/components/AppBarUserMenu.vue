<template>
  <div>
    <br v-if="logInBack != null">
    <br v-if="logInBack != null">
    <div style="display:flex">
      <v-menu offset-y nudge-bottom="11" min-width="175" left :elevation="$vuetify.theme.dark ? 9 : 8">
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" class="d-flex align-center mr-2" v-on="on">
            <v-img :src="require('@/assets/images/flags/'+$i18n.locale+'.svg')" :alt="$i18n.locale" height="14px" width="22px" class="me-2"
            ></v-img>
            <span v-if="$vuetify.breakpoint.smAndUp">{{ {'en':$t('english'),'de':$t('german')}[$i18n.locale] }}</span>
          </div>
        </template>

        <v-list>
          <v-list-item-group :value="$i18n.locale" >
            <v-list-item @click="changeLanguage(index)" v-for="(locale,index) in {'en':$t('english'),'de':$t('german')}" :key="index" :value="locale">
              <v-img :src="require('@/assets/images/flags/'+index+'.svg')" height="14px" width="22px" :alt="locale" class="me-2"></v-img>
              <v-list-item-title>{{ locale }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>

      <v-fade-transition mode="out-in" class="mr-2" >
        <v-icon :key="isDark" @click="isDark = !isDark" class="mr-2" >
          {{ isDark ? icons.mdiWeatherSunny : icons.mdiWeatherNight }}
        </v-icon>
      </v-fade-transition>

      <v-menu offset-y left nudge-bottom="14" min-width="230" content-class="user-profile-menu-content">
        <template v-slot:activator="{ on, attrs }">
          <v-badge bottom color="success" overlap offset-x="12" offset-y="12" class="ms-4" dot>
            <v-avatar size="40px" v-bind="attrs" color="primary" class="v-avatar-light-bg primary--text" v-on="on">
              <v-img v-if="user.profile_picture" :src="user.profile_picture+'?api_token='+token"></v-img>
              <span v-else>{{ avatarText(user.name+' '+user.surname) }}</span>
            </v-avatar>
          </v-badge>
        </template>
        <v-list>
          <div class="pb-3 pt-2">
            <v-badge bottom color="success" overlap offset-x="12" offset-y="12" class="ms-4" dot>
              <v-avatar size="40px" color="primary" class="v-avatar-light-bg primary--text">
                <v-img v-if="user.profile_picture" :src="user.profile_picture+'?api_token='+token"></v-img>
                <span v-else>{{ avatarText(user.name+' '+user.surname) }}</span>
              </v-avatar>
            </v-badge>
            <div class="d-inline-flex flex-column justify-center ms-3" style="vertical-align: middle">
              <span class="text--primary font-weight-semibold mb-n1">{{ user.name+' '+user.surname}}</span>
              <small class="text--disabled text-capitalize" v-if="user.role =='company'">{{ user.company.company_name }}</small>
              <small class="text--disabled text-capitalize" v-if="user.role == 'admin'">{{ user.role }}</small>
            </div>
          </div>

          <v-divider></v-divider>

          <!-- Profile -->
          <v-list-item :to="{ name: user.role+'-profile' }">
            <v-list-item-icon class="me-2">
              <v-icon size="22">
                {{ icons.mdiAccountOutline }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title :to="{ name: user.role+'-profile' }">{{ $t('profile') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Chat -->
<!--          <v-list-item :to="{ name: user.role+'-chat' }" v-if="user.role !='store' && user.role !='sales_manager'">-->
<!--            <v-list-item-icon class="me-2">-->
<!--              <v-icon size="22">-->
<!--                {{ icons.mdiChatOutline }}-->
<!--              </v-icon>-->
<!--            </v-list-item-icon>-->
<!--            <v-list-item-content>-->
<!--              <v-list-item-title :to="{ name: user.role+'-chat' }">{{ $t('chat') }}</v-list-item-title>-->
<!--            </v-list-item-content>-->
<!--          </v-list-item>-->

          <!-- Logout -->
          <v-list-item href="#">
            <v-list-item-icon class="me-2">
              <v-icon size="22">
                {{ icons.mdiLogoutVariant }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content v-on:click="logout">
              <v-list-item-title >{{ $t('logout') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

    </div>
    <br v-if="logInBack != null">
  </div>
</template>

<script>
import {ref, watch} from "@vue/composition-api";
import useAppConfig from '@core/@app-config/useAppConfig'
import moment from 'moment'
import Vuetify from "../plugins/vuetify";
import { avatarText } from '@core/utils/filter'
import Vue from 'vue'
// 3rd Party
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import {
  mdiAccountOutline,
  mdiEmailOutline,
  mdiCheckboxMarkedOutline,
  mdiChatOutline,
  mdiCogOutline,
  mdiCurrencyUsd,
  mdiHelpCircleOutline,
  mdiLogoutVariant,
  mdiClose,
  mdiBellOutline,
  mdiWeatherNight,
  mdiWeatherSunny,
  mdiCircleSmall,
  mdiMessageDraw,
  mdiStarOutline,
  mdiStar,
} from '@mdi/js'
import store from "../store";

export default {
  components: {
    // 3rd Party
    PerfectScrollbar,
  },
  setup() {
    const { isDark } = useAppConfig()
    const form = ref(null)
    const logInBack = ref(store.getters.getLogInBack)

    function getLink(link){
      return link[0] != '/' ? '/'+link : link;
    }

    function logout(){
      axios.post('/logout').then(function (response) {
        store.dispatch('updateUser',null)
        store.dispatch('updateToken',null)
        flashMsg('success','Logged out')
        router.push('/login')
      })
    }

    function changeLanguage(locale){
      axios.post('/change_lang',{lang:locale}).then(async function (response) {
        if(response.data.status){
          Vuetify.framework.lang.current = response.data.data;
          i18n.locale = response.data.data;
          await store.dispatch('updateLang',i18n.locale)
          let user = store.getters.getUser
          user.lang = i18n.locale
          store.dispatch('updateUser',user)
        }
      })
    }

    async function  loginBackToOwn(){
      if (await confirmAlert({'subtitle': 'confirmation_login_as_other_user'})){
        let tmpUser = logInBack.value.lastUser
        let tmpToken = logInBack.value.lastUserToken
        await store.dispatch('updateToken', tmpToken);
        await store.dispatch('updateUser', tmpUser);
        setTimeout(function (){
          store.dispatch('updateLogInBack', null);
          flashMsg('success', i18n.t('hold_on_we_are_logging_you_in'))
          console.log(tmpUser)
          window.location = '/' + tmpUser.role;
        },1000)
      }
    }

    const fab = ref(false)
    const perfectScrollbarOptions = {
      maxScrollbarLength: 60,
    }
    return {
      logInBack,
      loginBackToOwn,
      logout,
      changeLanguage,
      getLink,
      perfectScrollbarOptions,
      form,
      fab,
      isDark,
      moment,
      avatarText,
      icons: {
        mdiAccountOutline,
        mdiEmailOutline,
        mdiCheckboxMarkedOutline,
        mdiChatOutline,
        mdiCogOutline,
        mdiCurrencyUsd,
        mdiHelpCircleOutline,
        mdiLogoutVariant,
        mdiClose,
        mdiBellOutline,
        mdiWeatherNight,
        mdiWeatherSunny,
        mdiCircleSmall,
        mdiMessageDraw,
        mdiStarOutline,
        mdiStar,
      },
    }
  },
}
</script>

<style lang="scss">
.user-profile-menu-content {
  .v-list-item {
    min-height: 2.5rem !important;
  }
}

.read-all-btn-list-item{
  display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      text-decoration: underline;
      font-size: 12px;
}
</style>
