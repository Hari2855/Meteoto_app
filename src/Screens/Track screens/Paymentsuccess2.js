import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Ratingmodel from '../3D-wheel/Ratingmodel'
import Feather from 'react-native-vector-icons/Feather'

const Paymentsuccess2 = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false)

    const toggleModal = () => {
        setModalVisible(true)
    }


    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: verticalScale(900) }}>
                <View style={styles.header}>
                    <Pressable style={styles.icons} onPress={() => navigation.navigate('Home')}>
                        <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
                    </Pressable>

                    <Text style={styles.TEXT}>AUTOPARTS</Text>
                </View>
                <View style={styles.container1}>
                    <Image source={require('../icon/gif-icons/Verified.gif')} style={styles.img} />
                    <Text style={styles.text}>Payment Successful!</Text>
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
                    <View style={styles.line2}></View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.text3, {marginTop: moderateScale(10)}]}>Transaction ID: <Text style={[styles.text3, { color: '#333333' }]}>IJBVKJ7657655766787</Text></Text>
                        <Pressable>
                            <Feather name='clipboard' color={'#33CCCC'} size={16} style={{marginTop: moderateScale(10), marginLeft: moderateScale(50)}}/>
                        </Pressable>
                    </View>
                    <Text style={[styles.text3, { marginTop: moderateScale(20) }]}>Credited from:</Text>
                    <View style={{flexDirection: 'row', marginLeft: moderateScale(10), marginTop: moderateScale(10)}}>
                        <Pressable style={styles.imgc}>
                        <Image source={require('../icon/imges/Bank.png')} style={styles.img1}/>
                        </Pressable>
                        <Text style={[styles.text3, {color: '#333333'}]}>XXXXXXX4030</Text>
                    </View>
                    <View style={{flexDirection: 'row',bottom: moderateScale(10), marginLeft: moderateScale(42)}}>
                    <Text style={[styles.text3, {color: '#333333'}]}>UTR: 121212121212</Text>
                        <Pressable>
                            <Feather name='clipboard' color={'#33CCCC'} size={16} style={{ marginTop: moderateScale(3), marginLeft: moderateScale(112) }} />
                        </Pressable>
                    </View>
                </View>

                <Text style={styles.text1}>{`Thanks for \nbelieving us :)`}</Text>
            </ScrollView>
            <Pressable style={styles.button} onPress={toggleModal}>
                <Text style={styles.Text8}>RATE YOUR EXPERIENCE</Text>
            </Pressable>
            <Ratingmodel isVisible={isModalVisible} closeModal={toggleModal} navigation={navigation} />
        </View>
    )
}

export default Paymentsuccess2

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
    container1: {
        backgroundColor: '#ffffff',
        height: scale(244),
        width: scale(312),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: moderateScale(22),
        borderRadius: moderateScale(10),
        marginTop: moderateScale(30)
    },
    text: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: '#333333',
        marginTop: moderateScale(10)
    },
    img: {
        width: scale(100),
        height: scale(100)
    },
    text1: {
        fontSize: moderateScale(40),
        color: '#666666',
        fontWeight: '200',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(90)
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
        bottom: moderateScale(40)
    },
    Text8: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    },
    line: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#999999',
        marginTop: moderateScale(20)
    },
    payslip: {
        width: moderateScale(320),
        height: verticalScale(308),
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
    line2: {
        width: moderateScale(320),
        height: verticalScale(1),
        borderTopWidth: 1,
        borderColor: '#a6a6a6',
        marginTop: moderateScale(10),
        borderStyle: 'dashed'
    },
    imgc: {
        width: scale(32),
        height: scale(32),
        borderRadius: scale(20),
        borderWidth: 1,
        borderColor: '#999999',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img1: {
        width: scale(24),
        height: scale(24),
        borderRadius: scale(15)
    }
})