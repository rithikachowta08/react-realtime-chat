"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var firebase = _interopRequireWildcard(require("firebase/app"));

require("firebase/auth");

require("firebase/database");

var _dateFns = require("date-fns");

var _redux = require("redux");

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _rootSaga = _interopRequireDefault(require("./rootSaga"));

var _Chat = _interopRequireDefault(require("./Chat.reducer"));

var _actions = _interopRequireDefault(require("./actions.constants"));

var _ChatInput = _interopRequireDefault(require("./ChatInput/ChatInput"));

var _ChatBody = _interopRequireDefault(require("./ChatBody"));

var _spinner = _interopRequireDefault(require("./images/spinner.gif"));

require("./Chat.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dbRef;
var sagaMiddleware = (0, _reduxSaga["default"])();
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var store = (0, _redux.createStore)((0, _redux.combineReducers)({
  chat: _Chat["default"]
}), composeEnhancers((0, _redux.applyMiddleware)(sagaMiddleware)));
sagaMiddleware.run(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _rootSaga["default"])();

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

var Chat =
/*#__PURE__*/
function (_Component) {
  _inherits(Chat, _Component);

  function Chat(props) {
    var _this;

    _classCallCheck(this, Chat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chat).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "updateStateOnChange", function (event) {
      if (!event.target.value || event.target.value.trim()) {
        _this.setState({
          currentMessage: event.target.value
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (event) {
      if (event.key === 'Enter') {
        _this.sendMessage();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "initialize", function () {
      firebase.initializeApp(_this.props.config);
      dbRef = firebase.database();

      _this.props.fetchChat({
        CHAT_URL: _this.chatRoom,
        currentUserId: _this.props.currentUserId,
        receiver: _this.props.receiver
      });

      _this.setChatListener();
    });

    _defineProperty(_assertThisInitialized(_this), "setChatListener", function () {
      dbRef.ref(_this.chatRoom).limitToLast(1).on('value', function (snapshot) {
        _this.props.updateChatState({
          snapshot: snapshot.val(),
          currentUserId: _this.props.currentUserId,
          receiver: _this.props.receiver
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "sendMessage", function () {
      _this.state.currentMessage && firebase.database().ref(_this.chatRoom).push({
        from: _this.props.currentUserId,
        to: _this.props.receiver.id,
        text: _this.state.currentMessage,
        timestamp: (0, _dateFns.getTime)(new Date()) / 1000
      });

      _this.setState({
        currentMessage: ''
      });
    });

    _this.state = {
      currentMessage: ''
    };
    return _this;
  }

  _createClass(Chat, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          currentUserId = _this$props.currentUserId,
          receiver = _this$props.receiver; // chat-room is always named by sender and receiver names arranged lexicographically

      this.chatRoom = currentUserId > receiver.id ? "".concat(receiver.id, "-").concat(currentUserId) : "".concat(currentUserId, "-").concat(receiver.id);
      this.initialize();
    } // Input field change handler

  }, {
    key: "render",
    value: function render() {
      var _this$props$chat = this.props.chat,
          error = _this$props$chat.error,
          isFetching = _this$props$chat.isFetching,
          messages = _this$props$chat.messages;
      return _react["default"].createElement(_reactRedux.Provider, {
        store: store
      }, _react["default"].createElement("div", {
        className: "chat-section"
      }, error && _react["default"].createElement("div", {
        className: "error"
      }, "Oops! Something went wrong!"), isFetching && _react["default"].createElement("div", {
        className: "centered-container"
      }, _react["default"].createElement("img", {
        src: _spinner["default"],
        alt: "Loading messages"
      })), !isFetching && messages && !messages.length && _react["default"].createElement("div", {
        className: "centered-container no-message"
      }, "No messages yet! Say hi!"), _react["default"].createElement(_ChatBody["default"], {
        messages: messages
      }), _react["default"].createElement(_ChatInput["default"], {
        value: this.state.currentMessage,
        changeHandler: this.updateStateOnChange,
        clickHandler: this.sendMessage,
        enterKeyHandler: this.handleKeyPress
      })));
    }
  }]);

  return Chat;
}(_react.Component);

Chat.propTypes = {
  config: _propTypes["default"].object.isRequired,
  receiver: _propTypes["default"].object.isRequired,
  currentUserId: _propTypes["default"].string.isRequired
};
Chat.defaultProps = {};

var connectWithStore = function connectWithStore(store, WrappedComponent) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var ConnectedWrappedComponent = _reactRedux.connect.apply(void 0, args)(WrappedComponent);

  return function (props) {
    return _react["default"].createElement(ConnectedWrappedComponent, _extends({}, props, {
      store: store
    }));
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    chat: state.chat
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchChat: function fetchChat(data) {
      dispatch({
        type: _actions["default"].FETCH_CHAT,
        data: data,
        dbRef: dbRef
      });
    },
    updateChatState: function updateChatState(data) {
      dispatch({
        type: _actions["default"].UPDATE_CHAT,
        data: data
      });
    }
  };
};

var _default = connectWithStore(store, Chat, mapStateToProps, mapDispatchToProps);

exports["default"] = _default;