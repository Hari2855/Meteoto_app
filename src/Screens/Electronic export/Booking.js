import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const Booking1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{height: verticalScale(700)}} showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          <Pressable style={styles.icons} onPress={() => navigation.navigate('Home')}>
            <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
          </Pressable>
        </View>

        <View style={styles.status}>
          <Text style={styles.text1}>Booking Confirmed!</Text>
        </View>

        <View style={styles.shop}>
          <Image source={require('../icon/imges/Ellipsee.png')} style={styles.img} />
          <View style={styles.details}>
            <Text style={styles.text2}>APEX GARAGE</Text>
            <Text style={styles.text3}>Harpreet Singh Dogra</Text>
            <View style={styles.reating}>
              <Image source={require('../icon/imges/Star1.png')} style={{ height: scale(13.33), width: scale(13.33) }} />
              <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#333333' }}>4.6</Text>
            </View>
          </View>

          <View style={styles.otp}>
            <Text style={{ fontSize: moderateScale(16), fontWeight: '500', color: '#333333' }}>OTP</Text>
            <Text style={{ fontSize: moderateScale(16), fontWeight: '500', color: '#fc9865' }}>2379</Text>
          </View>
        </View>

        <View style={styles.contact}>
          <View style={styles.textContainer1}>
            <Text style={styles.text4}>C O N N E C T  W I T H  G A R A G E</Text>
          </View>

          <View style={styles.contact1}>
            <Pressable style={styles.imgContainer}>
              <Image source={require('../icon/imges/Phone.png')} style={{ height: scale(20), width: scale(20) }} />
            </Pressable>
            <Pressable style={[styles.imgContainer, { left: scale(20) }]}>
              <Image source={require('../icon/imges/Chat1.png')} style={{ height: scale(24), width: scale(24) }} />
            </Pressable>
          </View>
        </View>

        <View style={styles.address}>
          <View style={styles.textContainer1}>
            <Text style={styles.text4}>G A R A G E   A D D R E S S</Text>
          </View>
          <View style={styles.line}></View>

          <View style={styles.textContainer2}>
            <Text style={styles.text5}>Indrapuri, Sector-A, Near BHEL, Bhopal</Text>
          </View>

          <View style={styles.textContainer3}>
            <Text style={styles.text6}>2.7 km (5 min)</Text>
            <Text style={styles.text6}>Away from your location</Text>
          </View>

          <Pressable style={styles.textContainer4}>
            <Text style={styles.text7}>LOCATE ME</Text>
          </Pressable>
        </View>

        <View style={styles.bookingdetails}>
          <Text style={styles.text9}>B O O K I N G   D E T A I L S</Text>
          <View style={styles.line}></View>
          <Text style={[styles.text10, { marginTop: moderateScale(15) }]}>Booking Time: <Text style={{fontSize: moderateScale(12), fontWeight: '400', color: '#333333'}}>6:00PM (Today)</Text></Text>
          <Text style={[styles.text10, { top: moderateScale(3) }]}>Service Name: <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Electronic Expert</Text></Text>
        </View>
      </ScrollView>
      <Pressable style={styles.track} onPress={() => navigation.navigate('Emergencytrack')}>
        <Text style={styles.text8}>TRACK REQUEST</Text>
      </Pressable>
    </View>
  )
}

export default Booking1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
  },
  textContainer: {
    width: moderateScale(360),
    height: verticalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    width: scale(48),
    height: scale(48),
    alignItems: 'center',
    justifyContent: 'center',
    bottom: moderateScale(10),
    alignSelf: 'flex-start',
    marginLeft: moderateScale(10)
  },
  imges: {
    width: scale(24),
    height: scale(16),
    tintColor: '#ffffff',
  },
  text: {
    fontSize: moderateScale(16),
    color: '#ff9966',
    fontWeight: '700'
  },
  status: {
    width: scale(360),
    height: scale(40),
    backgroundColor: '#e1ffb0',
    justifyContent: 'center'
  },
  text1: {
    fontSize: moderateScale(12),
    fontWeight: '500',
    color: '#333333',
    alignSelf: 'center'
  },
  tex: {
    color: 'black',
    fontWeight: '700',
    fontSize: moderateScale(13)
  },
  shop: {
    width: scale(320),
    height: scale(96),
    borderRadius: scale(5),
    backgroundColor: '#ffffff',
    marginTop: moderateScale(30),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  img: {
    height: scale(60),
    width: scale(60)
  },
  details: {
    width: scale(133),
    height: scale(64),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    right: scale(25)
  },
  text2: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: '#333333'
  },
  text3: {
    fontSize: moderateScale(12),
    fontWeight: '500',
    color: '#666666',
    left: scale(4)
  },
  reating: {
    flexDirection: 'row',
    // borderWidth: 1,
    width: scale(39),
    height: scale(16),
    alignItems: 'center',
    right: moderateScale(35),
    justifyContent: 'space-around',
  },
  otp: {
    width: scale(63),
    height: scale(52),
    borderRadius: scale(5),
    borderWidth: 1,
    borderColor: '#cecece',
    flexDirection: 'column',
    alignItems: 'center',
    bottom: moderateScale(8)
  },
  contact: {
    width: scale(320),
    height: scale(120),
    borderRadius: scale(5),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: moderateScale(40),
    borderBottomWidth: 4,
    borderColor: '#33CCCC'
  },
  textContainer1: {
    width: scale(188),
    height: scale(24),
    top: moderateScale(8),
    left: moderateScale(8)
  },
  text4: {
    color: '#333333',
    fontSize: moderateScale(12),
    fontWeight: '500'
  },
  contact1: {
    width: scale(320),
    height: scale(85),
    marginTop: moderateScale(8),
    borderTopWidth: 1,
    borderColor: '#d3d3d3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  imgContainer: {
    height: scale(48),
    width: scale(48),
    borderRadius: scale(20),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#6f6f6f',
    left: scale(8)
  },
  address: {
    width: scale(320),
    height: scale(168),
    borderRadius: scale(5),
    backgroundColor: '#ffffff',
    marginTop: moderateScale(20),
    alignSelf: 'center',
  },
  line: {
    width: scale(316),
    height: scale(1),
    backgroundColor: '#dbdbdb',
    marginTop: scale(8)
  },
  textContainer2: {
    width: scale(304),
    height: scale(24),
    justifyContent: 'center',
    // borderWidth: 1,
    alignSelf: 'center',
    marginTop: scale(10)
  },
  text5: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: '#333333'
  },
  textContainer3: {
    width: scale(259),
    height: scale(32),
    marginTop: moderateScale(10),
    marginLeft: moderateScale(8),
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  text6: {
    fontSize: moderateScale(12),
    color: '#666666',
    fontWeight: '500'
  },
  textContainer4: {
    width: scale(100),
    height: scale(32),
    // marginTop: moderateScale(10),
    alignSelf: 'flex-end',
    right: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center'
  },
  text7: {
    fontSize: moderateScale(12),
    fontWeight: '500',
    color: '#33CCCC'
  },
  track: {
    width: moderateScale(320),
    height: verticalScale(40),
    borderRadius: moderateScale(5),
    backgroundColor: '#33CCCC',
    alignSelf: 'center',
    bottom: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center'
  },
  text8: {
    fontSize: moderateScale(12),
    fontWeight: '500',
    color: '#ffffff'
  },
  bookingdetails: {
    width: moderateScale(320),
    height: verticalScale(100),
    borderRadius: moderateScale(5),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  text9: {
    fontSize: moderateScale(12),
    fontWeight: '500',
    color: '#333333',
    marginTop: moderateScale(10),
    marginLeft: moderateScale(10)
  },
  text10: {
    fontSize: moderateScale(12),
    fontWeight: '400',
    color: '#666666',
    marginLeft: moderateScale(10),
  }
})

