import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import TextWhite from './TextWhite'

interface CustomButtonProps {
    onClick?: () => any;
    text?: string;
    addStyle?: {}
}

const CustomButton: React.FC<CustomButtonProps> = ({
    onClick,
    text = '',
    addStyle
}) => {
    return (
        <TouchableOpacity onPress={onClick}>
            <View>
                <TextWhite addStyle={[styles.addBtn, addStyle]} text={text} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    addBtn: {
        backgroundColor: '#08979D',
        padding: 20,
        textAlign: 'center',
        borderRadius: 50,
        fontSize: 18,
    }
})

export default CustomButton