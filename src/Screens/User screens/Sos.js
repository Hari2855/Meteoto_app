import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Defaultmodel from './Defaultcontactmodel'
import Sosdemomodel from './Sosdemomodel'
import ChangesSaved from './Changessavedmodel'

const Sos = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [isModalVisible1, setModalVisible1] = useState(false)
  const [isModalVisible2, setModalVisible2] = useState(false)

  const toggleModal = () =>{
    setModalVisible(!isModalVisible)
  }

  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1)
  }

  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2)
  }


  const closeModal = () => {
    setModalVisible2(false)
  }

  useEffect(() => {
    if (isModalVisible2) {
      const timer = setTimeout(() => {
        closeModal();
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isModalVisible2]);

  return (
    <ScrollView style={styles.container1}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.navigate('User')}>
            <MaterialIcons name='keyboard-arrow-left' color={'#ffffff'} size={24} style={{ marginLeft: moderateScale(15) }} />
          </Pressable>

          <Text style={styles.text1}>SOS</Text>
        </View>

        <View style={styles.container2}>
          <Image source={require('../icon/gif-icons/Sos.gif')} style={{ width: scale(80), height: scale(84) }} />
          <Text style={styles.text2}>{`YOUR SAFETY IS \nIMPORTANT TO US`}</Text>
        </View>

        <View style={styles.line1}></View>

        <Text style={styles.text3}>SAVE EMERJENCY CONTACTS</Text>

        <View style={{ flexDirection: 'row', marginTop: moderateScale(15), marginLeft: moderateScale(20), alignItems: 'center', }}>
          <Text style={styles.text4}>First Contact<Text style={{ color: '#bcbcbc' }}> (Default)</Text></Text>
          <MaterialCommunityIcons name='information-outline' color={'#cacaca'} size={15} style={{ marginLeft: moderateScale(10), marginTop: moderateScale(5) }}  onPress={toggleModal}/>
          <Defaultmodel isVisible={isModalVisible} closeModal={toggleModal}/>
        </View>
        <View style={styles.input1}>
          <Text style={styles.text5}>+91</Text>
          <TextInput placeholder='971xxxxxxx' placeholderTextColor={'#c0c0c0'} keyboardType='numeric' style={styles.textinput1} />
        </View>

        <View style={styles.textc}>
          <Text style={styles.text4}>Contact Name</Text>
          <TextInput style={styles.textinput2} placeholder='Senha Sharma' placeholderTextColor={'#c0c0c0'}></TextInput>
        </View>

        <View style={styles.textc}>
          <Text style={styles.text4}>Contact Relation</Text>
          <TextInput style={styles.textinput2} placeholder='Friend/ Brother or anyone' placeholderTextColor={'#c0c0c0'}></TextInput>
        </View>

        <View style={[styles.line1, { marginTop: moderateScale(20) }]}></View>


        <View style={[styles.textc, { marginTop: moderateScale(10) }]}>
          <Text style={styles.text4}>Secondary Contact</Text>
          <View style={[styles.input1, { top: 0 }]}>
            <Text style={styles.text5}>+91</Text>
            <TextInput placeholder='971xxxxxxx' placeholderTextColor={'#c0c0c0'} keyboardType='numeric' style={styles.textinput1} />
          </View>
        </View>

        <View style={styles.textc}>
          <Text style={styles.text4}>Contact Name</Text>
          <TextInput style={styles.textinput2} placeholder='Senha Sharma' placeholderTextColor={'#c0c0c0'}></TextInput>
        </View>

        <View style={styles.textc}>
          <Text style={styles.text4}>Contact Relation</Text>
          <TextInput style={styles.textinput2} placeholder='Friend/ Brother or anyone' placeholderTextColor={'#c0c0c0'}></TextInput>
        </View>

        <Text style={[styles.text6, {marginTop: moderateScale(40)}]}>In case of Emergency you can use SOS feature.</Text>
        <Text style={styles.text6}>It will send Emergency Message to your contacts</Text>
        <Text style={styles.text6}>& contact numbers will be continuously Splashed.</Text>

      <Pressable style={styles.button} onPress={toggleModal2}>
        <Text style={styles.text7}>SAVE CHANGES</Text>
      </Pressable>
      <ChangesSaved isVisible={isModalVisible2} closeModal={toggleModal2}/>

      <Pressable style={{alignSelf: 'center', marginTop: moderateScale(60), marginBottom: moderateScale(20)}} onPress={toggleModal1}>
        <Text style={styles.text7}>Preview SOS</Text>
        <View style={{width: moderateScale(70), height: verticalScale(1), backgroundColor: '#ffffff',}}></View>
        <Sosdemomodel isVisible={isModalVisible1} closeModal1={toggleModal1} navigation={navigation} />
      </Pressable>
    </ScrollView>
  )
}

export default Sos

const styles = StyleSheet.create({
  container1: {
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
    marginLeft: moderateScale(130),
    marginBottom: moderateScale(5)
  },
  container2: {
    width: scale(320),
    height: verticalScale(124),
    borderRadius: moderateScale(5),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  text2: {
    color: '#000000',
    fontSize: moderateScale(16),
    fontWeight: '500',
    right: moderateScale(20)
  },
  line1: {
    width: moderateScale(360),
    height: verticalScale(1),
    backgroundColor: '#929292',
    marginTop: moderateScale(40)
  },
  text3: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: '#ffffff',
    marginTop: moderateScale(20),
    marginLeft: moderateScale(20)
  },
  text4: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: '#ffffff'
  },
  text5: {
    color: '#c0c0c0',
    fontSize: moderateScale(12),
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
  textinput1: {
    fontSize: moderateScale(12),
    color: 'black',
    borderLeftWidth: 1,
    borderColor: '#c0c0c0',
    marginLeft: moderateScale(10),
    padding: 10,
    height: '100%',
    width: '100%'
  },
  textc: {
    width: moderateScale(320),
    height: verticalScale(84),
    flexDirection: 'column',
    alignSelf: 'center',
    marginTop: moderateScale(30),
    justifyContent: 'space-between'
  },
  textinput2: {
    width: moderateScale(320),
    height: verticalScale(48),
    backgroundColor: '#ffffff',
    borderRadius: moderateScale(5),
    paddingLeft: moderateScale(20),
    fontSize: moderateScale(12)
  },
  text6:{
    fontSize: moderateScale(12),
    fontWeight: '500',
    color: '#bebebe',
    alignSelf: 'center',
  },
  button: {
    width: moderateScale(320),
    height: verticalScale(40),
    borderRadius: moderateScale(5),
    backgroundColor: '#33CCCC',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: moderateScale(50)
  },
  text7: {
    fontSize: moderateScale(12),
    fontWeight: '500',
    color: '#ffffff'
  },

})