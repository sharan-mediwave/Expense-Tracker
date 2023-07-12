import React, { useState } from 'react'
import { Button, ScrollView, StatusBar, StyleSheet, Text, View, useColorScheme } from 'react-native'
import BackgroundLayout from '../Components/BackgroundLayout'
import LandingHeader from '../Components/LandingHeader'
import TextWhite from '../Components/Common/TextWhite'
import DateComponent from '../Components/DateComponent'
import moment from 'moment';
import HeaderTabs from '../Components/HeaderTabs'
import DetailedView from '../Components/DetailedView'
import Footer from '../Components/Footer'
import AdditionalInfo from '../Components/AdditionalInfo'
import NoData from '../Components/NoData'
import { Colors } from 'react-native/Libraries/NewAppScreen';





const Home = ({ navigation }: any) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const data = true;

    const [showCalendar, setShowCalendar] = useState(false);


    const [selected, setSelected] = useState('');

    const maxDate = moment(new Date()).format('YYYY-MM-DD').toString();

    const [headerAmounts, setHeaderAmounts] = useState({
        income: '50,000',
        expense: '20,000',
        balance: '30,000',
    })

    const onDayPress = (day: any) => {
        setSelected(day.dateString);
        setShowCalendar(false);
    }

    const onPressArrowRight = (day: any) => {
        console.log('right', day);

    }

    const onPressArrowLeft = (day: any) => {
        console.log('left', day);

    }

    const monthAndDate = `${moment(selected || new Date()).format('MMMM')} ${moment(selected || new Date()).format('YYYY')}`


    const handlePrev = () => {
        let month = moment(selected || new Date()).subtract(1, 'months').format('YYYY-MM-DD');
        setSelected(month);
    }

    const handleNext = () => {
        let month = moment(selected || new Date()).add(1, 'months').format('YYYY-MM-DD');
        setSelected(month);
    }


    return (
        <BackgroundLayout>
            <>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.homeBlk}>
                        <LandingHeader />
                        <TextWhite addStyle={styles.textLg} text='Manage your expenses' />
                        <DateComponent
                            prevNext={true}
                            month={monthAndDate}
                            onDateIconClick={() => setShowCalendar(!showCalendar)}
                            show={showCalendar}
                            maxDate={maxDate}
                            selected={selected}
                            onDayPress={onDayPress}
                            onPressArrowLeft={handlePrev}
                            onPressArrowRight={handleNext}

                        />
                        <HeaderTabs
                            incomeAmount={headerAmounts.income}
                            expenseAmoount={headerAmounts.expense}
                            balanceAmount={headerAmounts.balance}
                        />
                        {data ? <>
                            <DetailedView />
                            <AdditionalInfo />
                        </> : <NoData />}
                        {/* <Button onPress={() => navigation.navigate('Add')} title='Add expense' /> */}
                    </View>
                </ScrollView>
                {/* <Footer
                    onPressHome={() => navigation.navigate('Home')}

                    onPressAdd={() => navigation.navigate('Add')}
                    onPressStatistics={() => navigation.navigate('Stat')}
                /> */}
            </>
        </BackgroundLayout>
    )
}

const styles = StyleSheet.create({
    homeBlk: {
        padding: 16,
        flex: 1,
    },
    textLg: {
        fontSize: 35,
        marginBottom: 15,
        // fontFamily: 'Varela-Regular',

    }
})

export default Home