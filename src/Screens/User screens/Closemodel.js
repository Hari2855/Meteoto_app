import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient';

const Closemodel = ({ navigation, isVisible, closeModal }) => {
    
    const Navigation = () => {
        navigation.navigate('Myorders')
    }

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            backdropOpacity={0.5}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            style={{ margin: 0, justifyContent: 'flex-end', }}
        >

            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#6e7474', '#58646a', '#203C52']} style={styles.container}>
                <View style={styles.container1}>
                    <Text style={styles.text1}>We are continuously improving our</Text>
                    <Text style={styles.text1}>services & hope next time we could serve </Text>
                    <Text style={styles.text1}>you better!</Text>
                </View>

                <View style={styles.line1}></View>

                <Image source={require('../icon/imges/smile.png')} style={styles.img} />

                <Text style={styles.text2}>ORDER CANCELLED</Text>

                <Pressable style={styles.button} onPress={Navigation}>
                    <Text style={styles.text3}>CLOSE</Text>
                </Pressable>
            </LinearGradient>
        </Modal>
    );
}

export default Closemodel

const styles = StyleSheet.create({
    container: {
        width: moderateScale(360),
        backgroundColor: '#333333',
        elevation: 5,
        height: verticalScale(610),
        borderTopLeftRadius: (30),
        borderTopRightRadius: (30)
    },
    container1: {
        width: scale(320),
        height: scale(72),
        marginLeft: moderateScale(20),
        marginTop: moderateScale(56),
    },
    text1: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
    },
    line1: {
        width: moderateScale(360),
        height: verticalScale(0.5),
        backgroundColor: '#ffffff',
        marginTop: moderateScale(10)
    },
    img: {
        width: scale(180),
        height: scale(180),
        alignSelf: 'center',
        marginTop: moderateScale(120)
    },
    text2: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(80)
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderWidth: 1,
        borderColor: '#33CCCC',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(15),
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#33CCCC'
    }

})