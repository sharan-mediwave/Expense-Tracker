import React, { useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View, useColorScheme } from 'react-native'
import TextBlack from '../Components/Common/TextBlack'
import BackgroundLayout from '../Components/BackgroundLayout'
import Footer from '../Components/Footer';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import BackHeader from '../Components/Common/BackHeader';
import ToggleType from '../Components/Common/ToggleType';
import { categoryData } from '../Data/Data';
import Card from '../Components/Common/Card';
import { VictoryPie } from 'victory-native';
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const Statistics = ({ navigation }: any) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [isIncome, setIncome] = useState(false);


    const onPressExpense = () => {
        setIncome(false)
    }

    const onPressIncome = () => {
        setIncome(true)
    }






    return (
        <BackgroundLayout>
            <>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.statBlk}>
                        <BackHeader screenTitle='Statistics' />
                        <ToggleType
                            onPressExpense={onPressExpense}
                            onPressIncome={onPressIncome}
                            isIncome={isIncome}
                        />
                        <View style={styles.statCenter}>

                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <VictoryPie
                                    width={350}
                                    height={350}
                                    data={[
                                        { x: "Cats", y: 35, label: '35%' },
                                        { x: "Dogs", y: 40, label: '40%' },
                                        { x: "Birds", y: 55, label: '55%' }
                                    ]}
                                    colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                                    innerRadius={90}
                                    labelRadius={({ innerRadius }: any) => (width * 0.4 + innerRadius) / 2.5}
                                    padAngle={2}
                                />
                            </View>

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
                <Footer
                    onPressHome={() => navigation.navigate('Home')}

                    onPressAdd={() => navigation.navigate('Add')}
                    onPressStatistics={() => navigation.navigate('Stat')}
                />
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
    }
})

export default Statistics