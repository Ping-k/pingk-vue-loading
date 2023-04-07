/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 744:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/LoadingA/src/main.vue?vue&type=template&id=56a2cc30&scoped=true


function render(_ctx, _cache) {
  const _component_a_button = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("a-button")

  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, [
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
      class: "loader01",
      style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)(_ctx.pStyle)
    }, null, 4),
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_a_button, {
      onClick: _cache[0] || (_cache[0] = $event => (_ctx.onClick()))
    }, {
      default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(_ctx.title), 1)
      ]),
      _: 1
    })
  ], 64))
}
;// CONCATENATED MODULE: ./packages/LoadingA/src/main.vue?vue&type=template&id=56a2cc30&scoped=true

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/LoadingA/src/main.vue?vue&type=script&lang=js

/* harmony default export */ var mainvue_type_script_lang_js = ({
    name: "LoadingA",

    props: {
        title: String,
        color: String,
        speed: Number,
    },
    data() {
        return {
            pStyle: {
                '--color': '#2595f1',
            },
        };
    },
    mounted() {
        this.setStyle();
    },
    methods: {
        setStyle() {
            if (this.color) this.$set(this.pStyle, "--color", this.color);
        },
        onClick() {
            console.log("===onClick====LoadingA");
            this.$emit("myClick", 1,2,3);
        }
    },
});

;// CONCATENATED MODULE: ./packages/LoadingA/src/main.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/LoadingA/src/main.vue?vue&type=style&index=0&id=56a2cc30&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/LoadingA/src/main.vue?vue&type=style&index=0&id=56a2cc30&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./packages/LoadingA/src/main.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(mainvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-56a2cc30"]])

/* harmony default export */ var main = (__exports__);
;// CONCATENATED MODULE: ./packages/LoadingA/index.js
/*
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-04 16:11:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-06 09:37:37
 */


/* harmony default export */ var LoadingA = ({
    install: (Vue) => {
        Vue.component(main.name, main);
    }
});
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/LoadingB/src/main.vue?vue&type=template&id=202cd8ae&scoped=true


function mainvue_type_template_id_202cd8ae_scoped_true_render(_ctx, _cache) {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
    class: "loader01",
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)(_ctx.pStyle)
  }, null, 4))
}
;// CONCATENATED MODULE: ./packages/LoadingB/src/main.vue?vue&type=template&id=202cd8ae&scoped=true

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/LoadingB/src/main.vue?vue&type=script&lang=js

/* harmony default export */ var src_mainvue_type_script_lang_js = ({
    name: "LoadingB",

    props: {
        color: String,
        speed: Number,
    },
    data() {
        return {
            pStyle: {
                '--color': 'red',
            },
        };
    },
    mounted() {
        this.setStyle();
    },
    methods: {
        setStyle() {
            if (this.color) this.$set(this.pStyle, "--color", this.color);
        },
    },
});

;// CONCATENATED MODULE: ./packages/LoadingB/src/main.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/LoadingB/src/main.vue?vue&type=style&index=0&id=202cd8ae&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/LoadingB/src/main.vue?vue&type=style&index=0&id=202cd8ae&scoped=true&lang=css

;// CONCATENATED MODULE: ./packages/LoadingB/src/main.vue




;


const main_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(src_mainvue_type_script_lang_js, [['render',mainvue_type_template_id_202cd8ae_scoped_true_render],['__scopeId',"data-v-202cd8ae"]])

/* harmony default export */ var src_main = (main_exports_);
;// CONCATENATED MODULE: ./packages/LoadingB/index.js
/*
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-04 16:11:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-06 09:37:37
 */


/* harmony default export */ var LoadingB = ({
    install: (Vue) => {
        Vue.component(src_main.name, src_main);
    }
});
;// CONCATENATED MODULE: ./packages/index.js
/*
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-04 16:14:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-06 09:57:03
 */



const components = [
    LoadingA, LoadingB
]

/* harmony default export */ var packages_0 = ({
    install: (Vue) => {
        components.forEach(component => {
            Vue.use(component);
        })
    }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


}();
module.exports = __webpack_exports__;
/******/ })()
;