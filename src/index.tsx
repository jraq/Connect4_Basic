import 'bootstrap/dist/css/bootstrap.min.css';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import GameStore from './stores/GameStore';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const gameStore = new GameStore();

const stores = {
  game: gameStore,
  routing: routingStore
};

const history = syncHistoryWithStore(browserHistory, routingStore);


ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <App />  
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
