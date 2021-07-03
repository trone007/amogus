(self["webpackChunk"] = self["webpackChunk"] || []).push([["game"],{

/***/ "./assets/game.js":
/*!************************!*\
  !*** ./assets/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_Game_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Game.vue */ "./assets/components/Game.vue");


(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_components_Game_vue__WEBPACK_IMPORTED_MODULE_1__.default).mount('#game');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Game.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Game.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Map */ "./assets/components/Map.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Map: _Map__WEBPACK_IMPORTED_MODULE_0__.default
  }
});
console.log("v4");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Map.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Map.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      map: null,
      connection: null,
      userId: null,
      persons: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    var mapScript = document.createElement('script');
    mapScript.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?apikey=bfd21a41-ba64-49a3-a2bd-b7d139932aa5&lang=ru_RU');
    document.head.appendChild(mapScript);

    mapScript.onload = function () {
      return ymaps.ready(_this.initMap);
    };

    this.connection = new WebSocket("ws://localhost:3001"); //
    // socket.addEventListener("open", function ()
    // {
    // 	console.log("CONNECTED");
    // 	console.log("open");
    // });
  },
  methods: {
    initMap: function initMap() {
      var _this2 = this;

      this.userId = new URL(document.location).searchParams.get('userId');
      this.map = new ymaps.Map("map", {
        center: [54.660901, 20.932067],
        zoom: 19,
        behaviors: [],
        controls: [],
        type: 'yandex#hybrid'
      });
      var location = ymaps.geolocation.get();
      location.then(function (result) {
        _this2.map.setCenter(result.geoObjects.position, 19); // const me = new ymaps.Placemark(result.geoObjects.position, {}, {
        // 	iconLayout: 'default#image',
        // 	iconImageHref: '/img/me.png',
        // 	iconImageSize: [30, 30],
        // 	iconImageOffset: [-15, -15]
        // });


        var me = new ymaps.Placemark(result.geoObjects.position, {}, {
          preset: 'islands#redIcon'
        });
        var fov = new ymaps.Circle([result.geoObjects.position, 20]);

        _this2.map.geoObjects.add(me);

        _this2.map.geoObjects.add(fov);

        var message = {
          userId: _this2.userId,
          // login: 'login',
          position: result.geoObjects.position
        };

        _this2.connection.send(JSON.stringify(message));

        _this2.connection.addEventListener("message", function (e) {
          var message = e.data;
          console.log(message);

          if (message.userId !== this.userId) {// this.addPerson(message);
          }
        });
      }, function (err) {
        console.log('������: ' + err);
      });
    },
    addPerson: function addPerson(data) {
      this.persons.push(data); // const pers = new ymaps.Placemark(data.position, {}, {
      // 	iconLayout: 'default#image',
      // 	iconImageHref: '/img/pers.png',
      // 	iconImageSize: [30, 30],
      // 	iconImageOffset: [-15, -15]
      // });

      var pers = new ymaps.Placemark(result.geoObjects.position, {}, {
        preset: 'islands#redIcon'
      });
      this.map.geoObjects.add(pers);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Game.vue?vue&type=template&id=3a823726":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Game.vue?vue&type=template&id=3a823726 ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Game ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Map = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Map");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Map)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Map.vue?vue&type=template&id=44c832b1":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Map.vue?vue&type=template&id=44c832b1 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  id: "map",
  style: {
    "width": "100%",
    "height": "1000px"
  }
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [_hoisted_1]);
}

/***/ }),

/***/ "./assets/components/Game.vue":
/*!************************************!*\
  !*** ./assets/components/Game.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Game_vue_vue_type_template_id_3a823726__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.vue?vue&type=template&id=3a823726 */ "./assets/components/Game.vue?vue&type=template&id=3a823726");
/* harmony import */ var _Game_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.vue?vue&type=script&lang=js */ "./assets/components/Game.vue?vue&type=script&lang=js");



_Game_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Game_vue_vue_type_template_id_3a823726__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Game_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "assets/components/Game.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Game_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./assets/components/Map.vue":
/*!***********************************!*\
  !*** ./assets/components/Map.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Map_vue_vue_type_template_id_44c832b1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Map.vue?vue&type=template&id=44c832b1 */ "./assets/components/Map.vue?vue&type=template&id=44c832b1");
/* harmony import */ var _Map_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Map.vue?vue&type=script&lang=js */ "./assets/components/Map.vue?vue&type=script&lang=js");



_Map_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Map_vue_vue_type_template_id_44c832b1__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Map_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "assets/components/Map.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Map_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./assets/components/Game.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./assets/components/Game.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Game_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Game_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Game.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Game.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/Map.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./assets/components/Map.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Map_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Map_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Map.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Map.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/Game.vue?vue&type=template&id=3a823726":
/*!******************************************************************!*\
  !*** ./assets/components/Game.vue?vue&type=template&id=3a823726 ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Game_vue_vue_type_template_id_3a823726__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Game_vue_vue_type_template_id_3a823726__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Game.vue?vue&type=template&id=3a823726 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Game.vue?vue&type=template&id=3a823726");


/***/ }),

/***/ "./assets/components/Map.vue?vue&type=template&id=44c832b1":
/*!*****************************************************************!*\
  !*** ./assets/components/Map.vue?vue&type=template&id=44c832b1 ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Map_vue_vue_type_template_id_44c832b1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Map_vue_vue_type_template_id_44c832b1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Map.vue?vue&type=template&id=44c832b1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Map.vue?vue&type=template&id=44c832b1");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_map_js-node_modules_core-js_modules_es_object_t-4f9427"], () => (__webpack_exec__("./assets/game.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9HYW1lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9NYXAudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0dhbWUudnVlP2M2N2MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTWFwLnZ1ZT8wZDdkIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0dhbWUudnVlPzBmYWEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTWFwLnZ1ZT85MDNlIl0sIm5hbWVzIjpbImNyZWF0ZUFwcCIsIkdhbWUiLCJtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBQSw4Q0FBUyxDQUFDQyx5REFBRCxDQUFULENBQWdCQyxLQUFoQixDQUFzQixPQUF0QixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTUE7QUFFQSxpRUFBZTtBQUNkLFlBQVUsRUFBRTtBQUFDLE9BQUcsRUFBSCx5Q0FBRztBQUFKO0FBREUsQ0FBZjtBQUlBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBWixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQSxpRUFBZTtBQUNkLE1BRGMsa0JBQ1A7QUFDTixXQUFPO0FBQ04sU0FBRyxFQUFFLElBREM7QUFFTixnQkFBVSxFQUFFLElBRk47QUFHTixZQUFNLEVBQUUsSUFIRjtBQUlOLGFBQU8sRUFBRTtBQUpILEtBQVA7QUFNQSxHQVJhO0FBU2QsU0FUYyxxQkFVZDtBQUFBOztBQUNDLFFBQU0sU0FBUSxHQUFJLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQWxCO0FBQ0EsYUFBUyxDQUFDLFlBQVYsQ0FBdUIsS0FBdkIsRUFBOEIsd0ZBQTlCO0FBQ0EsWUFBUSxDQUFDLElBQVQsQ0FBYyxXQUFkLENBQTBCLFNBQTFCOztBQUNBLGFB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Q0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUZEVE0sUTs7Ozs7MkRBQUwsaURBR00sS0FITixFQUdNLElBSE4sRUFHTSxDLFVBQUEsRUFETCxpREFBTyxjQUFQLENBQ0ssQ0FITixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQ0NDLGlEQUNNLEtBRE4sRUFDTTtBQURELElBQUUsRUFBQyxLQUNGO0FBRFEsT0FBbUMsRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFDUixDQUROLEUsSUFBQSxFOztBQUFBLEM7OzsyREFERCxpREFHTSxLQUhOLEVBR00sSUFITixFQUdNLENBRkwsVUFFSyxDQUhOLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RnRTtBQUNWO0FBQ0w7QUFDbEQsNkVBQWEsR0FBRywyRUFBTTtBQUN0QjtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7O0FBRUQsNkVBQWE7O0FBRWIsaUVBQWUsc0U7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJpRDtBQUNWO0FBQ0w7QUFDakQsNEVBQWEsR0FBRywwRUFBTTtBQUN0QjtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7O0FBRUQsNEVBQWE7O0FBRWIsaUVBQWUscUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQm9MLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBRCxDIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUFwcH0gZnJvbSAndnVlJ1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuL2NvbXBvbmVudHMvR2FtZS52dWUnXHJcblxyXG5jcmVhdGVBcHAoR2FtZSkubW91bnQoJyNnYW1lJyk7XHJcbiIsIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2PlxyXG5cdFx0R2FtZVxyXG5cdFx0PE1hcCAvPlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBNYXAgZnJvbSAnLi9NYXAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50czoge01hcH1cclxufVxyXG5cclxuY29uc29sZS5sb2coXCJ2NFwiKTtcclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG5cdDxkaXY+XHJcblx0XHQ8ZGl2IGlkPVwibWFwXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAwcHhcIj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG1hcDogbnVsbCxcclxuXHRcdFx0Y29ubmVjdGlvbjogbnVsbCxcclxuXHRcdFx0dXNlcklkOiBudWxsLFxyXG5cdFx0XHRwZXJzb25zOiBbXSxcclxuXHRcdH1cclxuXHR9LFxyXG5cdG1vdW50ZWQoKVxyXG5cdHtcclxuXHRcdGNvbnN0IG1hcFNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXHJcblx0XHRtYXBTY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cHM6Ly9hcGktbWFwcy55YW5kZXgucnUvMi4xLz9hcGlrZXk9YmZkMjFhNDEtYmE2NC00OWEzLWEyYmQtYjdkMTM5OTMyYWE1Jmxhbmc9cnVfUlUnKVxyXG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtYXBTY3JpcHQpXHJcblx0XHRtYXBTY3JpcHQub25sb2FkID0gKCkgPT4geW1hcHMucmVhZHkodGhpcy5pbml0TWFwKTtcclxuXHJcblx0XHR0aGlzLmNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KFwid3M6Ly9sb2NhbGhvc3Q6MzAwMVwiKTtcclxuXHRcdC8vXHJcblx0XHQvLyBzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwgZnVuY3Rpb24gKClcclxuXHRcdC8vIHtcclxuXHRcdC8vIFx0Y29uc29sZS5sb2coXCJDT05ORUNURURcIik7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKFwib3BlblwiKTtcclxuXHRcdC8vIH0pO1xyXG5cdH0sXHJcblxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGluaXRNYXAoKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnVzZXJJZCA9IG5ldyBVUkwoZG9jdW1lbnQubG9jYXRpb24pLnNlYXJjaFBhcmFtcy5nZXQoJ3VzZXJJZCcpO1xyXG5cclxuXHRcdFx0dGhpcy5tYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcclxuXHRcdFx0XHRjZW50ZXI6IFs1NC42NjA5MDEsIDIwLjkzMjA2N10sXHJcblx0XHRcdFx0em9vbTogMTksXHJcblx0XHRcdFx0YmVoYXZpb3JzOiBbXSxcclxuXHRcdFx0XHRjb250cm9sczogW10sXHJcblx0XHRcdFx0dHlwZTogJ3lhbmRleCNoeWJyaWQnLFxyXG5cdFx0XHR9KTtcclxuXHJcblxyXG5cdFx0XHRjb25zdCBsb2NhdGlvbiA9IHltYXBzLmdlb2xvY2F0aW9uLmdldCgpO1xyXG5cdFx0XHRsb2NhdGlvbi50aGVuKFxyXG5cdFx0XHRcdHJlc3VsdCA9PlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMubWFwLnNldENlbnRlcihyZXN1bHQuZ2VvT2JqZWN0cy5wb3NpdGlvbiwgMTkpO1xyXG5cclxuXHRcdFx0XHRcdC8vIGNvbnN0IG1lID0gbmV3IHltYXBzLlBsYWNlbWFyayhyZXN1bHQuZ2VvT2JqZWN0cy5wb3NpdGlvbiwge30sIHtcclxuXHRcdFx0XHRcdC8vIFx0aWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxyXG5cdFx0XHRcdFx0Ly8gXHRpY29uSW1hZ2VIcmVmOiAnL2ltZy9tZS5wbmcnLFxyXG5cdFx0XHRcdFx0Ly8gXHRpY29uSW1hZ2VTaXplOiBbMzAsIDMwXSxcclxuXHRcdFx0XHRcdC8vIFx0aWNvbkltYWdlT2Zmc2V0OiBbLTE1LCAtMTVdXHJcblx0XHRcdFx0XHQvLyB9KTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBtZSA9IG5ldyB5bWFwcy5QbGFjZW1hcmsocmVzdWx0Lmdlb09iamVjdHMucG9zaXRpb24sIHt9LCB7XHJcblx0XHRcdFx0XHRcdHByZXNldDogJ2lzbGFuZHMjcmVkSWNvbidcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0Y29uc3QgZm92ID0gbmV3IHltYXBzLkNpcmNsZShbcmVzdWx0Lmdlb09iamVjdHMucG9zaXRpb24sIDIwXSk7XHJcblx0XHRcdFx0XHR0aGlzLm1hcC5nZW9PYmplY3RzLmFkZChtZSk7XHJcblx0XHRcdFx0XHR0aGlzLm1hcC5nZW9PYmplY3RzLmFkZChmb3YpO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IG1lc3NhZ2UgPSB7XHJcblx0XHRcdFx0XHRcdHVzZXJJZDogdGhpcy51c2VySWQsXHJcblx0XHRcdFx0XHRcdC8vIGxvZ2luOiAnbG9naW4nLFxyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVzdWx0Lmdlb09iamVjdHMucG9zaXRpb24sXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0dGhpcy5jb25uZWN0aW9uLnNlbmQoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuY29ubmVjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiAoZSlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgbWVzc2FnZSA9IGUuZGF0YTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cobWVzc2FnZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZihtZXNzYWdlLnVzZXJJZCAhPT0gdGhpcy51c2VySWQpXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQvLyB0aGlzLmFkZFBlcnNvbihtZXNzYWdlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRlcnIgPT5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn77+977+977+977+977+977+9OiAnICsgZXJyKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0YWRkUGVyc29uKGRhdGEpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucGVyc29ucy5wdXNoKGRhdGEpO1xyXG5cdFx0XHQvLyBjb25zdCBwZXJzID0gbmV3IHltYXBzLlBsYWNlbWFyayhkYXRhLnBvc2l0aW9uLCB7fSwge1xyXG5cdFx0XHQvLyBcdGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuXHRcdFx0Ly8gXHRpY29uSW1hZ2VIcmVmOiAnL2ltZy9wZXJzLnBuZycsXHJcblx0XHRcdC8vIFx0aWNvbkltYWdlU2l6ZTogWzMwLCAzMF0sXHJcblx0XHRcdC8vIFx0aWNvbkltYWdlT2Zmc2V0OiBbLTE1LCAtMTVdXHJcblx0XHRcdC8vIH0pO1xyXG5cclxuXHRcdFx0Y29uc3QgcGVycyA9IG5ldyB5bWFwcy5QbGFjZW1hcmsocmVzdWx0Lmdlb09iamVjdHMucG9zaXRpb24sIHt9LCB7XHJcblx0XHRcdFx0cHJlc2V0OiAnaXNsYW5kcyNyZWRJY29uJ1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5tYXAuZ2VvT2JqZWN0cy5hZGQocGVycyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG48L3NjcmlwdD4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9HYW1lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYTgyMzcyNlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCIzYTgyMzcyNlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzNhODIzNzI2Jywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzNhODIzNzI2Jywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR2FtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2E4MjM3MjZcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignM2E4MjM3MjYnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuc2NyaXB0Ll9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvR2FtZS52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9NYXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0YzgzMmIxXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9NYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCI0NGM4MzJiMVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzQ0YzgzMmIxJywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzQ0YzgzMmIxJywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWFwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NGM4MzJiMVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc0NGM4MzJiMScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5zY3JpcHQuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy9NYXAudnVlXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vR2FtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9HYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL01hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiJdLCJzb3VyY2VSb290IjoiIn0=