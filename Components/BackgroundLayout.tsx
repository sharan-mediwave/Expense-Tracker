import React, { ReactElement } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'

interface BackgroundLayoutProps {
    children: ReactElement
}

const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({ children }) => {
    return (
        <View style={styles.bgImgWrapper}>
            <ImageBackground style={styles.bgImg} source={require('../Assets/Images/background.png')}>
                {children}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    bgImgWrapper: {
        flex: 1,
    },
    bgImg: {
        flex: 1,
        // justifyContent: 'center'
        resizeMode: 'cover'
    }
})

export default BackgroundLayout