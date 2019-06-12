import React from 'react';
import PropTypes from 'prop-types';
import sendBtn from '../images/send.png';
import './ChatInput.scss';

const ChatInput = props => {
  return (
    <div className="chat-input-wrapper">
      <input
        id="chatInput"
        type="text"
        className="chat-input"
        value={props.value}
        onChange={props.changeHandler}
        onKeyPress={props.enterKeyHandler}
        placeholder="Enter message"
      />
      <img
        className="chat-icon"
        src={sendBtn}
        alt="send icon"
        onClick={props.clickHandler}
      />
    </div>
  );
};

ChatInput.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  enterKeyHandler: PropTypes.func.isRequired,
  value: PropTypes.string
};

ChatInput.defaultProps = {
  value: ''
};

export default ChatInput;
