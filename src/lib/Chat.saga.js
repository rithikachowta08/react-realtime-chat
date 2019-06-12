import { call, put } from 'redux-saga/effects';
import ACTIONS from './actions.constants';

const getPrivateChat = (CHAT_URL, dbRef) =>
  dbRef
    .ref(CHAT_URL)
    .once('value')
    .then(privateSnapshot => privateSnapshot.val());

export function* fetchChat(action) {
  let privateChat = {};
  try {
    privateChat = yield call(
      getPrivateChat,
      action.data.CHAT_URL,
      action.dbRef
    );
    yield put({
      type: ACTIONS.FETCH_CHAT_SUCCESS,
      data: action.data,
      payload: privateChat
    });
  } catch (e) {
    yield put({ type: ACTIONS.FETCH_CHAT_FAIL, payload: e });
  }
}

export function* updateChatState(action) {
  try {
    if (action.data) {
      const messageId = Object.keys(action.data.snapshot)[0];
      yield put({
        type: ACTIONS.UPDATE_CHAT_SUCCESS,
        data: action.data,
        payload: { message: action.data.snapshot[messageId], messageId }
      });
    }
  } catch (e) {
    yield put({ type: ACTIONS.UPDATE_CHAT_FAIL, payload: e });
  }
}
