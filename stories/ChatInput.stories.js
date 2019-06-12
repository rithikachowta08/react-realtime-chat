import React from 'react';
import { storiesOf } from '@storybook/react';
import ChatInput from '../src/lib/ChatInput/ChatInput';

storiesOf('Chat input field', module).addWithJSX('ChatInput', () => (
  <ChatInput />
));
