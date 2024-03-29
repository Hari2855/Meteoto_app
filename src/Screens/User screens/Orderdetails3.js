import { View, Text, Pressable, Image, StyleSheet, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const Orderdetails3 = ({ navigation }) => {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.container2}>
                <Pressable onPress={() => navigation.navigate('Myorders')}>
                    <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={{ height: scale(16), width: scale(24), tintColor: '#ffffff', marginLeft: moderateScale(30) }} />
                </Pressable>
                <Text style={styles.text1}>ORDER DETAILS</Text>
            </View>
            <View style={styles.container3}>
                <Pressable style={styles.imgcontainer}>
                    <Image source={require('../icon/imges/Imagcontainer1.png')} style={styles.img1} />
                </Pressable>
                <View style={styles.line4}></View>
                <View style={styles.textcontainer}>
                    <Text style={styles.text2}>Alternator</Text>
                    <View style={{ flexDirection: 'row', width: moderateScale(140), height: verticalScale(16), marginTop: moderateScale(10) }}>
                        <Text style={styles.text3}>Part Type:</Text>
                        <Text style={[styles.text3, { color: '#666666', left: moderateScale(55) }]}>Aftermarket</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: moderateScale(150), height: verticalScale(16), marginTop: moderateScale(5) }}>
                        <Text style={styles.text3}>Brand:</Text>
                        <Text style={[styles.text3, { color: '#666666', left: moderateScale(74) }]}>Global X</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: moderateScale(150), height: verticalScale(16), marginTop: moderateScale(5) }}>
                        <Text style={styles.text3}>Price:</Text>
                        <Text style={[styles.text3, { color: '#666666', left: moderateScale(80) }]}>4000/-</Text>
                    </View>
                </View>
            </View>

            <View style={styles.container4}>

                <View style={styles.textcontainer1}>
                    <Text style={styles.text3}>Order Date:</Text>
                    <Text style={[styles.text3, { color: '#666666' }]}>28/08/2023</Text>
                </View>

                <View style={styles.line1}></View>

                <View style={styles.textcontainer1}>
                    <Text style={styles.text3}>Delivery Date:</Text>
                    <Text style={[styles.text3, { color: '#666666' }]}>30/08/2023</Text>
                </View>
            </View>

            <View style={styles.container5}>
                <Text style={styles.text4}>DELIVERY ADDRESS</Text>

                <View style={styles.line1}></View>

                <Text style={[styles.text4, { color: '#33CCCC', marginTop: moderateScale(15) }]}>Aditya Kanate</Text>

                <Text style={[styles.text3, { marginLeft: moderateScale(15), marginTop: moderateScale(10) }]}>House No. B/123, Flat no. 02, Vidhya Nagar</Text>

                <Text style={[styles.text3, { marginLeft: moderateScale(15) }]}>Patel,House No. B/123, Flat no. 02, Vidhya Nagar</Text>

                <Text style={[styles.text3, { marginLeft: moderateScale(15) }]}>Patel,House No. B/123, Flat no. 02, Vidhya Nagar</Text>

                <Text style={[styles.text3, { color: '#666666', marginLeft: moderateScale(15), marginTop: moderateScale(20), fontWeight: '500' }]}>Contact Number</Text>

                <Text style={[styles.text3, { marginLeft: moderateScale(15), marginTop: moderateScale(2) }]}>9856235689</Text>
            </View>

            <View style={styles.container6}>
                <View style={{ flexDirection: 'row', marginTop: moderateScale(10), marginLeft: moderateScale(15) }}>
                    <Image source={require('../icon/imges/Truck2.png')} style={{ width: scale(24), height: scale(24) }} />
                    <Text style={[styles.text3, { color: '#666666', marginLeft: moderateScale(10), fontWeight: '500', marginTop: moderateScale(3) }]}>Part will be delivered till Tomorrow.</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: moderateScale(10), marginLeft: moderateScale(15) }}>
                    <Image source={require('../icon/imges/Refresh.png')} style={{ width: scale(24), height: scale(24) }} />
                    <Text style={[styles.text3, { color: '#666666', marginLeft: moderateScale(10), fontWeight: '500', marginTop: moderateScale(3) }]}>Check Return & Refund Policy.</Text>
                </View>
            </View>

            <View style={styles.line2}></View>

            <View style={styles.container7}>
                <Text style={[styles.text3, { fontWeight: '500', marginLeft: moderateScale(15), marginTop: moderateScale(15) }]}>Order Status</Text>
                <View style={{ flexDirection: 'row', marginTop: moderateScale(15), marginLeft: moderateScale(15) }}>
                    <Text style={[styles.text2, { fontSize: moderateScale(12) }]}>Order ID: 123456789456</Text>
                    <Pressable>
                        <Image source={require('../icon/imges/Copybtn.png')} style={{ height: scale(24), width: scale(24), bottom: moderateScale(3), marginLeft: moderateScale(10), tintColor: '#999999' }} />
                    </Pressable>
                    <Image source={require('../icon/gif-icons/Truck.gif')} style={styles.img2} />
                </View>

                <View style={{ flexDirection: 'row', bottom: moderateScale(40), marginLeft: moderateScale(15) }}>
                    <Text style={[styles.text2, { fontSize: moderateScale(12) }]}>AWB ID: 123456789456</Text>
                    <Pressable>
                        <Image source={require('../icon/imges/Copybtn.png')} style={{ height: scale(24), width: scale(24), bottom: moderateScale(3), marginLeft: moderateScale(14), tintColor: '#999999' }} />
                    </Pressable>
                </View>

                <View style={[styles.line1, { bottom: moderateScale(30) }]}></View>

                <View style={styles.delivery}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={styles.circle1}>
                            <View style={styles.circle2}></View>
                        </View>
                        <View style={styles.line3}></View>
                        <View style={styles.circle1}>
                            <View style={styles.circle2}></View>
                        </View>
                        <View style={styles.line3}></View>
                        <View style={styles.circle1}>
                            <View style={styles.circle2}></View>
                        </View>
                        <View style={[styles.line3, { backgroundColor: '#999999' }]}></View>
                        <View style={styles.circle1}>
                        </View>
                        <View style={[styles.line3, { backgroundColor: '#999999' }]}></View>
                        <View style={styles.circle1}>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={[styles.text2, { bottom: moderateScale(3), color: '#333333', marginLeft: moderateScale(20) }]}>Order Received</Text>

                        <Text style={[styles.text2, { marginTop: moderateScale(36), color: '#333333', marginLeft: moderateScale(20) }]}>Ready to Ship</Text>

                        <Text style={[styles.text2, { marginTop: moderateScale(42), color: '#333333', marginLeft: moderateScale(20) }]}>Order In Transit</Text>

                        <Text style={[styles.text2, { marginTop: moderateScale(40), color: '#333333', marginLeft: moderateScale(20) }]}>Out For Delivery</Text>

                        <Text style={[styles.text2, { marginTop: moderateScale(38), color: '#333333', marginLeft: moderateScale(20) }]}>Delivered</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Orderdetails3

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333',
        // height: verticalScale(1500)
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
        marginLeft: moderateScale(75),
        marginBottom: moderateScale(5)
    },
    container3: {
        width: moderateScale(320),
        height: verticalScale(116),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(5),
        alignSelf: 'center',
        marginTop: moderateScale(10),
        alignItems: 'center',
        flexDirection: 'row'
    },
    imgcontainer: {
        width: scale(60),
        height: scale(60),
        borderWidth: 1,
        borderColor: '#9e9e9e',
        borderRadius: scale(30),
        left: moderateScale(15),
        alignItems: 'center',
        justifyContent: 'center'
    },
    img1: {
        width: scale(52),
        height: scale(52)
    },
    line4: {
        height: verticalScale(116),
        width: moderateScale(1),
        backgroundColor: '#f0f0f0',
        marginLeft: moderateScale(25)
    },
    textcontainer: {
        flexDirection: 'column',
        width: moderateScale(140),
        marginLeft: moderateScale(15),
        bottom: moderateScale(5)
    },
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: '#666666'
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#333333'
    },
    container4: {
        width: moderateScale(320),
        height: verticalScale(72),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(5),
        alignSelf: 'center',
        marginTop: moderateScale(10),
    },
    textcontainer1: {
        width: moderateScale(165),
        height: verticalScale(16),
        marginLeft: moderateScale(15),
        marginTop: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    line1: {
        width: moderateScale(320),
        height: verticalScale(1),
        backgroundColor: '#a6a6a6',
        marginTop: moderateScale(10)
    },
    container5: {
        width: moderateScale(320),
        height: verticalScale(204),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10)
    },
    text4: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#666666',
        marginLeft: moderateScale(15),
        marginTop: moderateScale(10)
    },
    container6: {
        width: moderateScale(320),
        height: verticalScale(84),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10)
    },
    line2: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#999999',
        marginTop: moderateScale(20)
    },
    container7: {
        width: moderateScale(320),
        height: verticalScale(400),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(50),
        bottom: moderateScale(30)
    },
    img2: {
        width: moderateScale(80),
        height: verticalScale(68),
        bottom: moderateScale(20),
        marginLeft: moderateScale(40)
    },
    delivery: {
        width: moderateScale(160),
        height: verticalScale(250),
        flexDirection: 'row',
        marginLeft: moderateScale(15),
        bottom: moderateScale(15),

    },
    circle1: {
        width: scale(16),
        height: scale(16),
        borderRadius: scale(8),
        backgroundColor: '#666666',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle2: {
        width: scale(8),
        height: scale(8),
        borderRadius: scale(5),
        backgroundColor: '#99CC33'
    },
    line3: {
        width: moderateScale(2),
        height: verticalScale(43),
        backgroundColor: '#99CC33',
        marginLeft: moderateScale(7.5)
    },
    container8: {
        width: moderateScale(320),
        height: verticalScale(370),
        marginTop: moderateScale(20),
        alignSelf: 'center',
    },
    text5: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff'
    },
    box3: {
        width: moderateScale(320),
        height: verticalScale(150),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center'
    },
    line: {
        width: moderateScale(320),
        height: verticalScale(0.5),
        backgroundColor: '#666666',
        marginTop: moderateScale(10)
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: moderateScale(320),
        height: verticalScale(60),
        padding: moderateScale(10),
        margin: moderateScale(20),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center'
    },
    input: {
        flex: 1,
    },
    image: {
        width: moderateScale(20),
        height: moderateScale(20),
        margin: moderateScale(5),
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        backgroundColor: '#33CCCC',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(80),
        bottom: moderateScale(30)
    },
    text6: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    },
    line5: {
        width: moderateScale(72),
        height: verticalScale(2),
        backgroundColor: '#cccccc',
        borderRadius: moderateScale(8),
        alignSelf: 'center',
        bottom: moderateScale(5)
    }
})