import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { getTime } from 'date-fns';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import RootSaga from './rootSaga';
import { messages } from './Chat.reducer';
import ACTIONS from './actions.constants';

import ChatInput from './ChatInput/ChatInput';
import ChatBody from './ChatBody';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  messages,
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

  updateStateOnChange = event => {
    if (!event.target.value || event.target.value.trim()) {
      this.setState({ currentMessage: event.target.value });
    }
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  };

  sendMessage = () => {
    this.state.currentMessage &&
      firebase
        .database()
        .ref(
          `chat-coll/${this.props.workOrderInfo.info.chatroomKey}/conversation`
        )
        .push({
          from: this.props.currentUser,
          to: this.props.workOrderInfo.info.tek.userId,
          text: this.state.currentMessage,
          timestamp: getTime(new Date()) / 1000
        });
    this.setState({ currentMessage: '' });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="col col-6 d-flex chat-section">
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
  currentMessage: PropTypes.string,
  changeHandler: PropTypes.func,
  clickHandler: PropTypes.func,
  enterKeyHandler: PropTypes.func
};

Chat.defaultProps = {
  messages: [],
  currentMessage: '',
  changeHandler: () => {},
  clickHandler: () => {},
  enterKeyHandler: () => {}
};

const mapStateToProps = state => ({
  chat: state.chat
});

const mapDispatchToProps = dispatch => ({
  fetchChat: data => {
    dispatch({ type: ACTIONS.FETCH_CHAT, data });
  },
  updateChatState: data => {
    dispatch({ type: ACTIONS.UPDATE_CHAT, data });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
