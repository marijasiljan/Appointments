(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_admin_AdminChat_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/components/common/Breadcrumbs.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/components/common/Breadcrumbs.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");

//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  name: "Breadcrumbs",
  setup: function setup(props) {
    var openLink = function openLink(item) {
      router.push(item.link);
    };
    return {
      openLink: openLink,
      icons: {
        mdiHomeOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_1__.mdiHomeOutline
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/admin/AdminChat.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/admin/AdminChat.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chat_Chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chat/Chat */ "./resources/js/src/views/chat/Chat.vue");
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "admin-chat",
  components: {
    Chat: _chat_Chat__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/Chat.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/Chat.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Riste_Desktop_MANGOSOFT_Appointments_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_Users_Riste_Desktop_MANGOSOFT_Appointments_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_comp_functions_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/comp-functions/ui */ "./resources/js/src/@core/comp-functions/ui.js");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue2-perfect-scrollbar */ "./node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.umd.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _vueuse_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @vueuse/core */ "./node_modules/@vueuse/shared/dist/index.esm.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/utils */ "./resources/js/src/@core/utils/index.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _modules_chatStoreModule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/chatStoreModule */ "./resources/js/src/views/chat/modules/chatStoreModule.js");
/* harmony import */ var _modules_useChat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/useChat */ "./resources/js/src/views/chat/modules/useChat.js");
/* harmony import */ var _ChatLeftSidebarContent_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ChatLeftSidebarContent.vue */ "./resources/js/src/views/chat/ChatLeftSidebarContent.vue");
/* harmony import */ var _ChatUserProfileSidebarContent_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ChatUserProfileSidebarContent.vue */ "./resources/js/src/views/chat/ChatUserProfileSidebarContent.vue");
/* harmony import */ var _ChatActiveChatUserProfileSidebarContent_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ChatActiveChatUserProfileSidebarContent.vue */ "./resources/js/src/views/chat/ChatActiveChatUserProfileSidebarContent.vue");
/* harmony import */ var _ChatLog_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ChatLog.vue */ "./resources/js/src/views/chat/ChatLog.vue");
/* harmony import */ var _components_common_Breadcrumbs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/common/Breadcrumbs */ "./resources/js/src/components/common/Breadcrumbs.vue");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


// eslint-disable-next-line object-curly-newline











// Local Components






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'chat',
  components: {
    PerfectScrollbar: vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbar,
    ChatLog: _ChatLog_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    // Local Components
    ChatLeftSidebarContent: _ChatLeftSidebarContent_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    ChatUserProfileSidebarContent: _ChatUserProfileSidebarContent_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    ChatActiveChatUserProfileSidebarContent: _ChatActiveChatUserProfileSidebarContent_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    Breadcrumbs: _components_common_Breadcrumbs__WEBPACK_IMPORTED_MODULE_15__["default"]
  },
  setup: function setup(_, context) {
    var _useChat = (0,_modules_useChat__WEBPACK_IMPORTED_MODULE_10__["default"])(),
      resolveAvatarBadgeVariant = _useChat.resolveAvatarBadgeVariant;
    var $vuetify = (0,_core_utils__WEBPACK_IMPORTED_MODULE_6__.getVuetify)();
    var _useRouter = (0,_core_utils__WEBPACK_IMPORTED_MODULE_6__.useRouter)(),
      route = _useRouter.route;
    var chatInputAttachmentKey = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.ref)('init');
    var _useResponsiveLeftSid = (0,_core_comp_functions_ui__WEBPACK_IMPORTED_MODULE_3__.useResponsiveLeftSidebar)({
        sidebarWidth: 374
      }),
      isLeftSidebarOpen = _useResponsiveLeftSid.isLeftSidebarOpen,
      contentStyles = _useResponsiveLeftSid.contentStyles;
    var filteredChatList = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.ref)([]);
    var findChat = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.ref)(false);
    var leftSideBar = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.ref)(null);
    // * Store module Registration
    var CHAT_APP_STORE_MODULE_NAME = 'app-chat';

    // Register module
    if (!_store__WEBPACK_IMPORTED_MODULE_8__["default"].hasModule(CHAT_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_8__["default"].registerModule(CHAT_APP_STORE_MODULE_NAME, _modules_chatStoreModule__WEBPACK_IMPORTED_MODULE_9__["default"]);

    // UnRegister on leave
    (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.onUnmounted)(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_8__["default"].hasModule(CHAT_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_8__["default"].unregisterModule(CHAT_APP_STORE_MODULE_NAME);
    });

    // Scroll to Bottom ChatLog
    var refChatLogPS = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.ref)(null);
    var scrollToBottomInChatLog = function scrollToBottomInChatLog() {
      var _refChatLogPS$value;
      var scrollEl = ((_refChatLogPS$value = refChatLogPS.value) === null || _refChatLogPS$value === void 0 ? void 0 : _refChatLogPS$value.$el) || refChatLogPS.value;
      if (scrollEl != null) scrollEl.scrollTop = scrollEl.scrollHeight;
    };

    // ————————————————————————————————————
    //* ——— User Profile Sidebar
    // ————————————————————————————————————
    // ? Will contain all details of profile user (e.g. settings, about etc.)
    var profileUserData = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.ref)({});

    // ? Will contain id, name and avatar & status
    var profileUserDataMinimal = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.ref)({});
    var isUserProfileSidebarOpen = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.ref)(false);

    // * One time watch for fetching user profile sidebar data
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_17__.invoke)( /*#__PURE__*/(0,C_Users_Riste_Desktop_MANGOSOFT_Appointments_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,C_Users_Riste_Desktop_MANGOSOFT_Appointments_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      return (0,C_Users_Riste_Desktop_MANGOSOFT_Appointments_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_17__.until)(isUserProfileSidebarOpen).toBe(true);
          case 2:
            profileUserData.value = _store__WEBPACK_IMPORTED_MODULE_8__["default"].state.user;
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));

    // ————————————————————————————————————
    //* ——— Chats & Contacts
    // ————————————————————————————————————
    var chatsContacts = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.ref)([]);
    var archivedChatsContacts = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.ref)([]);
    var fetchChatAndContacts = function fetchChatAndContacts() {
      _store__WEBPACK_IMPORTED_MODULE_8__["default"].dispatch('app-chat/fetchChatsAndContacts').then(function (response) {
        _store__WEBPACK_IMPORTED_MODULE_8__["default"].dispatch('setChatsNr', -_store__WEBPACK_IMPORTED_MODULE_8__["default"].getters.getChatsNr);
        filteredChatList.value = response.data.data.chatList;
        chatsContacts.value = response.data.data.chats;
        archivedChatsContacts.value = response.data.data.archivedChats;
        profileUserDataMinimal.value = _store__WEBPACK_IMPORTED_MODULE_8__["default"].state.user;
        Echo["private"]("tenant.".concat(tenant_id, ".chatsAndAlerts.").concat(profileUserDataMinimal.value.id)).listen('.chatNewMessagesEvent', function (e) {
          var contact = chatsContacts.value.find(function (c) {
            return c.id == e.chat_id;
          });
          if (!contact) {
            contact = archivedChatsContacts.value.find(function (c) {
              return c.id == e.chat_id;
            });
          }
          if (contact && activeChat.value.id != contact.id) {
            if (contact.unseenMsgs == null) contact.unseenMsgs = 1;else contact.unseenMsgs += 1;
          }
        });
      });
    };
    fetchChatAndContacts();

    // ————————————————————————————————————
    //* ——— Single Chat
    // ————————————————————————————————————

    var file = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.ref)(null);
    var activeChat = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.ref)({});
    var chatInputMessage = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.ref)('');
    var openChatOfContact = function openChatOfContact(chatId) {
      if (activeChat.value.user) {
        Echo["private"]("tenant.".concat(tenant_id, ".chat.").concat(activeChat.value.id)).stopListening('.chatEvent');
      }
      chatInputMessage.value = '';
      _store__WEBPACK_IMPORTED_MODULE_8__["default"].dispatch('app-chat/getChat', {
        chatId: chatId
      }).then(function (response) {
        Echo["private"]("tenant.".concat(tenant_id, ".chat.").concat(chatId)).listen('.chatEvent', function (e) {
          if (e.data.message) chatListener(e.data.message);else updateReadMessages(e.data);
        });
        activeChat.value = response.data.data;

        // Set unseenMsgs to 0
        var contact = chatsContacts.value.find(function (c) {
          return c.id === chatId;
        });
        if (!contact) {
          contact = archivedChatsContacts.value.find(function (c) {
            return c.id === chatId;
          });
          if (contact) {
            leftSideBar.value.tab = 1;
          }
        } else {
          leftSideBar.value.tab = 0;
        }
        if (contact) {
          contact.unseenMsgs = 0;
          contact.chat = response.data.data.chat;
        }

        // Scroll to bottom
        (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.nextTick)(function () {
          scrollToBottomInChatLog();
        });
      });

      // if smAndDown =>  Close Chat & Contacts left sidebar
      if ($vuetify.breakpoint.smAndDown) isLeftSidebarOpen.value = false;
    };
    (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.onMounted)(function () {
      if (route.value.query.chat) {
        openChatOfContact(route.value.query.chat);
      }
    });
    var sendMessage = function sendMessage() {
      file.value = context.refs.file.$refs.input.files[0];
      if (!chatInputMessage.value && file.value == undefined) return;
      var payload = {
        chatId: activeChat.value.id,
        message: chatInputMessage.value,
        file: file.value
      };
      _store__WEBPACK_IMPORTED_MODULE_8__["default"].dispatch('setSimpleLoader', true);
      _store__WEBPACK_IMPORTED_MODULE_8__["default"].dispatch('app-chat/sendMessage', payload).then(function (response) {
        var newMessageData = response.data.data;
        if (newMessageData.length > 0) {
          newMessageData.forEach(function (i) {
            activeChat.value.chat.push(i);
          });
        } else {
          activeChat.value.chat.push(newMessageData);
        }
        chatInputMessage.value = '';
        file.value = null;
        _store__WEBPACK_IMPORTED_MODULE_8__["default"].dispatch('setSimpleLoader', false);
        var chat = chatsContacts.value.find(function (c) {
          return c.id === activeChat.value.id;
        });
        if (!chat) {
          chat = archivedChatsContacts.value.find(function (c) {
            return c.id === activeChat.value.id;
          });
        }
        if (chat) chat.lastMessage = newMessageData;
        chatInputAttachmentKey.value = Math.random();
        (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.nextTick)(function () {
          scrollToBottomInChatLog();
        });
      });
    };
    var chatListener = function chatListener(data) {
      if (data) {
        if (activeChat.value != null && activeChat.value.id == data.chat_id && data.senderId != user.id) {
          activeChat.value.chat.push(data);
        }
        var chat = chatsContacts.value.find(function (c) {
          return c.id === activeChat.value.id;
        });
        if (!chat) {
          chat = archivedChatsContacts.value.find(function (c) {
            return c.id === activeChat.value.id;
          });
        }
        if (chat) chat.lastMessage = data;
        (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.nextTick)(function () {
          scrollToBottomInChatLog();
        });
      }
    };
    var updateReadMessages = function updateReadMessages(data) {
      if (data) {
        if (activeChat.value != null && activeChat.value.id == data.chat_id) {
          var currentChat = chatsContacts.value.find(function (c) {
            return c.id === activeChat.value.id;
          });
          if (!currentChat) {
            currentChat = archivedChatsContacts.value.find(function (c) {
              return c.id === activeChat.value.id;
            });
          }
          if (currentChat) {
            currentChat.chat[currentChat.chat.length - 1].feedback = {
              isDelivered: true,
              isRead: true,
              isSent: true
            };
          }
        }
        (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.nextTick)(function () {
          scrollToBottomInChatLog();
        });
      }
    };
    function openChat(tmpUser, type) {
      //type 1 == company (has user as relation), 0 => admin (direct user)
      var user_id = type == 1 ? tmpUser.user.id : tmpUser.id;
      var contact = chatsContacts.value.find(function (c) {
        return c.userId === user_id;
      });
      if (!contact) {
        contact = archivedChatsContacts.value.find(function (c) {
          return c.userId === user_id;
        });
        if (contact) {
          leftSideBar.value.tab = 1;
        } else {
          var path = '/chats/' + user_id;
          axios.put(path).then( /*#__PURE__*/function () {
            var _ref2 = (0,C_Users_Riste_Desktop_MANGOSOFT_Appointments_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,C_Users_Riste_Desktop_MANGOSOFT_Appointments_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2(response) {
              return (0,C_Users_Riste_Desktop_MANGOSOFT_Appointments_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(response.data.status == true)) {
                      _context2.next = 4;
                      break;
                    }
                    _context2.next = 3;
                    return fetchChatAndContacts();
                  case 3:
                    openChatOfContact(response.data.data.chat_id);
                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }())["catch"](function (error) {
            return console.log('error', error);
          });
          return;
        }
      } else {
        leftSideBar.value.tab = 0;
      }
      openChatOfContact(contact.id);
    }

    // ————————————————————————————————————
    //* ——— Active Chat
    // ————————————————————————————————————

    var isActiveChatUserProfileSidebarOpen = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_16__.ref)(false);

    // Open Sidebar in smAndDown when "start conversation" is clicked
    var startConversation = function startConversation() {
      if ($vuetify.breakpoint.mdAndUp) return;
      isLeftSidebarOpen.value = true;
    };
    startConversation();

    // Perfect scrollbar options
    var perfectScrollbarOptions = {
      maxScrollbarLength: 60,
      wheelPropagation: false
    };
    return {
      // useChat
      resolveAvatarBadgeVariant: resolveAvatarBadgeVariant,
      filteredChatList: filteredChatList,
      openChat: openChat,
      // Layout
      isLeftSidebarOpen: isLeftSidebarOpen,
      contentStyles: contentStyles,
      // Templare ref
      chatInputAttachmentKey: chatInputAttachmentKey,
      refChatLogPS: refChatLogPS,
      // User Profile Sidebar
      profileUserDataMinimal: profileUserDataMinimal,
      profileUserData: profileUserData,
      isUserProfileSidebarOpen: isUserProfileSidebarOpen,
      // Chat & Contacts
      chatsContacts: chatsContacts,
      archivedChatsContacts: archivedChatsContacts,
      // Single Chat
      file: file,
      activeChat: activeChat,
      chatInputMessage: chatInputMessage,
      openChatOfContact: openChatOfContact,
      sendMessage: sendMessage,
      // Active Chat
      isActiveChatUserProfileSidebarOpen: isActiveChatUserProfileSidebarOpen,
      // startConversation
      startConversation: startConversation,
      // Perfect Scrollbar
      perfectScrollbarOptions: perfectScrollbarOptions,
      // Filter
      avatarText: _core_utils_filter__WEBPACK_IMPORTED_MODULE_7__.avatarText,
      findChat: findChat,
      leftSideBar: leftSideBar,
      name: _themeConfig__WEBPACK_IMPORTED_MODULE_5__["default"].app.name,
      icons: {
        mdiChatPlusOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_18__.mdiChatPlusOutline,
        mdiMenu: _mdi_js__WEBPACK_IMPORTED_MODULE_18__.mdiMenu,
        mdiMessageTextOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_18__.mdiMessageTextOutline,
        mdiPhone: _mdi_js__WEBPACK_IMPORTED_MODULE_18__.mdiPhone,
        mdiVideoOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_18__.mdiVideoOutline,
        mdiMagnify: _mdi_js__WEBPACK_IMPORTED_MODULE_18__.mdiMagnify,
        mdiDotsVertical: _mdi_js__WEBPACK_IMPORTED_MODULE_18__.mdiDotsVertical,
        mdiAttachment: _mdi_js__WEBPACK_IMPORTED_MODULE_18__.mdiAttachment,
        mdiMicrophone: _mdi_js__WEBPACK_IMPORTED_MODULE_18__.mdiMicrophone,
        mdiSendOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_18__.mdiSendOutline
      },
      breadcrumbsItems: [{
        text: 'dashboard',
        disabled: false,
        link: {
          name: user.role + '-dashboard'
        },
        icon: 'mdiHomeOutline'
      }, {
        text: 'chat',
        disabled: true,
        link: null
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatActiveChatUserProfileSidebarContent.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatActiveChatUserProfileSidebarContent.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _core_utils_vuetify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/vuetify */ "./resources/js/src/@core/utils/vuetify.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-perfect-scrollbar */ "./node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.umd.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
/* harmony import */ var _modules_useChat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/useChat */ "./resources/js/src/views/chat/modules/useChat.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// eslint-disable-next-line object-curly-newline





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PerfectScrollbar: vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__.PerfectScrollbar
  },
  props: {
    profileUserData: {
      type: Object,
      required: true
    }
  },
  setup: function setup() {
    var _useChat = (0,_modules_useChat__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      resolveAvatarBadgeVariant = _useChat.resolveAvatarBadgeVariant;
    var _useVuetify = (0,_core_utils_vuetify__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      rootThemeClasses = _useVuetify.rootThemeClasses;
    var userStatusRadioOptions = [{
      title: 'Online',
      value: 'online',
      color: 'success'
    }, {
      title: 'Away',
      value: 'away',
      color: 'warning'
    }, {
      title: 'Do not disturb',
      value: 'busy',
      color: 'error'
    }, {
      title: 'Offline',
      value: 'offline',
      color: 'secondary'
    }];

    // Perfect scrollbar options
    var perfectScrollbarOptions = {
      maxScrollbarLength: 60,
      wheelPropagation: false
    };
    return {
      // useChat
      resolveAvatarBadgeVariant: resolveAvatarBadgeVariant,
      userStatusRadioOptions: userStatusRadioOptions,
      // Perfect Scrollbar
      perfectScrollbarOptions: perfectScrollbarOptions,
      // Vuetify
      rootThemeClasses: rootThemeClasses,
      // Filter
      avatarText: _core_utils_filter__WEBPACK_IMPORTED_MODULE_2__.avatarText,
      // Icons
      icons: {
        mdiClose: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiClose,
        mdiEmailOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiEmailOutline,
        mdiBookmarkOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiBookmarkOutline,
        mdiPhoneOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiPhoneOutline,
        mdiClockOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiClockOutline,
        mdiStarOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiStarOutline,
        mdiImageOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiImageOutline,
        mdiTrashCanOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiTrashCanOutline,
        mdiBlockHelper: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiBlockHelper
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatContact.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatContact.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
/* harmony import */ var _modules_useChat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/useChat */ "./resources/js/src/views/chat/modules/useChat.js");
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    chat: {
      type: Object,
      required: true
    },
    isChatContact: {
      type: Boolean,
      "default": false
    },
    isActive: {
      type: Boolean,
      "default": false
    }
  },
  setup: function setup() {
    var _useChat = (0,_modules_useChat__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      resolveAvatarBadgeVariant = _useChat.resolveAvatarBadgeVariant;
    return {
      formatDateToMonthShort: _core_utils_filter__WEBPACK_IMPORTED_MODULE_0__.formatDateToMonthShort,
      resolveAvatarBadgeVariant: resolveAvatarBadgeVariant,
      avatarText: _core_utils_filter__WEBPACK_IMPORTED_MODULE_0__.avatarText,
      name: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].app.name,
      icons: {
        mdiArchiveOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_3__.mdiArchiveOutline
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatLeftSidebarContent.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatLeftSidebarContent.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-perfect-scrollbar */ "./node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.umd.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
/* harmony import */ var _ChatContact_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatContact.vue */ "./resources/js/src/views/chat/ChatContact.vue");
/* harmony import */ var _modules_useChat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/useChat */ "./resources/js/src/views/chat/modules/useChat.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







// import {
//   setTimeout
// } from "../../../../../public/backend/assets/plugins/custom/tinymce/tinymce.bundle";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PerfectScrollbar: vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__.PerfectScrollbar,
    ChatContact: _ChatContact_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    chatsContacts: {
      type: Array,
      required: true
    },
    archivedChatsContacts: {
      type: Array,
      required: true
    },
    activeChatContactId: {
      type: Number,
      "default": null
    },
    profileUserMinimalData: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var _useChat = (0,_modules_useChat__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      resolveAvatarBadgeVariant = _useChat.resolveAvatarBadgeVariant;
    var tab = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.ref)(0);
    var primary_tab = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.ref)('chats');
    var secondary_tab = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.ref)('archived');

    // Search Query
    var searchQuery = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.ref)('');
    var searchFilterFunction = function searchFilterFunction(chat) {
      return chat.user.name.toLowerCase().includes(searchQuery.value.toLowerCase());
    };
    var filteredChatsContacts = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.computed)(function () {
      return props.chatsContacts.filter(searchFilterFunction);
    });
    var filteredArchivedChatsContacts = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.computed)(function () {
      return props.archivedChatsContacts.filter(searchFilterFunction);
    });

    // Perfect scrollbar options
    var perfectScrollbarOptions = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
      wheelSpeed: 0.7
    };
    function changeLeftSidebarContent() {
      tab.value = !tab.value;
      var tmp_tab = primary_tab.value;
      primary_tab.value = secondary_tab.value;
      secondary_tab.value = tmp_tab;
    }
    function archiveChat(chat_id) {
      axios["delete"]("/chats/" + chat_id).then(function (response) {
        if (response.data.status == true) {
          if (tab.value == 0 && response.data.data == 0) {
            var chat = props.chatsContacts.find(function (c) {
              return c.id == chat_id;
            });
            props.chatsContacts.splice(props.chatsContacts.indexOf(chat), 1);
            props.archivedChatsContacts.unshift(chat);
          } else if (tab.value == 1 && response.data.data) {
            var _chat = props.archivedChatsContacts.find(function (c) {
              return c.id == chat_id;
            });
            props.archivedChatsContacts.splice(props.archivedChatsContacts.indexOf(_chat), 1);
            props.chatsContacts.unshift(_chat);
            changeLeftSidebarContent();
          }
        } else {
          flashMsg('error', response.data.message);
        }
      });
    }
    return {
      // Use Chat
      tab: tab,
      primary_tab: primary_tab,
      secondary_tab: secondary_tab,
      resolveAvatarBadgeVariant: resolveAvatarBadgeVariant,
      changeLeftSidebarContent: changeLeftSidebarContent,
      archiveChat: archiveChat,
      // Search
      searchQuery: searchQuery,
      filteredChatsContacts: filteredChatsContacts,
      filteredArchivedChatsContacts: filteredArchivedChatsContacts,
      // Perfect Scrollbar options
      perfectScrollbarOptions: perfectScrollbarOptions,
      // Filter
      avatarText: _core_utils_filter__WEBPACK_IMPORTED_MODULE_1__.avatarText,
      // Icons
      icons: {
        mdiMagnify: _mdi_js__WEBPACK_IMPORTED_MODULE_5__.mdiMagnify,
        mdiClose: _mdi_js__WEBPACK_IMPORTED_MODULE_5__.mdiClose
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatLog.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatLog.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    chatData: {
      type: Object,
      required: true
    },
    profileUserAvatar: {
      type: String,
      required: true
    }
  },
  setup: function setup(props) {
    var formattedChatData = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__.computed)(function () {
      var otherUser = {
        id: props.chatData.user.id,
        name: props.chatData.user.name,
        avatar: props.chatData.user.profile_picture
      };
      var chatLog = [];
      if (props.chatData.chat) {
        chatLog = props.chatData.chat;
      }
      var formattedChatLog = [];
      var chatMessageSenderId = chatLog[0] ? chatLog[0].senderId : undefined;
      var msgGroup = {
        senderId: chatMessageSenderId,
        messages: []
      };
      chatLog.forEach(function (msg, index) {
        if (chatMessageSenderId === msg.senderId) {
          msgGroup.messages.push({
            fileName: msg.fileName,
            isFile: msg.isFile,
            msg: msg.message,
            time: msg.time,
            feedback: msg.feedback
          });
        } else {
          chatMessageSenderId = msg.senderId;
          formattedChatLog.push(msgGroup);
          msgGroup = {
            senderId: msg.senderId,
            messages: [{
              fileName: msg.fileName,
              isFile: msg.isFile,
              msg: msg.message,
              time: msg.time,
              feedback: msg.feedback
            }]
          };
        }
        if (index === chatLog.length - 1) formattedChatLog.push(msgGroup);
      });
      return {
        formattedChatLog: formattedChatLog,
        otherUser: otherUser,
        profileUserAvatar: props.profileUserAvatar
      };
    });

    // Feedback icon
    var resolveFeedbackIcon = function resolveFeedbackIcon(feedback) {
      if (feedback.isRead) return {
        icon: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiCheckAll,
        color: 'success'
      };
      if (feedback.isDelivered) return {
        icon: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiCheckAll,
        color: null
      };
      return {
        icon: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiCheck,
        color: null
      };
    };
    return {
      formattedChatData: formattedChatData,
      tenantName: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].app.name,
      // Filter
      formatDate: _core_utils_filter__WEBPACK_IMPORTED_MODULE_1__.formatDate,
      avatarText: _core_utils_filter__WEBPACK_IMPORTED_MODULE_1__.avatarText,
      // Feedback Icon
      resolveFeedbackIcon: resolveFeedbackIcon,
      // Icons
      icons: {
        mdiCheck: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiCheck,
        mdiCheckAll: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiCheckAll
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatUserProfileSidebarContent.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatUserProfileSidebarContent.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _core_utils_vuetify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/vuetify */ "./resources/js/src/@core/utils/vuetify.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-perfect-scrollbar */ "./node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.umd.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_useChat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/useChat */ "./resources/js/src/views/chat/modules/useChat.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// eslint-disable-next-line object-curly-newline





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PerfectScrollbar: vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__.PerfectScrollbar
  },
  props: {
    profileUserData: {
      type: Object,
      required: true
    }
  },
  setup: function setup() {
    var _useChat = (0,_modules_useChat__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      resolveAvatarBadgeVariant = _useChat.resolveAvatarBadgeVariant;
    var _useVuetify = (0,_core_utils_vuetify__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      rootThemeClasses = _useVuetify.rootThemeClasses;
    var userStatusRadioOptions = [{
      title: 'Online',
      value: 'online',
      color: 'success'
    }, {
      title: 'Away',
      value: 'away',
      color: 'warning'
    }, {
      title: 'Do not disturb',
      value: 'busy',
      color: 'error'
    }, {
      title: 'Offline',
      value: 'offline',
      color: 'secondary'
    }];

    // Perfect scrollbar options
    var perfectScrollbarOptions = {
      maxScrollbarLength: 60,
      wheelPropagation: false
    };
    return {
      // useChat
      resolveAvatarBadgeVariant: resolveAvatarBadgeVariant,
      userStatusRadioOptions: userStatusRadioOptions,
      // Perfect Scrollbar
      perfectScrollbarOptions: perfectScrollbarOptions,
      // Vuetify
      rootThemeClasses: rootThemeClasses,
      // Filter
      avatarText: _core_utils_filter__WEBPACK_IMPORTED_MODULE_1__.avatarText,
      // Icons
      icons: {
        mdiClose: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiClose,
        mdiCheckCircleOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiCheckCircleOutline,
        mdiBellOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiBellOutline,
        mdiAccountOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiAccountOutline,
        mdiTrashCanOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiTrashCanOutline
      }
    };
  }
});

/***/ }),

/***/ "./resources/js/src/@core/comp-functions/ui.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/@core/comp-functions/ui.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _),
/* harmony export */   useResponsiveLeftSidebar: () => (/* binding */ useResponsiveLeftSidebar)
/* harmony export */ });
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils */ "./resources/js/src/@core/utils/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");


var useResponsiveLeftSidebar = function useResponsiveLeftSidebar(_ref) {
  var sidebarWidth = _ref.sidebarWidth;
  var isLeftSidebarOpen = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__.ref)(true);
  var $vuetify = (0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.getVuetify)();
  var setInitialValue = function setInitialValue() {
    if ($vuetify.breakpoint.smAndDown) isLeftSidebarOpen.value = false;else isLeftSidebarOpen.value = true;
  };

  // Set the initial value of sidebar
  setInitialValue();
  (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__.watch)(function () {
    return $vuetify.breakpoint.name;
  }, function () {
    // Reset left sidebar
    if ($vuetify.breakpoint.smAndDown) isLeftSidebarOpen.value = false;
    if ($vuetify.breakpoint.mdAndUp) isLeftSidebarOpen.value = true;
  });
  var contentStyles = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
    var styles = {};
    var marginDirection = $vuetify.rtl ? 'marginRight' : 'marginLeft';
    styles[marginDirection] = isLeftSidebarOpen.value && $vuetify.breakpoint.mdAndUp ? "".concat(sidebarWidth, "px") : null;
    return styles;
  });
  return {
    isLeftSidebarOpen: isLeftSidebarOpen,
    contentStyles: contentStyles
  };
};
var _ = {};

/***/ }),

/***/ "./resources/js/src/views/chat/modules/chatStoreModule.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/chat/modules/chatStoreModule.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import axios from '@axios'

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchChatsAndContacts: function fetchChatsAndContacts() {
      return new Promise(function (resolve, reject) {
        axios.get('/chats').then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    getChat: function getChat(ctx, _ref) {
      var chatId = _ref.chatId;
      return new Promise(function (resolve, reject) {
        axios.get("/chats/".concat(chatId)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    sendMessage: function sendMessage(ctx, _ref2) {
      var chatId = _ref2.chatId,
        message = _ref2.message,
        file = _ref2.file;
      return new Promise(function (resolve, reject) {
        var fd = new FormData();
        fd.append("file", file);
        fd.append("chatId", chatId);
        fd.append("message", message);
        axios.post("/chats/".concat(chatId), fd).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/chat/modules/useChat.js":
/*!********************************************************!*\
  !*** ./resources/js/src/views/chat/modules/useChat.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var resolveAvatarBadgeVariant = function resolveAvatarBadgeVariant(status) {
    if (status === 'online') return 'success';
    if (status === 'busy') return 'error';
    if (status === 'away') return 'warning';
    return 'secondary';
  };
  return {
    resolveAvatarBadgeVariant: resolveAvatarBadgeVariant
  };
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./node_modules/vuetify/src/components/VBreadcrumbs/VBreadcrumbs.sass":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./node_modules/vuetify/src/components/VBreadcrumbs/VBreadcrumbs.sass ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.theme--light.v-breadcrumbs .v-breadcrumbs__divider, .theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled {
  color: rgba(86, 103, 105, 0.38);
}

.theme--dark.v-breadcrumbs .v-breadcrumbs__divider, .theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled {
  color: rgba(231, 227, 252, 0.5);
}

.v-breadcrumbs {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  list-style-type: none;
  margin: 0;
  padding: 18px 12px;
}
.v-breadcrumbs li {
  align-items: center;
  display: inline-flex;
  font-size: 14px;
}
.v-breadcrumbs li .v-icon {
  font-size: 16px;
}
.v-breadcrumbs li:nth-child(even) {
  padding: 0 12px;
}

.v-breadcrumbs__item {
  align-items: center;
  display: inline-flex;
  text-decoration: none;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.v-breadcrumbs__item--disabled {
  pointer-events: none;
}

.v-breadcrumbs--large li {
  font-size: 16px;
}
.v-breadcrumbs--large li .v-icon {
  font-size: 16px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./node_modules/vuetify/src/components/VCard/VCard.sass":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./node_modules/vuetify/src/components/VCard/VCard.sass ***!
  \********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.theme--light.v-card {
  background-color: #fff;
  color: rgba(86, 103, 105, 0.87);
}
.theme--light.v-card > .v-card__text,
.theme--light.v-card > .v-card__subtitle {
  color: rgba(86, 103, 105, 0.68);
}

.theme--dark.v-card {
  background-color: #312d4b;
  color: rgba(231, 227, 252, 0.87);
}
.theme--dark.v-card > .v-card__text,
.theme--dark.v-card > .v-card__subtitle {
  color: rgba(231, 227, 252, 0.68);
}

.v-sheet.v-card {
  border-radius: 6px;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
}
.v-sheet.v-card.v-sheet--shaped {
  border-radius: 16px 6px;
}

.v-card {
  border-width: thin;
  display: block;
  max-width: 100%;
  outline: none;
  text-decoration: none;
  transition-property: box-shadow, opacity;
  overflow-wrap: break-word;
  position: relative;
  white-space: normal;
}
.v-card > *:first-child:not(.v-btn):not(.v-chip):not(.v-avatar),
.v-card > .v-card__progress + *:not(.v-btn):not(.v-chip):not(.v-avatar) {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.v-card > *:last-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.v-card__progress {
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.v-card__subtitle + .v-card__text {
  padding-top: 0;
}

.v-card__subtitle,
.v-card__text {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.0071428571em;
}

.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding: 16px 20px;
}

.v-card__title {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  line-height: 2rem;
  word-break: break-all;
}
.v-card__title + .v-card__subtitle,
.v-card__title + .v-card__text {
  padding-top: 0;
}
.v-card__title + .v-card__subtitle {
  margin-top: -16px;
}

.v-card__text {
  width: 100%;
}

.v-card__actions {
  align-items: center;
  display: flex;
  padding: 16px 20px;
}
.v-card__actions > .v-btn.v-btn {
  padding: 0 8px;
}
.v-application--is-ltr .v-card__actions > .v-btn.v-btn + .v-btn {
  margin-left: 8px;
}
.v-application--is-ltr .v-card__actions > .v-btn.v-btn .v-icon--left {
  margin-left: 4px;
}
.v-application--is-ltr .v-card__actions > .v-btn.v-btn .v-icon--right {
  margin-right: 4px;
}
.v-application--is-rtl .v-card__actions > .v-btn.v-btn + .v-btn {
  margin-right: 8px;
}
.v-application--is-rtl .v-card__actions > .v-btn.v-btn .v-icon--left {
  margin-right: 4px;
}
.v-application--is-rtl .v-card__actions > .v-btn.v-btn .v-icon--right {
  margin-left: 4px;
}

.v-card--flat {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12) !important;
}

.v-sheet.v-card--hover {
  cursor: pointer;
  transition: box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.v-sheet.v-card--hover:hover, .v-sheet.v-card--hover:focus {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}

.v-card--link {
  cursor: pointer;
}
.v-card--link .v-chip {
  cursor: pointer;
}
.v-card--link:focus:before {
  opacity: 0.08;
}
.v-card--link:before {
  background: currentColor;
  bottom: 0;
  content: "";
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.2s opacity;
}

.v-card--disabled {
  pointer-events: none;
  user-select: none;
}
.v-card--disabled > *:not(.v-card__progress) {
  opacity: 0.6;
  transition: inherit;
}

.v-card--loading {
  overflow: hidden;
}

.v-card--raised {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./node_modules/vuetify/src/components/VFileInput/VFileInput.sass":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./node_modules/vuetify/src/components/VFileInput/VFileInput.sass ***!
  \******************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.theme--light.v-file-input .v-file-input__text {
  color: rgba(86, 103, 105, 0.87);
}
.theme--light.v-file-input .v-file-input__text--placeholder {
  color: rgba(86, 103, 105, 0.68);
}
.theme--light.v-file-input.v-input--is-disabled .v-file-input__text {
  color: rgba(86, 103, 105, 0.38);
}
.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder {
  color: rgba(86, 103, 105, 0.38);
}

.theme--dark.v-file-input .v-file-input__text {
  color: rgba(231, 227, 252, 0.87);
}
.theme--dark.v-file-input .v-file-input__text--placeholder {
  color: rgba(231, 227, 252, 0.68);
}
.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text {
  color: rgba(231, 227, 252, 0.5);
}
.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder {
  color: rgba(231, 227, 252, 0.5);
}

.v-file-input input[type=file] {
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  max-width: 0;
  width: 0;
}

.v-file-input .v-file-input__text {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.v-file-input .v-file-input__text.v-file-input__text--chips {
  flex-wrap: wrap;
}
.v-file-input .v-file-input__text .v-chip {
  margin: 4px;
}

.v-file-input .v-text-field__slot {
  min-height: 32px;
}

.v-file-input.v-input--dense .v-text-field__slot {
  min-height: 26px;
}

.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text {
  padding-top: 22px;
}

.v-file-input.v-text-field--outlined .v-text-field__slot {
  padding: 6px 0;
}
.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot {
  padding: 3px 0;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/images/icons/file-icons/image.png":
/*!*******************************************************************!*\
  !*** ./resources/js/src/assets/images/icons/file-icons/image.png ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "/images/image.png?26bf33b3a0b4d8e7ecf36f745083fbf3";

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/Chat.vue?vue&type=style&index=0&id=d00ffe96&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/Chat.vue?vue&type=style&index=0&id=d00ffe96&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* scrollbar */\n::-webkit-scrollbar {\n  width: 5px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #fff;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #23b0e8;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #1c8cb9;\n}\n.app-chat .user-status-badge.v-badge--bordered .v-badge__badge {\n  height: 12px !important;\n  width: 12px !important;\n  border-radius: 6px;\n}\n.app-chat .user-status-badge.v-badge--bordered .v-badge__badge::after {\n  transform: none;\n}\n.app-chat .chat-search.v-text-field--rounded > .v-input__control > .v-input__slot {\n  padding: 0 16px;\n}\n.ps-chat-left-sidebar {\n  height: calc(100% - 76px) !important;\n}\n.v-application--is-ltr .msg-input .v-input__slot {\n  padding-left: 14px !important;\n}\n.v-application--is-rtl .msg-input .v-input__slot {\n  padding-right: 14px !important;\n}\n.v-application--is-ltr .msg-input .v-input__slot {\n  padding-right: 7px !important;\n}\n.v-application--is-rtl .msg-input .v-input__slot {\n  padding-left: 7px !important;\n}\n.chat-left-sidebar .chat-contact .chat-meta .v-badge__badge {\n  margin-top: 2px;\n}\n.chat-left-sidebar .chat-contact:not(:last-child) {\n  margin-bottom: 6px;\n}\n.chat-left-sidebar .chat-contact.active-chat-contact p {\n  color: #fff !important;\n}\n.chat-left-sidebar .chat-contact.active-chat-contact .v-badge .v-avatar {\n  border: 2px solid #fff;\n}\n.chat-left-sidebar .chat-contact.active-chat-contact .v-badge .v-badge__badge::after {\n  border-color: #fff;\n}\n.v-application.theme--light .chat-left-sidebar .chat-contact:hover {\n  background-color: rgba(86, 103, 105, 0.04);\n}\n.v-application.theme--dark .chat-left-sidebar .chat-contact:hover {\n  background-color: rgba(231, 227, 252, 0.08);\n}\n.user-profile-sidebar-content .user-status-badge-lg.v-badge--bordered .v-badge__badge {\n  height: 16px !important;\n  width: 16px !important;\n  border-radius: 8px;\n  min-width: unset;\n}\n.user-profile-sidebar-content .user-status-badge-lg.v-badge--bordered .v-badge__badge::after {\n  transform: none;\n}\n.user-profile-sidebar-content .ps-chat-user-profile-sidebar-content {\n  height: calc(100% - 218px);\n}\n.v-application.theme--light .chat-content-area {\n  background-color: rgba(86, 103, 105, 0.04);\n}\n.v-application.theme--dark .chat-content-area {\n  background-color: rgba(231, 227, 252, 0.04);\n}\n.chat-content-area .ps-chat-log {\n  height: calc(100% - 140px);\n}\n.chat-content-area .chat-log .chat-group .chat-body {\n  max-width: 50%;\n}\n@media only screen and (max-width: 959.98px) {\n.chat-content-area .chat-log .chat-group .chat-body {\n    max-width: 75%;\n}\n}\n.chat-content-area .chat-log .chat-group .chat-content {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.chat-content-area .chat-log .chat-group .chat-content.chat-left {\n  border-top-right-radius: 6px;\n}\n.chat-content-area .chat-log .chat-group .chat-content.chat-right {\n  border-top-left-radius: 6px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatLog.vue?vue&type=style&index=0&id=28f26702&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatLog.vue?vue&type=style&index=0&id=28f26702&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".project-images-icon {\n  width: 32px;\n}\n.project-images-box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 120px;\n  padding-top: 10px;\n  cursor: pointer;\n}\n.project-images-title {\n  margin-top: 5px;\n  font-size: 12px;\n  text-decoration: none;\n  align-self: normal;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/Chat.vue?vue&type=style&index=0&id=d00ffe96&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/Chat.vue?vue&type=style&index=0&id=d00ffe96&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_d00ffe96_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=style&index=0&id=d00ffe96&lang=scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/Chat.vue?vue&type=style&index=0&id=d00ffe96&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_d00ffe96_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_d00ffe96_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatLog.vue?vue&type=style&index=0&id=28f26702&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatLog.vue?vue&type=style&index=0&id=28f26702&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_style_index_0_id_28f26702_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatLog.vue?vue&type=style&index=0&id=28f26702&lang=scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatLog.vue?vue&type=style&index=0&id=28f26702&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_style_index_0_id_28f26702_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_style_index_0_id_28f26702_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/components/common/Breadcrumbs.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/components/common/Breadcrumbs.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Breadcrumbs_vue_vue_type_template_id_0af750a8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breadcrumbs.vue?vue&type=template&id=0af750a8&scoped=true */ "./resources/js/src/components/common/Breadcrumbs.vue?vue&type=template&id=0af750a8&scoped=true");
/* harmony import */ var _Breadcrumbs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Breadcrumbs.vue?vue&type=script&lang=js */ "./resources/js/src/components/common/Breadcrumbs.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Breadcrumbs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Breadcrumbs_vue_vue_type_template_id_0af750a8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Breadcrumbs_vue_vue_type_template_id_0af750a8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0af750a8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/common/Breadcrumbs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/AdminChat.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/admin/AdminChat.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminChat_vue_vue_type_template_id_5fdfe2cd_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminChat.vue?vue&type=template&id=5fdfe2cd&scoped=true */ "./resources/js/src/views/admin/AdminChat.vue?vue&type=template&id=5fdfe2cd&scoped=true");
/* harmony import */ var _AdminChat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminChat.vue?vue&type=script&lang=js */ "./resources/js/src/views/admin/AdminChat.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminChat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminChat_vue_vue_type_template_id_5fdfe2cd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminChat_vue_vue_type_template_id_5fdfe2cd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5fdfe2cd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/AdminChat.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/chat/Chat.vue":
/*!**********************************************!*\
  !*** ./resources/js/src/views/chat/Chat.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Chat_vue_vue_type_template_id_d00ffe96__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=d00ffe96 */ "./resources/js/src/views/chat/Chat.vue?vue&type=template&id=d00ffe96");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js */ "./resources/js/src/views/chat/Chat.vue?vue&type=script&lang=js");
/* harmony import */ var _Chat_vue_vue_type_style_index_0_id_d00ffe96_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=0&id=d00ffe96&lang=scss */ "./resources/js/src/views/chat/Chat.vue?vue&type=style&index=0&id=d00ffe96&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chat_vue_vue_type_template_id_d00ffe96__WEBPACK_IMPORTED_MODULE_0__.render,
  _Chat_vue_vue_type_template_id_d00ffe96__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/chat/Chat.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/chat/ChatActiveChatUserProfileSidebarContent.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/chat/ChatActiveChatUserProfileSidebarContent.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChatActiveChatUserProfileSidebarContent_vue_vue_type_template_id_3b75c950__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatActiveChatUserProfileSidebarContent.vue?vue&type=template&id=3b75c950 */ "./resources/js/src/views/chat/ChatActiveChatUserProfileSidebarContent.vue?vue&type=template&id=3b75c950");
/* harmony import */ var _ChatActiveChatUserProfileSidebarContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatActiveChatUserProfileSidebarContent.vue?vue&type=script&lang=js */ "./resources/js/src/views/chat/ChatActiveChatUserProfileSidebarContent.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatActiveChatUserProfileSidebarContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatActiveChatUserProfileSidebarContent_vue_vue_type_template_id_3b75c950__WEBPACK_IMPORTED_MODULE_0__.render,
  _ChatActiveChatUserProfileSidebarContent_vue_vue_type_template_id_3b75c950__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/chat/ChatActiveChatUserProfileSidebarContent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/chat/ChatContact.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/chat/ChatContact.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChatContact_vue_vue_type_template_id_8215144a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatContact.vue?vue&type=template&id=8215144a */ "./resources/js/src/views/chat/ChatContact.vue?vue&type=template&id=8215144a");
/* harmony import */ var _ChatContact_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatContact.vue?vue&type=script&lang=js */ "./resources/js/src/views/chat/ChatContact.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatContact_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatContact_vue_vue_type_template_id_8215144a__WEBPACK_IMPORTED_MODULE_0__.render,
  _ChatContact_vue_vue_type_template_id_8215144a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/chat/ChatContact.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/chat/ChatLeftSidebarContent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/chat/ChatLeftSidebarContent.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChatLeftSidebarContent_vue_vue_type_template_id_4cc5c2f9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatLeftSidebarContent.vue?vue&type=template&id=4cc5c2f9 */ "./resources/js/src/views/chat/ChatLeftSidebarContent.vue?vue&type=template&id=4cc5c2f9");
/* harmony import */ var _ChatLeftSidebarContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatLeftSidebarContent.vue?vue&type=script&lang=js */ "./resources/js/src/views/chat/ChatLeftSidebarContent.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatLeftSidebarContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatLeftSidebarContent_vue_vue_type_template_id_4cc5c2f9__WEBPACK_IMPORTED_MODULE_0__.render,
  _ChatLeftSidebarContent_vue_vue_type_template_id_4cc5c2f9__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/chat/ChatLeftSidebarContent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/chat/ChatLog.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/chat/ChatLog.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChatLog_vue_vue_type_template_id_28f26702__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatLog.vue?vue&type=template&id=28f26702 */ "./resources/js/src/views/chat/ChatLog.vue?vue&type=template&id=28f26702");
/* harmony import */ var _ChatLog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatLog.vue?vue&type=script&lang=js */ "./resources/js/src/views/chat/ChatLog.vue?vue&type=script&lang=js");
/* harmony import */ var _ChatLog_vue_vue_type_style_index_0_id_28f26702_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatLog.vue?vue&type=style&index=0&id=28f26702&lang=scss */ "./resources/js/src/views/chat/ChatLog.vue?vue&type=style&index=0&id=28f26702&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChatLog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatLog_vue_vue_type_template_id_28f26702__WEBPACK_IMPORTED_MODULE_0__.render,
  _ChatLog_vue_vue_type_template_id_28f26702__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/chat/ChatLog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/chat/ChatUserProfileSidebarContent.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/chat/ChatUserProfileSidebarContent.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChatUserProfileSidebarContent_vue_vue_type_template_id_5e82c5f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatUserProfileSidebarContent.vue?vue&type=template&id=5e82c5f6 */ "./resources/js/src/views/chat/ChatUserProfileSidebarContent.vue?vue&type=template&id=5e82c5f6");
/* harmony import */ var _ChatUserProfileSidebarContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatUserProfileSidebarContent.vue?vue&type=script&lang=js */ "./resources/js/src/views/chat/ChatUserProfileSidebarContent.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatUserProfileSidebarContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatUserProfileSidebarContent_vue_vue_type_template_id_5e82c5f6__WEBPACK_IMPORTED_MODULE_0__.render,
  _ChatUserProfileSidebarContent_vue_vue_type_template_id_5e82c5f6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/chat/ChatUserProfileSidebarContent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/common/Breadcrumbs.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/components/common/Breadcrumbs.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Breadcrumbs.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/components/common/Breadcrumbs.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/AdminChat.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/admin/AdminChat.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminChat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminChat.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/admin/AdminChat.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminChat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/chat/Chat.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/chat/Chat.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/Chat.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/chat/ChatActiveChatUserProfileSidebarContent.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/chat/ChatActiveChatUserProfileSidebarContent.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatActiveChatUserProfileSidebarContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatActiveChatUserProfileSidebarContent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatActiveChatUserProfileSidebarContent.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatActiveChatUserProfileSidebarContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/chat/ChatContact.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/chat/ChatContact.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatContact.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatContact.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/chat/ChatLeftSidebarContent.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/chat/ChatLeftSidebarContent.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLeftSidebarContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatLeftSidebarContent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatLeftSidebarContent.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLeftSidebarContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/chat/ChatLog.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/chat/ChatLog.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatLog.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatLog.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/chat/ChatUserProfileSidebarContent.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/chat/ChatUserProfileSidebarContent.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatUserProfileSidebarContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatUserProfileSidebarContent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatUserProfileSidebarContent.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatUserProfileSidebarContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/chat/Chat.vue?vue&type=style&index=0&id=d00ffe96&lang=scss":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/chat/Chat.vue?vue&type=style&index=0&id=d00ffe96&lang=scss ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_d00ffe96_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=style&index=0&id=d00ffe96&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/Chat.vue?vue&type=style&index=0&id=d00ffe96&lang=scss");


/***/ }),

/***/ "./resources/js/src/views/chat/ChatLog.vue?vue&type=style&index=0&id=28f26702&lang=scss":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/chat/ChatLog.vue?vue&type=style&index=0&id=28f26702&lang=scss ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_style_index_0_id_28f26702_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatLog.vue?vue&type=style&index=0&id=28f26702&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatLog.vue?vue&type=style&index=0&id=28f26702&lang=scss");


/***/ }),

/***/ "./node_modules/vuetify/src/components/VBreadcrumbs/VBreadcrumbs.sass":
/*!****************************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VBreadcrumbs/VBreadcrumbs.sass ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!../../../../sass-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./VBreadcrumbs.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./node_modules/vuetify/src/components/VBreadcrumbs/VBreadcrumbs.sass");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("324f97de", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vuetify/src/components/VCard/VCard.sass":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VCard/VCard.sass ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!../../../../sass-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./VCard.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./node_modules/vuetify/src/components/VCard/VCard.sass");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("57c8b3a3", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vuetify/src/components/VFileInput/VFileInput.sass":
/*!************************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VFileInput/VFileInput.sass ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!../../../../sass-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./VFileInput.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./node_modules/vuetify/src/components/VFileInput/VFileInput.sass");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("16326cef", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/js/src/components/common/Breadcrumbs.vue?vue&type=template&id=0af750a8&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/components/common/Breadcrumbs.vue?vue&type=template&id=0af750a8&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_template_id_0af750a8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_template_id_0af750a8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_template_id_0af750a8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Breadcrumbs.vue?vue&type=template&id=0af750a8&scoped=true */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/components/common/Breadcrumbs.vue?vue&type=template&id=0af750a8&scoped=true");


/***/ }),

/***/ "./resources/js/src/views/admin/AdminChat.vue?vue&type=template&id=5fdfe2cd&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/admin/AdminChat.vue?vue&type=template&id=5fdfe2cd&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminChat_vue_vue_type_template_id_5fdfe2cd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminChat_vue_vue_type_template_id_5fdfe2cd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminChat_vue_vue_type_template_id_5fdfe2cd_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminChat.vue?vue&type=template&id=5fdfe2cd&scoped=true */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/admin/AdminChat.vue?vue&type=template&id=5fdfe2cd&scoped=true");


/***/ }),

/***/ "./resources/js/src/views/chat/Chat.vue?vue&type=template&id=d00ffe96":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/chat/Chat.vue?vue&type=template&id=d00ffe96 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_d00ffe96__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_d00ffe96__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_d00ffe96__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=template&id=d00ffe96 */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/Chat.vue?vue&type=template&id=d00ffe96");


/***/ }),

/***/ "./resources/js/src/views/chat/ChatActiveChatUserProfileSidebarContent.vue?vue&type=template&id=3b75c950":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/chat/ChatActiveChatUserProfileSidebarContent.vue?vue&type=template&id=3b75c950 ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatActiveChatUserProfileSidebarContent_vue_vue_type_template_id_3b75c950__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatActiveChatUserProfileSidebarContent_vue_vue_type_template_id_3b75c950__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatActiveChatUserProfileSidebarContent_vue_vue_type_template_id_3b75c950__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatActiveChatUserProfileSidebarContent.vue?vue&type=template&id=3b75c950 */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatActiveChatUserProfileSidebarContent.vue?vue&type=template&id=3b75c950");


/***/ }),

/***/ "./resources/js/src/views/chat/ChatContact.vue?vue&type=template&id=8215144a":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/chat/ChatContact.vue?vue&type=template&id=8215144a ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_template_id_8215144a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_template_id_8215144a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_template_id_8215144a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatContact.vue?vue&type=template&id=8215144a */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatContact.vue?vue&type=template&id=8215144a");


/***/ }),

/***/ "./resources/js/src/views/chat/ChatLeftSidebarContent.vue?vue&type=template&id=4cc5c2f9":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/chat/ChatLeftSidebarContent.vue?vue&type=template&id=4cc5c2f9 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLeftSidebarContent_vue_vue_type_template_id_4cc5c2f9__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLeftSidebarContent_vue_vue_type_template_id_4cc5c2f9__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLeftSidebarContent_vue_vue_type_template_id_4cc5c2f9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatLeftSidebarContent.vue?vue&type=template&id=4cc5c2f9 */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatLeftSidebarContent.vue?vue&type=template&id=4cc5c2f9");


/***/ }),

/***/ "./resources/js/src/views/chat/ChatLog.vue?vue&type=template&id=28f26702":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/chat/ChatLog.vue?vue&type=template&id=28f26702 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_template_id_28f26702__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_template_id_28f26702__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_template_id_28f26702__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatLog.vue?vue&type=template&id=28f26702 */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatLog.vue?vue&type=template&id=28f26702");


/***/ }),

/***/ "./resources/js/src/views/chat/ChatUserProfileSidebarContent.vue?vue&type=template&id=5e82c5f6":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/chat/ChatUserProfileSidebarContent.vue?vue&type=template&id=5e82c5f6 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatUserProfileSidebarContent_vue_vue_type_template_id_5e82c5f6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatUserProfileSidebarContent_vue_vue_type_template_id_5e82c5f6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatUserProfileSidebarContent_vue_vue_type_template_id_5e82c5f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatUserProfileSidebarContent.vue?vue&type=template&id=5e82c5f6 */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatUserProfileSidebarContent.vue?vue&type=template&id=5e82c5f6");


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/components/common/Breadcrumbs.vue?vue&type=template&id=0af750a8&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/components/common/Breadcrumbs.vue?vue&type=template&id=0af750a8&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VBreadcrumbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VBreadcrumbs */ "./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbs.js");
/* harmony import */ var vuetify_lib_components_VBreadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VBreadcrumbs */ "./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbsItem.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");




var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(vuetify_lib_components_VBreadcrumbs__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: { items: _vm.items },
    scopedSlots: _vm._u([
      {
        key: "item",
        fn: function (ref) {
          var item = ref.item
          return [
            _c(
              vuetify_lib_components_VBreadcrumbs__WEBPACK_IMPORTED_MODULE_1__["default"],
              {
                attrs: { disabled: item.disabled, role: "button" },
                on: {
                  click: function ($event) {
                    return _vm.openLink(item)
                  },
                },
              },
              [
                item.icon
                  ? _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"], [_vm._v(_vm._s(_vm.icons[item.icon]))])
                  : _vm._e(),
                _vm._v("\n      " + _vm._s(_vm.$t(item.text)) + "\n    "),
              ],
              1
            ),
          ]
        },
      },
    ]),
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/admin/AdminChat.vue?vue&type=template&id=5fdfe2cd&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/admin/AdminChat.vue?vue&type=template&id=5fdfe2cd&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("Chat")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/Chat.vue?vue&type=template&id=d00ffe96":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/Chat.vue?vue&type=template&id=d00ffe96 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/VAvatar.js");
/* harmony import */ var vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VBadge */ "./node_modules/vuetify/lib/components/VBadge/VBadge.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/VDivider.js");
/* harmony import */ var vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VFileInput */ "./node_modules/vuetify/lib/components/VFileInput/VFileInput.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/VMenu.js");
/* harmony import */ var vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VNavigationDrawer */ "./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");













var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "d-flex justify-space-between" },
        [
          _c("breadcrumbs", { attrs: { items: _vm.breadcrumbsItems } }),
          _vm._v(" "),
          _vm.filteredChatList.admin
            ? _c(
                "div",
                [
                  _c(
                    vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
                    {
                      attrs: {
                        "close-on-content-click": false,
                        "offset-y": "",
                        left: "",
                        "nudge-bottom": "14",
                        "min-width": "600",
                        "content-class":
                          "list-style mr-4 notification-menu-content",
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function (ref) {
                              var on = ref.on
                              var attrs = ref.attrs
                              return [
                                _c(
                                  vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"],
                                  {
                                    attrs: { color: "primary" },
                                    on: {
                                      click: function ($event) {
                                        _vm.findChat = true
                                      },
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n            " +
                                        _vm._s(_vm.$t("contact_list")) +
                                        "\n            "
                                    ),
                                    _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"], [
                                      _vm._v(
                                        " " +
                                          _vm._s(_vm.icons.mdiChatPlusOutline)
                                      ),
                                    ]),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ],
                        null,
                        false,
                        3881137633
                      ),
                      model: {
                        value: _vm.findChat,
                        callback: function ($$v) {
                          _vm.findChat = $$v
                        },
                        expression: "findChat",
                      },
                    },
                    [
                      _vm._v(" "),
                      _c(
                        vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__["default"],
                        {
                          staticClass: "app-bar-notification-content-container",
                          staticStyle: {
                            "min-width": "600px !important",
                            "max-width": "600px !important",
                            padding: "10px",
                          },
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "d-flex flex-column" },
                            [
                              _c("h3", [_vm._v(_vm._s(_vm.name))]),
                              _vm._v(" "),
                              _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_4__["default"], { attrs: { horizontal: "" } }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    padding: "5px 0",
                                    cursor: "pointer",
                                  },
                                  on: {
                                    click: function ($event) {
                                      return _vm.openChat(
                                        _vm.filteredChatList.admin,
                                        0
                                      )
                                    },
                                  },
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "v-avatar-light-bg-list",
                                      staticStyle: {
                                        display: "flex",
                                        "align-items": "center",
                                      },
                                    },
                                    [
                                      _c(
                                        vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__["default"],
                                        {
                                          staticClass: "v-avatar-light-bg mr-2",
                                          attrs: { start: "", size: "45" },
                                        },
                                        [
                                          _c("span", [
                                            _vm.filteredChatList.admin
                                              .profile_picture
                                              ? _c("img", {
                                                  staticStyle: {
                                                    "max-width": "50px",
                                                    "max-height": "50px",
                                                  },
                                                  attrs: {
                                                    src:
                                                      _vm.filteredChatList.admin
                                                        .profile_picture +
                                                      "?api_token=" +
                                                      _vm.token,
                                                    alt: _vm.filteredChatList
                                                      .admin.name,
                                                  },
                                                })
                                              : _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.avatarText(
                                                        _vm.filteredChatList
                                                          .admin.name
                                                      )
                                                    )
                                                  ),
                                                ]),
                                          ]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.filteredChatList.admin.name
                                          )
                                        ),
                                      ]),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _vm.filteredChatList.project_managers.length > 0
                                ? _c(
                                    "div",
                                    _vm._l(
                                      _vm.filteredChatList.project_managers,
                                      function (project_manager, index) {
                                        return _c(
                                          "div",
                                          {
                                            key: "manager_" + index,
                                            staticStyle: {
                                              padding: "5px 0",
                                              cursor: "pointer",
                                            },
                                            on: {
                                              click: function ($event) {
                                                return _vm.openChat(
                                                  project_manager,
                                                  0
                                                )
                                              },
                                            },
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "v-avatar-light-bg-list",
                                                staticStyle: {
                                                  display: "flex",
                                                  "align-items": "center",
                                                },
                                              },
                                              [
                                                _c(
                                                  vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__["default"],
                                                  {
                                                    staticClass:
                                                      "v-avatar-light-bg mr-2",
                                                    attrs: {
                                                      start: "",
                                                      size: "45",
                                                    },
                                                  },
                                                  [
                                                    _c("span", [
                                                      project_manager.profile_picture
                                                        ? _c("img", {
                                                            staticStyle: {
                                                              "max-width":
                                                                "50px",
                                                              "max-height":
                                                                "50px",
                                                            },
                                                            attrs: {
                                                              src:
                                                                project_manager.profile_picture +
                                                                "?api_token=" +
                                                                _vm.token,
                                                              alt: project_manager.name,
                                                            },
                                                          })
                                                        : _c("span", [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.avatarText(
                                                                  project_manager.name
                                                                )
                                                              )
                                                            ),
                                                          ]),
                                                    ]),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(project_manager.name)
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                          ]
                                        )
                                      }
                                    ),
                                    0
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _vm.filteredChatList.companies.length > 0
                                ? _c(
                                    "div",
                                    [
                                      _c("h3", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(
                                              "chatlist_involved_companies"
                                            )
                                          )
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                        attrs: { horizontal: "" },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        _vm._l(
                                          _vm.filteredChatList.companies,
                                          function (company, index) {
                                            return _c(
                                              "div",
                                              {
                                                key: "cmp_" + index,
                                                staticStyle: {
                                                  padding: "5px 0",
                                                  cursor: "pointer",
                                                },
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.openChat(
                                                      company,
                                                      1
                                                    )
                                                  },
                                                },
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "v-avatar-light-bg-list",
                                                    staticStyle: {
                                                      display: "flex",
                                                      "align-items": "center",
                                                    },
                                                  },
                                                  [
                                                    _c(
                                                      vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__["default"],
                                                      {
                                                        staticClass:
                                                          "v-avatar-light-bg mr-2",
                                                        attrs: {
                                                          start: "",
                                                          size: "45",
                                                        },
                                                      },
                                                      [
                                                        _c("span", [
                                                          company.logo
                                                            ? _c("img", {
                                                                staticStyle: {
                                                                  "max-width":
                                                                    "50px",
                                                                  "max-height":
                                                                    "50px",
                                                                },
                                                                attrs: {
                                                                  src:
                                                                    company.logo +
                                                                    "?api_token=" +
                                                                    _vm.token,
                                                                  alt: company.name,
                                                                },
                                                              })
                                                            : _c("span", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.avatarText(
                                                                      company.name
                                                                    )
                                                                  )
                                                                ),
                                                              ]),
                                                        ]),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "d-flex flex-column align-items-center",
                                                        staticStyle: {
                                                          "margin-left": "10px",
                                                        },
                                                      },
                                                      [
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              company.user.name
                                                            )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "span",
                                                          {
                                                            staticStyle: {
                                                              "font-size":
                                                                "12px",
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                company.name
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            )
                                          }
                                        ),
                                        0
                                      ),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__["default"],
        {
          staticClass:
            "max-h-content-container app-chat position-relative overflow-hidden text-sm",
        },
        [
          _c(
            vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_6__["default"],
            {
              attrs: {
                width: "374",
                touchless: "",
                right: _vm.$vuetify.rtl,
                "mobile-breakpoint": "sm",
                temporary: _vm.$vuetify.breakpoint.xsOnly,
                absolute: "",
              },
              model: {
                value: _vm.isLeftSidebarOpen,
                callback: function ($$v) {
                  _vm.isLeftSidebarOpen = $$v
                },
                expression: "isLeftSidebarOpen",
              },
            },
            [
              _vm.chatsContacts
                ? _c("chat-left-sidebar-content", {
                    ref: "leftSideBar",
                    attrs: {
                      "chats-contacts": _vm.chatsContacts,
                      "archived-chats-contacts": _vm.archivedChatsContacts,
                      "active-chat-contact-id": _vm.activeChat.user
                        ? _vm.activeChat.user.id
                        : null,
                      "profile-user-minimal-data": _vm.profileUserDataMinimal,
                    },
                    on: {
                      "close-left-sidebar": function ($event) {
                        _vm.isLeftSidebarOpen = false
                      },
                      "open-chat": _vm.openChatOfContact,
                      "open-chat-user-profile-sidebar-content": function (
                        $event
                      ) {
                        _vm.isUserProfileSidebarOpen = true
                      },
                    },
                  })
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_6__["default"],
            {
              attrs: {
                width: "374",
                absolute: "",
                right: _vm.$vuetify.rtl,
                touchless: "",
                temporary: "",
              },
              model: {
                value: _vm.isUserProfileSidebarOpen,
                callback: function ($$v) {
                  _vm.isUserProfileSidebarOpen = $$v
                },
                expression: "isUserProfileSidebarOpen",
              },
            },
            [
              _c("chat-user-profile-sidebar-content", {
                attrs: { "profile-user-data": _vm.profileUserData },
                on: {
                  "close-user-profile-sidebar": function ($event) {
                    _vm.isUserProfileSidebarOpen = false
                  },
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_6__["default"],
            {
              attrs: {
                width: "374",
                absolute: "",
                temporary: "",
                right: !_vm.$vuetify.rtl,
                touchless: "",
              },
              model: {
                value: _vm.isActiveChatUserProfileSidebarOpen,
                callback: function ($$v) {
                  _vm.isActiveChatUserProfileSidebarOpen = $$v
                },
                expression: "isActiveChatUserProfileSidebarOpen",
              },
            },
            [
              _vm.activeChat.user
                ? _c("chat-active-chat-user-profile-sidebar-content", {
                    attrs: { "profile-user-data": _vm.activeChat.user },
                    on: {
                      "close-active-chat-user-profile-sidebar": function (
                        $event
                      ) {
                        _vm.isActiveChatUserProfileSidebarOpen = false
                      },
                    },
                  })
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "chat-content-area h-full d-flex flex-column",
              style: _vm.contentStyles,
            },
            [
              _vm.activeChat.user
                ? _c(
                    "div",
                    { staticClass: "h-full" },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex align-center justify-space-between px-5 py-4",
                          staticStyle: { height: "72px" },
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "d-flex align-center" },
                            [
                              _c(
                                vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"],
                                {
                                  staticClass: "me-2 d-inline-block d-md-none",
                                  attrs: { icon: "" },
                                },
                                [
                                  _c(
                                    vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"],
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: !_vm.isLeftSidebarOpen,
                                          expression: "!isLeftSidebarOpen",
                                        },
                                      ],
                                      on: {
                                        click: function ($event) {
                                          _vm.isLeftSidebarOpen = true
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(_vm.icons.mdiMenu) +
                                          "\n              "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_7__["default"],
                                {
                                  staticClass: "me-3 user-status-badge",
                                  attrs: {
                                    bottom: "",
                                    overlap: "",
                                    dot: "",
                                    bordered: "",
                                    color: _vm.resolveAvatarBadgeVariant(
                                      _vm.activeChat.user.status
                                    ),
                                    "offset-x": "11",
                                    "offset-y": "11",
                                  },
                                },
                                [
                                  _c(
                                    vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__["default"],
                                    {
                                      staticClass: "cursor-pointer",
                                      class:
                                        "v-avatar-light-bg " +
                                        _vm.resolveAvatarBadgeVariant(
                                          _vm.activeChat.user.status
                                        ) +
                                        "--text",
                                      attrs: { size: "38" },
                                      on: {
                                        click: function ($event) {
                                          _vm.isActiveChatUserProfileSidebarOpen = true
                                        },
                                      },
                                    },
                                    [
                                      _vm.activeChat.user.profile_picture
                                        ? _c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                            attrs: {
                                              src:
                                                _vm.activeChat.user
                                                  .profile_picture +
                                                "?api_token=" +
                                                _vm.token,
                                            },
                                          })
                                        : _c("span", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.avatarText(
                                                  _vm.activeChat.user.name
                                                )
                                              )
                                            ),
                                          ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "d-flex flex-column" }, [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "mb-0 text--primary font-weight-medium",
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(_vm.activeChat.user.name) +
                                        "\n              "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.activeChat.user.role == "client"
                                  ? _c(
                                      "span",
                                      { staticClass: "text--disabled text-xs" },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(_vm.activeChat.user.role)
                                          )
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.activeChat.user.role == "admin"
                                  ? _c(
                                      "span",
                                      { staticClass: "text--disabled text-xs" },
                                      [
                                        _c(
                                          "a",
                                          {
                                            attrs: {
                                              href: "/",
                                              target: "_blank",
                                            },
                                          },
                                          [_vm._v(_vm._s(_vm.name))]
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.activeChat.user.role == "company"
                                  ? _c(
                                      "span",
                                      { staticClass: "text--disabled text-xs" },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.activeChat.user.company.name
                                          )
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                              ]),
                            ],
                            1
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_4__["default"]),
                      _vm._v(" "),
                      _c(
                        "perfect-scrollbar",
                        {
                          ref: "refChatLogPS",
                          staticClass: "ps-chat-log h-full",
                          attrs: { options: _vm.perfectScrollbarOptions },
                        },
                        [
                          _c("chat-log", {
                            attrs: {
                              "chat-data": _vm.activeChat,
                              "profile-user-avatar":
                                _vm.profileUserDataMinimal.name,
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["default"],
                        {
                          attrs: { autocomplete: "off" },
                          on: {
                            submit: function ($event) {
                              $event.preventDefault()
                              return _vm.sendMessage.apply(null, arguments)
                            },
                          },
                        },
                        [
                          _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
                            key: _vm.activeChat.user.id,
                            staticClass: "pb-5 px-5 flex-grow-0 msg-input",
                            attrs: {
                              placeholder: _vm.$t("type_your_message_here"),
                              solo: "",
                              "hide-details": "",
                              height: "50",
                              autofocus: "",
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "prepend",
                                  fn: function () {
                                    return [
                                      _c(
                                        "div",
                                        [
                                          _c(
                                            vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_11__["default"],
                                            {
                                              key: _vm.chatInputAttachmentKey,
                                              ref: "file",
                                              staticStyle: {
                                                height: "35px",
                                                "min-height": "35px",
                                                margin: "-10px 10px 0 0",
                                                padding: "0",
                                              },
                                            },
                                            [
                                              _c(
                                                vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"],
                                                { attrs: { large: "" } },
                                                [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        _vm.icons.mdiAttachment
                                                      ) +
                                                      "\n                  "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ]
                                  },
                                  proxy: true,
                                },
                                {
                                  key: "append",
                                  fn: function () {
                                    return [
                                      _c(
                                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"],
                                        {
                                          attrs: {
                                            color: "primary",
                                            elevation: "0",
                                            type: "submit",
                                            icon: _vm.$vuetify.breakpoint
                                              .xsOnly,
                                            loading: _vm.isButtonLoading(
                                              "/chats/" + _vm.activeChat.id
                                            ),
                                          },
                                        },
                                        [
                                          _vm.$vuetify.breakpoint.smAndUp
                                            ? [
                                                _vm._v(
                                                  "\n                  " +
                                                    _vm._s(_vm.$t("send")) +
                                                    "\n                "
                                                ),
                                              ]
                                            : [
                                                _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"], [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.icons.mdiSendOutline
                                                    )
                                                  ),
                                                ]),
                                              ],
                                        ],
                                        2
                                      ),
                                    ]
                                  },
                                  proxy: true,
                                },
                              ],
                              null,
                              false,
                              3616532910
                            ),
                            model: {
                              value: _vm.chatInputMessage,
                              callback: function ($$v) {
                                _vm.chatInputMessage = $$v
                              },
                              expression: "chatInputMessage",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : _c(
                    "div",
                    {
                      staticClass:
                        "d-flex align-center justify-center flex-grow-1 flex-column",
                    },
                    [
                      _c(
                        vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__["default"],
                        {
                          staticClass: "elevation-3 mb-6 bg-card",
                          attrs: { size: "109" },
                        },
                        [
                          _c(
                            vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"],
                            {
                              staticClass: "rounded-0 text--primary",
                              attrs: { size: "50" },
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(_vm.icons.mdiMessageTextOutline) +
                                  "\n          "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass:
                            "mb-0 px-6 py-1 font-weight-medium text-lg elevation-3 rounded-xl text--primary bg-card",
                          class: [
                            {
                              "cursor-pointer":
                                _vm.$vuetify.breakpoint.smAndDown,
                            },
                          ],
                          on: { click: _vm.startConversation },
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.$t("start_conversation")) +
                              "\n        "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
            ]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatActiveChatUserProfileSidebarContent.vue?vue&type=template&id=3b75c950":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatActiveChatUserProfileSidebarContent.vue?vue&type=template&id=3b75c950 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/VAvatar.js");
/* harmony import */ var vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VBadge */ "./node_modules/vuetify/lib/components/VBadge/VBadge.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");






var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "user-profile-sidebar-content h-full" },
    [
      _c(
        "div",
        {
          staticClass: "pt-2 me-2",
          class: _vm.$vuetify.rtl ? "text-left" : "text-right",
        },
        [
          _c(
            vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_0__["default"],
            {
              attrs: { icon: "", small: "" },
              on: {
                click: function ($event) {
                  return _vm.$emit("close-active-chat-user-profile-sidebar")
                },
              },
            },
            [
              _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], [
                _vm._v("\n        " + _vm._s(_vm.icons.mdiClose) + "\n      "),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center px-6 pt-4" },
        [
          _c(
            vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_2__["default"],
            {
              staticClass: "user-status-badge-lg mb-5",
              attrs: {
                bottom: "",
                overlap: "",
                bordered: "",
                color: _vm.resolveAvatarBadgeVariant(
                  _vm.profileUserData.status
                ),
                "offset-x": "24",
                "offset-y": "18",
              },
            },
            [
              _c(
                vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_3__["default"],
                {
                  class:
                    "v-avatar-light-bg " +
                    _vm.resolveAvatarBadgeVariant(_vm.profileUserData.status) +
                    "--text",
                  attrs: { size: "80" },
                },
                [
                  _vm.profileUserData.profile_picture
                    ? _c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        attrs: {
                          src:
                            _vm.profileUserData.profile_picture +
                            "?api_token=" +
                            _vm.token,
                        },
                      })
                    : _c("span", [
                        _vm._v(
                          _vm._s(_vm.avatarText(_vm.profileUserData.name))
                        ),
                      ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _vm.profileUserData.role == "company"
            ? _c("h2", { staticClass: "mb-1 font-weight-medium text-base" }, [
                _vm._v(
                  "\n      " +
                    _vm._s(_vm.profileUserData.company.name) +
                    "\n    "
                ),
              ])
            : _c("h2", { staticClass: "mb-1 font-weight-medium text-base" }, [
                _vm._v(
                  "\n      " + _vm._s(_vm.profileUserData.name) + "\n    "
                ),
              ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "perfect-scrollbar",
        {
          staticClass: "ps-chat-user-profile-sidebar-content pb-6 px-6",
          attrs: { options: _vm.perfectScrollbarOptions },
        },
        [
          _c("div", { staticClass: "mb-5" }, [
            _c(
              "span",
              {
                staticClass: "text-xs text--disabled",
                class: _vm.rootThemeClasses,
              },
              [_vm._v(_vm._s(_vm.$t("personal_data")))]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex align-center my-3" },
              [
                _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], { staticClass: "me-2" }, [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.icons.mdiEmailOutline) +
                      "\n        "
                  ),
                ]),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(_vm.profileUserData.email))]),
              ],
              1
            ),
            _vm._v(" "),
            _vm.profileUserData.mobile
              ? _c(
                  "div",
                  { staticClass: "d-flex align-center mb-3" },
                  [
                    _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], { staticClass: "me-2" }, [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.icons.mdiPhoneOutline) +
                          "\n        "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(_vm.profileUserData.mobile))]),
                  ],
                  1
                )
              : _vm._e(),
          ]),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatContact.vue?vue&type=template&id=8215144a":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatContact.vue?vue&type=template&id=8215144a ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/VAvatar.js");
/* harmony import */ var vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VBadge */ "./node_modules/vuetify/lib/components/VBadge/VBadge.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");






var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._g(
      {
        staticClass:
          "chat-contact d-flex align-center pa-3 cursor-pointer rounded-lg",
        class: { "bg-gradient-primary active-chat-contact": _vm.isActive },
      },
      _vm.$listeners
    ),
    [
      _c(
        vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_0__["default"],
        {
          staticClass: "me-3 user-status-badge",
          attrs: {
            bottom: "",
            overlap: "",
            dot: "",
            bordered: "",
            color: _vm.resolveAvatarBadgeVariant(_vm.chat.user.status),
            "offset-x": "11",
            "offset-y": "11",
            value: _vm.isChatContact,
          },
        },
        [
          _c(
            vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_1__["default"],
            {
              staticClass: "v-avatar-light-bg",
              class: [
                { "bg-static-white": _vm.isChatContact && _vm.isActive },
                _vm.resolveAvatarBadgeVariant(_vm.chat.user.status) + "--text",
              ],
              attrs: { size: "38" },
            },
            [
              _vm.chat.user.profile_picture
                ? _c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    attrs: {
                      src:
                        _vm.chat.user.profile_picture +
                        "?api_token=" +
                        _vm.token,
                    },
                  })
                : _c("span", [
                    _vm._v(_vm._s(_vm.avatarText(_vm.chat.user.name))),
                  ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "flex-grow-1 overflow-hidden",
          staticStyle: { display: "flex", "justify-content": "space-between" },
        },
        [
          _vm.chat.user.role == "admin"
            ? _c(
                "p",
                { staticClass: "mb-0 font-weight-medium text--primary" },
                [
                  _vm._v("\n        " + _vm._s(_vm.chat.user.name)),
                  _c("br"),
                  _vm._v(" "),
                  _c("small", [_vm._v(_vm._s(_vm.name))]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.chat.user.role == "client"
            ? _c(
                "p",
                { staticClass: "mb-0 font-weight-medium text--primary" },
                [
                  _vm._v("\n        " + _vm._s(_vm.chat.user.name)),
                  _c("br"),
                  _vm._v(" "),
                  _c("small", [_vm._v(_vm._s(_vm.$t("client")))]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.chat.user.role == "company"
            ? _c(
                "p",
                { staticClass: "mb-0 font-weight-medium text--primary" },
                [
                  _vm._v("\n        " + _vm._s(_vm.chat.user.name)),
                  _c("br"),
                  _vm._v(" "),
                  _c("small", [_vm._v(_vm._s(_vm.chat.user.company.name))]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("p", { staticClass: "text--disabled mb-0 text-truncate" }),
          _vm._v(" "),
          _c(
            "p",
            [
              _c(
                vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_3__["default"],
                {
                  staticStyle: {
                    height: "20px !important",
                    "min-width": "13px !important",
                    width: "26px",
                  },
                  attrs: { "x-small": "", color: "default" },
                  on: {
                    click: function ($event) {
                      return _vm.$emit("archive-chat")
                    },
                  },
                },
                [
                  _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__["default"], { attrs: { small: "" } }, [
                    _vm._v(_vm._s(_vm.icons.mdiArchiveOutline)),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "chat-meta d-flex flex-column align-self-stretch align-end",
        },
        [
          _c("p", { staticClass: "text-no-wrap mb-0" }),
          _vm._v(" "),
          _vm.chat.unseenMsgs
            ? _c(vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_0__["default"], {
                staticClass: "number-badge",
                attrs: {
                  color: "error",
                  inline: "",
                  content: _vm.chat.unseenMsgs,
                },
              })
            : _vm._e(),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatLeftSidebarContent.vue?vue&type=template&id=4cc5c2f9":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatLeftSidebarContent.vue?vue&type=template&id=4cc5c2f9 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/VAvatar.js");
/* harmony import */ var vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VBadge */ "./node_modules/vuetify/lib/components/VBadge/VBadge.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/VDivider.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");







var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "chat-left-sidebar h-full" },
    [
      _c(
        "div",
        { staticClass: "d-flex align-center pa-4" },
        [
          _c(
            vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_0__["default"],
            {
              staticClass: "me-3 user-status-badge",
              attrs: {
                bottom: "",
                overlap: "",
                dot: "",
                bordered: "",
                color: _vm.resolveAvatarBadgeVariant(
                  _vm.profileUserMinimalData.status
                ),
                "offset-x": "11",
                "offset-y": "11",
              },
            },
            [
              _c(
                vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_1__["default"],
                {
                  staticClass: "cursor-pointer",
                  class:
                    "v-avatar-light-bg " +
                    _vm.resolveAvatarBadgeVariant(
                      _vm.profileUserMinimalData.status
                    ) +
                    "--text",
                  attrs: { size: "2.375rem" },
                  on: {
                    click: function ($event) {
                      _vm.$emit("open-chat-user-profile-sidebar-content", true)
                      _vm.$vuetify.breakpoint.smAndDown &&
                        _vm.$emit("close-left-sidebar")
                    },
                  },
                },
                [
                  _vm.profileUserMinimalData.profile_picture
                    ? _c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        attrs: {
                          src:
                            _vm.profileUserMinimalData.profile_picture +
                            "?api_token=" +
                            _vm.token,
                        },
                      })
                    : _c("span", [
                        _vm._v(
                          _vm._s(
                            _vm.avatarText(
                              _vm.profileUserMinimalData.name +
                                " " +
                                _vm.profileUserMinimalData.last_name
                            )
                          )
                        ),
                      ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
            staticClass: "chat-search",
            attrs: {
              placeholder: "search...",
              "hide-details": "",
              outlined: "",
              rounded: "",
              dense: "",
              "prepend-inner-icon": _vm.icons.mdiMagnify,
            },
            model: {
              value: _vm.searchQuery,
              callback: function ($$v) {
                _vm.searchQuery = $$v
              },
              expression: "searchQuery",
            },
          }),
          _vm._v(" "),
          _c(
            vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__["default"],
            {
              staticClass: "d-inline-flex d-md-none ms-1",
              on: {
                click: function ($event) {
                  return _vm.$emit("close-left-sidebar")
                },
              },
            },
            [_vm._v("\n      " + _vm._s(_vm.icons.mdiClose) + "\n    ")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_5__["default"]),
      _vm._v(" "),
      _c(
        "perfect-scrollbar",
        {
          staticClass: "ps-chat-left-sidebar pt-7 pb-3 px-3",
          attrs: { options: _vm.perfectScrollbarOptions },
        },
        [
          _c(
            "div",
            {
              staticStyle: {
                display: "flex",
                "justify-content": "space-between",
              },
            },
            [
              _c(
                "p",
                {
                  staticClass: "font-weight-medium text-xl primary--text ms-3",
                },
                [
                  _vm._v(
                    "\n        " + _vm._s(_vm.$t(_vm.primary_tab)) + "\n      "
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "font-weight-medium text-sm default--text ms-3 cursor-pointer",
                  on: { click: _vm.changeLeftSidebarContent },
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.$t(_vm.secondary_tab)) +
                      "\n      "
                  ),
                ]
              ),
            ]
          ),
          _vm._v(" "),
          _vm.tab == 0
            ? _c(
                "div",
                _vm._l(_vm.filteredChatsContacts, function (chat) {
                  return _c("chat-contact", {
                    key: "chat-" + chat.id,
                    class: {
                      "bg-gradient-primary active-chat-contact":
                        _vm.activeChatContactId === chat.userId,
                    },
                    attrs: {
                      chat: chat,
                      "is-chat-contact": "",
                      "is-active": _vm.activeChatContactId === chat.userId,
                    },
                    on: {
                      click: function ($event) {
                        return _vm.$emit("open-chat", chat.id)
                      },
                      "archive-chat": function ($event) {
                        return _vm.archiveChat(chat.id)
                      },
                    },
                  })
                }),
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.tab == 1
            ? _c(
                "div",
                _vm._l(_vm.filteredArchivedChatsContacts, function (chat) {
                  return _c("chat-contact", {
                    key: "chat-" + chat.id,
                    class: {
                      "bg-gradient-primary active-chat-contact":
                        _vm.activeChatContactId === chat.userId,
                    },
                    attrs: {
                      chat: chat,
                      "is-chat-contact": "",
                      "is-active": _vm.activeChatContactId === chat.userId,
                    },
                    on: {
                      click: function ($event) {
                        return _vm.$emit("open-chat", chat.id)
                      },
                      "archive-chat": function ($event) {
                        return _vm.archiveChat(chat.id)
                      },
                    },
                  })
                }),
                1
              )
            : _vm._e(),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatLog.vue?vue&type=template&id=28f26702":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatLog.vue?vue&type=template&id=28f26702 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/VAvatar.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");




var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "chat-log pa-5" },
    _vm._l(_vm.formattedChatData.formattedChatLog, function (msgGrp, index) {
      return _c(
        "div",
        {
          key: msgGrp.senderId + String(index),
          staticClass: "chat-group d-flex align-start",
          class: [
            { "flex-row-reverse": msgGrp.senderId === _vm.user.id },
            {
              "mb-8":
                _vm.formattedChatData.formattedChatLog.length - 1 !== index,
            },
          ],
        },
        [
          _c(
            "div",
            {
              staticClass: "chat-avatar",
              class:
                msgGrp.senderId === _vm.user.id ? "ms-4 mr-2" : "me-4 ml-2",
            },
            [
              msgGrp.senderId === _vm.user.id
                ? _c(
                    vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_0__["default"],
                    { staticClass: "v-avatar-light-bg", attrs: { size: "38" } },
                    [
                      _vm.user.profile_picture
                        ? _c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            attrs: {
                              src:
                                _vm.user.profile_picture +
                                "?api_token=" +
                                _vm.token,
                            },
                          })
                        : _c("span", [
                            _vm._v(
                              _vm._s(
                                _vm.avatarText(
                                  _vm.user.name + " " + _vm.user.last_name
                                )
                              )
                            ),
                          ]),
                    ],
                    1
                  )
                : _c(
                    vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_0__["default"],
                    { staticClass: "v-avatar-light-bg", attrs: { size: "38" } },
                    [
                      _vm.formattedChatData.otherUser.avatar
                        ? _c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            attrs: {
                              src:
                                _vm.formattedChatData.otherUser.avatar +
                                "?api_token=" +
                                _vm.token,
                            },
                          })
                        : _c("span", [
                            _vm._v(
                              _vm._s(
                                _vm.avatarText(
                                  _vm.formattedChatData.otherUser.name
                                )
                              )
                            ),
                          ]),
                    ],
                    1
                  ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "chat-body d-inline-flex flex-column",
              class:
                msgGrp.senderId === _vm.user.id ? "align-end" : "align-start",
            },
            [
              _vm._l(msgGrp.messages, function (msgData, msgIndex) {
                return _c(
                  "p",
                  {
                    key: "chat_" + Math.random(),
                    staticClass: "chat-content py-3 px-4 elevation-1",
                    class: [
                      msgGrp.senderId === _vm.user.id
                        ? "primary white--text chat-right"
                        : "bg-card chat-left",
                      msgGrp.messages.length - 1 !== msgIndex ? "mb-2" : "mb-1",
                    ],
                  },
                  [
                    msgData.msg != null && msgData.msg.includes("lang.")
                      ? _c("span", [
                          _vm._v(
                            " " +
                              _vm._s(
                                _vm.$t(msgData.msg.split(".")[1], {
                                  name: _vm.tenantName,
                                })
                              )
                          ),
                        ])
                      : _c("span", [_vm._v(_vm._s(msgData.msg))]),
                    _vm._v(" "),
                    msgData.isFile != null
                      ? _c(
                          "a",
                          {
                            staticStyle: { color: "inherit" },
                            attrs: {
                              href: msgData.isFile + "?api_token=" + _vm.token,
                              target: "_blank",
                            },
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "project-images-box" },
                              [
                                _c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                  staticClass: "project-images-icon",
                                  attrs: {
                                    lazy: "",
                                    src: (__webpack_require__(/*! @/assets/images/icons/file-icons/image.png */ "./resources/js/src/assets/images/icons/file-icons/image.png")["default"]),
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "project-images-title" },
                                  [_vm._v(_vm._s(msgData.fileName))]
                                ),
                              ],
                              1
                            ),
                          ]
                        )
                      : _vm._e(),
                  ]
                )
              }),
              _vm._v(" "),
              _c(
                "div",
                { class: { "text-right": msgGrp.senderId === _vm.user.id } },
                [
                  _c("span", { staticClass: "text-xs me-1 text--disabled" }, [
                    _vm._v(
                      _vm._s(msgGrp.messages[msgGrp.messages.length - 1].time)
                    ),
                  ]),
                  _vm._v(" "),
                  msgGrp.senderId === _vm.user.id
                    ? _c(
                        vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"],
                        {
                          attrs: {
                            size: "16",
                            color: _vm.resolveFeedbackIcon(
                              msgGrp.messages[msgGrp.messages.length - 1]
                                .feedback
                            ).color,
                          },
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(
                                _vm.resolveFeedbackIcon(
                                  msgGrp.messages[msgGrp.messages.length - 1]
                                    .feedback
                                ).icon
                              ) +
                              "\n          "
                          ),
                        ]
                      )
                    : _vm._e(),
                ],
                1
              ),
            ],
            2
          ),
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatUserProfileSidebarContent.vue?vue&type=template&id=5e82c5f6":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/chat/ChatUserProfileSidebarContent.vue?vue&type=template&id=5e82c5f6 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/VAvatar.js");
/* harmony import */ var vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VBadge */ "./node_modules/vuetify/lib/components/VBadge/VBadge.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");






var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "user-profile-sidebar-content h-full" }, [
    _c(
      "div",
      { staticClass: "pt-2 me-2 text-right" },
      [
        _c(
          vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_0__["default"],
          {
            attrs: { icon: "", small: "" },
            on: {
              click: function ($event) {
                return _vm.$emit("close-user-profile-sidebar")
              },
            },
          },
          [
            _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], [
              _vm._v(
                "\n          " + _vm._s(_vm.icons.mdiClose) + "\n        "
              ),
            ]),
          ],
          1
        ),
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "text-center px-6 pt-4" },
      [
        _c(
          vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_2__["default"],
          {
            staticClass: "user-status-badge-lg mb-5",
            attrs: {
              bottom: "",
              overlap: "",
              bordered: "",
              color: _vm.resolveAvatarBadgeVariant(_vm.profileUserData.status),
              "offset-x": "24",
              "offset-y": "18",
            },
          },
          [
            _c(
              vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_3__["default"],
              {
                class:
                  "v-avatar-light-bg " +
                  _vm.resolveAvatarBadgeVariant(_vm.profileUserData.status) +
                  "--text",
                attrs: { size: "80" },
              },
              [
                _vm.profileUserData.profile_picture
                  ? _c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      attrs: {
                        src:
                          _vm.profileUserData.profile_picture +
                          "?api_token=" +
                          _vm.token,
                      },
                    })
                  : _c("span", { staticClass: "text-3xl" }, [
                      _vm._v(
                        _vm._s(
                          _vm.avatarText(
                            _vm.profileUserData.name +
                              " " +
                              _vm.profileUserData.last_name
                          )
                        )
                      ),
                    ]),
              ],
              1
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c("h2", { staticClass: "mb-1 font-weight-medium text-base" }, [
          _vm._v(
            "\n        " +
              _vm._s(
                _vm.profileUserData.name + " " + _vm.profileUserData.last_name
              ) +
              "\n      "
          ),
        ]),
        _vm._v(" "),
        _vm.profileUserData.role == "company"
          ? _c("p", { staticClass: "text-capitalize" }, [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.profileUserData.company.company_name) +
                  "\n      "
              ),
            ])
          : _c("p", { staticClass: "text-capitalize" }, [
              _vm._v(
                "\n        " + _vm._s(_vm.profileUserData.role) + "\n      "
              ),
            ]),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbs.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbs.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VBreadcrumbs_VBreadcrumbs_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VBreadcrumbs/VBreadcrumbs.sass */ "./node_modules/vuetify/src/components/VBreadcrumbs/VBreadcrumbs.sass");
/* harmony import */ var _src_components_VBreadcrumbs_VBreadcrumbs_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VBreadcrumbs_VBreadcrumbs_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VBreadcrumbsItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VBreadcrumbsItem */ "./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbsItem.js");
/* harmony import */ var _VBreadcrumbsDivider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VBreadcrumbsDivider */ "./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbsDivider.js");
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Styles
 // Components


 // Mixins

 // Utils


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_mixins_themeable__WEBPACK_IMPORTED_MODULE_2__["default"]
/* @vue/component */
).extend({
  name: 'v-breadcrumbs',
  props: {
    divider: {
      type: String,
      default: '/'
    },
    items: {
      type: Array,
      default: () => []
    },
    large: Boolean
  },
  computed: {
    classes() {
      return {
        'v-breadcrumbs--large': this.large,
        ...this.themeClasses
      };
    }

  },
  methods: {
    genDivider() {
      return this.$createElement(_VBreadcrumbsDivider__WEBPACK_IMPORTED_MODULE_3__["default"], this.$slots.divider ? this.$slots.divider : this.divider);
    },

    genItems() {
      const items = [];
      const hasSlot = !!this.$scopedSlots.item;
      const keys = [];

      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];
        keys.push(item.text);
        if (hasSlot) items.push(this.$scopedSlots.item({
          item
        }));else items.push(this.$createElement(_VBreadcrumbsItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: keys.join('.'),
          props: item
        }, [item.text]));
        if (i < this.items.length - 1) items.push(this.genDivider());
      }

      return items;
    }

  },

  render(h) {
    const children = this.$slots.default || this.genItems();
    return h('ul', {
      staticClass: 'v-breadcrumbs',
      class: this.classes
    }, children);
  }

}));
//# sourceMappingURL=VBreadcrumbs.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbsDivider.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbsDivider.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_helpers__WEBPACK_IMPORTED_MODULE_0__.createSimpleFunctional)('v-breadcrumbs__divider', 'li'));
//# sourceMappingURL=VBreadcrumbsDivider.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbsItem.js":
/*!******************************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbsItem.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/routable */ "./node_modules/vuetify/lib/mixins/routable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");


/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_mixins__WEBPACK_IMPORTED_MODULE_0__["default"])(_mixins_routable__WEBPACK_IMPORTED_MODULE_1__["default"]).extend({
  name: 'v-breadcrumbs-item',
  props: {
    // In a breadcrumb, the currently
    // active item should be dimmed
    activeClass: {
      type: String,
      default: 'v-breadcrumbs__item--disabled'
    },
    ripple: {
      type: [Boolean, Object],
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'v-breadcrumbs__item': true,
        [this.activeClass]: this.disabled
      };
    }

  },

  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    return h('li', [h(tag, { ...data,
      attrs: { ...data.attrs,
        'aria-current': this.isActive && this.isLink ? 'page' : undefined
      }
    }, this.$slots.default)]);
  }

}));
//# sourceMappingURL=VBreadcrumbsItem.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VCard/VCard.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VCard/VCard.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VCard/VCard.sass */ "./node_modules/vuetify/src/components/VCard/VCard.sass");
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../VSheet */ "./node_modules/vuetify/lib/components/VSheet/index.js");
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/loadable */ "./node_modules/vuetify/lib/mixins/loadable/index.js");
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/routable */ "./node_modules/vuetify/lib/mixins/routable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Styles
 // Extensions

 // Mixins


 // Helpers


/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_mixins_loadable__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_routable__WEBPACK_IMPORTED_MODULE_3__["default"], _VSheet__WEBPACK_IMPORTED_MODULE_4__["default"]).extend({
  name: 'v-card',
  props: {
    flat: Boolean,
    hover: Boolean,
    img: String,
    link: Boolean,
    loaderHeight: {
      type: [Number, String],
      default: 4
    },
    raised: Boolean
  },
  computed: {
    classes() {
      return {
        'v-card': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_3__["default"].options.computed.classes.call(this),
        'v-card--flat': this.flat,
        'v-card--hover': this.hover,
        'v-card--link': this.isClickable,
        'v-card--loading': this.loading,
        'v-card--disabled': this.disabled,
        'v-card--raised': this.raised,
        ..._VSheet__WEBPACK_IMPORTED_MODULE_4__["default"].options.computed.classes.call(this)
      };
    },

    styles() {
      const style = { ..._VSheet__WEBPACK_IMPORTED_MODULE_4__["default"].options.computed.styles.call(this)
      };

      if (this.img) {
        style.background = `url("${this.img}") center center / cover no-repeat`;
      }

      return style;
    }

  },
  methods: {
    genProgress() {
      const render = _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__["default"].options.methods.genProgress.call(this);
      if (!render) return null;
      return this.$createElement('div', {
        staticClass: 'v-card__progress',
        key: 'progress'
      }, [render]);
    }

  },

  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.style = this.styles;

    if (this.isClickable) {
      data.attrs = data.attrs || {};
      data.attrs.tabindex = 0;
    }

    return h(tag, this.setBackgroundColor(this.color, data), [this.genProgress(), this.$slots.default]);
  }

}));
//# sourceMappingURL=VCard.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VFileInput/VFileInput.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VFileInput/VFileInput.sass */ "./node_modules/vuetify/src/components/VFileInput/VFileInput.sass");
/* harmony import */ var _src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var _VChip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../VChip */ "./node_modules/vuetify/lib/components/VChip/VChip.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/mergeData */ "./node_modules/vuetify/lib/util/mergeData.js");
// Styles
 // Extensions

 // Components

 // Utilities




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_VTextField__WEBPACK_IMPORTED_MODULE_1__["default"].extend({
  name: 'v-file-input',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    chips: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    counterSizeString: {
      type: String,
      default: '$vuetify.fileInput.counterSize'
    },
    counterString: {
      type: String,
      default: '$vuetify.fileInput.counter'
    },
    hideInput: Boolean,
    multiple: Boolean,
    placeholder: String,
    prependIcon: {
      type: String,
      default: '$file'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showSize: {
      type: [Boolean, Number],
      default: false,
      validator: v => {
        return typeof v === 'boolean' || [1000, 1024].includes(v);
      }
    },
    smallChips: Boolean,
    truncateLength: {
      type: [Number, String],
      default: 22
    },
    type: {
      type: String,
      default: 'file'
    },
    value: {
      default: undefined,
      validator: val => {
        return (0,_util_helpers__WEBPACK_IMPORTED_MODULE_2__.wrapInArray)(val).every(v => v != null && typeof v === 'object');
      }
    }
  },
  computed: {
    classes() {
      return { ..._VTextField__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.classes.call(this),
        'v-file-input': true
      };
    },

    computedCounterValue() {
      const fileCount = this.multiple && this.lazyValue ? this.lazyValue.length : this.lazyValue instanceof File ? 1 : 0;
      if (!this.showSize) return this.$vuetify.lang.t(this.counterString, fileCount);
      const bytes = this.internalArrayValue.reduce((bytes, {
        size = 0
      }) => {
        return bytes + size;
      }, 0);
      return this.$vuetify.lang.t(this.counterSizeString, fileCount, (0,_util_helpers__WEBPACK_IMPORTED_MODULE_2__.humanReadableFileSize)(bytes, this.base === 1024));
    },

    internalArrayValue() {
      return (0,_util_helpers__WEBPACK_IMPORTED_MODULE_2__.wrapInArray)(this.internalValue);
    },

    internalValue: {
      get() {
        return this.lazyValue;
      },

      set(val) {
        this.lazyValue = val;
        this.$emit('change', this.lazyValue);
      }

    },

    isDirty() {
      return this.internalArrayValue.length > 0;
    },

    isLabelActive() {
      return this.isDirty;
    },

    text() {
      if (!this.isDirty && (this.persistentPlaceholder || this.isFocused || !this.hasLabel)) return [this.placeholder];
      return this.internalArrayValue.map(file => {
        const {
          name = '',
          size = 0
        } = file;
        const truncatedText = this.truncateText(name);
        return !this.showSize ? truncatedText : `${truncatedText} (${(0,_util_helpers__WEBPACK_IMPORTED_MODULE_2__.humanReadableFileSize)(size, this.base === 1024)})`;
      });
    },

    base() {
      return typeof this.showSize !== 'boolean' ? this.showSize : undefined;
    },

    hasChips() {
      return this.chips || this.smallChips;
    }

  },
  watch: {
    readonly: {
      handler(v) {
        if (v === true) (0,_util_console__WEBPACK_IMPORTED_MODULE_3__.consoleError)('readonly is not supported on <v-file-input>', this);
      },

      immediate: true
    },

    value(v) {
      const value = this.multiple ? v : v ? [v] : [];

      if (!(0,_util_helpers__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(value, this.$refs.input.files)) {
        // When the input value is changed programatically, clear the
        // internal input's value so that the `onInput` handler
        // can be triggered again if the user re-selects the exact
        // same file(s). Ideally, `input.files` should be
        // manipulated directly but that property is readonly.
        this.$refs.input.value = '';
      }
    }

  },
  methods: {
    clearableCallback() {
      this.internalValue = this.multiple ? [] : null;
      this.$refs.input.value = '';
    },

    genChips() {
      if (!this.isDirty) return [];
      return this.text.map((text, index) => this.$createElement(_VChip__WEBPACK_IMPORTED_MODULE_4__["default"], {
        props: {
          small: this.smallChips
        },
        on: {
          'click:close': () => {
            const internalValue = this.internalValue;
            internalValue.splice(index, 1);
            this.internalValue = internalValue; // Trigger the watcher
          }
        }
      }, [text]));
    },

    genControl() {
      const render = _VTextField__WEBPACK_IMPORTED_MODULE_1__["default"].options.methods.genControl.call(this);

      if (this.hideInput) {
        render.data.style = (0,_util_mergeData__WEBPACK_IMPORTED_MODULE_5__.mergeStyles)(render.data.style, {
          display: 'none'
        });
      }

      return render;
    },

    genInput() {
      const input = _VTextField__WEBPACK_IMPORTED_MODULE_1__["default"].options.methods.genInput.call(this);
      input.data.attrs.multiple = this.multiple; // We should not be setting value
      // programmatically on the input
      // when it is using type="file"

      delete input.data.domProps.value; // This solves an issue in Safari where
      // nothing happens when adding a file
      // due to the input event not firing
      // https://github.com/vuetifyjs/vuetify/issues/7941

      delete input.data.on.input;
      input.data.on.change = this.onInput;
      return [this.genSelections(), input];
    },

    genPrependSlot() {
      if (!this.prependIcon) return null;
      const icon = this.genIcon('prepend', () => {
        this.$refs.input.click();
      });
      return this.genSlot('prepend', 'outer', [icon]);
    },

    genSelectionText() {
      const length = this.text.length;
      if (length < 2) return this.text;
      if (this.showSize && !this.counter) return [this.computedCounterValue];
      return [this.$vuetify.lang.t(this.counterString, length)];
    },

    genSelections() {
      const children = [];

      if (this.isDirty && this.$scopedSlots.selection) {
        this.internalArrayValue.forEach((file, index) => {
          if (!this.$scopedSlots.selection) return;
          children.push(this.$scopedSlots.selection({
            text: this.text[index],
            file,
            index
          }));
        });
      } else {
        children.push(this.hasChips && this.isDirty ? this.genChips() : this.genSelectionText());
      }

      return this.$createElement('div', {
        staticClass: 'v-file-input__text',
        class: {
          'v-file-input__text--placeholder': this.placeholder && !this.isDirty,
          'v-file-input__text--chips': this.hasChips && !this.$scopedSlots.selection
        }
      }, children);
    },

    genTextFieldSlot() {
      const node = _VTextField__WEBPACK_IMPORTED_MODULE_1__["default"].options.methods.genTextFieldSlot.call(this);
      node.data.on = { ...(node.data.on || {}),
        click: e => {
          // Clicking the label already delegates to input element, so we shouldn't click it twice
          if (e.target && e.target.nodeName === 'LABEL') return;
          this.$refs.input.click();
        }
      };
      return node;
    },

    onInput(e) {
      const files = [...(e.target.files || [])];
      this.internalValue = this.multiple ? files : files[0]; // Set initialValue here otherwise isFocused
      // watcher in VTextField will emit a change
      // event whenever the component is blurred

      this.initialValue = this.internalValue;
    },

    onKeyDown(e) {
      this.$emit('keydown', e);
    },

    truncateText(str) {
      if (str.length < Number(this.truncateLength)) return str;
      const charsKeepOneSide = Math.floor((Number(this.truncateLength) - 1) / 2);
      return `${str.slice(0, charsKeepOneSide)}…${str.slice(str.length - charsKeepOneSide)}`;
    }

  }
}));
//# sourceMappingURL=VFileInput.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VForm/VForm.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VForm/VForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/binds-attrs */ "./node_modules/vuetify/lib/mixins/binds-attrs/index.js");
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/registrable */ "./node_modules/vuetify/lib/mixins/registrable/index.js");
// Mixins



/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_mixins__WEBPACK_IMPORTED_MODULE_0__["default"])(_mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__["default"], (0,_mixins_registrable__WEBPACK_IMPORTED_MODULE_2__.provide)('form')
/* @vue/component */
).extend({
  name: 'v-form',

  provide() {
    return {
      form: this
    };
  },

  inheritAttrs: false,
  props: {
    disabled: Boolean,
    lazyValidation: Boolean,
    readonly: Boolean,
    value: Boolean
  },
  data: () => ({
    inputs: [],
    watchers: [],
    errorBag: {}
  }),
  watch: {
    errorBag: {
      handler(val) {
        const errors = Object.values(val).includes(true);
        this.$emit('input', !errors);
      },

      deep: true,
      immediate: true
    }
  },
  methods: {
    watchInput(input) {
      const watcher = input => {
        return input.$watch('hasError', val => {
          this.$set(this.errorBag, input._uid, val);
        }, {
          immediate: true
        });
      };

      const watchers = {
        _uid: input._uid,
        valid: () => {},
        shouldValidate: () => {}
      };

      if (this.lazyValidation) {
        // Only start watching inputs if we need to
        watchers.shouldValidate = input.$watch('shouldValidate', val => {
          if (!val) return; // Only watch if we're not already doing it

          if (this.errorBag.hasOwnProperty(input._uid)) return;
          watchers.valid = watcher(input);
        });
      } else {
        watchers.valid = watcher(input);
      }

      return watchers;
    },

    /** @public */
    validate() {
      return this.inputs.filter(input => !input.validate(true)).length === 0;
    },

    /** @public */
    reset() {
      this.inputs.forEach(input => input.reset());
      this.resetErrorBag();
    },

    resetErrorBag() {
      if (this.lazyValidation) {
        // Account for timeout in validatable
        setTimeout(() => {
          this.errorBag = {};
        }, 0);
      }
    },

    /** @public */
    resetValidation() {
      this.inputs.forEach(input => input.resetValidation());
      this.resetErrorBag();
    },

    register(input) {
      this.inputs.push(input);
      this.watchers.push(this.watchInput(input));
    },

    unregister(input) {
      const found = this.inputs.find(i => i._uid === input._uid);
      if (!found) return;
      const unwatch = this.watchers.find(i => i._uid === found._uid);

      if (unwatch) {
        unwatch.valid();
        unwatch.shouldValidate();
      }

      this.watchers = this.watchers.filter(i => i._uid !== found._uid);
      this.inputs = this.inputs.filter(i => i._uid !== found._uid);
      this.$delete(this.errorBag, found._uid);
    }

  },

  render(h) {
    return h('form', {
      staticClass: 'v-form',
      attrs: {
        novalidate: true,
        ...this.attrs$
      },
      on: {
        submit: e => this.$emit('submit', e)
      }
    }, this.$slots.default);
  }

}));
//# sourceMappingURL=VForm.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VTextField/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VTextField/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VTextField: () => (/* reexport safe */ _VTextField__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VTextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_VTextField__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ })

}]);