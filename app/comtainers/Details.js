import React from 'react';
import {View, Text, Button, TouchableHighlight} from 'react-native';
import {SafeAreaView} from 'react-navigation'
// import { createStackNavigator } from 'react-navigation';
import {createStore, applyMiddleware} from 'redux';

//添加中间件(logger功能)
import {createLogger} from 'redux-logger';

import PropTypes from 'prop-types';


/***
 * 这样处理的过程是：是同步。redux。
 */
class Counter extends React.Component {


    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired,
    }


    render() {
        const {value, onIncrement, onDecrement} = this.props;

        console.log(value);
        //view
        return (
            <View style={{alignItems: 'center'}}>
                <TouchableHighlight onPress={onIncrement}>
                    <Text style={{fontSize: 20, margin: 5}}>Tap me to ++</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={onDecrement}>
                    <Text style={{fontSize: 20, margin: 5}}>Tap me to -- </Text>
                </TouchableHighlight>
                <View>
                    <Text>{value}</Text>
                </View>


            </View>
        );
    }
}

//reducer函数，state默认值是0 ，
function counter(state = 0, action) {
    //根据传进来的action改变state的值
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const logger = createLogger();
//传入reducer函数创建store
const store = createStore(counter, applyMiddleware(logger));

export default class movie_redux extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 0,
        }
    }

    static navigationOptions = {
        title:'详情'
    };


    componentDidMount = () => {
        //设置监听，当store的state值更新，刷新render
        store.subscribe(
            () => {
                this.setState({value: store.getState()});
            }
        );
    }

    render() {
        return (
            <View>
                <Counter
                    value={this.state.value}
                    onIncrement={() => store.dispatch({type: 'INCREMENT'})}
                    onDecrement={() => store.dispatch({type: 'DECREMENT'})}
                />
            </View>
        );
    }
}
