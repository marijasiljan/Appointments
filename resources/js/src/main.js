import '@/plugins/vue-composition-api'
import '@resources/sass/styles/styles.scss'
import Vue from 'vue'
import App from './App.vue'
import themeConfig from '@themeConfig'

import Admin from './apps/admin/App.vue'
import Client from './apps/client/App.vue'

import vuetify from './plugins/vuetify'
import VueMoment from 'vue-moment'
import CKEditor from '@ckeditor/ckeditor5-vue2';
import {abilitiesPlugin} from "@casl/vue";
import ability from "./plugins/acl/ability";

Vue.use(VueMoment);
Vue.use(CKEditor);

if(store.state.user != null){

    if(store.state.user.role == 'admin') {

        Vue.use(abilitiesPlugin,ability);

        new Vue({
            vuetify,
            i18n,
            router,
            store,
            VueMoment,
            CKEditor,
            render: h => h(Admin),
        }).$mount('#app')
    }
    if(store.state.user.role == 'client') {

        Vue.use(abilitiesPlugin,ability);
        new Vue({
            vuetify,
            i18n,
            router,
            store,
            VueMoment,
            CKEditor,
            render: h => h(Client),
        }).$mount('#app')
    }
}else{
    new Vue({
        vuetify,
        i18n,
        router,
        store,
        VueMoment,
        CKEditor,
        render: h => h(App),
    }).$mount('#app')
}

