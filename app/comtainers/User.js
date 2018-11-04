/**
 * Created by liliang on 2018/11/4
 */
 import React,{Component} from 'react';
 import {Text,View,TouchableOpacity} from 'react-native';


 export default class User extends Component{


     render() {
         return (

             <TouchableOpacity onPress = {()=>{
                 this.props.navigation.navigate('ReduxText2');
             }}>
                 <Text> user </Text>
             </TouchableOpacity>
         );
     }


 }