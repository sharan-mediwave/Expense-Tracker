import React from 'react'
import TextBlack from '../Components/Common/TextBlack'
import BackgroundLayout from '../Components/BackgroundLayout'
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import Footer from '../Components/Footer'

const Setting = ({ navigation }: any) => {
    return (
        <BackgroundLayout>
            <>
                {/* <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
        /> */}
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.settingBlk}>
                        <TextBlack text='Setting' />
                    </View>
                </ScrollView>
            </>
        </BackgroundLayout>
    )
}

const styles = StyleSheet.create({
    settingBlk: {
        padding: 16,
        flex: 1,
    },

})

export default Setting