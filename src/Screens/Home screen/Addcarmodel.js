import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, PermissionsAndroid } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import Addcar from '../User screens/Addcar';

const Addcarmodel = ({ navigation, isVisible, closeModal1 }) => {

   const Nav = () => {
    closeModal1
    navigation.navigate('Addcar')
   }

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal1}
            backdropOpacity={0.5}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            style={{ margin: 0, justifyContent: 'flex-end' }}
        >
            <Pressable style={styles.container} onPress={closeModal1}>
                <View style={styles.shape}></View>
                <View style={styles.box}>
                    <View style={styles.box2}>
                        <Image source={require('../icon/imges/Car1.png')} style={styles.img} />
                        <Text style={styles.text}>ADD CAR</Text>
                    </View>

                    <Text style={[styles.text1, { marginTop: moderateScale(10) }]}>{`It will be easier for you to start using \nservices once you add a car.`}</Text>
                    <Pressable style={styles.press} onPress={Nav}>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#33CCCC', alignSelf: 'flex-end' }}>Add Car</Text>
                    </Pressable>
                </View>
            </Pressable>
        </Modal>
    );
}
export default Addcarmodel

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333',
        elevation: 5,
        alignItems: 'center',
        height: verticalScale(220),
        width: moderateScale(360)
    },
    shape: {
        height: verticalScale(4),
        width: scale(68),
        backgroundColor: '#545357',
        borderRadius: moderateScale(10),
        marginTop: moderateScale(15)
    },
    box: {
        width: moderateScale(320),
        height: verticalScale(124),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        marginTop: moderateScale(40)
    },
    box2: {
        width: moderateScale(320),
        height: verticalScale(36),
        borderBottomWidth: 1,
        borderBottomColor: '#999999',
        alignItems: 'center',
        flexDirection: 'row'
    },
    img: {
        width: scale(24),
        height: scale(24),
        marginLeft: moderateScale(10)
    },
    text: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#999999',
        marginLeft: moderateScale(5)
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#333333',
        alignSelf: 'center',
    },
    press: {
        top: moderateScale(15),
        marginRight: moderateScale(20)
    }
})