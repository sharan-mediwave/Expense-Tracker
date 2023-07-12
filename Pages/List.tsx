import React from 'react'
import TextBlack from '../Components/Common/TextBlack'
import BackgroundLayout from '../Components/BackgroundLayout'
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import Footer from '../Components/Footer'

const List = ({ navigation }: any) => {
    return (
        <BackgroundLayout>
            <>
                {/* <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
        /> */}
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.listBlk}>
                        <TextBlack text='List' />
                    </View>
                </ScrollView>

            </>
        </BackgroundLayout>
    )
}

const styles = StyleSheet.create({
    listBlk: {
        padding: 16,
        flex: 1,
    },

})

export default List