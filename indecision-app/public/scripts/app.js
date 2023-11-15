"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _IndecisionApp = _interopRequireDefault(require("./components/IndecisionApp"));
require("normalize.css/normalize.css");
require("./styles/styles.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var root = _client["default"].createRoot(document.getElementById('app'));

// root.render(<IndecisionApp />);
root.render( /*#__PURE__*/_react["default"].createElement(_IndecisionApp["default"], null));
