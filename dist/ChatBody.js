"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ChatMessage = _interopRequireDefault(require("./ChatMessage/ChatMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ChatBody =
/*#__PURE__*/
function (_Component) {
  _inherits(ChatBody, _Component);

  function ChatBody() {
    _classCallCheck(this, ChatBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChatBody).apply(this, arguments));
  }

  _createClass(ChatBody, [{
    key: "componentDidUpdate",
    // Auto scroll chat to bottom whenever messages prop changes
    value: function componentDidUpdate(prevProps) {
      var elem = document.querySelector('.chat-messages-container');

      if (elem && JSON.stringify(prevProps.messages) !== JSON.stringify(this.props.messages)) {
        elem.scrollTop = elem.scrollHeight;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          messages = _this$props.messages,
          style = _this$props.style;
      return _react.default.createElement("div", {
        className: "chat-messages-container"
      }, messages && messages.map(function (message, index) {
        return _react.default.createElement(_ChatMessage.default, _extends({
          key: index,
          style: style
        }, message));
      }));
    }
  }]);

  return ChatBody;
}(_react.Component);

ChatBody.propTypes = {
  messages: _propTypes.default.array,
  style: _propTypes.default.object
};
ChatBody.defaultProps = {
  messages: [],
  style: {}
};
var _default = ChatBody;
exports.default = _default;