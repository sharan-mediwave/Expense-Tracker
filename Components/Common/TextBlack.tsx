import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface TextBlackProps {
    text: string;
    addStyle?: {};
}

const TextBlack: React.FC<TextBlackProps> = ({ text, addStyle }) => {
    return (
        <Text style={[styles.text, addStyle]}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'varela',
        color: '#000'
    }
})

export default TextBlack