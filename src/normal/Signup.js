import { View, Text, Pressable, Image, ImageBackground, StyleSheet, TextInput } from 'react-native'
import React, {useState} from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const Signup = ({navigation}) => {
    const [name, setname] = useState('')
    const [number, setnumber] = useState('')
    const [email, setemail] = useState('')

    const areDetailsFilled = () => {
        return name && number && email
    };

  return (
    <View style={styles.container1}>
          <ImageBackground source={require('../Screens/icon/imges/Frame13.png')} style={styles.imgbgc}>
          </ImageBackground>
          <Text style={styles.text1}>SIGNUP</Text>
          <Text style={styles.text2}>Full Name</Text>
          <TextInput placeholder='Sneha Sharma' placeholderTextColor={'#B8B8B8'} fontSize={moderateScale(12)} style={styles.input} onChangeText={(text) => setname(text)} />

          <View style={{ flexDirection: 'column' }}>
              <Text style={styles.text2}>Mobile Number</Text>
              <View style={styles.input1}>
                  <Text style={styles.text3}>+91</Text>
                  <TextInput placeholder='971xxxxxxx' placeholderTextColor={'#c0c0c0'} keyboardType='numeric' style={styles.textinput1} onChangeText={(text) => setnumber(text)} />
              </View>
          </View>

          <Text style={styles.text2}>Email Id</Text>
          <TextInput placeholder='email@gmail.com' placeholderTextColor={'#B8B8B8'} inputMode='email' fontSize={moderateScale(12)} style={styles.input} onChangeText={(text) => setemail(text)} />

          <Pressable style={[styles.btn, { backgroundColor: areDetailsFilled() == false ? 'gray' : '#33CCCC' }]} onPress={() => {
              if (areDetailsFilled()) {
                  navigation.navigate('Verification')
              } else {
                  console.log("Please fill all details");
              }
          }}
              disabled={!areDetailsFilled()}>
              <Text style={styles.text4}>PROCEED</Text>
          </Pressable>
          <Pressable style={{flexDirection: 'row', alignSelf: 'center', marginTop: moderateScale(5)}} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.text4}>Already have an account?<Text style={{color: '#33CCCC'}}> LOGIN</Text></Text>
          </Pressable>
    </View>
  )
}

export default Signup

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
        fontFamily: 'Nunito Sans'
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
        marginTop: moderateScale(50),
        alignSelf: 'center'
    },
    text4: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        fontFamily: 'Nunito'
    },
})