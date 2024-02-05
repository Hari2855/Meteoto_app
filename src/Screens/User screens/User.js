import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Logoutmodel from './Logoutmodel'

const User = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  const handelsearch = () => {
    toggleModal()
    navigation.navigate('Login')
  }



  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name='keyboard-arrow-left' color={'#ffffff'} size={24} style={{ marginLeft: moderateScale(12) }} />
        </Pressable>
        <Pressable style={styles.logout} onPress={toggleModal}>
          <Text style={{ color: '#ffffff', fontSize: moderateScale(12), fontWeight: '500', marginTop: moderateScale(4) }}>Logout</Text>
          <Feather name='log-out' color={'#d23301'} size={24} style={{ marginLeft: moderateScale(10) }} />
        </Pressable>
        <Logoutmodel isVisible={isModalVisible} onConfirm={handelsearch} onCancel={toggleModal} navigation={navigation} />
      </View>

      <ImageBackground style={styles.backgroundimage} source={require('../icon/Profile-section-imgs/profile-overlay.png')}>
        <ImageBackground style={styles.backgroundimage} source={require('../icon/Profile-section-imgs/profile-bg.png')}>
          <Image source={require('../icon/profile-imgs/Aditya.png')} style={styles.img} />
          <Text style={styles.text}>ADITYA SHARMA</Text>
          <Pressable style={styles.profile} onPress={() => navigation.navigate('Editprofile')}>
            <Text style={styles.text1}>Edit Profile</Text>
          </Pressable>
        </ImageBackground>
      </ImageBackground>
      <View style={styles.container1}>
        <Pressable style={styles.invoice} onPress={() => navigation.navigate('Serviceinvoice')}>
          <Image source={require('../icon/static-icons/bill.png')} style={styles.imgs} />
          <Text style={styles.text2}>Service Invoice</Text>
          <Image source={require('../icon/emergency-icons/Fender4.png')} style={styles.imges} />
        </Pressable>

        <Pressable style={[styles.invoice, { marginTop: moderateScale(10) }]} onPress={() => navigation.navigate('Myorders')}>
          <Image source={require('../icon/static-icons/bill1.png')} style={styles.imgs} />
          <Text style={[styles.text2]}>My Orders</Text>
          <Image source={require('../icon/emergency-icons/Fender4.png')} style={[styles.imges, { left: moderateScale(30) }]} />
        </Pressable>

        <Pressable style={[styles.invoice, { marginTop: moderateScale(10) }]} onPress={() => navigation.navigate('Mycars')}>
          <Image source={require('../icon/static-icons/car.png')} style={styles.imgs} />
          <Text style={[styles.text2]}>My Cars</Text>
          <Image source={require('../icon/emergency-icons/Fender4.png')} style={[styles.imges, { marginLeft: moderateScale(165) }]} />
        </Pressable>


        <Pressable style={[styles.invoice, { marginTop: moderateScale(10) }]} onPress={() => navigation.navigate('Document')}>
          <Image source={require('../icon/static-icons/copy.png')} style={styles.imgs} />
          <Text style={styles.text2}>Documents</Text>
          <Image source={require('../icon/emergency-icons/Fender4.png')} style={[styles.imges, { marginLeft: moderateScale(140) }]} />
        </Pressable>

        <Pressable style={[styles.invoice, { marginTop: moderateScale(10) }]} onPress={() => navigation.navigate('Sos')}>
          <Image source={require('../icon/static-icons/sos.png')} style={styles.imgs} />
          <Text style={[styles.text2]}>SOS</Text>
          <Image source={require('../icon/emergency-icons/Fender4.png')} style={[styles.imges, { left: moderateScale(70) }]} />
        </Pressable>
      </View>

      <View style={styles.line}></View>

      <View style={styles.container2}>
        <Pressable style={styles.invoice} onPress={() => navigation.navigate('Setting')}>
          <Image source={require('../icon/static-icons/settings.png')} style={styles.imgs} />
          <Text style={[styles.text2]}>Settings</Text>
          <Image source={require('../icon/emergency-icons/Fender4.png')} style={[styles.imges, { left: moderateScale(40) }]} />
        </Pressable>


        <Pressable style={[styles.invoice, { marginTop: moderateScale(10) }]} onPress={() => navigation.navigate('Help')}>
          <Image source={require('../icon/static-icons/support.png')} style={styles.imgs} />
          <Text style={[styles.text2]}>Help & Support</Text>
          <Image source={require('../icon/emergency-icons/Fender4.png')} style={[styles.imges, { right: moderateScale(10) }]} />
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default User

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
    justifyContent: 'space-between'
  },
  logout: {
    flexDirection: 'row',
    marginRight: moderateScale(30),
  },
  line: {
    width: moderateScale(360),
    height: verticalScale(1),
    backgroundColor: '#444444',
    marginTop: moderateScale(10)
  },
  backgroundimage: {
    height: verticalScale(322),
    width: moderateScale(360),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  img: {
    height: scale(152),
    width: scale(152),
    borderRadius: scale(80)

  },
  text: {
    color: '#ffffff',
    fontSize: moderateScale(16),
    fontWeight: '500',
    top: moderateScale(10)
  },
  profile: {
    width: moderateScale(100),
    height: verticalScale(24),
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: moderateScale(12),
    marginTop: moderateScale(25),
    alignItems: 'center',
    justifyContent: 'center'
  },
  text1: {
    color: '#33c5c5',
    fontSize: moderateScale(14)
  },
  container1: {
    height: verticalScale(348),
    width: moderateScale(320),
    alignSelf: 'center',
    marginTop: moderateScale(30),
    flexDirection: 'column',
    alignItems: 'center',
  },
  invoice: {
    width: '100%',
    height: verticalScale(60),
    borderRadius: moderateScale(8),
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgs: {
    width: scale(32),
    height: scale(32),
    marginLeft: moderateScale(10)
  },
  text2: {
    color: '#6c6c6c',
    fontSize: moderateScale(15),
    marginLeft: moderateScale(20)
  },
  imges: {
    width: moderateScale(20),
    height: verticalScale(20),
    tintColor: '#ababab',
    marginLeft: moderateScale(120)
  },
  container2: {
    height: verticalScale(140),
    width: moderateScale(320),
    alignSelf: 'center',
    marginTop: moderateScale(20),
    flexDirection: 'column',
    alignItems: 'center',
  },
})