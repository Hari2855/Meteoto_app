import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Aadharcarmodel from './Aadharcardmodel'

const Saveddoc = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false)

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }

    return (
        <View style={styles.container1}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('User')}>
                    <MaterialIcons name='keyboard-arrow-left' color={'#ffffff'} size={24} style={{ marginLeft: moderateScale(15) }} />
                </Pressable>

                <Text style={styles.text1}>MY DOCUMENTS</Text>
            </View>

            <View style={styles.container2}>
                <Image source={require('../icon/profile-options-img/Gif/Copy.gif')} style={{ width: scale(80), height: scale(84) }} />
                <Text style={styles.text2}>{`FIND ALL YOUR DOCS \nAT ONE PLACE`}</Text>
            </View>

            <View style={styles.line1}></View>

            <Text style={styles.text3}>MY DOCS</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Pressable style={styles.box}>
                    <View style={styles.box1}>
                        <View style={styles.circle}>
                            <Image source={require('../icon/Profile-section-imgs/profile-options-img/static/Copy.png')} style={{ width: scale(32), height: scale(32) }} />
                        </View>
                    </View>

                    <View style={{ width: moderateScale(156), height: verticalScale(40), flexDirection: 'column', marginLeft: moderateScale(15), }}>
                        <Text style={styles.text4}>Driving License</Text>
                        <Text style={styles.text5}>Uploaded on: 21-08-2023</Text>
                    </View>
                </Pressable>

                <Pressable style={styles.box} onPress={toggleModal}>
                    <View style={styles.box1}>
                        <View style={styles.circle}>
                            <Image source={require('../icon/Profile-section-imgs/profile-options-img/static/Copy.png')} style={{ width: scale(32), height: scale(32) }} />
                        </View>
                    </View>

                    <View style={{ width: moderateScale(156), height: verticalScale(40), flexDirection: 'column', marginLeft: moderateScale(15), }}>
                        <Text style={styles.text4}>Aadhar Card</Text>
                        <Text style={styles.text5}>Uploaded on: 21-08-2023</Text>
                    </View>
                </Pressable>
                <Aadharcarmodel isVisible={isModalVisible} closeModal={toggleModal} />
            </ScrollView>

            <View style={styles.box2}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Deletedoc')}>
                    <Text style={styles.text6}>MANAGE DOC</Text>
                </Pressable>

                <Pressable style={[styles.button, { borderWidth: 0, backgroundColor: '#33CCCC' }]} onPress={() => navigation.navigate('Uploaddoc')}>
                    <Text style={[styles.text6, { color: '#ffffff' }]}>ADD DOC</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Saveddoc

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#333333'
    },
    header: {
        flexDirection: 'row',
        height: verticalScale(60),
        backgroundColor: '#333333',
        alignItems: 'center',
    },
    text1: {
        color: '#ffffff',
        fontSize: moderateScale(12),
        fontWeight: '500',
        marginLeft: moderateScale(90),
        marginBottom: moderateScale(5)
    },
    container2: {
        width: scale(320),
        height: verticalScale(124),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    text2: {
        color: '#000000',
        fontSize: moderateScale(16),
        fontWeight: '500',
    },
    line1: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#929292',
        marginTop: moderateScale(40)
    },
    text3: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        marginTop: moderateScale(20),
        marginLeft: moderateScale(20)
    },
    box: {
        width: moderateScale(320),
        height: verticalScale(84),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        marginTop: moderateScale(10),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    box1: {
        width: moderateScale(84),
        height: verticalScale(84),
        borderRightWidth: 1,
        borderRightColor: '#a2a2a2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle: {
        width: scale(60),
        height: scale(60),
        borderRadius: scale(30),
        borderWidth: 1,
        borderColor: '#33CCCC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text4: {
        fontSize: moderateScale(16),
        fontWeight: '700',
        color: '#333333'
    },
    text5: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#666666'
    },
    box2: {
        width: moderateScale(320),
        height: verticalScale(40),
        alignSelf: 'center',
        marginTop: moderateScale(60),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: moderateScale(152),
        height: verticalScale(40),
        borderWidth: 1,
        borderColor: '#33CCCC',
        borderRadius: moderateScale(5),
        alignItems: 'center',
        justifyContent: 'center',
        bottom: moderateScale(20)
    },
    text6: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#33CCCC'
    }

})