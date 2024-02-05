import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CarModels from './CarModels'

const Addcar = ({navigation}) => {
    const [Car, SetCar] = useState(false);

    const toggleScreen = () => {
        SetCar(!Car);
    };


  return (
    <View style={styles.container}>
          <View style={styles.header}>
              <Pressable onPress={() => navigation.navigate('Managecars')}>
                  <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={{ height: scale(16), width: scale(24), tintColor: '#ffffff', marginLeft: moderateScale(30) }} />
              </Pressable>

              <Text style={styles.text1}>MY CARS</Text>
          </View>

          <Text style={styles.text2}>ADD YOUR CAR</Text>

          <Image source={require('../icon/imges/Car3.png')} style={styles.img}></Image>
          <Pressable style={styles.button} onPress={toggleScreen}>
              <Text style={styles.textc}>SELECT YOUR CAR</Text>
              <Ionicons name='chevron-down' color={'#ffffff'} size={16} style={{ marginLeft: moderateScale(5) }} />
          </Pressable>
          <CarModels isVisible={Car} closeModal={toggleScreen} navigation={navigation} />
    </View>
  )
}

export default Addcar

const styles = StyleSheet.create({
    container: {
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
    img: {
        width: moderateScale(360),
        height: verticalScale(500),
        zIndex: -1,
        bottom: moderateScale(20),
    },
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        alignSelf: 'center',
        top: moderateScale(90),
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        marginTop: moderateScale(30),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textc: {
        fontSize: moderateScale(10),
        fontWeight: '500',
        color: '#ffffff'
    },
})