export default [
    {
        path: '/',
        name: 'start-page',
        redirect: { name: 'home' },
        meta: {
            layout: 'blank',
        }
    },
    {
        path: '/login',
        name: 'auth-login',
        component: () => import('@/views/Login.vue'),
        meta: {
            layout: 'blank',
        }
    },
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: {
            layout: 'blank',
        }
    },
    {
        path: '/register',
        name: 'auth-register',
        component: () => import('@/views/Register.vue'),
        meta: {
            layout: 'blank',
        }
    },
    {
        path: '/forgot-password',
        name: 'auth-forgot-password',
        component: () => import('@/views/ForgotPassword.vue'),
        meta: {
            layout: 'blank',
        }
    },
    {
        path: '/send-email-verification',
        name: 'send-email-verification',
        component: () => import('@/views/SendEmailVerification.vue'),
        meta: {
            layout: 'blank',
        }
    },
    {
        path: '/verify-account/:hash',
        name: 'verify-account',
        component: () => import('@/views/VerifyAccount.vue'),
        meta: {
            layout: 'blank',
        }
    },
    {
        path: '/reset-password/:token',
        name: 'auth-reset-password',
        component: () => import('@/views/ResetPassword.vue'),
        meta: {
            layout: 'blank',
        }
    },
    {
        path: '/register-success-page',
        name: 'register-success-page',
        component: () => import('@/views/RegisterSuccessPage.vue'),
        props:true,
        meta: {
            layout: 'blank',
        }
    },
    {
        path: '*/error-404',
        name: 'error404',
        component: () => import('@/views/Error404.vue'),
        meta: {
            layout: 'blank',
        }
    },
    {
        path: '/role/*',
        name: 'roleRedirect',
    },
    {
        path: '*',
        redirect: '/error-404'
    }
]

