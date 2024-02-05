import { View, Text, Pressable, Image, ImageBackground, StyleSheet, TextInput } from 'react-native'
import React, {useState} from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const Login = ({ navigation }) => {
    const [number, setNumber] = useState('')

    const areDetailsFilled = () => {
        return number
    };
    return (
        <View style={styles.container1}>
            <ImageBackground source={require('../Screens/icon/imges/Frame13.png')} style={styles.imgbgc}>
            </ImageBackground>
            <Text style={styles.text1}>LOGIN</Text>

            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.text2}>Mobile Number</Text>
                <View style={styles.input1}>
                    <Text style={styles.text3}>+91</Text>
                    <TextInput placeholder='971xxxxxxx' placeholderTextColor={'#c0c0c0'} onChangeText={(text) => setNumber(text)} keyboardType='numeric' style={styles.textinput1}/>
                </View>
            </View>

            <Text style={[styles.text3,{marginLeft: moderateScale(20), marginTop: moderateScale(25)}]}>{`Enter your registered Mobile Number to receive OTP \nfor login`}</Text>

            <Pressable style={[styles.btn, { backgroundColor: areDetailsFilled() == false ? 'gray' : '#33CCCC' }]} onPress={() => {
                if (areDetailsFilled()) {
                    navigation.navigate('Verification')
                } else {
                    console.log("Please fill all details");
                }
            }}
                disabled={!areDetailsFilled()}>
                <Text style={styles.text4}>LOGIN</Text>
            </Pressable>
            <Pressable style={{ flexDirection: 'row', alignSelf: 'center', marginTop: moderateScale(5) }} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.text4}>Need to create account?<Text style={{ color: '#33CCCC' }}> SIGNUP</Text></Text>
            </Pressable>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#333333',
    },
    imgbgc: {
        width: moderateScale(360),
        height: verticalScale(262),
        bottom: moderateScale(30)
    },
    text1: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        alignSelf: 'center',
        fontFamily: 'Nunito Sans',
        bottom: moderateScale(10)
    },
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        fontFamily: 'Nunito Sans',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20)
    },
    input: {
        width: moderateScale(320),
        height: verticalScale(48),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        paddingLeft: moderateScale(20),
        borderRadius: moderateScale(8)
    },
    text3: {
        color: '#c0c0c0',
        fontSize: moderateScale(12),
        fontFamily: 'Nunito Sans',
    },
    input1: {
        height: verticalScale(48),
        width: moderateScale(320),
        borderColor: '#35cccc',
        top: moderateScale(10),
        borderRadius: moderateScale(8),
        backgroundColor: '#ffffff',
        paddingLeft: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
    textinput1: {
        fontSize: moderateScale(12),
        color: 'black',
        borderLeftWidth: 1,
        borderColor: '#c0c0c0',
        marginLeft: moderateScale(10),
        padding: 10,
        height: '100%',
        width: '100%'
    },
    btn: {
        height: scale(40),
        width: scale(320),
        borderRadius: scale(5),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#33CCCC',
        marginTop: '55%',
        alignSelf: 'center'
    },
    text4: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        fontFamily: 'Nunito'
    },
})