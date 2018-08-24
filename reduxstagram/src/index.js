import './styles/style.css'

import React from 'react';
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './components/App'

import store from './store'
import history from './history'

import registerServiceWorker from './registerServiceWorker'

import Raven from 'raven-js'
import { sentry_url } from './config'

Raven.config(sentry_url).install()

const router = (
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>    
    </Provider>
)

ReactDOM.render(
    router,
    document.getElementById('root')
)
registerServiceWorker()
