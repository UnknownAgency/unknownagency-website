"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/test-particles/page",{

/***/ "(app-client)/./app/components/config/particles-config.js":
/*!***************************************************!*\
  !*** ./app/components/config/particles-config.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst particlesConfig = {\n    fpsLimit: 60,\n    interactivity: {\n        detect_on: \"canvas\",\n        events: {\n            onclick: {\n                enable: true,\n                mode: \"repulse\"\n            },\n            onhover: {\n                enable: true,\n                mode: \"bubble\",\n                parallax: {\n                    enable: false,\n                    force: 2,\n                    smooth: 10\n                }\n            },\n            resize: true\n        },\n        modes: {\n            bubble: {\n                distance: 200,\n                duration: 2,\n                opacity: 0,\n                size: 0,\n                speed: 3\n            },\n            grab: {\n                distance: 400,\n                line_linked: {\n                    opacity: 1\n                }\n            },\n            push: {\n                particles_nb: 4\n            },\n            remove: {\n                particles_nb: 2\n            },\n            repulse: {\n                distance: 400,\n                duration: 0.4\n            }\n        }\n    },\n    particles: {\n        color: {\n            value: \"#ffffff\"\n        },\n        line_linked: {\n            color: \"#ffffff\",\n            distance: 150,\n            enable: false,\n            opacity: 0.4,\n            width: 1\n        },\n        move: {\n            attract: {\n                enable: false,\n                rotateX: 600,\n                rotateY: 600\n            },\n            bounce: false,\n            direction: \"none\",\n            enable: true,\n            out_mode: \"out\",\n            random: true,\n            speed: 0.3,\n            straight: false\n        },\n        number: {\n            density: {\n                enable: true,\n                value_area: 800\n            },\n            value: 600\n        },\n        opacity: {\n            anim: {\n                enable: true,\n                opacity_min: 0.3,\n                speed: 5,\n                sync: false\n            },\n            random: {\n                enable: true,\n                minimumValue: 0.3\n            },\n            value: 0.6\n        },\n        shape: {\n            type: \"circle\"\n        },\n        size: {\n            anim: {\n                enable: false,\n                size_min: 0.3,\n                speed: 4,\n                sync: false\n            },\n            random: false,\n            value: 1\n        }\n    },\n    retina_detect: true\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (particlesConfig);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvY29uZmlnL3BhcnRpY2xlcy1jb25maWcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLGtCQUFrQjtJQUNwQkMsVUFBVTtJQUNWQyxlQUFlO1FBQ2JDLFdBQVc7UUFDWEMsUUFBUTtZQUNOQyxTQUFTO2dCQUFFQyxRQUFRO2dCQUFNQyxNQUFNO1lBQVU7WUFDekNDLFNBQVM7Z0JBQ1BGLFFBQVE7Z0JBQ1JDLE1BQU07Z0JBQ05FLFVBQVU7b0JBQUVILFFBQVE7b0JBQU9JLE9BQU87b0JBQUdDLFFBQVE7Z0JBQUc7WUFDbEQ7WUFDQUMsUUFBUTtRQUNWO1FBQ0FDLE9BQU87WUFDTEMsUUFBUTtnQkFBRUMsVUFBVTtnQkFBS0MsVUFBVTtnQkFBR0MsU0FBUztnQkFBR0MsTUFBTTtnQkFBR0MsT0FBTztZQUFFO1lBQ3BFQyxNQUFNO2dCQUFFTCxVQUFVO2dCQUFLTSxhQUFhO29CQUFFSixTQUFTO2dCQUFFO1lBQUU7WUFDbkRLLE1BQU07Z0JBQUVDLGNBQWM7WUFBRTtZQUN4QkMsUUFBUTtnQkFBRUQsY0FBYztZQUFFO1lBQzFCRSxTQUFTO2dCQUFFVixVQUFVO2dCQUFLQyxVQUFVO1lBQUk7UUFDMUM7SUFDRjtJQUNBVSxXQUFXO1FBQ1RDLE9BQU87WUFBRUMsT0FBTztRQUFVO1FBQzFCUCxhQUFhO1lBQ1hNLE9BQU87WUFDUFosVUFBVTtZQUNWVCxRQUFRO1lBQ1JXLFNBQVM7WUFDVFksT0FBTztRQUNUO1FBQ0FDLE1BQU07WUFDSkMsU0FBUztnQkFBRXpCLFFBQVE7Z0JBQU8wQixTQUFTO2dCQUFLQyxTQUFTO1lBQUk7WUFDckRDLFFBQVE7WUFDUkMsV0FBVztZQUNYN0IsUUFBUTtZQUNSOEIsVUFBVTtZQUNWQyxRQUFRO1lBQ1JsQixPQUFPO1lBQ1BtQixVQUFVO1FBQ1o7UUFDQUMsUUFBUTtZQUFFQyxTQUFTO2dCQUFFbEMsUUFBUTtnQkFBTW1DLFlBQVk7WUFBSTtZQUFHYixPQUFPO1FBQUk7UUFDakVYLFNBQVM7WUFDUHlCLE1BQU07Z0JBQUVwQyxRQUFRO2dCQUFNcUMsYUFBYTtnQkFBS3hCLE9BQU87Z0JBQUd5QixNQUFNO1lBQU07WUFDOURQLFFBQVE7Z0JBQ04vQixRQUFRO2dCQUNSdUMsY0FBYztZQUNoQjtZQUNBakIsT0FBTztRQUNUO1FBQ0FrQixPQUFPO1lBQ0xDLE1BQU07UUFDUjtRQUNBN0IsTUFBTTtZQUNKd0IsTUFBTTtnQkFBRXBDLFFBQVE7Z0JBQU8wQyxVQUFVO2dCQUFLN0IsT0FBTztnQkFBR3lCLE1BQU07WUFBTTtZQUM1RFAsUUFBUTtZQUNSVCxPQUFPO1FBQ1Q7SUFDRjtJQUNBcUIsZUFBZTtBQUNqQjtBQUVGLCtEQUFlakQsZUFBZUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9jb25maWcvcGFydGljbGVzLWNvbmZpZy5qcz84ZTRmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhcnRpY2xlc0NvbmZpZyA9IHtcbiAgICBmcHNMaW1pdDogNjAsXG4gICAgaW50ZXJhY3Rpdml0eToge1xuICAgICAgZGV0ZWN0X29uOiBcImNhbnZhc1wiLFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIG9uY2xpY2s6IHsgZW5hYmxlOiB0cnVlLCBtb2RlOiBcInJlcHVsc2VcIiB9LFxuICAgICAgICBvbmhvdmVyOiB7XG4gICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgIG1vZGU6IFwiYnViYmxlXCIsXG4gICAgICAgICAgcGFyYWxsYXg6IHsgZW5hYmxlOiBmYWxzZSwgZm9yY2U6IDIsIHNtb290aDogMTAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNpemU6IHRydWVcbiAgICAgIH0sXG4gICAgICBtb2Rlczoge1xuICAgICAgICBidWJibGU6IHsgZGlzdGFuY2U6IDIwMCwgZHVyYXRpb246IDIsIG9wYWNpdHk6IDAsIHNpemU6IDAsIHNwZWVkOiAzIH0sXG4gICAgICAgIGdyYWI6IHsgZGlzdGFuY2U6IDQwMCwgbGluZV9saW5rZWQ6IHsgb3BhY2l0eTogMSB9IH0sXG4gICAgICAgIHB1c2g6IHsgcGFydGljbGVzX25iOiA0IH0sXG4gICAgICAgIHJlbW92ZTogeyBwYXJ0aWNsZXNfbmI6IDIgfSxcbiAgICAgICAgcmVwdWxzZTogeyBkaXN0YW5jZTogNDAwLCBkdXJhdGlvbjogMC40IH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHBhcnRpY2xlczoge1xuICAgICAgY29sb3I6IHsgdmFsdWU6IFwiI2ZmZmZmZlwiIH0sXG4gICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgIGRpc3RhbmNlOiAxNTAsXG4gICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgIG9wYWNpdHk6IDAuNCxcbiAgICAgICAgd2lkdGg6IDFcbiAgICAgIH0sXG4gICAgICBtb3ZlOiB7XG4gICAgICAgIGF0dHJhY3Q6IHsgZW5hYmxlOiBmYWxzZSwgcm90YXRlWDogNjAwLCByb3RhdGVZOiA2MDAgfSxcbiAgICAgICAgYm91bmNlOiBmYWxzZSxcbiAgICAgICAgZGlyZWN0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBvdXRfbW9kZTogXCJvdXRcIixcbiAgICAgICAgcmFuZG9tOiB0cnVlLFxuICAgICAgICBzcGVlZDogMC4zLFxuICAgICAgICBzdHJhaWdodDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBudW1iZXI6IHsgZGVuc2l0eTogeyBlbmFibGU6IHRydWUsIHZhbHVlX2FyZWE6IDgwMCB9LCB2YWx1ZTogNjAwIH0sXG4gICAgICBvcGFjaXR5OiB7XG4gICAgICAgIGFuaW06IHsgZW5hYmxlOiB0cnVlLCBvcGFjaXR5X21pbjogMC4zLCBzcGVlZDogNSwgc3luYzogZmFsc2UgfSxcbiAgICAgICAgcmFuZG9tOiB7XG4gICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgIG1pbmltdW1WYWx1ZTogMC4zXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiAwLjZcbiAgICAgIH0sXG4gICAgICBzaGFwZToge1xuICAgICAgICB0eXBlOiBcImNpcmNsZVwiXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICBhbmltOiB7IGVuYWJsZTogZmFsc2UsIHNpemVfbWluOiAwLjMsIHNwZWVkOiA0LCBzeW5jOiBmYWxzZSB9LFxuICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICB2YWx1ZTogMVxuICAgICAgfVxuICAgIH0sXG4gICAgcmV0aW5hX2RldGVjdDogdHJ1ZVxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnRpY2xlc0NvbmZpZyJdLCJuYW1lcyI6WyJwYXJ0aWNsZXNDb25maWciLCJmcHNMaW1pdCIsImludGVyYWN0aXZpdHkiLCJkZXRlY3Rfb24iLCJldmVudHMiLCJvbmNsaWNrIiwiZW5hYmxlIiwibW9kZSIsIm9uaG92ZXIiLCJwYXJhbGxheCIsImZvcmNlIiwic21vb3RoIiwicmVzaXplIiwibW9kZXMiLCJidWJibGUiLCJkaXN0YW5jZSIsImR1cmF0aW9uIiwib3BhY2l0eSIsInNpemUiLCJzcGVlZCIsImdyYWIiLCJsaW5lX2xpbmtlZCIsInB1c2giLCJwYXJ0aWNsZXNfbmIiLCJyZW1vdmUiLCJyZXB1bHNlIiwicGFydGljbGVzIiwiY29sb3IiLCJ2YWx1ZSIsIndpZHRoIiwibW92ZSIsImF0dHJhY3QiLCJyb3RhdGVYIiwicm90YXRlWSIsImJvdW5jZSIsImRpcmVjdGlvbiIsIm91dF9tb2RlIiwicmFuZG9tIiwic3RyYWlnaHQiLCJudW1iZXIiLCJkZW5zaXR5IiwidmFsdWVfYXJlYSIsImFuaW0iLCJvcGFjaXR5X21pbiIsInN5bmMiLCJtaW5pbXVtVmFsdWUiLCJzaGFwZSIsInR5cGUiLCJzaXplX21pbiIsInJldGluYV9kZXRlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/config/particles-config.js\n"));

/***/ })

});