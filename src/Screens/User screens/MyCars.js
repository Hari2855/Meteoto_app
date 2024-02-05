import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Logoutmodel from './Logoutmodel'

const MyCars = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
              <Pressable onPress={() => navigation.navigate('User')}>
                  <MaterialIcons name='keyboard-arrow-left' color={'#ffffff'} size={24} style={{ marginLeft: moderateScale(15) }} />
              </Pressable>

              <Text style={styles.text1}>MY CARS</Text>
          </View>

          <View style={styles.container2}>
              <Image source={require('../icon/gif-icons/Taxi4.gif')} style={{ width: scale(80), height: scale(84) }} />
              <Text style={styles.text2}>{`FIND ALL YOUR CARS \nAT ONE PLACE`}</Text>
          </View>

          <View style={styles.line1}></View>

          <Text style={styles.text3}>MY CARS</Text>

          <View style={styles.container1}>
            <View style={{width: moderateScale(68), height: verticalScale(88), marginTop: moderateScale(32), marginLeft: moderateScale(10), flexDirection: 'column', alignItems: 'center'}}>
                  <Image source={require('../icon/Profile-section-imgs/Carimgpremium.png')} style={styles.img}/> 
               <Text style={{fontSize: moderateScale(12), fontWeight: '400', color: '#666666'}}>Verna</Text>
            </View>
            <View style={styles.line2}></View>
            <View style={{width: moderateScale(112), flexDirection: 'column', marginLeft: moderateScale(15), marginTop: moderateScale(10)}}>
                  <Text style={[styles.text2, {color: '#333333'}]}>Hyundai Verna</Text>
                  <Text style={styles.text4}>MP04 MR 9807</Text>
                  <View style={{width: moderateScale(74), flexDirection: 'row', marginTop: moderateScale(15)}}>
                    <Image source={require('../icon/imges/Car.png')} style={{height: scale(16), width: scale(16)}}/>
                      <Text style={[styles.text4, {marginLeft: moderateScale(5)}]}>Verna EX</Text>
                  </View>
                  <View style={{ width: moderateScale(74), flexDirection: 'row', marginTop: moderateScale(5) }}>
                      <Image source={require('../icon/imges/Gasstation.png')} style={{ height: scale(16), width: scale(16) }} />
                      <Text style={[styles.text4, { marginLeft: moderateScale(5) }]}>Petrol</Text>
                  </View>
                  <View style={{ width: moderateScale(74), flexDirection: 'row', marginTop: moderateScale(5) }}>
                      <Image source={require('../icon/imges/Calendarrange.png')} style={{ height: scale(16), width: scale(16) }} />
                      <Text style={[styles.text4, { marginLeft: moderateScale(5) }]}>2022</Text>
                  </View>
            </View>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Managecars')}><Text style={styles.text5}>Edit</Text></Pressable>
          </View>

          <View style={[styles.container1, {marginTop: moderateScale(20)}]}>
              <View style={{ width: moderateScale(68), height: verticalScale(88), marginTop: moderateScale(32), marginLeft: moderateScale(10), flexDirection: 'column', alignItems: 'center' }}>
                  <Image source={require('../icon/Profile-section-imgs/Carimgpremium.png')} style={styles.img} />
                  <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Verna</Text>
              </View>
              <View style={styles.line2}></View>
              <View style={{ width: moderateScale(112), flexDirection: 'column', marginLeft: moderateScale(15), marginTop: moderateScale(10) }}>
                  <Text style={[styles.text2, { color: '#333333' }]}>Hyundai Verna</Text>
                  <Text style={styles.text4}>MP04 MR 9807</Text>
                  <View style={{ width: moderateScale(74), flexDirection: 'row', marginTop: moderateScale(15) }}>
                      <Image source={require('../icon/imges/Car.png')} style={{ height: scale(16), width: scale(16) }} />
                      <Text style={[styles.text4, { marginLeft: moderateScale(5) }]}>Verna EX</Text>
                  </View>
                  <View style={{ width: moderateScale(74), flexDirection: 'row', marginTop: moderateScale(5) }}>
                      <Image source={require('../icon/imges/Gasstation.png')} style={{ height: scale(16), width: scale(16) }} />
                      <Text style={[styles.text4, { marginLeft: moderateScale(5) }]}>Petrol</Text>
                  </View>
                  <View style={{ width: moderateScale(74), flexDirection: 'row', marginTop: moderateScale(5) }}>
                      <Image source={require('../icon/imges/Calendarrange.png')} style={{ height: scale(16), width: scale(16) }} />
                      <Text style={[styles.text4, { marginLeft: moderateScale(5) }]}>2022</Text>
                  </View>
              </View>
              <Pressable style={styles.button} onPress={() => navigation.navigate('Managecars')}><Text style={styles.text5}>Edit</Text></Pressable>
          </View>

          <Pressable style={styles.button1} onPress={() => navigation.navigate('Managecars')}><Text style={[styles.text5, {color: '#ffffff'}]}>MANAGE CARS</Text></Pressable>
    </ScrollView>
  )
}

export default MyCars

const styles = StyleSheet.create({
    container: {
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
        marginLeft: moderateScale(115),
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
        backgroundColor: '#7e7e7e',
        marginTop: moderateScale(20)
    },
    text3: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20)
    },
    container1: {
        width: moderateScale(320),
        height: verticalScale(136),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(15),
        flexDirection: 'row'
    },
    img: {
        height: scale(65),
        width: scale(65),
        borderRadius: scale(40)
    },
    line2: {
        height: verticalScale(136),
        width: moderateScale(1),
        backgroundColor: '#bcbcbc',
        marginLeft: moderateScale(15)
    },
    text4: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#666666',
    },
    button: {
        width: moderateScale(56),
        height: verticalScale(24),
        borderRadius: moderateScale(12),
        borderWidth: 1,
        borderColor: '#33CCCC',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginBottom: moderateScale(15),
        marginLeft: moderateScale(30)
    },
    text5: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#333333'
    },
    button1: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        marginTop: moderateScale(60),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: moderateScale(20)
    }

})