import { format } from 'date-fns';
import { getTimeFromUnixTime, getDateFromUnixTime } from './functions';

const dateFormat = 'MM/DD/YYYY';

// Choose whether to display header and date separator for current message or not
const setHeaderDisplay = messages => {
  const newMessages = [];
  for (let i = 0; i < messages.length; i += 1) {
    const previousMessage = messages[i - 1];
    const currentMessage = messages[i];
    currentMessage.withHeader = true;
    // Don't display header if the timestamp and username are same as the previous message
    if (
      previousMessage &&
      previousMessage.timeStamp === currentMessage.timeStamp &&
      previousMessage.userName === currentMessage.userName
    ) {
      currentMessage.withHeader = false;
    }
    const currentMessageDate = getDateFromUnixTime(currentMessage.unixTime);
    const today = format(new Date(), dateFormat);
    if (
      previousMessage &&
      getDateFromUnixTime(previousMessage.unixTime, dateFormat) !==
        currentMessageDate
    ) {
      currentMessage.separatorDate =
        currentMessageDate === today ? 'TODAY' : currentMessageDate;
    }
    if (!previousMessage && currentMessageDate !== today) {
      currentMessage.separatorDate = currentMessageDate;
    }
    newMessages.push(currentMessage);
  }
  return newMessages;
};

// Set rendering properties for the message
const setMessageProps = (message, id, receiver, currentUserId) => {
  const newMessage = {};
  newMessage.id = id;
  newMessage.fromSelf = message.from === currentUserId;
  newMessage.messageText = message.text;
  if (message.from === receiver.id) {
    newMessage.userName = receiver.name;
  }
  newMessage.avatarUrl = receiver.imageUrl;
  newMessage.unixTime = message.timestamp;
  newMessage.timeStamp = getTimeFromUnixTime(message.timestamp);
  return newMessage;
};

// Iterate through message list and set each one's properties
const prepareMessages = (messages, receiver, currentUserId) => {
  const preparedMessages = [];
  Object.keys(messages).forEach(id => {
    preparedMessages.push(
      setMessageProps(messages[id], id, receiver, currentUserId)
    );
  });
  return setHeaderDisplay(preparedMessages);
};

export { setHeaderDisplay, setMessageProps, prepareMessages };
