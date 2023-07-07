import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface TextWhiteProps {
    text: string;
    addStyle?: {};
}

const TextWhite: React.FC<TextWhiteProps> = ({ text, addStyle }) => {
    return (
        <Text style={[styles.text, addStyle]}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        // fontFamily: 'Varela-Regular',
        color: '#fff'
    }
})

export default TextWhite