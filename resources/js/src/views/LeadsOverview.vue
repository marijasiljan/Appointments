<template>
  <div>
    <div class="overview-header" style="display: flex;padding: 25px">
<!--      <v-img :src="appLogo" max-height="80px" max-width="150px" alt="logo" contain eager class="app-logo me-3"></v-img>-->
    </div>
    <div class="container project-iframe-class">
        <leads-overview :isPublic="isPublic" v-if="isPublic"></leads-overview>
    </div>
  </div>
</template>

<script>


import LeadsOverview from "./admin/leads/LeadsOverview/LeadsOverview";

import themeConfig from '@themeConfig'
import {ref} from '@vue/composition-api'
export default {
    components: {LeadsOverview},
    setup() {
        const isPublic = ref(true)
        const iframeResize = () =>{
          let height = document.querySelector('.project-iframe-class').clientHeight;
          window.parent.postMessage("resize::" + height, "*")
        }
        setInterval(function () {
            iframeResize()
        },500)

    return {
        isPublic,
        appName: themeConfig.app.name,
        appLogo: themeConfig.app.logo,
    }
  },
}
</script>

