import React, {Component} from 'react';
import {Text, View} from 'react-native';

// import {createStackNavigator} from 'react-navigation';
// import {logger} from 'redux-logger';


import {createStore,combineReducers,applyMiddleware} from 'redux';

import {reduxifyNavigator,createNavigationReducer,createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

import {Provider,connect} from 'react-redux';


// const AppNavigator = Nav;
//
// const navReducer = createNavigationReducer(AppNavigator);
// const middleware = createReactNavigationReduxMiddleware('root', state => {
//     state.router
// });
// const App = reduxifyNavigator(AppNavigator, "root");
// const ConnectedNavigator = connect(mapStateToProps)(App);
//
// const appReducer = combineReducers({nav:navReducer});
//
// // const AppWithNavigationState = connect(mapStateToProps)(AppNavigator);
//
// const mapStateToProps = (state) => ({
//     state: state.nav,
// });
//
// const store = createStore(
//     appReducer,
//     applyMiddleware(middleware),
// );

import { AppNavigator } from './navigation';
import store from './redux/store';

// import Nav from './navigation/Nav';

export default class Index extends Component {


    render() {

        // return (
        //     <View style={{flex: 1}}>
        //         <Nav/>
        //     </View>);

        return(
            <Provider store={store}>
                <AppNavigator />
            </Provider >
        )

    }

}
