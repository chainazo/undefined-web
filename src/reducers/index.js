import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import { authSagas } from './auth';
import ListsReducer from './reducer_lists';

const rootReducer = combineReducers({
	lists: ListsReducer,
	form: formReducer,
	auth
});
export default rootReducer;

export function* rootSaga() {
	yield all([...authSagas]);
}
