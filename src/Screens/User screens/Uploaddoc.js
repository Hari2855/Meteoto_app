import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import DocumentPicker from 'react-native-document-picker'
import Fileuploadmodel from './Fileuploadmodel'
import MyDocumentmodel from './Mydocmodel'

const Uploaddoc = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible1, setModalVisible1] = useState(false);
    const [state, setstate] = useState(0)


    const toggleModal = () => {
        if (selectdocument) {
            setModalVisible(!isModalVisible);
        }
    };

    const toggleModal1 = () => {
        if (state == 1 && selectdocument) {
            setModalVisible1(!isModalVisible1);
        }
    };

    if (isModalVisible1 == true) {
        setTimeout(() => {
            toggleModal1(),
                navigation.navigate('MyDocuments');
        }, 3000);
    }


    const selectdocument = async () => {
        try {
            const doc = await DocumentPicker.pickSingle({ type: [DocumentPicker.types.pdf] });
            console.log(doc)
        } catch (error) {
            if (DocumentPicker.isCancel(error)) {
                console.log('User cancel the upload', error);
            }
            else {
                console.log(error);
            }

        }
    }
    return (
        <View style={styles.container1}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('User')}>
                    <MaterialIcons name='keyboard-arrow-left' color={'#ffffff'} size={24} style={{ marginLeft: moderateScale(15) }} />
                </Pressable>

                <Text style={styles.text1}>MY DOCUMENTS</Text>
            </View>

            <Image source={require('../icon/illustration/Mydoc.png')} style={styles.img} />
            <Text style={styles.text2}>Your documents are safe with us!</Text>

            <View style={styles.line1}></View>

            <Pressable style={styles.add} onPress={() => {return selectdocument(), toggleModal(), setstate(1)}}>
                <Image source={require('../icon/imges/Plus.png')} style={{ height: scale(24), width: scale(24) }} />
                <Text style={styles.text3}>Select Your Document</Text>
            </Pressable>
            <Fileuploadmodel isVisible={isModalVisible} closeModal={toggleModal} navigation={navigation} />

            <Text style={styles.text4}>Document Name</Text>
            <TextInput placeholder='Aadhar Card/Pan Card/Driving License' placeholderTextColor={'#B8B8B8'} style={styles.input}></TextInput>



            <Pressable style={[styles.button, { backgroundColor: state == 1 ? '#33CCCC' : '#d6d6d6'}]} onPress={toggleModal1}>
                <Text style={styles.text5}>ADD DOCUMENT</Text>
            </Pressable>
            <MyDocumentmodel isVisible={isModalVisible1}  navigation={navigation} />
        </View>
    )
}

export default Uploaddoc

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
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#cbcbcb',
        alignSelf: 'center',
        marginTop: moderateScale(15)
    },
    line1: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#929292',
        marginTop: moderateScale(40)
    },
    text5: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        marginTop: moderateScale(150),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: moderateScale(163),
        height: verticalScale(123),
        marginTop: moderateScale(20),
        alignSelf: 'center'
    },
    add: {
        width: moderateScale(189),
        height: verticalScale(48),
        borderRadius: moderateScale(5),
        borderWidth: 1,
        borderColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(30),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(10)
    },
    text4: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(40)
    },
    input: {
        width: moderateScale(320),
        height: verticalScale(48),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        borderRadius: moderateScale(8),
        paddingLeft: moderateScale(20),
        fontSize: moderateScale(12)
    },

})