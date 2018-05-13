import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Provider from './_react-redux'
import {createStore, applyMiddleware} from "./_redux";
import thunk from './_redux-thunk'
import reducers from './_reducers'

const store = createStore(reducers, applyMiddleware(thunk))
ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
