import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import MIcon from 'react-native-vector-icons/MaterialIcons';
import TextBlack from './TextBlack';
import TextWhite from './TextWhite';

interface UserProfilesProps {
    name?: string;
    email?: string;
    onPress?: any;
    isCollapsed?: boolean;
}


const UserProfiles: React.FC<UserProfilesProps> = ({
    name = '',
    email = '',
    onPress,
    isCollapsed
}) => {
    return (
        <Pressable onPress={onPress} style={styles.usersBlk}>
            <View style={styles.usersCenter}>
                <View style={styles.detailsBlk}>
                    <View style={styles.avatar}>
                        <TextWhite addStyle={{ fontSize: 26 }} text='A' />
                    </View>
                    <View >
                        <TextBlack addStyle={styles.name} text={name} />
                        <TextBlack addStyle={styles.mail} text={email} />

                    </View>
                </View>
                <View style={styles.arrow}>
                    <MIcon name="chevron-right" size={32} color="#000" />
                </View>
            </View>
            {/* <Collapsible collapsed={isCollapsed} align="center" style={styles.collpase}>
                <View style={styles.content}>
                    <TextBlack addStyle={{ textAlign: 'center' }} text=' This is a dummy text of Single Collapsible View' />
                </View>
            </Collapsible> */}
        </Pressable>


    )
}

const styles = StyleSheet.create({
    usersBlk: {
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 2,
        marginBottom: 20,
    },
    usersCenter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsBlk: {
        flexDirection: 'row',
        columnGap: 10,
        alignItems: 'center'
    },
    arrow: {

    },
    avatar: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        backgroundColor: "#006B65",
        borderRadius: 50,
        borderColor: '#006B6530',
        borderWidth: 5,
    },
    name: {
        fontSize: 18,
    },
    mail: {
        fontSize: 16,
        color: '#7D7D7D'
    },
    collpase: {
        borderTopWidth: 2,
        borderColor: '#000'
    },
    content: {
        // padding: 20,
        backgroundColor: '#fff',
    },
})

export default UserProfiles