import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import { createStackNavigator } from 'react-navigation';

export default class Find extends React.Component {


    static navigationOptions = ({navigation}) => ({
        title: "发现"
    });
    // CalendarsScreen,
    // AgendaScreen,
    // CalendarsList,
    // HorizontalCalendarList,
    // ExpandableCalendar
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                {
                    ['CalendarsScreen', 'AgendaScreen', 'CalendarsList', 'HorizontalCalendarList', 'ExpandableCalendar',"User"]
                        .map((item,index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        height: 30,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginBottom: 10
                                    }}
                                    onPress={() => {
                                        this.props.navigation.navigate(item);
                                    }}>
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            )
                        })
                }


            </View>
        );
    }
}

// export default createStackNavigator({
//     Home: {
//         screen: HomeScreen
//     },
// });
