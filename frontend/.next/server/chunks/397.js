exports.id = 397;
exports.ids = [397];
exports.modules = {

/***/ 8397:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Radar; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg_radar_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var react_svg_radar_chart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_svg_radar_chart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6691);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3804);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _radar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8125);
/* harmony import */ var _radar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_radar_module_css__WEBPACK_IMPORTED_MODULE_4__);







function Radar({
  score,
  showAverage = false
}) {
  if (!score) return null;
  const captions = {
    art: `美术 ${score.art || ''}`,
    music: `音乐 ${score.music || ''}`,
    story: `故事 ${score.story || ''}`,
    creativity: `创新 ${score.creativity || ''}`,
    gameplay: `游戏性 ${score.gameplay || ''}`
  };
  const data = [{
    data: {
      art: +score.art / 10,
      music: +score.music / 10,
      story: +score.story / 10,
      creativity: +score.creativity / 10,
      gameplay: +score.gameplay / 10
    },
    meta: {
      color: 'blue'
    }
  }];
  const options = {
    scales: 5,
    dots: true,
    captionMargin: 18,
    shapeProps: () => ({
      className: 'fill-[#00B2FF3a] stroke-[#00B2FF] stroke-1/2'
    }),
    scaleProps: () => ({
      fill: 'none',
      className: 'stroke-[#4D4D4D] stroke-1/2'
    }),
    dotProps: () => ({
      className: `${(_radar_module_css__WEBPACK_IMPORTED_MODULE_4___default().dot)} fill-[#f00] stroke-[#f00] stroke-1/2`
    }),
    captionProps: () => ({
      className: 'fill-[#D7D7D7] text-sm',
      textAnchor: 'middle',
      fontSize: 12
    })
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: `flex justify-center ${showAverage ? 'items-end' : 'items-center'} `,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_svg_radar_chart__WEBPACK_IMPORTED_MODULE_1___default()), {
      captions: captions,
      data: data,
      size: 250,
      options: options
    }), showAverage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Chip, {
      size: "small",
      className: "mb-4",
      children: (0,lodash__WEBPACK_IMPORTED_MODULE_3__.mean)(Object.values(score))
    })]
  });
}

/***/ }),

/***/ 8125:
/***/ (function(module) {

// Exports
module.exports = {
	"dot": "radar_dot__1xVHi"
};


/***/ })

};
;