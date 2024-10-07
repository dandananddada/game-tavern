exports.id = 377;
exports.ids = [377];
exports.modules = {

/***/ 4377:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ grade; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "mobx-react-lite"
var external_mobx_react_lite_ = __webpack_require__(4912);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6691);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2470);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "react-rating"
var external_react_rating_ = __webpack_require__(7067);
var external_react_rating_default = /*#__PURE__*/__webpack_require__.n(external_react_rating_);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: ./components/scores/rating.module.css
var rating_module = __webpack_require__(5117);
var rating_module_default = /*#__PURE__*/__webpack_require__.n(rating_module);
;// CONCATENATED MODULE: ./components/scores/rating.jsx






function Rating({
  label,
  name,
  control,
  className
}) {
  const computeBackground = value => {
    if (value < 7) return 'bg-[#FF5959]';else if (value < 9) return 'bg-[#EBFF00]';else return 'bg-[#41FF3E]';
  };

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_hook_form_.Controller, {
    control: control,
    name: name,
    render: ({
      field
    }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `${(rating_module_default())["rate-container"]} flex flex-col ${className}`,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        className: "mb-2 text-small",
        children: [label, " ", field.value]
      }), /*#__PURE__*/jsx_runtime_.jsx((external_react_rating_default()), {
        stop: 10,
        onChange: field.onChange,
        initialRating: field.value,
        fullSymbol: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.button, {
          whileHover: {
            scale: 1.1
          },
          whileTap: {
            scale: 0.8
          },
          className: `${computeBackground(field.value)} rounded-full  w-7 h-7 border-5 border-double border-black`
        }),
        emptySymbol: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.button, {
          whileHover: {
            scale: 1.1
          },
          whileTap: {
            scale: 0.8
          },
          className: `bg-white rounded-full w-7 h-7 border-5 border-double border-black`
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/scores/slider.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function ScoreSlider(_ref) {
  let {
    label,
    name,
    control
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "name", "control"]);

  const computeColor = value => {
    if (value < 7) return 'bg-[#FF5959]';else if (value < 9) return 'bg-[#EBFF00]';else return 'bg-[#41FF3E]';
  };

  const {
    0: color,
    1: setColor
  } = (0,external_react_.useState)('foreground');

  const onChange = field => v => {
    setColor(computeColor(v));
    field.onChange(v);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_hook_form_.Controller, {
    control: control,
    name: name,
    render: ({
      field
    }) => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Slider, _objectSpread({
        label: label,
        onChange: onChange(field),
        control: control,
        classNames: {
          filler: color
        },
        value: field === null || field === void 0 ? void 0 : field.value
      }, props))
    })
  });
}
// EXTERNAL MODULE: ./store/game.js
var store_game = __webpack_require__(9445);
;// CONCATENATED MODULE: ./pages/game/components/grade.jsx




function grade_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function grade_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { grade_ownKeys(Object(source), true).forEach(function (key) { grade_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { grade_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function grade_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function Grade({
  game,
  afterGrade
}) {
  const {
    shouldGrade,
    gameScore
  } = store_game/* default */.Z;
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)();
  const {
    0: isSubmiting,
    1: setIsSubmiting
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (gameScore) {
      var _gameScore$radar_scor, _gameScore$radar_scor2, _gameScore$radar_scor3, _gameScore$radar_scor4, _gameScore$radar_scor5;

      setValue('comment', gameScore.comment);
      setValue('art', (_gameScore$radar_scor = gameScore.radar_score) === null || _gameScore$radar_scor === void 0 ? void 0 : _gameScore$radar_scor.art);
      setValue('music', (_gameScore$radar_scor2 = gameScore.radar_score) === null || _gameScore$radar_scor2 === void 0 ? void 0 : _gameScore$radar_scor2.music);
      setValue('story', (_gameScore$radar_scor3 = gameScore.radar_score) === null || _gameScore$radar_scor3 === void 0 ? void 0 : _gameScore$radar_scor3.story);
      setValue('creativity', (_gameScore$radar_scor4 = gameScore.radar_score) === null || _gameScore$radar_scor4 === void 0 ? void 0 : _gameScore$radar_scor4.creativity);
      setValue('gameplay', (_gameScore$radar_scor5 = gameScore.radar_score) === null || _gameScore$radar_scor5 === void 0 ? void 0 : _gameScore$radar_scor5.gameplay);
      setValue('score', gameScore.score);
      setValue('id', gameScore.id);
    }
  }, [gameScore]);

  const onOpenChange = isOpen => {
    store_game/* default.update */.Z.update('shouldGrade', isOpen);
  };

  const grade = async formData => {
    setIsSubmiting(true);
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
    const jwt = external_js_cookie_default().get('jwt');

    if (!isNaN(formData.id)) {
      const res = await (0,api/* fetchAPI */.Io)(`/scores/${formData.id}`, {}, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`
        },
        body: JSON.stringify({
          data: {
            id: formData.id,
            score,
            comment,
            radar_score: {
              art,
              music,
              story,
              creativity,
              gameplay
            }
          }
        })
      });

      if (res.data.id) {
        afterGrade(formData);
        setIsSubmiting(false);
      }
    } else {
      const res = await (0,api/* fetchAPI */.Io)('/score/grade', {}, {
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
            released: external_moment_default()(released),
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
        setIsSubmiting(false);
      }
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex flex-col gap-2",
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Modal, {
      isOpen: shouldGrade,
      onOpenChange: onOpenChange,
      scrollBehavior: "inside",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_hook_form_.Form, {
        control: control,
        onSubmit: handleSubmit(grade),
        render: ({
          submit
        }) => /*#__PURE__*/jsx_runtime_.jsx(react_.ModalContent, {
          children: onClose => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.ModalHeader, {
              className: "flex flex-col gap-1",
              children: "\u63D0\u4EA4\u8BC4\u5206"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ModalBody, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(Rating, grade_objectSpread(grade_objectSpread({
                label: "\u7F8E\u672F"
              }, register("art", {
                required: false
              })), {}, {
                control: control
              })), /*#__PURE__*/jsx_runtime_.jsx(Rating, {
                label: "\u97F3\u4E50",
                name: "music",
                control: control,
                className: "mt-4"
              }), /*#__PURE__*/jsx_runtime_.jsx(Rating, {
                label: "\u53D9\u4E8B",
                name: "story",
                control: control,
                className: "mt-4"
              }), /*#__PURE__*/jsx_runtime_.jsx(Rating, {
                label: "\u521B\u65B0",
                name: "creativity",
                control: control,
                className: "mt-4"
              }), /*#__PURE__*/jsx_runtime_.jsx(Rating, {
                label: "\u6E38\u620F\u6027",
                name: "gameplay",
                control: control,
                className: "mt-4"
              }), /*#__PURE__*/jsx_runtime_.jsx(ScoreSlider, {
                name: "score",
                label: "\u7EFC\u5408\u4F53\u9A8C",
                isRequired: true,
                color: "foreground",
                hideThumb: true,
                step: 0.2,
                maxValue: 10,
                minValue: 0,
                defaultValue: 0,
                control: control,
                errorMessage: errors.score ? '评分在 0 - 10 之间，支持一位小数' : '',
                className: "max-w-md mt-4"
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Textarea, grade_objectSpread(grade_objectSpread({}, register("comment")), {}, {
                label: "\u8BC4\u4EF7"
              }))]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ModalFooter, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
                type: "submit",
                onPress: submit,
                isLoading: isSubmiting,
                children: "\u63D0\u4EA4\u8BC4\u5206"
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
                color: "default",
                variant: "light",
                onPress: onClose,
                children: "\u53D6\u6D88"
              })]
            })]
          })
        })
      })
    })
  });
}

/* harmony default export */ var grade = ((0,external_mobx_react_lite_.observer)(Grade));

/***/ }),

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

/***/ 5117:
/***/ (function(module) {

// Exports
module.exports = {
	"rate-container": "rating_rate-container__2N1SJ"
};


/***/ })

};
;