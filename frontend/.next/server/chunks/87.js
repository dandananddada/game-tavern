exports.id = 87;
exports.ids = [87];
exports.modules = {

/***/ 2087:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4912);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(883);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6691);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2662);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2470);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9480);
/* harmony import */ var _store_game__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9445);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function Grade({
  game,
  afterGrade
}) {
  const {
    shouldGrade
  } = _store_game__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z;
  const {
    register,
    handleSubmit,
    control,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)();

  const onOpenChange = isOpen => {
    _store_game__WEBPACK_IMPORTED_MODULE_9__/* .default.update */ .Z.update('shouldGrade', isOpen);
  };

  const grade = async formData => {
    const {
      art,
      music,
      story,
      creativity,
      gameplay,
      score,
      comment
    } = formData;
    const {
      slug,
      name,
      released,
      background_image,
      stores: platforms,
      genres,
      description,
      publisher,
      developer
    } = game;
    const jwt = js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get('jwt');
    const res = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .fetchAPI */ .Io)('/score/grade', {}, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwt}`
      },
      body: JSON.stringify({
        score,
        comment,
        radar_score: {
          art,
          music,
          story,
          creativity,
          gameplay
        },
        game: {
          slug,
          name,
          description,
          background_image,
          publisher,
          developer,
          released: moment__WEBPACK_IMPORTED_MODULE_7___default()(released),
          platforms: platforms.map(({
            id
          }) => id),
          genres: genres.map(({
            id
          }) => id)
        }
      })
    });

    if (res.score) {
      afterGrade({
        score,
        comment,
        radar_score: {
          art,
          music,
          story,
          creativity,
          gameplay
        }
      });
    }
  };

  console.log(errors, '...');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "flex flex-col gap-2",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "text-right m-4"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.Modal, {
      isOpen: shouldGrade,
      onOpenChange: onOpenChange,
      scrollBehavior: "inside",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_6__.Form, {
        control: control,
        onSubmit: handleSubmit(grade),
        render: ({
          submit
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.ModalContent, {
          children: onClose => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.ModalHeader, {
              className: "flex flex-col gap-1",
              children: "\u63D0\u4EA4\u8BC4\u5206"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.ModalBody, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.Input, _objectSpread(_objectSpread({}, register("score", {
                min: 0,
                max: 10
              })), {}, {
                type: "number",
                label: "\u8BC4\u5206",
                description: "\u8BC4\u5206\u5728 0 - 10 \u4E4B\u95F4\uFF0C\u652F\u6301\u4E00\u4F4D\u5C0F\u6570",
                errorMessage: errors.score ? '评分在 0 - 10 之间，支持一位小数' : ''
              })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.Textarea, _objectSpread(_objectSpread({}, register("comment")), {}, {
                label: "\u8BC4\u4EF7"
              })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.Accordion, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.AccordionItem, {
                  title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-base",
                    children: "\u66F4\u591A"
                  }),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rating__WEBPACK_IMPORTED_MODULE_8__.default, {
                    label: "\u7F8E\u672F",
                    name: "art",
                    control: control
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rating__WEBPACK_IMPORTED_MODULE_8__.default, {
                    label: "\u97F3\u4E50",
                    name: "music",
                    control: control,
                    className: "mt-4"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rating__WEBPACK_IMPORTED_MODULE_8__.default, {
                    label: "\u53D9\u4E8B",
                    name: "story",
                    control: control,
                    className: "mt-4"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rating__WEBPACK_IMPORTED_MODULE_8__.default, {
                    label: "\u521B\u65B0",
                    name: "creativity",
                    control: control,
                    className: "mt-4"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rating__WEBPACK_IMPORTED_MODULE_8__.default, {
                    label: "\u6E38\u620F\u6027",
                    name: "gameplay",
                    control: control,
                    className: "mt-4"
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.ModalFooter, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
                type: "submit",
                onPress: submit,
                children: "\u63D0\u4EA4\u8BC4\u5206"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
                color: "default",
                variant: "light",
                onPress: onClose,
                children: "\u53D6\u6D88"
              })]
            })]
          })
        })
      })
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(Grade));

/***/ }),

/***/ 9445:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2965);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);

const store = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeAutoObservable)({
  _isLogin: false,
  _shouldLogin: false,
  _shouldGrade: false,

  get isLogin() {
    return this._isLogin;
  },

  get shouldLogin() {
    return this._shouldLogin;
  },

  get shouldGrade() {
    return this._shouldGrade;
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

/***/ })

};
;