(function() {
var exports = {};
exports.id = 451;
exports.ids = [451,908,334];
exports.modules = {

/***/ 5065:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4912);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3804);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6691);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(436);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(883);
/* harmony import */ var _components_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4504);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4905);
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1552);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const page_size = 20;

const getTavernGames = (page = 1) => {
  return (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .fetchAPI */ .Io)(`/games?sort=createdAt:DESC&pagination[page]=${page}&pagination[pageSize]=${page_size}`);
};

const getUserGames = (email, page = 1) => {
  return (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .fetchAPI */ .Io)('/scores/user', {
    email,
    page,
    pageSize: 15
  });
};

const getGames = (page = 1) => {
  return (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .ajaxAPI */ .EK)('/games', {
    page,
    page_size,
    metacritic: '60,100',
    ordering: '-released'
  });
};

const Article = ({
  games: initGames
}) => {
  const {
    isLogin,
    user
  } = _store_user__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z;
  console.log(isLogin, '...');
  const {
    0: games,
    1: setGames
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initGames);
  const {
    0: isFetch,
    1: setIsFetch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: hasMore,
    1: setHasMore
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: filterType,
    1: setFilterType
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('new');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    loadMore(1);
  }, [filterType]);

  const loadMore = async page => {
    if (!hasMore || filterType === 'init') return;
    let moreGames = [];
    let _hasMore = true;

    if (filterType === 'all') {
      const data = await getGames(page);
      moreGames = data.results;
      console.log(moreGames, 'all');
    } else if (filterType === 'new') {
      const res = await getTavernGames(page);
      const games = res.data;
      const pagination = res.meta.pagination;
      moreGames = games.map(game => _objectSpread({
        id: game.id
      }, game.attributes));
      _hasMore = pagination.page < pagination.pageCount;
    } else if (filterType === 'user') {
      var _res$results;

      const res = await getUserGames(user.email, page);
      const pagination = res.pagination;
      moreGames = (_res$results = res.results) === null || _res$results === void 0 ? void 0 : _res$results.map(score => {
        const [game] = score.games;
        return game;
      });
      _hasMore = pagination.page < pagination.pageCount;
    }

    setGames([...games, ...moreGames]);
    setHasMore(_hasMore);
    setIsFetch(false);
  };

  const find = async keyword => {
    setIsFetch(true);
    const data = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .ajaxAPI */ .EK)('/games', {
      search: keyword,
      page: 1,
      page_size: 99
    });
    console.log(data.results);
    setGames(data.results);
    setIsFetch(false);
    setHasMore(false);
  };

  const filter = async type => {
    setFilterType(type);
    setGames([]);
    setHasMore(true);
    setIsFetch(true);
  };

  const debounceFind = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_3__.debounce)(find, 600), []);
  console.log(games, 'games');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "flex justify-end mx-6",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Input, {
        size: "sm",
        onValueChange: debounceFind,
        startContent: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_8__/* .SearchIcon */ .W1, {})
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "grid grid-cols-2 mx-4 mt-2",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full col-span-1 col-end-2 lg:w-[280px] lg:mb-[-14px]",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Tabs, {
          variant: "underlined",
          "aria-label": "filter types",
          classNames: {
            tabList: ['pl-0'],
            tab: ['pr-0'],
            cursor: ['h-0']
          },
          selectedKey: filterType,
          onSelectionChange: filter,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Tab, {
            title: "\u6700\u65B0\u8BC4\u5206"
          }, "new"), isLogin && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Tab, {
            title: "\u6211\u5DF2\u8BC4\u5206"
          }, "user"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Tab, {
            title: "\u5168\u90E8\u6E38\u620F"
          }, "all")]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-span-1",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "flex justify-end items-center h-full pr-2",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "/calendar",
            className: "text-xs text-light-black",
            target: "_blank",
            children: "\u53D1\u5E03\u65E5\u5386"
          })
        })
      })]
    }), isFetch ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "m-auto flex justify-around mt-12",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Card, {
        className: "w-[180px] space-y-5 p-4",
        radius: "lg",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
          className: "rounded-lg",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "h-24 rounded-lg bg-default-300"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "space-y-3",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
            className: "w-3/5 rounded-lg",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "h-3 w-3/5 rounded-lg bg-default-200"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
            className: "w-4/5 rounded-lg",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "h-3 w-4/5 rounded-lg bg-default-200"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
            className: "w-2/5 rounded-lg",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "h-3 w-2/5 rounded-lg bg-default-300"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Card, {
        className: "w-[180px] space-y-5 p-4",
        radius: "lg",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
          className: "rounded-lg",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "h-24 rounded-lg bg-default-300"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "space-y-3",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
            className: "w-3/5 rounded-lg",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "h-3 w-3/5 rounded-lg bg-default-200"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
            className: "w-4/5 rounded-lg",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "h-3 w-4/5 rounded-lg bg-default-200"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
            className: "w-2/5 rounded-lg",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "h-3 w-2/5 rounded-lg bg-default-300"
            })
          })]
        })]
      })]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5___default()), {
      className: "w-full",
      pageStart: 1,
      loadMore: loadMore,
      hasMore: hasMore,
      loader: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-center text-white mb-2",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Spinner, {
          size: "sm"
        })
      }, 0),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "m-4 mt-0 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 lg:gap-[40px] lg:max-w-[1240px] xl:max-w-[1560px] lg:m-auto",
        children: games.map((game, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: `w-full mb-10 col-span-1 ${idx === 0 ? 'col-end-2' : null}`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: `/game/${game.slug}`,
            target: "blank",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Card, {
              isPressable: true,
              className: "w-40 h-52 m-auto rounded bg-center bg-cover bg-no-repeat lg:w-[280px] lg:h-[300px]",
              style: {
                backgroundImage: `url(${game.background_image})`
              }
            })
          }, game.id), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "text-center mt-3 text-white text-base lg:text-xl",
            children: game.name
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "text-center mt-1 text-white text-xs lg:text-sm",
            children: game.released
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex justify-center mt-1 lg:mt-[12px]",
            children: (game.stores || []).map(({
              store
            }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_platform__WEBPACK_IMPORTED_MODULE_7__.default, {
              storeSlug: store.slug,
              className: "mr-2"
            }))
          })]
        }))
      })
    })]
  });
};

async function getStaticProps({
  params
}) {
  const gamesRes = await getTavernGames();
  const games = gamesRes.data;
  return {
    props: {
      platforms: [],
      games: games.map(game => _objectSpread({
        id: game.id
      }, game.attributes))
    },
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(Article));

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

/***/ 436:
/***/ (function(module) {

"use strict";
module.exports = require("react-infinite-scroller");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [883,75,504,845], function() { return __webpack_exec__(5065); });
module.exports = __webpack_exports__;

})();