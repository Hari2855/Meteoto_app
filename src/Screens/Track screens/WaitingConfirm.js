import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable, ScrollView } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Feather from 'react-native-vector-icons/Feather'

const WaitingConfirm = ({navigation}) => {
  return (
      <View style={styles.container1}>
          <View style={styles.container2}>
              <Pressable onPress={() => navigation.navigate('Track')}>
                  <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={{ height: scale(16), width: scale(24), tintColor: '#ffffff', marginLeft: moderateScale(20) }} />
              </Pressable>
              <Text style={styles.text1}>CAR SERVICE</Text>
          </View>

          <Image source={require('../icon/imges/Timeillustrate.png')} style={styles.img}/>
          <Text style={styles.text2}>We are waiting for Garage confirmation!</Text>
          <Text style={[styles.text3, {marginTop: moderateScale(15)}]}>You will be notified, when any Garage will accept</Text>
          <Text style={styles.text3}>your request!</Text>
          <View style={styles.line}></View>
      </View>
  )
}

export default WaitingConfirm

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#333333'
    },
    container2: {
        width: '100%',
        height: verticalScale(60),
        alignItems: 'center',
        flexDirection: 'row',
    },
    text1: {
        color: '#ffffff',
        fontSize: moderateScale(12),
        fontWeight: '500',
        marginLeft: moderateScale(95),
        marginBottom: moderateScale(5)
    },
    img: {
        width: scale(100),
        height: scale(100),
        alignSelf: 'center',
        marginTop: moderateScale(190)
    },
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20)
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#ffffff',
        alignSelf: 'center',
    },
    line: {
        width: scale(72),
        height: scale(2),
        backgroundColor: '#a4a4a4',
        borderRadius: scale(8),
        alignSelf: 'center',
        marginTop: moderateScale(268)
    }
})