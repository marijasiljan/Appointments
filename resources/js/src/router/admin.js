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
      path:'services',
      component: () => import('@/views/admin/user_management/pages/services/Index.vue'),
      name:'admin-services',
      meta: {
        layout: 'content',
      },
    },
    {
      path:'price',
      component: () => import('@/views/admin/user_management/pages/price/Index.vue'),
      name:'admin-price',
      meta: {
        layout: 'content',
      },
    },
    {
      path:'appointments',
      component: () => import('@/views/admin/user_management/pages/appointments/Index.vue'),
      name:'admin-appointments',
      meta: {
        layout: 'content',
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
          path:'clients',
          name:'admin-users-clients',
          component: () => import('@/views/admin/user_management/pages/clients/Index.vue'),
          meta: {
            layout: 'content',
            action: 'view',
            resource:'clients',
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
      path:'availability-generator',
      component: () => import('@/views/admin/user_management/pages/availability/Index.vue'),
      name:'admin-availability',
      meta: {
        layout: 'content',
      }
    },
    {
      path:'availability',
      component: () => import('@/views/admin/user_management/pages/booking_times/Index.vue'),
      name:'admin-availability-list',
      meta: {
        layout: 'content',
      }
    },
  ],
}
