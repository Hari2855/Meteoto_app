import { View, Text, Pressable, StyleSheet, Image, ScrollView, TextInput } from 'react-native'
import { scale, verticalScale, moderateScale, } from 'react-native-size-matters'
import React from 'react'

const Replies = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
          <View style={styles.header}>
              <Pressable style={styles.icons} onPress={() => navigation.navigate('ShopProfile')}>
                  <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
              </Pressable>
              <Text style={styles.TEXT}>SHOPE PROFILE</Text>
          </View>
          <Text style={styles.text1}>R E P L I E S</Text>

          <View style={styles.box3}>
              <View style={{ flexDirection: 'row', width: scale(288), height: scale(29), top: scale(10), alignSelf: 'center' }}>
                  <Image source={require('../icon/profile-imgs/Aditya.png')} style={{ height: scale(26), width: scale(26) }} />
                  <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#393939', marginTop: moderateScale(2), marginLeft: moderateScale(10) }}>Aadvik Saini</Text>

                  <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#393939', marginTop: moderateScale(2), marginLeft: moderateScale(95) }}>28 July 2023</Text>
              </View>
              <View style={[styles.line, { marginTop: moderateScale(15) }]}></View>
              <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#666666', marginLeft: moderateScale(10), marginTop: moderateScale(15) }}>"Good Service, Thanks Harapreet garage!"</Text>
              <Pressable onPress={() => navigation.navigate('Replies')}>
                  <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#33CCCC', alignSelf: 'flex-end', right: moderateScale(30), marginTop: moderateScale(40) }}>3 replies</Text>
              </Pressable>
          </View>

          <View style={styles.line1}></View>

          <View style={styles.box1}>
              <View style={{ flexDirection: 'row', width: scale(288), height: scale(29), top: scale(10), alignSelf: 'center' }}>
                  <Image source={require('../icon/imges/Ellipsee.png')} style={{ height: scale(26), width: scale(26) }} />
                  <Text style={{
                      fontSize: moderateScale(14), fontWeight: '400', color: '#C29802', marginTop: moderateScale(2), marginLeft: moderateScale(10) }}>Owner</Text>

                  <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#393939', marginTop: moderateScale(2), marginLeft: moderateScale(128) }}>28 July 2023</Text>
              </View>
              <View style={[styles.line, { marginTop: moderateScale(15) }]}></View>
              <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#666666', marginLeft: moderateScale(10), marginTop: moderateScale(15) }}>Thanks, Aadvik Saini</Text>
          </View>

          <View style={styles.box1}>
              <View style={{ flexDirection: 'row', width: scale(288), height: scale(29), top: scale(10), alignSelf: 'center' }}>
                  <Image source={require('../icon/imges/User.png')} style={{ height: scale(26), width: scale(26), borderRadius: scale(20) }} />
                  <Text style={{
                      fontSize: moderateScale(14), fontWeight: '400', color: '#333333', marginTop: moderateScale(2), marginLeft: moderateScale(10)
                  }}>Hemant Gupta</Text>

                  <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#393939', marginTop: moderateScale(2), marginLeft: moderateScale(75) }}>26 July 2023</Text>
              </View>
              <View style={[styles.line, { marginTop: moderateScale(15) }]}></View>
              <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#666666', marginLeft: moderateScale(10), marginTop: moderateScale(15) }}>Yes, Good service !!</Text>
          </View>

          <View style={styles.box1}>
              <View style={{ flexDirection: 'row', width: scale(288), height: scale(29), top: scale(10), alignSelf: 'center' }}>
                  <Image source={require('../icon/imges/User.png')} style={{ height: scale(26), width: scale(26), borderRadius: scale(20) }} />
                  <Text style={{
                      fontSize: moderateScale(14), fontWeight: '400', color: '#333333', marginTop: moderateScale(2), marginLeft: moderateScale(10)
                  }}>Hemant Gupta</Text>

                  <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#393939', marginTop: moderateScale(2), marginLeft: moderateScale(75) }}>26 July 2023</Text>
              </View>
              <View style={[styles.line, { marginTop: moderateScale(15) }]}></View>
              <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#666666', marginLeft: moderateScale(10), marginTop: moderateScale(15) }}>Yes, Good service !!</Text>
          </View>

          <View style={styles.inputContainer}>
              <TextInput
                  placeholder='Share your experience'
                  placeholderTextColor={'#B8B8B8'}
                  style={styles.input}
              />
              <Image source={require('../icon/imges/Upload.png')} style={styles.image} />
          </View>

          <View style={styles.shape}></View>
    </ScrollView>
  )
}

export default Replies

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
    box3: {
        width: moderateScale(320),
        height: verticalScale(150),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20)
    },
    line: {
        width: moderateScale(320),
        height: verticalScale(0.5),
        backgroundColor: '#666666',
        marginTop: moderateScale(10)
    },
    line1: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(15)
    },
    box1: {
        width: moderateScale(320),
        height: verticalScale(108),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(15)
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: moderateScale(320),
        height: verticalScale(60),
        padding: moderateScale(10),
        margin: moderateScale(20),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center'
    },
    input: {
        flex: 1,
    },
    image: {
        width: moderateScale(20),
        height: moderateScale(20),
        margin: moderateScale(5),
    },
    shape: {
        width: scale(72),
        height: scale(2),
        borderRadius: scale(10),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(30),
        bottom: moderateScale(5)
    }
})