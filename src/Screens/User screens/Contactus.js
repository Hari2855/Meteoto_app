import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Contactus = ({navigation}) => {
  return (
    <View style={styles.container1}>
          <View style={styles.header}>
              <Pressable onPress={() => navigation.navigate('Help')}>
                  <MaterialIcons name='keyboard-arrow-left' color={'#ffffff'} size={24} style={{ marginLeft: moderateScale(15) }} />
              </Pressable>

              <Text style={styles.text1}>CONTACT US</Text>
          </View>

          <View style={styles.container2}>
              <Image source={require('../icon/Profile-section-imgs/profile-options-img/Gif/Smile.gif')} style={{ width: scale(80), height: scale(84) }} />
              <Text style={styles.text2}>{`CONTACT US FOR ANY \nSUPPORT`}</Text>
          </View>

          <View style={styles.line1}></View>

          <Text style={[styles.text2, {color: '#ffffff', marginTop: moderateScale(20), marginLeft: moderateScale(20)}]}>CONTACT VIA</Text>

          <Pressable style={styles.container3}>
              <Image source={require('../icon/Profile-section-imgs/profile-options-img/static/Mail.png')} style={styles.img} />
              <Text style={styles.text3}>Mail us</Text>
              <Image source={require('../icon/emergency-icons/Fender4.png')} style={[styles.imges, { marginLeft: '50%' }]} />
          </Pressable>

          <Pressable style={styles.container3}>
              <Image source={require('../icon/Profile-section-imgs/profile-options-img/static/Phone.png')} style={styles.img} />
              <Text style={styles.text3}>Call us</Text>
              <Image source={require('../icon/emergency-icons/Fender4.png')} style={[styles.imges, { marginLeft: '51%' }]} />
          </Pressable>

          <Pressable style={styles.container3}>
              <Image source={require('../icon/Profile-section-imgs/profile-options-img/static/Click.png')} style={styles.img} />
              <Text style={styles.text3}>Website</Text>
              <Image source={require('../icon/emergency-icons/Fender4.png')} style={[styles.imges, { marginLeft: '47%' }]} />
          </Pressable>

          <Text style={{fontSize: moderateScale(40), fontWeight: '200', color: '#666666', marginTop: moderateScale(30), alignSelf: 'center'}}>{`Quality Service is \nour Goal.`}</Text>
    </View>
  )
}

export default Contactus

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#333333'
    },
    header: {
        flexDirection: 'row',
        height: verticalScale(60),
        backgroundColor: '#333333',
        alignItems: 'center',
    },
    text1: {
        color: '#ffffff',
        fontSize: moderateScale(12),
        fontWeight: '500',
        marginLeft: moderateScale(100),
        marginBottom: moderateScale(5)
    },
    container2: {
        width: scale(320),
        height: verticalScale(124),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    text2: {
        color: '#000000',
        fontSize: moderateScale(16),
        fontWeight: '500',
    },
    line1: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#929292',
        marginTop: moderateScale(30)
    },
    container3: {
        width: moderateScale(320),
        height: verticalScale(60),
        borderRadius: moderateScale(8),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row'
    },
    text3: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: '#333333',
        marginLeft: moderateScale(30)
    },
    img: {
        width: scale(32),
        height: scale(32),
        marginLeft: moderateScale(15)
    },
    imges: {
        width: moderateScale(15),
        height: verticalScale(15),
        tintColor: '#a0a0a0',
    },

})