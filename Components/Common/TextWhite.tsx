import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface TextWhiteProps {
    text: string;
    addStyle?: {};
    id?: string;
}

const TextWhite: React.FC<TextWhiteProps> = ({ text, addStyle, id }) => {
    return (
        <Text id={id} style={[styles.text, addStyle]}>
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