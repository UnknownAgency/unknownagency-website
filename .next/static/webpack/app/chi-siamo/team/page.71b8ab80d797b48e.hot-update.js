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

/***/ "(app-client)/./app/chi-siamo/team/page.jsx":
/*!*************************************!*\
  !*** ./app/chi-siamo/team/page.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Team; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _filter_member__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-member */ \"(app-client)/./app/chi-siamo/team/filter-member.jsx\");\n/* harmony import */ var _team_member__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-member */ \"(app-client)/./app/chi-siamo/team/team-member.jsx\");\n/* harmony import */ var _team_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team.scss */ \"(app-client)/./app/chi-siamo/team/team.scss\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst teamMembers = [\n    {\n        name: \"Lorenzo Cavicchioli\",\n        subteam: \"Digital\",\n        position: \"Web Developer\",\n        image: \"https://digitalcanali.com/cep/team/fotoLorenzoCavicchioli.jpg\",\n        class: \"normal\"\n    },\n    {\n        name: \"Giuseppe Tramontana\",\n        subteam: \"Digital\",\n        position: \"Head of Digital\",\n        image: \"\",\n        class: \"normal\"\n    },\n    {\n        name: \"Francesca Mattioli\",\n        subteam: \"Creativi\",\n        position: \"Digital Artist\",\n        image: \"\",\n        class: \"normal\"\n    },\n    {\n        name: \"Simone Grassi\",\n        subteam: \"Creativi\",\n        position: \"Digital Artist\",\n        image: \"\",\n        class: \"normal\"\n    },\n    {\n        name: \"Caroglio Luca\",\n        subteam: \"Direzione\",\n        position: \"Direttore Generale\",\n        image: \"\",\n        class: \"normal\"\n    },\n    {\n        name: \"Claudia Cavalli\",\n        subteam: \"Amminitrazione\",\n        position: \"Amministrazione\",\n        image: \"\",\n        class: \"normal\"\n    },\n    {\n        name: \"Sofia Scano\",\n        subteam: \"Account\",\n        position: \"Direttore Generale\",\n        image: \"\",\n        class: \"normal\"\n    },\n    {\n        name: \"Martina Nardone\",\n        subteam: \"Digital\",\n        position: \"Web Editor\",\n        image: \"\",\n        class: \"normal\"\n    },\n    {\n        name: \"Ivo Colletta\",\n        subteam: \"Digital\",\n        position: \"F1 Pilot\",\n        image: \"\",\n        class: \"normal\"\n    },\n    {\n        name: \"Francesca Rondoni\",\n        subteam: \"Social\",\n        position: \"Stratega sul campo di battaglia\",\n        image: \"\",\n        class: \"normal\"\n    },\n    {\n        name: \"Unisciti al nostro TEAM\",\n        subteam: \"Lavora con noi\",\n        position: \"\",\n        image: \"https://digitalcanali.com/cep/team/logo-cep.png\",\n        lavoraconnoi: \"/lavora-con-noi\",\n        class: \"lavora-con-noi\"\n    },\n    {\n        name: \"Federico Bertell\\xe8\",\n        subteam: \"Social\",\n        position: \"SMM J.\",\n        image: \"\",\n        class: \"normal\"\n    },\n    {\n        name: \"Concetta Medugno\",\n        subteam: \"Account\",\n        position: \"Account J.\",\n        image: \"\",\n        class: \"normal\"\n    },\n    {\n        name: \"Federica Piacenza\",\n        subteam: \"PR&Stampa\",\n        position: \"Head of Unit\",\n        image: \"\",\n        class: \"normal\"\n    },\n    {\n        name: \"Beatrice\",\n        subteam: \"Account\",\n        position: \"Account Int.\",\n        image: \"\",\n        class: \"normal\"\n    },\n    {\n        name: \"Franco Ferrari\",\n        subteam: \"Direzione\",\n        position: \"Presidente\",\n        image: \"\",\n        class: \"normal\"\n    },\n    {\n        name: \"Anita Caruso\",\n        subteam: \"Reception\",\n        position: \"Receptionist\",\n        image: \"\",\n        class: \"normal\"\n    }\n];\nfunction Team() {\n    _s();\n    const [currentFilter, setCurrentFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"all\");\n    const handleFilterChanged = (filter)=>{\n        setCurrentFilter(filter);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"root-page page-team\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"title\",\n                children: \"Dream team\"\n            }, void 0, false, {\n                fileName: \"/Users/lorenzo.cavicchioli/Develop/unknownagency-website/app/chi-siamo/team/page.jsx\",\n                lineNumber: 144,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_filter_member__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onFilterChanged: handleFilterChanged\n            }, void 0, false, {\n                fileName: \"/Users/lorenzo.cavicchioli/Develop/unknownagency-website/app/chi-siamo/team/page.jsx\",\n                lineNumber: 145,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wrap-team-members\",\n                children: teamMembers.filter((member)=>currentFilter === \"all\" || member.subteam === currentFilter).map((member)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_team_member__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        member: member\n                    }, member.name, false, {\n                        fileName: \"/Users/lorenzo.cavicchioli/Develop/unknownagency-website/app/chi-siamo/team/page.jsx\",\n                        lineNumber: 150,\n                        columnNumber: 25\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/lorenzo.cavicchioli/Develop/unknownagency-website/app/chi-siamo/team/page.jsx\",\n                lineNumber: 146,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lorenzo.cavicchioli/Develop/unknownagency-website/app/chi-siamo/team/page.jsx\",\n        lineNumber: 143,\n        columnNumber: 9\n    }, this);\n}\n_s(Team, \"G0vmRZFaVxC8F/nwKjvcD+a/X5E=\");\n_c = Team;\nvar _c;\n$RefreshReg$(_c, \"Team\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NoaS1zaWFtby90ZWFtL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNvRDtBQUV4QjtBQUN3QjtBQUVUO0FBQ0o7QUFDbEI7QUFFckIsTUFBTU8sY0FBYztJQUNoQjtRQUNJQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLE9BQU87SUFDWDtJQUNBO1FBQ0lKLE1BQU07UUFDTkMsU0FBUztRQUNUQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztJQUNYO0lBQ0E7UUFDSUosTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxPQUFPO0lBQ1g7SUFDQTtRQUNJSixNQUFNO1FBQ05DLFNBQVM7UUFDVEMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLE9BQU87SUFDWDtJQUNBO1FBQ0lKLE1BQU07UUFDTkMsU0FBUztRQUNUQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztJQUNYO0lBQ0E7UUFDSUosTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxPQUFPO0lBQ1g7SUFDQTtRQUNJSixNQUFNO1FBQ05DLFNBQVM7UUFDVEMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLE9BQU87SUFDWDtJQUNBO1FBQ0lKLE1BQU07UUFDTkMsU0FBUztRQUNUQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztJQUNYO0lBQ0E7UUFDSUosTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxPQUFPO0lBQ1g7SUFDQTtRQUNJSixNQUFNO1FBQ05DLFNBQVM7UUFDVEMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLE9BQU87SUFDWDtJQUNBO1FBQ0lKLE1BQU07UUFDTkMsU0FBUztRQUNUQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEUsY0FBYztRQUNkRCxPQUFPO0lBQ1g7SUFDQTtRQUNJSixNQUFNO1FBQ05DLFNBQVM7UUFDVEMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLE9BQU87SUFDWDtJQUNBO1FBQ0lKLE1BQU07UUFDTkMsU0FBUztRQUNUQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztJQUNYO0lBQ0E7UUFDSUosTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxPQUFPO0lBQ1g7SUFDQTtRQUNJSixNQUFNO1FBQ05DLFNBQVM7UUFDVEMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLE9BQU87SUFDWDtJQUNBO1FBQ0lKLE1BQU07UUFDTkMsU0FBUztRQUNUQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztJQUNYO0lBQ0E7UUFDSUosTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxPQUFPO0lBQ1g7Q0FDSDtBQUVjLFNBQVNFOztJQUVwQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHaEIsK0NBQVFBLENBQUM7SUFFbkQsTUFBTWlCLHNCQUFzQixDQUFDQztRQUN6QkYsaUJBQWlCRTtJQUNyQjtJQUVBLHFCQUNJLDhEQUFDQztRQUFLQyxXQUFVOzswQkFDWiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQVE7Ozs7OzswQkFDdEIsOERBQUNmLHNEQUFZQTtnQkFBQ2lCLGlCQUFpQkw7Ozs7OzswQkFDL0IsOERBQUNNO2dCQUFJSCxXQUFVOzBCQUNWYixZQUNJVyxPQUFPLENBQUNNLFNBQVdULGtCQUFrQixTQUFTUyxPQUFPZixZQUFZTSxlQUNqRVUsSUFBSSxDQUFDRCx1QkFDRiw4REFBQ2xCLG9EQUFVQTt3QkFBbUJrQixRQUFRQTt1QkFBckJBLE9BQU9oQjs7Ozs7Ozs7Ozs7Ozs7OztBQUtoRDtHQXJCd0JNO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jaGktc2lhbW8vdGVhbS9wYWdlLmpzeD81NTcxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnO1xuaW1wb3J0IFNjcm9sbFRyaWdnZXIgZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XG5cbmltcG9ydCBGaWx0ZXJNZW1iZXIgZnJvbSBcIi4vZmlsdGVyLW1lbWJlclwiO1xuaW1wb3J0IFRlYW1NZW1iZXIgZnJvbSBcIi4vdGVhbS1tZW1iZXJcIjtcbmltcG9ydCAnLi90ZWFtLnNjc3MnO1xuXG5jb25zdCB0ZWFtTWVtYmVycyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdMb3JlbnpvIENhdmljY2hpb2xpJyxcbiAgICAgICAgc3VidGVhbTogJ0RpZ2l0YWwnLFxuICAgICAgICBwb3NpdGlvbjogJ1dlYiBEZXZlbG9wZXInLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vZGlnaXRhbGNhbmFsaS5jb20vY2VwL3RlYW0vZm90b0xvcmVuem9DYXZpY2NoaW9saS5qcGcnLFxuICAgICAgICBjbGFzczogJ25vcm1hbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdHaXVzZXBwZSBUcmFtb250YW5hJyxcbiAgICAgICAgc3VidGVhbTogJ0RpZ2l0YWwnLFxuICAgICAgICBwb3NpdGlvbjogJ0hlYWQgb2YgRGlnaXRhbCcsXG4gICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgY2xhc3M6ICdub3JtYWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnRnJhbmNlc2NhIE1hdHRpb2xpJyxcbiAgICAgICAgc3VidGVhbTogJ0NyZWF0aXZpJyxcbiAgICAgICAgcG9zaXRpb246ICdEaWdpdGFsIEFydGlzdCcsXG4gICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgY2xhc3M6ICdub3JtYWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnU2ltb25lIEdyYXNzaScsXG4gICAgICAgIHN1YnRlYW06ICdDcmVhdGl2aScsXG4gICAgICAgIHBvc2l0aW9uOiAnRGlnaXRhbCBBcnRpc3QnLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIGNsYXNzOiAnbm9ybWFsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0Nhcm9nbGlvIEx1Y2EnLFxuICAgICAgICBzdWJ0ZWFtOiAnRGlyZXppb25lJyxcbiAgICAgICAgcG9zaXRpb246ICdEaXJldHRvcmUgR2VuZXJhbGUnLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIGNsYXNzOiAnbm9ybWFsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NsYXVkaWEgQ2F2YWxsaScsXG4gICAgICAgIHN1YnRlYW06ICdBbW1pbml0cmF6aW9uZScsXG4gICAgICAgIHBvc2l0aW9uOiAnQW1taW5pc3RyYXppb25lJyxcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICBjbGFzczogJ25vcm1hbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTb2ZpYSBTY2FubycsXG4gICAgICAgIHN1YnRlYW06ICdBY2NvdW50JyxcbiAgICAgICAgcG9zaXRpb246ICdEaXJldHRvcmUgR2VuZXJhbGUnLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIGNsYXNzOiAnbm9ybWFsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ01hcnRpbmEgTmFyZG9uZScsXG4gICAgICAgIHN1YnRlYW06ICdEaWdpdGFsJyxcbiAgICAgICAgcG9zaXRpb246ICdXZWIgRWRpdG9yJyxcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICBjbGFzczogJ25vcm1hbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdJdm8gQ29sbGV0dGEnLFxuICAgICAgICBzdWJ0ZWFtOiAnRGlnaXRhbCcsXG4gICAgICAgIHBvc2l0aW9uOiAnRjEgUGlsb3QnLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIGNsYXNzOiAnbm9ybWFsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0ZyYW5jZXNjYSBSb25kb25pJyxcbiAgICAgICAgc3VidGVhbTogJ1NvY2lhbCcsXG4gICAgICAgIHBvc2l0aW9uOiAnU3RyYXRlZ2Egc3VsIGNhbXBvIGRpIGJhdHRhZ2xpYScsXG4gICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgY2xhc3M6ICdub3JtYWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVW5pc2NpdGkgYWwgbm9zdHJvIFRFQU0nLFxuICAgICAgICBzdWJ0ZWFtOiAnTGF2b3JhIGNvbiBub2knLFxuICAgICAgICBwb3NpdGlvbjogJycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9kaWdpdGFsY2FuYWxpLmNvbS9jZXAvdGVhbS9sb2dvLWNlcC5wbmcnLFxuICAgICAgICBsYXZvcmFjb25ub2k6ICcvbGF2b3JhLWNvbi1ub2knLFxuICAgICAgICBjbGFzczogJ2xhdm9yYS1jb24tbm9pJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0ZlZGVyaWNvIEJlcnRlbGzDqCcsXG4gICAgICAgIHN1YnRlYW06ICdTb2NpYWwnLFxuICAgICAgICBwb3NpdGlvbjogJ1NNTSBKLicsXG4gICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgY2xhc3M6ICdub3JtYWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ29uY2V0dGEgTWVkdWdubycsXG4gICAgICAgIHN1YnRlYW06ICdBY2NvdW50JyxcbiAgICAgICAgcG9zaXRpb246ICdBY2NvdW50IEouJyxcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICBjbGFzczogJ25vcm1hbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdGZWRlcmljYSBQaWFjZW56YScsXG4gICAgICAgIHN1YnRlYW06ICdQUiZTdGFtcGEnLFxuICAgICAgICBwb3NpdGlvbjogJ0hlYWQgb2YgVW5pdCcsXG4gICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgY2xhc3M6ICdub3JtYWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQmVhdHJpY2UnLFxuICAgICAgICBzdWJ0ZWFtOiAnQWNjb3VudCcsXG4gICAgICAgIHBvc2l0aW9uOiAnQWNjb3VudCBJbnQuJyxcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICBjbGFzczogJ25vcm1hbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdGcmFuY28gRmVycmFyaScsXG4gICAgICAgIHN1YnRlYW06ICdEaXJlemlvbmUnLFxuICAgICAgICBwb3NpdGlvbjogJ1ByZXNpZGVudGUnLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIGNsYXNzOiAnbm9ybWFsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0FuaXRhIENhcnVzbycsXG4gICAgICAgIHN1YnRlYW06ICdSZWNlcHRpb24nLFxuICAgICAgICBwb3NpdGlvbjogJ1JlY2VwdGlvbmlzdCcsXG4gICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgY2xhc3M6ICdub3JtYWwnLFxuICAgIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYW0oKSB7XG5cbiAgICBjb25zdCBbY3VycmVudEZpbHRlciwgc2V0Q3VycmVudEZpbHRlcl0gPSB1c2VTdGF0ZShcImFsbFwiKTtcblxuICAgIGNvbnN0IGhhbmRsZUZpbHRlckNoYW5nZWQgPSAoZmlsdGVyKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRGaWx0ZXIoZmlsdGVyKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJyb290LXBhZ2UgcGFnZS10ZWFtXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5EcmVhbSB0ZWFtPC9oMT5cbiAgICAgICAgICAgIDxGaWx0ZXJNZW1iZXIgb25GaWx0ZXJDaGFuZ2VkPXtoYW5kbGVGaWx0ZXJDaGFuZ2VkfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwLXRlYW0tbWVtYmVyc1wiPlxuICAgICAgICAgICAgICAgIHt0ZWFtTWVtYmVyc1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChtZW1iZXIpID0+IGN1cnJlbnRGaWx0ZXIgPT09IFwiYWxsXCIgfHwgbWVtYmVyLnN1YnRlYW0gPT09IGN1cnJlbnRGaWx0ZXIpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKG1lbWJlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRlYW1NZW1iZXIga2V5PXttZW1iZXIubmFtZX0gbWVtYmVyPXttZW1iZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJGaWx0ZXJNZW1iZXIiLCJUZWFtTWVtYmVyIiwidGVhbU1lbWJlcnMiLCJuYW1lIiwic3VidGVhbSIsInBvc2l0aW9uIiwiaW1hZ2UiLCJjbGFzcyIsImxhdm9yYWNvbm5vaSIsIlRlYW0iLCJjdXJyZW50RmlsdGVyIiwic2V0Q3VycmVudEZpbHRlciIsImhhbmRsZUZpbHRlckNoYW5nZWQiLCJmaWx0ZXIiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJvbkZpbHRlckNoYW5nZWQiLCJkaXYiLCJtZW1iZXIiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/chi-siamo/team/page.jsx\n"));

/***/ })

});