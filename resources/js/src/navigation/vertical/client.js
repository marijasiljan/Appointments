import {
  mdiAccountSwitch,
  mdiCalendarOutline,
  mdiClipboardListOutline,
  mdiClipboardSearchOutline,
  mdiForumOutline,
  mdiHomeOutline,
  mdiInboxMultipleOutline,
  mdiClipboardPlusOutline,
  mdiFileOutline,
} from '@mdi/js'

let navigation = [
  {
    title: 'my_panel',
    icon: mdiHomeOutline,
    to: 'employee-dashboard',
    action:'view',
    resource:'dashboard'
  },
  {
    title: 'templates',
    to:'employee-templates',
    icon: mdiClipboardSearchOutline,
    action:'view',
    resource:'templates'
  },

  {
    title: 'chat',
    to:'employee-chat',
    badge:true,
    badgeColor:'error',
    badgeName:'chatsNr',
    icon: mdiForumOutline,
    action:'view',
    resource:'chat'
  },
];

export default navigation;
