import React from 'react';
import PropTypes from 'prop-types';

const TheirMessageBody = props => (
  <div className="chat-body">
    {props.messageText}
    {props.children}
  </div>
);

TheirMessageBody.propTypes = {
  messageText: PropTypes.string.isRequired,
  children: PropTypes.object
};

TheirMessageBody.defaultProps = {
  children: {}
};

export default TheirMessageBody;
