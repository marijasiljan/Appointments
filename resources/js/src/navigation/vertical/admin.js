import {
  mdiHomeOutline,
  mdiCalendarMonth ,
  mdiAlarm,
  mdiAccountMultipleOutline,
  mdiCalendarAccount,
  mdiAccountSwitch,
  mdiAccountSettings, mdiAccountCash,
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
    action: 'none',
    resource: 'user_management',
    children: [
      {
        title: 'clients',
        action: 'view',
        to: 'admin-users-clients',
        icon: mdiAccountSwitch,
      },
      {
        title: 'employee',
        to: 'admin-users-employee',
        icon: mdiAccountSwitch,
        action: 'view',
      }
    ],
  },
  {
    title: 'appointments',
    action:'view',
    icon: mdiCalendarMonth,
    to: 'admin-appointments',
  },
  {
    title: 'Availability',
    icon: mdiCalendarAccount,
    action: 'none',
    children:
        [
          {
            title: 'Availability',
            icon: mdiCalendarAccount,
            to: 'admin-availability-list',
            action: 'view',
          },
          {
            title: 'Availability Generator',
            icon: mdiAlarm,
            to: 'admin-availability',
            action: 'view',
          },
    ]
  },
  {
    title: 'services',
    action:'view',
    icon: mdiAccountSettings,
    to: 'admin-services',
  },
  {
    subheader:'admin_settings'
  },
  {
    title: 'price',
    to:'admin-price',
    icon: mdiAccountCash,
    action: 'view',
  },
];

export default navigation;
