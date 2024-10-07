(function() {
var exports = {};
exports.id = 844;
exports.ids = [844,908,334];
exports.modules = {

/***/ 9460:
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6691);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2470);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(436);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2889);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(883);
"use client";












const getGames = (nextMonth = 0) => {
  const date = moment__WEBPACK_IMPORTED_MODULE_4___default()().add(nextMonth, 'month');
  console.log(moment__WEBPACK_IMPORTED_MODULE_4___default()(), date, nextMonth, moment__WEBPACK_IMPORTED_MODULE_4___default()().add(nextMonth, 'month'), '.. ///');
  const start = date.startOf('month').format('YYYY-MM-DD');
  const end = date.endOf('month').format('YYYY-MM-DD');
  console.log(date, start, end, nextMonth, '/// ]]]');
  return (0,_lib_api__WEBPACK_IMPORTED_MODULE_7__/* .ajaxAPI */ .EK)('/games', {
    dates: `${start},${end}`
  });
};

const Calendar = () => {
  const {
    0: year,
    1: setYear
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: month,
    1: setMonth
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(moment__WEBPACK_IMPORTED_MODULE_4___default()().month());
  const day = moment__WEBPACK_IMPORTED_MODULE_4___default()().day();
  const hasMore = true;
  const {
    0: days,
    1: setDays
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  const getDaysGames = async (nextMonth = 0) => {
    const date = moment__WEBPACK_IMPORTED_MODULE_4___default()().add(nextMonth, 'month');
    const month = date.month() + 1;
    const monthDays = date.daysInMonth();
    const nextDays = [];
    const fromDay = nextMonth === 0 ? day : 1;

    try {
      const {
        results: games = []
      } = await getGames(nextMonth);

      for (let i = fromDay; i <= monthDays; i++) {
        const dayGames = games.filter(game => {
          if (!game.released) return;
          return moment__WEBPACK_IMPORTED_MODULE_4___default()(game.released).date() === i;
        });
        nextDays.push({
          month,
          date: i,
          games: dayGames || []
        });
      }

      setMonth(month);
      setYear(date.year());
      setDays([...days, ...nextDays]);
    } catch (e) {}
  };

  const loadMore = async page => {
    if (!hasMore) return;
    getDaysGames(page);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "dark",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "fixed w-full justify-end flex px-3 py-2 bg-[#201F25]",
      children: year && month && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "text-white text-sm",
        children: [year, " \u5E74 ", String(month).padStart(2, 0), " \u6708"]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "pt-8",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5___default()), {
        className: "w-full",
        pageStart: -1,
        loadMore: loadMore,
        hasMore: hasMore,
        loader: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "text-center text-white",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full flex justify-center mt-4",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Spinner, {
              size: "sm",
              label: "\u52A0\u8F7D\u4E2D..."
            })
          })
        }, 0),
        children: days.map((data, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "grid grid-cols-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-black col-span-1",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "text-base text-center text-white py-8 font-[500]",
              children: data.date
            }), data.date === 10 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.InView, {
              as: "i",
              onChange: () => setMonth(data.month)
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('col-span-7', 'py-2 px-3', idx % 2 === 0 ? 'bg-green-700' : 'bg-green-600'),
            children: data.games.map(game => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: `/game/${game.slug}`,
                target: "_blank",
                children: game.name
              })
            }))
          })]
        }))
      })
    })]
  });
};

async function getServerSideProps(ctx) {
  return {
    props: {}
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),

/***/ 6691:
/***/ (function(module) {

"use strict";
module.exports = require("@nextui-org/react");;

/***/ }),

/***/ 4058:
/***/ (function(module) {

"use strict";
module.exports = require("classnames");;

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

/***/ 436:
/***/ (function(module) {

"use strict";
module.exports = require("react-infinite-scroller");;

/***/ }),

/***/ 2889:
/***/ (function(module) {

"use strict";
module.exports = require("react-intersection-observer");;

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
var __webpack_exports__ = __webpack_require__.X(0, [883], function() { return __webpack_exec__(9460); });
module.exports = __webpack_exports__;

})();