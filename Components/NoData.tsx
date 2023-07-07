import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import TextBlack from './Common/TextBlack'

const NoData = () => {
    return (
        <View style={styles.noDataBlk}>
            <Image style={styles.img} source={require('../Assets/Images/Dog.png')} />
            <TextBlack addStyle={{ fontSize: 20 }} text='No data available' />
        </View>
    )
}

const styles = StyleSheet.create({
    noDataBlk: {
        paddingVertical: 80,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
    },
    img: {
        marginBottom: 15,
    }
})

export default NoData