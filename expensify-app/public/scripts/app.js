"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
require("normalize.css/normalize.css");
require("./styles/styles.scss");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Expense = function Expense() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "This is from my dashboard component");
};
var AddExpense = function AddExpense() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "This is from my add expense component");
};
var EditExpense = function EditExpense() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "This is from my edit page");
};
var HelpPage = function HelpPage() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "This is my help page");
};
var NotFoundPage = function NotFoundPage() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "404! - ", /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/"
  }, "Go Home"));
};
var Header = function Header() {
  return /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Expensify"), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    to: "/",
    className: function className(_ref) {
      var isActive = _ref.isActive;
      return isActive ? 'is-active' : undefined;
    },
    end: true
  }, "Dashboard"), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    to: "/create",
    className: function className(_ref2) {
      var isActive = _ref2.isActive;
      return isActive ? 'is-active' : undefined;
    },
    end: true
  }, "Create an Expense"), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    to: "/edit",
    className: function className(_ref3) {
      var isActive = _ref3.isActive;
      return isActive ? 'is-active' : undefined;
    },
    end: true
  }, "Edit an Expense"), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    to: "/help",
    className: function className(_ref4) {
      var isActive = _ref4.isActive;
      return isActive ? 'is-active' : undefined;
    },
    end: true
  }, "Help"));
};
var router = /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Header, null), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
  path: "/",
  element: /*#__PURE__*/_react["default"].createElement(Expense, null),
  exact: true
}), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
  path: "/create",
  element: /*#__PURE__*/_react["default"].createElement(AddExpense, null)
}), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
  path: "/edit",
  element: /*#__PURE__*/_react["default"].createElement(EditExpense, null)
}), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
  path: "/help",
  element: /*#__PURE__*/_react["default"].createElement(HelpPage, null)
}), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
  path: "*",
  element: /*#__PURE__*/_react["default"].createElement(NotFoundPage, null)
}))));
var root = _client["default"].createRoot(document.getElementById('app'));

// root.render(<IndecisionApp />);
root.render(router);
