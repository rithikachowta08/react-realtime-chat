"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _avatar = _interopRequireDefault(require("../images/avatar.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChatMessageHeader = function ChatMessageHeader(props) {
  var getSelfHeader = function getSelfHeader() {
    return _react.default.createElement("div", {
      className: "chat-header self"
    }, _react.default.createElement("span", {
      className: "small-text"
    }, "you | "), _react.default.createElement("span", {
      className: "small-text"
    }, props.timeStamp));
  };

  var getTheirHeader = function getTheirHeader() {
    return _react.default.createElement("div", {
      className: "chat-header"
    }, _react.default.createElement("img", {
      src: props.avatarUrl || _avatar.default,
      alt: "user"
    }), _react.default.createElement("span", {
      className: "small-text"
    }, props.userName, " | "), _react.default.createElement("span", {
      className: "small-text"
    }, props.timeStamp));
  };

  return props.fromSelf ? getSelfHeader() : getTheirHeader();
};

ChatMessageHeader.propTypes = {
  userName: _propTypes.default.string,
  avatarUrl: _propTypes.default.string,
  fromSelf: _propTypes.default.bool,
  timeStamp: _propTypes.default.string
};
ChatMessageHeader.defaultProps = {
  fromSelf: false,
  userName: '',
  avatarUrl: '',
  timeStamp: ''
};
var _default = ChatMessageHeader;
exports.default = _default;