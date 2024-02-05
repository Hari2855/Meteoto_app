import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Pressable, Image, TextInput, ScrollView } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'
import Sound from 'react-native-sound';

const Waintingscreen = ({navigation}) => {

    setTimeout(() => {
        navigation.navigate('Partdetails')
    }, 3000);

  return (
      <LinearGradient colors={['#ffffff', '#333333', '#333333',]} style={styles.container}>
        <Text style={[styles.text, {marginTop: moderateScale(50)}]}>YOUR REQUEST IS ACCEPTED BY WNDOR</Text>
          <Text style={[styles.text, { marginTop: moderateScale(5) }]}>SOON YOU WILL RECEIVE RESPONSE</Text>

          <View style={styles.container2}>
            <Image source={require('../icon/static-icons/Wait.gif')} style={{height: scale(100), width: scale(100)}}/>
              <Text style={[styles.text, {color: '#000000', marginTop: moderateScale(20)}]}>Vendor is listing price(s) for the part(s)</Text>
          </View>

          <Text style={styles.text1}>{`We value your \ntime`}</Text>
      </LinearGradient>
  )
}

export default Waintingscreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: moderateScale(12),
        fontWeight: '600',
        color: '#333333',
        alignSelf: 'center',
        fontFamily: 'Nunito Sans'
    },
    container2: {
        width: moderateScale(320),
        height: verticalScale(200),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(70),
        alignItems: 'center',
        justifyContent: 'center'
    },
    text1: {
        fontSize: moderateScale(40),
        color: '#666666',
        fontFamily: 'Nunito Sans',
        marginLeft: moderateScale(20),
        marginTop: '55%'
    }
})