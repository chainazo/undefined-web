import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ko';
import momentLocalizer from 'react-widgets-moment';

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './redux';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer /* preloadedState, */,
	composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

moment.locale('ko');
momentLocalizer();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
