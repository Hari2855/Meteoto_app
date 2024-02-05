import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image, ScrollView, TextInput, } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Popup2 from '../Autoparts/Popup2'

const Payments2 = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Pressable style={styles.icons} onPress={() => navigation.navigate('Jobcard')}>
                        <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
                    </Pressable>

                    <Text style={styles.TEXT}>PAYMENT</Text>
                </View>
                <Text style={styles.Text1}>UPI</Text>
                <Text style={[styles.Text1, { marginTop: moderateScale(5) }]}>Directly pay from your accounts</Text>
                <Pressable style={styles.paybox}>
                    <Pressable style={styles.imgc}>
                        <Image source={require('../icon/imges/Gpay.png')} style={styles.img} />
                    </Pressable>
                    <Text style={styles.Text2}>Google Pay</Text>
                </Pressable>
                <Pressable style={[styles.paybox, { marginTop: moderateScale(10) }]}>
                    <Pressable style={{ marginLeft: moderateScale(10) }}>
                        <Image source={require('../icon/imges/Ppay.png')} style={styles.img1} />
                    </Pressable>
                    <Text style={styles.Text2}>PhonePay</Text>
                </Pressable>
                <Pressable style={[styles.paybox, { marginTop: moderateScale(10) }]}>
                    <Pressable style={[styles.imgc, { marginLeft: moderateScale(10) }]}>
                        <Image source={require('../icon/imges/Paytm.png')} style={styles.img} />
                    </Pressable>
                    <Text style={styles.Text2}>Paytm</Text>
                </Pressable>
                <View style={styles.box1}>
                    <Text style={styles.Text3}>Add new UPI ID</Text>
                    <TextInput style={styles.input} placeholder='abc-1@oksbi' placeholderTextColor={'#B8B8B8'} />
                    <View style={styles.box2}>
                        <Ionicons name='checkbox' size={24} color={'lightgray'} />
                        <Text style={styles.Text4}>Save this for future payments</Text>
                    </View>
                </View>
                <View style={styles.line}></View>
                <Text style={[styles.Text1, { fontWeight: '500', marginTop: moderateScale(20) }]}>PAY USING CARD</Text>
                <Text style={[styles.Text3, { marginLeft: moderateScale(20), marginTop: moderateScale(5) }]}>Pay through your Debit & Credit Card</Text>
                <View style={styles.box3}>
                    <Text style={{ fontSize: moderateScale(16), fontWeight: '400', color: '#ffffff' }}>Card Number</Text>
                    <TextInput style={styles.input} placeholder='XXXX34555634' placeholderTextColor={'#B8B8B8'} keyboardType="numeric" />
                </View>
                <View style={[styles.box3, { flexDirection: 'row' }]}>
                    <View style={styles.box4}>
                        <Text style={{ fontSize: moderateScale(16), fontWeight: '400', color: '#ffffff' }}>Expiry Date(MM/YY)</Text>
                        <TextInput style={styles.input1} placeholder='MM/YY' placeholderTextColor={'#B8B8B8'} keyboardType='numeric'></TextInput>
                    </View>
                    <View style={[styles.box4, { marginLeft: moderateScale(16) }]}>
                        <Text style={{ fontSize: moderateScale(16), fontWeight: '400', color: '#ffffff' }}>CVV</Text>
                        <TextInput style={styles.input1} placeholder='XXX' placeholderTextColor={'#B8B8B8'}></TextInput>
                    </View>
                </View>
                <View style={[styles.box2, { marginLeft: moderateScale(20) }]}>
                    <Ionicons name='checkbox' size={24} color={'lightgray'} />
                    <Text style={styles.Text4}>Save this for future payments</Text>
                </View>
            </ScrollView>
            <Pressable style={styles.button} onPress={toggleModal}>
                <Text style={styles.Text8}>Pay ₹12000 </Text>
            </Pressable>
            <Popup2 isVisible={isModalVisible} closeModal={toggleModal} navigation={navigation} />
        </View >
    )
}

export default Payments2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    header: {
        width: moderateScale(360),
        height: verticalScale(60),
        alignItems: 'center',
        flexDirection: 'row',
        // borderWidth: 1, 
        // borderColor: '#ffffff'
    },
    icons: {
        width: scale(48),
        height: scale(48),
        alignItems: 'center',
        justifyContent: 'center',
        bottom: moderateScale(10)
    },
    imges: {
        width: scale(24),
        height: scale(16),
        tintColor: '#ffffff',
        marginLeft: moderateScale(20)
    },
    TEXT: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(100),
        bottom: moderateScale(10)
    },
    Text1: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#ffffff',
        marginLeft: moderateScale(20)
    },
    paybox: {
        width: moderateScale(320),
        height: verticalScale(48),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        marginLeft: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: moderateScale(20)
    },
    imgc: {
        width: moderateScale(35),
        height: moderateScale(35),
        borderRadius: moderateScale(20),
        borderWidth: 1,
        borderColor: '#999999',
        marginLeft: moderateScale(10)
    },
    img: {
        width: scale(32),
        height: scale(32),
        borderRadius: scale(20),
    },
    Text2: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#333333',
        marginLeft: moderateScale(10)
    },
    img1: {
        width: scale(35),
        height: scale(35),
        borderRadius: scale(20),
    },
    box1: {
        width: moderateScale(320),
        height: verticalScale(128),
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20),
        flexDirection: 'column'
    },
    Text3: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    }, input: {
        width: moderateScale(320),
        height: verticalScale(48),
        borderRadius: moderateScale(10),
        backgroundColor: '#ffffff',
        paddingLeft: moderateScale(20),
        marginTop: moderateScale(10)
    },
    box2: {
        width: moderateScale(231),
        height: moderateScale(48),
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: moderateScale(10)
    },
    Text4: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(10)
    },
    line: {
        height: scale(1),
        width: moderateScale(360),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(10)
    },
    box3: {
        width: moderateScale(320),
        height: verticalScale(84),
        marginTop: moderateScale(20),
        marginLeft: moderateScale(20),
        flexDirection: 'column'
    },
    box4: {
        width: moderateScale(152),
        height: verticalScale(84),
        flexDirection: 'column'
    },
    input1: {
        width: moderateScale(152),
        height: verticalScale(48),
        borderRadius: moderateScale(10),
        backgroundColor: '#ffffff',
        marginTop: moderateScale(14),
        paddingLeft: moderateScale(20)
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        marginLeft: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(60),
        bottom: moderateScale(20)
    },
    Text8: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    }
})