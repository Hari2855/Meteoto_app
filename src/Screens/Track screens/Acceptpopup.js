import React, { useState, useEffect } from 'react';
import { View, Text, Modal, StyleSheet, Image } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';

const Acceptpopup = ({ isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible == true) {
            const timer = setTimeout(() => {
                onClose
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [isVisible]);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
        >

            <View style={styles.container}>
                <View style={styles.circle}>
                    <Image source={require('../icon/Icons/tic.png')} style={styles.img} />
                </View>
                <Text style={styles.text}>REQUEST ACCEPETED</Text>
            </View>
        </Modal>
    );
};

export default Acceptpopup;

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
