import {
  mdiHomeOutline,
  mdiForumOutline,
  mdiNewspaper,
  mdiAccountMultipleOutline,
  mdiDomain,
  mdiAccountSwitch,
} from '@mdi/js'
let navigation = [
  {
    title: 'dashboard',
    icon: mdiHomeOutline,
    to: 'admin-dashboard',
    action:'view',
    resource:'dashboard'
  },
  {
    subheader:'management'
  },
  {
    title: 'user_management',
    icon: mdiAccountMultipleOutline ,
    action: 'view',
    resource: 'user_management',
    children: [
      {
        title: 'administrators',
        to: 'admin-users-admins',
        icon: mdiAccountMultipleOutline,
      },
      {
        title: 'employee',
        to: 'admin-users-employee',
        icon: mdiDomain,
        action: 'view',
        resource: 'employee'
      }
    ],
  },

  {
    title: 'activities',
    icon: mdiAccountSwitch,
    to: 'admin-users-activities',
  },
  {
    subheader:'admin_settings'
  },
  {
    title: 'chat',
    to:'admin-chat',
    badge:true,
    badgeName:'chatsNr',
    badgeColor:'error',
    icon: mdiForumOutline,
    action:'view',
    resource:'projects'
  },
  {
    title: 'news',
    to:'admin-blogs',
    icon: mdiNewspaper,
    action:'view',
    resource:'news'
  },
];

export default navigation;
