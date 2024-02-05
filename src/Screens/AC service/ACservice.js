import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import { scale, verticalScale, moderateScale, } from 'react-native-size-matters'
import React, { useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker'


const ACservice = ({ navigation }) => {
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [datePickerVisible, setDatePickerVisible] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleConfirm = (date) => {
        setSelectedTime(date);
        hideDatePicker();
    };

    const formatTime = (date) => {
        const options = { hour: '2-digit', minute: '2-digit', hour12: true };
        return date.toLocaleTimeString('en-US', options);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.icons} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
                </Pressable>
                <Text style={styles.TEXT}>AC SERVICE</Text>
            </View>

            <Text style={styles.Text3}>{`CONFIRM CAR DETAILS BEFORE \nBOOKING`}</Text>

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
                        <Image source={require('../icon/imges/Edit1.png')} style={styles.img} />
                    </Pressable>
                </View>
            </View>
            <Text style={styles.Text4}>Car Selected</Text>
            <View style={styles.line1}></View>
            <Text style={styles.Text5}>Select time (for today)</Text>
            <Pressable style={styles.timecontainer} onPress={showDatePicker}>
                <Text style={{ fontSize: moderateScale(12), fontWeight: '500' }}>
                    {selectedTime ? formatTime(selectedTime) : 'No date selected'}
                </Text>
                <Image source={require('../icon/imges/Clock1.png')} style={styles.img1} />
            </Pressable>
            <DateTimePickerModal
                date={selectedTime}
                isVisible={datePickerVisible}
                mode="time"
                is24Hour={false} // Set this to false to enable AM/PM picker
                locale="en_GB"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

            <Pressable style={styles.button} onPress={() => navigation.navigate('Electronicmap')}>
                <Text style={styles.text1}>BOOK NOW</Text>
            </Pressable>
        </View>
    )
}

export default ACservice

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
        elevation: 10
    },
    icons: {
        width: scale(48),
        height: scale(48),
        alignItems: 'center',
        justifyContent: 'center'
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
        marginLeft: moderateScale(95)
    },
    cardetails: {
        width: moderateScale(320),
        height: verticalScale(88),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(15)
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
    Text3: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20)
    },
    Text4: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#33CCCC',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(5)
    },
    line1: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(15)
    },
    Text5: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20)
    },
    timecontainer: {
        width: moderateScale(320),
        height: verticalScale(48),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        marginTop: moderateScale(10),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    img1: {
        width: scale(24),
        height: scale(24),
        marginLeft: moderateScale(200)
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(260)
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    }
})