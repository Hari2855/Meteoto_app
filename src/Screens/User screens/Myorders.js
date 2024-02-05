import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Upcomingorders from './Upcomingorders'
import Previousorders from './Previousorders'


const Tab = createMaterialTopTabNavigator()

const Myorders = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Pressable onPress={() => navigation.navigate('User')}>
                    <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={{ height: scale(16), width: scale(24), tintColor: '#ffffff', marginLeft: moderateScale(20) }} />
                </Pressable>
                <Text style={styles.text1}>MY ORDERS</Text>
            </View>

            <Tab.Navigator screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#333333', elevation: 0
                },
                tabBarLabelStyle: {
                    fontSize: moderateScale(12), fontWeight: '500', color: '#ffffff'
                },
                tabBarIndicatorStyle: {
                    backgroundColor: '#33CCCC', width: scale(130), marginLeft: moderateScale(20), height: scale(4), borderRadius: scale(5)
                },
            }}><Tab.Screen name='UPCOMING ORDERS' component={Upcomingorders} />
                <Tab.Screen name='PREVIOUS ORDERS' component={Previousorders} />
            </Tab.Navigator>
        </View>
    )
}

export default Myorders

const styles = StyleSheet.create({
    container: {
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
        marginLeft: moderateScale(100),
        marginBottom: moderateScale(5)
    },
})