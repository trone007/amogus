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
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      map: null,
      connection: null,
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

      this.map = new ymaps.Map("map", {
        center: [54.660901, 20.932067],
        zoom: 19,
        behaviors: [],
        controls: [],
        type: 'yandex#hybrid'
      });
      var location = ymaps.geolocation.get();
      location.then(function (result) {
        console.log(result.geoObjects.position);

        _this2.map.setCenter(result.geoObjects.position, 19);

        var me = new ymaps.Placemark(result.geoObjects.position, {}, {
          iconLayout: 'default#image',
          iconImageHref: '/test/img/me.png',
          iconImageSize: [30, 30],
          iconImageOffset: [-15, -15]
        });
        var fov = new ymaps.Circle([result.geoObjects.position, 20]);

        _this2.map.geoObjects.add(me);

        _this2.map.geoObjects.add(fov);

        var message = {
          userId: 1,
          login: 'login',
          position: result.geoObjects.position
        };

        _this2.connection.send(JSON.stringify(message));

        _this2.connection.addEventListener("message", function (e) {
          var message = e.data;
          console.log(message);
        });
      }, function (err) {
        console.log('������: ' + err);
      });
    },
    addPerson: function addPerson(data) {
      this.persons.push(data);
      var pers = new ymaps.Placemark(data.position, {}, {
        iconLayout: 'default#image',
        iconImageHref: '/test/img/me.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-35, -55]
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
    "width": "600px",
    "height": "400px"
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_map_js-node_modules_vue_dist_vue_esm-bundler_js"], () => (__webpack_exec__("./assets/game.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9HYW1lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9NYXAudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0dhbWUudnVlP2M2N2MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTWFwLnZ1ZT8wZDdkIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0dhbWUudnVlPzBmYWEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTWFwLnZ1ZT85MDNlIl0sIm5hbWVzIjpbImNyZWF0ZUFwcCIsIkdhbWUiLCJtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBQSw4Q0FBUyxDQUFDQyx5REFBRCxDQUFULENBQWdCQyxLQUFoQixDQUFzQixPQUF0QixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTUE7QUFFQSxpRUFBZTtBQUNkLFlBQVUsRUFBRTtBQUFDLE9BQUcsRUFBSCx5Q0FBRztBQUFKO0FBREUsQ0FBZjtBQUlBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBWixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQSxpRUFBZTtBQUNkLE1BRGMsa0JBQ1A7QUFDTixXQUFPO0FBQ04sU0FBRyxFQUFFLElBREM7QUFFTixnQkFBVSxFQUFFLElBRk47QUFHTixhQUFPLEVBQUU7QUFISCxLQUFQO0FBS0EsR0FQYTtBQVFkLFNBUmMscUJBU2Q7QUFBQTs7QUFDQyxRQUFNLFNBQVEsR0FBSSxRQUFRLENBQUMsYUFBVCxDQUF1QixRQUF2QixDQUFsQjtBQUNBLGFBQVMsQ0FBQyxZQUFWLENBQXVCLEtBQXZCLEVBQThCLHdGQUE5QjtBQUNBLFlBQVEsQ0FBQyxJQUFULENBQWMsV0FBZCxDQUEwQixTQUExQjs7QUFDQSxhQUFTLENBQUMsTUFBVixHQUFtQjtBQUFBLGFBQU0sS0FBSyxD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QixDQUF3QixJQUF4QjtBQUNEO0FBM0RRO0FBMUJLLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O21GRFRNLFE7Ozs7OzJEQUFMLGlEQUdNLEtBSE4sRUFHTSxJQUhOLEVBR00sQyxVQUFBLEVBREwsaURBQU8sY0FBUCxDQUNLLENBSE4sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkNDQyxpREFDTSxLQUROLEVBQ007QUFERCxJQUFFLEVBQUMsS0FDRjtBQURRLE9BQW1DLEVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQ1IsQ0FETixFLElBQUEsRTs7QUFBQSxDOzs7MkRBREQsaURBR00sS0FITixFQUdNLElBSE4sRUFHTSxDQUZMLFVBRUssQ0FITixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEZ0U7QUFDVjtBQUNMO0FBQ2xELDZFQUFhLEdBQUcsMkVBQU07QUFDdEI7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOztBQUVELDZFQUFhOztBQUViLGlFQUFlLHNFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCaUQ7QUFDVjtBQUNMO0FBQ2pELDRFQUFhLEdBQUcsMEVBQU07QUFDdEI7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOztBQUVELDRFQUFhOztBQUViLGlFQUFlLHFFOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJvTCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUQsQyIsImZpbGUiOiJnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9jb21wb25lbnRzL0dhbWUudnVlJ1xyXG5cclxuY3JlYXRlQXBwKEdhbWUpLm1vdW50KCcjZ2FtZScpO1xyXG4iLCI8dGVtcGxhdGU+XHJcblx0PGRpdj5cclxuXHRcdEdhbWVcclxuXHRcdDxNYXAgLz5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgTWFwIGZyb20gJy4vTWFwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGNvbXBvbmVudHM6IHtNYXB9XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKFwidjRcIik7XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2PlxyXG5cdFx0PGRpdiBpZD1cIm1hcFwiIHN0eWxlPVwid2lkdGg6IDYwMHB4OyBoZWlnaHQ6IDQwMHB4XCI+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c2NyaXB0PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRtYXA6IG51bGwsXHJcblx0XHRcdGNvbm5lY3Rpb246IG51bGwsXHJcblx0XHRcdHBlcnNvbnM6IFtdLFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0bW91bnRlZCgpXHJcblx0e1xyXG5cdFx0Y29uc3QgbWFwU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcclxuXHRcdG1hcFNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwczovL2FwaS1tYXBzLnlhbmRleC5ydS8yLjEvP2FwaWtleT1iZmQyMWE0MS1iYTY0LTQ5YTMtYTJiZC1iN2QxMzk5MzJhYTUmbGFuZz1ydV9SVScpXHJcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1hcFNjcmlwdClcclxuXHRcdG1hcFNjcmlwdC5vbmxvYWQgPSAoKSA9PiB5bWFwcy5yZWFkeSh0aGlzLmluaXRNYXApO1xyXG5cclxuXHRcdHRoaXMuY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDozMDAxXCIpO1xyXG5cdFx0Ly9cclxuXHRcdC8vIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCBmdW5jdGlvbiAoKVxyXG5cdFx0Ly8ge1xyXG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhcIkNPTk5FQ1RFRFwiKTtcclxuXHRcdC8vIFx0Y29uc29sZS5sb2coXCJvcGVuXCIpO1xyXG5cdFx0Ly8gfSk7XHJcblxyXG5cclxuXHR9LFxyXG5cclxuXHRtZXRob2RzOiB7XHJcblx0XHRpbml0TWFwKClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5tYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcclxuXHRcdFx0XHRjZW50ZXI6IFs1NC42NjA5MDEsIDIwLjkzMjA2N10sXHJcblx0XHRcdFx0em9vbTogMTksXHJcblx0XHRcdFx0YmVoYXZpb3JzOiBbXSxcclxuXHRcdFx0XHRjb250cm9sczogW10sXHJcblx0XHRcdFx0dHlwZTogJ3lhbmRleCNoeWJyaWQnLFxyXG5cdFx0XHR9KTtcclxuXHJcblxyXG5cdFx0XHRjb25zdCBsb2NhdGlvbiA9IHltYXBzLmdlb2xvY2F0aW9uLmdldCgpO1xyXG5cdFx0XHRsb2NhdGlvbi50aGVuKFxyXG5cdFx0XHRcdHJlc3VsdCA9PlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdC5nZW9PYmplY3RzLnBvc2l0aW9uKTtcclxuXHRcdFx0XHRcdHRoaXMubWFwLnNldENlbnRlcihyZXN1bHQuZ2VvT2JqZWN0cy5wb3NpdGlvbiwgMTkpO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IG1lID0gbmV3IHltYXBzLlBsYWNlbWFyayhyZXN1bHQuZ2VvT2JqZWN0cy5wb3NpdGlvbiwge30sIHtcclxuXHRcdFx0XHRcdFx0aWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxyXG5cdFx0XHRcdFx0XHRpY29uSW1hZ2VIcmVmOiAnL3Rlc3QvaW1nL21lLnBuZycsXHJcblx0XHRcdFx0XHRcdGljb25JbWFnZVNpemU6IFszMCwgMzBdLFxyXG5cdFx0XHRcdFx0XHRpY29uSW1hZ2VPZmZzZXQ6IFstMTUsIC0xNV1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0Y29uc3QgZm92ID0gbmV3IHltYXBzLkNpcmNsZShbcmVzdWx0Lmdlb09iamVjdHMucG9zaXRpb24sIDIwXSk7XHJcblx0XHRcdFx0XHR0aGlzLm1hcC5nZW9PYmplY3RzLmFkZChtZSk7XHJcblx0XHRcdFx0XHR0aGlzLm1hcC5nZW9PYmplY3RzLmFkZChmb3YpO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IG1lc3NhZ2UgPSB7XHJcblx0XHRcdFx0XHRcdHVzZXJJZDogMSxcclxuXHRcdFx0XHRcdFx0bG9naW46ICdsb2dpbicsXHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZXN1bHQuZ2VvT2JqZWN0cy5wb3NpdGlvbixcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHR0aGlzLmNvbm5lY3Rpb24uc2VuZChKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5jb25uZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChlKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb25zdCBtZXNzYWdlID0gZS5kYXRhO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZXJyID0+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ++/ve+/ve+/ve+/ve+/ve+/vTogJyArIGVycilcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGFkZFBlcnNvbihkYXRhKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnBlcnNvbnMucHVzaChkYXRhKTtcclxuXHRcdFx0Y29uc3QgcGVycyA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoZGF0YS5wb3NpdGlvbiwge30sIHtcclxuXHRcdFx0XHRpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXHJcblx0XHRcdFx0aWNvbkltYWdlSHJlZjogJy90ZXN0L2ltZy9tZS5wbmcnLFxyXG5cdFx0XHRcdGljb25JbWFnZVNpemU6IFszMCwgMzBdLFxyXG5cdFx0XHRcdGljb25JbWFnZU9mZnNldDogWy0zNSwgLTU1XVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5tYXAuZ2VvT2JqZWN0cy5hZGQocGVycyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG48L3NjcmlwdD4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9HYW1lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYTgyMzcyNlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCIzYTgyMzcyNlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzNhODIzNzI2Jywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzNhODIzNzI2Jywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR2FtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2E4MjM3MjZcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignM2E4MjM3MjYnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuc2NyaXB0Ll9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvR2FtZS52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9NYXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0YzgzMmIxXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9NYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCI0NGM4MzJiMVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzQ0YzgzMmIxJywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzQ0YzgzMmIxJywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWFwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NGM4MzJiMVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc0NGM4MzJiMScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5zY3JpcHQuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy9NYXAudnVlXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vR2FtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9HYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL01hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiJdLCJzb3VyY2VSb290IjoiIn0=