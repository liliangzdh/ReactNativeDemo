/**
 * Created by liliang on 2018/11/4
 */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';


export default class User extends Component {


    static navigationOptions = ({navigation}) => ({
        title: '个人'
    });

    render() {
        return (

            <View>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('ReduxText2');
                }}>
                    <Text> user </Text>
                </TouchableOpacity>


                <TouchableOpacity

                    style={{height:100,width:'100%',justifyContent: 'center',alignItems: 'center'}}
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}>
                    <Text> goback </Text>
                </TouchableOpacity>

            </View>

        );
    }


}