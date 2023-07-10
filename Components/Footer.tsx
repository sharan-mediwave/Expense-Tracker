import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    ImageBackground,
} from 'react-native';

interface FooterProps {
    onPressHome?: () => any;
    onPressAdd?: () => any;
    onPressStatistics?: () => any;
}

const Footer: React.FC<FooterProps> = ({
    onPressAdd,
    onPressStatistics,
    onPressHome
}) => {
    return (
        <View style={styles.footerBlk}>
            <View style={{}}>
                <View style={styles.footerCenter}>
                    <TouchableOpacity onPress={onPressHome}>
                        <Image source={require('../Assets/Icons/Home.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressStatistics}>
                        <Image source={require('../Assets/Icons/Statistics.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressAdd}>
                        <View style={styles.addBlk}>
                            <Image
                                source={require('../Assets/Icons/Add.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../Assets/Icons/Money.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../Assets/Icons/Settings.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footerBlk: {
        // flexDirection: 'row',
        // justifyContent: 'space-between'
        padding: 20,
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 15,
        // position: 'relative'
    },
    footerCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    addBlk: {
        backgroundColor: '#08979D',
        padding: 20,
        borderRadius: 100,
        position: 'absolute',
        bottom: -10,
        // left: 0,
        alignSelf: 'center',
        borderColor: '#fff',
        borderWidth: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    imageback: {
        width: 88,
        height: 88,
        marginBottom: 50,
    },
});

export default Footer;