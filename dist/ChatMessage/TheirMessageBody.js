"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TheirMessageBody = function TheirMessageBody(props) {
  return _react.default.createElement("div", {
    className: "chat-body"
  }, props.messageText);
};

TheirMessageBody.propTypes = {
  messageText: _propTypes.default.string.isRequired
};
var _default = TheirMessageBody;
exports.default = _default;