import { call, put } from 'redux-saga/effects';
import * as firebase from 'firebase/app';
import 'firebase/database';
import ACTIONS from './actions.constants';

firebase.initializeApp();
const db = firebase.database();

const getPrivateChat = PRIVATE_CHAT_URL =>
  db
    .ref(PRIVATE_CHAT_URL)
    .once('value')
    .then(privateSnapshot => privateSnapshot.val());

const getPublicChat = PUBLIC_CHAT_URL =>
  db
    .ref(PUBLIC_CHAT_URL)
    .once('value')
    .then(publicSnapshot => publicSnapshot.val());

export function* fetchChat(action) {
  let publicChat = {};
  let privateChat = {};
  let mergedChat;
  try {
    publicChat = yield call(getPublicChat, action.data.PUBLIC_CHAT_URL);
    privateChat = yield call(getPrivateChat, action.data.PRIVATE_CHAT_URL);
    mergedChat = { ...privateChat, ...publicChat };
    yield put({
      type: ACTIONS.FETCH_CHAT_SUCCESS,
      payload: mergedChat
    });
  } catch (e) {
    yield put({ type: ACTIONS.FETCH_CHAT_FAIL, payload: e });
  }
}

export function* updateChatState(action) {
  try {
    if (action.data) {
      const messageId = Object.keys(action.data)[0];
      yield put({
        type: ACTIONS.UPDATE_CHAT_SUCCESS,
        payload: { message: action.data[messageId], messageId }
      });
    }
  } catch (e) {
    yield put({ type: ACTIONS.UPDATE_CHAT_FAIL, payload: e });
  }
}
