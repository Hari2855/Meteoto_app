import React from 'react'
import { Pressable } from 'react-native'
import { View, Text, StyleSheet, Image } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Oil from './Oil'
import Cng from './Cng'
import Charging from './Charging'

const Tab = createMaterialTopTabNavigator()

const Fulestations = ({ navigation }) => {
    return (
        <View style={styles.container1}>
            <View style={styles.header}>
                <Pressable style={styles.icon} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.img} />
                </Pressable>

                <Text style={styles.text1}>FUEL STATION LOCATOR</Text>
            </View>

            <Tab.Navigator screenOptions={{
                tabBarStyle: { 
                    backgroundColor: '#333333', elevation: 0 },
                tabBarLabelStyle: {
                    fontSize: moderateScale(12), fontWeight: '500', color: '#ffffff'
                },
                tabBarIndicatorStyle: {
                    backgroundColor: '#33b6b6', width: scale(99), marginLeft: moderateScale(10), height: scale(4), borderRadius: scale(5)
                },
            }}>
                <Tab.Screen name='PETROL/DIESEL' component={Oil}/>
                <Tab.Screen name='CNG' component={Cng}/>
                <Tab.Screen name='CHARGING' component={Charging} />
            </Tab.Navigator>
        </View>
    )
}

export default Fulestations

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#333333'
    },
    header: {
        width: moderateScale(360),
        height: verticalScale(60),
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: scale(48),
        height: scale(48),
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: scale(24),
        height: scale(16),
        tintColor: '#ffffff',
        marginLeft: moderateScale(20)
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '900',
        color: '#ffffff',
        marginLeft: moderateScale(60)
    },
})