import React, { useState } from 'react'
import TextBlack from '../Components/Common/TextBlack'
import BackgroundLayout from '../Components/BackgroundLayout'
import { Pressable, ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import Footer from '../Components/Footer'
import BackHeader from '../Components/Common/BackHeader'
import UserProfiles from '../Components/Common/UserProfiles'
import ProfileSections from '../Components/Common/ProfileSections'

const Setting = ({ navigation }: any) => {

    const accountData = [
        {
            title: 'Payment methods',
            url: '',
        },
        {
            title: 'Manage categories',
            url: '',
        },
        {
            title: 'Accessibility',
            url: '',
        },
    ]

    const supporData = [
        {
            title: 'Get in touch',
            url: '',
        },
        {
            title: 'Privacy policy',
            url: '',
        },
        {
            title: 'Terms and conditions',
            url: '',
        },
    ]

    const endData = [
        {
            title: 'Delete your account',
            url: '',
        },
        {
            title: 'Logout',
            url: '',
        },
    ]

    return (
        <BackgroundLayout>
            <>
                {/* <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
        /> */}
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.settingBlk}>
                        <BackHeader screenTitle='Profile' />
                        <View style={styles.settingCenter}>
                            <UserProfiles
                                // isCollapsed={collapsed}
                                // onPress={toggleExpanded}
                                name='alandonald27'
                                email='alandonald27@gmail.com'
                            />
                            <ProfileSections
                                data={accountData}
                                sectionTitle='Account settings'
                            />
                            <ProfileSections
                                data={supporData}
                                sectionTitle='Support'
                            />
                            <ProfileSections
                                data={endData}
                                addStyle={{ marginBottom: 0 }}
                            />
                        </View>
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
    settingCenter: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
    },
})

export default Setting