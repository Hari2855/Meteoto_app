import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable, Alert, Modal } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const Test = () => {
    const [screen, setScreen] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View style={styles.container1}>
            <View style={styles.textContainer1}>
                <Text style={styles.text1}>WE ARE FINDING BEST MECHANIC</Text>
                <Text style={styles.text1}>FOR YOU!</Text>
            </View>

            <View style={styles.circle1}>
                <View style={styles.circle2}>
                    <View style={styles.circle3}>
                        <View style={styles.circle4}>
                            <View style={styles.circle5}>
                                <Image source={require('./Screens/icon/imges/Ellips.png')} style={styles.img} />
                                <Image source={require('./Screens/icon/gif-icons/Search.gif')} style={styles.imgs} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable  style={styles.modalButton1}>
                            <Text style={[styles.modalButtonText, { color: '#33CCCC' }]}>Yes</Text>
                        </Pressable>
                        <Pressable  style={[styles.modalButton2, { marginLeft: moderateScale(20) }]}>
                            <Text style={styles.modalButtonText}>No</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
        </View>
    )
}

export default Test

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#333333'
    },
    textContainer: {
        width: moderateScale(360),
        height: verticalScale(60),
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: moderateScale(16),
        color: '#ff9966',
        fontWeight: '700'
    },
    textContainer1: {
        width: moderateScale(320),
        height: verticalScale(56),
        alignSelf: 'center',
        marginTop: moderateScale(70),
        alignItems: 'center',
        justifyContent: 'center'
    },
    text1: {
        color: '#ffffff',
        fontSize: moderateScale(16),
        fontWeight: '500'
    },
    circle1: {
        height: scale(450),
        width: scale(450),
        borderRadius: scale(300),
        borderWidth: 2,
        borderColor: '#505353',
        alignSelf: 'center',
        marginTop: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle2: {
        height: scale(370),
        width: scale(370),
        borderRadius: scale(250),
        borderWidth: 2,
        borderColor: '#505353',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle3: {
        height: scale(290),
        width: scale(290),
        borderRadius: scale(200),
        borderWidth: 2,
        borderColor: '#505353',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle4: {
        height: scale(210),
        width: scale(210),
        borderRadius: scale(120),
        borderWidth: 2,
        borderColor: '#505353',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle5: {
        height: scale(130),
        width: scale(130),
        borderRadius: scale(80),
        borderWidth: 2,
        borderColor: '#505353',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column'
    },
    button: {
        width: scale(320),
        height: scale(40),
        borderWidth: 1,
        borderColor: '#33cccc',
        alignSelf: 'center',
        marginTop: moderateScale(30),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(5)
    },
    text2: {
        fontSize: moderateScale(12),
        color: '#33cccc',
        fontWeight: '500'
    },
    img: {
        bottom: moderateScale(108),
        right: moderateScale(22)
    },
    imgs: {
        width: scale(50),
        height: scale(50),
        borderRadius: scale(40),
        bottom: moderateScale(70),
        left: moderateScale(5)
    },
    modalView: {
        margin: 20,
        backgroundColor: '#666666',
        width: moderateScale(200),
        height: verticalScale(200),
        alignItems: 'center',
        elevation: 5,
        flexDirection: 'row'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalText: {
        fontSize: moderateScale(16),
        marginBottom: (20),
        color: '#ffffff'
    },
    modalButton1: {
        width: scale(136),
        height: scale(40),
        borderRadius: scale(5),
        borderWidth: 1,
        borderColor: '#33CCCC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalButton2: {
        backgroundColor: '#33CCCC',
        width: scale(136),
        height: scale(40),
        borderRadius: scale(5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: moderateScale(12),
        fontWeight: '500'
    },
});