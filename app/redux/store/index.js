/**
 * Created by liliang on 2018/11/4
 */


import {applyMiddleware, createStore} from 'redux';
import {middleware} from '../../navigation';
import {createLogger} from 'redux-logger';
import AppReducer from '../reducer/index';

const logger = createLogger({
    // ...options
});


const store = createStore(
    AppReducer,
    applyMiddleware(middleware,logger)
);

export default store;