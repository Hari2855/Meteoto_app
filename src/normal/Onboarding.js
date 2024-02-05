import { View, Text, Pressable, Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const Onboarding = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../Screens/icon/imges/Mech.png')} style={styles.img1}>
                <Image source={require('../Screens/icon/imges/Imgupperlayer.png')} style={{ width: moderateScale(360), height: verticalScale(485) }} />
                <Pressable style={styles.btn1}></Pressable>
                <View style={styles.container2}>
                    <View style={styles.ds}></View>
                    <View style={[styles.ds, { width: scale(16), backgroundColor: '#ffffff' }]}></View>
                    <View style={[styles.ds, { width: scale(16), backgroundColor: '#ffffff' }]}></View>
                </View>
            </ImageBackground>

            <Text style={styles.text1}>CAR SERVICE</Text>

            <Text style={[styles.text2, { marginTop: moderateScale(10) }]}>SERVICE YOUR CAR WITH OUR</Text>
            <Text style={styles.text2}>PROFESSIONAL GARAGE PARTNERS!</Text>

            <Pressable style={styles.textc} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.text3}>SKIP</Text>
                <View style={{width: scale(28), height: scale(1), backgroundColor: '#cccccc',}}></View>
            </Pressable>

            <Pressable style={styles.btn} onPress={() => navigation.navigate('Onboarding2')}>
                <Image source={require('../Screens/icon/imges/Nextbtn.png')} style={styles.img} />
            </Pressable>
        </View>
    )
}

export default Onboarding

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
        bottom: moderateScale(35)
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
        height: scale(60),
        width: scale(60),
        alignSelf: 'flex-end',
        bottom: moderateScale(40),
        marginRight: moderateScale(20)
    },
    img: {
        width: scale(60),
        height: scale(60)
    },
})