import React from 'react'
import { StyleSheet, View } from 'react-native'
import TextBlack from './TextBlack'

interface ProfileSectionsProps {
    sectionTitle?: string;
    data?: any;
    addStyle?: any;
}

const ProfileSections: React.FC<ProfileSectionsProps> = ({
    sectionTitle = '',
    data,
    addStyle
}) => {


    return (
        <View style={[styles.sectionBlk, addStyle]}>
            {sectionTitle ? <TextBlack addStyle={styles.sectionTitle} text={sectionTitle} /> : null}
            <View style={styles.sectionCardBlk}>
                {data.map((item: any, idx: number) => {
                    return <TextBlack addStyle={[styles.card, idx + 1 === data.length ? { borderBottomWidth: 0 } : ""]} text={item.title} />
                })}

                {/* <TextBlack addStyle={styles.card} text='Manage categories' />
                <TextBlack addStyle={[styles.card, { borderBottomWidth: 0 }]} text='Accessibility' /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    sectionBlk: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 18,
        color: '#4D4D4D',
        marginBottom: 20,
    },
    sectionCardBlk: {
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 2,
    },
    card: {
        color: '#272727',
        fontSize: 18,
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#00000030'
    },
})

export default ProfileSections