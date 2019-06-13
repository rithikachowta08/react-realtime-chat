"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MyMessageBody = function MyMessageBody(props) {
  return _react["default"].createElement("div", {
    className: "chat-body self"
  }, props.messageText);
};

MyMessageBody.propTypes = {
  messageText: _propTypes["default"].string.isRequired
};
var _default = MyMessageBody;
exports["default"] = _default;