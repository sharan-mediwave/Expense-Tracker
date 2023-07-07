import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import TextBlack from './Common/TextBlack'
import Card from './Common/Card'
import { detailCard } from '../Data/Data';

interface DetailedViewProps {
    data?: any
}

const DetailedView: React.FC<DetailedViewProps> = ({ data = detailCard }) => {
    return (
        <View style={styles.detailedView}>
            {detailCard.map((item, index) => {
                return <View key={index} style={[styles.detailCenter, (index === data.length - 1 ? { marginBottom: 0 } : null)]}>
                    <TextBlack addStyle={styles.title} text={item.date} />
                    <View style={styles.header}>
                        <View style={styles.headerTitle}>
                            <TextBlack addStyle={{ fontSize: 16, marginRight: 5 }} text="Income" />
                            <TextBlack addStyle={{ color: '#005257' }} text={item.income} />
                        </View>
                        <View style={styles.headerTitle}>
                            <TextBlack addStyle={{ fontSize: 16, marginRight: 5 }} text='Expences' />
                            <TextBlack addStyle={{ color: '#B91D1D' }} text={item.expense} />
                        </View>
                    </View>
                    {item.data.map((card, index) => {
                        return <Card
                            key={index}
                            category={card.category}
                            amount={card.amount}
                            iconName={card.iconName}
                            type={card.type}
                            iconColor={card.iconColor}
                        />
                    })}
                </View>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    detailedView: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
        marginBottom: 20,
    },
    detailCenter: {
        marginBottom: 20,
    },
    title: {
        fontSize: 16,
        marginBottom: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    headerTitle: {
        flexDirection: 'row',
        columnGap: 5,
    }
})

export default DetailedView