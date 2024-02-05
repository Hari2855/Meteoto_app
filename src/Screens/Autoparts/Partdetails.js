import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image, ScrollView, } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import { Checkbox } from 'react-native-paper'

const Partdetails = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.icons} onPress={() => navigation.navigate('Cart')}>
                    <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
                </Pressable>

                <Text style={styles.TEXT}>AUTOPARTS</Text>
            </View>

            <View style={styles.cardetails}>
                <View style={styles.details}>
                    <View style={styles.dcontainer}>
                        <Image source={require('../icon/imges/Ellipse24.png')} style={styles.imge} />

                        <View style={{ marginLeft: moderateScale(8) }}>
                            <Text style={styles.Text1}>Hyundai Verna</Text>
                            <Text style={styles.Text2}>{`Verna SX Turbo DT \nPetrol`}</Text>
                        </View>
                    </View>
                    <Pressable style={styles.edit} onPress={() => navigation.navigate('AutoHome')}>
                        <Image source={require('../icon/imges/Edit1.png')} style={styles.img} />
                    </Pressable>
                </View>
            </View>
            <View style={styles.line}></View>

            <Text style={styles.Text4}>VENDOR RESPONSE</Text>

            <View style={styles.scrollcontainer}>
                <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                    <View style={styles.partcontainer}>
                        <Pressable style={styles.part}>
                            <Image source={require('../icon/imges/Imagcontainer1.png')} style={styles.img1} />
                        </Pressable>
                        <View style={styles.line1}></View>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.textcontainer}>
                                <Text style={{ fontSize: moderateScale(16), fontWeight: '500', color: '#333333' }}>Alternator</Text>
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Price(₹): 3156 (per unit)</Text>
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: OEM</Text>
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Qt. : 2</Text>
                            </View>
                            <Text style={{ color: '#999999' }}>--------------------------------------------------------------</Text>
                            <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#333333', marginLeft: moderateScale(10) }}>Total(₹): 6200</Text>
                        </View>
                        <View style={styles.checkbox}>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                                color='#33cccc'
                            />
                        </View>
                    </View>
                    <View style={styles.partcontainer}>
                        <Pressable style={styles.part}>
                            <Image source={require('../icon/imges/Imagcontainer1.png')} style={styles.img1} />
                        </Pressable>
                        <View style={styles.line1}></View>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.textcontainer}>
                                <Text style={{ fontSize: moderateScale(16), fontWeight: '500', color: '#333333' }}>Alternator</Text>
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Price(₹): 3156 (per unit)</Text>
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: OEM</Text>
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Qt. : 2</Text>
                            </View>
                            <Text style={{ color: '#999999' }}>--------------------------------------------------------------</Text>
                            <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#333333', marginLeft: moderateScale(10) }}>Total(₹): 6200</Text>
                        </View>
                        <View style={styles.checkbox}>
                            <Checkbox
                                status={checked1 ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked1(!checked1);
                                }}
                                color='#33cccc'
                            />
                        </View>
                    </View>
                    <View style={styles.partcontainer}>
                        <Pressable style={styles.part}>
                            <Image source={require('../icon/imges/Imagcontainer1.png')} style={styles.img1} />
                        </Pressable>
                        <View style={styles.line1}></View>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.textcontainer}>
                                <Text style={{ fontSize: moderateScale(16), fontWeight: '500', color: '#333333' }}>Alternator</Text>
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Price(₹): 3156 (per unit)</Text>
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: OEM</Text>
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Qt. : 2</Text>
                            </View>
                            <Text style={{ color: '#999999' }}>--------------------------------------------------------------</Text>
                            <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#333333', marginLeft: moderateScale(10) }}>Total(₹): 6200</Text>
                        </View>
                        <View style={styles.checkbox}>
                            <Checkbox
                                status={checked2 ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked2(!checked2);
                                }}
                                color='#33cccc'
                            />
                        </View>
                    </View>
                    <View style={styles.partcontainer}>
                        <Pressable style={styles.part}>
                            <Image source={require('../icon/imges/Imagcontainer1.png')} style={styles.img1} />
                        </Pressable>
                        <View style={styles.line1}></View>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.textcontainer}>
                                <Text style={{ fontSize: moderateScale(16), fontWeight: '500', color: '#333333' }}>Alternator</Text>
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Price(₹): 3156 (per unit)</Text>
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: OEM</Text>
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Qt. : 2</Text>
                            </View>
                            <Text style={{ color: '#999999' }}>--------------------------------------------------------------</Text>
                            <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#333333', marginLeft: moderateScale(10) }}>Total(₹): 6200</Text>
                        </View>
                        <View style={styles.checkbox}>
                            <Checkbox
                                status={checked3 ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked3(!checked3);
                                }}
                                color='#33cccc'
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>

            <Pressable style={styles.button1}>
                <Text style={styles.Text8}>TOTAL PRICE (₹)</Text>
                <Text style={[styles.Text8, { color: '#333333', marginLeft: moderateScale(150) }]}>10052</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Address1')}>
                <Text style={styles.Text7}>PLACE ORDER</Text>
            </Pressable>
        </View>
    )
}

export default Partdetails

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
        marginLeft: moderateScale(95),
        bottom: moderateScale(10)
    },
    cardetails: {
        width: moderateScale(320),
        height: verticalScale(88),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        // marginTop: moderateScale(20)
        elevation: 10
    },
    details: {
        width: moderateScale(306),
        height: verticalScale(60),
        // alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: moderateScale(10),
    },
    dcontainer: {
        width: moderateScale(203),
        height: verticalScale(60),
        flexDirection: 'row'
    },
    edit: {
        width: scale(48),
        height: scale(48),
        borderRadius: scale(20),
        borderWidth: 1,
        borderColor: '#999999',
        alignItems: 'center',
        justifyContent: 'center',
        left: moderateScale(10)
    },
    img: {
        width: scale(24),
        height: scale(24),
        tintColor: 'black'
    },
    imge: {
        height: scale(50),
        width: scale(50),
        borderRadius: scale(25)
    },
    Text1: {
        color: '#383838',
        fontSize: moderateScale(16),
        fontWeight: '400'
    },
    Text2: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#9e9e9e'
    },
    Text3: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#33CCCC',
        marginTop: moderateScale(5),
        marginLeft: moderateScale(18)
    },
    line: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#4c4c4c',
        marginTop: moderateScale(15)
    },
    Text4: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(18),
        marginTop: moderateScale(10)
    },
    scrollcontainer: {
        width: moderateScale(320),
        height: verticalScale(340),
        alignSelf: 'center'
    },
    scroll: {
        width: moderateScale(320),
        height: verticalScale(100),
        marginTop: moderateScale(10),
        alignSelf: 'center',
    },
    partcontainer: {
        width: moderateScale(320),
        height: verticalScale(120.56),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        elevation: 10,
        alignItems: 'center',
        marginTop: moderateScale(10)
    },
    part: {
        width: scale(52),
        height: scale(52),
        borderRadius: scale(30),
        borderWidth: 1,
        borderColor: 'gray',
        marginLeft: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    img1: {
        width: scale(45),
        height: scale(45)
    },
    line1: {
        height: verticalScale(120.56),
        width: moderateScale(1.5),
        backgroundColor: '#999999',
        marginLeft: moderateScale(15)
    },
    button: {
        width: scale(320),
        height: scale(40),
        borderRadius: scale(5),
        backgroundColor: '#33CCCC',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(20)
    },
    Text7: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
    },
    button1: {
        height: verticalScale(48),
        width: scale(320),
        backgroundColor: '#ffffff',
        marginTop: moderateScale(30),
        borderRadius: scale(5),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    Text8: {
        fontSize: moderateScale(14),
        fontWeight: '500',
        color: '#666666',
        marginLeft: moderateScale(12)
    },
    textcontainer: {
        width: scale(144),
        height: scale(76),
        marginLeft: moderateScale(10),
        top: moderateScale(10)
    },
    checkbox: {
        // borderWidth: 1, 
        // borderColor: 'red', 
        right: scale(60), 
        bottom: scale(15)
    }
})