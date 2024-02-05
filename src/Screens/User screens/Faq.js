import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Aadharcarmodel from './Aadharcardmodel'

const Faq = ({ navigation }) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    };


    return (
        <View style={styles.container1}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('Help')}>
                    <MaterialIcons name='keyboard-arrow-left' color={'#ffffff'} size={24} style={{ marginLeft: moderateScale(15) }} />
                </Pressable>

                <Text style={styles.text1}>FAQ</Text>
            </View>

            <View style={styles.container2}>
                <Image source={require('../icon/Profile-section-imgs/profile-options-img/Gif/Qanda.gif')} style={{ width: scale(80), height: scale(84) }} />
                <Text style={styles.text2}>{`YOU MIGHT FIND YOUR \nANSWER HERE IN FAQ`}</Text>
            </View>

            <View style={styles.line1}></View>

            <Text style={[styles.text2, { color: '#ffffff', marginLeft: moderateScale(20), marginTop: moderateScale(30) }]}>FREQUENTLY ASKED QUESTIONS</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                {isPressed == false ? <View>
                    <Pressable style={styles.container3} onPress={handlePress}>
                        <Text style={[styles.text3, { fontSize: moderateScale(25) }]}>•</Text>
                        <Text style={[styles.text3, { marginLeft: moderateScale(5) }]}>How to find service invoice?</Text>
                        <Image source={require('../icon/emergency-icons/Fender4.png')} style={[styles.imges, { marginLeft: '35%' }]} />
                    </Pressable>
                </View> :

                    <Pressable style={[styles.container3, { flexDirection: 'column', height: verticalScale(130) }]} onPress={handlePress}>
                        <View style={styles.container4}>
                            <Text style={[styles.text3, { fontSize: moderateScale(25) }]}>•</Text>
                            <Text style={[styles.text3, { marginLeft: moderateScale(5) }]}>How to find service invoice?</Text>
                            <Image
                                source={require('../icon/emergency-icons/Fender4.png')}
                                style={[styles.imges, { marginLeft: '35%', transform: [{ rotate: '90deg' }] }]}
                            />
                        </View>
                        <Text style={[styles.text3, { color: '#7e7e7e', marginLeft: moderateScale(25), alignSelf: 'flex-start', marginTop: moderateScale(10) }]}>{`You can find all your service invoices \nUser -> Service Invoice.`}</Text>
                    </Pressable>}

                <Pressable style={styles.container3}>
                    <Text style={[styles.text3, { fontSize: moderateScale(25) }]}>•</Text>
                    <Text style={[styles.text3, { marginLeft: moderateScale(5) }]}>How to find service invoice?</Text>
                    <Image source={require('../icon/emergency-icons/Fender4.png')} style={[styles.imges, { marginLeft: '35%' }]} />
                </Pressable>

                <Pressable style={styles.container3}>
                    <Text style={[styles.text3, { fontSize: moderateScale(25) }]}>•</Text>
                    <Text style={[styles.text3, { marginLeft: moderateScale(5) }]}>How to find service invoice?</Text>
                    <Image source={require('../icon/emergency-icons/Fender4.png')} style={[styles.imges, { marginLeft: '35%' }]} />
                </Pressable>

                <Pressable style={styles.container3}>
                    <Text style={[styles.text3, { fontSize: moderateScale(25) }]}>•</Text>
                    <Text style={[styles.text3, { marginLeft: moderateScale(5) }]}>How to find service invoice?</Text>
                    <Image source={require('../icon/emergency-icons/Fender4.png')} style={[styles.imges, { marginLeft: '35%' }]} />
                </Pressable>
            </ScrollView>
        </View>
    )
}

export default Faq

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
    },
    container3: {
        width: moderateScale(320),
        height: verticalScale(56),
        borderRadius: moderateScale(8),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row'
    },
    container4: {
        height: verticalScale(50),
        width: moderateScale(320),
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#929292',
        alignItems: 'center'
    },
    img: {
        width: scale(32),
        height: scale(32),
        marginLeft: moderateScale(15)
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#333333',
        marginLeft: moderateScale(10)
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