import React, { useState } from 'react'
import BackgroundLayout from '../Components/BackgroundLayout'
import { ScrollView, StyleSheet, Text, View, useColorScheme, StatusBar, TextInput, Keyboard, Image } from 'react-native'
import Footer from '../Components/Footer'
import BackHeader from '../Components/Common/BackHeader'
import ToggleType from '../Components/Common/ToggleType'
import AddForm from '../Components/AddForm'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CustomModal from '../Components/Common/CustomModal'
import moment from 'moment'
import TextBlack from '../Components/Common/TextBlack'
import Dropdown from '../Components/Common/Dropdown'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Input from '../Components/Common/Input'
import CustomButton from '../Components/Common/CustomButton'
import * as Yup from 'yup';




const Add = ({ navigation }: any) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [formType, setFormType] = useState("expenses")
    const [isIncome, setIncome] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    const [amount, onChangeAmount] = useState('');

    const [note, onChangeNote] = useState('');

    const [selected, setSelected] = useState(new Date());

    const [errors, setErrors] = useState({
        amount: null,
        category: null,
        note: null,
    })

    const [initialValues, setInitialValues] = useState({
        amount: '',
        category: '',
        note: '',
    })

    const validationSchema = Yup.object().shape({
        amount: Yup.string().required("Amount is required"),
        category: Yup.string().required("Category is required"),
        note: Yup.string().optional(),
    })

    const monthAndDate = moment(selected || new Date()).format('Do MMMM YYYY')

    // const monthAndDate = `${moment(selected || new Date()).format('MMMM')} ${moment(selected || new Date()).format('YYYY')}`


    const categoryOption = ["Food", "Travel", "Groceries", "Medicine"]
    const [category, setCategory] = useState('');

    const [showCalendar, setShowCalendar] = useState(false);

    const maxDate = moment(new Date()).format('YYYY-MM-DD').toString();

    const onDayPress = (day: any) => {
        setSelected(day.dateString);
        setShowCalendar(false);
    }

    const onPressExpense = () => {
        setIncome(false)
    }

    const onPressIncome = () => {
        setIncome(true)
    }

    const onSubmitForm = () => {
        console.log("values", amount, category, note, selected);
    }


    const onBackArrowPress = () => {
        navigation.goBack()
    }

    const onAddNewCategory = () => {
        setModalVisible(!modalVisible)
    }

    const onCategorySelect = (value: any) => {
        setCategory(value);
    }


    // new cat
    const [newCategory, setNewCategory] = useState({
        title: '',
        iconName: '',
        color: ''
    })

    const icons = [
        { title: 'Food', image: require('../Assets/Expense-icon/food.png') },
        { title: 'Travel', image: require('../Assets/Expense-icon/travel.png') },
        { title: 'Medicine', image: require('../Assets/Expense-icon/pill.png') },
        { title: 'Groceries', image: require('../Assets/Expense-icon/shopping-cart.png') },
    ];

    const colorOption = [
        { title: 'Red', color: 'red' },
        { title: 'Blue', color: 'blue' },
        { title: 'Green', color: 'green' },
        { title: 'Yellow', color: 'yellow' }
    ]

    const onChangeCatTitle = (value: string) => {
        setNewCategory((prev: any) => ({
            ...prev,
            title: value
        }))
    }

    const onCatColorSelect = (value: any) => {
        setNewCategory((prev: any) => ({
            ...prev,
            color: value.color
        }))
    }

    const onIconSelect = (value: any) => {
        setNewCategory((prev: any) => ({
            ...prev,
            iconName: value.title
        }))
    }

    const onCloseModal = () => {
        setNewCategory({
            title: '',
            iconName: '',
            color: ''
        })
        setModalVisible(!modalVisible)
    }

    const handleAddCategory = () => {
        console.log('add', newCategory);
        setModalVisible(false)
    }

    return (
        <BackgroundLayout>
            <>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.addBlk}>
                        <View style={styles.addCenter}>
                            <BackHeader
                                screenTitle={`Add ${formType}`}
                                onBackArrowPress={onBackArrowPress}
                            />
                            <ToggleType
                                onPressExpense={onPressExpense}
                                onPressIncome={onPressIncome}
                                isIncome={isIncome}
                            />

                            <AddForm
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                isIncome={isIncome}
                                onSubmitForm={onSubmitForm}
                                onAddNewCategory={onAddNewCategory}
                                amount={amount}
                                note={note}
                                onChangeNote={onChangeNote}
                                onChangeAmount={onChangeAmount}
                                categoryOption={categoryOption}
                                selectedCategory={category}
                                onCategorySelect={onCategorySelect}
                                month={monthAndDate}
                                onDateIconClick={() => setShowCalendar(!showCalendar)}
                                onDayPress={onDayPress}
                                maxDate={maxDate}
                                show={showCalendar}
                            // errors={errors}
                            />
                        </View>

                    </View>
                    <CustomModal showModal={modalVisible} closeModal={onCloseModal}>
                        <View>
                            {/*Cat Title */}
                            <Input
                                label='Category title'
                                placeholderText='Enter the title'
                                value={newCategory.title}
                                onChange={(value: string) => {
                                    onChangeCatTitle(value)
                                }}
                            />

                            {/* Cat Icon */}
                            <Dropdown
                                label='Choose icon'
                                customButton={(selectedItem: any) => {
                                    return (
                                        <View style={styles.selectInput}>
                                            {selectedItem ? (
                                                <Image source={selectedItem.image} style={styles.selectedIcon} />
                                            ) : (
                                                // <Ionicons name="md-earth-sharp" color={'#444'} size={32} />
                                                null
                                            )}
                                            <Text style={[styles.selectText, {
                                                color: selectedItem ? '#000' : '#0000005E',
                                                paddingHorizontal: selectedItem ? 10 : 0
                                            }]}>{selectedItem ? selectedItem.title : 'Choose icon'}</Text>
                                        </View>
                                    );
                                }}
                                customRow={(item: any) => {
                                    return (
                                        <View style={styles.dropdown3RowChildStyle}>
                                            <Image source={item.image} style={styles.dropdownRowImage} />
                                            <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                                        </View>
                                    );
                                }}
                                selectedvalue={newCategory.iconName}
                                options={icons}
                                onSelect={onIconSelect}
                            />

                            {/* Cat color */}
                            <Dropdown
                                label='Choose color'
                                selectedvalue={newCategory.color}
                                options={colorOption}
                                onSelect={onCatColorSelect}
                                customButton={(selectedItem: any) => {
                                    return (
                                        <View style={styles.selectColorInput}>
                                            {selectedItem ? (
                                                <View style={[styles.color, { backgroundColor: selectedItem.color }]} />
                                            ) : (
                                                null
                                            )}
                                            <Text style={[styles.selectText, {
                                                color: selectedItem ? '#000' : '#0000005E',
                                                paddingHorizontal: selectedItem ? 10 : 0
                                            }]}>{selectedItem ? selectedItem.title : 'Choose color'}</Text>
                                        </View>
                                    );
                                }}
                                customRow={(item: any) => {
                                    return (
                                        <View style={styles.colorRow}>
                                            <View style={[styles.color, { backgroundColor: item.color }]} />
                                            <Text style={styles.colorText}>{item.title}</Text>
                                        </View>
                                    );
                                }}
                            />

                            {/* cat add */}
                            <CustomButton
                                text='Add category'
                                onClick={handleAddCategory}
                            />
                        </View>
                    </CustomModal>
                </ScrollView>
                <Footer
                    onPressAdd={() => navigation.navigate('Home')}
                />
            </>
        </BackgroundLayout>
    )
}

const styles = StyleSheet.create({
    addBlk: {
        padding: 16,
        flex: 1,
        marginBottom: 40
    },
    addCenter: {
        flex: 1
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
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: 30,
    },
    dropdown3BtnStyle: {
        // width: '80%',
        height: 50,
        backgroundColor: '#FFF',
        paddingHorizontal: 0,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#444',
    },
    selectInput: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    selectColorInput: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    selectedIcon: { width: 30, height: 30, resizeMode: 'cover' },
    selectText: {
        textAlign: 'center',
        fontSize: 18,
    },

    dropdown3RowChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    dropdownRowImage: { width: 30, height: 30, resizeMode: 'cover' },
    dropdown3RowTxt: {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 18,
        marginHorizontal: 12,
    },
    colorRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    color: {
        width: 30,
        height: 30,
        backgroundColor: 'red',
        borderRadius: 50,
        marginRight: 10,
    },
    colorText: {
        color: '#000',
        fontSize: 18
    },
});

export default Add