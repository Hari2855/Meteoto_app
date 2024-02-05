import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image, ScrollView, } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Feather from 'react-native-vector-icons/Feather'

const Address1 = ({ navigation }) => {
    const [color, setcolor] = useState(0)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.icons} onPress={() => navigation.navigate('Partdetails')}>
                    <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
                </Pressable>

                <Text style={styles.TEXT}>AUTOPARTS</Text>
            </View>
            <Text style={styles.Text1}>SELECTED ADDRESS FOR DELIVERY</Text>
            <Text style={styles.Text2}>SAVED ADDRESSES</Text>
            <Pressable style={[styles.addressContainer,{ borderWidth: color == 0 ? 3 : 0, borderColor: color == 0 ? '#33CCCC' : '#ffffff' }]} onPress={() => setcolor(0)}>
                <Image source={require('../icon/emergency-icons/Bill1.png')} style={styles.img} />
                <Text style={styles.Text3}>Indrapuri Sector-A Nea...</Text>
                <Pressable style={styles.edit} onPress={() => navigation.navigate('Updateaddress')}>
                    <Image source={require('../icon/emergency-icons/Edit.png')} style={styles.img1} />
                </Pressable>
            </Pressable>
            <Pressable style={[styles.addressContainer,{ borderWidth: color == 1 ? 3 : 0, borderColor: color == 1 ? '#33CCCC' : '#ffffff' }]} onPress={() => setcolor(1)}>
                <Image source={require('../icon/emergency-icons/Bill1.png')} style={styles.img} />
                <Text style={styles.Text3}>Indrapuri Sector-A Nea...</Text>
                <Pressable style={styles.edit} onPress={() => navigation.navigate('Updateaddress')}>
                    <Image source={require('../icon/emergency-icons/Edit.png')} style={styles.img1} />
                </Pressable>
            </Pressable>
            <View style={styles.line}></View>
            <Text style={styles.Text4}>H A V I N G  N E W  A D D R E S S ?</Text>
            <Pressable style={styles.newaddress} onPress={() => navigation.navigate('Newaddress')}>
                <Text style={styles.Text5}>+</Text>
                <Text style={styles.Text6}>Add New Address</Text>
            </Pressable>
            <View style={styles.line}></View>
            <View style={styles.timecontainer}>
                <Feather name='truck' color={'#ffffff'} size={24} />
                <Text style={styles.Text7}>Part will be delivered till Tomorrow.</Text>
            </View>
            <View style={[styles.timecontainer, {marginTop: moderateScale(10)}]}>
                <Feather name='refresh-ccw' color={'#ffffff'} size={24}/>
                <Text style={styles.Text7}>Part will be delivered till Tomorrow.</Text>
            </View>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Bill1')}>
                <Text style={styles.Text8}>PAY NOW</Text>
            </Pressable>
        </View>
    )
}

export default Address1

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
    Text1: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(10)
    },
    Text2: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#c9c9c9',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(30)
    },
    addressContainer: {
        width: moderateScale(320),
        height: verticalScale(60),
        borderRadius: moderateScale(10),
        backgroundColor: '#ffffff',
        marginLeft: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: moderateScale(10),
        justifyContent: 'space-evenly'
    },
    img: {
        height: scale(32),
        width: scale(32)
    },
    Text3: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: '#333333'
    },
    edit: {
        width: scale(48),
        height: scale(48),
        borderRadius: scale(20),
        borderWidth: 1,
        borderColor: '#999999',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img1: {
        width: scale(25),
        height: scale(25)
    },
    line: {
        width: scale(360),
        height: scale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(40)
    },
    Text4: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20)
    },
    newaddress: {
        width: scale(165),
        height: scale(48),
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: scale(5),
        alignSelf: 'center',
        marginTop: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row',
        // justifyContent: 'space-evenly'
    },
    Text5: {
        fontSize: moderateScale(25),
        fontWeight: '400',
        color: '#ffffff',
        marginLeft: moderateScale(15),
    },
    Text6: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(10)
    },
    timecontainer: {
        width: scale(256),
        height: scale(24),
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20),
        flexDirection: 'row',
    },
    Text7: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        marginTop: moderateScale(2),
        marginLeft: moderateScale(15)
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        marginLeft: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(80)
    },
    Text8: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    }
})