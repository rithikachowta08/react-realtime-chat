"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareMessages = exports.setMessageProps = exports.setHeaderDisplay = void 0;

var _dateFns = require("date-fns");

var _functions = require("./functions");

var dateFormat = 'MM/DD/YYYY'; // Choose whether to display header and date separator for current message or not

var setHeaderDisplay = function setHeaderDisplay(messages) {
  var newMessages = [];

  for (var i = 0; i < messages.length; i += 1) {
    var previousMessage = messages[i - 1];
    var currentMessage = messages[i];
    currentMessage.withHeader = true; // Don't display header if the timestamp and username are same as the previous message

    if (previousMessage && previousMessage.timeStamp === currentMessage.timeStamp && previousMessage.userName === currentMessage.userName) {
      currentMessage.withHeader = false;
    }

    var currentMessageDate = (0, _functions.getDateFromUnixTime)(currentMessage.unixTime);
    var today = (0, _dateFns.format)(new Date(), dateFormat);

    if (previousMessage && (0, _functions.getDateFromUnixTime)(previousMessage.unixTime, dateFormat) !== currentMessageDate) {
      currentMessage.separatorDate = currentMessageDate === today ? 'TODAY' : currentMessageDate;
    }

    if (!previousMessage && currentMessageDate !== today) {
      currentMessage.separatorDate = currentMessageDate;
    }

    newMessages.push(currentMessage);
  }

  return newMessages;
}; // Set rendering properties for the message


exports.setHeaderDisplay = setHeaderDisplay;

var setMessageProps = function setMessageProps(message, id, receiver, currentUserId) {
  var newMessage = {};
  newMessage.id = id;
  newMessage.fromSelf = message.from === currentUserId;
  newMessage.messageText = message.text;

  if (message.from === receiver.id) {
    newMessage.userName = receiver.name;
  }

  newMessage.avatarUrl = receiver.imageUrl;
  newMessage.unixTime = message.timestamp;
  newMessage.timeStamp = (0, _functions.getTimeFromUnixTime)(message.timestamp);
  return newMessage;
}; // Iterate through message list and set each one's properties


exports.setMessageProps = setMessageProps;

var prepareMessages = function prepareMessages(messages, receiver, currentUserId) {
  var preparedMessages = [];
  Object.keys(messages).forEach(function (id) {
    preparedMessages.push(setMessageProps(messages[id], id, receiver, currentUserId));
  });
  return setHeaderDisplay(preparedMessages);
};

exports.prepareMessages = prepareMessages;