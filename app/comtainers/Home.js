import React from 'react';
import {Text, TouchableOpacity, View,Dimensions} from 'react-native';
// import { createStackNavigator } from 'react-navigation';
import {connect} from "react-redux";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const DEVICE_WIDTH = Dimensions.get('window').width;


export  default class HomeScreen extends React.Component {

    static navigationOptions = ({navigation, screenProps}) => ({
        title: navigation.getParam('headerTitle', '首页'),
    });


    componentDidMount() {
        this.props.navigation.setParams({headerTitle: '比赛'})
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>


                {
                    this.renderList()
                }


            </View>
        );
    }


    renderList=()=>{
        return(
            <CalendarList
                horizontal={true}
                pagingEnabled={true}
                calendarWidth={DEVICE_WIDTH}
                markingType='multi-period'
                theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: '#38218E',
                    dayTextColor: 'white',
                    textDisabledColor: '#68669B',
                    todayTextColor: '#f00',
                    monthTextColor: '#fff',
                    selectedDayBackgroundColor: '#ff0',
                    selectedDayTextColor: '#ff0',
                }}
                // Initially visible month. Default = Date()
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                // minDate={'2019-05-01'}
                // // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={'2019-12-30'}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day) => {
                    console.log('selected day', day)
                }}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={(day) => {
                    console.log('selected day', day)
                }}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'yyyy-MM'}
                // 日历中可见月份发生变化时执行的处理程序。默认值= undefined
                onMonthChange={(month) => {
                    console.log('month changed', month)
                }}
                // 隐藏月份导航箭头。默认值= false
                hideArrows={false}
                //用自定义箭头替换默认箭头（方向可以是“左”或“右”）
                renderArrow={(direction) => {
                    return (
                        <Text style={{color:'white'}}>{direction}</Text>
                    )
                }}
                // 不要在月份页面中显示其他月份的日期。默认值= false
                hideExtraDays={false}
                // 如果hideArrows = false 和hideExtraDays = false，则从
                // 日历页面中可见的另一个月//点按灰显的日期//时不切换月份。默认值= false
                disableMonthChange={false}
                // 如果firstDay = 1周从星期一开始。请注意，dayNames和dayNamesShort仍应从星期日开始。
                firstDay={7}
                // 隐藏日期名称。默认值=false.（显示周几标题)
                hideDayNames={false}
                // 在左侧显示周号。默认值= false
                showWeekNumbers={false}
                onPressArrowLeft={(substractMonth) => {
                    substractMonth();
                }}
                onPressArrowRight={(addMonth) => addMonth()}
            />
        )
    }

}


// function mapStateToProps(state) {
//     return {
//         value: state.count,
//     };
// }
//
// export default connect(mapStateToProps)(HomeScreen);
