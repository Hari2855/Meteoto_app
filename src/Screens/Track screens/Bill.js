import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image, ScrollView, } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Feather from 'react-native-vector-icons/Feather'

const Bill1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.icons} onPress={() => navigation.navigate('Track')}>
                    <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
                </Pressable>

                <Text style={styles.TEXT}>Car Service</Text>
            </View>

            <Text style={styles.Texts}>Job Card</Text>

            <View style={styles.line}></View>

            <View style={styles.Bill1Container}>
                <View style={styles.Bill1id}>
                    <Image source={require('../icon/profile-options-img/Gif/Bill.gif')} style={styles.img} />
                    <Text style={styles.Text1}>I N V O I C E   N U M B E R:</Text>
                    <Text style={styles.Text2}> 45687875657</Text>
                    <Pressable style={{ flexDirection: 'column' }}>
                        <Feather name='clipboard' color={'#999999'} size={16} />
                        <Text style={{ fontSize: moderateScale(8), fontWeight: '300', color: '#666666' }}>COPY</Text>
                    </Pressable>
                </View>
                <View style={styles.itemcontainer}>
                    <View style={styles.itemcontainer1}>
                        <View style={styles.box1}>
                            <Text style={styles.TEXT3}>Part Name</Text>
                        </View><View style={styles.box2}>
                            <Text style={styles.TEXT3}>QT.</Text>
                        </View>
                        <View style={styles.box3}>
                            <Text style={[styles.TEXT3, { marginLeft: moderateScale(20) }]}>Remark</Text>
                        </View>
                        <Text style={styles.TEXT3}>Price</Text>
                    </View>
                    <View style={styles.itemcontainer2}>
                        <View style={styles.box1}>
                            <Text style={[styles.TEXT3, {color: '#666666'}]}>Spark Plug- OEM</Text>
                        </View><View style={styles.box2}>
                            <Text style={[styles.TEXT3, { color: '#666666',left: moderateScale(5) }]}>1</Text>
                        </View>
                        <View style={styles.box3}>
                            <Text style={[styles.TEXT3, { marginLeft: moderateScale(20),color: '#666666' }]}>Replaced</Text>
                        </View>
                        <Text style={[styles.TEXT3, { color: '#666666' }]}>236</Text>
                    </View>
                    <View style={styles.itemcontainer2}>
                        <View style={styles.box1}>
                            <Text style={[styles.TEXT3, { color: '#666666' }]}>Break Oil OEM</Text>
                        </View><View style={styles.box2}>
                            <Text style={[styles.TEXT3, { color: '#666666',left: moderateScale(5) }]}>1</Text>
                        </View>
                        <View style={styles.box3}>
                            <Text style={[styles.TEXT3, { marginLeft: moderateScale(20), color: '#666666' }]}>Top-up</Text>
                        </View>
                        <Text style={[styles.TEXT3, { color: '#666666' }]}>236</Text>
                    </View>
                    <View style={styles.itemcontainer2}>
                        <View style={styles.box1}>
                            <Text style={[styles.TEXT3, { color: '#666666' }]}>Spark Plug- OEM</Text>
                        </View><View style={styles.box2}>
                            <Text style={[styles.TEXT3, { color: '#666666',left: moderateScale(5) }]}>1</Text>
                        </View>
                        <View style={styles.box3}>
                            <Text style={[styles.TEXT3, { marginLeft: moderateScale(20), color: '#666666' }]}>Serviced</Text>
                        </View>
                        <Text style={[styles.TEXT3, { color: '#666666' }]}>236</Text>
                    </View>
                    <View style={[styles.itemcontainer2, {height: verticalScale(36),borderStyle: 'dashed', justifyContent: 'space-between' }]}>
                        <Text style={{fontSize: moderateScale(12), fontWeight: '400', color: '#333333', left: moderateScale(15)}}>Total</Text>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333', right: moderateScale(28) }}>800</Text>
                    </View>
                    <View style={[styles.itemcontainer2, { height: verticalScale(36), borderStyle: 'dashed', justifyContent: 'space-between' }]}>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333', left: moderateScale(15) }}>Service Chage</Text>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333', right: moderateScale(23) }}>1000</Text>
                    </View>
                    <View style={[styles.itemcontainer2, { height: verticalScale(36), borderStyle: 'dashed', justifyContent: 'space-between' }]}>
                        <View style={{ left: moderateScale(15) }}>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>GST (18%)</Text>
                        <Text style={{ fontSize: moderateScale(8), fontWeight: '400', color: '#666666' }}>(9%-CGST & 9%-SGST)</Text>
                        </View>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333', right: moderateScale(28) }}>324</Text>
                    </View>
                    <View style={[styles.itemcontainer2, { height: verticalScale(36), borderBottomWidth: 0, justifyContent: 'space-between',top: moderateScale(5) }]}>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333', left: moderateScale(15) }}>Grand Total</Text>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333', right: moderateScale(20) }}>₹1500</Text>
                    </View>
                </View>
            </View>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Payments1')}>
                <Text style={styles.Text8}>Pay Now</Text>
            </Pressable>
        </View>
    )
}

export default Bill1

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
    Texts: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(20)
    },
    line: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(5)
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
        marginLeft: moderateScale(95),
        bottom: moderateScale(10)
    },
    Bill1Container: {
        width: moderateScale(320),
        height: verticalScale(450),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        borderTopWidth: 5,
        borderColor: '#33CCCC',
        flexDirection: 'column',
        elevation: 5,
        zIndex: -1,
        marginTop: moderateScale(20)
    },
    Bill1id: {
        width: moderateScale(320),
        height: verticalScale(56),
        borderBottomWidth: 1,
        borderColor: '#9f9f9f',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    img: {
        width: scale(32),
        height: scale(32)
    },
    Text1: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#666666'
    },
    Text2: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#333333'
    },
    itemcontainer: {
        width: moderateScale(320),
        height: verticalScale(112),
    },
    itemcontainer1: {
        width: moderateScale(320),
        height: verticalScale(56),
        borderBottomWidth: 0.5,
        borderColor: '#9f9f9f',
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemcontainer2: {
        width: moderateScale(320),
        height: verticalScale(56),
        borderBottomWidth: 1,
        borderColor: '#9f9f9f',
        flexDirection: 'row',
        alignItems: 'center'
    },
    box1: {
        height: verticalScale(56),
        width: moderateScale(118),
        borderRightWidth: 0.5,
        borderColor: '#9f9f9f',
        alignItems: 'center',
        flexDirection: 'row'
    },
    TEXT3: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#333333',
        marginLeft: moderateScale(15)
    },
    box2: {
        height: verticalScale(56),
        width: moderateScale(50),
        borderRightWidth: 0.5,
        borderColor: '#9f9f9f',
        alignItems: 'center',
        flexDirection: 'row'
    },
    box3: {
        height: verticalScale(56),
        width: moderateScale(90),
        borderRightWidth: 0.5,
        borderColor: '#9f9f9f',
        alignItems: 'center',
        flexDirection: 'row'
    },
    box4: {
        width: moderateScale(296),
        height: verticalScale(18),
        alignSelf: 'center',
        flexDirection: 'row',
        // borderWidth: 1,
        justifyContent: 'space-between',
        marginTop: moderateScale(10)
    },
    box5: {
        width: moderateScale(296),
        height: verticalScale(18),
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    Text4: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#99CC33',
        marginLeft: moderateScale(15),
        marginTop: moderateScale(50)
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        marginLeft: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(60)
    },
    Text8: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    },
    line1: {
        width: scale(72),
        height: scale(2),
        backgroundColor: '#666666',
        borderRadius: scale(10),
        alignSelf: 'center',
        marginTop: moderateScale(25)
    }
})