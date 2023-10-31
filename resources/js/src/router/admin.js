import multiguard from 'vue-router-multiguard';
export default {
  path: '/admin',
  component: () => import('@/views/admin/Router.vue'),
  meta: {
    layout: 'content',
  },
  redirect: { name: 'admin-dashboard' },
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
      component: () => import('@/views/admin/dashboard/Dashboard.vue'),
      name:'admin-dashboard',
      meta: {
        layout: 'content',
      },
    },
    {
      path:'chat',
      component: () => import('@/views/admin/AdminChat.vue'),
      name:'admin-chat',
      meta: {
        layout: 'content',
      }
    },
    {
      path:'admin-blogs',
      component: () => import('@/views/admin/blogs/Blog.vue'),
      name:'admin-blogs',
      meta: {
        layout: 'content',
        action: 'view',
        resource:'blogs',
      },
    },
    {
      path:'admin-user-activities',
      component: () => import('@/views/admin/user_management/pages/Activities.vue'),
      name:'admin-login-logs',
      meta: {
        layout: 'content',
        action: 'view',
        resource:'login_logs',
      },
    },
    {
      path:'user_management',
      component: () => import('@/views/admin/user_management/Router.vue'),
      redirect:{name:'admin-users-clients'},
      meta: {
        layout: 'content',
        action: 'view',
        resource:'user_management',
      },
      children:[
        {
          path:'activities',
          name:'admin-users-activities',
          component: () => import('@/views/admin/user_management/pages/AllActivities.vue'),
          meta: {
            layout: 'content',
            action: 'view',
            resource:'user_activities',
          },
        },
        {
          path:'activity/:id',
          name:'admin-user-activities',
          component: () => import('@/views/admin/user_management/pages/Activities.vue'),
          meta: {
            layout: 'content',
            action: 'view',
            resource:'user_activities',
          },
        },
        {
          path:'admins',
          name:'admin-users-admins',
          component: () => import('@/views/admin/user_management/pages/admins/Index.vue'),
          meta: {
            layout: 'content',
            action: 'view',
            resource:'admins',
          },
        },
        {
          path:'employee',
          name:'admin-users-employee',
          component: () => import('@/views/admin/user_management/pages/employee/Index.vue'),
          meta: {
            layout: 'content',
            action: 'view',
            resource:'employee',
          },
        },
      ]
    },
    {
      path:'profile',
      component: () => import('@/views/admin/profile/Profile.vue'),
      name:'admin-profile',
      meta: {
        layout: 'content',
      }
    },
  ],
}
