import { View, Text, Image, ScrollView, Pressable, StyleSheet } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import React, {useState} from 'react'

const Servicebooking = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={{ height: scale(16), width: scale(24), tintColor: '#ffffff', marginLeft: moderateScale(20) }} />
                </Pressable>
                <Text style={styles.text1}>SERVICE BOOKING</Text>
            </View>

            <View style={styles.container3}>
                <Image source={require('../icon/gif-icons/Save.gif')} style={styles.img} />
                <Text style={styles.text2}>Service Completed!!</Text>
            </View>

            <View style={styles.line}></View>

            <View style={styles.payslip}>
                <Text style={styles.text2}>INVOICE  DETAILS</Text>
                <View style={styles.line1}></View>
                <Text style={[styles.text3, { marginTop: moderateScale(10) }]}>Service Name:<Text style={[styles.text3, { color: '#333333' }]}> Electronic Expert</Text></Text>
                <Text style={styles.text3}>Charges:<Text style={[styles.text3, { color: '#333333' }]}> ₹3000</Text></Text>
                <View style={styles.line1}></View>
                <Text style={[styles.text3, { marginTop: moderateScale(10) }]}>Shop Name:<Text style={[styles.text3, { color: '#333333' }]}> GD Car works</Text></Text>
                <Text style={styles.text3}>Address:<Text style={[styles.text3, { color: '#333333' }]}> Indrapuri, Sector-A, Near BHEL, Bhopal</Text></Text>
            </View>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Payments1')}>
                <Text style={styles.Text8}>PAY NOW</Text>
            </Pressable>
        </View>
    )
}

export default Servicebooking

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    container2: {
        width: '100%',
        height: verticalScale(60),
        alignItems: 'center',
        flexDirection: 'row',
    },
    text1: {
        color: '#ffffff',
        fontSize: moderateScale(12),
        fontWeight: '500',
        marginLeft: moderateScale(85),
        marginBottom: moderateScale(5)
    },
    container3: {
        width: moderateScale(320),
        height: verticalScale(244),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(10),
        alignSelf: 'center',
        marginTop: moderateScale(30),
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: scale(100),
        height: scale(100)
    },
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: '#333333',
        marginTop: moderateScale(20)
    },
    line: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#999999',
        marginTop: moderateScale(20)
    },
    payslip: {
        width: moderateScale(320),
        height: verticalScale(160),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20),
    },
    text2: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#333333',
        marginLeft: moderateScale(10),
        marginTop: moderateScale(10)
    },
    line1: {
        width: moderateScale(320),
        height: verticalScale(1),
        backgroundColor: '#a6a6a6',
        marginTop: moderateScale(10)
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#838383',
        marginLeft: moderateScale(10)
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        marginLeft: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(80),
    },
    Text8: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    },
})