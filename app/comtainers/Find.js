import React from 'react';
import {View, Text} from 'react-native';
// import { createStackNavigator } from 'react-navigation';

export default class Find extends React.Component {


    static navigationOptions = ({navigation}) => ({
        title: "发现"
    });

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>find Screen</Text>
            </View>
        );
    }
}

// export default createStackNavigator({
//     Home: {
//         screen: HomeScreen
//     },
// });
