import multiguard from 'vue-router-multiguard';

// import store from '../store/index.js';

// const auth = function(to, from, next) {
//   if(store.state.settings.token == null){
//     next();
//   }else{
//     const user = store.state.settings.currentUser;
//     if(user.id != null && user.id != 'null' &&
//       (user.id != undefined && user.id != 'undefined')){
//       window.location = '/';
//     }else{
//       window.location = '/';
//     }
//   }
// };
const reloadUser = function (to, from, next){
  axios.post("/getUser").then(async response2 => {
    try {
      await store.dispatch('updateUser', response2.data.data);
      window.user = store.state.user
      next()
    }catch (e) {
      flashMsg('error',i18n.t('error_perfroming_task'))
      next('/client/dashboard')
    }
  })
}
export default {
  path: '/client',
  component: () => import('@/views/client/Router.vue'),
  meta: {
    layout: 'content',
  },
  redirect: { name: 'client-dashboard' },
  beforeEnter: multiguard([]),
  children:[
    {
      path:'not-authorized',
      component: () => import('@/views/NotAuthorized.vue'),
      name:'not-authorized',
      meta: {
        layout: 'content',
      },
    },
    {
      path:'dashboard',
      component: () => import('@/views/client/dashboard/Dashboard.vue'),
      name:'client-dashboard',
      meta: {
        layout: 'content',
      },
    },
    {
      path:'chat',
      component: () => import('@/views/client/ClientChat.vue'),
      name:'client-chat',
      meta: {
        layout: 'content',
      }
    },
    {
      path:'profile',
      component: () => import('@/views/client/profile/Profile.vue'),
      name:'client-profile',
      beforeEnter: multiguard([reloadUser]),
      meta: {
        layout: 'content',
      }
    },
  ]
}
