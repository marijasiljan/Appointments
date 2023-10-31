window._ = require('lodash');

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '../lang/en/lang.json'
import de from '../lang/de/lang.json'

Vue.use(VueI18n);

Vue.config.productionTip = false

import router from './src/router/index.js';
import store from './src/store/index.js';
console.log('store',store)
Vue.prototype.user = window.user = store.getters.getUser
Vue.prototype.token = window.token = store.getters.getToken


class CustomFormatter {
  constructor (options) {}
  interpolate (message, values) {
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1)

    Object.entries(values || []).forEach(([key, value]) => {
      if(value != null){
        if(typeof value === 'object'){
          value = value[user.lang]
          value = value.toString()
        }else{
          value = value.toString()
        }

        message = message
          .replace(`:${key}`, value)
          .replace(`:${key.toUpperCase()}`, value.toUpperCase())
          .replace(`:${capitalize(key)}`, capitalize(value))
      }else{
        message = message.replace(`:${key}`, value)
      }
    })

    return message
  }
}
const i18n = new VueI18n({
  locale: user?.lang ?? 'en',
  formatter: new CustomFormatter(),
  messages : {
    de,en
  },
  fallbackLocale:'en',
})


Vue.prototype.router = window.router = router
Vue.prototype.store = window.store = store
window.moment = require('vue-moment')
window.swal = require('sweetalert2')
Vue.prototype.swal = swal;
window.i18n = i18n;

if(store.getters.getToken == 'expired'){
  store.dispatch('updateToken',null)
}

require('./src/providers/helper')
require('./src/providers/loader')
require('./src/providers/messages')
require('./src/providers/api')

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';
//
// window.Pusher = require('pusher-js');
//
// window.Echo = new Echo({
//   authEndpoint: baseUrl+"/api/broadcasting/auth",
//   broadcaster: "pusher",
//   key:  "12345",
//   auth: {
//     headers: {
//       "api-version": baseV,
//       Authorization: "Bearer " + store.state.token,
//       Accept: 'application/json',
//     },
//   },
//   wsHost: "websocket.domain.com",
//   //wsPort: 6001,
//   cluster: "eu",
//   forceTLS: true,
//   disableStats:true,
//   encrypted:true
// });


