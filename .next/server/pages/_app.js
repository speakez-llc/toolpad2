"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _toolpad_core_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @toolpad/core/nextjs */ \"@toolpad/core/nextjs\");\n/* harmony import */ var _toolpad_core_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_toolpad_core_nextjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _toolpad_core_DashboardLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @toolpad/core/DashboardLayout */ \"@toolpad/core/DashboardLayout\");\n/* harmony import */ var _toolpad_core_DashboardLayout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_toolpad_core_DashboardLayout__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _toolpad_core_PageContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @toolpad/core/PageContainer */ \"@toolpad/core/PageContainer\");\n/* harmony import */ var _toolpad_core_PageContainer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_toolpad_core_PageContainer__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_nextjs_v14_pagesRouter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material-nextjs/v14-pagesRouter */ \"@mui/material-nextjs/v14-pagesRouter\");\n/* harmony import */ var _mui_material_nextjs_v14_pagesRouter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_nextjs_v14_pagesRouter__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Dashboard */ \"@mui/icons-material/Dashboard\");\n/* harmony import */ var _mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/ShoppingCart */ \"@mui/icons-material/ShoppingCart\");\n/* harmony import */ var _mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/LinearProgress */ \"@mui/material/LinearProgress\");\n/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../theme */ \"./theme.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_auth_react__WEBPACK_IMPORTED_MODULE_9__]);\nnext_auth_react__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\n\nconst NAVIGATION = [\n    {\n        kind: \"header\",\n        title: \"Main items\"\n    },\n    {\n        segment: \"\",\n        title: \"Dashboard\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {\n            fileName: \"D:\\\\repos\\\\toolpad2\\\\pages\\\\_app.tsx\",\n            lineNumber: 33,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        segment: \"orders\",\n        title: \"Orders\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_8___default()), {}, void 0, false, {\n            fileName: \"D:\\\\repos\\\\toolpad2\\\\pages\\\\_app.tsx\",\n            lineNumber: 38,\n            columnNumber: 11\n        }, undefined)\n    }\n];\nconst BRANDING = {\n    title: \"My Toolpad Core Next.js Pages App\"\n};\nconst AUTHENTICATION = {\n    signIn: next_auth_react__WEBPACK_IMPORTED_MODULE_9__.signIn,\n    signOut: next_auth_react__WEBPACK_IMPORTED_MODULE_9__.signOut\n};\nfunction RequireAuth({ children }) {\n    const { status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_9__.useSession)();\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_10___default()), {}, void 0, false, {\n            fileName: \"D:\\\\repos\\\\toolpad2\\\\pages\\\\_app.tsx\",\n            lineNumber: 56,\n            columnNumber: 12\n        }, this);\n    }\n    return children;\n}\nfunction getDefaultLayout(page) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_toolpad_core_DashboardLayout__WEBPACK_IMPORTED_MODULE_3__.DashboardLayout, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_toolpad_core_PageContainer__WEBPACK_IMPORTED_MODULE_4__.PageContainer, {\n            children: page\n        }, void 0, false, {\n            fileName: \"D:\\\\repos\\\\toolpad2\\\\pages\\\\_app.tsx\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\repos\\\\toolpad2\\\\pages\\\\_app.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\nfunction AppLayout({ children }) {\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_9__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"initial-scale=1, width=device-width\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\repos\\\\toolpad2\\\\pages\\\\_app.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\repos\\\\toolpad2\\\\pages\\\\_app.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_toolpad_core_nextjs__WEBPACK_IMPORTED_MODULE_2__.AppProvider, {\n                navigation: NAVIGATION,\n                branding: BRANDING,\n                session: session,\n                authentication: AUTHENTICATION,\n                theme: _theme__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n                children: children\n            }, void 0, false, {\n                fileName: \"D:\\\\repos\\\\toolpad2\\\\pages\\\\_app.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\repos\\\\toolpad2\\\\pages\\\\_app.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\nfunction App(props) {\n    const { Component, pageProps: { session, ...pageProps } } = props;\n    const getLayout = Component.getLayout ?? getDefaultLayout;\n    const requireAuth = Component.requireAuth ?? false; // Default to false for public pages\n    let pageContent = getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"D:\\\\repos\\\\toolpad2\\\\pages\\\\_app.tsx\",\n        lineNumber: 100,\n        columnNumber: 31\n    }, this));\n    if (requireAuth) {\n        pageContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RequireAuth, {\n            children: pageContent\n        }, void 0, false, {\n            fileName: \"D:\\\\repos\\\\toolpad2\\\\pages\\\\_app.tsx\",\n            lineNumber: 102,\n            columnNumber: 19\n        }, this);\n    }\n    pageContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppLayout, {\n        children: pageContent\n    }, void 0, false, {\n        fileName: \"D:\\\\repos\\\\toolpad2\\\\pages\\\\_app.tsx\",\n        lineNumber: 104,\n        columnNumber: 17\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_nextjs_v14_pagesRouter__WEBPACK_IMPORTED_MODULE_6__.AppCacheProvider, {\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_9__.SessionProvider, {\n            session: session,\n            children: pageContent\n        }, void 0, false, {\n            fileName: \"D:\\\\repos\\\\toolpad2\\\\pages\\\\_app.tsx\",\n            lineNumber: 108,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\repos\\\\toolpad2\\\\pages\\\\_app.tsx\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDb0I7QUFDYTtBQUNKO0FBQy9CO0FBQzJDO0FBQ2Q7QUFDTTtBQUllO0FBQ3JCO0FBQzdCO0FBVzdCLE1BQU1jLGFBQXlCO0lBQzdCO1FBQ0VDLE1BQU07UUFDTkMsT0FBTztJQUNUO0lBQ0E7UUFDRUMsU0FBUztRQUNURCxPQUFPO1FBQ1BFLG9CQUFNLDhEQUFDWixzRUFBYUE7Ozs7O0lBQ3RCO0lBQ0E7UUFDRVcsU0FBUztRQUNURCxPQUFPO1FBQ1BFLG9CQUFNLDhEQUFDWCx5RUFBZ0JBOzs7OztJQUN6QjtDQUNEO0FBRUQsTUFBTVksV0FBVztJQUNmSCxPQUFPO0FBQ1Q7QUFHQSxNQUFNSSxpQkFBaUI7SUFDckJYLE1BQU1BLHFEQUFBQTtJQUNOQyxPQUFPQSxzREFBQUE7QUFDVDtBQUVBLFNBQVNXLFlBQVksRUFBRUMsUUFBUSxFQUFpQztJQUM5RCxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHWiwyREFBVUE7SUFFN0IsSUFBSVksV0FBVyxXQUFXO1FBQ3hCLHFCQUFPLDhEQUFDWCxzRUFBY0E7Ozs7O0lBQ3hCO0lBRUEsT0FBT1U7QUFDVDtBQUdBLFNBQVNFLGlCQUFpQkMsSUFBd0I7SUFDaEQscUJBQ0UsOERBQUN2QiwwRUFBZUE7a0JBQ2QsNEVBQUNDLHNFQUFhQTtzQkFBRXNCOzs7Ozs7Ozs7OztBQUd0QjtBQUVBLFNBQVNDLFVBQVUsRUFBRUosUUFBUSxFQUFpQztJQUM1RCxNQUFNLEVBQUVLLE1BQU1DLE9BQU8sRUFBRSxHQUFHakIsMkRBQVVBO0lBQ3BDLHFCQUNFLDhEQUFDWCwyQ0FBYzs7MEJBQ2IsOERBQUNJLGtEQUFJQTswQkFDSCw0RUFBQzBCO29CQUFLQyxNQUFLO29CQUFXQyxTQUFROzs7Ozs7Ozs7OzswQkFFaEMsOERBQUMvQiw2REFBV0E7Z0JBQ1ZnQyxZQUFZbkI7Z0JBQ1pvQixVQUFVZjtnQkFDVlMsU0FBU0E7Z0JBQ1RPLGdCQUFnQmY7Z0JBQ2hCUCxPQUFPQSwrQ0FBS0E7MEJBRVhTOzs7Ozs7Ozs7Ozs7QUFJVDtBQUVlLFNBQVNjLElBQUlDLEtBQXlCO0lBQ25ELE1BQU0sRUFDSkMsU0FBUyxFQUNUQyxXQUFXLEVBQUVYLE9BQU8sRUFBRSxHQUFHVyxXQUFXLEVBQ3JDLEdBQUdGO0lBRUosTUFBTUcsWUFBWUYsVUFBVUUsU0FBUyxJQUFJaEI7SUFDekMsTUFBTWlCLGNBQWNILFVBQVVHLFdBQVcsSUFBSSxPQUFPLG9DQUFvQztJQUV4RixJQUFJQyxjQUFjRix3QkFBVSw4REFBQ0Y7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7SUFDcEQsSUFBSUUsYUFBYTtRQUNmQyw0QkFBYyw4REFBQ3JCO3NCQUFhcUI7Ozs7OztJQUM5QjtJQUNBQSw0QkFBYyw4REFBQ2hCO2tCQUFXZ0I7Ozs7OztJQUUxQixxQkFDRSw4REFBQ3JDLGtGQUFnQkE7UUFBRSxHQUFHZ0MsS0FBSztrQkFDekIsNEVBQUM3Qiw0REFBZUE7WUFBQ29CLFNBQVNBO3NCQUN2QmM7Ozs7Ozs7Ozs7O0FBSVQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b29scGFkMi8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwUHJvdmlkZXIgfSBmcm9tICdAdG9vbHBhZC9jb3JlL25leHRqcyc7XG5pbXBvcnQgeyBEYXNoYm9hcmRMYXlvdXQgfSBmcm9tICdAdG9vbHBhZC9jb3JlL0Rhc2hib2FyZExheW91dCc7XG5pbXBvcnQgeyBQYWdlQ29udGFpbmVyIH0gZnJvbSAnQHRvb2xwYWQvY29yZS9QYWdlQ29udGFpbmVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBBcHBDYWNoZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbC1uZXh0anMvdjE0LXBhZ2VzUm91dGVyJztcbmltcG9ydCBEYXNoYm9hcmRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGFzaGJvYXJkJztcbmltcG9ydCBTaG9wcGluZ0NhcnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0JztcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgdHlwZSB7IE5hdmlnYXRpb24gfSBmcm9tICdAdG9vbHBhZC9jb3JlJztcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciwgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmVhclByb2dyZXNzJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZSc7XG5cbmV4cG9ydCB0eXBlIE5leHRQYWdlV2l0aExheW91dDxQID0ge30sIElQID0gUD4gPSBOZXh0UGFnZTxQLCBJUD4gJiB7XG4gIGdldExheW91dD86IChwYWdlOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+IFJlYWN0LlJlYWN0Tm9kZTtcbiAgcmVxdWlyZUF1dGg/OiBib29sZWFuO1xufTtcblxudHlwZSBBcHBQcm9wc1dpdGhMYXlvdXQgPSBBcHBQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0UGFnZVdpdGhMYXlvdXQ7XG59O1xuXG5jb25zdCBOQVZJR0FUSU9OOiBOYXZpZ2F0aW9uID0gW1xuICB7XG4gICAga2luZDogJ2hlYWRlcicsXG4gICAgdGl0bGU6ICdNYWluIGl0ZW1zJyxcbiAgfSxcbiAge1xuICAgIHNlZ21lbnQ6ICcnLFxuICAgIHRpdGxlOiAnRGFzaGJvYXJkJyxcbiAgICBpY29uOiA8RGFzaGJvYXJkSWNvbiAvPixcbiAgfSxcbiAge1xuICAgIHNlZ21lbnQ6ICdvcmRlcnMnLFxuICAgIHRpdGxlOiAnT3JkZXJzJyxcbiAgICBpY29uOiA8U2hvcHBpbmdDYXJ0SWNvbiAvPixcbiAgfSxcbl07XG5cbmNvbnN0IEJSQU5ESU5HID0ge1xuICB0aXRsZTogJ015IFRvb2xwYWQgQ29yZSBOZXh0LmpzIFBhZ2VzIEFwcCcsXG59O1xuXG5cbmNvbnN0IEFVVEhFTlRJQ0FUSU9OID0ge1xuICBzaWduSW4sXG4gIHNpZ25PdXQsXG59O1xuXG5mdW5jdGlvbiBSZXF1aXJlQXV0aCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IHsgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgaWYgKHN0YXR1cyA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgcmV0dXJuIDxMaW5lYXJQcm9ncmVzcyAvPjtcbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuXG5mdW5jdGlvbiBnZXREZWZhdWx0TGF5b3V0KHBhZ2U6IFJlYWN0LlJlYWN0RWxlbWVudCkge1xuICByZXR1cm4gKFxuICAgIDxEYXNoYm9hcmRMYXlvdXQ+XG4gICAgICA8UGFnZUNvbnRhaW5lcj57cGFnZX08L1BhZ2VDb250YWluZXI+XG4gICAgPC9EYXNoYm9hcmRMYXlvdXQ+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEFwcExheW91dCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEFwcFByb3ZpZGVyXG4gICAgICAgIG5hdmlnYXRpb249e05BVklHQVRJT059XG4gICAgICAgIGJyYW5kaW5nPXtCUkFORElOR31cbiAgICAgICAgc2Vzc2lvbj17c2Vzc2lvbn1cbiAgICAgICAgYXV0aGVudGljYXRpb249e0FVVEhFTlRJQ0FUSU9OfVxuICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQXBwUHJvdmlkZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHByb3BzOiBBcHBQcm9wc1dpdGhMYXlvdXQpIHtcbiAgY29uc3Qge1xuICAgIENvbXBvbmVudCxcbiAgICBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBnZXRMYXlvdXQgPSBDb21wb25lbnQuZ2V0TGF5b3V0ID8/IGdldERlZmF1bHRMYXlvdXQ7XG4gIGNvbnN0IHJlcXVpcmVBdXRoID0gQ29tcG9uZW50LnJlcXVpcmVBdXRoID8/IGZhbHNlOyAvLyBEZWZhdWx0IHRvIGZhbHNlIGZvciBwdWJsaWMgcGFnZXNcblxuICBsZXQgcGFnZUNvbnRlbnQgPSBnZXRMYXlvdXQoPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPik7XG4gIGlmIChyZXF1aXJlQXV0aCkge1xuICAgIHBhZ2VDb250ZW50ID0gPFJlcXVpcmVBdXRoPntwYWdlQ29udGVudH08L1JlcXVpcmVBdXRoPjtcbiAgfVxuICBwYWdlQ29udGVudCA9IDxBcHBMYXlvdXQ+e3BhZ2VDb250ZW50fTwvQXBwTGF5b3V0PjtcblxuICByZXR1cm4gKFxuICAgIDxBcHBDYWNoZVByb3ZpZGVyIHsuLi5wcm9wc30+XG4gICAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgICB7cGFnZUNvbnRlbnR9XG4gICAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgICA8L0FwcENhY2hlUHJvdmlkZXI+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQXBwUHJvdmlkZXIiLCJEYXNoYm9hcmRMYXlvdXQiLCJQYWdlQ29udGFpbmVyIiwiSGVhZCIsIkFwcENhY2hlUHJvdmlkZXIiLCJEYXNoYm9hcmRJY29uIiwiU2hvcHBpbmdDYXJ0SWNvbiIsIlNlc3Npb25Qcm92aWRlciIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwiTGluZWFyUHJvZ3Jlc3MiLCJ0aGVtZSIsIk5BVklHQVRJT04iLCJraW5kIiwidGl0bGUiLCJzZWdtZW50IiwiaWNvbiIsIkJSQU5ESU5HIiwiQVVUSEVOVElDQVRJT04iLCJSZXF1aXJlQXV0aCIsImNoaWxkcmVuIiwic3RhdHVzIiwiZ2V0RGVmYXVsdExheW91dCIsInBhZ2UiLCJBcHBMYXlvdXQiLCJkYXRhIiwic2Vzc2lvbiIsIkZyYWdtZW50IiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibmF2aWdhdGlvbiIsImJyYW5kaW5nIiwiYXV0aGVudGljYXRpb24iLCJBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldExheW91dCIsInJlcXVpcmVBdXRoIiwicGFnZUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./theme.ts":
/*!******************!*\
  !*** ./theme.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    cssVariables: {\n        colorSchemeSelector: \"data-toolpad-color-scheme\"\n    },\n    colorSchemes: {\n        light: true,\n        dark: true\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7NkRBRXFEO0FBRW5ELE1BQU1DLFFBQVFELGlFQUFXQSxDQUFDO0lBQ3hCRSxjQUFjO1FBQ1pDLHFCQUFxQjtJQUN2QjtJQUNBQyxjQUFjO1FBQUVDLE9BQU87UUFBTUMsTUFBTTtJQUFLO0FBQzFDO0FBRUEsaUVBQWVMLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b29scGFkMi8uL3RoZW1lLnRzPzU1MmMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gIFwidXNlIGNsaWVudFwiO1xuICBpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcblxuICBjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgICBjc3NWYXJpYWJsZXM6IHtcbiAgICAgIGNvbG9yU2NoZW1lU2VsZWN0b3I6ICdkYXRhLXRvb2xwYWQtY29sb3Itc2NoZW1lJyxcbiAgICB9LFxuICAgIGNvbG9yU2NoZW1lczogeyBsaWdodDogdHJ1ZSwgZGFyazogdHJ1ZSB9LFxuICB9KTtcblxuICBleHBvcnQgZGVmYXVsdCB0aGVtZTtcbiAgIl0sIm5hbWVzIjpbImNyZWF0ZVRoZW1lIiwidGhlbWUiLCJjc3NWYXJpYWJsZXMiLCJjb2xvclNjaGVtZVNlbGVjdG9yIiwiY29sb3JTY2hlbWVzIiwibGlnaHQiLCJkYXJrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./theme.ts\n");

/***/ }),

/***/ "@mui/icons-material/Dashboard":
/*!************************************************!*\
  !*** external "@mui/icons-material/Dashboard" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Dashboard");

/***/ }),

/***/ "@mui/icons-material/ShoppingCart":
/*!***************************************************!*\
  !*** external "@mui/icons-material/ShoppingCart" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/ShoppingCart");

/***/ }),

/***/ "@mui/material-nextjs/v14-pagesRouter":
/*!*******************************************************!*\
  !*** external "@mui/material-nextjs/v14-pagesRouter" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@mui/material-nextjs/v14-pagesRouter");

/***/ }),

/***/ "@mui/material/LinearProgress":
/*!***********************************************!*\
  !*** external "@mui/material/LinearProgress" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/LinearProgress");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "@toolpad/core/DashboardLayout":
/*!************************************************!*\
  !*** external "@toolpad/core/DashboardLayout" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@toolpad/core/DashboardLayout");

/***/ }),

/***/ "@toolpad/core/PageContainer":
/*!**********************************************!*\
  !*** external "@toolpad/core/PageContainer" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@toolpad/core/PageContainer");

/***/ }),

/***/ "@toolpad/core/nextjs":
/*!***************************************!*\
  !*** external "@toolpad/core/nextjs" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@toolpad/core/nextjs");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("next-auth/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();