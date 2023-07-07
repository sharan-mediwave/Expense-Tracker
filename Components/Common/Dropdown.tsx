import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextBlack from './TextBlack';

interface DropdownProps {
    selectedvalue?: string;
    onSelect?: (value: any) => any;
    options?: any;
    customButton?: any;
    customRow?: any;
    label?: string;
    addSelectContainerStyle?: {},

    addSelectStyle?: {},
    onFocus?: () => any;
    onBlur?: any;
    error?: any;
    touched?: any;
}

const Dropdown: React.FC<DropdownProps> = ({
    selectedvalue,
    onSelect,
    options,
    customButton,
    customRow,
    label = '',
    addSelectStyle,
    onFocus,
    onBlur,
    error,
    addSelectContainerStyle,
    touched
}) => {
    const [isFocused, setFocused] = useState(false);
    // console.log("drop err", error);


    return (
        <View style={[styles.selectContainer, addSelectContainerStyle]}>
            <TextBlack addStyle={styles.label} text={label} />
            <SelectDropdown

                data={options}
                onSelect={(selectedItem, index) => {
                    // console.log(selectedItem, index)
                    onSelect ? onSelect(selectedItem) : null;
                }}
                onFocus={() => {
                    onFocus ? onFocus() : null;
                    setFocused(true);
                }}
                onBlur={() => setFocused(false)}
                defaultButtonText={'Select country'}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                    return item;
                }}
                buttonStyle={[styles.selectInput, addSelectStyle, { borderColor: isFocused ? '#08979D' : '#0000001A' }]}
                buttonTextStyle={[styles.selectInputText, { color: selectedvalue ? '#000' : '#0000005E' }]}
                renderDropdownIcon={isOpened => {
                    return <Icon name={isOpened ? 'arrow-drop-up' : 'arrow-drop-down'} color={'#08979D'} size={30} />;
                }}
                renderCustomizedButtonChild={customButton}
                renderCustomizedRowChild={customRow}
                dropdownStyle={styles.dropdown}
                // rowStyle={styles.dropdownRowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
                selectedRowTextStyle={styles.selectedRowTxtStyle}
            />
            {(error && touched) && <TextBlack addStyle={styles.error} text={error} />}
        </View>
    )
}

const styles = StyleSheet.create({
    selectContainer: {
        marginBottom: 30
    },
    label: {
        marginBottom: 10,
        fontSize: 18,
        fontFamily: 'Varela-Regular'
    },
    selectInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 10,
        shadowRadius: 2,
        elevation: 5,
        width: '100%',
        borderWidth: 0.5,
    },
    error: {
        color: '#DF3535',
        marginLeft: 5,
        marginTop: 7,
    },
    selectInputText: {
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'normal',
    },
    dropdown: {
        textAlign: 'left',
        paddingHorizontal: 10,
        fontSize: 16,
        fontWeight: 'normal',
        borderRadius: 10,
    },
    dropdown1RowTxtStyle: {
        textAlign: 'left'
    },
    dropdown1BtnStyle: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        fontSize: 16,
        fontWeight: 'normal',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,
    },
    selectedRowTxtStyle: {
        color: '#08979D'
    },
})

export default Dropdown