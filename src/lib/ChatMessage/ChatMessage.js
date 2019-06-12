import React from 'react';
import PropTypes from 'prop-types';
import Separator from '../Separator/Separator';
import ChatMessageHeader from './ChatMessageHeader';
import MyMessageBody from './MyMessageBody';
import TheirMessageBody from './TheirMessageBody';
import './ChatMessage.scss';

const ChatMessage = props => (
  <div className="chat-message-wrapper">
    {props.separatorDate && <Separator displayText={props.separatorDate} />}
    {props.withHeader && (
      <ChatMessageHeader
        fromSelf={props.fromSelf}
        avatarUrl={props.avatarUrl}
        userName={props.userName}
        timeStamp={props.timeStamp}
      />
    )}
    {props.fromSelf ? (
      <MyMessageBody messageText={props.messageText}>
        {props.children &&
          React.cloneElement(props.children, {
            isLoading: props.verificationInProgress
          })}
      </MyMessageBody>
    ) : (
      <TheirMessageBody messageText={props.messageText}>
        {props.children &&
          React.cloneElement(props.children, {
            isLoading: props.verificationInProgress
          })}
      </TheirMessageBody>
    )}
  </div>
);

ChatMessage.propTypes = {
  messageText: PropTypes.string.isRequired,
  userName: PropTypes.string,
  separatorDate: PropTypes.string,
  id: PropTypes.string,
  avatarUrl: PropTypes.string,
  withHeader: PropTypes.bool,
  verificationInProgress: PropTypes.bool,
  fromSelf: PropTypes.bool,
  timeStamp: PropTypes.string,
  children: PropTypes.object,
  actions: PropTypes.array,
  onAction: PropTypes.func,
  openConfirmationModal: PropTypes.func
};

ChatMessage.defaultProps = {
  id: '',
  children: null,
  userName: '',
  separatorDate: '',
  avatarUrl: '',
  timeStamp: '',
  withHeader: false,
  fromSelf: false,
  verificationInProgress: false,
  actions: [],
  onAction: () => {},
  openConfirmationModal: () => {}
};

export default ChatMessage;