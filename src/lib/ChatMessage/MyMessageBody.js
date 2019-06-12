import React from 'react';
import PropTypes from 'prop-types';

const MyMessageBody = props => (
  <div className="chat-body self">{props.messageText}</div>
);

MyMessageBody.propTypes = {
  messageText: PropTypes.string.isRequired
};

export default MyMessageBody;
