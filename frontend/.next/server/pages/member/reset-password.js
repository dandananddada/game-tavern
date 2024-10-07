(function() {
var exports = {};
exports.id = 788;
exports.ids = [788,908,334];
exports.modules = {

/***/ 9585:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6691);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2662);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6850);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(883);
"use client";




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ResetPassword = () => {
  var _errors$password, _errors$passwordConfi;

  const {
    0: isProcessing,
    1: setIsProcessing
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    setError
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();

  const reset = formData => {
    setIsProcessing(true);
    const params = qs__WEBPACK_IMPORTED_MODULE_4___default().parse(location.search, {
      ignoreQueryPrefix: true
    });
    formData.code = params.code;
    (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .fetchAPI */ .Io)('/auth/reset-password', {}, {
      method: 'POST',
      body: JSON.stringify(formData)
    }).then(data => {
      const {
        jwt,
        user
      } = data;
      js_cookie__WEBPACK_IMPORTED_MODULE_5___default().set('jwt', jwt, {
        expires: 7
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_5___default().set('user', JSON.stringify(user), {
        expires: 7
      });
      location.href = "/games";
    }).catch(data => {
      if (data.error) {
        const {
          message
        } = data.error;
        setError('passwordConfirmation', {
          type: 'custom',
          message
        });
      }
    }).finally(() => {
      setIsProcessing(false);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "flex flex-col justify-center h-[600px] mx-6 lg:max-w-[500px] lg:m-auto",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "flex justify-center mb-6",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
        width: "200",
        src: "http://9guan.games/uploads/gametavern_c9a856b309.png"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
      onSubmit: handleSubmit(reset),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Input, _objectSpread(_objectSpread({}, register("password", {
        required: true,
        min: 6
      })), {}, {
        type: "password",
        label: "\u5BC6\u7801",
        errorMessage: (errors === null || errors === void 0 ? void 0 : (_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message) || ''
      })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Input, _objectSpread(_objectSpread({
        classNames: {
          base: 'mt-2'
        }
      }, register("passwordConfirmation", {
        required: true,
        validate: (value, formValue) => {
          return formValue.password === value || '两次输入的密码不一致';
        }
      })), {}, {
        type: "password",
        label: "\u786E\u8BA4\u5BC6\u7801",
        errorMessage: (errors === null || errors === void 0 ? void 0 : (_errors$passwordConfi = errors.passwordConfirmation) === null || _errors$passwordConfi === void 0 ? void 0 : _errors$passwordConfi.message) || ''
      })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex justify-end mt-3",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          type: "submit",
          color: "primary",
          isLoading: isProcessing,
          children: "\u91CD\u7F6E"
        })
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ResetPassword);

/***/ }),

/***/ 6691:
/***/ (function(module) {

"use strict";
module.exports = require("@nextui-org/react");;

/***/ }),

/***/ 6155:
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

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

/***/ 2662:
/***/ (function(module) {

"use strict";
module.exports = require("react-hook-form");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [883], function() { return __webpack_exec__(9585); });
module.exports = __webpack_exports__;

})();