"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_admin_user_management_pages_availability_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/admin/user_management/pages/availability/Index.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/admin/user_management/pages/availability/Index.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      startTime: '09:00',
      endTime: '17:00',
      selectedDays: [],
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      generatedSlots: []
    };
  },
  methods: {
    generateSlots: function generateSlots() {
      this.generatedSlots = [];
      var startDate = new Date("2000-01-01T".concat(this.startTime));
      var endDate = new Date("2000-01-01T".concat(this.endTime));
      var slotDuration = 30 * 60 * 1000;
      for (var currentDate = startDate; currentDate <= endDate; currentDate = new Date(currentDate.getTime() + slotDuration)) {
        if (this.selectedDays.includes(this.days[currentDate.getDay()])) {
          this.generatedSlots.push({
            start_time: currentDate.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            }),
            end_time: new Date(currentDate.getTime() + slotDuration).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            })
          });
        }
      }
    },
    saveAvailability: function saveAvailability() {
      var _this = this;
      var intervals = [];
      this.selectedDays.forEach(function (selectedDay) {
        var interval = {
          day: selectedDay,
          start_time: _this.startTime,
          end_time: _this.endTime
        };
        intervals.push(interval);
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/availability/store', {
        intervals: intervals
      }).then(function (response) {
        console.log(response.data);
        _this.generatedSlots = [];
      })["catch"](function (error) {
        console.error('Error creating intervals', error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/admin/user_management/pages/availability/Index.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/admin/user_management/pages/availability/Index.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_b3b9ae6a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=b3b9ae6a */ "./resources/js/src/views/admin/user_management/pages/availability/Index.vue?vue&type=template&id=b3b9ae6a");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/src/views/admin/user_management/pages/availability/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_b3b9ae6a__WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_b3b9ae6a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/user_management/pages/availability/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/user_management/pages/availability/Index.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/admin/user_management/pages/availability/Index.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/admin/user_management/pages/availability/Index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/user_management/pages/availability/Index.vue?vue&type=template&id=b3b9ae6a":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/admin/user_management/pages/availability/Index.vue?vue&type=template&id=b3b9ae6a ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b3b9ae6a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b3b9ae6a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b3b9ae6a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=b3b9ae6a */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/admin/user_management/pages/availability/Index.vue?vue&type=template&id=b3b9ae6a");


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/admin/user_management/pages/availability/Index.vue?vue&type=template&id=b3b9ae6a":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/admin/user_management/pages/availability/Index.vue?vue&type=template&id=b3b9ae6a ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h2", [_vm._v("Availability Generator")]),
    _vm._v(" "),
    _c("div", [
      _c("label", { attrs: { for: "start-time" } }, [_vm._v("Start Time:")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.startTime,
            expression: "startTime",
          },
        ],
        attrs: { type: "time", id: "start-time" },
        domProps: { value: _vm.startTime },
        on: {
          change: _vm.generateSlots,
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.startTime = $event.target.value
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", [
      _c("label", { attrs: { for: "end-time" } }, [_vm._v("End Time:")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.endTime,
            expression: "endTime",
          },
        ],
        attrs: { type: "time", id: "end-time" },
        domProps: { value: _vm.endTime },
        on: {
          change: _vm.generateSlots,
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.endTime = $event.target.value
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c(
      "div",
      [
        _c("label", { attrs: { for: "days" } }, [_vm._v("Select Days:")]),
        _vm._v(" "),
        _vm._l(_vm.days, function (day, index) {
          return _c("div", { key: index }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.selectedDays,
                  expression: "selectedDays",
                },
              ],
              attrs: { type: "checkbox", id: "day-" + index },
              domProps: {
                value: day,
                checked: Array.isArray(_vm.selectedDays)
                  ? _vm._i(_vm.selectedDays, day) > -1
                  : _vm.selectedDays,
              },
              on: {
                change: [
                  function ($event) {
                    var $$a = _vm.selectedDays,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = day,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.selectedDays = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.selectedDays = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.selectedDays = $$c
                    }
                  },
                  _vm.generateSlots,
                ],
              },
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "day-" + index } }, [
              _vm._v(_vm._s(day)),
            ]),
          ])
        }),
      ],
      2
    ),
    _vm._v(" "),
    _c("div", [
      _c("h3", [_vm._v("Generated Slots:")]),
      _vm._v(" "),
      _c(
        "ul",
        _vm._l(_vm.generatedSlots, function (slot, index) {
          return _c("li", { key: index }, [
            _vm._v(
              "\n        " +
                _vm._s(slot.start_time) +
                " - " +
                _vm._s(slot.end_time) +
                "\n      "
            ),
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c("button", { on: { click: _vm.saveAvailability } }, [
        _vm._v("Save Availability"),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);