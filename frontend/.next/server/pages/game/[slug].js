(function() {
var exports = {};
exports.id = 532;
exports.ids = [532,942,738,602,908,334];
exports.modules = {

/***/ 104:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6691);
// EXTERNAL MODULE: external "mobx-react-lite"
var external_mobx_react_lite_ = __webpack_require__(4912);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2470);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: ./pages/games/components/logo.jsx
var logo = __webpack_require__(75);
;// CONCATENATED MODULE: ./pages/games/components/Platform.jsx



const Platform = ({
  storeSlug
}) => {
  if (['playstation-store'].includes(storeSlug)) {
    return /*#__PURE__*/jsx_runtime_.jsx(logo.PS, {});
  } else if (storeSlug === 'nintendo') {
    return /*#__PURE__*/jsx_runtime_.jsx(logo.NS, {});
  } else if (storeSlug === 'steam') {
    return /*#__PURE__*/jsx_runtime_.jsx(logo.Steam, {});
  } else if (storeSlug === 'xbox-store') {
    return /*#__PURE__*/jsx_runtime_.jsx(logo.Xbox, {});
  } else if (storeSlug === 'epic-games') {
    return /*#__PURE__*/jsx_runtime_.jsx(logo.Epic, {}); // } else if (storeSlug === 'xbox360') {
    //   return <Xbox360 />
  } else if (storeSlug === 'google-play') {
    return /*#__PURE__*/jsx_runtime_.jsx(logo.Google, {});
  } else if (storeSlug === 'apple-appstore') {
    return /*#__PURE__*/jsx_runtime_.jsx(logo.Apple, {});
  } else {
    return null;
  }
};

const PlatformWrapper = ({
  storeSlug,
  className
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: className,
    children: /*#__PURE__*/jsx_runtime_.jsx(Platform, {
      storeSlug: storeSlug
    })
  });
};

/* harmony default export */ var components_Platform = (PlatformWrapper);
// EXTERNAL MODULE: ./pages/game/components/grade.jsx
var components_grade = __webpack_require__(2087);
// EXTERNAL MODULE: ./pages/game/components/radar.jsx
var radar = __webpack_require__(9922);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
;// CONCATENATED MODULE: ./components/login.js
"use client";




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Login = ({
  isOpen: shouldOpen = false,
  onClose,
  afterLogin
}) => {
  const {
    onOpen
  } = (0,react_.useDisclosure)();
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(shouldOpen);
  const [scrollBehavior] = external_react_default().useState("inside");
  const {
    register,
    handleSubmit
  } = (0,external_react_hook_form_.useForm)();

  const login = async formData => {
    const data = await (0,api/* fetchAPI */.Io)('/auth/local', {}, {
      method: 'POST',
      body: JSON.stringify(formData)
    });

    if (data.jwt) {
      afterLogin(data.jwt);
    }
  };

  (0,external_react_.useEffect)(() => {
    if (shouldOpen) {
      console.log(shouldOpen);
      onOpen();
    }

    setIsOpen(shouldOpen);
  }, [shouldOpen]);
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Modal, {
    isOpen: isOpen,
    onOpenChange: setIsOpen,
    onClose: onClose,
    scrollBehavior: scrollBehavior,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ModalContent, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.ModalHeader, {
        className: "flex flex-col gap-1",
        children: "\u767B\u9646"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleSubmit(login),
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ModalBody, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Input, _objectSpread(_objectSpread({}, register("identifier")), {}, {
            type: "email",
            label: "\u8D26\u53F7"
          })), /*#__PURE__*/jsx_runtime_.jsx(react_.Input, _objectSpread(_objectSpread({}, register("password")), {}, {
            type: "password",
            label: "\u5BC6\u7801"
          }))]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ModalFooter, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Input, {
            type: "submit",
            color: "primary",
            variant: "light",
            children: "\u767B\u9646"
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
            color: "default",
            variant: "light",
            onPress: onClose,
            children: "\u6CE8\u518C"
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
            color: "default",
            variant: "light",
            onPress: onClose,
            children: "\u53D6\u6D88"
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ var login = (Login);
// EXTERNAL MODULE: ./components/icons.js
var icons = __webpack_require__(4905);
// EXTERNAL MODULE: ./store/game.js
var store_game = __webpack_require__(9445);
;// CONCATENATED MODULE: ./pages/game/[slug].js
"use client";





function _slug_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _slug_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _slug_ownKeys(Object(source), true).forEach(function (key) { _slug_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _slug_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slug_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const Game = ({
  slug
}) => {
  const {
    isLogin,
    shouldLogin
  } = store_game/* default */.Z;
  const {
    0: game,
    1: setGame
  } = (0,external_react_.useState)();
  const {
    0: scores,
    1: setScores
  } = (0,external_react_.useState)();

  const init = async () => {
    const game = await (0,api/* ajaxAPI */.EK)(`/games/${slug}`);
    const developers = game.developers.map(i => i.name);
    const publishers = game.publishers.map(i => i.name);
    const scoresRes = await (0,api/* fetchAPI */.Io)(`/scores/game`, {
      game: slug
    });
    const scores = scoresRes.results;
    setGame(_slug_objectSpread(_slug_objectSpread({}, game), {}, {
      released: game.released.split('-').join('.'),
      developer: developers.join(', '),
      publisher: publishers.join(', ')
    }));
    setScores(scores);
  };

  (0,external_react_.useEffect)(() => {
    const isAuthed = ![undefined, null, ''].includes(external_js_cookie_default().get('jwt'));
    store_game/* default.update */.Z.update({
      isLogin: isAuthed,
      shouldLogin: !isAuthed
    });
    init();
  }, []);

  const grade = () => {
    if (!isLogin) {
      store_game/* default.update */.Z.update('shouldLogin', true);
    } else {
      store_game/* default.update */.Z.update('shouldGrade', true);
    }
  };

  const afterLogin = jwt => {
    external_js_cookie_default().set('jwt', jwt, {
      expires: 7
    });
    store_game/* default.update */.Z.update({
      isLogin: true,
      shouldLogin: false
    });
  };

  const afterGrade = score => {
    scores.unshift(score);
    store_game/* default.update */.Z.update('shouldGrade', false);
  };

  if (!game) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full flex justify-center mt-60",
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Spinner, {
        size: "lg"
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "dark",
    children: [/*#__PURE__*/jsx_runtime_.jsx(login, {
      isOpen: shouldLogin,
      onClose: () => store_game/* default.update */.Z.update('shouldLogin', false),
      afterLogin: afterLogin
    }), /*#__PURE__*/jsx_runtime_.jsx(components_grade.default, {
      game: game,
      afterGrade: afterGrade
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid grid-cols-1 lg:grid-cols-2",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-span-1",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Tabs, {
          variant: "underlined",
          className: "flex justify-center",
          classNames: {
            tabList: 'mb-6',
            tab: 'px-0',
            tabContent: 'text-gray text-lg group-data-[selected=true]:text-white'
          },
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Tab, {
            title: "\u8BE6\u60C5",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "grid grid-cols-1 lg:grid-cols-1",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "w-[240px] h-[300px] m-auto rounded bg-center bg-cover bg-no-repeat",
                style: {
                  backgroundImage: `url(${game.background_image})`
                }
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "grid-cols-2 lg:grid-cols-1 text-sm",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: `
                  text-center text-white text-2xl mt-3
                  lg:text-left
                `,
                  children: game.name
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "text-center text-light-black mt-1 lg:text-left",
                  children: ["\u53D1\u552E\u65E5\u671F\uFF1A", game.released]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "flex justify-center mt-2 lg:justify-start",
                  children: game.stores.map(({
                    store
                  }) => /*#__PURE__*/jsx_runtime_.jsx(components_Platform, {
                    storeSlug: store.slug,
                    className: "flex mt-4 mr-2"
                  }))
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "text-left ml-4 lg:ml-0",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "mt-5",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "text-light-black",
                      children: "\u7C7B\u578B\uFF1A"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "inline-flex",
                      children: game.genres.map(({
                        name
                      }) => /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "px-2 py-1 mr-2 text-tag-blue border border-tag-blue",
                        children: name
                      }))
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "mt-2",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "text-light-black",
                      children: "\u5F00\u53D1\uFF1A"
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "text-white",
                      children: game.developer
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "mt-2",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "text-light-black",
                      children: "\u53D1\u884C\uFF1A"
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "text-white",
                      children: game.publisher
                    })]
                  })]
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "m-4 text-white text-xl",
              children: " \u5173\u4E8E\u6E38\u620F "
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "w-full px-4 py-4 bg-back-brown text-white",
              children: game.description_raw
            })]
          }, "game"), /*#__PURE__*/jsx_runtime_.jsx(react_.Tab, {
            title: "\u8BC4\u5206",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-span-1",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "text-right mx-4 pb-4 border-b-1 border-b-[#4C4A57]",
                children: /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
                  className: "bg-[#218FDF] rounded-full text-base h-10 px-4",
                  startContent: /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: isLogin ? /*#__PURE__*/jsx_runtime_.jsx(icons/* PlusIcon */.p, {}) : null
                  }),
                  size: "sm",
                  color: "primary",
                  onPress: grade,
                  children: isLogin ? '游戏评分' : '登录'
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 mt-6",
                children: (scores || []).map(score => {
                  var _score$users_permissi, _score$users_permissi2, _score$users_permissi3, _score$users_permissi4;

                  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "flex ml-4 lg:col-span-1",
                      children: [(_score$users_permissi = score.users_permissions_user) !== null && _score$users_permissi !== void 0 && _score$users_permissi.avatar ? /*#__PURE__*/jsx_runtime_.jsx(react_.Avatar, {
                        src: `.${(_score$users_permissi2 = score.users_permissions_user) === null || _score$users_permissi2 === void 0 ? void 0 : _score$users_permissi2.avatar.url}`
                      }) : /*#__PURE__*/jsx_runtime_.jsx(react_.Avatar, {
                        name: (_score$users_permissi3 = score.users_permissions_user) === null || _score$users_permissi3 === void 0 ? void 0 : _score$users_permissi3.username[0]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "ml-2",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "text-sm text-white",
                          children: (_score$users_permissi4 = score.users_permissions_user) === null || _score$users_permissi4 === void 0 ? void 0 : _score$users_permissi4.username
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "text-sm text-light-black",
                          children: external_moment_default()(score.createdAt).format('YYYY年MM月DD日 发表评论')
                        })]
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "mt-2 flex justify-center items-center lg:col-span-1 lg:justify-end",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "text-md text-white",
                        children: "\u7EFC\u5408\u8BC4\u5206"
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "text-2xl text-white text-bold bg-apple-green ml-2 px-3 py-1/2 rounded",
                        children: score.score === 10 ? score.score : score.score.toFixed(1)
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "m-5 pb-6 border-b-1 border-b-[#4C4A57]",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/jsx_runtime_.jsx(radar.default, {
                          score: score.radar_score
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "text-white text-sm",
                        children: score.comment || '什么都没说'
                      })]
                    })]
                  });
                })
              })]
            })
          }, "comment")]
        })
      })
    })]
  });
};

async function getServerSideProps(ctx) {
  const slug = ctx.query.slug;
  return {
    props: {
      slug
    }
  };
}
/* harmony default export */ var _slug_ = ((0,external_mobx_react_lite_.observer)(Game));

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

/***/ 2470:
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

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

/***/ 7067:
/***/ (function(module) {

"use strict";
module.exports = require("react-rating");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [75,883,480,87,905,922], function() { return __webpack_exec__(104); });
module.exports = __webpack_exports__;

})();