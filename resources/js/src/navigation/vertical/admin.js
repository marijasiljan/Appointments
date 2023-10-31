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
        title: 'clients',
        to: 'admin-users-clients',
        icon: mdiDomain,
      },
      {
        title: 'employee',
        to: 'admin-users-employee',
        icon: mdiDomain,
        // action: 'view',
      }
    ],
  },

  {
    title: 'appointments',
    icon: mdiAccountSwitch,
    to: 'admin-appointments',
    children:
        [
         {
      title: 'booking_times',
      icon: mdiAccountSwitch,
      to: 'admin-booking_times',
    }
    ]
  },
  {
    title: 'services',
    icon: mdiAccountSwitch,
    to: 'admin-services',
  },
  {
    subheader:'admin_settings'
  },
  {
    title: 'affiliates',
    to:'admin-affiliates',
    // badge:true,
    // badgeName:'chatsNr',
    // badgeColor:'error',
    icon: mdiForumOutline,
    // action:'view',
    // resource:'projects'
  },
  {
    title: 'Prices',
    to:'admin-prices',
    icon: mdiNewspaper,
  },
];

export default navigation;
