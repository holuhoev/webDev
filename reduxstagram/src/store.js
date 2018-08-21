import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'

import history from './history'

import rootReducer from './reducers/index'

import comments from './data/comments'
import posts from './data/posts'

const defaultState = {
    posts,
    comments
}

const store = createStore(rootReducer, defaultState)
export const historySync = syncHistoryWithStore(history, store)

export default store