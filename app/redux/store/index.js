/**
 * Created by liliang on 2018/11/4
 */


import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducer from '../reducer';
import { middleware } from '../../navigation';

const store = createStore(
    combineReducers({ ...reducer }),
    applyMiddleware(middleware)
);

export default store;