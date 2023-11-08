"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import ReactDOM from 'react-dom'

// const template = React.createElement('p', {}, 'testing123');
// ReactDOM.render(template, document.getElementById('app'))
var template = /*#__PURE__*/_react["default"].createElement('p', {}, 'testing 123');
var root = _client["default"].createRoot(document.getElementById('app'));
root.render(template);