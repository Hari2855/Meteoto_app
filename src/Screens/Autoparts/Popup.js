import React, { useState, useEffect } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';

const Popup = ({ isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 6000);

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
                    <Text style={styles.text}>Changes Saved</Text>
                </View>
        </Modal>
    );
};

export default Popup;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E1FFB0', 
        height: scale(40), 
        width: scale(360),
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#333333'
    }
})
