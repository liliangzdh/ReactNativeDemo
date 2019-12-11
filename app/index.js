import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {AppNavigator} from './navigation';
import store from './redux/store';
import {Linking} from 'react-native';

import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
    monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
    dayNames: ['周日','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
    today: '回到今天'
};
LocaleConfig.defaultLocale = 'fr';

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
