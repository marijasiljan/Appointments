import preset from '@/@core/preset/preset'
import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
// @ts-ignore
import en from 'vuetify/lib/locale/en'
import de from 'vuetify/lib/locale/de'
// import { VDatePicker } from 'vuetify/lib/components/VDatePicker/VDatePicker'

Vue.use(Vuetify)

export default new Vuetify({
  preset,
  icons: {
    iconfont: 'mdiSvg',
  },
  lang: {
    locales: { de, en},
    current: user != null ? user.lang : 'en',
  },
  theme: {
    themes:{
        light:{
          primary: '#269acc',
          "primary-light": '#269acc',
          accent: '#0d6efd',
          secondary: '#8A8D93',
          success: '#56CA00',
          info: '#16B1FF',
          warning: '#FFB400',
          error: '#FF4C51',
        }
    },
    options: {
      customProperties: true,
      variations: false,
    },
  },
})
