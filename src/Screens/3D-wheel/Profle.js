import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { scale, verticalScale, moderateScale, } from 'react-native-size-matters'
import React from 'react'

const Profle = ({navigation}) => {
  return (
    <View style={styles.container}>
          <View style={styles.header}>
              <Pressable style={styles.icons} onPress={() => navigation.navigate('ShopProfile')}>
                  <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
              </Pressable>
              <Text style={styles.TEXT}>SHOPE PROFILE</Text>
          </View>
          <Text style={styles.text1}>P H O T O S   B Y   O W N E R</Text>
          <View style={styles.container1}>
            <Image source={require('../icon/imges/Shop.png')} style={styles.img}/>
            <Image source={require('../icon/imges/Img1.png')} style={[styles.img, {marginLeft: moderateScale(16)}]} />
          </View>
          <View style={styles.container1}>
              <Image source={require('../icon/imges/Img2.png')} style={styles.img} />
              <Image source={require('../icon/imges/Img3.png')} style={[styles.img, { marginLeft: moderateScale(16) }]} />
          </View>
          <View style={styles.container1}>
              <Image source={require('../icon/imges/Img4.png')} style={styles.img} />
              <Image source={require('../icon/imges/Img6.png')} style={[styles.img, { marginLeft: moderateScale(16) }]} />
          </View>
    </View>
  )
}

export default Profle

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    header: {
        width: moderateScale(360),
        height: verticalScale(60),
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 10
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
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(30)
    },
    container1: {
        width: moderateScale(320),
        height: verticalScale(140),
        marginTop: moderateScale(20),
        alignSelf: 'center',
        flexDirection: 'row'
    },
    img: {
        width: scale(152),
        height: scale(140),
        borderWidth: 1,
        borderColor: '#ffffff'
    },
    shape: {
        width: scale(72),
        height: scale(2),
        borderRadius: scale(10),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(95),
    }
})