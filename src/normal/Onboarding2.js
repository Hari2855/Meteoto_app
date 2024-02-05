import { View, Text, Pressable, Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const Onboarding2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../Screens/icon/imges/Imag2.png')} style={styles.img1}>
                <Image source={require('../Screens/icon/imges/Imgupperlayer.png')} style={{ width: moderateScale(360), height: verticalScale(485) }} />
                <View style={styles.container2}>
                    <View style={[styles.ds, { width: scale(16), backgroundColor: '#ffffff' }]}></View>
                    <View style={styles.ds}></View>
                    <View style={[styles.ds, { width: scale(16), backgroundColor: '#ffffff' }]}></View>
                </View>
            </ImageBackground>

            <Text style={styles.text1}>AUTOPARTS</Text>

            <Text style={[styles.text2, { marginTop: moderateScale(10) }]}>FIND ALL YOUR CAR PARTS AT ONE</Text>
            <Text style={styles.text2}>PLACE!</Text>

            <Pressable style={styles.textc} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.text3}>SKIP</Text>
                <View style={{ width: scale(28), height: scale(1), backgroundColor: '#cccccc', }}></View>
            </Pressable>

            <Pressable style={styles.btn} onPress={() => navigation.navigate('Onboarding3')}>
                <Image source={require('../Screens/icon/imges/Nextbtn.png')} style={styles.img} />
            </Pressable>
            <Pressable style={styles.btn1} onPress={() => navigation.navigate('Onboarding')}>
                <Image source={require('../Screens/icon/imges/Vector1.png')} style={{width: scale(6), height: scale(12)}}/>
            </Pressable>
        </View>
    )
}

export default Onboarding2

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
    btn1: {
        width: scale(48),
        height: scale(48),
        borderRadius: scale(20),
        borderWidth: 1,
        borderColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        bottom: '93%',
        marginLeft: moderateScale(30)
    }
})