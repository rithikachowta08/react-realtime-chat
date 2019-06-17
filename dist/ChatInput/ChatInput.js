"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./ChatInput.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChatInput = function ChatInput(props) {
  return _react.default.createElement("div", {
    className: "chat-input-wrapper"
  }, _react.default.createElement("input", {
    id: "chatInput",
    type: "text",
    className: "chat-input",
    value: props.value,
    onChange: props.changeHandler,
    onKeyPress: props.enterKeyHandler,
    placeholder: "Enter message",
    autocomplete: "off"
  }), _react.default.createElement("img", {
    className: "chat-icon",
    src: props.icon,
    alt: "send icon",
    onClick: props.clickHandler
  }));
};

ChatInput.propTypes = {
  clickHandler: _propTypes.default.func.isRequired,
  changeHandler: _propTypes.default.func.isRequired,
  enterKeyHandler: _propTypes.default.func.isRequired,
  icon: _propTypes.default.string.isRequired,
  value: _propTypes.default.string
};
ChatInput.defaultProps = {
  value: ''
};
var _default = ChatInput;
exports.default = _default;