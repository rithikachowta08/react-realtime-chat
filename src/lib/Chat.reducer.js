import {
  setHeaderDisplay,
  prepareMessages,
  setMessageProps
} from '../utils/ChatService';
import ACTIONS from './actions.constants';

const initialState = {
  messages: []
};

const chat = (state = initialState, { type, payload, data }) => {
  switch (type) {
    case ACTIONS.FETCH_CHAT_SUCCESS: {
      const tempState = Object.assign({}, state);
      tempState.messages = prepareMessages(
        payload,
        data.senderImage,
        data.currentUser
      );
      return tempState;
    }

    case ACTIONS.UPDATE_CHAT_SUCCESS: {
      const tempState = Object.assign({}, state);
      const tempMessages = Object.assign([], state.messages);
      if (
        tempMessages.filter(msg => msg.id === payload.messageId).length <= 0
      ) {
        tempMessages.push(
          setMessageProps(
            payload.message,
            payload.messageId,
            data.senderImage,
            data.currentUser
          )
        );
      }
      tempState.messages = setHeaderDisplay(tempMessages);
      return tempState;
    }

    case ACTIONS.FETCH_CHAT_FAIL:
    case ACTIONS.UPDATE_CHAT_FAIL:
      return {
        ...state,
        error: {
          message: payload
        },
        messages: []
      };
    default:
      return state;
  }
};
export default chat;
