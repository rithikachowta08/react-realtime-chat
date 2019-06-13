"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchChat = fetchChat;
exports.updateChatState = updateChatState;

var _effects = require("redux-saga/effects");

var _actions = _interopRequireDefault(require("./actions.constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(fetchChat),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(updateChatState);

var getChat = function getChat(CHAT_URL, dbRef) {
  return dbRef.ref(CHAT_URL).once('value').then(function (snapshot) {
    return snapshot.val();
  });
};

function fetchChat(action) {
  var chat;
  return regeneratorRuntime.wrap(function fetchChat$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          chat = {};
          _context.prev = 1;
          _context.next = 4;
          return (0, _effects.call)(getChat, action.data.CHAT_URL, action.dbRef);

        case 4:
          chat = _context.sent;
          _context.next = 7;
          return (0, _effects.put)({
            type: _actions["default"].FETCH_CHAT_SUCCESS,
            data: action.data,
            payload: chat
          });

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          _context.next = 13;
          return (0, _effects.put)({
            type: _actions["default"].FETCH_CHAT_FAIL,
            payload: _context.t0
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 9]]);
}

function updateChatState(action) {
  var messageId;
  return regeneratorRuntime.wrap(function updateChatState$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;

          if (!action.data) {
            _context2.next = 5;
            break;
          }

          messageId = Object.keys(action.data.snapshot)[0];
          _context2.next = 5;
          return (0, _effects.put)({
            type: _actions["default"].UPDATE_CHAT_SUCCESS,
            data: action.data,
            payload: {
              message: action.data.snapshot[messageId],
              messageId: messageId
            }
          });

        case 5:
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 7]]);
}