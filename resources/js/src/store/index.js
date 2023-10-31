import appConfigStoreModule from '@core/@app-config/appConfigStoreModule'
import createPersistedState from "vuex-persistedstate";
import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
import SecureLS from "secure-ls";
let ls = new SecureLS({ isCompression: false });

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key),
    },
  })],
  state: {
    user:null,
    token:null,
    simpleLoading:false,
    fullLoading:false,
    chatsNr:0,
    disabledButtons:[]
  },
  getters:{
    getDisabledButtons: state => {
      return state.disabledButtons;
    },
    getUser: state => {
      return state.user;
    },
    getLogInBack: state => {
      return state.logInBack;
    },
    getToken: state => {
      return state.token;
    },
    getSimpleLoading: state => {
      return state.simpleLoading
    },
    getFullLoading: state => {
      return state.fullLoading
    },
    getChatsNr: state => {
      return state.chatsNr
    },
  },
  actions: {
    async updateDisabledButtons(context, payload){
      await context.commit('updateDisabledButtonsHandler', payload);
    },
    async updateUser(context, payload){
      await context.commit('updateUserHandler', payload);
    },
    async updateLogInBack(context, payload){
      await context.commit('updateLogInBackHandler', payload);
    },
    async updateToken(context, payload){
      await context.commit('updateTokenHandler', payload);
    },
    async updateLang(context, payload){
      await context.commit('updateLangHandler', payload);
    },
    async setSimpleLoader(context, payload){
      await context.commit('setSimpleLoaderHandler', payload);
    },
    async setFullLoader(context, payload){
      await context.commit('setFullLoaderHandler', payload);
    },
    async setChatsNr(context, payload){
      await context.commit('setChatsNrHandler', payload);
    },
  },
  mutations: {
    updateDisabledButtonsHandler(state,disabledButtonsData) {
      state.disabledButtons = disabledButtonsData
    },
    updateUserHandler(state,userData) {
      state.user = userData
      Vue.prototype.user = window.user = state.user;
      Vue.prototype.user = window.user = store.getters.getUser
    },
    updateTokenHandler(state,token) {
      state.token = token
    },
    updateLogInBackHandler(state,data) {
      state.logInBack = data
    },
    setSimpleLoaderHandler(state,status) {
      state.simpleLoading = status
    },
    setFullLoaderHandler(state,status) {
      state.fullLoading = status
    },
    setChatsNrHandler(state,nr) {
      state.chatsNr += nr
    },
  },

  modules: {
    appConfig: appConfigStoreModule,
    app,
  },
})
