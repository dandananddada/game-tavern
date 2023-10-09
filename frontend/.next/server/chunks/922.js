exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 9922:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Radar; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg_radar_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var react_svg_radar_chart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_svg_radar_chart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86);
/* harmony import */ var _radar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_radar_module_css__WEBPACK_IMPORTED_MODULE_2__);




function Radar({
  score
}) {
  if (!score) return null;
  const captions = {
    art: '美术',
    music: '音乐',
    story: '故事',
    creativity: '创新',
    gameplay: '游戏性'
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
    shapeProps: () => ({
      className: 'fill-[#00B2FF3a] stroke-[#00B2FF] stroke-1/2'
    }),
    scaleProps: () => ({
      fill: 'none',
      className: 'stroke-[#4D4D4D] stroke-1/2'
    }),
    dotProps: () => ({
      className: `${(_radar_module_css__WEBPACK_IMPORTED_MODULE_2___default().dot)} fill-[#f00] stroke-[#f00] stroke-1/2`
    }),
    captionProps: () => ({
      className: 'fill-[#D7D7D7] text-sm',
      textAnchor: 'middle',
      fontSize: 12
    })
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_svg_radar_chart__WEBPACK_IMPORTED_MODULE_1___default()), {
    captions: captions,
    data: data,
    size: 250,
    options: options
  });
}

/***/ }),

/***/ 86:
/***/ (function(module) {

// Exports
module.exports = {
	"dot": "radar_dot__-htxr"
};


/***/ })

};
;