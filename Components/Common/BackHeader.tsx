import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import TextWhite from './TextWhite';

interface BackHeaderProps {
    screenTitle?: string;
    onBackArrowPress?: () => any;
}

const BackHeader: React.FC<BackHeaderProps> = ({
    screenTitle = '',
    onBackArrowPress,
}) => {


    return (
        <View style={styles.headerBlk}>
            <TouchableOpacity style={styles.backIcon} onPress={onBackArrowPress}>
                <Icon name='keyboard-backspace' size={28} color="#fff" />
            </TouchableOpacity>
            <TextWhite addStyle={styles.headerTitle} text={screenTitle} />
        </View>
    )
}

const styles = StyleSheet.create({
    headerBlk: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    },
    backIcon: {
        position: 'absolute',
        left: 0
    },
    headerTitle: {
        fontSize: 20,
        // width: '90%',
        // textAlign: 'center',
    },
});

export default BackHeader