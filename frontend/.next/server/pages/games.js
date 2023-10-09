(function() {
var exports = {};
exports.id = 451;
exports.ids = [451,908,334];
exports.modules = {

/***/ 9820:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ games; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "lodash"
var external_lodash_namespaceObject = require("lodash");;
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6691);
;// CONCATENATED MODULE: external "react-infinite-scroller"
var external_react_infinite_scroller_namespaceObject = require("react-infinite-scroller");;
var external_react_infinite_scroller_default = /*#__PURE__*/__webpack_require__.n(external_react_infinite_scroller_namespaceObject);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
// EXTERNAL MODULE: ./pages/games/components/platform.jsx
var platform = __webpack_require__(4504);
// EXTERNAL MODULE: ./components/icons.js
var icons = __webpack_require__(4905);
;// CONCATENATED MODULE: ./pages/games/index.js












const getGames = (page = 1) => {
  return (0,api/* ajaxAPI */.EK)('/games', {
    page,
    page_size: 20
  });
};

const Article = ({
  platforms,
  games: initGames
}) => {
  const {
    0: games,
    1: setGames
  } = (0,external_react_.useState)(initGames);
  const {
    0: isFetch,
    1: setIsFetch
  } = (0,external_react_.useState)(false);
  const {
    0: hasMore,
    1: setHasMore
  } = (0,external_react_.useState)(true);

  const loadMore = async page => {
    if (!hasMore) return;
    const data = await getGames(page);
    const moreGames = data.results;
    setGames([...games, ...moreGames]);
    setHasMore(true);
  };

  const find = async keyword => {
    setIsFetch(true);
    const data = await (0,api/* ajaxAPI */.EK)('/games', {
      search: keyword,
      page: 1,
      page_size: 99
    });
    console.log(data.results);
    setGames(data.results);
    setIsFetch(false);
    setHasMore(false);
  };

  const debounceFind = (0,external_react_.useMemo)(() => (0,external_lodash_namespaceObject.debounce)(find, 600), []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex justify-end mx-6",
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Input, {
        onValueChange: debounceFind,
        startContent: /*#__PURE__*/jsx_runtime_.jsx(icons/* SearchIcon */.W, {})
      })
    }), isFetch ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "m-auto flex justify-around mt-12",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Card, {
        className: "w-[180px] space-y-5 p-4",
        radius: "lg",
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Skeleton, {
          className: "rounded-lg",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "h-24 rounded-lg bg-default-300"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "space-y-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Skeleton, {
            className: "w-3/5 rounded-lg",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "h-3 w-3/5 rounded-lg bg-default-200"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Skeleton, {
            className: "w-4/5 rounded-lg",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "h-3 w-4/5 rounded-lg bg-default-200"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Skeleton, {
            className: "w-2/5 rounded-lg",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "h-3 w-2/5 rounded-lg bg-default-300"
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Card, {
        className: "w-[180px] space-y-5 p-4",
        radius: "lg",
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Skeleton, {
          className: "rounded-lg",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "h-24 rounded-lg bg-default-300"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "space-y-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Skeleton, {
            className: "w-3/5 rounded-lg",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "h-3 w-3/5 rounded-lg bg-default-200"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Skeleton, {
            className: "w-4/5 rounded-lg",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "h-3 w-4/5 rounded-lg bg-default-200"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Skeleton, {
            className: "w-2/5 rounded-lg",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "h-3 w-2/5 rounded-lg bg-default-300"
            })
          })]
        })]
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx((external_react_infinite_scroller_default()), {
      className: "w-full",
      pageStart: 1,
      loadMore: loadMore,
      hasMore: true,
      loader: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-center text-white",
        children: "\u52A0\u8F7D\u4E2D..."
      }, 0),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "m-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 lg:gap-[40px] lg:max-w-[1240px] xl:max-w-[1560px] lg:m-auto",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-40 m-auto lg:w-[280px] lg:mb-[-14px]",
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "text-lg text-white md:text-xl",
            children: "\u5DF2\u516C\u5F00\u6E38\u620F"
          })
        }), games.map((game, idx) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/game/${game.slug}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `w-full mb-10 col-span-1 ${idx === 0 ? 'col-end-2' : null}`,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "w-40 h-52 m-auto rounded bg-center bg-cover bg-no-repeat lg:w-[280px] lg:h-[300px]",
              style: {
                backgroundImage: `url(${game.background_image})`
              }
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-center mt-3 text-white text-base lg:text-xl",
              children: game.name
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-center mt-1 text-white text-xs lg:text-sm",
              children: game.released
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex justify-center mt-1 lg:mt-[12px]",
              children: (game.stores || []).map(({
                store
              }) => /*#__PURE__*/jsx_runtime_.jsx(platform.default, {
                storeSlug: store.slug,
                className: "mr-2"
              }))
            })]
          })
        }, game.id))]
      })
    })]
  });
};

async function getStaticProps({
  params
}) {
  const gamesRes = await getGames();
  const games = gamesRes.results;
  return {
    props: {
      platforms: [],
      games
    },
    revalidate: 1
  };
}
/* harmony default export */ var games = (Article);

/***/ }),

/***/ 6691:
/***/ (function(module) {

"use strict";
module.exports = require("@nextui-org/react");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,75,883,905,504], function() { return __webpack_exec__(9820); });
module.exports = __webpack_exports__;

})();