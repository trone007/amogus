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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    var _this = this;

    var mapScript = document.createElement('script');
    mapScript.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?apikey=bfd21a41-ba64-49a3-a2bd-b7d139932aa5&lang=ru_RU');
    document.head.appendChild(mapScript);

    mapScript.onload = function () {
      return ymaps.ready(_this.initMap);
    };
  },
  methods: {
    initMap: function initMap() {
      var myMap = new ymaps.Map("map", {
        center: [54.660901, 20.932067],
        zoom: 19,
        // behaviors: [],
        controls: [],
        type: 'yandex#hybrid'
      });
      var location = ymaps.geolocation.get({// mapStateAutoApply: true
      });
      location.then(function (result) {
        myMap.setCenter(result.geoObjects.position, 19);
        var me = new ymaps.Placemark(result.geoObjects.position, {}, {
          iconLayout: 'default#image',
          iconImageHref: '/test/img/me.png',
          iconImageSize: [30, 30],
          iconImageOffset: [-15, -15]
        });
        var fov = new ymaps.Circle([result.geoObjects.position, 20]);
        myMap.geoObjects.add(me);
        myMap.geoObjects.add(fov);
        var coor1 = [result.geoObjects.position[0] + 0.0001, result.geoObjects.position[1] + 0.0001];
        var pers1 = new ymaps.Placemark(coor1, {}, {
          iconLayout: 'default#image',
          iconImageHref: '/test/img/1.png',
          iconImageSize: [45, 45]
        });
        myMap.geoObjects.add(pers1);
        var coor2 = [result.geoObjects.position[0] - 0.0002, result.geoObjects.position[1] - 0.0005];
        var pers2 = new ymaps.Placemark(coor2, {}, {
          iconLayout: 'default#image',
          iconImageHref: '/test/img/2.png',
          iconImageSize: [45, 45]
        });
        myMap.geoObjects.add(pers2);
      }, function (err) {
        console.log('������: ' + err);
      });
      var socket = new WebSocket("ws://localhost:3001");
      socket.addEventListener("open", function () {
        console.log("CONNECTED");
        console.log("open");
      });
      document.addEventListener("click", function () {
        console.log("click on document");
        var userId = 1;
        var login = 'loginName';
        var position1 = 54.660901;
        var position2 = 20.932067;
        var coordinate = {
          position1: position1,
          position2: position2
        };
        var message = {
          userId: userId,
          login: login,
          coordinate: coordinate //method : 'getId',
          //method : 'getUser',
          //method : 'getLogin',
          //method : 'getAvatar',
          //method : 'getUserRounds',
          //method : 'getRoundTasks',
          //method : 'getAvatarFile',
          //method : 'getUpdatedAt',
          //method : 'getActive',
          //method : 'other',

        };
        socket.send(JSON.stringify(message));
      });
      socket.addEventListener("message", function (e) {
        var message = e.data;
        console.log(message);
      });
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_vue_dist_vue_esm-bundler_js"], () => (__webpack_exec__("./assets/game.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9HYW1lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9NYXAudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0dhbWUudnVlP2M2N2MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTWFwLnZ1ZT8wZDdkIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0dhbWUudnVlPzBmYWEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTWFwLnZ1ZT85MDNlIl0sIm5hbWVzIjpbImNyZWF0ZUFwcCIsIkdhbWUiLCJtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBQSw4Q0FBUyxDQUFDQyx5REFBRCxDQUFULENBQWdCQyxLQUFoQixDQUFzQixPQUF0QixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTUE7QUFFQSxpRUFBZTtBQUNkLFlBQVUsRUFBRTtBQUFDLE9BQUcsRUFBSCx5Q0FBRztBQUFKO0FBREUsQ0FBZjtBQUlBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBWixFOzs7Ozs7Ozs7Ozs7Ozs7QUNMQSxpRUFBZTtBQUVkLFNBRmMscUJBR2Q7QUFBQTs7QUFDQyxRQUFNLFNBQVEsR0FBSSxRQUFRLENBQUMsYUFBVCxDQUF1QixRQUF2QixDQUFsQjtBQUNBLGFBQVMsQ0FBQyxZQUFWLENBQXVCLEtBQXZCLEVBQThCLHdGQUE5QjtBQUNBLFlBQVEsQ0FBQyxJQUFULENBQWMsV0FBZCxDQUEwQixTQUExQjs7QUFFQSxhQUFTLENBQUMsTUFBVixHQUFtQjtBQUFBLGFBQU0sS0FBSyxDQUFDLEtBQU4sQ0FBWSxLQUFJLENBQUMsT0FBakIsQ0FBTjtBQUFBLEtBQW5CO0FBQ0EsR0FUYTtBQVdkLFNBQU8sRUFBRTtBQUNSLFdBRFEscUJBRVI7QUFDQyxVQUFNLEtBQUksR0FB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QWUsc0U7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJpRDtBQUNWO0FBQ0w7QUFDakQsNEVBQWEsR0FBRywwRUFBTTtBQUN0QjtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7O0FBRUQsNEVBQWE7O0FBRWIsaUVBQWUscUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQm9MLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBRCxDIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUFwcH0gZnJvbSAndnVlJ1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuL2NvbXBvbmVudHMvR2FtZS52dWUnXHJcblxyXG5jcmVhdGVBcHAoR2FtZSkubW91bnQoJyNnYW1lJyk7XHJcbiIsIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2PlxyXG5cdFx0R2FtZVxyXG5cdFx0PE1hcCAvPlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBNYXAgZnJvbSAnLi9NYXAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50czoge01hcH1cclxufVxyXG5cclxuY29uc29sZS5sb2coXCJ2NFwiKTtcclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG5cdDxkaXY+XHJcblx0XHQ8ZGl2IGlkPVwibWFwXCIgc3R5bGU9XCJ3aWR0aDogNjAwcHg7IGhlaWdodDogNDAwcHhcIj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG5cdG1vdW50ZWQoKVxyXG5cdHtcclxuXHRcdGNvbnN0IG1hcFNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXHJcblx0XHRtYXBTY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cHM6Ly9hcGktbWFwcy55YW5kZXgucnUvMi4xLz9hcGlrZXk9YmZkMjFhNDEtYmE2NC00OWEzLWEyYmQtYjdkMTM5OTMyYWE1Jmxhbmc9cnVfUlUnKVxyXG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtYXBTY3JpcHQpXHJcblxyXG5cdFx0bWFwU2NyaXB0Lm9ubG9hZCA9ICgpID0+IHltYXBzLnJlYWR5KHRoaXMuaW5pdE1hcCk7XHJcblx0fSxcclxuXHJcblx0bWV0aG9kczoge1xyXG5cdFx0aW5pdE1hcCgpXHJcblx0XHR7XHJcblx0XHRcdGNvbnN0IG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XHJcblx0XHRcdFx0Y2VudGVyOiBbNTQuNjYwOTAxLCAyMC45MzIwNjddLFxyXG5cdFx0XHRcdHpvb206IDE5LFxyXG5cdFx0XHRcdC8vIGJlaGF2aW9yczogW10sXHJcblx0XHRcdFx0Y29udHJvbHM6IFtdLFxyXG5cdFx0XHRcdHR5cGU6ICd5YW5kZXgjaHlicmlkJyxcclxuXHRcdFx0fSk7XHJcblxyXG5cclxuXHRcdFx0Y29uc3QgbG9jYXRpb24gPSB5bWFwcy5nZW9sb2NhdGlvbi5nZXQoe1xyXG5cdFx0XHRcdC8vIG1hcFN0YXRlQXV0b0FwcGx5OiB0cnVlXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRsb2NhdGlvbi50aGVuKFxyXG5cdFx0XHRcdHJlc3VsdCA9PlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG15TWFwLnNldENlbnRlcihyZXN1bHQuZ2VvT2JqZWN0cy5wb3NpdGlvbiwgMTkpO1xyXG5cclxuXHJcblx0XHRcdFx0XHRjb25zdCBtZSA9IG5ldyB5bWFwcy5QbGFjZW1hcmsocmVzdWx0Lmdlb09iamVjdHMucG9zaXRpb24sIHt9LCB7XHJcblx0XHRcdFx0XHRcdGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuXHRcdFx0XHRcdFx0aWNvbkltYWdlSHJlZjogJy90ZXN0L2ltZy9tZS5wbmcnLFxyXG5cdFx0XHRcdFx0XHRpY29uSW1hZ2VTaXplOiBbMzAsIDMwXSxcclxuXHRcdFx0XHRcdFx0aWNvbkltYWdlT2Zmc2V0OiBbLTE1LCAtMTVdXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdGNvbnN0IGZvdiA9IG5ldyB5bWFwcy5DaXJjbGUoW3Jlc3VsdC5nZW9PYmplY3RzLnBvc2l0aW9uLCAyMF0pO1xyXG5cdFx0XHRcdFx0bXlNYXAuZ2VvT2JqZWN0cy5hZGQobWUpO1xyXG5cdFx0XHRcdFx0bXlNYXAuZ2VvT2JqZWN0cy5hZGQoZm92KTtcclxuXHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgY29vcjEgPSBbXHJcblx0XHRcdFx0XHRcdHJlc3VsdC5nZW9PYmplY3RzLnBvc2l0aW9uWzBdICsgMC4wMDAxLFxyXG5cdFx0XHRcdFx0XHRyZXN1bHQuZ2VvT2JqZWN0cy5wb3NpdGlvblsxXSArIDAuMDAwMVxyXG5cdFx0XHRcdFx0XTtcclxuXHRcdFx0XHRcdGNvbnN0IHBlcnMxID0gbmV3IHltYXBzLlBsYWNlbWFyayhjb29yMSwge30sIHtcclxuXHRcdFx0XHRcdFx0aWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxyXG5cdFx0XHRcdFx0XHRpY29uSW1hZ2VIcmVmOiAnL3Rlc3QvaW1nLzEucG5nJyxcclxuXHRcdFx0XHRcdFx0aWNvbkltYWdlU2l6ZTogWzQ1LCA0NV0sXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdG15TWFwLmdlb09iamVjdHMuYWRkKHBlcnMxKTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBjb29yMiA9IFtcclxuXHRcdFx0XHRcdFx0cmVzdWx0Lmdlb09iamVjdHMucG9zaXRpb25bMF0gLSAwLjAwMDIsXHJcblx0XHRcdFx0XHRcdHJlc3VsdC5nZW9PYmplY3RzLnBvc2l0aW9uWzFdIC0gMC4wMDA1XHJcblx0XHRcdFx0XHRdO1xyXG5cdFx0XHRcdFx0Y29uc3QgcGVyczIgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKGNvb3IyLCB7fSwge1xyXG5cdFx0XHRcdFx0XHRpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXHJcblx0XHRcdFx0XHRcdGljb25JbWFnZUhyZWY6ICcvdGVzdC9pbWcvMi5wbmcnLFxyXG5cdFx0XHRcdFx0XHRpY29uSW1hZ2VTaXplOiBbNDUsIDQ1XSxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0bXlNYXAuZ2VvT2JqZWN0cy5hZGQocGVyczIpO1xyXG5cclxuXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRlcnIgPT5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn77+977+977+977+977+977+9OiAnICsgZXJyKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGNvbnN0IHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDozMDAxXCIpO1xyXG5cclxuXHRcdFx0c29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsIGZ1bmN0aW9uICgpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkNPTk5FQ1RFRFwiKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIm9wZW5cIik7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImNsaWNrIG9uIGRvY3VtZW50XCIpO1xyXG5cdFx0XHRcdHZhciB1c2VySWQgPSAxO1xyXG5cdFx0XHRcdHZhciBsb2dpbiA9ICdsb2dpbk5hbWUnO1xyXG5cdFx0XHRcdHZhciBwb3NpdGlvbjEgPSA1NC42NjA5MDE7XHJcblx0XHRcdFx0dmFyIHBvc2l0aW9uMiA9IDIwLjkzMjA2NztcclxuXHRcdFx0XHR2YXIgY29vcmRpbmF0ZSA9IHtwb3NpdGlvbjEsIHBvc2l0aW9uMn07XHJcblx0XHRcdFx0Y29uc3QgbWVzc2FnZSA9IHtcclxuXHRcdFx0XHRcdHVzZXJJZDogdXNlcklkLFxyXG5cdFx0XHRcdFx0bG9naW46IGxvZ2luLFxyXG5cdFx0XHRcdFx0Y29vcmRpbmF0ZTogY29vcmRpbmF0ZSxcclxuXHRcdFx0XHRcdC8vbWV0aG9kIDogJ2dldElkJyxcclxuXHRcdFx0XHRcdC8vbWV0aG9kIDogJ2dldFVzZXInLFxyXG5cdFx0XHRcdFx0Ly9tZXRob2QgOiAnZ2V0TG9naW4nLFxyXG5cdFx0XHRcdFx0Ly9tZXRob2QgOiAnZ2V0QXZhdGFyJyxcclxuXHRcdFx0XHRcdC8vbWV0aG9kIDogJ2dldFVzZXJSb3VuZHMnLFxyXG5cdFx0XHRcdFx0Ly9tZXRob2QgOiAnZ2V0Um91bmRUYXNrcycsXHJcblx0XHRcdFx0XHQvL21ldGhvZCA6ICdnZXRBdmF0YXJGaWxlJyxcclxuXHRcdFx0XHRcdC8vbWV0aG9kIDogJ2dldFVwZGF0ZWRBdCcsXHJcblx0XHRcdFx0XHQvL21ldGhvZCA6ICdnZXRBY3RpdmUnLFxyXG5cdFx0XHRcdFx0Ly9tZXRob2QgOiAnb3RoZXInLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0c29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiAoZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnN0IG1lc3NhZ2UgPSBlLmRhdGE7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cobWVzc2FnZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuPC9zY3JpcHQ+IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vR2FtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2E4MjM3MjZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9HYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBzY3JpcHQuX19obXJJZCA9IFwiM2E4MjM3MjZcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczYTgyMzcyNicsIHNjcmlwdCkpIHtcbiAgICBhcGkucmVsb2FkKCczYTgyMzcyNicsIHNjcmlwdClcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dhbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNhODIzNzI2XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzNhODIzNzI2JywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcImFzc2V0cy9jb21wb25lbnRzL0dhbWUudnVlXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vTWFwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NGM4MzJiMVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBzY3JpcHQuX19obXJJZCA9IFwiNDRjODMyYjFcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc0NGM4MzJiMScsIHNjcmlwdCkpIHtcbiAgICBhcGkucmVsb2FkKCc0NGM4MzJiMScsIHNjcmlwdClcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01hcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRjODMyYjFcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNDRjODMyYjEnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuc2NyaXB0Ll9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvTWFwLnZ1ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0dhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vR2FtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL01hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9NYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwic291cmNlUm9vdCI6IiJ9