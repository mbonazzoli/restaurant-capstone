webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/context */ \"./components/context.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ \"./pages/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/Users/mbonazzoli/Documents/training/MERN_xPro/notebook/restaurant-capstone/pages/_app.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nfunction MyApp(props) {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_components_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n      cart = _useContext.cart,\n      addItem = _useContext.addItem,\n      removeItem = _useContext.removeItem,\n      user = _useContext.user,\n      setUser = _useContext.setUser;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    cart: cart\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var Component = props.Component,\n      pageProps = props.pageProps;\n\n  setUser = function setUser(user) {\n    console.log('userSet');\n    setState({\n      user: user\n    });\n  };\n\n  addItem = function addItem(item) {\n    var items = state.cart.items; //check for item already in cart\n    //if not in cart, add item if item is found increase quanity ++\n\n    var foundItem = true;\n\n    if (items.length > 0) {\n      foundItem = items.find(function (i) {\n        return i.id === item.id;\n      });\n      if (!foundItem) foundItem = false;\n    } else {\n      foundItem = false;\n    }\n\n    console.log(\"Found Item value: \".concat(JSON.stringify(foundItem))); // if item is not new, add to cart, set quantity to 1\n\n    if (!foundItem) {\n      //set quantity property to 1\n      var temp = JSON.parse(JSON.stringify(item));\n      temp.quantity = 1;\n      var newCart = {\n        items: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state.cart.items), [temp]),\n        total: state.cart.total + item.price\n      };\n      setState({\n        cart: newCart\n      });\n      console.log(\"Total items: \".concat(JSON.stringify(newCart)));\n    } else {\n      // we already have it so just increase quantity ++\n      console.log(\"Total so far:  \".concat(state.cart.total));\n      newCart = {\n        items: items.map(function (item) {\n          if (item.id === foundItem.id) {\n            return Object.assign({}, item, {\n              quantity: item.quantity + 1\n            });\n          } else {\n            return item;\n          }\n        }),\n        total: state.cart.total + item.price\n      };\n    }\n\n    setState({\n      cart: newCart\n    }); // problem is this is not updated yet\n\n    console.log(\"state reset to cart:\".concat(JSON.stringify(state)));\n  };\n\n  removeItem = function removeItem(item) {\n    var items = state.cart.items; //check for item already in cart\n\n    var foundItem = items.find(function (i) {\n      return i.id === item.id;\n    });\n\n    if (foundItem.quantity > 1) {\n      var newCart = {\n        items: items.map(function (item) {\n          if (item.id === foundItem.id) {\n            return Object.assign({}, item, {\n              quantity: item.quantity - 1\n            });\n          } else {\n            return item;\n          }\n        }),\n        total: state.cart.total - item.price\n      }; //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)\n    } else {\n      // only 1 in the cart so remove the whole item\n      console.log(\"Try remove item \".concat(JSON.stringify(foundItem)));\n      var index = items.findIndex(function (i) {\n        return i.id === foundItem.id;\n      });\n      items.splice(index, 1);\n      var newCart = {\n        items: items,\n        total: state.cart.total - item.price\n      };\n    }\n\n    setState({\n      cart: newCart\n    });\n  };\n\n  return __jsx(_components_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Provider, {\n    value: {\n      cart: state.cart,\n      addItem: addItem,\n      removeItem: removeItem,\n      isAuthenticated: false,\n      user: null,\n      setUser: function setUser() {}\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\",\n    integrity: \"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\",\n    crossOrigin: \"anonymous\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }\n  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(MyApp, \"qHQMttOq1zPRCjIIZxRYE6VYkS4=\");\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk15QXBwIiwicHJvcHMiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJhZGRJdGVtIiwicmVtb3ZlSXRlbSIsInVzZXIiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29uc29sZSIsImxvZyIsIml0ZW0iLCJpdGVtcyIsImZvdW5kSXRlbSIsImxlbmd0aCIsImZpbmQiLCJpIiwiaWQiLCJKU09OIiwic3RyaW5naWZ5IiwidGVtcCIsInBhcnNlIiwicXVhbnRpdHkiLCJuZXdDYXJ0IiwidG90YWwiLCJwcmljZSIsIm1hcCIsIk9iamVjdCIsImFzc2lnbiIsImluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwiaXNBdXRoZW50aWNhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBcUI7QUFBQTs7QUFBQSxvQkFDNEJDLHdEQUFVLENBQUNDLDJEQUFELENBRHRDO0FBQUEsTUFDZEMsSUFEYyxlQUNkQSxJQURjO0FBQUEsTUFDVEMsT0FEUyxlQUNUQSxPQURTO0FBQUEsTUFDREMsVUFEQyxlQUNEQSxVQURDO0FBQUEsTUFDV0MsSUFEWCxlQUNXQSxJQURYO0FBQUEsTUFDaUJDLE9BRGpCLGVBQ2lCQSxPQURqQjs7QUFBQSxrQkFFTUMsc0RBQVEsQ0FBQztBQUFDTCxRQUFJLEVBQUNBO0FBQU4sR0FBRCxDQUZkO0FBQUEsTUFFWk0sS0FGWTtBQUFBLE1BRU5DLFFBRk07O0FBQUEsTUFHWEMsU0FIVyxHQUdjWCxLQUhkLENBR1hXLFNBSFc7QUFBQSxNQUdBQyxTQUhBLEdBR2NaLEtBSGQsQ0FHQVksU0FIQTs7QUFNbkJMLFNBQU8sR0FBRyxpQkFBQ0QsSUFBRCxF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QUVNLEtBQUssQ0FBQ04sSUFBYjtBQUFtQkMsYUFBTyxFQUFFQSxPQUE1QjtBQUFxQ0MsZ0JBQVUsRUFBRUEsVUFBakQ7QUFBNEQrQixxQkFBZSxFQUFDLEtBQTVFO0FBQWtGOUIsVUFBSSxFQUFDLElBQXZGO0FBQTRGQyxhQUFPLEVBQUMsbUJBQU0sQ0FBRTtBQUE1RyxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsWUFETjtBQUVFLFFBQUksRUFBQyx1RUFGUDtBQUdFLGFBQVMsRUFBQyx5RUFIWjtBQUlFLGVBQVcsRUFBQyxXQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBVUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxTQUFELHlGQUFlSyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESixDQVZGLENBREY7QUFrQkQ7O0dBL0ZRYixLOztLQUFBQSxLO0FBa0dNQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaW5kZXhcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCJcblxuXG5mdW5jdGlvbiBNeUFwcChwcm9wcyl7XG4gIHZhciB7Y2FydCxhZGRJdGVtLHJlbW92ZUl0ZW0sIHVzZXIsIHNldFVzZXJ9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KVxuICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlU3RhdGUoe2NhcnQ6Y2FydH0pO1xuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcbiAgXG4gIFxuICBzZXRVc2VyID0gKHVzZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZygndXNlclNldCcpXG4gICAgc2V0U3RhdGUoeyB1c2VyIH0pO1xuICB9O1xuICBhZGRJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBsZXQgeyBpdGVtcyB9ID0gc3RhdGUuY2FydDtcbiAgICAvL2NoZWNrIGZvciBpdGVtIGFscmVhZHkgaW4gY2FydFxuICAgIC8vaWYgbm90IGluIGNhcnQsIGFkZCBpdGVtIGlmIGl0ZW0gaXMgZm91bmQgaW5jcmVhc2UgcXVhbml0eSArK1xuICAgIGxldCBmb3VuZEl0ZW0gPSB0cnVlO1xuICAgIGlmKGl0ZW1zLmxlbmd0aCA+IDApe1xuICAgICAgZm91bmRJdGVtID0gaXRlbXMuZmluZCgoaSkgPT4gaS5pZCA9PT0gaXRlbS5pZCk7XG4gICAgIFxuICAgICAgaWYoIWZvdW5kSXRlbSkgZm91bmRJdGVtID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBmb3VuZEl0ZW0gPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYEZvdW5kIEl0ZW0gdmFsdWU6ICR7SlNPTi5zdHJpbmdpZnkoZm91bmRJdGVtKX1gKVxuICAgIC8vIGlmIGl0ZW0gaXMgbm90IG5ldywgYWRkIHRvIGNhcnQsIHNldCBxdWFudGl0eSB0byAxXG4gICAgaWYgKCFmb3VuZEl0ZW0pIHtcbiAgICAgIC8vc2V0IHF1YW50aXR5IHByb3BlcnR5IHRvIDFcbiAgICBcbiAgICAgIGxldCB0ZW1wID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpdGVtKSk7XG4gICAgICB0ZW1wLnF1YW50aXR5ID0gMTtcbiAgICAgIHZhciBuZXdDYXJ0ID0ge1xuICAgICAgICAgIGl0ZW1zOiBbLi4uc3RhdGUuY2FydC5pdGVtcyx0ZW1wXSxcbiAgICAgICAgICB0b3RhbDogc3RhdGUuY2FydC50b3RhbCArIGl0ZW0ucHJpY2UsXG4gICAgICB9XG4gICAgICBzZXRTdGF0ZSh7Y2FydDpuZXdDYXJ0fSlcbiAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBpdGVtczogJHtKU09OLnN0cmluZ2lmeShuZXdDYXJ0KX1gKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB3ZSBhbHJlYWR5IGhhdmUgaXQgc28ganVzdCBpbmNyZWFzZSBxdWFudGl0eSArK1xuICAgICAgY29uc29sZS5sb2coYFRvdGFsIHNvIGZhcjogICR7c3RhdGUuY2FydC50b3RhbH1gKVxuICAgICAgbmV3Q2FydD0ge1xuICAgICAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0pID0+e1xuICAgICAgICAgICAgaWYoaXRlbS5pZCA9PT0gZm91bmRJdGVtLmlkKXtcbiAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHsgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgKyAxIH0pXG4gICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9fSksXG4gICAgICAgICAgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgKyBpdGVtLnByaWNlLFxuICAgICAgICB9XG4gICAgfVxuICAgIHNldFN0YXRlKHtjYXJ0OiBuZXdDYXJ0fSk7ICAvLyBwcm9ibGVtIGlzIHRoaXMgaXMgbm90IHVwZGF0ZWQgeWV0XG4gICAgY29uc29sZS5sb2coYHN0YXRlIHJlc2V0IHRvIGNhcnQ6JHtKU09OLnN0cmluZ2lmeShzdGF0ZSl9YClcbiAgICAgXG4gIH07XG4gIHJlbW92ZUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGxldCB7IGl0ZW1zIH0gPSBzdGF0ZS5jYXJ0O1xuICAgIC8vY2hlY2sgZm9yIGl0ZW0gYWxyZWFkeSBpbiBjYXJ0XG4gICAgY29uc3QgZm91bmRJdGVtID0gaXRlbXMuZmluZCgoaSkgPT4gaS5pZCA9PT0gaXRlbS5pZCk7XG4gICAgaWYgKGZvdW5kSXRlbS5xdWFudGl0eSA+IDEpIHtcbiAgICAgIHZhciBuZXdDYXJ0ID0ge1xuICAgICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PntcbiAgICAgICAgaWYoaXRlbS5pZCA9PT0gZm91bmRJdGVtLmlkKXtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwgeyBxdWFudGl0eTogaXRlbS5xdWFudGl0eSAtIDEgfSlcbiAgICAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH19KSxcbiAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsIC0gaXRlbS5wcmljZSxcbiAgICAgIH1cbiAgICAgIC8vY29uc29sZS5sb2coYE5ld0NhcnQgYWZ0ZXIgcmVtb3ZlOiAke0pTT04uc3RyaW5naWZ5KG5ld0NhcnQpfWApXG4gICAgfSBlbHNlIHsgLy8gb25seSAxIGluIHRoZSBjYXJ0IHNvIHJlbW92ZSB0aGUgd2hvbGUgaXRlbVxuICAgICAgY29uc29sZS5sb2coYFRyeSByZW1vdmUgaXRlbSAke0pTT04uc3RyaW5naWZ5KGZvdW5kSXRlbSl9YClcbiAgICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KChpKSA9PiBpLmlkID09PSBmb3VuZEl0ZW0uaWQpO1xuICAgICAgaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHZhciBuZXdDYXJ0PSB7IGl0ZW1zOiBpdGVtcywgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgLSBpdGVtLnByaWNlIH0gXG4gICAgfVxuICAgIHNldFN0YXRlKHtjYXJ0Om5ld0NhcnR9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tjYXJ0OiBzdGF0ZS5jYXJ0LCBhZGRJdGVtOiBhZGRJdGVtLCByZW1vdmVJdGVtOiByZW1vdmVJdGVtLGlzQXV0aGVudGljYXRlZDpmYWxzZSx1c2VyOm51bGwsc2V0VXNlcjooKSA9PiB7fX19PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUduNTM4NHhxUTFhb1dYQSswNThSWFB4UGc2Znk0SVd2VE5oMEUyNjNYbUZjSmxTQXdpR2dGQVcvZEFpUzZKWG1cIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICBcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9MYXlvdXQ+XG5cbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG4gIFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})