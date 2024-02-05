import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feedbackmodel from './Feedbackmodel'

const Feedback = ({ navigation }) => {
    const [isModalVisible, setisModalVisible] = useState(false)

    const toggleModal = () => {
        setisModalVisible(!isModalVisible)
        navigation.navigate('Help')
    }

    return (
        <View style={styles.container1}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('Help')}>
                    <MaterialIcons name='keyboard-arrow-left' color={'#ffffff'} size={24} style={{ marginLeft: moderateScale(15) }} />
                </Pressable>

                <Text style={styles.text1}>FEEDBACK</Text>
            </View>

            <View style={styles.container2}>
                <Image source={require('../icon/Profile-section-imgs/profile-options-img/Gif/Feedback.gif')} style={{ width: scale(80), height: scale(84) }} />
                <Text style={styles.text2}>{`YOUR FEEDBACK WILL \nHELP US TO GROW!`}</Text>
            </View>

            <View style={styles.line1}></View>

            <Text style={[styles.text2, { color: '#ffffff', marginTop: moderateScale(20), marginLeft: moderateScale(20) }]}>Leave your feedback</Text>

            <TextInput style={styles.input12} placeholder='Write here...' placeholderTextColor={'#B8B8B8'} />

            <Text style={{ fontSize: moderateScale(40), fontWeight: '200', color: '#666666', marginTop: moderateScale(50), alignSelf: 'center' }}>{`Your Satisfaction \nis our Destiny.`}</Text>

            <Pressable style={styles.button} onPress={toggleModal}>
                <Text style={styles.text4}>SUBMIT</Text>
            </Pressable>
            <Feedbackmodel isVisible={isModalVisible} closeModal={toggleModal}/>
        </View>
    )
}

export default Feedback

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
        marginLeft: moderateScale(110),
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
        marginTop: moderateScale(30)
    },
    input12: {
        width: moderateScale(320),
        height: verticalScale(120),
        borderRadius: moderateScale(10),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        paddingBottom: moderateScale(80),
        paddingLeft: moderateScale(20)

    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        backgroundColor: '#33cccc',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(80),
        bottom: moderateScale(15),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text4: {
        color: '#ffffff',
        fontSize: moderateScale(12),
        fontWeight: '500'
    },

})