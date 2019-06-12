import React from 'react';
import PropTypes from 'prop-types';
import avatar from '../images/avatar.png';

const ChatMessageHeader = props => {
  const getSelfHeader = () => (
    <div className="chat-header self">
      <span className="small-text">you | </span>
      <span className="small-text">{props.timeStamp}</span>
    </div>
  );

  const getTheirHeader = () => (
    <div className="chat-header">
      <img src={props.avatarUrl || avatar} alt="user" />
      <span className="small-text">{props.userName} | </span>
      <span className="small-text">{props.timeStamp}</span>
    </div>
  );

  return props.fromSelf ? getSelfHeader() : getTheirHeader();
};

ChatMessageHeader.propTypes = {
  userName: PropTypes.string,
  avatarUrl: PropTypes.string,
  fromSelf: PropTypes.bool,
  timeStamp: PropTypes.string
};

ChatMessageHeader.defaultProps = {
  fromSelf: false,
  userName: '',
  avatarUrl: '',
  timeStamp: ''
};

export default ChatMessageHeader;
