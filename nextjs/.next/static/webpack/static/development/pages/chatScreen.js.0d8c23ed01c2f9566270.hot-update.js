webpackHotUpdate("static\\development\\pages\\chatScreen.js",{

/***/ "./components/chatList.js":
/*!********************************!*\
  !*** ./components/chatList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\cembr\\OneDrive\\Desktop\\Lambda\\Random\\ToDooooo\\nextjs\\components\\chatList.js";




var ChatList = function ChatList(_ref) {
  var messages = _ref.messages;
  // const [prevMsg, setPrevMsg] = useState({});
  var prevMsg = {};
  messages.forEach(function (msg) {
    prevMsg = msg;
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "jsx-1194209510",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1194209510",
    __self: this
  }, "ul.jsx-1194209510{height:80vh;margin-left:-2.5%;overflow-y:scroll;overflow-x:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:right;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}li.jsx-1194209510{font-size:1.6rem;list-style:none;margin:15px;}.user.jsx-1194209510{border:1px solid orange;border-radius:15px;padding:12px;color:orange;}.other.jsx-1194209510{color:lightblue;border:1px solid lightblue;border-radius:15px;padding:12px;text-align:left;}p.jsx-1194209510{text-align:left;color:white;font-size:1.6rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxEZXNrdG9wXFxMYW1iZGFcXFJhbmRvbVxcVG9Eb29vb29cXG5leHRqc1xcY29tcG9uZW50c1xcY2hhdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWtCLEFBR3VCLEFBVUssQUFLTyxBQU1SLEFBT0EsWUExQkUsSUFvQlMsQUFPZixDQWxCSSxPQUtHLElBY0YsRUEzQkMsR0FTTixVQUtDLEFBTU0sRUFWckIsQUFrQkEsR0EzQm9CLFFBY0wsTUFNQSxJQW5CQSxHQWNmLE1BTWtCLGdCQUNsQixpREFwQm1CLGlCQUNhLHNHQUNoQyIsImZpbGUiOiJDOlxcVXNlcnNcXGNlbWJyXFxPbmVEcml2ZVxcRGVza3RvcFxcTGFtYmRhXFxSYW5kb21cXFRvRG9vb29vXFxuZXh0anNcXGNvbXBvbmVudHNcXGNoYXRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENoYXRMaXN0ID0gKHsgbWVzc2FnZXMgfSkgPT4ge1xyXG4gIC8vIGNvbnN0IFtwcmV2TXNnLCBzZXRQcmV2TXNnXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgbGV0IHByZXZNc2cgPSB7fTtcclxuXHJcbiAgbWVzc2FnZXMuZm9yRWFjaChtc2cgPT4ge1xyXG4gICAgcHJldk1zZyA9IG1zZztcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHVsPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgICAgLy8gd2lkdGg6IDk1JTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMi41JTtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudXNlciB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdGhlciB7XHJcbiAgICAgICAgICBjb2xvcjogbGlnaHRibHVlO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRibHVlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAge21lc3NhZ2VzLnJldmVyc2UoKS5tYXAobXNnID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIG1zZy5hdXRob3IgPT09IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIilcclxuICAgICAgICAgICAgICAgICAgPyBcInVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwib3RoZXJcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHttc2cuYXV0aG9yfS0ge21zZy50ZXh0fVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICAgIDxwPkxhc3QgbWVzc2FnZToge0pTT04uc3RyaW5naWZ5KHByZXZNc2cpfTwvcD5cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRMaXN0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\cembr\\OneDrive\\Desktop\\Lambda\\Random\\ToDooooo\\nextjs\\components\\chatList.js */"), messages.reverse().map(function (msg) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      className: "jsx-1194209510" + " " + ((msg.author === localStorage.getItem("username") ? "user" : "other") || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, msg.author, "- ", msg.text));
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-1194209510",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Last message: ", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(prevMsg)));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatList);

/***/ })

})
//# sourceMappingURL=chatScreen.js.0d8c23ed01c2f9566270.hot-update.js.map