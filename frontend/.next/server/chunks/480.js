exports.id = 480;
exports.ids = [480];
exports.modules = {

/***/ 9480:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Rating; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2662);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7067);
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_rating__WEBPACK_IMPORTED_MODULE_2__);




function Rating({
  label,
  name,
  control,
  className
}) {
  const computeBackground = value => {
    if (value < 7) return 'bg-[#FF5959]';else if (value < 9) return 'bg-[#EBFF00]';else return 'bg-[#41FF3E]';
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__.Controller, {
    control: control,
    name: name,
    render: ({
      field
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: `flex flex-col ${className}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
        className: "mb-2",
        children: [label, "  ", field.value, " "]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_rating__WEBPACK_IMPORTED_MODULE_2___default()), {
        stop: 10,
        onChange: field.onChange,
        initialRating: field.value,
        fullSymbol: [`inline-block ${computeBackground(field.value)} rounded-full  w-7 h-7 border-5 border-double border-black`],
        emptySymbol: [`inline-block bg-white rounded-full  w-7 h-7 border-5 border-double border-black`]
      })]
    })
  });
}

/***/ })

};
;