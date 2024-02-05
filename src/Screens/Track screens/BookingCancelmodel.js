import React, { useState, useEffect } from 'react';
import { View, Text, Modal, StyleSheet, Image } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';

const BookingCancelmodel = ({ isVisible1, onClose, navigation }) => {


    useEffect(() => {
        if (isVisible1) {
            const timer = setTimeout(() => {
                onClose
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [isVisible1]);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible1}
        >

            <View style={styles.container}>
                <View style={styles.circle}>
                    <Image source={require('../icon/Icons/img-done.png')} style={styles.img} />
                </View>
                <Text style={styles.text}>BOOKING CANCELED</Text>
            </View>
        </Modal>
    );
};

export default BookingCancelmodel;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF9966',
        height: scale(48),
        width: scale(280),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: moderateScale(70),
        alignSelf: 'center',
        borderRadius: moderateScale(5)

    },
    circle: {
        width: scale(32),
        height: scale(32),
        borderRadius: scale(20),
        backgroundColor: '#ffffff',
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: scale(24),
        height: scale(24),
        borderRadius: scale(15)
    },
    text: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        right: moderateScale(30)
    }
})
