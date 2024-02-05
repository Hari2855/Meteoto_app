import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image, TextInput, ScrollView } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const Time = ({ navigation }) => {
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
                <Pressable style={styles.icons} onPress={() => navigation.navigate('WindShield')}>
                    <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
                </Pressable>

                <Text style={styles.TEXT}>WINDSHIELD</Text>
            </View>

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

            <Pressable style={styles.button} onPress={() => navigation.navigate('Windmap')}>
                <Text style={styles.Text6}>BOOK NOW</Text>
            </Pressable>
        </View>
    )
}

export default Time

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
        // borderColor: '#ffffff'
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
        marginLeft: moderateScale(95),
        bottom: moderateScale(10)
    },
    little: {
        width: moderateScale(72),
        height: verticalScale(2),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(10),
        alignSelf: 'center',
        marginTop: moderateScale(60),
        bottom: moderateScale(5)
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(450)
    },
    Text6: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
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
})