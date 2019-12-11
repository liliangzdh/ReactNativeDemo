import React, {Component} from 'react';
import {Platform, TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {CalendarProvider, ExpandableCalendar} from 'react-native-calendars';


const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(3);
const futureDates = getFutureDates(9);
const dates = [fastDate, today].concat(futureDates);

function getFutureDates(days) {
    const array = [];
    for (let index = 1; index <= days; index++) {
        const date = new Date(Date.now() + (864e5 * index)); // 864e5 == 86400000 == 24*60*60*1000
        const dateString = date.toISOString().split('T')[0];
        array.push(dateString);
    }
    return array;
}

function getPastDate(days) {
    return new Date(Date.now() - (864e5 * days)).toISOString().split('T')[0];
}

const ITEMS = [
    {title: dates[0]},
    {title: dates[1]},
    {title: dates[2]},
    {title: dates[3]},
    {title: dates[4]},
    {title: dates[5]},
    {title: dates[6]},
    {title: dates[7]},
    {title: dates[8]},
    {title: dates[9]},
    {title: dates[10]}
];

export default class ExpandableCalendarScreen extends Component {

    onDateChanged = (/* date, updateSource */) => {
        // console.warn('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
        // fetch and set data for date + week ahead
    }

    onMonthChange = (/* month, updateSource */) => {
        // console.warn('ExpandableCalendarScreen onMonthChange: ', month, updateSource);
    }


    getMarkedDates = () => {
        const marked = {};
        ITEMS.forEach(item => {
            // only mark dates with data
            marked[item.title] = {marked: true};
        });
        return marked;
    }

    getTheme = () => {
        const themeColor = '#0059ff';
        const lightThemeColor = '#e6efff';
        const disabledColor = '#a6acb1';
        const black = '#20303c';
        const white = '#ffffff';

        return {
            // arrows
            arrowColor: black,
            arrowStyle: {padding: 0},
            // month
            monthTextColor: black,
            textMonthFontSize: 16,
            textMonthFontFamily: 'HelveticaNeue',
            textMonthFontWeight: 'bold',
            // day names
            textSectionTitleColor: black,
            textDayHeaderFontSize: 12,
            textDayHeaderFontFamily: 'HelveticaNeue',
            textDayHeaderFontWeight: 'normal',
            // today
            todayBackgroundColor: lightThemeColor,
            todayTextColor: themeColor,
            // dates
            dayTextColor: themeColor,
            textDayFontSize: 18,
            textDayFontFamily: 'HelveticaNeue',
            textDayFontWeight: 'bold',
            textDayStyle: {marginTop: Platform.OS === 'android' ? 2 : 4},
            // selected date
            selectedDayBackgroundColor: themeColor,
            selectedDayTextColor: white,
            // disabled date
            textDisabledColor: disabledColor,
            // dot (marked date)
            dotColor: '#23CE1B',
            selectedDotColor: white,
            disabledDotColor: disabledColor,
            dotStyle: {marginTop: -2},

            'stylesheet.calendar.header': {
                header: {
                    flexDirection: 'row',
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginTop: 6,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            }
        };
    }

    render() {
        console.log(ITEMS);
        return (
            <View style={{flex: 1}}>
                <CalendarProvider
                    ref={(i) => {
                        this.CalendarProvider = i
                    }}
                    date={ITEMS[0].title}
                    onDateChanged={this.onDateChanged}
                    onMonthChange={this.onMonthChange}
                    theme={{todayButtonTextColor: '#0059ff'}}
                    showTodayButton
                    disabledOpacity={0.6}>
                    <ExpandableCalendar
                        // horizontal={false}
                        // hideArrows
                        // disablePan
                        ref={(i)=>{this.ExpandableCalendar = i}}
                        hideKnob={true}
                        initialPosition={ExpandableCalendar.positions.OPEN}
                        monthFormat={'yyyy年MM月'}
                        firstDay={7}
                        markedDates={this.getMarkedDates()} // {'2019-06-01': {marked: true}, '2019-06-02': {marked: true}, '2019-06-03': {marked: true}};
                        theme={this.getTheme()}
                        // calendarStyle={styles.calendar}
                        // headerStyle={styles.calendar} // for horizontal only
                    />

                    <TouchableOpacity
                        onPress={() => {
                            this.CalendarProvider.onTodayPress();
                        }}>
                        <Text>
                            {
                                '回到今天'
                            }
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={{marginTop:10,}}
                        onPress={() => {
                            this.ExpandableCalendar.contentRef.showWeek();
                        }}>
                        <Text>
                            {
                                '关闭或者显示'
                            }
                        </Text>
                    </TouchableOpacity>

                </CalendarProvider>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    calendar: {
        paddingLeft: 20,
        paddingRight: 20
    },
    section: {
        backgroundColor: '#f0f4f7',
        color: '#79838a'
    },
    item: {
        padding: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e8ecf0',
        flexDirection: 'row'
    },
    itemHourText: {
        color: 'black'
    },
    itemDurationText: {
        color: 'grey',
        fontSize: 12,
        marginTop: 4,
        marginLeft: 4
    },
    itemTitleText: {
        color: 'black',
        marginLeft: 16,
        fontWeight: 'bold',
        fontSize: 16
    },
    itemButtonContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    emptyItem: {
        paddingLeft: 20,
        height: 52,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e8ecf0'
    },
    emptyItemText: {
        color: '#79838a',
        fontSize: 14
    }
});
