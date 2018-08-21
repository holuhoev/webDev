import React from 'react';
import ReactDOM from 'react-dom'

import './styles/style.css'

import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

import { Switch, Route, Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import store, { historySync } from './store'

import registerServiceWorker from './registerServiceWorker'

const router = (
    <Provider store={store}>
        <Router history={historySync}>
            <App>
                <Switch>
                    <Route exact path="/" render={ () => <PhotoGrid />} />
                    <Route path="/view/:viewId" render={ () => <Single />} />
                </Switch>
            </App>
        </Router>    
    </Provider>
)

ReactDOM.render(
    router,
    document.getElementById('root')
)
registerServiceWorker()
