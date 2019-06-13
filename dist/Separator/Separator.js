"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("./Separator.scss");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Separator = function Separator(props) {
  return _react["default"].createElement("div", {
    className: "separator"
  }, _react["default"].createElement("hr", {
    className: "hr-text",
    "data-content": props.displayText
  }));
};

Separator.propTypes = {
  displayText: _propTypes["default"].string
};
Separator.defaultProps = {
  displayText: ''
};
var _default = Separator;
exports["default"] = _default;