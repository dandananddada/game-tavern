exports.id = 504;
exports.ids = [504];
exports.modules = {

/***/ 4504:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75);



const Platform = ({
  storeSlug
}) => {
  if (['playstation-store'].includes(storeSlug)) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logo__WEBPACK_IMPORTED_MODULE_1__.PS, {});
  } else if (storeSlug === 'nintendo') {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logo__WEBPACK_IMPORTED_MODULE_1__.NS, {});
  } else if (storeSlug === 'steam') {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logo__WEBPACK_IMPORTED_MODULE_1__.Steam, {});
  } else if (storeSlug === 'xbox-store') {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logo__WEBPACK_IMPORTED_MODULE_1__.Xbox, {});
  } else if (storeSlug === 'epic-games') {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logo__WEBPACK_IMPORTED_MODULE_1__.Epic, {}); // } else if (storeSlug === 'xbox360') {
    //   return <Xbox360 />
  } else if (storeSlug === 'google-play') {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logo__WEBPACK_IMPORTED_MODULE_1__.Google, {});
  } else if (storeSlug === 'apple-appstore') {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logo__WEBPACK_IMPORTED_MODULE_1__.Apple, {});
  } else {
    return null;
  }
};

const PlatformWrapper = ({
  storeSlug,
  className
}) => {
  if (!['playstation-store', 'nintendo', 'xbox-store', 'steam', 'epic-games', 'google-play', 'apple-appstore'].includes(storeSlug)) {
    return null;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: className,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Platform, {
      storeSlug: storeSlug
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PlatformWrapper);

/***/ })

};
;