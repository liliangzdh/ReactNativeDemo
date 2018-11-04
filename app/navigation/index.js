/**
 * Created by liliang on 2018/11/4
 */

import React from 'react';
import { connect } from 'react-redux';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware, createNavigationReducer
} from 'react-navigation-redux-helpers';

import RootNavigator from './Nav';



const middleware = createReactNavigationReduxMiddleware('root', state => state.nav
);
const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');


const mapStateToProps = state => {
    return {
        state: state.nav
    }
}

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export  { RootNavigator, AppNavigator, middleware };
