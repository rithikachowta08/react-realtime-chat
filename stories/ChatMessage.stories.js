import React from 'react';
import { storiesOf } from '@storybook/react';
import ChatMessage from '../src/lib/ChatMessage/ChatMessage';

storiesOf('Chat message', module)
  .addWithJSX('Chat message', () => (
    <ChatMessage
      messageText="Hi Lucille, I'm unable to make your proposed time of Fri, Aug 23.  Here are two alternate times I'm available.  Select whichever works for you.hey"
      fromSelf
    />
  ))
  .addWithJSX('Chat message with header', () => (
    <ChatMessage
      userName="john doe"
      messageText="Hi Lucille, I'm unable to make your proposed time of Fri, Aug 23.  Here are two alternate times I'm available.  Select whichever works for you."
      timeStamp="2.08pm"
      avatarUrl="https://tekagogoresources.blob.core.windows.net/repair-categories/mechanical-room.png"
      withHeader
    />
  ))
  .addWithJSX('Chat message from self with header', () => (
    <ChatMessage
      fromSelf
      messageText="Hi Lucille, I'm unable to make your proposed time of Fri, Aug 23.  Here are two alternate times I'm available.  Select whichever works for you."
      withHeader
      timeStamp="2.08pm"
    />
  ));
