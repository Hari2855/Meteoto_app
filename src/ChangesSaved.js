import React, { useState, useEffect } from 'react';
import { View, Text, Modal, StyleSheet, Image } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';

const ChangesSaved = ({ isVisible, onClose }) => {
    useEffect(() => {
            const timer = setTimeout(() => {
                onClose
            }, 6000);

            return () => {
                clearTimeout(timer);
            };
    }, []);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
        >

            <View style={styles.container}>
                <View style={styles.circle}>
                    <Image source={require('./Screens/icon/Icons/tic.png')} style={styles.img} />
                </View>
                <Text style={styles.text}>CHANGES ARE SAVED!</Text>
            </View>
        </Modal>
    );
};

export default ChangesSaved;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#99CC33',
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
