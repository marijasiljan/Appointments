import {
  mdiHomeOutline,
  mdiCalendar,
  mdiAlarm,
  mdiAccountMultipleOutline,
  mdiDomain,
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
    icon: mdiCalendar,
    to: 'admin-appointments',
    children:
        [
          {
            title: 'appointments',
            icon: mdiCalendar,
            to: 'admin-appointments',
            action: 'view',
          },
          {
            title: 'availability',
            icon: mdiCalendar,
            to: 'admin-availability',
            action: 'view',
          },
         {
            title: 'Booking Time Slots',
            icon: mdiAlarm,
            to: 'admin-booking_times',
            action: 'view',
    }
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
