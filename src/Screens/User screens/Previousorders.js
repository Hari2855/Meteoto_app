import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const Previousorders = ({navigation}) => {
    const [color, setColor] = useState(0)
    const [first, setfirst] = useState(0)
    const [second, setSecond] = useState(0)


    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Pressable style={[styles.box1, { backgroundColor: color == 0 ? '#33cccc' : '#333333' }]} onPress={() => setColor(0)}>
                    <Text style={styles.text3}>Delivered</Text>
                </Pressable>
                <Pressable style={[styles.box2, { backgroundColor: color == 1 ? '#33cccc' : '#333333' }]} onPress={() => setColor(1)}>
                    <Text style={styles.text3}>Cancelled</Text>
                </Pressable>
                <Pressable style={[styles.box3, { backgroundColor: color == 2 ? '#33cccc' : '#333333' }]} onPress={() => setColor(2)}>
                    <Text style={styles.text3}>Return</Text>
                </Pressable>
            </View>

            <View style={styles.line1}></View>

            <View style={styles.container2}>
                <Pressable style={[styles.box4, { backgroundColor: first == 1 ? '#33CCCC' : '#333333' }]} onPress={() => setfirst(first === 1 ? 0 : 1)}>
                    {first == 0 ? <View>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#cccccc' }}>Last Month</Text>
                    </View> :
                        <Text style={styles.text3}>Last Month  x</Text>}
                </Pressable>

                <Pressable style={[styles.box4, { backgroundColor: second == 1 ? '#33CCCC' : '#333333' }]} onPress={() => setSecond(second === 1 ? 0 : 1)}>
                    {second == 0 ? <View>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#cccccc' }}>Last 3-Month</Text>
                    </View> :
                        <Text style={styles.text3}>Last 3-Month  x</Text>}
                </Pressable>
            </View>


           <ScrollView showsHorizontalScrollIndicator={false}>
            {color == 0 ? <View>
                    <Text style={[styles.Text4, { color: '#ffffff', marginLeft: moderateScale(20), marginTop: moderateScale(20) }]}>12/09/2023</Text>

                    <Pressable style={styles.container3} onPress={() => navigation.navigate('Returnorder')}>
                        <Text style={[styles.Text4, { color: '#666666', marginTop: moderateScale(10), marginLeft: moderateScale(10) }]}>S I N G L E   P A R T</Text>
                        <View style={styles.line2}></View>
                        <View style={[styles.container4, { marginTop: moderateScale(15), }]}>
                            <Pressable style={styles.imgcontainer}>
                                <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                            </Pressable>
                            <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Alternator</Text>
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: OEM</Text>
                            </View>
                        </View>
                        <View style={styles.dot}>
                            <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666', top: moderateScale(5), alignSelf: 'flex-end', right: moderateScale(15) }}>Status: <Text style={{color: '#99CC33'}}>Delivered</Text></Text>
                        </View>
                    </Pressable>

                    <Text style={[styles.Text4, { color: '#ffffff', marginLeft: moderateScale(20), marginTop: moderateScale(20) }]}>30/09/2023</Text>

                    <View style={styles.container5}>
                        <View style={styles.textcontainer}>
                            <Text style={[styles.Text4, { color: '#666666', marginLeft: moderateScale(10) }]}>M U L T I P L E   P A R T S</Text>
                        </View>

                        <View style={{ width: moderateScale(320), height: verticalScale(110), flexDirection: 'row', borderBottomWidth: 1, borderColor: '#999999' }}>
                            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: verticalScale(100), width: moderateScale(296), alignSelf: 'center', marginTop: moderateScale(10) }} nestedScrollEnabled={true}>
                                <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                                    <View style={styles.container4}>
                                        <Pressable style={styles.imgcontainer}>
                                            <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                                        </Pressable>
                                        <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                            <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Alternator</Text>
                                            <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: OEM</Text>
                                        </View>
                                    </View>

                                    <View style={[styles.container4, { marginTop: moderateScale(15), }]}>
                                        <Pressable style={styles.imgcontainer}>
                                            <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                                        </Pressable>
                                        <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                            <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Clutch plate</Text>
                                            <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: Global X</Text>
                                        </View>
                                    </View>

                                    <View style={[styles.container4, { marginTop: moderateScale(15), }]}>
                                        <Pressable style={styles.imgcontainer}>
                                            <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                                        </Pressable>
                                        <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                            <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Clutch plate</Text>
                                            <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: Global X</Text>
                                        </View>
                                    </View>

                                    <View style={[styles.container4, { marginTop: moderateScale(15), }]}>
                                        <Pressable style={styles.imgcontainer}>
                                            <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                                        </Pressable>
                                        <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                            <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Clutch plate</Text>
                                            <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: Global X</Text>
                                        </View>
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
                            <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666', top: moderateScale(5), alignSelf: 'flex-end', right: moderateScale(15) }}>Status: <Text style={{color: '#99CC00'}}>Delivered</Text></Text>
                        </View>
                    </View>

            </View> :

                color == 1 ? <View>
                        <Text style={[styles.Text4, { color: '#ffffff', marginLeft: moderateScale(20), marginTop: moderateScale(20) }]}>12/09/2023</Text>

                        <View style={[styles.container3, { borderTopColor: '#FF9966' }]}>
                            <Text style={[styles.Text4, { color: '#666666', marginTop: moderateScale(10), marginLeft: moderateScale(10) }]}>S I N G L E   P A R T</Text>
                            <View style={styles.line2}></View>
                            <View style={[styles.container4, { marginTop: moderateScale(15), }]}>
                                <Pressable style={styles.imgcontainer}>
                                    <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                                </Pressable>
                                <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                    <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Alternator</Text>
                                    <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: OEM</Text>
                                </View>
                            </View>
                            <View style={styles.dot}>
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666', top: moderateScale(5), alignSelf: 'flex-end', right: moderateScale(15) }}>Status: <Text style={{ color: '#FF9966' }}>Cancelled</Text></Text>
                            </View>
                        </View>

                        <Text style={[styles.Text4, { color: '#ffffff', marginLeft: moderateScale(20), marginTop: moderateScale(20) }]}>30/09/2023</Text>

                        <View style={[styles.container5, { borderTopColor: '#FF9966' }]}>
                            <View style={styles.textcontainer}>
                                <Text style={[styles.Text4, { color: '#666666', marginLeft: moderateScale(10) }]}>M U L T I P L E   P A R T S</Text>
                            </View>

                            <View style={{ width: moderateScale(320), height: verticalScale(110), flexDirection: 'row', borderBottomWidth: 1, borderColor: '#999999' }}>
                                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: verticalScale(100), width: moderateScale(296), alignSelf: 'center', marginTop: moderateScale(10) }} nestedScrollEnabled={true}>
                                    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                                        <View style={styles.container4}>
                                            <Pressable style={styles.imgcontainer}>
                                                <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                                            </Pressable>
                                            <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Alternator</Text>
                                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: OEM</Text>
                                            </View>
                                        </View>

                                        <View style={[styles.container4, { marginTop: moderateScale(15), }]}>
                                            <Pressable style={styles.imgcontainer}>
                                                <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                                            </Pressable>
                                            <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Clutch plate</Text>
                                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: Global X</Text>
                                            </View>
                                        </View>

                                        <View style={[styles.container4, { marginTop: moderateScale(15), }]}>
                                            <Pressable style={styles.imgcontainer}>
                                                <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                                            </Pressable>
                                            <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Clutch plate</Text>
                                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: Global X</Text>
                                            </View>
                                        </View>

                                        <View style={[styles.container4, { marginTop: moderateScale(15), }]}>
                                            <Pressable style={styles.imgcontainer}>
                                                <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                                            </Pressable>
                                            <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Clutch plate</Text>
                                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: Global X</Text>
                                            </View>
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
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666', top: moderateScale(5), alignSelf: 'flex-end', right: moderateScale(15) }}>Status: <Text style={{ color: '#FF9966' }}>Cancelled</Text></Text>
                            </View>
                        </View>

                
                </View> :
                    <View>
                        <Text style={[styles.Text4, { color: '#ffffff', marginLeft: moderateScale(20), marginTop: moderateScale(20) }]}>12/09/2023</Text>

                        <View style={[styles.container3, {borderTopColor: '#FFCC00'}]}>
                            <Text style={[styles.Text4, { color: '#666666', marginTop: moderateScale(10), marginLeft: moderateScale(10) }]}>S I N G L E   P A R T</Text>
                            <View style={styles.line2}></View>
                            <View style={[styles.container4, { marginTop: moderateScale(15), }]}>
                                <Pressable style={styles.imgcontainer}>
                                    <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                                </Pressable>
                                <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                    <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Alternator</Text>
                                    <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: OEM</Text>
                                </View>
                                <Pressable onPress={() => navigation.navigate('Orderdetails3')} style={[styles.track1, { left: moderateScale(110) }]}>
                                    <Text style={styles.Text4}>Track</Text>
                                </Pressable>
                            </View>
                            <View style={styles.dot}>
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666', top: moderateScale(5), alignSelf: 'flex-end', right: moderateScale(15) }}>Status:  <Text>Delivered</Text></Text>
                            </View>
                        </View>

                        <Text style={[styles.Text4, { color: '#ffffff', marginLeft: moderateScale(20), marginTop: moderateScale(20) }]}>30/09/2023</Text>

                        <View style={[styles.container5, {borderTopColor: '#FFCC00'}]}>
                            <View style={styles.textcontainer}>
                                <Text style={[styles.Text4, { color: '#666666', marginLeft: moderateScale(10) }]}>M U L T I P L E   P A R T S</Text>
                            </View>

                            <View style={{ width: moderateScale(320), height: verticalScale(110), flexDirection: 'row', borderBottomWidth: 1, borderColor: '#999999' }}>
                                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: verticalScale(100), width: moderateScale(296), alignSelf: 'center', marginTop: moderateScale(10) }} nestedScrollEnabled={true}>
                                    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                                        <View style={styles.container4}>
                                            <Pressable style={styles.imgcontainer}>
                                                <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                                            </Pressable>
                                            <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Alternator</Text>
                                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: OEM</Text>
                                            </View>
                                            <Pressable onPress={() => navigation.navigate('Orderdetails3')} style={[styles.track1, { left: moderateScale(110) }]}>
                                                <Text style={styles.Text4}>Track</Text>
                                            </Pressable>
                                        </View>

                                        <View style={[styles.container4, { marginTop: moderateScale(15), }]}>
                                            <Pressable style={styles.imgcontainer}>
                                                <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                                            </Pressable>
                                            <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Clutch plate</Text>
                                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: Global X</Text>
                                            </View>
                                            <Pressable onPress={() => navigation.navigate('Orderdetails3')} style={[styles.track1, { left: moderateScale(90) }]}>
                                                <Text style={styles.Text4}>Track</Text>
                                            </Pressable>
                                        </View>

                                        <View style={[styles.container4, { marginTop: moderateScale(15), }]}>
                                            <Pressable style={styles.imgcontainer}>
                                                <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                                            </Pressable>
                                            <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Clutch plate</Text>
                                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: Global X</Text>
                                            </View>
                                            <Pressable onPress={() => navigation.navigate('Orderdetails3')} style={[styles.track1, { left: moderateScale(90) }]}>
                                                <Text style={styles.Text4}>Track</Text>
                                            </Pressable>
                                        </View>

                                        <View style={[styles.container4, { marginTop: moderateScale(15), }]}>
                                            <Pressable style={styles.imgcontainer}>
                                                <Image source={require('../icon/imges/imgcontainer.png')} style={{ width: scale(32), height: scale(32) }} />
                                            </Pressable>
                                            <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Clutch plate</Text>
                                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: Global X</Text>
                                            </View>
                                            <Pressable onPress={() => navigation.navigate('Orderdetails3')} style={[styles.track1, { left: moderateScale(90) }]}>
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
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666', top: moderateScale(5), alignSelf: 'flex-end', right: moderateScale(15) }}>Status:  <Text>Delivered</Text></Text>
                            </View>
                        </View>
                    </View>}
            </ScrollView>

        </View>
    )
}

export default Previousorders

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    container1: {
        width: moderateScale(310),
        height: verticalScale(48),
        alignSelf: 'center',
        marginTop: moderateScale(30),
        alignItems: 'center',
        flexDirection: 'row'
    },
    box1: {
        width: moderateScale(105),
        height: verticalScale(40),
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: moderateScale(20),
        borderRightWidth: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box2: {
        width: moderateScale(105),
        height: verticalScale(40),
        borderWidth: 1,
        borderColor: '#999999',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box3: {
        width: moderateScale(105),
        height: verticalScale(40),
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: moderateScale(20),
        borderLeftWidth: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text3: {
        color: '#ffffff',
        fontSize: moderateScale(12),
        fontWeight: '500'
    },
    line1: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#999999',
        marginTop: moderateScale(20)
    },
    container2: {
        width: moderateScale(233),
        height: verticalScale(40),
        marginTop: moderateScale(20),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box4: {
        width: moderateScale(100),
        height: verticalScale(24),
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: moderateScale(12),
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text4: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#33CCCC'
    },
    container3: {
        height: verticalScale(132),
        width: moderateScale(320),
        borderTopWidth: 5,
        borderTopColor: '#99CC33',
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        marginTop: moderateScale(5),
        borderBottomLeftRadius: moderateScale(5),
        borderBottomRightRadius: moderateScale(5),
        alignSelf: 'center'
    },
    line2: {
        width: moderateScale(318),
        height: verticalScale(1),
        backgroundColor: '#999999',
        marginTop: moderateScale(10)
    },
    container4: {
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
    container5: {
        width: moderateScale(320),
        height: verticalScale(316),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(40),
        borderTopWidth: 5,
        borderTopColor: '#99CC33',
        borderBottomLeftRadius: moderateScale(5),
        borderBottomRightRadius: moderateScale(5),
        bottom: moderateScale(35)
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
    line3: {
        width: moderateScale(72),
        height: verticalScale(2),
        backgroundColor: '#cccccc',
        borderRadius: moderateScale(8),
        alignSelf: 'center',
        bottom: moderateScale(5)
    },
    track1: {
        width: moderateScale(50),
        height: verticalScale(20),
        alignItems: 'center',
        justifyContent: 'center',
        left: moderateScale(130),
        top: moderateScale(10)
    },
})