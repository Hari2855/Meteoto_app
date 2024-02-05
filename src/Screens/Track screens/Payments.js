import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image, ScrollView, TextInput, } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Popup from './Popup'
import Cashmodal from './Cashmodal'

const Payments1 = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible1, setModalVisible1] = useState(false);
    const [state, setstate] = useState(null)

    const toggleModal = () => {
        if (state != null) {
            setModalVisible(!isModalVisible);
        }
    }

    const toggleModal1 = () => {
        setModalVisible1(!isModalVisible1);
    };


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Pressable style={styles.icons} onPress={() => navigation.navigate('Home')}>
                        <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
                    </Pressable>

                    <Text style={styles.TEXT}>PAYMENT</Text>
                </View>
                <Text style={styles.Text1}>UPI</Text>
                <Text style={[styles.Text1, { marginTop: moderateScale(5) }]}>Directly pay from your accounts</Text>

                <Pressable style={[styles.paybox, { borderWidth: state == 0 ? 3 : 0, borderColor: state == 0 ? '#33CCCC' : '#ffffff' }]} onPress={() => setstate(0)}>
                    <Pressable style={styles.imgc}>
                        <Image source={require('../icon/imges/Gpay.png')} style={styles.img} />
                    </Pressable>
                    <Text style={styles.Text2}>Google Pay</Text>
                </Pressable>

                <Pressable style={[styles.paybox, { marginTop: moderateScale(10), borderWidth: state == 1 ? 3 : 0, borderColor: state == 1 ? '#33CCCC' : '#ffffff' }]} onPress={() => setstate(1)}>
                    <Pressable style={{ marginLeft: moderateScale(10) }}>
                        <Image source={require('../icon/imges/Ppay.png')} style={styles.img1} />
                    </Pressable>
                    <Text style={styles.Text2}>PhonePay</Text>
                </Pressable>

                <Pressable style={[styles.paybox, { marginTop: moderateScale(10), borderWidth: state == 2 ? 3 : 0, borderColor: state == 2 ? '#33CCCC' : '#ffffff' }]} onPress={() => setstate(2)}>
                    <Pressable style={[styles.imgc, { marginLeft: moderateScale(10) }]}>
                        <Image source={require('../icon/imges/Paytm.png')} style={styles.img} />
                    </Pressable>
                    <Text style={styles.Text2}>Paytm</Text>
                </Pressable>

                <View style={styles.box1}>
                    <Text style={styles.Text3}>Add new UPI ID</Text>
                    <TextInput style={[styles.input, { borderColor: state == 3 ? '#33CCCC' : '#ffffff', borderWidth: state == 3 ? 3 : 0 }]} placeholder='abc-1@oksbi' placeholderTextColor={'#B8B8B8'} onPressIn={() => setstate(3)} />
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
                    <TextInput style={[styles.input, { borderColor: state == 4 ? '#33CCCC' : '#ffffff', borderWidth: state == 4 ? 3 : 0 }]} placeholder='XXXX34555634' placeholderTextColor={'#B8B8B8'} keyboardType="numeric" onPressIn={() => setstate(4)} />
                </View>
                <View style={[styles.box3, { flexDirection: 'row' }]}>
                    <View style={styles.box4}>
                        <Text style={{ fontSize: moderateScale(16), fontWeight: '400', color: '#ffffff' }}>Expiry Date(MM/YY)</Text>
                        <TextInput style={[styles.input1, { borderColor: state == 5 ? '#33CCCC' : '#ffffff', borderWidth: state == 5 ? 3 : 0 }]} placeholder='MM/YY' placeholderTextColor={'#B8B8B8'} keyboardType='numeric' onPressIn={() => setstate(5)}></TextInput>
                    </View>
                    <View style={[styles.box4, { marginLeft: moderateScale(16) }]}>
                        <Text style={{ fontSize: moderateScale(16), fontWeight: '400', color: '#ffffff' }}>CVV</Text>
                        <TextInput style={[styles.input1, { borderColor: state == 6 ? '#33CCCC' : '#ffffff', borderWidth: state == 6 ? 3 : 0 }]} placeholder='XXX' placeholderTextColor={'#B8B8B8'} onPressIn={() => setstate(6)}></TextInput>
                    </View>
                </View>
                <View style={[styles.box2, { marginLeft: moderateScale(20) }]}>
                    <Ionicons name='checkbox' size={24} color={'lightgray'} />
                    <Text style={styles.Text4}>Save this for future payments</Text>
                </View>
                <View style={styles.line}></View>
                <Pressable style={styles.cash} onPress={toggleModal1}>
                    <Pressable style={{ height: scale(32), width: scale(32), borderWidth: 1, borderColor: '#d0d0d0', borderRadius: scale(5), alignItems: 'center', justifyContent: 'center', marginLeft: moderateScale(10)}}>
                    <Image source={require('../icon/imges/Cash.png')} style={{height: scale(24), width: scale(24),}}/>
                    </Pressable>
                    <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#000000', marginLeft: moderateScale(10) }}>Cash Payment</Text>
                </Pressable>
                <Cashmodal isVisible={isModalVisible1} closeModal={toggleModal1} navigation={navigation} />
            </ScrollView>
            <Pressable style={[styles.button, { backgroundColor: state != null ? '#33CCCC' : 'gray' }]} onPress={toggleModal}>
                <Text style={styles.Text8}>PAY ₹12000 </Text>
            </Pressable>
            <Popup isVisible={isModalVisible} closeModal={toggleModal} navigation={navigation} />
        </View >
    )
}

export default Payments1

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
    },
    cash: {
        width: moderateScale(320),
        height: verticalScale(48),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20),
        alignItems: 'center',
        flexDirection : 'row'
    }
})