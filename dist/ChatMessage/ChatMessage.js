"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Separator = _interopRequireDefault(require("../Separator/Separator"));

var _ChatMessageHeader = _interopRequireDefault(require("./ChatMessageHeader"));

var _MyMessageBody = _interopRequireDefault(require("./MyMessageBody"));

var _TheirMessageBody = _interopRequireDefault(require("./TheirMessageBody"));

require("./ChatMessage.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ChatMessage = function ChatMessage(props) {
  return _react["default"].createElement("div", {
    className: "chat-message-wrapper"
  }, props.separatorDate && _react["default"].createElement(_Separator["default"], {
    displayText: props.separatorDate
  }), props.withHeader && _react["default"].createElement(_ChatMessageHeader["default"], {
    fromSelf: props.fromSelf,
    avatarUrl: props.avatarUrl,
    userName: props.userName,
    timeStamp: props.timeStamp
  }), props.fromSelf ? _react["default"].createElement(_MyMessageBody["default"], {
    messageText: props.messageText
  }) : _react["default"].createElement(_TheirMessageBody["default"], {
    messageText: props.messageText
  }));
};

ChatMessage.propTypes = {
  messageText: _propTypes["default"].string.isRequired,
  userName: _propTypes["default"].string,
  separatorDate: _propTypes["default"].string,
  id: _propTypes["default"].string,
  avatarUrl: _propTypes["default"].string,
  withHeader: _propTypes["default"].bool,
  fromSelf: _propTypes["default"].bool,
  timeStamp: _propTypes["default"].string
};
ChatMessage.defaultProps = {
  id: '',
  userName: '',
  separatorDate: '',
  avatarUrl: '',
  timeStamp: '',
  withHeader: false,
  fromSelf: false
};
var _default = ChatMessage;
exports["default"] = _default;