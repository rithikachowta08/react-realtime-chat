import { format } from 'date-fns';
import {
  sortByTimestamp,
  getTimeFromUnixTime,
  getDateFromUnixTime
} from './timeFunctions';

const dateFormat = 'MM/DD/YYYY';
const setHeaderDisplay = messages => {
  const newMessages = [];
  for (let i = 0; i < messages.length; i += 1) {
    const previousMessage = messages[i - 1];
    const currentMessage = messages[i];
    currentMessage.withHeader = true;
    // don't display header if the timestamp and username is same
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

const setMessageProps = (message, id, senderImage, currentUser) => {
  const newMessage = {};
  newMessage.id = id;
  newMessage.fromSelf = message.from === currentUser;
  newMessage.messageText = message.text;
  newMessage.userName = message.from;
  newMessage.avatarUrl = senderImage;
  newMessage.unixTime = message.timestamp;
  newMessage.timeStamp = getTimeFromUnixTime(message.timestamp);
  return newMessage;
};

// set properties for every message
const prepareMessages = (messages, sender, currentUser) => {
  const preparedMessages = [];
  Object.keys(messages).forEach(id => {
    preparedMessages.push(
      setMessageProps(messages[id], id, sender, currentUser)
    );
  });
  const sortedMessages = sortByTimestamp(preparedMessages);
  return setHeaderDisplay(sortedMessages);
};

export { setHeaderDisplay, setMessageProps, prepareMessages };
