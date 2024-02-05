import React from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather'

const Emerjencycall = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text1}>SOS CONFIRMATION</Text>
      </View>
      <Pressable style={styles.back} onPress={() => navigation.navigate('Home')}>
        <Feather name='x-circle' color={'#ffffff'} size={20}/>
      </Pressable>
      <Image source={require('../icon/illustration/Sos.png')} style={styles.img1} />
      <View style={styles.box1}>
        <Text style={styles.text2}>SOS NOTIFICATION</Text>
        <Text style={styles.text3}>SENT TO YOUR CONTACTS!</Text>
      </View>
      <Text style={styles.text4}>EMERGENCY CONTACTS</Text>
      <Text style={[styles.text5, { marginTop: moderateScale(10) }]}>AMIT SHARMA - PAPA</Text>
      <Text style={styles.text5}>9105645963</Text>
      <Text style={[styles.text5, { marginTop: moderateScale(10) }]}>RAHUL SHARMA - BROTHER</Text>
      <Text style={styles.text5}>9165644963</Text>
      <View style={styles.line}>
        <Pressable style={styles.button}>
          <Text style={styles.Text8}>CALL TO BROTHER</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Emerjencycall

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  header: {
    width: '100%',
    height: moderateScale(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: '#FF9966',
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
  back: {
    width: scale(38),
    height: scale(38),
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: scale(5),
    alignSelf: 'flex-end',
    marginRight: moderateScale(20),
    marginTop: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center'
  },
  img1: {
    width: scale(220),
    height: scale(148),
    alignSelf: 'center',
    top: moderateScale(20),
  },
  box1: {
    width: moderateScale(360),
    height: verticalScale(100),
    backgroundColor: '#FFD966',
    marginTop: moderateScale(50),
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'center'
  },
  text2: {
    fontSize: moderateScale(24),
    fontWeight: '500',
    color: '#FF9966',
    alignSelf: 'center'
  },
  text3: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: '#333333',
    alignSelf: 'center'
  },
  text4: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: '#FF9966',
    alignSelf: 'center',
    marginTop: moderateScale(20)
  },
  text5: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: '#ffffff',
    marginLeft: moderateScale(20),
  },
  line: {
    width: scale(360),
    height: scale(120),
    borderTopWidth: 1,
    borderColor: '#3c3c3c',
    marginTop: moderateScale(33),
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: moderateScale(320),
    height: verticalScale(40),
    borderRadius: moderateScale(5),
    backgroundColor: '#33CCCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text8: {
    fontSize: moderateScale(12),
    fontWeight: '500',
    color: '#ffffff'
  }
})