"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _effects = require("redux-saga/effects");

var _actions = _interopRequireDefault(require("./actions.constants"));

var _Chat = require("./Chat.saga");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return (0, _effects.all)([(0, _effects.takeEvery)(_actions.default.FETCH_CHAT, _Chat.fetchChat), (0, _effects.takeEvery)(_actions.default.UPDATE_CHAT, _Chat.updateChatState)]);
};

exports.default = _default;