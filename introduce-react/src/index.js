import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './redux/Reducer'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(Reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  );
registerServiceWorker();
