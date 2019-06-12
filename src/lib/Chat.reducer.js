import {
  setHeaderDisplay,
  prepareMessages,
  setMessageProps
} from './utils/chat-service';
import ACTIONS from './actions.constants';

const initialState = {
  messages: [],
  error: '',
  isFetching: false
};

const messageIsNotDuplicate = (tempMessages, messageId) => {
  return tempMessages.filter(msg => msg.id === messageId).length <= 0;
};

const chat = (state = initialState, { type, payload, data }) => {
  switch (type) {
    case ACTIONS.FETCH_CHAT: {
      return {
        ...state,
        error: '',
        isFetching: true
      };
    }
    case ACTIONS.FETCH_CHAT_SUCCESS: {
      const tempState = Object.assign({}, state);
      if (payload) {
        tempState.messages = prepareMessages(
          payload,
          data.receiver,
          data.currentUserId
        );
      }
      tempState.isFetching = false;
      return tempState;
    }

    case ACTIONS.UPDATE_CHAT_SUCCESS: {
      const tempState = Object.assign({}, state);
      const tempMessages = Object.assign([], state.messages);
      // Check if new message is already in the list before updating it
      // Necessary since firebase rtdb 'on' callback triggers for the first time with no change
      if (messageIsNotDuplicate(tempMessages, payload.messageId)) {
        tempMessages.push(
          setMessageProps(
            payload.message,
            payload.messageId,
            data.receiver,
            data.currentUserId
          )
        );
      }
      tempState.messages = setHeaderDisplay(tempMessages);
      return tempState;
    }

    case ACTIONS.FETCH_CHAT_FAIL:
      return {
        ...state,
        error: payload,
        isFetching: false,
        messages: null
      };
    default:
      return state;
  }
};
export default chat;
