"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chi-siamo/team/page",{

/***/ "(app-client)/./app/template/banner-cta-progetto.jsx":
/*!**********************************************!*\
  !*** ./app/template/banner-cta-progetto.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BannerCtaProgetto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"(app-client)/./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction BannerCtaProgetto() {\n    _s();\n    gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default()));\n    const refBannerCta = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const BannerCta = refBannerCta.current;\n        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.from(BannerCta.current, {\n            y: 100,\n            opacity: 0,\n            duration: 1,\n            scrollTrigger: {\n                trigger: BannerCta,\n                start: \"top, 80%\",\n                end: \"bottom, 20%\",\n                scrub: 5,\n                markers: {\n                    startColor: \"black\",\n                    endColor: \"red\",\n                    fontSize: \"1rem\"\n                }\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"wrapper-banner-cta-progetto\",\n        ref: refBannerCta,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper-boxed\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Ci piacerebbe saperne di pi\\xf9 sul vostro progetto\"\n            }, void 0, false, {\n                fileName: \"/Users/lorenzo.cavicchioli/Develop/unknownagency-website/app/template/banner-cta-progetto.jsx\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/lorenzo.cavicchioli/Develop/unknownagency-website/app/template/banner-cta-progetto.jsx\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lorenzo.cavicchioli/Develop/unknownagency-website/app/template/banner-cta-progetto.jsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(BannerCtaProgetto, \"cPSdDJ4Q+yCAG7uDk9DMipWDIN4=\");\n_c = BannerCtaProgetto;\nvar _c;\n$RefreshReg$(_c, \"BannerCtaProgetto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3RlbXBsYXRlL2Jhbm5lci1jdGEtcHJvZ2V0dG8uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE0QjtBQUN3QjtBQUNWO0FBRTNCLFNBQVNJOztJQUVwQkosc0NBQUlBLENBQUNLLGVBQWVKLGdFQUFhQTtJQUNqQyxNQUFNSyxlQUFlSCw2Q0FBTUEsQ0FBQztJQUU1QkQsZ0RBQVNBLENBQUM7UUFDTixNQUFNSyxZQUFZRCxhQUFhRTtRQUMzQlIsc0NBQUlBLENBQUNTLEtBQUtGLFVBQVVDLFNBQVM7WUFDckJFLEdBQUc7WUFDSEMsU0FBUztZQUNUQyxVQUFVO1lBQ1ZDLGVBQWU7Z0JBQ1hDLFNBQVNQO2dCQUNUUSxPQUFPO2dCQUNQQyxLQUFLO2dCQUNMQyxPQUFPO2dCQUNQQyxTQUFTO29CQUNMQyxZQUFZO29CQUNaQyxVQUFVO29CQUNWQyxVQUFVO2dCQUNkO1lBQ0o7UUFDSjtJQUVSLEdBQUcsRUFBRTtJQUVULHFCQUNJLDhEQUFDQztRQUFRQyxXQUFVO1FBQThCQyxLQUFLbEI7a0JBQ2xELDRFQUFDbUI7WUFBSUYsV0FBVTtzQkFDWCw0RUFBQ0c7MEJBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEI7R0FqQ3dCdEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3RlbXBsYXRlL2Jhbm5lci1jdGEtcHJvZ2V0dG8uanN4Pzk5NmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgU2Nyb2xsVHJpZ2dlciBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhbm5lckN0YVByb2dldHRvKCkge1xuXG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbiAgICBjb25zdCByZWZCYW5uZXJDdGEgPSB1c2VSZWYobnVsbClcblxuICAgIHVzZUVmZmVjdCgoKT0+IHtcbiAgICAgICAgY29uc3QgQmFubmVyQ3RhID0gcmVmQmFubmVyQ3RhLmN1cnJlbnQ7XG4gICAgICAgICAgICBnc2FwLmZyb20oQmFubmVyQ3RhLmN1cnJlbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgeTogMTAwLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogQmFubmVyQ3RhLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwidG9wLCA4MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogXCJib3R0b20sIDIwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NydWI6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRDb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZENvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid3JhcHBlci1iYW5uZXItY3RhLXByb2dldHRvXCIgcmVmPXtyZWZCYW5uZXJDdGF9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLWJveGVkXCI+XG4gICAgICAgICAgICAgICAgPGg0PkNpIHBpYWNlcmViYmUgc2FwZXJuZSBkaSBwacO5IHN1bCB2b3N0cm8gcHJvZ2V0dG88L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59Il0sIm5hbWVzIjpbImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQmFubmVyQ3RhUHJvZ2V0dG8iLCJyZWdpc3RlclBsdWdpbiIsInJlZkJhbm5lckN0YSIsIkJhbm5lckN0YSIsImN1cnJlbnQiLCJmcm9tIiwieSIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJzY3J1YiIsIm1hcmtlcnMiLCJzdGFydENvbG9yIiwiZW5kQ29sb3IiLCJmb250U2l6ZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJyZWYiLCJkaXYiLCJoNCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/template/banner-cta-progetto.jsx\n"));

/***/ })

});