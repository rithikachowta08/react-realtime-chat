import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { getTime } from 'date-fns';

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import RootSaga from './rootSaga';
import chat from './Chat.reducer';
import ACTIONS from './actions.constants';

import ChatInput from './ChatInput/ChatInput';
import ChatBody from './ChatBody';
import './Chat.scss';

let dbRef;
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({ chat }),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(function*() {
  yield RootSaga();
});

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMessage: ''
    };
  }

  componentDidMount() {
    const { currentUser, receiver } = this.props;
    this.chatRoom =
      currentUser > receiver
        ? `${receiver}-${currentUser}`
        : `${currentUser}-${receiver}`;
    this.initialize();
  }

  // Input field change handler
  updateStateOnChange = event => {
    if (!event.target.value || event.target.value.trim()) {
      this.setState({ currentMessage: event.target.value });
    }
  };

  // Enter key handler
  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  };

  // Initialize firebase app and fetch all messages in current chat-room
  initialize = () => {
    firebase.initializeApp(this.props.config);
    dbRef = firebase.database();
    this.props.fetchChat({
      CHAT_URL: this.chatRoom,
      currentUser: this.props.currentUser,
      senderImage: this.props.senderImage
    });
    this.setChatListener();
  };

  // Listen for updates to chat-room, dispatch action to update UI
  setChatListener = () => {
    dbRef
      .ref(this.chatRoom)
      .limitToLast(1)
      .on('value', snapshot => {
        this.props.updateChatState({
          snapshot: snapshot.val(),
          currentUser: this.props.currentUser,
          senderImage: this.props.senderImage
        });
      });
  };

  // Write message to chat-room and reset state
  sendMessage = () => {
    this.state.currentMessage &&
      firebase
        .database()
        .ref(this.chatRoom)
        .push({
          from: this.props.currentUser,
          to: this.props.receiver,
          text: this.state.currentMessage,
          timestamp: getTime(new Date()) / 1000
        });
    this.setState({ currentMessage: '' });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="chat-section">
          <ChatBody messages={this.props.chat.messages} />
          <ChatInput
            value={this.state.currentMessage}
            changeHandler={this.updateStateOnChange}
            clickHandler={this.sendMessage}
            enterKeyHandler={this.handleKeyPress}
          />
        </div>
      </Provider>
    );
  }
}

Chat.propTypes = {
  messages: PropTypes.array,
  config: PropTypes.object,
  currentMessage: PropTypes.string,
  changeHandler: PropTypes.func,
  clickHandler: PropTypes.func,
  enterKeyHandler: PropTypes.func
};

Chat.defaultProps = {
  messages: [],
  config: {},
  currentMessage: '',
  changeHandler: () => {},
  clickHandler: () => {},
  enterKeyHandler: () => {}
};

const connectWithStore = (store, WrappedComponent, ...args) => {
  var ConnectedWrappedComponent = connect(...args)(WrappedComponent);
  return function(props) {
    return <ConnectedWrappedComponent {...props} store={store} />;
  };
};

const mapStateToProps = state => ({
  chat: state.chat
});

const mapDispatchToProps = dispatch => ({
  fetchChat: data => {
    dispatch({ type: ACTIONS.FETCH_CHAT, data, dbRef });
  },
  updateChatState: data => {
    dispatch({ type: ACTIONS.UPDATE_CHAT, data });
  }
});

export default connectWithStore(
  store,
  Chat,
  mapStateToProps,
  mapDispatchToProps
);
