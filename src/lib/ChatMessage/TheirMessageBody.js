import React from 'react';
import PropTypes from 'prop-types';

const TheirMessageBody = props => (
  <div className="chat-body">{props.messageText}</div>
);

TheirMessageBody.propTypes = {
  messageText: PropTypes.string.isRequired
};

export default TheirMessageBody;
