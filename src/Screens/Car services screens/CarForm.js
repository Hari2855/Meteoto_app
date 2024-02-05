import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image, TextInput, Button, ScrollView, } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Datemodel from './Datemodel'
import BookServiceModel from './BookServiceModel'
import { RadioButton } from 'react-native-paper'

const CarForm = ({ navigation }) => {
    const [date, setDate] = useState(false);
    const [service, setService] = useState(false);
    const [checked, setchecked] = useState('first');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [issue, setIssue] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedHour, setSelectedHour] = useState('1');
    const [selectedMinute, setSelectedMinute] = useState('00');
    const [selectedPeriod, setSelectedPeriod] = useState('AM');


    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    const handleHourSelect = (hour) => {
        setSelectedHour(hour); 
    };

    const handleMinuteSelect = (minute) => {
        setSelectedMinute(minute);
    };

    const handlePeriodSelect = (period) => {
        setSelectedPeriod(period); 
    };

    const areDetailsFilled = () => {
        return name && number && issue
    };

    const toggleModal = () => {
        setDate(!date);
    };

    const toggleModal1 = () => {
        setService(!service);
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ height: moderateScale(880) }}>
                <View style={styles.header}>
                    <Pressable style={styles.icons} onPress={() => navigation.navigate('Home')}>
                        <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
                    </Pressable>

                    <Text style={styles.TEXT}>CAR SERVICES</Text>
                </View>

                <View style={styles.cardetails}>
                    <View style={styles.details}>
                        <View style={styles.dcontainer}>
                            <Image source={require('../icon/imges/Ellipse24.png')} style={styles.imge} />

                            <View style={{ marginLeft: moderateScale(8) }}>
                                <Text style={styles.Text1}>Hyundai Verna</Text>
                                <Text style={styles.Text2}>{`Verna SX Turbo DT \nPetrol`}</Text>
                            </View>
                        </View>
                        <Pressable style={styles.edit} onPress={() => navigation.navigate('CarService')}>
                            <Image source={require('../icon/imges/Vector.png')} style={styles.img} />
                        </Pressable>
                    </View>
                </View>

                {/* <View style={styles.line}></View> */}

                <Text style={styles.Text3}>Full Name</Text>
                <View style={styles.namecontainer}>
                    <TextInput placeholder='Enter your name' style={styles.name}
                        value={name}
                        onChangeText={(text) => setName(text)}
                    >
                    </TextInput>
                </View>

                <Text style={[styles.Text3, { marginTop: moderateScale(20) }]}>Contact Number</Text>
                <View style={styles.namecontainer}>
                    <TextInput placeholder='+91XXXXXXXX' keyboardType='numeric' style={styles.name}
                        value={number}
                        onChangeText={(text) => setNumber(text)}
                    >
                    </TextInput>
                </View>

                <Text style={[styles.Text3, { marginTop: moderateScale(20) }]}>Vehicle Issues</Text>
                <View style={styles.descriptionC}>
                    <TextInput placeholder='Add short description of your vehicle issues' style={styles.description}
                        value={issue}
                        onChangeText={(text) => setIssue(text)}
                    >
                    </TextInput>
                </View>

                <Text style={[styles.Text3, { marginTop: moderateScale(20) }]}>Select Date & Time</Text>
                <Pressable onPress={toggleModal} style={styles.date}>
                    {selectedDate == null ? <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.selectedText, {marginLeft: moderateScale(20)}]}>
                            Tomorrow
                        </Text>
                        <Text style={[styles.selectedText, { marginLeft: moderateScale(70) }]}>
                            6 : 00 AM
                        </Text>
                        <Image source={require('../icon/imges/Clock1.png')} style={{height: scale(24), width: scale(24), marginLeft: moderateScale(80), bottom: moderateScale(3)}}/>
                    </View> :
                    <Text style={styles.selectedText}>
                        {selectedDate} {selectedHour}:{selectedMinute} {selectedPeriod}
                    </Text>}
                </Pressable>
                <Datemodel
                    isVisible={date}
                    closeModal={toggleModal}
                    onSelectDate={handleDateSelect}
                    selectedHour={selectedHour}
                    selectedMinute={selectedMinute}
                    selectedPeriod={selectedPeriod}
                    onSelectHour={handleHourSelect}
                    onSelectMinute={handleMinuteSelect}
                    onSelectPeriod={handlePeriodSelect}
                />

                <Text style={{ fontSize: moderateScale(16), fontWeight: '400', color: '#ffffff', marginLeft: moderateScale(20), marginTop: moderateScale(20) }}>Select your preference</Text>
                <View style={styles.optioncontainer}>
                    <RadioButton
                        value="Second"
                        status={checked === 'Second' ? 'checked' : 'unchecked'}
                        onPress={() => setchecked('Second')}
                        uncheckedColor='#cbcbcb'
                        color='#33CCCC'
                    />

                    <Text style={{ fontSize: moderateScale(16), fontWeight: '500', color: '#ffffff' }}>Pickup my car</Text>
                </View>

                <View style={[styles.optioncontainer, { width: moderateScale(161) }]}>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setchecked('first')}
                        uncheckedColor='#cbcbcb'
                        color='#33CCCC'
                    />

                    <Text style={{ fontSize: moderateScale(16), fontWeight: '500', color: '#ffffff', right: moderateScale(4) }}>Drop to Garage</Text>
                </View>
            </ScrollView>

            <Pressable
                style={[styles.button, { backgroundColor: areDetailsFilled() == false ? 'gray' : '#33CCCC' }]}
                onPress={() => {
                    if (areDetailsFilled()) {
                        toggleModal1();
                    } else {
                        console.log("Please fill all details");
                    }
                }}
                disabled={!areDetailsFilled()}
            >
                <Text style={styles.Text4}>BOOK SERVICE</Text>
            </Pressable>
            <BookServiceModel isVisible={service} closeModal={toggleModal1} navigation={navigation} />
        </View>
    )
}

export default CarForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    header: {
        width: moderateScale(360),
        height: verticalScale(60),
        alignItems: 'center',
        flexDirection: 'row',
        // borderWidth: 1, 
        // borderColor: 'red'
    },
    icons: {
        width: scale(48),
        height: scale(48),
        alignItems: 'center',
        justifyContent: 'center',
        bottom: moderateScale(10)
    },
    imges: {
        width: scale(24),
        height: scale(16),
        tintColor: '#ffffff',
        marginLeft: moderateScale(20)
    },
    TEXT: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(85),
        bottom: moderateScale(10)
    },
    cardetails: {
        width: moderateScale(320),
        height: verticalScale(88),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
    },
    details: {
        width: moderateScale(306),
        height: verticalScale(60),
        // alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: moderateScale(10)
    },
    dcontainer: {
        width: moderateScale(203),
        height: verticalScale(60),
        flexDirection: 'row'
    },
    edit: {
        width: scale(48),
        height: scale(48),
        borderRadius: scale(20),
        borderWidth: 1,
        borderColor: '#999999',
        alignItems: 'center',
        justifyContent: 'center',
        left: moderateScale(10)
    },
    img: {
        width: scale(24),
        height: scale(24),
        tintColor: 'black'
    },
    circle: {
        width: scale(60),
        height: scale(60),
        borderRadius: scale(30),
        borderWidth: 2,
        borderColor: '#C29802',
        // backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imge: {
        height: scale(50),
        width: scale(50),
        borderRadius: scale(25)
    },
    Text1: {
        color: '#383838',
        fontSize: moderateScale(16),
        fontWeight: '400'
    },
    Text2: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#9e9e9e'
    },
    // line: {
    //     width: scale(360),
    //     borderWidth: 0.5,
    //     borderColor: '#444444',
    //     marginTop: moderateScale(10)
    // },
    Text3: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: '#ffffff',
        marginLeft: moderateScale(18),
        marginTop: moderateScale(30)
    },
    namecontainer: {
        width: moderateScale(320),
        height: verticalScale(48),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        paddingLeft: moderateScale(10)
    },
    name: {
        width: moderateScale(320),
        height: verticalScale(48),
    },
    descriptionC: {
        width: moderateScale(320),
        height: verticalScale(120),
        borderRadius: moderateScale(8),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        paddingLeft: moderateScale(10),
    },
    description: {
        width: moderateScale(310),
        height: verticalScale(120),
        bottom: moderateScale(40),
    },
    date: {
        width: moderateScale(320),
        height: verticalScale(48),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    selectedText: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#333333',
        fontFamily: 'Nunito'
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        backgroundColor: '#33CCCC',
        borderRadius: moderateScale(5),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: moderateScale(30)
    },
    Text4: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    },
    optioncontainer: {
        width: moderateScale(149),
        height: verticalScale(40),
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: moderateScale(12),
        justifyContent: 'space-between',
        marginTop: moderateScale(10)
    }
})