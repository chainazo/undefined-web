import { combineReducers } from 'redux';
import auth from './auth';
import ListsReducer from './reducer_lists';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	lists: ListsReducer,
	form: formReducer,
	auth
});
export default rootReducer;
