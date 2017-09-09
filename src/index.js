import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ko';
import momentLocalizer from 'react-widgets-moment';
import axios from 'axios';

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer /* preloadedState, */,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

moment.locale('ko');
momentLocalizer();

axios.defaults.baseURL = 'https://m8z7h5ngq7.execute-api.ap-northeast-2.amazonaws.com/prod';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
