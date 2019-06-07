import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage/ChatMessage';

class ChatBody extends Component {
  componentDidUpdate(prevProps) {
    const elem = document.querySelector('.chat-messages-container');
    if (
      elem &&
      JSON.stringify(prevProps.messages) !== JSON.stringify(this.props.messages)
    ) {
      elem.scrollTop = elem.scrollHeight;
    }
  }

  render() {
    const { messages } = this.props;
    return (
      <div className="chat-messages-container">
        {messages &&
          messages.map((message, index) => (
            <ChatMessage key={index} {...message} />
          ))}
      </div>
    );
  }
}

ChatBody.propTypes = {
  messages: PropTypes.array
};

ChatBody.defaultProps = {
  messages: []
};

export default ChatBody;
