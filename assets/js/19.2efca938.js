(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "../../../../.config/yarn/global/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../../../../.config/yarn/global/node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"4b61893c-vue-loader-template\"}!../../../../.config/yarn/global/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../.config/yarn/global/node_modules/cache-loader/dist/cjs.js?!../../../../.config/yarn/global/node_modules/vue-loader/lib/index.js?!../../../../.config/yarn/global/node_modules/@vuepress/markdown-loader/index.js?!./src/learn/technical-analysis/react-to-signals.md?vue&type=template&id=719201a5&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/.config/yarn/global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../../../../.config/yarn/global/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"4b61893c-vue-loader-template"}!/home/runner/.config/yarn/global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/runner/.config/yarn/global/node_modules/cache-loader/dist/cjs.js??ref--1-0!/home/runner/.config/yarn/global/node_modules/vue-loader/lib??ref--1-1!/home/runner/.config/yarn/global/node_modules/@vuepress/markdown-loader??ref--1-2!./src/learn/technical-analysis/react-to-signals.md?vue&type=template&id=719201a5& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('h1',{attrs:{"id":"react-to-signals"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#react-to-signals"}},[_vm._v("#")]),_vm._v(" React to signals")]),_vm._v(" "),_c('p',[_vm._v("Now that your strategy is coded, Cassandre will call your "),_c('a',{attrs:{"href":"https://www.javadoc.io/static/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/4.0.1/tech/cassandre/trading/bot/strategy/BasicTa4jCassandreStrategy.html#shouldEnter%28%29","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("shouldEnter()"),_c('OutboundLink')],1),_vm._v(" method when it's time to buy and your "),_c('a',{attrs:{"href":"https://www.javadoc.io/static/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/4.0.1/tech/cassandre/trading/bot/strategy/BasicTa4jCassandreStrategy.html#shouldExit%28%29","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("shouldExit()"),_c('OutboundLink')],1),_vm._v(" method when it's time to sell. You can do things manually by creating orders, but you can also use positions.")]),_vm._v(" "),_c('p',[_vm._v("For example, you can do something like that on "),_c('a',{attrs:{"href":"https://www.javadoc.io/static/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/4.0.1/tech/cassandre/trading/bot/strategy/BasicTa4jCassandreStrategy.html#shouldEnter%28%29","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("shouldEnter()"),_c('OutboundLink')],1),_vm._v(" :")]),_vm._v(" "),_c('div',{staticClass:"language-java extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-java"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("canBuy")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("BigDecimal")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("\"0.01\"")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n            "),_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("// Create rules.")]),_vm._v("\n            "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("PositionRulesDTO")]),_vm._v(" rules "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("PositionRulesDTO")]),_vm._v("\n                    "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("builder")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n                    "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("stopGainPercentage")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token number"}},[_vm._v("10f")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n                    "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("stopLossPercentage")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token number"}},[_vm._v("5f")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n                    "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("build")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n            "),_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("// Create position.")]),_vm._v("\n            "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("createLongPosition")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("\n                    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("CurrencyPairDTO")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("BTC"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" USDT"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n                    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("BigDecimal")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("\"0.01\"")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n                    rules"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n        "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])]),_c('p',[_vm._v("Cassandre provides positions to manage your trading automatically. First, we created a rule saying this position should be closed if the gain is more than 10% or if the loss is more than 5%.")]),_vm._v(" "),_c('p',[_vm._v("Then we called the "),_c('a',{attrs:{"href":"https://www.javadoc.io/static/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/4.0.1/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#createLongPosition%28tech.cassandre.trading.bot.dto.util.CurrencyPairDTO,java.math.BigDecimal,tech.cassandre.trading.bot.dto.position.PositionRulesDTO%29","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("createLongPosition()"),_c('OutboundLink')],1),_vm._v(" method. It will automatically create a buy order. From now, with every ticker received, Cassandre will check the gain or loss made on this position; if it triggers one of the rules, Cassandre will automatically create a sell order to close it.")]),_vm._v(" "),_c('div',{staticClass:"custom-block tip"},[_c('p',{staticClass:"custom-block-title"},[_vm._v("TIP")]),_vm._v(" "),_c('p',[_vm._v("You can learn more about positions in the "),_c('RouterLink',{attrs:{"to":"/learn/position-management.html"}},[_vm._v("Position chapter")]),_vm._v(".")],1)]),_vm._v(" "),_c('div',{staticClass:"custom-block tip"},[_c('p',{staticClass:"custom-block-title"},[_vm._v("TIP")]),_vm._v(" "),_c('p',[_vm._v("Inside your strategy, you can call "),_c('a',{attrs:{"href":"https://www.javadoc.io/static/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/4.0.1/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#canBuy%28tech.cassandre.trading.bot.dto.user.AccountDTO,tech.cassandre.trading.bot.dto.util.CurrencyPairDTO,java.math.BigDecimal%29","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("canBuy()"),_c('OutboundLink')],1),_vm._v(" and "),_c('a',{attrs:{"href":"https://www.javadoc.io/static/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/4.0.1/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#canSell%28tech.cassandre.trading.bot.dto.util.CurrencyDTO,java.math.BigDecimal%29","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("canSell()"),_c('OutboundLink')],1),_vm._v(" methods to see if your account has enough money to buy or sell assets.")])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/learn/technical-analysis/react-to-signals.md":
/*!**********************************************************!*\
  !*** ./src/learn/technical-analysis/react-to-signals.md ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_to_signals_md_vue_type_template_id_719201a5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react-to-signals.md?vue&type=template&id=719201a5& */ "./src/learn/technical-analysis/react-to-signals.md?vue&type=template&id=719201a5&");
/* harmony import */ var _config_yarn_global_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../.config/yarn/global/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../.config/yarn/global/node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_config_yarn_global_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _react_to_signals_md_vue_type_template_id_719201a5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _react_to_signals_md_vue_type_template_id_719201a5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/learn/technical-analysis/react-to-signals.md?vue&type=template&id=719201a5&":
/*!*****************************************************************************************!*\
  !*** ./src/learn/technical-analysis/react-to-signals.md?vue&type=template&id=719201a5& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_yarn_global_node_modules_cache_loader_dist_cjs_js_cacheDirectory_config_yarn_global_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_4b61893c_vue_loader_template_config_yarn_global_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_config_yarn_global_node_modules_cache_loader_dist_cjs_js_ref_1_0_config_yarn_global_node_modules_vue_loader_lib_index_js_ref_1_1_config_yarn_global_node_modules_vuepress_markdown_loader_index_js_ref_1_2_react_to_signals_md_vue_type_template_id_719201a5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../.config/yarn/global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../../../../.config/yarn/global/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"4b61893c-vue-loader-template"}!../../../../../../../.config/yarn/global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../.config/yarn/global/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../../.config/yarn/global/node_modules/vue-loader/lib??ref--1-1!../../../../../../../.config/yarn/global/node_modules/@vuepress/markdown-loader??ref--1-2!./react-to-signals.md?vue&type=template&id=719201a5& */ "../../../../.config/yarn/global/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../../../../.config/yarn/global/node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"4b61893c-vue-loader-template\"}!../../../../.config/yarn/global/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../.config/yarn/global/node_modules/cache-loader/dist/cjs.js?!../../../../.config/yarn/global/node_modules/vue-loader/lib/index.js?!../../../../.config/yarn/global/node_modules/@vuepress/markdown-loader/index.js?!./src/learn/technical-analysis/react-to-signals.md?vue&type=template&id=719201a5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _config_yarn_global_node_modules_cache_loader_dist_cjs_js_cacheDirectory_config_yarn_global_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_4b61893c_vue_loader_template_config_yarn_global_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_config_yarn_global_node_modules_cache_loader_dist_cjs_js_ref_1_0_config_yarn_global_node_modules_vue_loader_lib_index_js_ref_1_1_config_yarn_global_node_modules_vuepress_markdown_loader_index_js_ref_1_2_react_to_signals_md_vue_type_template_id_719201a5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _config_yarn_global_node_modules_cache_loader_dist_cjs_js_cacheDirectory_config_yarn_global_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_4b61893c_vue_loader_template_config_yarn_global_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_config_yarn_global_node_modules_cache_loader_dist_cjs_js_ref_1_0_config_yarn_global_node_modules_vue_loader_lib_index_js_ref_1_1_config_yarn_global_node_modules_vuepress_markdown_loader_index_js_ref_1_2_react_to_signals_md_vue_type_template_id_719201a5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=19.2efca938.js.map