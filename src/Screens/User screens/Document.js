import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Document = ({ navigation }) => {
    return (
        <View style={styles.container1}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('User')}>
                    <MaterialIcons name='keyboard-arrow-left' color={'#ffffff'} size={24} style={{ marginLeft: moderateScale(15) }} />
                </Pressable>

                <Text style={styles.text1}>MY DOCUMENTS</Text>
            </View>

            <View style={styles.container2}>
                <Image source={require('../icon/profile-options-img/Gif/Copy.gif')} style={{ width: scale(80), height: scale(84) }} />
                <Text style={styles.text2}>{`FIND ALL YOUR DOCS \nAT ONE PLACE`}</Text>
            </View>

            <View style={styles.line1}></View>

            <View style={styles.doc}>
                <Image source={require('../icon/illustration/Addfile.png')} style={styles.img}/>
                <Text style={styles.text3}>Add your important docs</Text>
                <Text style={[styles.text3, {marginTop: moderateScale(2)}]}>for hassle free use</Text>

                <Text style={styles.text4}>All your documents are safe with</Text>
                <Text style={[styles.text4, { marginTop: moderateScale(2) }]}>Meteoto, we do not share it with anyone!</Text>
            </View>


            <Pressable style={styles.button} onPress={() => navigation.navigate('Uploaddoc')}>
                <Text style={styles.text5}>ADD DOCUMENT</Text>
            </Pressable>
        </View>
    )
}

export default Document

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
        marginLeft: moderateScale(90),
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
    line1: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#929292',
        marginTop: moderateScale(40)
    },
    doc: {
        width: moderateScale(247),
        height: verticalScale(254),
        alignItems: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
        marginTop: moderateScale(40)
    },
    img: {
        width: moderateScale(163),
        height: verticalScale(133)
    },
    text3: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        marginTop: moderateScale(30)
    },
    text4: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#c6c6c6',
        marginTop: moderateScale(20)
    },
    text5: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        marginTop: moderateScale(80),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }

})