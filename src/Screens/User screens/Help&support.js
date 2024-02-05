import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Helpsupport = ({navigation}) => {
  return (
    <View style={styles.container1}>
          <View style={styles.header}>
              <Pressable onPress={() => navigation.navigate('User')}>
                  <MaterialIcons name='keyboard-arrow-left' color={'#ffffff'} size={24} style={{ marginLeft: moderateScale(15) }} />
              </Pressable>

              <Text style={styles.text1}>HELP & SUPPORT</Text>
          </View>

          <Pressable style={styles.container2} onPress={() => navigation.navigate('Faq')}>
              <Image source={require('../icon/Profile-section-imgs/profile-options-img/static/Qanda.png')} style={styles.img}/>
              <Text style={styles.text2}>FAQs</Text>
              <Image source={require('../icon/emergency-icons/Fender4.png')} style={[styles.imges, { marginLeft: '53%' }]} />
          </Pressable>

          <Pressable style={styles.container2} onPress={() => navigation.navigate('Chatwithus')}>
              <Image source={require('../icon/Profile-section-imgs/profile-options-img/static/Speechbubble.png')} style={styles.img} />
              <Text style={styles.text2}>Chat with us</Text>
              <Image source={require('../icon/emergency-icons/Fender4.png')} style={[styles.imges, { marginLeft: '37%' }]} />
          </Pressable>

          <Pressable style={styles.container2} onPress={() => navigation.navigate('Contact')}>
              <Image source={require('../icon/Profile-section-imgs/profile-options-img/static/Opinion.png')} style={styles.img} />
              <Text style={styles.text2}>Contact us</Text>
              <Image source={require('../icon/emergency-icons/Fender4.png')} style={[styles.imges, { marginLeft: '40%' }]} />
          </Pressable>

          <View style={styles.line1}></View>

          <Pressable style={[styles.container2, { marginTop: moderateScale(30) }]} onPress={() => navigation.navigate('Feedback')}>
              <Image source={require('../icon/Profile-section-imgs/profile-options-img/Gif/Speechbubble.gif')} style={styles.img} />
              <Text style={styles.text2}>Your Feedback</Text>
              <Image source={require('../icon/emergency-icons/Fender4.png')} style={[styles.imges, { marginLeft: '30%' }]} />
          </Pressable>
    </View>
  )
}

export default Helpsupport

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
        marginLeft: moderateScale(90),
        marginBottom: moderateScale(5)
    },
    container2: {
        width: moderateScale(320),
        height: verticalScale(60),
        borderRadius: moderateScale(8),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row'
    },
    img: {
        width: scale(32),
        height: scale(32),
        marginLeft: moderateScale(15)
    },
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: '#333333',
        marginLeft: moderateScale(30)
    },
    imges: {
        width: moderateScale(15),
        height: verticalScale(15),
        tintColor: '#a0a0a0',
    },
    line1: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#929292',
        marginTop: moderateScale(30)
    },

})