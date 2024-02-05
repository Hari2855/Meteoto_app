import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, PermissionsAndroid } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import Addcarmodel from './Addcarmodel';

const Locationmodel = ({ navigation, isVisible, closeModal }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        closeModal
        setModalVisible(!isModalVisible);
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
            <Pressable style={styles.container} onPress={closeModal}>
                <View style={styles.shape}></View>
                <View style={styles.box}>
                    <View style={styles.box2}>
                        <Image source={require('../icon/imges/map1.png')} style={styles.img} />
                        <Text style={styles.text}>LOCATION PERMISSION</Text>
                    </View>

                    <Text style={[styles.text1, { marginTop: moderateScale(10) }]}>{`App requires your accurate location permission. It \nwill allow you to use app services.`}</Text>
                    <Pressable style={styles.press} onPress={toggleModal}>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#33CCCC', alignSelf: 'flex-end' }}>Allow</Text>
                    </Pressable>
                    <Addcarmodel isVisible={isModalVisible} closeModal1={toggleModal} navigation={navigation}/>
                </View>
            </Pressable>
        </Modal>
    );
}
export default Locationmodel

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