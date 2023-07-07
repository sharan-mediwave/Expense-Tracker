import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import TextWhite from './TextWhite'

interface ToggleTypeProps {
    isIncome?: boolean;
    onPressExpense?: () => any
    onPressIncome?: () => any

}

const ToggleType: React.FC<ToggleTypeProps> = ({
    isIncome,
    onPressExpense,
    onPressIncome
}) => {
    return (
        <View style={styles.toggleBlk}>
            <TouchableOpacity style={{ width: '50%' }} onPress={onPressExpense}>
                <TextWhite addStyle={[styles.toggle, isIncome ? null : styles.active]} text='Expenses' />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '50%' }} onPress={onPressIncome}>
                <TextWhite addStyle={[styles.toggle, isIncome ? styles.active : null]} text='Income' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    toggleBlk: {
        backgroundColor: '#7AD6DA',
        borderRadius: 25,
        padding: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    toggle: {
        fontSize: 16,
        textAlign: 'center',
        // width: '40%',
        padding: 10,
    },
    active: {
        backgroundColor: '#fff',
        color: '#08979D',
        borderRadius: 25,
    },
});

export default ToggleType