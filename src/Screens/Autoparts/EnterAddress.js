import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

const EnterAddress = ({navigation}) => {
  return (
    <View style={styles.container}>
          <View style={styles.header}>
              <Pressable style={styles.icons} onPress={() => navigation.navigate('Home')}>
                  <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
              </Pressable>

              <Text style={styles.TEXT}>AUTOPARTS</Text>
          </View>
          <Text style={styles.Text1}>SELECT ADDRESS FOR DELIVERY</Text>
          <Image source={require('../icon/illustration/Locationnot.png')} style={styles.img}/>
          <Text style={styles.Text3}>You do not have any saved addresses!</Text>
          <View style={styles.line}></View>
          <Text style={styles.Text4}>H A V I N G  N E W  A D D R E S S ?</Text>
          <Pressable style={styles.newaddress} onPress={() => navigation.navigate('Newaddress')}>
              <Text style={styles.Text5}>+</Text>
              <Text style={styles.Text6}>Add New Address</Text>
          </Pressable>
          <View style={styles.line}></View>
          <View style={styles.timecontainer}>
              <Feather name='truck' color={'#ffffff'} size={24} />
              <Text style={styles.Text7}>Part will be delivered till Tomorrow.</Text>
          </View>
          <View style={[styles.timecontainer, { marginTop: moderateScale(10) }]}>
              <Feather name='refresh-ccw' color={'#ffffff'} size={24} />
              <Text style={styles.Text7}>Part will be delivered till Tomorrow.</Text>
          </View>
    </View>
  )
}

export default EnterAddress

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
        // borderWidth: 1, 
        // borderColor: '#ffffff'
    },
    icons: {
        width: scale(48),
        height: scale(48),
        alignItems: 'center',
        justifyContent: 'center',
        bottom: moderateScale(10)
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
        marginLeft: moderateScale(95),
        bottom: moderateScale(10)
    },
    Text1: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(10)
    },
    img: {
        width: scale(200),
        height: scale(150),
        alignSelf: 'center',
        marginTop: moderateScale(20)
    },
    Text3: {
        fontSize: moderateScale(15),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(10)
    },
    line: {
        width: scale(360),
        height: scale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(40)
    },
    Text4: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20)
    },
    newaddress: {
        width: scale(165),
        height: scale(48),
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: scale(5),
        alignSelf: 'center',
        marginTop: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row',
        // justifyContent: 'space-evenly'
    },
    Text5: {
        fontSize: moderateScale(25),
        fontWeight: '400',
        color: '#ffffff',
        marginLeft: moderateScale(15),
    },
    Text6: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(10)
    },
    timecontainer: {
        width: scale(256),
        height: scale(24),
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20),
        flexDirection: 'row',
    },
    Text7: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        marginTop: moderateScale(2),
        marginLeft: moderateScale(15)
    },
})