import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {AppNavigator} from './navigation';
import store from './redux/store';
import {Linking} from 'react-native';

export default class Index extends Component {


    componentDidMount() {
        //外部链接打开 本app、
        Linking.getInitialURL().then((url) => {
            if (url) {
                //然后在这里统一处理
                console.log("----------1----");
                console.log('Initial url is: ' + url);
            }
        }).catch(err =>
            console.error('An error occurred', err));
    }


    render() {


        // return (<RootNavigator/>)

        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        )

    }

}
