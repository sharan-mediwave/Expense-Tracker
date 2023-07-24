import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import TextWhite from './Common/TextWhite'
import TextBlack from './Common/TextBlack'
import MIcon from 'react-native-vector-icons/MaterialIcons';

const FilterTabs = () => {
    return (
        <View style={styles.filterTabBlk}>
            <View style={styles.filterTabCenter}>
                <Pressable style={styles.tab}>
                    <View style={styles.tabIcon}>
                        <MIcon name="food" size={14} color="#fff" />
                    </View>
                    <TextBlack text='Food' />
                </Pressable>
                <Pressable style={styles.tab}>
                    <View style={styles.tabIcon}>
                        <MIcon name="shopping-cart" size={14} color="#fff" />
                    </View>
                    <TextBlack text='Payment methods' />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    filterTabBlk: {

    },
    filterTabCenter: {},
    tab: {
        flexDirection: 'row'
    },
    tabIcon: {
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#845FD1'
    }
})
export default FilterTabs