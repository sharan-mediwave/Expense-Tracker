import React from 'react'
import { StyleSheet, View } from 'react-native'
import TextWhite from './Common/TextWhite'
import Icon from 'react-native-vector-icons/MaterialIcons';

const LandingHeader = () => {
    return (
        <View style={styles.headerBlk}>
            <View style={styles.headerCenter}>
                <View>
                    <TextWhite text='Welcome back' />
                    <TextWhite addStyle={styles.textBold} text='Jon Snow' />
                </View>
                <View style={styles.headerIcons}>
                    <Icon name="notifications" size={32} color="#fff" />
                    <Icon name="more-vert" size={32} color="#fff" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBlk: {
        marginBottom: 15
    },
    headerCenter: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerIcons: {
        flexDirection: 'row',
        columnGap: 10
    },
    textBold: {
        fontSize: 16,
        fontWeight: '600'
    }
})

export default LandingHeader