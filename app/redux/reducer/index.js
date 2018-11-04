/**
 * Created by liliang on 2018/11/4
 */

import { combineReducers } from 'redux';
import navReducer from './navReducer';
import authReducer from './authReducer';


const AppReducer = combineReducers({
    nav: navReducer,
    auth: authReducer,
});

export default AppReducer;