import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const MyDocumentmodel = ({ isVisible, navigation }) => {

    return (
        <Modal isVisible={isVisible} backdropOpacity={0.5}>

            <View style={styles.modalContent}>
                <Image source={require('../icon/profile-options-img/Gif/safe.gif')} style={styles.img} />
                <Text style={[styles.text1, { marginTop: moderateScale(15) }]}>Document Uploaded Successfully!</Text>
                <Text style={styles.text1}>Successfully!</Text>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: '#ffffff',
        padding: moderateScale(30),
        width: moderateScale(320),
        height: verticalScale(220),
        borderRadius: moderateScale(10),
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: moderateScale(35)
    },
    img: {
        width: scale(100),
        height: scale(100)
    },
    text1: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: '#333333',
    }
});

export default MyDocumentmodel;
