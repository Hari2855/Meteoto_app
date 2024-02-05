import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const Upcomingorders = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.Text4, { color: '#ffffff', marginLeft: moderateScale(20), marginTop: moderateScale(20) }]}>12/09/2023</Text>

            <View style={styles.container6}>
                <View style={styles.line2}></View>
                <Text style={[styles.Text4, { color: '#666666', marginTop: moderateScale(10), marginLeft: moderateScale(10) }]}>S I N G L E   P A R T</Text>
                <View style={styles.line3}></View>
                <View style={[styles.container7, { marginTop: moderateScale(15), }]}>
                    <Pressable style={styles.imgcontainer}>
                        <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                    </Pressable>
                    <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Alternator</Text>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: OEM</Text>
                    </View>
                    <Pressable onPress={() => navigation.navigate('Orderdetails2')} style={styles.track1}>
                        <Text style={styles.Text4}>Track</Text>
                    </Pressable>
                </View>
                <View style={styles.dot}>
                    <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666', top: moderateScale(5), alignSelf: 'flex-end', right: moderateScale(15) }}>Status: Out of Delivery</Text>
                </View>
            </View>

            <Text style={[styles.Text4, { color: '#ffffff', marginLeft: moderateScale(20), marginTop: moderateScale(20) }]}>30/09/2023</Text>

            <View style={styles.container2}>
                <View style={styles.textcontainer}>
                    <Text style={[styles.Text4, { color: '#666666', marginLeft: moderateScale(10) }]}>M U L T I P L E   P A R T S</Text>
                </View>

                <View style={{ width: moderateScale(320), height: verticalScale(110), flexDirection: 'row', borderBottomWidth: 1, borderColor: '#999999' }}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: verticalScale(100), width: moderateScale(296), alignSelf: 'center', marginTop: moderateScale(10) }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.container7}>
                                <Pressable style={styles.imgcontainer}>
                                    <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                                </Pressable>
                                <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                    <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Alternator</Text>
                                    <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: OEM</Text>
                                </View>
                                <Pressable onPress={() => navigation.navigate('Orderdetails2')} style={styles.track1}>
                                    <Text style={styles.Text4}>Track</Text>
                                </Pressable>
                            </View>

                            <View style={[styles.container7, { marginTop: moderateScale(15), }]}>
                                <Pressable style={styles.imgcontainer}>
                                    <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                                </Pressable>
                                <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                    <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Clutch plate</Text>
                                    <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: Global X</Text>
                                </View>
                                <Pressable onPress={() => navigation.navigate('Orderdetails2')} style={[styles.track1, { left: moderateScale(110) }]}>
                                    <Text style={styles.Text4}>Track</Text>
                                </Pressable>
                            </View>

                            <View style={[styles.container7, { marginTop: moderateScale(15), }]}>
                                <Pressable style={styles.imgcontainer}>
                                    <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                                </Pressable>
                                <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                    <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Clutch plate</Text>
                                    <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: Global X</Text>
                                </View>
                                <Pressable onPress={() => navigation.navigate('Orderdetails2')} style={[styles.track1, { left: moderateScale(110) }]}>
                                    <Text style={styles.Text4}>Track</Text>
                                </Pressable>
                            </View>

                            <View style={[styles.container7, { marginTop: moderateScale(15), }]}>
                                <Pressable style={styles.imgcontainer}>
                                    <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                                </Pressable>
                                <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                    <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Clutch plate</Text>
                                    <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: Global X</Text>
                                </View>
                                <Pressable onPress={() => navigation.navigate('Orderdetails2')} style={[styles.track1, { left: moderateScale(110) }]}>
                                    <Text style={styles.Text4}>Track</Text>
                                </Pressable>
                            </View>
                        </ScrollView>
                    </ScrollView>
                </View>

                <View style={styles.details}>
                    <Text style={[styles.Text4, { color: '#666666', marginLeft: moderateScale(10) }]}>O R D E R   D E T A I L S</Text>
                </View>

                <View style={styles.details2}>
                    <View style={{ width: moderateScale(296), height: verticalScale(16), flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#666666' }}>Amount(₹)</Text>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>12000</Text>
                    </View>

                    <View style={{ width: moderateScale(296), height: verticalScale(16), flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', marginTop: moderateScale(10) }}>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#666666' }}>Order Date</Text>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>28/08/2023</Text>
                    </View>

                    <View style={{ width: moderateScale(296), height: verticalScale(16), flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', marginTop: moderateScale(10) }}>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#666666' }}>Delivery Date (expected):</Text>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>30/08/2023</Text>
                    </View>
                </View>

                <View style={styles.dot2}>
                    <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666', top: moderateScale(10), alignSelf: 'flex-end', right: moderateScale(15) }}>Status: Out of Delivery</Text>
                </View>
            </View>
        </View>
    )
}

export default Upcomingorders

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    Text4: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#33CCCC'
    },
    container6: {
        height: verticalScale(132),
        width: moderateScale(320),
        borderWidth: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        marginTop: moderateScale(5),
        borderBottomLeftRadius: moderateScale(5),
        borderBottomRightRadius: moderateScale(5),
        alignSelf: 'center'
    },
    line2: {
        height: verticalScale(4),
        width: moderateScale(318),
        backgroundColor: '#FFCC00',
    },
    line3: {
        width: moderateScale(318),
        height: verticalScale(1),
        backgroundColor: '#999999',
        marginTop: moderateScale(10)
    },
    container7: {
        width: moderateScale(296),
        height: verticalScale(32),
        alignSelf: 'center',
        flexDirection: 'row'
    },
    imgcontainer: {
        width: scale(35),
        height: scale(35),
        borderRadius: scale(20),
        borderWidth: 1.5,
        borderColor: '#a9a9a9'
    },
    dot: {
        width: moderateScale(319),
        height: verticalScale(22),
        borderTopWidth: 1,
        borderColor: '#999999',
        borderStyle: 'dashed',
        marginTop: moderateScale(10)
    },
    track1: {
        width: moderateScale(50),
        height: verticalScale(20),
        alignItems: 'center',
        justifyContent: 'center',
        left: moderateScale(130),
        top: moderateScale(10)
    },
    container2: {
        width: moderateScale(320),
        height: verticalScale(316),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(5),
        borderTopWidth: 4,
        borderTopColor: '#FFCC00',
        borderBottomLeftRadius: moderateScale(5),
        borderBottomRightRadius: moderateScale(5),
    },
    textcontainer: {
        width: moderateScale(320),
        height: verticalScale(36),
        borderBottomWidth: 1,
        borderColor: '#999999',
        justifyContent: 'center'
    },
    details: {
        width: moderateScale(320),
        height: verticalScale(36),
        borderBottomWidth: 1,
        borderColor: '#999999',
        borderStyle: 'dashed',
        justifyContent: 'center'
    },
    details2: {
        width: moderateScale(320),
        height: verticalScale(80),
        borderBottomWidth: 1,
        borderColor: '#999999',
        borderStyle: 'dashed',
        marginTop: moderateScale(15)
    },
    dot2: {
        width: moderateScale(319),
        height: verticalScale(22),
    },
    line1: {
        width: moderateScale(72),
        height: verticalScale(2),
        backgroundColor: '#cccccc',
        borderRadius: moderateScale(8),
        alignSelf: 'center',
        top: moderateScale(45)
    }
})