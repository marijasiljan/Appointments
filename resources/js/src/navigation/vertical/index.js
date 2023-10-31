import adminNavigation from './admin';
import clientNavigation from './client';
import noAuthNavigation from './no-auth';
let navigation = [];

if(user != null){
  if(user.role == 'admin') {
      navigation = adminNavigation;
  }
  if(user.role == 'client') {
    navigation = clientNavigation;
  }
}else{
  navigation = noAuthNavigation;
}

export default navigation;
