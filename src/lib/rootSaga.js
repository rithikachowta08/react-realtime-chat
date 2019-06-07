import { all, takeEvery } from 'redux-saga/effects';
import ACTIONS from './actions.constants';
import { updateChatState, fetchChat } from './Chat.saga';

export default () =>
  all([
    takeEvery(ACTIONS.FETCH_CHAT, fetchChat),
    takeEvery(ACTIONS.UPDATE_CHAT, updateChatState)
  ]);
