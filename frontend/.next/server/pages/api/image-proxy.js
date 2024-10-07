(function() {
var exports = {};
exports.id = 824;
exports.ids = [824];
exports.modules = {

/***/ 3940:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ image_proxy; }
});

;// CONCATENATED MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_namespaceObject = require("isomorphic-unfetch");;
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_namespaceObject);
;// CONCATENATED MODULE: external "stream"
var external_stream_namespaceObject = require("stream");;
var external_stream_default = /*#__PURE__*/__webpack_require__.n(external_stream_namespaceObject);
;// CONCATENATED MODULE: external "lodash.merge"
var external_lodash_merge_namespaceObject = require("lodash.merge");;
var external_lodash_merge_default = /*#__PURE__*/__webpack_require__.n(external_lodash_merge_namespaceObject);
;// CONCATENATED MODULE: external "user-agents"
var external_user_agents_namespaceObject = require("user-agents");;
var external_user_agents_default = /*#__PURE__*/__webpack_require__.n(external_user_agents_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/@blazity/next-image-proxy/lib/next-image-proxy.module.js
function n(n){var a=external_lodash_merge_default()({whitelistedPatterns:[],fallbackUrl:"",messages:{wrongFormat:"Image url not provided or has wrong format",notWhitelisted:"Provided image url is not whitelisted",imageFetchError:"Couldn't fetch the image"}},n);return function(s,n){try{var m=s.query.imageUrl;return!m||m&&Array.isArray(m)?(n.status(400).send({message:a.messages.wrongFormat}),Promise.resolve()):(u=m,a.whitelistedPatterns.some(function(e){return u.match(e)})?Promise.resolve(function(r){try{return Promise.resolve(external_isomorphic_unfetch_default()(r,{headers:{"user-agent":(new (external_user_agents_default())).toString()}}).then(function(e){return e.body}))}catch(e){return Promise.reject(e)}}(m)).then(function(e){e?function(e,s,o){var n=new external_stream_namespaceObject.Stream.PassThrough;external_stream_default().pipeline(s,n,function(r){if(r)return console.log(r),void i(e,o)}),n.pipe(e)}(n,e,a):i(n,a)}):(n.status(422).send({message:a.messages.notWhitelisted}),Promise.resolve()))}catch(e){return Promise.reject(e)}var u}}function i(e,r){r.fallbackUrl.trim()?e.redirect(r.fallbackUrl):e.status(422).send({message:r.messages.imageFetchError})}
//# sourceMappingURL=next-image-proxy.module.js.map

;// CONCATENATED MODULE: ./pages/api/image-proxy.js

/* harmony default export */ var image_proxy = (n({
  whitelistedPatterns: [/^https?:\/\/(.*)/]
}));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(3940));
module.exports = __webpack_exports__;

})();