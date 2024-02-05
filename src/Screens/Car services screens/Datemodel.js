import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const Datemodel = ({
    isVisible,
    closeModal,
    onSelectDate,
    selectedHour,
    selectedMinute,
    selectedPeriod,
    onSelectHour,
    onSelectMinute,
    onSelectPeriod,
}) => {
    const [selectedDate, setSelectedDate] = useState('Today');

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        onSelectDate(date);
    };

    const handleHourSelect = (hour) => {
        onSelectHour(hour);
    };

    const handleMinuteSelect = (minute) => {
        onSelectMinute(minute);
    };

    const handlePeriodSelect = (period) => {
        onSelectPeriod(period);
    };

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            backdropOpacity={0.5}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            style={{ margin: 0, justifyContent: 'flex-end' }}
        >
            <View style={styles.container}>
                <View style={styles.shape}></View>

                <Text style={styles.text1}>SELECT DATE & TIME</Text>
                <View style={styles.line}></View>

                <View style={styles.container1}>
                    <ScrollView style={styles.column} showsVerticalScrollIndicator={false}>
                        <TouchableOpacity onPress={() => handleDateSelect('Today')}>
                            <Text style={selectedDate === 'Today' ? styles.selectedText : styles.text}>Today</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleDateSelect('Tomorrow')}>
                            <Text style={selectedDate === 'Tomorrow' ? styles.selectedText : styles.text}>Tomorrow</Text>
                        </TouchableOpacity>
                    </ScrollView>

                    <ScrollView style={styles.column} showsVerticalScrollIndicator={false}>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                            <TouchableOpacity key={hour} onPress={() => handleHourSelect(hour.toString())}>
                                <Text style={selectedHour === hour.toString() ? styles.selectedText : styles.text}>{hour}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <ScrollView style={styles.column} showsVerticalScrollIndicator={false}>
                        {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')).map((minute) => (
                            <TouchableOpacity key={minute} onPress={() => onSelectMinute(minute)}>
                                <Text style={selectedMinute === minute ? styles.selectedText : styles.text}>{minute}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <ScrollView style={styles.column} showsVerticalScrollIndicator={false}>
                        <TouchableOpacity onPress={() => onSelectPeriod('AM')}>
                            <Text style={selectedPeriod === 'AM' ? styles.selectedText : styles.text}>AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onSelectPeriod('PM')}>
                            <Text style={selectedPeriod === 'PM' ? styles.selectedText : styles.text}>PM</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

export default Datemodel;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333',
        elevation: 5,
        height: verticalScale(360),
    },
    shape: {
        height: verticalScale(4),
        width: moderateScale(32),
        backgroundColor: '#545357',
        borderRadius: moderateScale(10),
        marginTop: moderateScale(10),
        alignSelf: 'center',
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        marginTop: moderateScale(60),
        left: moderateScale(20),
    },
    line: {
        width: moderateScale(360),
        height: 1,
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(15),
    },
    container1: {
        flexDirection: 'row',
    },
    column: {
        flex: 1,
        padding: 16,
        marginLeft: moderateScale(10),
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    text: {
        fontSize: 12,
        marginBottom: 8,
        color: '#989898',
    },
    selectedText: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 8,
    },
});
