import React from 'react';
import PropTypes from 'prop-types';

const MyMessageBody = props => (
  <div className="chat-body self" style={props.style}>
    {props.messageText}
  </div>
);

MyMessageBody.propTypes = {
  messageText: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default MyMessageBody;
