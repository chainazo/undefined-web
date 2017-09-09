import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ko';
import momentLocalizer from 'react-widgets-moment';

const store = configureStore();

moment.locale('ko');
momentLocalizer();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();