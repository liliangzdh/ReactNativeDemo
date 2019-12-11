/**
 * Created by liliang on 2018/11/4
 */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity,Dimensions} from 'react-native';
import CalendarStrip from 'react-native-slideable-calendar-strip';
const width = Dimensions.get('window').width;
export default class User extends Component {


    static navigationOptions = ({navigation}) => ({
        title: '个人'
    });

    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date(),
        };
    }

    render() {
        return (

            <View>
                <CalendarStrip
                    isChinese
                    showWeekNumber={true}
                    showChineseLunar={false}
                    selectedDate={this.state.selectedDate}
                    onPressDate={(date) => {
                        this.setState({ selectedDate: date });
                    }}
                    onPressGoToday={(today) => {
                        this.setState({ selectedDate: today });
                    }}
                    onSwipeDown={() => {
                        alert('onSwipeDown');
                    }}
                    markedDate={['2018-05-04', '2018-05-15', '2018-06-04', '2018-05-01']}
                    weekStartsOn={1} // 0,1,2,3,4,5,6 for S M T W T F S, defaults to 0
                />

            </View>

        );
    }


}
