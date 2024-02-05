import React, { useState,useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Pressable, Switch } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ChangesSaved from './Changessavedmodel'


const Setting = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                  <MaterialIcons name='keyboard-arrow-left' color={'#ffffff'} size={24} style={{ marginLeft: moderateScale(15) }} />
              </Pressable>

              <Text style={styles.text1}>SETTINGS</Text>
          </View>

          <View style={styles.box}>
              <Image source={require('../icon/Profile-section-imgs/profile-options-img/static/Alarm.png')} style={styles.img}/>
              <Text style={styles.text2}>Notification</Text>

              <Switch
                  trackColor={{ false: 'gray', true: '#33CCCC' }}
                  thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  marginLeft={'35%'}
              />
          </View>


          <Pressable style={styles.button} onPress={toggleModal}>
              <Text style={styles.text3}>SAVE CHANGES</Text>
          </Pressable>
          <ChangesSaved isVisible={isModalVisible} closeModal={toggleModal} />
    </View>
  )
}

export default Setting

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
        marginLeft: moderateScale(110),
        marginBottom: moderateScale(5)
    },
    box: {
        width: moderateScale(320),
        height: verticalScale(60),
        borderRadius: moderateScale(10),
        backgroundColor: '#ffffff',
        marginTop: moderateScale(10),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    img: {
        width: scale(32),
        height: scale(32),
        marginLeft: moderateScale(20)
    },
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: '#333333',
        marginLeft: moderateScale(20)
    },
     button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        top: '70%'
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    },
})