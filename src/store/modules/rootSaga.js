import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import meetup from './meetup/sagas';
import subscription from './subscription/sagas';

export default function* rootSaga() {
  return yield all([auth, user, meetup, subscription]);
}
