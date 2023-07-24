import React, { useState } from 'react'
import TextBlack from '../Components/Common/TextBlack'
import BackgroundLayout from '../Components/BackgroundLayout'
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import Footer from '../Components/Footer'
import BackHeader from '../Components/Common/BackHeader'
import Input from '../Components/Common/Input'
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FilterTabs from '../Components/FilterTabs'

const List = ({ navigation }: any) => {
    const [searchValue, setSearchValue] = useState("");
    return (
        <BackgroundLayout>
            <>
                {/* <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
        /> */}
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.listBlk}>
                        <BackHeader screenTitle='Detailed report' />
                        <View style={styles.listCenter}>
                            <Input
                                id={'search'}
                                placeholderText='search'
                                value={searchValue}
                                onChange={(value: string) => {
                                    setSearchValue(value);
                                }}
                                containerStyle={{ marginBottom: 10 }}
                                icon={<MIcon name="search" size={32} color="#08979D" />}
                            />
                            <FilterTabs />
                        </View>
                    </View>
                </ScrollView>

            </>
        </BackgroundLayout>
    )
}

const styles = StyleSheet.create({
    listBlk: {
        padding: 16,
        flex: 1,

    },
    listCenter: {
        backgroundColor: '#fff',
        padding: 28,
        borderRadius: 20,
    },

})

export default List