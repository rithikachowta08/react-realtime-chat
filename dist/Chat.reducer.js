"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chatService = require("./utils/chat-service");

var _actions = _interopRequireDefault(require("./actions.constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  messages: [],
  error: '',
  isFetching: false
};

var messageIsNotDuplicate = function messageIsNotDuplicate(tempMessages, messageId) {
  return tempMessages.filter(function (msg) {
    return msg.id === messageId;
  }).length <= 0;
};

var chat = function chat() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload,
      data = _ref.data;

  switch (type) {
    case _actions["default"].FETCH_CHAT:
      {
        return _objectSpread({}, state, {
          error: '',
          isFetching: true
        });
      }

    case _actions["default"].FETCH_CHAT_SUCCESS:
      {
        var tempState = Object.assign({}, state);

        if (payload) {
          tempState.messages = (0, _chatService.prepareMessages)(payload, data.receiver, data.currentUserId);
        }

        tempState.isFetching = false;
        return tempState;
      }

    case _actions["default"].UPDATE_CHAT_SUCCESS:
      {
        var _tempState = Object.assign({}, state);

        var tempMessages = Object.assign([], state.messages); // Check if new message is already in the list before updating it
        // Necessary since firebase rtdb 'on' callback triggers for the first time with no change

        if (messageIsNotDuplicate(tempMessages, payload.messageId)) {
          tempMessages.push((0, _chatService.setMessageProps)(payload.message, payload.messageId, data.receiver, data.currentUserId));
        }

        _tempState.messages = (0, _chatService.setHeaderDisplay)(tempMessages);
        return _tempState;
      }

    case _actions["default"].FETCH_CHAT_FAIL:
      return _objectSpread({}, state, {
        error: payload,
        isFetching: false,
        messages: null
      });

    default:
      return state;
  }
};

var _default = chat;
exports["default"] = _default;