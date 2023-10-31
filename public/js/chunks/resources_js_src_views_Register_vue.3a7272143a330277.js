(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Register.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Register.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _core_utils_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/validation */ "./resources/js/src/@core/utils/validation.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils */ "./resources/js/src/@core/utils/index.js");
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var registerForm = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var vm = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__.getCurrentInstance)().proxy;
    var _useRouter = (0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
      router = _useRouter.router;
    var isPasswordVisible = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__.ref)(false);
    var name = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__.ref)('john');
    var surname = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__.ref)('doe');
    var privacy_policy = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__.ref)(false);
    var email = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__.ref)('john@example.com');
    var zip = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__.ref)('8001');
    var birthday = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__.ref)(new Date(2022, new Date().getMonth(), new Date().getDate()));
    var role = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__.ref)('client');
    var errorMessages = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__.ref)([]);
    var socialLink = [{
      icon: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiFacebook,
      color: '#4267b2',
      colorInDark: '#4267b2'
    }, {
      icon: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiTwitter,
      color: '#1da1f2',
      colorInDark: '#1da1f2'
    }, {
      icon: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiGithub,
      color: '#272727',
      colorInDark: '#fff'
    }, {
      icon: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiGoogle,
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
      icons: {
        mdiEyeOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiEyeOutline,
        mdiEyeOffOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiEyeOffOutline
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

"use strict";
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./node_modules/vuetify/src/components/VCheckbox/VCheckbox.sass":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./node_modules/vuetify/src/components/VCheckbox/VCheckbox.sass ***!
  \****************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.v-input--checkbox.v-input--indeterminate.v-input--is-disabled {
  opacity: 0.6;
}
.v-input--checkbox.v-input--dense {
  margin-top: 4px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/images/misc/mask-v2-dark.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/misc/mask-v2-dark.png ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "/images/mask-v2-dark.png?9ca215d9da739d9fb828f3fe9cb2199f";

/***/ }),

/***/ "./resources/js/src/assets/images/misc/mask-v2-light.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/misc/mask-v2-light.png ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/mask-v2-light.png?8b67a8765643b4719300b57578e9bf82";

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Register.vue?vue&type=style&index=0&id=9e7fef66&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Register.vue?vue&type=style&index=0&id=9e7fef66&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_9e7fef66_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=style&index=0&id=9e7fef66&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Register.vue?vue&type=style&index=0&id=9e7fef66&lang=scss&scoped=true");


/***/ }),

/***/ "./node_modules/vuetify/src/components/VCheckbox/VCheckbox.sass":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VCheckbox/VCheckbox.sass ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!../../../../sass-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./VCheckbox.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./node_modules/vuetify/src/components/VCheckbox/VCheckbox.sass");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("081b16f0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/js/src/views/Register.vue?vue&type=template&id=9e7fef66&scoped=true":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/Register.vue?vue&type=template&id=9e7fef66&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDatePicker */ "./node_modules/vuetify/lib/components/VDatePicker/VDatePicker.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");











var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "auth-wrapper auth-v2" }, [
    _c(
      "div",
      { staticClass: "auth-inner" },
      [
        _c(
          "router-link",
          { staticClass: "brand-logo d-flex align-center", attrs: { to: "/" } },
          [
            _c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_0__["default"], {
              staticClass: "me-3",
              attrs: {
                src: _vm.appLogo,
                "max-height": "80px",
                "max-width": "150px",
                alt: "logo",
                contain: "",
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"],
          { staticClass: "auth-row ma-0" },
          [
            _c(
              vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"],
              {
                staticClass:
                  "d-none d-lg-block position-relative overflow-hidden pa-0",
                attrs: { lg: "7" },
              },
              [
                _c("div", { staticClass: "auth-illustrator-wrapper" }, [
                  _c("img", {
                    staticClass: "auth-mask-bg",
                    attrs: {
                      height: "362",
                      src: __webpack_require__("./resources/js/src/assets/images/misc sync recursive ^\\.\\/mask\\-v2\\-.*\\.png$")("./mask-v2-" +
                        (_vm.$vuetify.theme.dark ? "dark" : "light") +
                        ".png").default,
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex align-center h-full pa-16 pe-0" },
                    [
                      _c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_0__["default"], {
                        staticClass: "auth-3d-group",
                        attrs: {
                          contain: "",
                          "max-width": "100%",
                          height: "710",
                          src: _vm.loginImage,
                        },
                      }),
                    ],
                    1
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"],
              {
                staticClass: "d-flex align-center auth-bg pa-10 pb-0",
                attrs: { lg: "5" },
              },
              [
                _c(
                  vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"],
                  [
                    _c(
                      vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"],
                      {
                        staticClass: "mx-auto",
                        attrs: { cols: "12", sm: "8", md: "6", lg: "12" },
                      },
                      [
                        _c(
                          vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__["default"],
                          {
                            staticStyle: { "max-width": "100% !important" },
                            attrs: { flat: "" },
                          },
                          [
                            _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__.VCardText, [
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "text-2xl font-weight-semibold text--primary my-2",
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("register_and_start_title"))
                                  ),
                                ]
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__.VCardText,
                              [
                                _c(
                                  vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_5__["default"],
                                  {
                                    ref: "registerForm",
                                    on: {
                                      submit: function ($event) {
                                        $event.preventDefault()
                                        return _vm.handleFormSubmit.apply(
                                          null,
                                          arguments
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"],
                                      [
                                        _c(
                                          vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"],
                                          { attrs: { sm: "12", md: "6" } },
                                          [
                                            _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                              staticClass: "mb-6",
                                              attrs: {
                                                outlined: "",
                                                label: _vm.$t("name"),
                                                "error-messages":
                                                  _vm.errorMessages.name,
                                                rules: [
                                                  _vm.validators.required,
                                                  _vm.validators.alphaValidator,
                                                ],
                                                placeholder: _vm.$t("name"),
                                                "hide-details": "auto",
                                              },
                                              model: {
                                                value: _vm.name,
                                                callback: function ($$v) {
                                                  _vm.name = $$v
                                                },
                                                expression: "name",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"],
                                          { attrs: { sm: "12", md: "6" } },
                                          [
                                            _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                              staticClass: "mb-6",
                                              attrs: {
                                                outlined: "",
                                                label: _vm.$t("surname"),
                                                "error-messages":
                                                  _vm.errorMessages.surname,
                                                rules: [
                                                  _vm.validators.required,
                                                  _vm.validators.alphaValidator,
                                                ],
                                                placeholder: _vm.$t("surname"),
                                                "hide-details": "auto",
                                              },
                                              model: {
                                                value: _vm.surname,
                                                callback: function ($$v) {
                                                  _vm.surname = $$v
                                                },
                                                expression: "surname",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                      staticClass: "mb-6",
                                      attrs: {
                                        outlined: "",
                                        "error-messages":
                                          _vm.errorMessages.email,
                                        rules: [
                                          _vm.validators.required,
                                          _vm.validators.emailValidator,
                                        ],
                                        label: _vm.$t("email"),
                                        placeholder: _vm.$t("email"),
                                        "hide-details": "auto",
                                      },
                                      model: {
                                        value: _vm.email,
                                        callback: function ($$v) {
                                          _vm.email = $$v
                                        },
                                        expression: "email",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"],
                                      [
                                        _c(
                                          vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"],
                                          { attrs: { sm: "12", md: "6" } },
                                          [_c(vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_7__["default"])],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                      staticClass: "mb-6",
                                      attrs: {
                                        outlined: "",
                                        "error-messages":
                                          _vm.errorMessages.role,
                                        rules: [_vm.validators.required],
                                        label: _vm.$t("role"),
                                        placeholder: _vm.$t("role"),
                                        "hide-details": "auto",
                                      },
                                      model: {
                                        value: _vm.role,
                                        callback: function ($$v) {
                                          _vm.role = $$v
                                        },
                                        expression: "role",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c(vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                      staticClass: "mt-0",
                                      attrs: {
                                        "error-messages":
                                          _vm.errorMessages.privacy_policy,
                                        rules: [_vm.validators.required],
                                        "hide-details": "",
                                      },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "label",
                                          fn: function () {
                                            return [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "d-flex align-center flex-wrap",
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    { staticClass: "me-2" },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t("i_agree_to")
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                  _c(
                                                    "a",
                                                    {
                                                      attrs: {
                                                        href: "/datenschutz",
                                                        target: "_blank",
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "privacy_policy"
                                                          )
                                                        ) + "  "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(
                                                    "\n                          " +
                                                      _vm._s(_vm.$t("and"))
                                                  ),
                                                  _c(
                                                    "a",
                                                    {
                                                      attrs: {
                                                        href: "/agb",
                                                        target: "_blank",
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            _vm.$t("terms")
                                                          )
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          },
                                          proxy: true,
                                        },
                                      ]),
                                      model: {
                                        value: _vm.privacy_policy,
                                        callback: function ($$v) {
                                          _vm.privacy_policy = $$v
                                        },
                                        expression: "privacy_policy",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_9__["default"],
                                      {
                                        staticClass: "mt-6",
                                        attrs: {
                                          block: "",
                                          color: "primary",
                                          type: "submit",
                                        },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("sign_up")))]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__.VCardText,
                              {
                                staticClass:
                                  "d-flex align-center justify-center flex-wrap mt-2",
                              },
                              [
                                _c("p", { staticClass: "mb-0 me-2" }, [
                                  _vm._v(
                                    _vm._s(_vm.$t("already_have_an_account"))
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "router-link",
                                  { attrs: { to: { name: "auth-login" } } },
                                  [_vm._v(_vm._s(_vm.$t("sign_in_instead")))]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/vuetify/lib/components/VCard/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VCard/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VCard: () => (/* reexport safe */ _VCard__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   VCardActions: () => (/* binding */ VCardActions),
/* harmony export */   VCardSubtitle: () => (/* binding */ VCardSubtitle),
/* harmony export */   VCardText: () => (/* binding */ VCardText),
/* harmony export */   VCardTitle: () => (/* binding */ VCardTitle),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");


const VCardActions = (0,_util_helpers__WEBPACK_IMPORTED_MODULE_0__.createSimpleFunctional)('v-card__actions');
const VCardSubtitle = (0,_util_helpers__WEBPACK_IMPORTED_MODULE_0__.createSimpleFunctional)('v-card__subtitle');
const VCardText = (0,_util_helpers__WEBPACK_IMPORTED_MODULE_0__.createSimpleFunctional)('v-card__text');
const VCardTitle = (0,_util_helpers__WEBPACK_IMPORTED_MODULE_0__.createSimpleFunctional)('v-card__title');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  $_vuetify_subcomponents: {
    VCard: _VCard__WEBPACK_IMPORTED_MODULE_1__["default"],
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle
  }
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js":
/*!********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VCheckbox/VCheckbox.sass */ "./node_modules/vuetify/src/components/VCheckbox/VCheckbox.sass");
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/styles/components/_selection-controls.sass */ "./node_modules/vuetify/src/styles/components/_selection-controls.sass");
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VInput */ "./node_modules/vuetify/lib/components/VInput/index.js");
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/selectable */ "./node_modules/vuetify/lib/mixins/selectable/index.js");
// Styles

 // Components


 // Mixins


/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_2__["default"].extend({
  name: 'v-checkbox',
  props: {
    indeterminate: Boolean,
    indeterminateIcon: {
      type: String,
      default: '$checkboxIndeterminate'
    },
    offIcon: {
      type: String,
      default: '$checkboxOff'
    },
    onIcon: {
      type: String,
      default: '$checkboxOn'
    }
  },

  data() {
    return {
      inputIndeterminate: this.indeterminate
    };
  },

  computed: {
    classes() {
      return { ..._VInput__WEBPACK_IMPORTED_MODULE_3__["default"].options.computed.classes.call(this),
        'v-input--selection-controls': true,
        'v-input--checkbox': true,
        'v-input--indeterminate': this.inputIndeterminate
      };
    },

    computedIcon() {
      if (this.inputIndeterminate) {
        return this.indeterminateIcon;
      } else if (this.isActive) {
        return this.onIcon;
      } else {
        return this.offIcon;
      }
    },

    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.isDisabled && !this.inputIndeterminate) return undefined;
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    }

  },
  watch: {
    indeterminate(val) {
      // https://github.com/vuetifyjs/vuetify/issues/8270
      this.$nextTick(() => this.inputIndeterminate = val);
    },

    inputIndeterminate(val) {
      this.$emit('update:indeterminate', val);
    },

    isActive() {
      if (!this.indeterminate) return;
      this.inputIndeterminate = false;
    }

  },
  methods: {
    genCheckbox() {
      const {
        title,
        ...checkboxAttrs
      } = this.attrs$;
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_4__["default"], this.setTextColor(this.validationState, {
        props: {
          dense: this.dense,
          dark: this.dark,
          light: this.light
        }
      }), this.computedIcon), this.genInput('checkbox', { ...checkboxAttrs,
        'aria-checked': this.inputIndeterminate ? 'mixed' : this.isActive.toString()
      }), this.genRipple(this.setTextColor(this.rippleState))]);
    },

    genDefaultSlot() {
      return [this.genCheckbox(), this.genLabel()];
    }

  }
}));
//# sourceMappingURL=VCheckbox.js.map

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

/***/ "./resources/js/src/assets/images/misc sync recursive ^\\.\\/mask\\-v2\\-.*\\.png$":
/*!***************************************************************************!*\
  !*** ./resources/js/src/assets/images/misc/ sync ^\.\/mask\-v2\-.*\.png$ ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./mask-v2-dark.png": "./resources/js/src/assets/images/misc/mask-v2-dark.png",
	"./mask-v2-light.png": "./resources/js/src/assets/images/misc/mask-v2-light.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/src/assets/images/misc sync recursive ^\\.\\/mask\\-v2\\-.*\\.png$";

/***/ })

}]);