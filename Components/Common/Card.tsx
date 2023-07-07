import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextBlack from './TextBlack';
import { amountType } from '../../Constants';

interface CardProps {
    category: string;
    iconName?: string;
    amount?: string;
    type?: string;
    iconColor?: string;
}

const Card: React.FC<CardProps> = ({
    category = '',
    iconName = '',
    amount = '',
    type,
    iconColor
}) => {
    return (
        <View style={styles.cardBlk}>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 20 }}>
                <Icon style={[styles.iconGreen, { backgroundColor: iconColor }]} name={iconName} size={28} color="#fff" />
                <TextBlack addStyle={{ fontSize: 15 }} text={category} />
            </View>
            <TextBlack addStyle={type === amountType.income ? styles.income : styles.expense} text={amount} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardBlk: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        marginBottom: 15,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 2,
        marginHorizontal: 2,
        borderWidth: 0.3,
        borderColor: '#0000001A'
    },
    iconGreen: {
        backgroundColor: '#3AE2C4',
        padding: 10,
        borderRadius: 100
    },
    income: {
        color: '#005257'
    },
    expense: {
        color: '#B91D1D'
    }
})

export default Card