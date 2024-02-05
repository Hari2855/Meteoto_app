import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient';

const Screen3 = ({ isVisible, closeModal }) => {
    const [border, setBorder] = useState(0)


    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            backdropOpacity={0.5}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            style={{ margin: 0, justifyContent: 'flex-end', }}
        >
            <Pressable style={styles.container} onPress={closeModal}>
                <View style={styles.shape}></View>
                <View style={styles.container1}>
                    <View style={styles.container2}>
                        <Text style={styles.text1}>SELECT  ONE  DEFAULT  CAR</Text>
                        <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: moderateScale(10) }}>
                            <Pressable style={[styles.car, { borderWidth: border == 0 ? 3 : 0 }]} onPress={() => setBorder(0)}>
                                <View style={styles.carcontainer}>
                                    <Image source={require('../icon/imges/Discovery.png')} style={{ width: scale(80), height: scale(48) }} />
                                    <Text style={styles.text2}>Land Rover - Defender</Text>
                                </View>
                            </Pressable>
                            <Pressable style={[styles.car, { marginTop: moderateScale(10), borderWidth: border == 1 ? 3 : 0 }]} onPress={() => setBorder(1)}>
                                <View style={styles.carcontainer}>
                                    <Image source={require('../icon/imges/Discovery.png')} style={{ width: scale(80), height: scale(48) }} />
                                    <Text style={styles.text2}>Land Rover - Defender</Text>
                                </View>
                            </Pressable>
                            <Pressable style={[styles.car, { marginTop: moderateScale(10), borderWidth: border == 2 ? 3 : 0 }]} onPress={() => setBorder(2)}>
                                <View style={styles.carcontainer}>
                                    <Image source={require('../icon/imges/Discovery.png')} style={{ width: scale(80), height: scale(48) }} />
                                    <Text style={styles.text2}>Land Rover - Defender</Text>
                                </View>
                            </Pressable>
                            <Pressable style={[styles.car, { marginTop: moderateScale(10), borderWidth: border == 3 ? 3 : 0 }]} onPress={() => setBorder(3)}>
                                <View style={styles.carcontainer}>
                                    <Image source={require('../icon/imges/Discovery.png')} style={{ width: scale(80), height: scale(48) }} />
                                    <Text style={styles.text2}>Land Rover - Defender</Text>
                                </View>
                            </Pressable>
                            <Pressable style={[styles.car, { marginTop: moderateScale(10), borderWidth: border == 4 ? 3 : 0 }]} onPress={() => setBorder(4)}>
                                <View style={styles.carcontainer}>
                                    <Image source={require('../icon/imges/Discovery.png')} style={{ width: scale(80), height: scale(48) }} />
                                    <Text style={styles.text2}>Land Rover - Defender</Text>
                                </View>
                            </Pressable>
                        </ScrollView>
                    </View>
                </View>
            </Pressable>


        </Modal>
    );
}

export default Screen3

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333',
        elevation: 5,
        alignItems: 'center',
        // height: verticalScale(450),
        justifyContent: 'center',
        borderRadius: moderateScale(30),
        top: moderateScale(20),
    },
    shape: {
        height: verticalScale(4),
        width: scale(32),
        backgroundColor: '#545357',
        borderRadius: moderateScale(10),
        marginTop: moderateScale(20)

    },
    container1: {
        width: '90%',
        height: verticalScale(280),
        // borderWidth: 1,
        // borderColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(30)
    },
    text1: {
        color: '#ffffff',
        fontSize: moderateScale(13),
        fontWeight: '500'
    },
    container2: {
        width: '100%',
        height: moderateScale(280),
    },
    car: {
        height: verticalScale(72),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#33cccc'
    },
    carcontainer: {
        width: scale(268),
        height: scale(48),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text2: {
        color: '#000000',
        fontSize: moderateScale(16),
        fontWeight: '500'
    },

})