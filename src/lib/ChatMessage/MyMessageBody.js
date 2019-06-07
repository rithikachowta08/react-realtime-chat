import React from 'react';
import PropTypes from 'prop-types';

const MyMessageBody = props => (
  <div className="chat-body green">
    {props.messageText}
    {props.children}
  </div>
);

MyMessageBody.propTypes = {
  messageText: PropTypes.string.isRequired,
  children: PropTypes.object
};

MyMessageBody.defaultProps = {
  children: {}
};

export default MyMessageBody;
