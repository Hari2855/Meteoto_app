import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import CancelModal from './CancelModal'
import LottieView from 'lottie-react-native';

const Windmap = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleCancelSearch = () => {
        toggleModal();
        navigation.navigate('WindShield')
    };


    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Booking1')
        }, 6000);

        return () => {
            clearTimeout(timer);
        };
    }, []);
  return (
      <View style={styles.container1}>
          <View style={styles.textContainer1}>
              <Text style={styles.text1}>WE ARE FINDING BEST EXPERT FOR YOU!</Text>
          </View>

          {/* <View style={styles.circle1}>
              <View style={styles.circle2}>
                  <View style={styles.circle3}>
                      <View style={styles.circle4}>
                          <View style={styles.circle5}>
                              <Image source={require('../icon/imges/Ellips.png')} style={styles.img} />
                              <Image source={require('../icon/gif-icons/Search.gif')} style={styles.imgs} />
                          </View>
                      </View>
                  </View>
              </View>
          </View> */}

          <LottieView
              source={require('../Animation.json')}
              autoPlay
              loop
              style={{ width: scale(360), height: scale(500), alignSelf: 'center', }}
          />

          <Pressable style={styles.button} onPress={toggleModal}>
              <Text style={styles.text2}>CANCEL</Text>
          </Pressable>
          <CancelModal isVisible={isModalVisible}
              onCancel={toggleModal}
              onConfirm={handleCancelSearch}
              navigation={navigation} />
      </View>
  )
}

export default Windmap

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#333333'
    },
    textContainer: {
        width: moderateScale(360),
        height: verticalScale(60),
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: moderateScale(16),
        color: '#ff9966',
        fontWeight: '700'
    },
    textContainer1: {
        width: moderateScale(320),
        height: verticalScale(56),
        alignSelf: 'center',
        marginTop: moderateScale(30),
        alignItems: 'center',
        justifyContent: 'center'
    },
    text1: {
        color: '#ffffff',
        fontSize: moderateScale(12),
        fontWeight: '500',
        top: moderateScale(30)
    },
    circle1: {
        height: scale(450),
        width: scale(450),
        borderRadius: scale(300),
        borderWidth: 2,
        borderColor: '#505353',
        alignSelf: 'center',
        marginTop: moderateScale(50),
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle2: {
        height: scale(370),
        width: scale(370),
        borderRadius: scale(250),
        borderWidth: 2,
        borderColor: '#505353',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle3: {
        height: scale(290),
        width: scale(290),
        borderRadius: scale(200),
        borderWidth: 2,
        borderColor: '#505353',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle4: {
        height: scale(210),
        width: scale(210),
        borderRadius: scale(120),
        borderWidth: 2,
        borderColor: '#505353',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle5: {
        height: scale(130),
        width: scale(130),
        borderRadius: scale(80),
        borderWidth: 2,
        borderColor: '#505353',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column'
    },
    button: {
        width: scale(320),
        height: scale(40),
        borderWidth: 1,
        borderColor: '#33cccc',
        alignSelf: 'center',
        marginTop: moderateScale(30),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(5)
    },
    text2: {
        fontSize: moderateScale(12),
        color: '#33cccc',
        fontWeight: '500'
    },
    img: {
        bottom: moderateScale(108),
        right: moderateScale(22)
    },
    imgs: {
        width: scale(50),
        height: scale(50),
        borderRadius: scale(40),
        bottom: moderateScale(70),
        left: moderateScale(5)
    }

})