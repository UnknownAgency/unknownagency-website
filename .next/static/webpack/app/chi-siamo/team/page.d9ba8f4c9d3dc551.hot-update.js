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

/***/ "(app-client)/./app/chi-siamo/team/team-member.jsx":
/*!********************************************!*\
  !*** ./app/chi-siamo/team/team-member.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TeamMember; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"(app-client)/./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction TeamMember(param) {\n    let { member  } = param;\n    _s();\n    const cardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const card = cardRef.current;\n        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(card, {\n            y: \"0%\",\n            duration: 1.5,\n            ease: \"power2.out\",\n            stagger: .5,\n            opacity: 1\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.from(imgRef.current, {\n            rotate: 60,\n            duration: 1\n        });\n    }, []);\n    gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default()));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let ctx = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.context(()=>{\n            /* Animazione Cerchi */ gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.from(\".team-member\".current, {\n                stagger: .5,\n                scrollTrigger: {\n                    trigger: \".team-member\",\n                    start: \"top 100%\",\n                    end: \"bottom 0%\",\n                    toggleActions: \"play reverse\"\n                },\n                markers: {\n                    startColor: \"white\",\n                    endColor: \"white\",\n                    fontSize: \"1rem\",\n                    indent: 10\n                }\n            });\n        });\n        return ()=>ctx.revert();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"team-member \".concat(member.subteam, \" \").concat(member.class),\n        ref: cardRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                ref: imgRef,\n                src: member.image,\n                width: 300,\n                height: 300,\n                alt: member.name,\n                loading: \"lazy\"\n            }, void 0, false, {\n                fileName: \"/Users/lorenzo.cavicchioli/Develop/unknownagency-website/app/chi-siamo/team/team-member.jsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"team-member-title\",\n                children: member.name\n            }, void 0, false, {\n                fileName: \"/Users/lorenzo.cavicchioli/Develop/unknownagency-website/app/chi-siamo/team/team-member.jsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: member.lavoraconnoi,\n                className: \"team-member-subteam\",\n                children: member.subteam\n            }, void 0, false, {\n                fileName: \"/Users/lorenzo.cavicchioli/Develop/unknownagency-website/app/chi-siamo/team/team-member.jsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"team-member-position\",\n                children: member.position\n            }, void 0, false, {\n                fileName: \"/Users/lorenzo.cavicchioli/Develop/unknownagency-website/app/chi-siamo/team/team-member.jsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lorenzo.cavicchioli/Develop/unknownagency-website/app/chi-siamo/team/team-member.jsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, this);\n}\n_s(TeamMember, \"t7S4Qd7JylUjhhcnH2kNlBWDMJg=\");\n_c = TeamMember;\nvar _c;\n$RefreshReg$(_c, \"TeamMember\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NoaS1zaWFtby90ZWFtL3RlYW0tbWVtYmVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFMEM7QUFDZDtBQUN3QjtBQUVyQyxTQUFTSSxXQUFXLEtBQVU7UUFBVixFQUFFQyxPQUFNLEVBQUUsR0FBVjs7SUFDL0IsTUFBTUMsVUFBVU4sNkNBQU1BLENBQUM7SUFDdkIsTUFBTU8sU0FBU1AsNkNBQU1BLENBQUM7SUFFdEJDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTU8sT0FBT0YsUUFBUUc7UUFDckJQLHNDQUFJQSxDQUFDUSxHQUFHRixNQUFNO1lBQUVHLEdBQUc7WUFBTUMsVUFBVTtZQUFLQyxNQUFNO1lBQWNDLFNBQVE7WUFBSUMsU0FBUztRQUFFO1FBQ25GYixzQ0FBSUEsQ0FBQ2MsS0FBS1QsT0FBT0UsU0FBUztZQUFFUSxRQUFRO1lBQUlMLFVBQVU7UUFBQztJQUN2RCxHQUFHLEVBQUU7SUFFTFYsc0NBQUlBLENBQUNnQixlQUFlZixnRUFBYUE7SUFFakNGLGdEQUFTQSxDQUFDO1FBQ04sSUFBSWtCLE1BQU1qQixzQ0FBSUEsQ0FBQ2tCLFFBQVE7WUFDbkIscUJBQXFCLEdBQ3JCbEIsc0NBQUlBLENBQUNjLEtBQUssZUFBZVAsU0FBUztnQkFDOUJLLFNBQVM7Z0JBQ1RPLGVBQWU7b0JBQ1hDLFNBQVM7b0JBQ1RDLE9BQU87b0JBQ1BDLEtBQUs7b0JBQ0xDLGVBQWU7Z0JBQ25CO2dCQUNBQyxTQUFTO29CQUNMQyxZQUFZO29CQUNSQyxVQUFVO29CQUNWQyxVQUFVO29CQUNWQyxRQUFRO2dCQUNoQjtZQUNKO1FBQ0o7UUFDQSxPQUFPLElBQU1YLElBQUlZO0lBQ3JCLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXLGVBQWlDNUIsT0FBbEJBLE9BQU82QixTQUFRLEtBQWdCLE9BQWI3QixPQUFPOEI7UUFBU0MsS0FBSzlCOzswQkFDbEUsOERBQUMrQjtnQkFBSUQsS0FBSzdCO2dCQUFRK0IsS0FBS2pDLE9BQU9rQztnQkFBT0MsT0FBTztnQkFBS0MsUUFBUTtnQkFBS0MsS0FBS3JDLE9BQU9zQztnQkFBTUMsU0FBUTs7Ozs7OzBCQUN4Riw4REFBQ0M7Z0JBQUdaLFdBQVU7MEJBQXFCNUIsT0FBT3NDOzs7Ozs7MEJBQzFDLDhEQUFDRztnQkFBRUMsTUFBTTFDLE9BQU8yQztnQkFBY2YsV0FBWTswQkFBdUI1QixPQUFPNkI7Ozs7OzswQkFDeEUsOERBQUNlO2dCQUFFaEIsV0FBVTswQkFBd0I1QixPQUFPNkM7Ozs7Ozs7Ozs7OztBQUd4RDtHQTFDd0I5QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY2hpLXNpYW1vL3RlYW0vdGVhbS1tZW1iZXIuanN4P2IzOTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IFNjcm9sbFRyaWdnZXIgZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYW1NZW1iZXIoeyBtZW1iZXIgfSkge1xuICAgIGNvbnN0IGNhcmRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgaW1nUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGNhcmRSZWYuY3VycmVudDtcbiAgICAgICAgZ3NhcC50byhjYXJkLCB7IHk6IFwiMCVcIiwgZHVyYXRpb246IDEuNSwgZWFzZTogXCJwb3dlcjIub3V0XCIsIHN0YWdnZXI6LjUsIG9wYWNpdHk6IDEsfSk7XG4gICAgICAgIGdzYXAuZnJvbShpbWdSZWYuY3VycmVudCwgeyByb3RhdGU6IDYwLCBkdXJhdGlvbjogMX0pXG4gICAgfSwgW10pO1xuXG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBjdHggPSBnc2FwLmNvbnRleHQoKCkgPT4ge1xuICAgICAgICAgICAgLyogQW5pbWF6aW9uZSBDZXJjaGkgKi9cbiAgICAgICAgICAgIGdzYXAuZnJvbShcIi50ZWFtLW1lbWJlclwiLmN1cnJlbnQsIHtcbiAgICAgICAgICAgICAgICBzdGFnZ2VyOiAuNSxcbiAgICAgICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLnRlYW0tbWVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcInRvcCAxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogXCJib3R0b20gMCVcIixcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQWN0aW9uczogXCJwbGF5IHJldmVyc2VcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGVudDogMTAsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuICgpID0+IGN0eC5yZXZlcnQoKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRlYW0tbWVtYmVyICR7bWVtYmVyLnN1YnRlYW19ICR7bWVtYmVyLmNsYXNzfWB9IHJlZj17Y2FyZFJlZn0+XG4gICAgICAgICAgICA8aW1nIHJlZj17aW1nUmVmfSBzcmM9e21lbWJlci5pbWFnZX0gd2lkdGg9ezMwMH0gaGVpZ2h0PXszMDB9IGFsdD17bWVtYmVyLm5hbWV9IGxvYWRpbmc9XCJsYXp5XCIgLz5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZWFtLW1lbWJlci10aXRsZVwiPnttZW1iZXIubmFtZX08L2gzPlxuICAgICAgICAgICAgPGEgaHJlZj17bWVtYmVyLmxhdm9yYWNvbm5vaX0gY2xhc3NOYW1lPXtgdGVhbS1tZW1iZXItc3VidGVhbWB9PnttZW1iZXIuc3VidGVhbX08L2E+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZWFtLW1lbWJlci1wb3NpdGlvblwiPnttZW1iZXIucG9zaXRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsIlRlYW1NZW1iZXIiLCJtZW1iZXIiLCJjYXJkUmVmIiwiaW1nUmVmIiwiY2FyZCIsImN1cnJlbnQiLCJ0byIsInkiLCJkdXJhdGlvbiIsImVhc2UiLCJzdGFnZ2VyIiwib3BhY2l0eSIsImZyb20iLCJyb3RhdGUiLCJyZWdpc3RlclBsdWdpbiIsImN0eCIsImNvbnRleHQiLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInN0YXJ0IiwiZW5kIiwidG9nZ2xlQWN0aW9ucyIsIm1hcmtlcnMiLCJzdGFydENvbG9yIiwiZW5kQ29sb3IiLCJmb250U2l6ZSIsImluZGVudCIsInJldmVydCIsImRpdiIsImNsYXNzTmFtZSIsInN1YnRlYW0iLCJjbGFzcyIsInJlZiIsImltZyIsInNyYyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJuYW1lIiwibG9hZGluZyIsImgzIiwiYSIsImhyZWYiLCJsYXZvcmFjb25ub2kiLCJwIiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/chi-siamo/team/team-member.jsx\n"));

/***/ })

});