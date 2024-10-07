(function() {
var exports = {};
exports.id = 164;
exports.ids = [164,908,334];
exports.modules = {

/***/ 9445:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2965);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);

const store = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeAutoObservable)({
  _isLogin: false,
  _shouldLogin: false,
  _shouldRegist: false,
  _shouldGrade: false,
  _shouldShare: false,
  _gameScore: {},

  get isLogin() {
    return this._isLogin;
  },

  get shouldLogin() {
    return this._shouldLogin;
  },

  get shouldRegist() {
    return this._shouldRegist;
  },

  get shouldGrade() {
    return this._shouldGrade;
  },

  get shouldShare() {
    return this._shouldShare;
  },

  get gameScore() {
    return this._gameScore;
  },

  update(keyOrBatch, value) {
    if (typeof keyOrBatch === 'string') {
      store[`_${keyOrBatch}`] = value;
      console.log(store);
    } else {
      for (let key in keyOrBatch) {
        console.log(key);
        store[`_${key}`] = keyOrBatch[key];
      }
    }
  }

}, {
  update: mobx__WEBPACK_IMPORTED_MODULE_0__.action.bound
});
/* harmony default export */ __webpack_exports__["Z"] = (store);

/***/ }),

/***/ 6691:
/***/ (function(module) {

"use strict";
module.exports = require("@nextui-org/react");;

/***/ }),

/***/ 2407:
/***/ (function(module) {

"use strict";
module.exports = require("dom-to-image");;

/***/ }),

/***/ 3804:
/***/ (function(module) {

"use strict";
module.exports = require("lodash");;

/***/ }),

/***/ 2965:
/***/ (function(module) {

"use strict";
module.exports = require("mobx");;

/***/ }),

/***/ 4912:
/***/ (function(module) {

"use strict";
module.exports = require("mobx-react-lite");;

/***/ }),

/***/ 6850:
/***/ (function(module) {

"use strict";
module.exports = require("qs");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 1492:
/***/ (function(module) {

"use strict";
module.exports = require("react-svg-radar-chart");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [883,75,167,504,397,519], function() { return __webpack_exec__(2519); });
module.exports = __webpack_exports__;

})();