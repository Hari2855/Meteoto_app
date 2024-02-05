import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Chatwithus = ({navigation}) => {
  return (
    <View style={styles.container1}>
          <View style={styles.header}>
              <Pressable onPress={() => navigation.navigate('Help')}>
                  <MaterialIcons name='keyboard-arrow-left' color={'#ffffff'} size={24} style={{ marginLeft: moderateScale(15) }} />
              </Pressable>

              <Text style={styles.text1}>CHAT WITH US</Text>
          </View>

          <Text style={styles.text2}>{`You are chatting with MIA (Meteoto Interactive \nAssistence )`}</Text>
    </View>
  )
}

export default Chatwithus

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
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff'
    },
    text1: {
        color: '#ffffff',
        fontSize: moderateScale(12),
        fontWeight: '500',
        marginLeft: moderateScale(95),
        marginBottom: moderateScale(5)
    },
    container2: {
        width: moderateScale(320),
        height: verticalScale(60),
        borderRadius: moderateScale(8),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row'
    },
    img: {
        width: scale(32),
        height: scale(32),
        marginLeft: moderateScale(15)
    },
    text2: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20)
    },
    imges: {
        width: moderateScale(15),
        height: verticalScale(15),
        tintColor: '#a0a0a0',
    },
    line1: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#929292',
        marginTop: moderateScale(30)
    },

})