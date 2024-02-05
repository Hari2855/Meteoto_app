import React from 'react'
import { View, Text, StyleSheet, Pressable,Image} from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const Ordersuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
          <View style={styles.header}>
              <Pressable style={styles.icons} onPress={() => navigation.navigate('Home')}>
                  <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
              </Pressable>

              <Text style={styles.TEXT}>AUTOPARTS</Text>
          </View>
          <View style={styles.container1}>
              <Image source={require('../icon/gif-icons/Success.gif')} style={styles.img} />
              <Text style={styles.text}>Order Placed Successfully!</Text>
          </View>
          <Text style={styles.text1}>{`Thanks for \nbelieving us :)`}</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Autopartstrack')}>
              <Text style={styles.Text8}>TRACK YOUR ORDER</Text>
          </Pressable>
    </View>
  )
}

export default Ordersuccess

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
        marginLeft: moderateScale(100),
        bottom: moderateScale(10)
    },
    container1: {
        backgroundColor: '#ffffff',
        height: scale(244),
        width: scale(312),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: moderateScale(22),
        borderRadius: moderateScale(10),
        marginTop: moderateScale(50)
    },
    text: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: '#333333',
        marginTop: moderateScale(10)
    },
    img: {
        width: scale(100),
        height: scale(100)
    },
    text1: {
        fontSize: moderateScale(40),
        color: '#666666',
        fontWeight: '200',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(130)
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        marginLeft: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(60),
        // bottom: moderateScale(20)
    },
    Text8: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    }
})