import Vue from 'vue'

window.flashMsg = Vue.prototype.flashMsg = function(type,msg){
  swal.fire({
    position: 'top-end',
    icon: type,
    title: msg,
    showConfirmButton: false,
    timer: 3500,
    toast:true,
    backdrop:false,
  })
}

window.popUpAlert = Vue.prototype.popUpAlert = function(type,msg) {
  swal.fire({
    title: msg,
    icon: type,
    showConfirmButton: false,
    timer: 2000
  })
}

window.focusAlert = Vue.prototype.focusAlert = function({title='',text= null,showCloseButton = true,showCancelButton = true}){
  swal.fire({
    title: '<strong>'+title+'</strong>',
    icon: 'warning',
    html:text,
    showCloseButton: showCloseButton,
    showCancelButton: showCancelButton,
    focusConfirm: false
  })
}

window.errorResponseMsg = function(response){
  let text = '';
  for (const [key, value] of Object.entries(response.errors)) {
    value.forEach(item => {
      text += '<li>'+item+'</li>'
    })
  }

  swal.fire({
    title: '<strong>'+response.message+'</strong>',
    icon: 'info',
    html:text,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false
  })
}

window.confirmAlert = Vue.prototype.confirmAlert = async function(
  {
    title= 'are_you_sure',
    subtitle=false,
    icon='warning',
    confirmButtonText = 'yes',
    cancelButtonText='cancel',
    afterConfirmText='action_performed_succesfully',
    confirmButtonParams={},
    cancelButtonParams = {},
  } = {}){
  let response = false;

  await swal.fire({
    title: i18n.t(title),
    text: i18n.t(subtitle),
    icon: icon,
    showCancelButton: true,
    confirmButtonColor: '#269acc',
    cancelButtonColor: '#aaa',
    confirmButtonText: i18n.t(confirmButtonText,confirmButtonParams),
    cancelButtonText: i18n.t(cancelButtonText,cancelButtonParams),
  }).then(async (result) => {
  let res = await result;
    response = res.isConfirmed;
    if(response){
      if(afterConfirmText != false)
        flashMsg('success', i18n.t(afterConfirmText))
    }

  })

  return response;
}

