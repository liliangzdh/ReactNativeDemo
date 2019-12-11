import {createStackNavigator,} from 'react-navigation';
import Colors from '../theme/Colors';
import routers from './routers';
import React from "react";


const App = createStackNavigator(routers, {
    initialRouteName: '', // 默认显示界面
    navigationOptions: {
        cardStack: {
            gesturesEnabled: false
        },
        headerStyle: {
            backgroundColor: Colors.color_white,
            paddingTop: 30,// Platform.select({ios: 0, android: 20}),
            height: 50,
        },
        headerTitleStyle: {
            fontSize: 20,
            color: Colors.color_66,
            alignSelf: 'center'
        },
        headerBackTitleStyle: {
            fontSize: 18,
            color: '#666666',
        },
        headerBackTitle: '返回',
        headerTintColor: '#666666',
        gesturesEnabled:false,//是否滑动关闭页面
        gestureResponseDistance:{horizontal:300}
    },
    mode: 'card',//modal  card

    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏,
    // transitionConfig: TransitionConfiguration
});




export default App;
