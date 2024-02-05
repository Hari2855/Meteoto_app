import { View, Text, StyleSheet, Image } from 'react-native'
import React,{useEffect} from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const Carscreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding')
    }, 2000)
  }, [])

  return (
    <View style={styles.container}>
      <Image source={require('../Screens/icon/gif-icons/Blackcar.gif')} style={styles.img}/>
      <Image source={require('../Screens/icon/imges/Icon.png')} style={styles.img1} />
    </View>
  )
}

export default Carscreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: moderateScale(360),
    height: verticalScale(398),
  },
   img1: {
    height: scale(36),
    width: scale(150),
    bottom: moderateScale(200)
  }
})