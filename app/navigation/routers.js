import React from "react";
import {Image} from 'react-native';
import {TabNavigator,createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import Images from '../theme/images';

import Home from '../comtainers/Home';
import Find from '../comtainers/Find';
import Details from '../comtainers/Details';
import ReduxText2 from '../comtainers/ReduxText2';
import User from '../comtainers/User';



// 这么做是为了把这个导入堆栈中
const HomeStack = createStackNavigator({ Home });
const FindStack = createStackNavigator({ Find });


const HomeTab = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: ({navigation, screenProps}) => ({
            tabBarLabel: '首页',
            tabBarIcon: (({tintColor, focused}) => {
                return (
                    focused ? <Image
                            source={Images.home02}
                            style={[{height: 32, width: 32}]}/> :
                        <Image
                            source={Images.home01}
                            style={[{height: 32, width: 32}]}/>
                )
            }), // 设置标签栏的图标。需要单独设置。
            headerTitleStyle: {
                alignSelf: 'center',
            },
            title:'首页'
        }),
    },

    Find: {
        screen: FindStack,
        navigationOptions: ({navigation, screenProps}) => ({
            tabBarLabel: '发现',
            tabBarIcon: (({tintColor, focused}) => {
                return (
                    focused ? <Image
                            source={Images.home02}
                            style={[{height: 32, width: 32}]}/> :
                        <Image
                            source={Images.home01}
                            style={[{height: 32, width: 32}]}/>
                )
            }), // 设置标签栏的图标。需要单独设置。
            headerTitleStyle: {
                alignSelf: 'center',
            }
        }),
    },
})


export default {
    HomeTab: {
        screen: HomeTab,
        navigationOptions: () => ({
            header: null,
        }),
        path:'app/home'
    },
    // Details: {
    //     screen: Details
    // },
    // ReduxText2:{
    //     screen:ReduxText2
    // },
    User:{
        screen:User,
        path:'app/user'
    }

}