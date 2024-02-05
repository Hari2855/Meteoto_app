import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native'
import {scale, moderateScale, verticalScale} from 'react-native-size-matters'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import Partconfirmmetion from './Partconfirmmetion'
import Jobcard2 from './Jobcard2'


const Tab = createMaterialTopTabNavigator()

const Jobcard = ({navigation}) => {
  return (
    <View style={styles.container1}>
          <View style={styles.container2}>
              <Pressable onPress={() => navigation.navigate('Servicecartrack')}>
                  <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={{ height: scale(16), width: scale(24), tintColor: '#ffffff', marginLeft: moderateScale(20) }} />
              </Pressable>
              <Text style={styles.text1}>CAR SERVICE</Text>
          </View>

          <Tab.Navigator screenOptions={{
              tabBarStyle: {
                  backgroundColor: '#333333', elevation: 0
              },
              tabBarLabelStyle: {
                  fontSize: moderateScale(12), fontWeight: '500', color: '#ffffff'
              },
              tabBarIndicatorStyle: {
                  backgroundColor: '#33b6b6', width: scale(140), marginLeft: moderateScale(20), height: scale(4), borderRadius: scale(5)
              },
          }}>
              <Tab.Screen name='PART CONFIRMATION' component={Partconfirmmetion} />
              <Tab.Screen name='JOB CARD' component={Jobcard2} />
          </Tab.Navigator>
    </View>
  )
}

export default Jobcard

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#333333'
    },
    container2: {
        width: '100%',
        height: verticalScale(60),
        alignItems: 'center',
        flexDirection: 'row',
    },
    text1: {
        color: '#ffffff',
        fontSize: moderateScale(12),
        fontWeight: '500',
        marginLeft: moderateScale(95),
        marginBottom: moderateScale(5)
    },
})