import React, { useState } from 'react'
import { Keyboard, StyleSheet, TextInput, View } from 'react-native'
import TextBlack from './TextBlack'
import { inputTypes } from '../../Constants';
interface InputProps {
    addStyle?: {};
    onChange?: any;
    value?: string;
    placeholderText?: string;
    label?: string;
    isMultiline?: boolean;
    noOfLines?: number;
    onFocus?: () => any;
    onBlur?: any;
    error?: any;
    errorText?: any;
    id?: any;
    touched?: any;
    type?: string;
    icon?: any;
    containerStyle?: {}
}

const Input: React.FC<InputProps> = ({
    addStyle,
    onChange,
    value,
    placeholderText,
    label = '',
    isMultiline,
    noOfLines,
    onFocus,
    onBlur,
    error,
    errorText,
    id,
    touched,
    type,
    icon,
    containerStyle
}) => {

    const [isFocused, setFocused] = useState(false);

    return (
        <View style={[styles.inputContainer, containerStyle]}>
            {label ? <TextBlack addStyle={styles.label} text={label} /> : null}
            <TextInput
                id={id}
                style={[
                    styles.input,
                    addStyle,
                    { borderColor: error && touched ? '#DF3535' : isFocused ? '#08979D' : '#0000001A' },
                    isMultiline ? { textAlignVertical: 'top' } : null,
                    icon ? { paddingRight: 45 } : null,
                ]}
                onChangeText={onChange}
                value={value}
                placeholder={placeholderText}
                onPressOut={Keyboard.dismiss}
                multiline={isMultiline}
                numberOfLines={noOfLines}
                placeholderTextColor='#0000005E'
                onFocus={() => {
                    onFocus ? onFocus() : null;
                    setFocused(true);
                }}
                onBlur={() => {
                    onBlur ? onBlur() : null;
                    setFocused(false);
                }}
            />
            {icon ? <View style={styles.icon}>{icon}</View> : null}
            {(error && touched) && <TextBlack addStyle={styles.error} text={error} />}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 30
    },
    label: {
        marginBottom: 10,
        fontSize: 18,
        fontFamily: 'Varela-Regular'
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        fontSize: 18,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 10,
        shadowRadius: 2,
        elevation: 5,
        color: '#000',
        // marginBottom: 5,
        fontFamily: 'Varela-Regular',
        borderWidth: 0.5,
    },
    error: {
        color: '#DF3535',
        marginLeft: 5,
        marginTop: 7,
    },
    icon: {
        position: 'absolute',
        top: 10,
        right: 10
    }
})
export default Input