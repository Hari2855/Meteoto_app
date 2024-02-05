import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, Pressable,TextInput,ImageBackground, Image } from 'react-native'
import {scale,moderateScale,verticalScale} from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ChangesSaved from './Changessavedmodel'
import ImagePicker from 'react-native-image-crop-picker';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import i from '../icon/profile-imgs/Aditya.png'


const Editprofile = ({navigation}) => {
const [isModalVisible, setModalVisible] = useState(false)
const [pimage, setpimage] = useState();

  const Gallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setpimage(image.path);
    });
  };



  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  useEffect(() => {
    if (isModalVisible) {
      const timer = setTimeout(() => {
        closeModal();
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isModalVisible]);

  
  return (
    <View style={styles.container1}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('User')}>
          <MaterialIcons name='keyboard-arrow-left' color={'#ffffff'} size={24} style={{left: moderateScale(20) }} />
        </Pressable>
        <Text style={styles.text1}>EDIT PROFILE</Text>
      </View>

      <ScrollView style={styles.container2} showsVerticalScrollIndicator={false}>
        <ImageBackground style={styles.backgroundimage} source={require('../icon/Profile-section-imgs/profile-overlay.png')}>
          <ImageBackground style={styles.backgroundimage} source={require('../icon/Profile-section-imgs/profile-bg.png')}>
            <Pressable style={styles.imgcontainer}>
              <Image source={pimage ? { uri: pimage } : i}  style={styles.img} />
            </Pressable>
            <Text style={styles.text}>ADITYA SHARMA</Text>
            <Pressable style={styles.profile} onPress={Gallery}>
              <Text style={styles.text11}>Change Photo</Text>
            </Pressable>
          </ImageBackground>
        </ImageBackground>

        <View style={{flexDirection: 'column', marginTop: moderateScale(30)}}>
          <Text style={styles.text2}>Full Name</Text>
          <View style={styles.input}>
            <TextInput placeholder='Enter your full name' placeholderTextColor={'#c0c0c0'} style={{ fontSize: moderateScale(12), color: 'black'}}/>
          </View>
        </View>
        
        <View style={{ flexDirection: 'column', marginTop: moderateScale(30) }}>
          <Text style={styles.text2}>Mobile Number</Text>
          <View style={styles.input1}>
            <Text style={styles.text3}>+91</Text>
            <TextInput placeholder='971xxxxxxx' placeholderTextColor={'#c0c0c0'} keyboardType='numeric' style={styles.textinput1} />
          </View>
        </View>

        <View style={{ flexDirection: 'column', marginTop: moderateScale(30) }}>
          <Text style={styles.text2}>Email Id</Text>
          <View style={styles.input}>
            <TextInput placeholder='example@gmail.com' placeholderTextColor={'#c0c0c0'} keyboardType='email-address' style={{ fontSize: moderateScale(12), color: 'black' }} />
          </View>
        </View>

        <View style={{ flexDirection: 'column', marginTop: moderateScale(30) }}>
          <Text style={styles.text2}>Address</Text>
          <View style={styles.input}>
            <TextInput placeholder='ABC-65, Songiri, Bhopal' placeholderTextColor={'#c0c0c0'} style={{ fontSize: moderateScale(12), color: 'black' }} />
          </View>
        </View>

        <View style={{ flexDirection: 'column', marginTop: moderateScale(30) }}>
          <Text style={styles.text2}>Bio Info</Text>
            <TextInput style={styles.input12} placeholder='Write here...' placeholderTextColor={'#B8B8B8'} />
        </View>

        <Pressable style={styles.button} onPress={toggleModal}>
          <Text style={styles.text4}>SAVE CHANGES</Text>
        </Pressable>
        <ChangesSaved isVisible={isModalVisible} closeModal={closeModal} navigate={navigation}/>
      </ScrollView>
    </View>
  )
}

export default Editprofile

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#333333'
  },
  header: {
    width: '100%',
    height: moderateScale(60),
    // borderWidth: 1,
    // borderColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  text1: {
    color: '#ffffff',
    fontSize: moderateScale(12),
    fontWeight: '500',
    marginLeft: moderateScale(115)
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
  imgcontainer:{
    height: scale(157),
    width: scale(157),
    borderRadius: scale(80),
    borderWidth: 2,
    borderColor: '#ffffff',
    alignItems:'center',
    justifyContent:'center'
  },
  img: {
    height: scale(152),
    width: scale(152),
    borderRadius: scale(80),

  },
  text: {
    color: '#ffffff',
    fontSize: moderateScale(16),
    fontWeight: '500',
    top: moderateScale(10)
  },
  profile: {
    width: moderateScale(117),
    height: verticalScale(24),
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: moderateScale(12),
    marginTop: moderateScale(25),
    alignItems: 'center',
    justifyContent: 'center'
  },
  text11: {
    color: '#33c5c5',
    fontSize: moderateScale(14)
  },
  container2: {
    flex: 1,
    width: moderateScale(360),
    alignSelf: 'center',
    // borderWidth: 1,
    // borderColor: '#ffffff'
  },
  text2: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: '#ffffff',
    marginLeft: moderateScale(20)
  },
  input: {
    height: verticalScale(48),
    width: moderateScale(320),
    borderColor: '#35cccc',
    top: moderateScale(10),
    borderRadius: moderateScale(8),
    backgroundColor: '#ffffff',
    paddingLeft: moderateScale(10),
    alignSelf: 'center',
  },
  text3: {
    color: '#c0c0c0',
    fontSize: moderateScale(16),
  },
  input1: {
    height: verticalScale(48),
    width: moderateScale(320),
    borderColor: '#35cccc',
    top: moderateScale(10),
    borderRadius: moderateScale(8),
    backgroundColor: '#ffffff',
    paddingLeft: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textinput1:{
    fontSize: moderateScale(12), 
    color: 'black', 
    borderLeftWidth: 1, 
    borderColor: '#c0c0c0', 
    marginLeft: moderateScale(10) ,
    padding: 10,
    height: '100%',
    width: '100%'
  },
  button: {
    width: moderateScale(320),
    height: verticalScale(40),
    backgroundColor: '#33cccc',
    borderRadius: moderateScale(5),
    marginTop: moderateScale(60),
    bottom: moderateScale(15),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text4: {
    color: '#ffffff',
    fontSize: moderateScale(12),
    fontWeight: '500'
  },
  input12: {
    width: moderateScale(320),
    height: verticalScale(120),
    borderRadius: moderateScale(10),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: moderateScale(10),
    paddingBottom: moderateScale(80),
    paddingLeft: moderateScale(20)

  },
})