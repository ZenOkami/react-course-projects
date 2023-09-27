"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _AppRouter = _interopRequireDefault(require("./routers/AppRouter"));
var _configureStore = _interopRequireDefault(require("./store/configureStore"));
var _expenses = _interopRequireDefault(require("./selectors/expenses"));
var _expenses2 = require("./actions/expenses");
var _filters = require("./actions/filters");
require("normalize.css/normalize.css");
require("./styles/styles.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var store = (0, _configureStore["default"])();
store.subscribe(function () {
  var state = store.getState();
  var visibleExpenses = (0, _expenses["default"])(state.expenses, state.filters);
  console.log(visibleExpenses);
});
var expenseOne = store.dispatch((0, _expenses2.addExpense)({
  description: 'Rent',
  amount: 100,
  createdAt: -1000
}));
var expenseTwo = store.dispatch((0, _expenses2.addExpense)({
  description: 'Coffee',
  amount: 300,
  createdAt: 1000
}));
store.dispatch((0, _expenses2.removeExpense)({
  id: expenseOne.expense.id
}));
store.dispatch((0, _expenses2.addExpense)({
  description: 'Water Bill',
  amount: 100,
  createdAt: 100000
}));
store.dispatch((0, _expenses2.addExpense)({
  description: 'Gas bill',
  amount: 80,
  createdAt: 1000000
}));
store.dispatch((0, _filters.setTextFilter)('bill'));
var root = _client["default"].createRoot(document.getElementById('app'));
root.render( /*#__PURE__*/_react["default"].createElement(_AppRouter["default"], null));
