import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import React from 'react'

const BookingStatus = ({navigation}) => {
  return (
    <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.text1}>BOOKING STATUS</Text>
          </View>
          <Image source={require('../icon/illustration/Illustration.png')} style={styles.img}/>
          <Text style={[styles.text2, {marginTop: moderateScale(10)}]}>Don’t worry! we will inform you in</Text>
          <Text style={styles.text2}>30-min, if your request gets </Text>
          <Text style={styles.text2}>Accepted</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Track')}>
              <Text style={styles.text3}>TRACK STATUS</Text>
          </Pressable>
    </View>
  )
}

export default BookingStatus

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
        borderBottomWidth: 1,
        borderColor: '#474747'
    },
    text1: {
        color: '#FFFFFF',
        fontSize: moderateScale(12),
        fontWeight: '500',
    },
    img: {
        height: scale(150),
        width: scale(200),
        alignSelf: 'center',
        marginTop: moderateScale(50)
    },
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        alignSelf: 'center'
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        marginLeft: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(300),
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    }
})