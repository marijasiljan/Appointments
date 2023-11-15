/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import Vue from "vue";
window.baseUrl = 'https://appointment.mangosoft.mk';
window.baseV = 'V1';
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//Laravel backend system version
window.axios.defaults.headers.common['api-version'] = baseV;

window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;

window.axios.defaults.headers.common['language'] = window.user?.lang ?? 'de';
window.axios.defaults.headers.common['Accept'] = 'application/json';
// window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.state.token ?? '';
window.axios.defaults.headers.common['Authorization'] =  store.state.token ?? '';
window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = true
// window.axios.defaults.baseURL = window.location.origin+'/api';
window.axios.defaults.baseURL = baseUrl+'/api';
const isButtonLoadingFunction = (path) => {
  let disabledButtons = store.getters.getDisabledButtons
  if(disabledButtons.findIndex(db=> db == path) != -1){
    return true
  }else{
    return false
  }
}
window.isButtonLoading = Vue.prototype.isButtonLoading = isButtonLoadingFunction
// Step-2: Create request, response & error handlers
const requestHandler = request => {
  // request.headers.Authorization = 'Bearer ...';
  // custom changes here before you send the request to the api
  if(store.getters.getToken == 'expired'){
    return Promise.reject()
  }
  setLoading(true,request)
  return request;
};

const responseHandler = response => {
  setLoading(false,response)
  if (response.status === 401) {
    flashMsg('error', 'Unauthorised')
    window.location = '/login';
    // router.push({name: 'not-authorized'})
  }
  if (response.status === 404) {
    flashMsg('error','not_found')
    window.location =  '/error-404';
  }
  return response;
};

const errorHandler = error => {
  setLoading(false,error)
  // if(error.response.status == 404){
  //   window.location = '/admin/404';
  // }
  if(store.getters.getToken != 'expired') {
      flashMsg('error', error.response?.data.message ? error.response.data.message : 'Error, contact admin!')
  }
  if (error.response.status === 401) {

    store.dispatch('updateUser',null)
    store.dispatch('updateToken','expired')
    window.location = '/login';
  }
  if (error.response.status === 404) {
    window.location =  '/error-404';
  }
  if(Vue.config.productionTip == false){
    if (error.response) {

      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);

      if(error.response.status == 422){
        // errorResponseMsg(error.response.data)
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  }
  store.dispatch('setFullLoader',false)
  store.dispatch('setSimpleLoader',false)
  return Promise.reject(error);
};

// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
window.axios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

window.axios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);


// handleError(error){
//   if (error === 401){
//     // do logout
//     //clear storage
//     //...
//   }
// }
