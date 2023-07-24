import React from 'react'
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import TextWhite from './Common/TextWhite';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';


interface DateComponentProps {
    month?: string;
    onDateIconClick?: () => any;
    selected?: string;
    onDayPress?: (day: any) => void;
    maxDate?: string;
    show?: boolean;
    onPressArrowRight?: () => any;
    onPressArrowLeft?: () => any;
    calendarStyle?: {};
    prevNext?: boolean;
    dateViewStyle?: {};
}

const DateComponent: React.FC<DateComponentProps> = ({
    month = '',
    onDateIconClick,
    selected,
    onDayPress,
    maxDate,
    show,
    onPressArrowRight,
    onPressArrowLeft,
    calendarStyle,
    prevNext,

}) => {

    return (
        <View style={styles.dateBlk}>
            <View style={styles.dateCenter}>
                <View style={styles.monthBlk}>
                    {prevNext ? <Pressable role='button' aria-label='previous month' accessibilityLabelledBy={'month'} onPress={onPressArrowLeft}>
                        <MIcon name="chevron-left" size={32} color="#fff" />
                    </Pressable> : null}
                    <TextWhite text={month} id='month' addStyle={[styles.month, prevNext ? null : styles.textBlack]} />
                    {prevNext ? <Pressable role='button' aria-label='next month' onPress={onPressArrowRight}>
                        <MIcon name="chevron-right" size={32} color="#fff" />
                    </Pressable> : null}
                </View>
                <View>
                    <TouchableOpacity style={[styles.iconWrapper, prevNext ? { backgroundColor: '#fff' } : { backgroundColor: '#2A96A233' }]} onPress={onDateIconClick}>
                        <Icon style={styles.calendarIcon} name="calendar-alt" size={20} color="#fff" />
                    </TouchableOpacity>

                </View>

            </View>
            {show ? <Calendar
                style={[styles.calendar, calendarStyle]}
                onDayPress={onDayPress}
                // onPressArrowLeft={onPressArrowLeft}
                // onPressArrowRight={onPressArrowRight}

                theme={{
                    arrowColor: 'black',
                    'stylesheet.calendar.header': {
                        week: {
                            // marginTop: 5,
                            padding: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        },
                    },
                    dayTextColor: '#4A5660',
                    selectedDayBackgroundColor: '#2A96A2',
                    textDisabledColor: '#A6A6A6',
                    todayTextColor: '#2A96A2',
                    textSectionTitleColor: '#000',
                    disableAllTouchEventsForDisabledDays: true,
                    textDayFontFamily: 'Varela-Regular',
                    textMonthFontFamily: 'Varela-Regular',
                    textDayHeaderFontFamily: 'Varela-Regular',
                }}
                maxDate={maxDate}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' },
                }}
            /> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    dateBlk: {
        position: 'relative',
        zIndex: 9,
        elevation: 2,
    },
    dateCenter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    monthBlk: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    month: {
        fontSize: 18,
        marginTop: 3
    },
    calendar: {
        position: 'absolute',
        top: 10,
        right: 0,
        width: '90%',
        borderRadius: 20,
        padding: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 10,
        shadowRadius: 2,
        elevation: 5,
    },
    iconWrapper: {
        padding: 4,
        borderRadius: 50,
    },
    calendarIcon: {
        backgroundColor: '#08979D',
        padding: 10,
        paddingHorizontal: 12,
        borderRadius: 50,
    },
    textBlack: {
        color: '#000'
    }
})

export default DateComponent