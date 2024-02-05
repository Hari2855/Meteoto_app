import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { enableScreens } from 'react-native-screens'
import Home from '../Screens/Home screen/Home'
import Track from '../Screens/Track screens/Track'
import Chat from '../Screens/Cat screens/Chat'
import User from '../Screens/User screens/User'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'


enableScreens();
const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <Bottom.Navigator animationEnabled={true}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {backgroundColor: '#333333',borderTopWidth: 0,},
                tabBarLabelStyle: {fontSize: moderateScale(10), fontWeight: '500'},
                tabBarIconStyle: {borderRadius: moderateScale(30),  alignSelf: 'center',},
                tabBarIcon: () => {

                    if (route.name === 'Home') {
                        return (
                            <Image source={require('../Screens/icon/bottom-navbar-icons/home.png')} style={styles.icon} />
                        )
                    } else if (route.name === 'Track') {
                        return (
                            <Image source={require('../Screens/icon/bottom-navbar-icons/truck.png')} style={styles.icon}/>
                        )
                    }
                    else if (route.name === 'Chat') {
                        return (
                            <Image source={require('../Screens/icon/bottom-navbar-icons/message-circle.png')} style={styles.icon}/>
                        )
                    }
                    else if (route.name === 'User') {
                        return (
                            <Image source={require('../Screens/icon/bottom-navbar-icons/user.png')} style={styles.icon}/>
                        )
                    }
                },
                tabBarActiveTintColor: '#33CCCC',
                tabBarInactiveTintColor: 'gray',
                tabBarActiveBackgroundColor: '#ffffff',
                tabBarHideOnKeyboard: true
            })}
        >
            <Bottom.Screen name="Home" component={Home}/>
            <Bottom.Screen name="Track" component={Track}/>
            <Bottom.Screen name="Chat" component={Chat} />
            <Bottom.Screen name="User" component={User}/>
        </Bottom.Navigator>
    )

}

export default BottomNavigator

const styles = StyleSheet.create({
    icon: {
     height: scale(24), 
     width: scale(24),
     tintColor: '#33CCCC'
    },
})

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white'
//     },
//     bottomNav: {
//         width: '100%',
//         height: verticalScale(70),
//         backgroundColor: '#333333',
//         position: 'absolute',
//         bottom: 0,
//         elevation: 20,
//     },
//     bottomNav2: {
//         width: '100%',
//         height: verticalScale(55),
//         justifyContent: 'space-evenly',
//         alignItems: 'center',
//         flexDirection: 'row',
//         marginTop: scale(8)
//     },
//     bottomtab: {
//         width: '20%',
//         height: '100%',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     tabIcon: {
//         width: scale(32),
//         height: scale(32),
//         tintColor: 'white'
//     },
//     tabIconBg: {
//         width: scale(30),
//         height: scale(30),
//         borderRadius: 20,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     tabIconBgi: {
//         width: scale(30),
//         height: scale(30),
//         borderRadius: 20,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     tabIconi: {
//         width: scale(25),
//         height: scale(25),
//         tintColor: 'white'
//     },
//     tabIconBgw: {
//         width: scale(64),
//         height: scale(32),
//         borderRadius: scale(30),
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     tabIconw: {
//         width: scale(22),
//         height: scale(22),
//         tintColor: '#33CCCC'
//     },
//     tabIconBgr: {
//         width: scale(28),
//         height: scale(28),
//         borderRadius: 20,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     tabIconr: {
//         width: scale(25),
//         height: scale(25),
//         tintColor: 'white'
//     },
//     header: {
//         width: '100%',
//         height: verticalScale(80),
//         backgroundColor: '#33CCCC',
//         justifyContent: 'flex-end'
//     },
//     header2: {
//         width: '100%',
//         height: verticalScale(50),
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingLeft: moderateScale(10),
//         paddingRight: moderateScale(10)
//     },
//     headerLeftView: {
//         flexDirection: 'row',
//         justifyContent: 'flex-end'
//     },
//     user: {
//         width: scale(40),
//         height: scale(40),
//         borderRadius: scale(20)
//     },
//     flag: {
//         width: scale(20),
//         height: scale(20),
//         position: 'absolute',
//         bottom: moderateScale(10),
//         left: moderateScale(25),
//         borderRadius: scale(10),
//         borderWidth: 1,
//         borderColor: 'white'
//     },
//     home: {
//         fontSize: moderateScale(18),
//         color: 'white',
//         fontWeight: '600'
//     },
//     dropdown: {
//         width: scale(16),
//         height: scale(16),
//         tintColor: 'white',
//         marginLeft: moderateScale(5)
//     },
//     address: {
//         color: 'white',
//         fontSize: moderateScale(12),
//         marginTop: moderateScale(2)
//     },
//     headerRightView: {
//         flexDirection: 'row',
//         alignItems: 'center'
//     },
//     icons: {
//         width: scale(22),
//         height: scale(22),
//         tintColor: 'white',
//         bottom: scale(10)
//     },
// })