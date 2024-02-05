import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, ScrollView, } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';

const CarVarientmodel = ({ navigation, isVisible, closeModal }) => {

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

                <Text style={styles.text1}>SELECT YOUR CAR VARIANT</Text>

                <View style={styles.line}></View>

                <View style={styles.input}>
                    <TextInput style={styles.textinput} placeholder='Search your car variant' placeholderTextColor={'#737373'}></TextInput>
                    <Pressable>
                        <Ionicons name='search-outline' color={'#ffffff'} size={(24)} style={{ right: moderateScale(40) }} />
                    </Pressable>
                </View>

                <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                    <Text style={styles.text2}>Manual</Text>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#33CCCC', '#ffffff', '#414141',]} style={styles.lig1} />
                    <View style={styles.boxContainer}>
                        <Pressable style={styles.box} onPress={() => navigation.navigate('Autoparsmenu')}>
                            <Text style={styles.text3}>Verna SX Turbo DT/Petrol</Text>
                        </Pressable>
                        <Pressable style={styles.box}>
                            <Text style={styles.text3}>Verna SX/Petrol</Text>
                        </Pressable>
                        <Pressable style={styles.box}>
                            <Text style={styles.text3}>Verna SX Turbo DT/Diesel</Text>
                        </Pressable>
                        <Pressable style={styles.box}>
                            <Text style={styles.text3}>Verna SX Turbo DT/Diesel</Text>
                        </Pressable>
                    </View>

                    <Text style={[styles.text2, { marginTop: moderateScale(20) }]}>Automatic</Text>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#33CCCC', '#ffffff', '#414141',]} style={styles.lig1} />
                    <View style={styles.boxContainer1}>
                        <Pressable style={styles.box}>
                            <Text style={styles.text3}>Verna SX Turbo DT/Petrol</Text>
                        </Pressable>
                        <Pressable style={styles.box}>
                            <Text style={styles.text3}>Verna SX Turbo DT/Petrol</Text>
                        </Pressable>
                        <Pressable style={styles.box}>
                            <Text style={styles.text3}>Verna SX Turbo DT/Petrol</Text>
                        </Pressable>
                        <Pressable style={styles.box}>
                            <Text style={styles.text3}>Verna SX Turbo DT/Petrol</Text>
                        </Pressable>
                        <Pressable style={styles.box}>
                            <Text style={styles.text3}>Verna SX Turbo DT/Petrol</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </Pressable>
        </Modal>
    );
}

export default CarVarientmodel

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
        elevation: 5,
        alignItems: 'center',
        height: verticalScale(450),
        width: '100%',
        position: 'absolute'
    },
    shape: {
        height: verticalScale(4),
        width: scale(32),
        backgroundColor: '#545357',
        borderRadius: moderateScale(10),
        marginTop: moderateScale(10)

    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        alignSelf: 'flex-start',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(40)
    },
    line: {
        width: scale(360),
        height: moderateScale(1),
        backgroundColor: '#4c4c4c',
        marginTop: moderateScale(15)
    },
    input: {
        width: moderateScale(360),
        height: verticalScale(52),
        borderRadius: moderateScale(5),
        marginTop: moderateScale(30),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textinput: {
        width: moderateScale(320),
        height: verticalScale(52),
        color: 'white',
        borderWidth: 1,
        borderRadius: moderateScale(8),
        left: moderateScale(20),
        borderColor: '#ffffff',
        paddingLeft: moderateScale(20),
    },
    scroll: {
        width: moderateScale(320),
        alignSelf: 'center',
        marginTop: moderateScale(30),
        flexDirection: 'column',
        // borderWidth: 1,
        // borderColor: 'blue'
    },
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff'
    },
    lig1: {
        width: scale(320),
        height: scale(1),
        alignSelf: 'center',
        marginTop: moderateScale(3)
    },
    boxContainer: {
        width: moderateScale(320),
        height: verticalScale(168),
        marginTop: moderateScale(15),
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    box: {
        width: scale(315),
        height: scale(36),
        borderRadius: scale(5),
        backgroundColor: '#ffffff',
        justifyContent: 'center'
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#333333',
        marginLeft: moderateScale(8)
    },
    boxContainer1: {
        width: moderateScale(320),
        height: verticalScale(204),
        marginTop: moderateScale(15),
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
})