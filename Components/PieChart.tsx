import React from 'react'
import { StyleSheet, View } from 'react-native'
import { VictoryPie } from 'victory-native';
import { Dimensions } from "react-native";
import TextBlack from './Common/TextBlack';

const { width, height } = Dimensions.get("window");

interface PieChartProps {
    total?: string;
    data?: any[];
    colors?: any[];
    isIncome?: boolean;
}

const PieChart: React.FC<PieChartProps> = ({
    total = '',
    data,
    colors,
    isIncome
}) => {
    return (
        <View>
            <View style={styles.chartWrapper}>
                <>
                    <VictoryPie
                        width={350}
                        height={350}
                        data={data}
                        colorScale={colors}
                        innerRadius={90}
                        labelRadius={({ innerRadius }: any) => (width * 0.39 + innerRadius) / 2.5}
                        padAngle={2}
                        style={{
                            labels: {
                                fontSize: 16,
                                fill: '#fff'
                            }
                        }}
                    />
                    <View style={styles.totalWrapper}>
                        <TextBlack addStyle={[styles.totalText, isIncome ? styles.income : styles.expense]} text={`₹ ${total}`} />
                    </View>
                </>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    chartWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
    },
    totalWrapper: {
        position: 'absolute',
        top: 85,
        alignSelf: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 6,
        backgroundColor: '#fff',
        height: 180,
        width: 180,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    totalText: {
        fontSize: 28
    },
    income: {
        color: '#005257'
    },
    expense: {
        color: '#B91D1D'
    },


})

export default PieChart