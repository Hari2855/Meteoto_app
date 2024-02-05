import { View, Text, StyleSheet, Pressable, Image, ImageBackground,} from 'react-native'
import React, {useState} from 'react'
import {scale,verticalScale,moderateScale} from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CarModels from './CarModels'
import { ScrollView } from 'react-native'

const CarService = ({navigation}) => {
    const [Car, SetCar] = useState(false);

    const toggleScreen = () => {
        SetCar(!Car);
    };

  return (
    <View style={styles.container}>
          <View style={styles.header}>
              <Pressable style={styles.icons} onPress={() => navigation.navigate('Home')}>
                  <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
              </Pressable>

              <Text style={styles.TEXT}>CAR SERVICES</Text>
          </View>

          <ImageBackground source={require('../icon/imges/Mech.png')} style={styles.img}>
          </ImageBackground>

          <Text style={styles.text}>I WANT CAR SERVICE FOR</Text>

          <View style={styles.container1}>
            <Pressable style={styles.container2} onPress={toggleScreen}>
                <Text style={styles.textc}>SELECT CAR</Text>
                  <Ionicons name='chevron-down' color={'#33CCCC'} size={16} style={{marginLeft: moderateScale(5)}}/>

                <CarModels isVisible={Car} closeModal={toggleScreen} navigation={navigation}/>
            </Pressable>
            <Text style={styles.text1}>You can select Car, if not saved earlier!</Text>
          </View>

          <View style={styles.line}></View>

          <Text style={styles.text2}>YOUR SAVED CARS</Text>

          <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
              <Pressable style={styles.car} onPress={() => {navigation.navigate('CarForm')}}>
                  <View style={styles.carcontainer}>
                      <Image source={require('../icon/imges/Discovery.png')} style={{ width: scale(80), height: scale(48) }} />
                      <Text style={styles.text3}>Land Rover - Defender</Text>
                  </View>
              </Pressable>

              <Pressable style={styles.car} onPress={() => { navigation.navigate('CarForm') }}>
                  <View style={styles.carcontainer}>
                      <Image source={require('../icon/imges/Discovery.png')} style={{ width: scale(80), height: scale(48) }} />
                      <Text style={styles.text3}>Land Rover - Defender</Text>
                  </View>
              </Pressable>

              <Pressable style={styles.car} onPress={() => { navigation.navigate('CarForm') }}>
                  <View style={styles.carcontainer}>
                      <Image source={require('../icon/imges/Discovery.png')} style={{ width: scale(80), height: scale(48) }} />
                      <Text style={styles.text3}>Land Rover - Defender</Text>
                  </View>
              </Pressable>

              <Pressable style={styles.car} onPress={() => { navigation.navigate('CarForm') }}>
                  <View style={styles.carcontainer}>
                      <Image source={require('../icon/imges/Discovery.png')} style={{ width: scale(80), height: scale(48) }} />
                      <Text style={styles.text3}>Land Rover - Defender</Text>
                  </View>
              </Pressable>

              <Pressable style={styles.car} onPress={() => { navigation.navigate('CarForm') }}>
                  <View style={styles.carcontainer}>
                      <Image source={require('../icon/imges/Discovery.png')} style={{ width: scale(80), height: scale(48) }} />
                      <Text style={styles.text3}>Land Rover - Defender</Text>
                  </View>
              </Pressable>
          </ScrollView>
    </View>
  )
}

export default CarService

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    header: {
        width: moderateScale(360),
        height: verticalScale(60),
        alignItems: 'center',
        flexDirection: 'row'
    },
    icons: {
        width: scale(48),
        height: scale(48),
        alignItems: 'center',
        justifyContent: 'center'
    },
    imges: {
        width: scale(24),
        height: scale(16),
        tintColor: '#ffffff',
        marginLeft: moderateScale(20)
    },
    TEXT: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(85)
    },
    img: {
        width: moderateScale(361),
        height: verticalScale(180),
        justifyContent: 'flex-end'
    },
    text: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        left: moderateScale(20),
        marginTop: moderateScale(10)
    },
    container1: {
        width: moderateScale(320),
        height: verticalScale(72),
        alignSelf: 'center',
        marginTop: moderateScale(30),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container2: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderWidth: 1,
        borderColor: '#33CCCC',
        borderRadius: moderateScale(5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    },
    textc: {
        fontSize: moderateScale(10),
        fontWeight: '500',
        color: '#33CCCC'
    },
    line: {
        width: scale(360),
        borderWidth: 1,
        borderColor: '#3a3a3a',
        marginTop: moderateScale(25)
    },

    text2: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20)
    },
    scroll: {
        width: moderateScale(320),
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: moderateScale(20),
        height: verticalScale(440),
    },
    car: {
        height: verticalScale(72),
        width: moderateScale(320),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#33cccc'
    },
    carcontainer: {
        width: scale(268),
        height: scale(48),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text3: {
        color: '#000000',
        fontSize: moderateScale(16),
        fontWeight: '500'
    },
})