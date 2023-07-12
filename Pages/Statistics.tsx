import React, { useState } from 'react'
import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View, useColorScheme } from 'react-native'
import TextBlack from '../Components/Common/TextBlack'
import BackgroundLayout from '../Components/BackgroundLayout'
import Footer from '../Components/Footer';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import BackHeader from '../Components/Common/BackHeader';
import ToggleType from '../Components/Common/ToggleType';
import { categoryData } from '../Data/Data';
import Card from '../Components/Common/Card';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import PieChart from '../Components/PieChart';




const Statistics = ({ navigation }: any) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [isIncome, setIncome] = useState(false);

    const [selected, setSelected] = useState('');

    const onPressExpense = () => {
        setIncome(false)
    }

    const onPressIncome = () => {
        setIncome(true)
    }

    const onBackArrowPress = () => {
        navigation.goBack()
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

    // charts
    const data = [
        { x: "Cats", y: 35, label: '35%' },
        { x: "Dogs", y: 40, label: '40%' },
        { x: "Birds", y: 55, label: '55%' },
        { x: "Ducks", y: 30, label: '3%' },
        { x: "Hens", y: 20, label: '4%' },
    ]

    const expenseColors = ["#EF731B", "#845FD1", "#31A0D7", "#F4CB21", "navy"]

    const incomeColors = ["#34BF03", "#9948A6", "#16BAC5", "#2A96A2", "navy"]


    return (
        <BackgroundLayout>
            <>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.statBlk}>
                        <BackHeader screenTitle='Statistics' onBackArrowPress={onBackArrowPress} />
                        <ToggleType
                            onPressExpense={onPressExpense}
                            onPressIncome={onPressIncome}
                            isIncome={isIncome}
                        />
                        <View style={styles.statCenter}>
                            <View style={styles.dateBlk}>
                                <Pressable onPress={handlePrev}>
                                    <MIcon name="chevron-left" size={32} color="#000" />
                                </Pressable>
                                <TextBlack addStyle={{ fontSize: 18 }} text={monthAndDate} />
                                <Pressable onPress={handleNext}>
                                    <MIcon name="chevron-right" size={32} color="#000" />
                                </Pressable>
                            </View>

                            <PieChart
                                data={data}
                                colors={isIncome ? incomeColors : expenseColors}
                                total='2200'
                                isIncome={isIncome}
                            />

                            {categoryData.map((item, idx) => {
                                return <Card
                                    key={idx}
                                    amount={item.amount}
                                    iconColor={item.iconColor}
                                    category={item.category}
                                    iconName={item.iconName}
                                    type={item.type}
                                    percent={item.percentage}
                                />
                            })}
                        </View>
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
    statBlk: {
        padding: 16,
        flex: 1,
    },
    statCenter: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 20,
    },
    dateBlk: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

})

export default Statistics