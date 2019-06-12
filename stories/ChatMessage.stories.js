import React from 'react';
import { storiesOf } from '@storybook/react';
import ChatMessage from '../src/lib/ChatMessage/ChatMessage';

storiesOf('Chat message bubbles', module)
  .addWithJSX('Chat message without header', () => (
    <ChatMessage messageText="Hi there. This is a message." fromSelf />
  ))
  .addWithJSX('Chat message with header', () => (
    <ChatMessage
      userName="john doe"
      messageText="Hi there. This is a message."
      timeStamp="2.08pm"
      avatarUrl="https://avatars0.githubusercontent.com/u/3451712?s=60&v=4"
      withHeader
    />
  ))
  .addWithJSX('Chat message from self with header', () => (
    <ChatMessage
      fromSelf
      messageText="Hi there. This is a message."
      withHeader
      timeStamp="2.08pm"
    />
  ))
  .addWithJSX('Chat message with separator', () => (
    <ChatMessage
      fromSelf
      messageText="Hi there. This is a message."
      withHeader
      separatorDate="6/12/2019"
      timeStamp="2.08pm"
    />
  ));
