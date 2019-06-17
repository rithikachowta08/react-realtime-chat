import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage/ChatMessage';

class ChatBody extends Component {
  // Auto scroll chat to bottom whenever messages prop changes
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
    const { messages, style } = this.props;
    return (
      <div className="chat-messages-container">
        {messages &&
          messages.map((message, index) => (
            <ChatMessage key={index} style={style} {...message} />
          ))}
      </div>
    );
  }
}

ChatBody.propTypes = {
  messages: PropTypes.array,
  style: PropTypes.object
};

ChatBody.defaultProps = {
  messages: [],
  style: {}
};

export default ChatBody;
