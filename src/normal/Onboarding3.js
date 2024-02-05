import { View, Text, Pressable, Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const Onboarding3 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../Screens/icon/imges/Imag3.png')} style={styles.img1}>
                <Image source={require('../Screens/icon/imges/Imgupperlayer.png')} style={{ width: moderateScale(360), height: verticalScale(485) }} />
                <View style={styles.container2}>
                    <View style={[styles.ds, { width: scale(16), backgroundColor: '#ffffff' }]}></View>
                    <View style={[styles.ds, { width: scale(16), backgroundColor: '#ffffff' }]}></View>
                    <View style={styles.ds}></View>
                </View>
            </ImageBackground>

            <Text style={styles.text1}>ALL AT ONC</Text>

            <Text style={[styles.text2, { marginTop: moderateScale(10) }]}>ALL CAR RELATED SERVICES ARE</Text>
            <Text style={styles.text2}>AVAILABLE AT ONE PLACE!</Text>

            <Pressable style={styles.btn} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.text4}>GET STARTED!</Text>
            </Pressable>
            <Pressable style={styles.btn1} onPress={() => navigation.navigate('Onboarding2')}>
                <Image source={require('../Screens/icon/imges/Vector1.png')} style={{ width: scale(6), height: scale(12) }} />
            </Pressable>
        </View>
    )
}

export default Onboarding3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    img1: {
        width: moderateScale(360),
        height: verticalScale(480),
        alignItems: 'center',
        justifyContent: 'center'
    },
    container2: {
        width: scale(72),
        height: scale(4),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        bottom: moderateScale(45)
    },
    ds: {
        width: scale(32),
        height: scale(4),
        backgroundColor: '#33CCCC',
        borderRadius: scale(5)
    },
    text1: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#33CCCC',
        alignSelf: 'center',
        marginTop: moderateScale(50),
        fontFamily: 'Nunito Sans'
    },
    text2: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#cccccc',
        alignSelf: 'center',
        fontFamily: 'Nunito Sans'
    },
    textc: {
        flexDirection: 'column',
        height: scale(16),
        width: scale(28),
        marginLeft: moderateScale(40),
        marginTop: moderateScale(40)
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '600',
        color: '#cccccc',
        fontFamily: 'Nunito Sans',
    },
    btn: {
        height: scale(40),
        width: scale(320),
        borderRadius: scale(5),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#33CCCC',
        marginTop: moderateScale(40),
        alignSelf: 'center'
    },
    text4: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        fontFamily: 'Nunito'
    },
    img: {
        width: scale(60),
        height: scale(60)
    },
    btn1: {
        width: scale(48),
        height: scale(48),
        borderRadius: scale(20),
        borderWidth: 1,
        borderColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        bottom: '90%',
        marginLeft: moderateScale(30)
    }
})