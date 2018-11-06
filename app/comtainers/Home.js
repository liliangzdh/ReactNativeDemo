import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
// import { createStackNavigator } from 'react-navigation';
import {connect} from "react-redux";


const increaseAction = {type: 'increase'};
export  default class HomeScreen extends React.Component {

    static navigationOptions = ({navigation, screenProps}) => ({
        title: navigation.getParam('headerTitle', '首页'),
        // headerRight:(
        //     <Text onPress={navigation.state.params?navigation.state.params.navigatePress:null}>
        //         右边
        //     </Text>
        // ),
    });
    //
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         title: navigation.getParam('headerTitle', 'A Nested Details Screen'),
    //     };
    // };

    // static navigationOptions = ({navigation}) => ({
    //         header: null,
    //     });

    componentDidMount() {

        console.log(this);

        this.props.navigation.setParams({headerTitle: '比赛'})
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>

                <TouchableOpacity
                    onPress={() => {
                        //react-navigation 2.0 版本以后，已经修复了，启动一个页面多次的问题。
                        console.log(this);
                        this.props.navigation.navigate('User');
                        this.props.navigation.setParams({
                            title: '自定义Header',
                            headerTitle: 'qw',
                        })
                    }}>

                    <Text>
                        点击跳转1
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {

                        this.props.dispatch(increaseAction);

                    }}>

                    <Text>qwqw{this.props.value}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


// function mapStateToProps(state) {
//     return {
//         value: state.count,
//     };
// }
//
// export default connect(mapStateToProps)(HomeScreen);