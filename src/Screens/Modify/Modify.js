import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CircleContainer from './Circlecontainer'

const Modify = ({ navigation }) => {
    const [isHeartFilled, setHeartFilled] = useState(false);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.icons} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
                </Pressable>
                <Text style={styles.TEXT}>MODIFY</Text>
            </View>
            <Text style={styles.TEXT1}>FIND SHOPS IN YOUE CITY</Text>
            <View style={styles.line}></View>
            <ScrollView style={styles.container1} showsVerticalScrollIndicator={false}>
                <View style={styles.container2}>
                    <Pressable style={styles.shopcontainer} onPress={() => navigation.navigate('ShopProfile')}>
                        <Image source={require('../icon/imges/Shop.png')} style={styles.img} />
                        <Text style={styles.TEXT2}>Harapreet Garage &...</Text>
                        <View style={styles.rating}>
                            <MaterialCommunityIcons name='star-circle' color={'#33CCCC'} size={16} />
                            <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>4.6</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
                            <View style={[styles.rating, { width: scale(60), marginTop: moderateScale(5) }]}>
                                <MaterialCommunityIcons name='map-marker-distance' color={'#33CCCC'} size={16} />
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>5.2 km</Text>
                            </View>
                            <CircleContainer onHeartPress={(isFilled) => { console.log('Heart Pressed. Filled:', isFilled); }} />
                        </View>
                    </Pressable>
                    <Pressable style={[styles.shopcontainer, { marginLeft: moderateScale(16) }]}>
                        <Image source={require('../icon/imges/Shop.png')} style={styles.img} />
                        <Text style={styles.TEXT2}>Harapreet Garage &...</Text>
                        <View style={styles.rating}>
                            <MaterialCommunityIcons name='star-circle' color={'#33CCCC'} size={16} />
                            <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>4.6</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
                            <View style={[styles.rating, { width: scale(60), marginTop: moderateScale(5) }]}>
                                <MaterialCommunityIcons name='map-marker-distance' color={'#33CCCC'} size={16} />
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>5.2 km</Text>
                            </View>
                            <CircleContainer onHeartPress={(isFilled) => { console.log('Heart Pressed. Filled:', isFilled); }} />
                        </View>
                    </Pressable>
                </View>

                <View style={[styles.container2, { marginTop: moderateScale(20) }]}>
                    <Pressable style={styles.shopcontainer}>
                        <Image source={require('../icon/imges/Shop.png')} style={styles.img} />
                        <Text style={styles.TEXT2}>Harapreet Garage &...</Text>
                        <View style={styles.rating}>
                            <MaterialCommunityIcons name='star-circle' color={'#33CCCC'} size={16} />
                            <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>4.6</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
                            <View style={[styles.rating, { width: scale(60), marginTop: moderateScale(5) }]}>
                                <MaterialCommunityIcons name='map-marker-distance' color={'#33CCCC'} size={16} />
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>5.2 km</Text>
                            </View>
                            <CircleContainer onHeartPress={(isFilled) => { console.log('Heart Pressed. Filled:', isFilled); }} />
                        </View>
                    </Pressable>
                    <Pressable style={[styles.shopcontainer, { marginLeft: moderateScale(16) }]}>
                        <Image source={require('../icon/imges/Shop.png')} style={styles.img} />
                        <Text style={styles.TEXT2}>Harapreet Garage &...</Text>
                        <View style={styles.rating}>
                            <MaterialCommunityIcons name='star-circle' color={'#33CCCC'} size={16} />
                            <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>4.6</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
                            <View style={[styles.rating, { width: scale(60), marginTop: moderateScale(5) }]}>
                                <MaterialCommunityIcons name='map-marker-distance' color={'#33CCCC'} size={16} />
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>5.2 km</Text>
                            </View>
                            <CircleContainer onHeartPress={(isFilled) => { console.log('Heart Pressed. Filled:', isFilled); }} />
                        </View>
                    </Pressable>
                </View>

                <View style={[styles.container2, { marginTop: moderateScale(20) }]}>
                    <Pressable style={styles.shopcontainer}>
                        <Image source={require('../icon/imges/Shop.png')} style={styles.img} />
                        <Text style={styles.TEXT2}>Harapreet Garage &...</Text>
                        <View style={styles.rating}>
                            <MaterialCommunityIcons name='star-circle' color={'#33CCCC'} size={16} />
                            <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>4.6</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
                            <View style={[styles.rating, { width: scale(60), marginTop: moderateScale(5) }]}>
                                <MaterialCommunityIcons name='map-marker-distance' color={'#33CCCC'} size={16} />
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>5.2 km</Text>
                            </View>
                            <CircleContainer onHeartPress={(isFilled) => { console.log('Heart Pressed. Filled:', isFilled); }} />
                        </View>
                    </Pressable>
                    <Pressable style={[styles.shopcontainer, { marginLeft: moderateScale(16) }]}>
                        <Image source={require('../icon/imges/Shop.png')} style={styles.img} />
                        <Text style={styles.TEXT2}>Harapreet Garage &...</Text>
                        <View style={styles.rating}>
                            <MaterialCommunityIcons name='star-circle' color={'#33CCCC'} size={16} />
                            <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>4.6</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
                            <View style={[styles.rating, { width: scale(60), marginTop: moderateScale(5) }]}>
                                <MaterialCommunityIcons name='map-marker-distance' color={'#33CCCC'} size={16} />
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>5.2 km</Text>
                            </View>
                            <CircleContainer onHeartPress={(isFilled) => { console.log('Heart Pressed. Filled:', isFilled); }} />
                        </View>
                    </Pressable>
                </View>

                <View style={[styles.container2, { marginTop: moderateScale(20) }]}>
                    <Pressable style={styles.shopcontainer}>
                        <Image source={require('../icon/imges/Shop.png')} style={styles.img} />
                        <Text style={styles.TEXT2}>Harapreet Garage &...</Text>
                        <View style={styles.rating}>
                            <MaterialCommunityIcons name='star-circle' color={'#33CCCC'} size={16} />
                            <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>4.6</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
                            <View style={[styles.rating, { width: scale(60), marginTop: moderateScale(5) }]}>
                                <MaterialCommunityIcons name='map-marker-distance' color={'#33CCCC'} size={16} />
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>5.2 km</Text>
                            </View>
                            <CircleContainer onHeartPress={(isFilled) => { console.log('Heart Pressed. Filled:', isFilled); }} />
                        </View>
                    </Pressable>
                    <Pressable style={[styles.shopcontainer, { marginLeft: moderateScale(16) }]}>
                        <Image source={require('../icon/imges/Shop.png')} style={styles.img} />
                        <Text style={styles.TEXT2}>Harapreet Garage &...</Text>
                        <View style={styles.rating}>
                            <MaterialCommunityIcons name='star-circle' color={'#33CCCC'} size={16} />
                            <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>4.6</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
                            <View style={[styles.rating, { width: scale(60), marginTop: moderateScale(5) }]}>
                                <MaterialCommunityIcons name='map-marker-distance' color={'#33CCCC'} size={16} />
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>5.2 km</Text>
                            </View>
                            <CircleContainer onHeartPress={(isFilled) => { console.log('Heart Pressed. Filled:', isFilled); }} />
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}

export default Modify

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    header: {
        width: moderateScale(360),
        height: verticalScale(60),
        alignItems: 'center',
        flexDirection: 'row'
    },
    icons: {
        width: scale(48),
        height: scale(48),
        alignItems: 'center',
        justifyContent: 'center'
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
        marginLeft: moderateScale(110)
    },
    TEXT1: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20)
    },
    line: {
        width: scale(360),
        height: scale(1),
        backgroundColor: '#3c3c3c',
        marginTop: moderateScale(10)
    },
    container1: {
        width: moderateScale(320),
        alignSelf: 'center',
        marginTop: moderateScale(20)
    },
    container2: {
        width: moderateScale(320),
        height: verticalScale(216),
        flexDirection: 'row'
    },
    shopcontainer: {
        height: verticalScale(216),
        width: moderateScale(152),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(12),
        flexDirection: 'column',
    },
    img: {
        width: scale(144),
        height: scale(112),
        borderRadius: scale(10),
        alignSelf: 'center',
        marginTop: moderateScale(4)
    },
    TEXT2: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#333333',
        marginTop: moderateScale(5),
        marginLeft: moderateScale(10)
    },
    rating: {
        width: scale(39),
        height: scale(16),
        // borderWidth: 1,
        marginLeft: moderateScale(5),
        marginTop: moderateScale(10),
        flexDirection: 'row',
        justifyContent: 'center'
    },
    circle: {
        width: scale(32),
        height: scale(32),
        borderRadius: scale(16),
        borderWidth: 1,
        borderColor: '#FFC2AE',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: moderateScale(40)
    },
    shape: {
        width: scale(72),
        height: scale(2),
        borderRadius: scale(10),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(30),
        bottom: moderateScale(10)
    }
})