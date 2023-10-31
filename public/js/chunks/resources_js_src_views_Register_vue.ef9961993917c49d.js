"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Register.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Register.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _core_utils_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/validation */ "./resources/js/src/@core/utils/validation.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils */ "./resources/js/src/@core/utils/index.js");
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

// eslint-disable-next-line object-curly-newline





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    // Template Refs
    var registerForm = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.ref)(null);
    var vm = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.getCurrentInstance)().proxy;
    var _useRouter = (0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
      router = _useRouter.router;
    var isPasswordVisible = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.ref)(false);
    var name = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.ref)('john');
    var surname = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.ref)('doe');
    var privacy_policy = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.ref)(false);
    var email = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.ref)('john@example.com');
    var zip = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.ref)('8001');
    console.log(birthday);
    var tmpDate = new Date();
    var birthday = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.ref)(tmpDate.getFullYear() + '-' + (tmpDate.getMonth() + 1) + '-' + tmpDate.getDate());
    var role = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.ref)('client');
    var errorMessages = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.ref)([]);
    var dateMenuModal = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.ref)(false);
    var formatDate = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.computed)(function () {
      console.log('test', birthday.value);
      return moment__WEBPACK_IMPORTED_MODULE_3___default()(birthday.value).format('DD.MM.YYYY');
    });
    var socialLink = [{
      icon: _mdi_js__WEBPACK_IMPORTED_MODULE_5__.mdiFacebook,
      color: '#4267b2',
      colorInDark: '#4267b2'
    }, {
      icon: _mdi_js__WEBPACK_IMPORTED_MODULE_5__.mdiTwitter,
      color: '#1da1f2',
      colorInDark: '#1da1f2'
    }, {
      icon: _mdi_js__WEBPACK_IMPORTED_MODULE_5__.mdiGithub,
      color: '#272727',
      colorInDark: '#fff'
    }, {
      icon: _mdi_js__WEBPACK_IMPORTED_MODULE_5__.mdiGoogle,
      color: '#db4437',
      colorInDark: '#db4437'
    }];
    var handleFormSubmit = function handleFormSubmit() {
      var isFormValid = registerForm.value.validate();
      if (!isFormValid) return;
      axios.post('/register', {
        name: name.value,
        surname: surname.value,
        privacy_policy: privacy_policy.value,
        zip: zip.value,
        birthday: birthday.value,
        email: email.value,
        role: role.value
      }).then(function (response) {
        if (response.data.status) {
          window.location = '/register-success-page';
        }
        // const { tokens } = response.data.data.tokens
        // const { user } = response.data.data.user
        //   axios.defaults.headers.common['Authorization'] = tokens.token_type + ' ' + tokens.access_token;
        //   store.dispatch('updateToken', tokens.access_token);
        //   store.dispatch('updateUser', user);
        //     window.user = store.state.user
        //     //as now only admin is used in this version it has postfix _new
        //     window.location = '/' + user.role + '_new';
      })["catch"](function (error) {
        // TODO: Next Update - Show notification
        console.error('Oops, Unable to Register!');
        console.log('error :>> ', error.response);
        errorMessages.value = error.response.data.errors;
      });
    };
    return {
      isPasswordVisible: isPasswordVisible,
      name: name,
      surname: surname,
      privacy_policy: privacy_policy,
      email: email,
      zip: zip,
      birthday: birthday,
      role: role,
      errorMessages: errorMessages,
      handleFormSubmit: handleFormSubmit,
      socialLink: socialLink,
      dateMenuModal: dateMenuModal,
      formatDate: formatDate,
      moment: (moment__WEBPACK_IMPORTED_MODULE_3___default()),
      icons: {
        mdiEyeOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_5__.mdiEyeOutline,
        mdiEyeOffOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_5__.mdiEyeOffOutline
      },
      validators: {
        required: _core_utils_validation__WEBPACK_IMPORTED_MODULE_0__.required,
        emailValidator: _core_utils_validation__WEBPACK_IMPORTED_MODULE_0__.emailValidator,
        passwordValidator: _core_utils_validation__WEBPACK_IMPORTED_MODULE_0__.passwordValidator,
        alphaValidator: _core_utils_validation__WEBPACK_IMPORTED_MODULE_0__.alphaValidator
      },
      // themeConfig
      appName: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].app.name,
      appLogo: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].app.logo,
      loginImage: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].app.loginImage,
      // Template Refs
      registerForm: registerForm
    };
  }
});

/***/ }),

/***/ "./resources/js/src/@core/utils/validation.js":
/*!****************************************************!*\
  !*** ./resources/js/src/@core/utils/validation.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alphaDashValidator: () => (/* binding */ alphaDashValidator),
/* harmony export */   alphaValidator: () => (/* binding */ alphaValidator),
/* harmony export */   between: () => (/* binding */ between),
/* harmony export */   confirmedValidator: () => (/* binding */ confirmedValidator),
/* harmony export */   decimalValidator: () => (/* binding */ decimalValidator),
/* harmony export */   emailValidator: () => (/* binding */ emailValidator),
/* harmony export */   integerValidator: () => (/* binding */ integerValidator),
/* harmony export */   lengthValidator: () => (/* binding */ lengthValidator),
/* harmony export */   passwordValidator: () => (/* binding */ passwordValidator),
/* harmony export */   positiveNumber: () => (/* binding */ positiveNumber),
/* harmony export */   regexValidator: () => (/* binding */ regexValidator),
/* harmony export */   required: () => (/* binding */ required),
/* harmony export */   urlValidator: () => (/* binding */ urlValidator)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./resources/js/src/@core/utils/index.js");


// export const required = value => (value && value.length ? true : 'This field is required')
var required = function required(value) {
  return !!value || i18n.t('field_is_required');
};
var emailValidator = function emailValidator(value) {
  if ((0,_index__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(value)) {
    return true;
  }

  // eslint-disable-next-line
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return re.test(String(val));
    });
  }
  return re.test(String(value)) || 'The Email field must be a valid email';
};
var passwordValidator = function passwordValidator(password) {
  /* eslint-disable no-useless-escape */
  var regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
  /* eslint-enable no-useless-escape */
  var validPassword = regExp.test(password);
  return (
    // eslint-disable-next-line operator-linebreak
    validPassword || 'Field must contain at least one uppercase, lowercase, special character and digit with min 8 chars'
  );
};
var confirmedValidator = function confirmedValidator(value, target) {
  return (
    // eslint-disable-next-line implicit-arrow-linebreak
    value === target || 'The Confirm Password field confirmation does not match'
  );
};
var between = function between(value, min, max) {
  return function () {
    var valueAsNumber = Number(value);
    return Number(min) <= valueAsNumber && Number(max) >= valueAsNumber || "Enter number between ".concat(min, " and ").concat(max);
  };
};
var integerValidator = function integerValidator(value) {
  if ((0,_index__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(value)) {
    return true;
  }
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return /^-?[0-9]+$/.test(String(val));
    });
  }
  return /^-?[0-9]+$/.test(String(value)) || 'This field must be an integer';
};
var decimalValidator = function decimalValidator(value) {
  //for empty use the required validation in the form inputs
  // if (isEmpty(value)) {
  //   return true
  // }

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return /^-?\d{0,12}(?:\.\d{0,2})?$/.test(String(val));
    });
  }
  return /^-?\d{0,12}(?:\.\d{0,2})?$/.test(String(value)) || i18n.t('not_a_valid_decimal_input');
};
var positiveNumber = function positiveNumber(value) {
  if ((0,_index__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(value)) {
    return true;
  }
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return /^-?[0-9]+$/.test(String(val));
    });
  }
  return /^-?[0-9]+$/.test(String(value)) || 'This field must be positive';
};
var regexValidator = function regexValidator(value, regex) {
  if ((0,_index__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(value)) {
    return true;
  }
  var regeX = regex;
  if (typeof regeX === 'string') {
    regeX = new RegExp(regeX);
  }
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return regexValidator(val, {
        regeX: regeX
      });
    });
  }
  return regeX.test(String(value)) || 'The Regex field format is invalid';
};
var alphaValidator = function alphaValidator(value) {
  if ((0,_index__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(value)) {
    return true;
  }

  // const valueAsString = String(value)

  return /^[A-Z]*$/i.test(String(value)) || 'The Alpha field may only contain alphabetic characters';
};
var urlValidator = function urlValidator(value) {
  if ((0,_index__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(value)) {
    return i18n.t('field_is_required');
  }
  /* eslint-disable no-useless-escape */
  var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
  return re.test(value) || i18n.t('url_is_invalid');
};
var lengthValidator = function lengthValidator(value, length) {
  if ((0,_index__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(value)) {
    return true;
  }
  return value.length === length || "The Min Character field must be at least ".concat(length, " characters");
};
var alphaDashValidator = function alphaDashValidator(value) {
  if ((0,_index__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(value)) {
    return true;
  }
  var valueAsString = String(value);
  return /^[0-9A-Z_-]*$/i.test(valueAsString) || 'All Character is not valid';
};

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Register.vue?vue&type=style&index=0&id=9e7fef66&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Register.vue?vue&type=style&index=0&id=9e7fef66&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* scrollbar */\n[data-v-9e7fef66]::-webkit-scrollbar {\n  width: 5px;\n}\n\n/* Track */\n[data-v-9e7fef66]::-webkit-scrollbar-track {\n  background: #fff;\n}\n\n/* Handle */\n[data-v-9e7fef66]::-webkit-scrollbar-thumb {\n  background: #23b0e8;\n}\n\n/* Handle on hover */\n[data-v-9e7fef66]::-webkit-scrollbar-thumb:hover {\n  background: #1c8cb9;\n}\n.auth-wrapper[data-v-9e7fef66] {\n  display: flex;\n  min-height: calc(var(--vh, 1vh) * 100);\n  width: 100%;\n  flex-basis: 100%;\n  align-items: center;\n}\n.auth-wrapper a[data-v-9e7fef66] {\n  text-decoration: unset;\n}\n.auth-wrapper.auth-v1[data-v-9e7fef66] {\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  padding: 1.5rem;\n}\n.auth-wrapper.auth-v1 .auth-mask-bg[data-v-9e7fef66] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.auth-wrapper.auth-v1 .auth-tree[data-v-9e7fef66],\n.auth-wrapper.auth-v1 .auth-tree-3[data-v-9e7fef66] {\n  position: absolute;\n}\n.auth-wrapper.auth-v1 .auth-tree[data-v-9e7fef66] {\n  bottom: 0;\n  left: 0;\n}\n.auth-wrapper.auth-v1 .auth-tree-3[data-v-9e7fef66] {\n  bottom: 0;\n  right: 0;\n}\n.auth-wrapper.auth-v1 .auth-inner[data-v-9e7fef66] {\n  width: 28rem;\n  z-index: 1;\n}\n.auth-wrapper.auth-v1 .auth-inner .auth-card[data-v-9e7fef66] {\n  padding: 0.9375rem 0.875rem;\n}\n.auth-wrapper.auth-v2[data-v-9e7fef66] {\n  align-items: flex-start;\n}\n.auth-wrapper.auth-v2 .auth-inner[data-v-9e7fef66] {\n  height: calc(var(--vh, 1vh) * 100);\n  width: 100%;\n  margin: 0;\n}\n.auth-wrapper.auth-v2 .auth-inner .brand-logo[data-v-9e7fef66] {\n  text-decoration: unset;\n  position: absolute;\n  top: 1.83rem;\n  left: 2.5rem;\n  z-index: 1;\n}\n.auth-wrapper.auth-v2 .auth-inner .auth-row[data-v-9e7fef66] {\n  height: 100%;\n}\n.auth-wrapper.auth-v2 .auth-inner .auth-row .auth-illustrator-wrapper[data-v-9e7fef66] {\n  width: 100%;\n  height: 100%;\n}\n.auth-wrapper.auth-v2 .auth-inner .auth-bg .v-card[data-v-9e7fef66] {\n  max-width: 26rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n.auth-wrapper.auth-v2 .auth-inner .auth-mask-bg[data-v-9e7fef66] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.auth-wrapper.auth-v2 .auth-inner .auth-tree[data-v-9e7fef66] {\n  left: 0;\n  left: 2.125rem;\n  bottom: 2.688rem;\n  position: absolute;\n}\n.v-application.theme--light .auth-wrapper.auth-v2 .auth-inner .auth-bg[data-v-9e7fef66] {\n  background: #fff;\n}\n.v-application.theme--dark .auth-wrapper.auth-v2 .auth-inner .auth-bg[data-v-9e7fef66] {\n  background: #312d4b;\n}\n@media (max-width: 600px) {\n.auth-v1 .auth-tree[data-v-9e7fef66],\n.auth-v1 .auth-tree-3[data-v-9e7fef66],\n.auth-v1 .auth-mask-bg[data-v-9e7fef66] {\n    display: none;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Register.vue?vue&type=style&index=0&id=9e7fef66&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Register.vue?vue&type=style&index=0&id=9e7fef66&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_9e7fef66_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=style&index=0&id=9e7fef66&lang=scss&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Register.vue?vue&type=style&index=0&id=9e7fef66&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_9e7fef66_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_9e7fef66_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/Register.vue":
/*!*********************************************!*\
  !*** ./resources/js/src/views/Register.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_9e7fef66_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=9e7fef66&scoped=true */ "./resources/js/src/views/Register.vue?vue&type=template&id=9e7fef66&scoped=true");
/* harmony import */ var _Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js */ "./resources/js/src/views/Register.vue?vue&type=script&lang=js");
/* harmony import */ var _Register_vue_vue_type_style_index_0_id_9e7fef66_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&id=9e7fef66&lang=scss&scoped=true */ "./resources/js/src/views/Register.vue?vue&type=style&index=0&id=9e7fef66&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_9e7fef66_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_9e7fef66_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9e7fef66",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Register.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/Register.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Register.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Register.vue?vue&type=style&index=0&id=9e7fef66&lang=scss&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/Register.vue?vue&type=style&index=0&id=9e7fef66&lang=scss&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_9e7fef66_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=style&index=0&id=9e7fef66&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Register.vue?vue&type=style&index=0&id=9e7fef66&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/src/views/Register.vue?vue&type=template&id=9e7fef66&scoped=true":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/Register.vue?vue&type=template&id=9e7fef66&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_9e7fef66_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_9e7fef66_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_9e7fef66_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=9e7fef66&scoped=true */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Register.vue?vue&type=template&id=9e7fef66&scoped=true");


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Register.vue?vue&type=template&id=9e7fef66&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Register.vue?vue&type=template&id=9e7fef66&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {}
var staticRenderFns = []



/***/ })

}]);