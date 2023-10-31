import {  mdiHomeOutline } from '@mdi/js'

let navigation = [
  {
    title: 'Please log-in first',
    icon: mdiHomeOutline,
    to: {name:'auth-login'},
    isVisible:true,
  }
];

export default navigation;
