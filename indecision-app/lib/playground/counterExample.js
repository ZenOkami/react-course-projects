"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Counter = /*#__PURE__*/function (_React$Component) {
  _inherits(Counter, _React$Component);
  var _super = _createSuper(Counter);
  function Counter(props) {
    var _this;
    _classCallCheck(this, Counter);
    _this = _super.call(this, props);
    _this.handleAddOne = _this.handleAddOne.bind(_assertThisInitialized(_this));
    _this.handleMinusOne = _this.handleMinusOne.bind(_assertThisInitialized(_this));
    _this.handleReset = _this.handleReset.bind(_assertThisInitialized(_this));
    _this.state = {
      count: 0
    };
    return _this;
  }
  _createClass(Counter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var stringCount = localStorage.getItem('count');
      var count = parseInt(stringCount, 10);
      if (!isNaN(count)) {
        this.setState(function () {
          return {
            count: count
          };
        });
        console.log('Fetching count... ' + count);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        localStorage.setItem('count', this.state.count);
        console.log('Count Saved!');
      }
    }
  }, {
    key: "handleAddOne",
    value: function handleAddOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
      console.log(this.state.count);
    }
  }, {
    key: "handleMinusOne",
    value: function handleMinusOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
      console.log(this.state.count);
    }
  }, {
    key: "handleReset",
    value: function handleReset() {
      this.setState(function () {
        return {
          count: 0
        };
      });
      console.log(this.state.count);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count: ", this.state.count), /*#__PURE__*/React.createElement("button", {
        onClick: this.handleAddOne
      }, "+1"), /*#__PURE__*/React.createElement("button", {
        onClick: this.handleMinusOne
      }, "-1"), /*#__PURE__*/React.createElement("button", {
        onClick: this.handleReset
      }, "Reset"));
    }
  }]);
  return Counter;
}(React.Component);
ReactDOM.render( /*#__PURE__*/React.createElement(Counter, null), document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     console.log(count);
//     renderCount();
// }
// const minusOne = () => {
//     count--;
//     console.log(count);
//     renderCount();
// }
// const reset = () => {
//     count = 0;
//     console.log(count);
//     renderCount();
// }

// (<div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button> <button onClick={minusOne}>-1</button> <button onClick={reset}>Reset</button>
// </div>)

// function renderCount() {
//     const templateTwo = (
//     <div>
//     <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button> <button onClick={minusOne}>-1</button> <button onClick={reset}>Reset</button>
//     </div>)
//     ReactDOM.render(templateTwo, appRoot);
//     i = -1;
// }