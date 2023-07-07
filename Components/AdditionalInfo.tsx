import React from 'react'
import { StyleSheet, View } from 'react-native'
import TextBlack from './Common/TextBlack'
import Icon from 'react-native-vector-icons/FontAwesome5';

const AdditionalInfo = () => {
    return (
        <View style={styles.additionalBlk}>
            <TextBlack addStyle={{ fontSize: 18 }} text='Additional Information' />
            <View style={styles.cardBlk}>
                <View style={styles.card}>
                    <Icon style={styles.icon} name="piggy-bank" size={32} color="#08979D" />
                    <TextBlack addStyle={styles.greenText} text='Savings' />
                </View>
                <View style={styles.card}>
                    <Icon style={styles.icon} name="calendar-alt" size={32} color="#08979D" />
                    <TextBlack addStyle={styles.greenText} text='Remainder' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    additionalBlk: {
        // padding: 16,
        flex: 1,
        marginBottom: 10,
    },
    cardBlk: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 20,
        marginTop: 20,
    },
    card: {
        backgroundColor: '#fff',
        paddingVertical: 25,
        paddingHorizontal: 50,
        alignItems: 'center',
        borderRadius: 20,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    icon: {
        backgroundColor: 'rgba(8, 151, 157, 0.2)',
        padding: 15,
        borderRadius: 10,
        marginBottom: 5,

    },
    greenText: {
        color: '#005257'
    }
})

export default AdditionalInfo