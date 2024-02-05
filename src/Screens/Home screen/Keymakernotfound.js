import React from 'react'
import { Pressable } from 'react-native'
import { View, Text, StyleSheet, Image } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const Keymakernotfound = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>KEY MAKER</Text>
            </View>

            <Image source={require('../icon/illustration/Empty1.png')} style={styles.img} />

            <View style={styles.textContainer1}>
                <Text style={styles.text1}>we couldn't find any key maker</Text>
                <Text style={[styles.text1, { marginTop: moderateScale(5) }]}>nearby you!</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Text style={styles.text2}>You might look for Mechanic Service</Text>
                <Pressable style={styles.button}>
                    <Text style={styles.text3}>FIND MECHANIC</Text>
                </Pressable>
            </View>

            <Pressable style={styles.back} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.text4}>GO BACK TO HOME</Text>
            </Pressable>
        </View>
    )
}

export default Keymakernotfound

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    textContainer: {
        width: moderateScale(360),
        height: verticalScale(60),
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#3f3f3f'
    },
    text: {
        fontSize: moderateScale(16),
        color: '#ff9966',
        fontWeight: '700'
    },
    img: {
        width: moderateScale(204),
        height: verticalScale(150),
        alignSelf: 'center',
        marginTop: moderateScale(30)
    },
    textContainer1: {
        width: moderateScale(294),
        height: verticalScale(64),
        // borderWidth: 1,
        // borderColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(30),
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text1: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: '#ffffff'
    },
    buttonContainer: {
        width: moderateScale(280),
        height: verticalScale(84),
        // borderWidth: 1,
        // borderColor: '#ffffff',
        marginTop: moderateScale(90),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff'
    },
    button: {
        width: moderateScale(136),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        marginTop: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    },
    back: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderWidth: 1,
        borderColor: '#33CCCC',
        borderRadius: moderateScale(5),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(100)
    },
    text4: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#33CCCC'
    }

})