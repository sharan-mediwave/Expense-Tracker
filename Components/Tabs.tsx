import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import Add from '../Pages/Add';
import Statistics from '../Pages/Statistics';
import { Image, StyleSheet, View } from 'react-native';
import TextBlack from './Common/TextBlack';

const Tab = createBottomTabNavigator();

interface TabsProps {
    home?: any;
    statistics?: any;
    add?: any;
    list?: any;
    setting?: any
}

const Tabs: React.FC<TabsProps> = ({
    home,
    statistics,
    add,
    list,
    setting
}) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    position: 'relative',
                    height: 70,
                },
                headerShown: false,
            }}
            backBehavior='history'
        >
            <Tab.Screen
                name="HomeStack"
                component={home}
                options={{

                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={focused ? styles.active : null}>
                            <Image style={styles.active} source={require('../Assets/Icons/Home.png')} />
                        </View>

                    ),
                }}

            />
            <Tab.Screen
                name="StatisticsStack"
                component={statistics}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={focused ? styles.active : null}>
                            <Image source={require('../Assets/Icons/Statistics.png')} />
                        </View>

                    ),
                }}
            />
            <Tab.Screen
                name="AddStack"
                component={add}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={styles.addBlk}>
                            <Image

                                source={require('../Assets/Icons/Add.png')}
                            />
                        </View>

                    ),
                }}
            />
            <Tab.Screen
                name="ListStack"
                component={list}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={focused ? styles.active : null}>
                            <Image source={require('../Assets/Icons/Money.png')} />
                        </View>

                    ),
                }}
            />
            <Tab.Screen
                name="SettingStack"
                component={setting}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={focused ? styles.active : null}>
                            <Image source={require('../Assets/Icons/Settings.png')} />
                        </View>

                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    addBlk: {
        backgroundColor: '#08979D',
        padding: 20,
        borderRadius: 100,
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        borderColor: '#fff',
        borderWidth: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    active: {
        // width: 40,
        // height: 40,
        // borderBottomColor: '#08979D',
        // borderBottomWidth: 1,
        // paddingBottom: 2,
    }
});

export default Tabs