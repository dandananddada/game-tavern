(function() {
var exports = {};
exports.id = 399;
exports.ids = [399,360,908,334];
exports.modules = {

/***/ 4742:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_show_more_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8879);
/* harmony import */ var react_show_more_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_show_more_text__WEBPACK_IMPORTED_MODULE_2__);




const Expand = ({
  containerCls,
  lines = 2,
  children
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: containerCls,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_show_more_text__WEBPACK_IMPORTED_MODULE_2___default()), {
      lines: lines,
      more: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-center text-small text-tag-blue mt-3",
        children: "\u5C55\u5F00"
      }),
      less: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-center text-small text-tag-blue mt-3",
        children: "\u6536\u8D77"
      }),
      children: children
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Expand);

/***/ }),

/***/ 1776:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6691);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2470);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3804);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(436);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_expand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4742);
/* harmony import */ var _components_user_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3167);
/* harmony import */ var _components_scores_radar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8397);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(883);
"use client";















const getScores = ({
  email,
  page = 1
}) => {
  return (0,_lib_api__WEBPACK_IMPORTED_MODULE_10__/* .fetchAPI */ .Io)('/scores/user', {
    email,
    page,
    pageSize: 15
  });
};

const Member = ({
  user,
  slug
}) => {
  const computeColor = value => {
    if (value < 7) return 'bg-danger';else if (value < 9) return 'bg-warning';else return 'bg-success';
  };

  const {
    0: scores,
    1: setScores
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: pagination,
    1: setPagination
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const hasMore = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const {
      page,
      pageCount
    } = pagination;
    console.log(page < pageCount);
    return page < pageCount;
  }, [pagination]);

  const loadMore = async page => {
    if (!hasMore) return;
    const scoresRes = await getScores({
      email: slug,
      page
    });
    const {
      results = [],
      pagination
    } = scoresRes || {};
    setScores([...scores, ...results]);
    setPagination(pagination);
  };

  const init = async () => {
    const scoresRes = await getScores({
      email: slug
    });
    const {
      results = [],
      pagination
    } = scoresRes || {};
    setScores(results);
    setPagination(pagination);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    init();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "dark mx-5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex items-center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_avatar__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
        user: user,
        size: "md",
        className: "mr-2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
          className: "text-base",
          children: [user.username, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Chip, {
            size: "sm",
            className: "ml-2",
            children: ["#", user.id]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          className: "text-xs text-light-black",
          children: moment__WEBPACK_IMPORTED_MODULE_4___default()(user.createdAt).format('YYYY 年 MM 月 DD 日加入')
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      className: "mt-4 pb-4 text-sm text-center border-b-1 border-b-[#4C4A57]",
      children: ["\u622A\u81F3\u5230", moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYY 年 MM 月 DD 日'), "\uFF0C\u5DF2\u7ECF\u8BC4\u4EF7", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: "text-xl text-apple-green",
        children: [" ", pagination === null || pagination === void 0 ? void 0 : pagination.total, " "]
      }), "\u4E2A\u6E38\u620F"]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-4",
        children: [scores.length < 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "w-full flex justify-center mt-60",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Spinner, {
            size: "lg"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_infinite_scroller__WEBPACK_IMPORTED_MODULE_6___default()), {
          className: "w-full",
          pageStart: 1,
          loadMore: loadMore,
          hasMore: hasMore,
          loader: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "text-center text-white",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "w-full flex justify-center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Spinner, {
                size: "sm",
                label: "\u52A0\u8F7D\u4E2D..."
              })
            })
          }, 0),
          children: scores.map(score => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "text-base",
              children: score.games[0].name
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "text-xs text-light-black",
              children: moment__WEBPACK_IMPORTED_MODULE_4___default()(score.createdAt).format('YYYY年MM月DD日 发表评论')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "flex justify-between align-center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Badge, {
                  content: (0,lodash__WEBPACK_IMPORTED_MODULE_5__.mean)(Object.values(score.radar_score)).toFixed(1),
                  classNames: {
                    badge: `text-sm w-10 h-6 pt-1/2 right-5 bottom-3 rounded-none rounded-tl rounded-br
                      ${computeColor(score.score)}
                    `
                  },
                  placement: "bottom-right",
                  showOutline: false,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                    href: `/game/${score.games[0].slug}`,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Card, {
                      isPressable: true,
                      className: "w-44 h-[120px] rounded bg-center bg-cover bg-no-repeat ",
                      style: {
                        backgroundImage: `url(${score.games[0].background_image})`
                      }
                    })
                  }, score.games[0].id)
                })
              }), !(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEmpty)(score.radar_score) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center w-40",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_scores_radar__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                  score: score.radar_score,
                  showAverage: false
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_expand__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              containerCls: "mb-5 pb-3 whitespace-pre-wrap border-b-1 border-b-[#4C4A57] last:border-b-0",
              lines: 2,
              children: score.comment
            })]
          }))
        })]
      })
    })]
  });
};

async function getServerSideProps(ctx) {
  const slug = ctx.query.slug;
  const [user] = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_10__/* .fetchAPI */ .Io)(`/users?filters[email][$eq]=${slug}&populate=avatar`);
  return {
    props: {
      slug,
      user
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Member);

/***/ }),

/***/ 6691:
/***/ (function(module) {

"use strict";
module.exports = require("@nextui-org/react");;

/***/ }),

/***/ 3804:
/***/ (function(module) {

"use strict";
module.exports = require("lodash");;

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

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ 8879:
/***/ (function(module) {

"use strict";
module.exports = require("react-show-more-text");;

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

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,883,167,397], function() { return __webpack_exec__(1776); });
module.exports = __webpack_exports__;

})();