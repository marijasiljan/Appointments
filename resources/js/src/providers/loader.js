window.globalRefCount = 0
window.globalIsLoading = false


window.setLoading = function(loading,request){
  let path;
  if(request != undefined){
    if(loading){
      path = request.url
      let disabledButtons = store.getters.getDisabledButtons
      if(disabledButtons.findIndex(db=> db == path) == -1){
        disabledButtons.push(path)
      }
      store.dispatch('updateDisabledButtons',disabledButtons)
    }else{
      path = request.config.url
      let disabledButtons = store.getters.getDisabledButtons
      if(disabledButtons.findIndex(db=> db == path) != -1){
        disabledButtons.splice(disabledButtons.findIndex(db=> db == path),1)
        store.dispatch('updateDisabledButtons',disabledButtons)
      }
    }
  }

  if (loading) {
    window.globalRefCount++;
    window.globalIsLoading = true;
  } else if (window.globalRefCount > 0) {
    window.globalRefCount--;
    window.globalIsLoading = (window.globalRefCount > 0);
  }
}

