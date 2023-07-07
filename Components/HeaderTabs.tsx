import React from 'react'
import { View } from 'react-native'
import TextBlack from './Common/TextBlack'
import { StyleSheet } from 'react-native'

interface HeaderTabsProps {
    incomeAmount?: string;
    expenseAmoount?: string;
    balanceAmount?: string
}

const HeaderTabs: React.FC<HeaderTabsProps> = ({
    incomeAmount,
    expenseAmoount,
    balanceAmount,
}) => {
    return (
        <View style={styles.headerTabsBlk}>
            <View>
                <TextBlack addStyle={styles.title} text='Income' />
                <TextBlack addStyle={[styles.counts, { color: '#005257' }]} text={`₹ ${incomeAmount}`} />
            </View>
            <View style={styles.vr} />
            <View>
                <TextBlack addStyle={styles.title} text='Expense' />
                <TextBlack addStyle={[styles.counts, { color: '#B91D1D' }]} text={`₹ ${expenseAmoount}`} />
            </View>
            <View style={styles.vr} />

            <View>
                <TextBlack addStyle={styles.title} text='Balance' />
                <TextBlack addStyle={[styles.counts, { color: '#4D4D4D' }]} text={`₹ ${balanceAmount}`} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerTabsBlk: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 20,
        marginBottom: 20,
    },
    vr: {
        height: 52,
        width: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 5,
    },
    counts: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    }
})

export default HeaderTabs