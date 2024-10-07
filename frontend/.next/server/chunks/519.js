exports.id = 519;
exports.ids = [519];
exports.modules = {

/***/ 2519:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4912);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3804);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2407);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6691);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _games_components_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4504);
/* harmony import */ var _components_scores_radar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8397);
/* harmony import */ var _components_user_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3167);
/* harmony import */ var _store_game__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9445);













function Share({
  game
}) {
  const {
    shouldShare,
    gameScore: score
  } = _store_game__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z;
  const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: isSharing,
    1: setIsSharing
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const onOpenChange = isOpen => {
    _store_game__WEBPACK_IMPORTED_MODULE_9__/* .default.update */ .Z.update('shouldShare', isOpen);
  };

  const share = () => {
    const node = canvasRef.current;
    setIsSharing(true);
    dom_to_image__WEBPACK_IMPORTED_MODULE_4___default().toPng(node, {
      width: 2 * node.clientWidth,
      height: 2 * node.clientHeight,
      style: {
        transform: 'scale(2)',
        transformOrigin: 'top left'
      }
    }).then(() => {
      dom_to_image__WEBPACK_IMPORTED_MODULE_4___default().toPng(node, {
        width: 2 * node.clientWidth,
        height: 2 * node.clientHeight,
        style: {
          transform: 'scale(2)',
          transformOrigin: 'top left'
        }
      }).then(dataUrl => {
        const link = document.createElement('a');
        link.download = `${game.name}.png`;
        link.href = dataUrl;
        link.click();
        setIsSharing(false);
      });
    });
  };

  const gradientBGStyle = {
    background: 'linear-gradient(0deg, #201F25 9.36%, rgba(32, 31, 37, 0.00) 100%)'
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.Modal, {
    size: "full",
    isOpen: shouldShare,
    onOpenChange: onOpenChange,
    scrollBehavior: "inside",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.ModalContent, {
      children: onClose => {
        var _score$users_permissi;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.ModalHeader, {
            className: "flex flex-col gap-1",
            children: "\u5206\u4EAB\u8BC4\u5206"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.ModalBody, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "bg-[#201F25]",
              ref: canvasRef,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-center bg-cover bg-no-repeat",
                style: {
                  backgroundImage: `url(/api/image-proxy?imageUrl=${game.background_image})`
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "text-center pt-[220px]",
                  style: gradientBGStyle,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-white text-2xl font-bold",
                    children: game.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-center items-center mt-1/2 leading-4",
                    children: [game.stores.map(({
                      store
                    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_games_components_platform__WEBPACK_IMPORTED_MODULE_6__.default, {
                      storeSlug: store.slug,
                      className: "flex mr-1/2 scale-75"
                    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      className: "ml-1 text-left text-sm text-[#DDD]",
                      children: ["\u53D1\u552E\u65E5\u671F\uFF1A", game.released]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-sm",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      className: "mt-2",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-[#DDD]",
                        children: "\u5F00\u53D1\uFF1A"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-white",
                        children: game.developer
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      className: "mt-1",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-[#DDD]",
                        children: "\u53D1\u884C\uFF1A"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-white",
                        children: game.publisher
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-32 m-auto my-6 py-2 rounded-md bg-[#201f25]/80",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                      className: "text-md text-[#D7D7D7]",
                      children: "\u7EFC\u5408\u8BC4\u5206"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "text-2xl font-bold text-[#2CFF28]",
                      children: (0,lodash__WEBPACK_IMPORTED_MODULE_3__.mean)(Object.values(score.radar_score)).toFixed(1)
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_scores_radar__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                    score: score.radar_score
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-center items-center text-sm mt-8 mb-8",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_avatar__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                      user: score.users_permissions_user,
                      size: "sm"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                      className: "ml-2 text-white",
                      children: (_score$users_permissi = score.users_permissions_user) === null || _score$users_permissi === void 0 ? void 0 : _score$users_permissi.username
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                      className: "ml-2 text-[#DDD]",
                      children: "\u5206\u4EAB\u4E86 TA \u7684\u8BC4\u5206"
                    })]
                  })]
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.ModalFooter, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
              onPress: share,
              isLoading: isSharing,
              children: "\u5206\u4EAB"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
              color: "default",
              variant: "light",
              onPress: onClose,
              children: "\u53D6\u6D88"
            })]
          })]
        });
      }
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(Share));

/***/ })

};
;