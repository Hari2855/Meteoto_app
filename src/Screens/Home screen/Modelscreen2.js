import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient';

const Screen2 = ({navigation, isVisible, closeModal }) => {


    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            backdropOpacity={0.5}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            style={{ margin: 0, justifyContent: 'flex-end',}}
        >

            <Pressable style={styles.container} onPress={closeModal}>
                <View style={styles.shape}></View>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.heading}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4f4845', '#4f4845', '#704e43',]} style={styles.line1}></LinearGradient>
                    <Text style={styles.text2}>CAR SERVICES</Text>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#704e43', '#4f4845', '#4f4845',]} style={styles.line2}></LinearGradient>
                </View>

                <View style={styles.otherServices}>
                    <View style={[styles.transferView, { marginTop: moderateScale(10) }]}>
                            <Pressable style={styles.transferTab} onPress={() => navigation.navigate('HomeScreen')}>
                            <View style={[styles.transferCard, {marginTop: moderateScale(5)}]}>
                                    <Image source={require('../icon/gif-icons/Suspention1.gif')} style={[styles.icon, { marginRight: moderateScale(3), }]} resizeMode='contain' resizeMethod='resize' />
                            </View>
                            <Text style={[styles.transferText, { right: moderateScale(5) }]}>3D wheel</Text>
                            <Text style={[styles.transferText, {bottom: moderateScale(5),right: moderateScale(5) }]}>alignment</Text>
                        </Pressable>
                            <Pressable style={[styles.transferTab, { top: moderateScale(10) }]} onPress={() =>{return navigation.navigate('Electronic'), closeModal}}>
                            <View style={styles.transferCard}>
                                <Image source={require('../icon/gif-icons/Taxi1.gif')} style={styles.icon} resizeMode='contain' resizeMethod='resize' />
                            </View>
                            <Text style={[styles.transferText, { marginBottom: moderateScale(15), marginRight: moderateScale(5) }]}>Electronic</Text>
                                <Text style={[styles.transferText, { bottom: moderateScale(22), marginRight: moderateScale(5) }]}>expert</Text>
                        </Pressable>
                            <Pressable style={[styles.transferTab, { marginBottom: moderateScale(15) }]} onPress={() => navigation.navigate('Acservice')}>
                            <View style={styles.transferCard}>
                                    <View style={styles.iconcontainer}>
                                        <Image source={require('../icon/gif-icons/Air.gif')} style={styles.icon} resizeMode='contain' resizeMethod='resize' />
                                    </View>
                            </View>
                            <Text style={styles.transferText}>AC service</Text>
                        </Pressable>
                            <Pressable style={[styles.transferTab, { top: moderateScale(12) }]} onPress={() => navigation.navigate('WindShield')}>
                            <View style={styles.transferCard}>
                                    <Image source={require('../icon/gif-icons/Windshield1.gif')} style={styles.icon} resizeMode='contain' resizeMethod='resize' />
                            </View>
                            <Text style={[styles.transferText, { marginBottom: moderateScale(38), marginRight: moderateScale(5) }]}>Windshield</Text>
                        </Pressable>
                    </View>


                    <View style={[styles.transferView, { marginTop: moderateScale(10) }]}>
                            <Pressable style={[styles.transferTab, { marginBottom: moderateScale(5) }]} onPress={() => navigation.navigate('Denting&Penting')}>
                            <View style={[styles.transferCard, {marginTop: moderateScale(10)}]}>
                                    <Image source={require('../icon/gif-icons/PaintRoller.gif')} style={[styles.icon, { marginRight: moderateScale(3)}]} resizeMode='contain' resizeMethod='resize' />
                            </View>
                            <Text style={styles.transferText}>{`Denting/ \nPanting`}</Text>
                        </Pressable>
                            <Pressable style={[styles.transferTab, { top: moderateScale(10) }]} onPress={() => navigation.navigate('Carspa')}>
                            <View style={styles.transferCard}>
                                <Image source={require('../icon/gif-icons/Taxi2.gif')} style={styles.icon} resizeMode='contain' resizeMethod='resize' />
                            </View>
                            <Text style={[styles.transferText, { marginBottom: moderateScale(30), marginRight: moderateScale(10) }]}>Car SPA</Text>
                        </Pressable>
                            <Pressable style={[styles.transferTab, { marginBottom: moderateScale(15) }]} onPress={() => navigation.navigate('Accessories')}>
                            <View style={styles.transferCard}>
                                    <Image source={require('../icon/gif-icons/International1.gif')} style={styles.icon} resizeMode='contain' resizeMethod='resize' />
                            </View>
                            <Text style={styles.transferText}>Accessories</Text>
                        </Pressable>
                            <Pressable style={styles.transferTab} onPress={() => navigation.navigate('Modify')}>
                            <View style={styles.transferCard}>
                                    <Image source={require('../icon/gif-icons/Taxi3.gif')} style={styles.icon} resizeMode='contain' resizeMethod='resize' />
                            </View>
                            <Text style={[styles.transferText, { marginBottom: moderateScale(15), marginRight: moderateScale(5) }]}>Modify</Text>
                        </Pressable>
                    </View>

                    <View style={[styles.transferView, { marginTop: moderateScale(10), justifyContent: 'flex-start', right: moderateScale(15) }]}>
                            <Pressable style={styles.transferTab} onPress={() => navigation.navigate('Doorrepair')}>
                            <View style={styles.transferCard}>
                                <Image source={require('../icon/gif-icons/Door.gif')} style={[styles.icon, { marginRight: moderateScale(3) }]} resizeMode='contain' resizeMethod='resize' />
                            </View>
                            <Text style={[styles.transferText, { right: moderateScale(5) }]}>Door</Text>
                            <Text style={[styles.transferText, { bottom: moderateScale(5), right: moderateScale(5) }]}>repair</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.heading}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4f4845', '#4f4845', '#704e43',]} style={styles.line1}></LinearGradient>
                    <Text style={styles.text2}>FILING STATION</Text>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#704e43', '#4f4845', '#4f4845',]} style={styles.line2}></LinearGradient>
                </View>

                <View style={[styles.transferView, { marginTop: moderateScale(10), justifyContent: 'flex-start', right: moderateScale(15) }]}>
                        <Pressable style={styles.transferTab} onPress={() => navigation.navigate('Fulestations')}>
                        <View style={styles.transferCard}>
                                <Image source={require('../icon/gif-icons/fender.gif')} style={[styles.icon, { marginRight: moderateScale(3) }]} resizeMode='contain' resizeMethod='resize' />
                        </View>
                        <Text style={[styles.transferText, { right: moderateScale(5) }]}>Petrol/</Text>
                        <Text style={[styles.transferText, { bottom: moderateScale(5), right: moderateScale(5) }]}>Diesel</Text>
                    </Pressable>

                        <Pressable style={[styles.transferTab, { top: moderateScale(10), right: moderateScale(15) }]} onPress={() => navigation.navigate('Cng1')}>
                        <View style={styles.transferCard}>
                                <Image source={require('../icon/gif-icons/fuel-station.gif')} style={styles.icon} resizeMode='contain' resizeMethod='resize' />
                        </View>
                            <Text style={[styles.transferText, { marginBottom: moderateScale(15), marginRight: moderateScale(10) }]}>CNG</Text>
                            <Text style={[styles.transferText, { bottom: moderateScale(20), marginRight: moderateScale(5) }]}>filling</Text>
                    </Pressable>

                        <Pressable style={[styles.transferTab, { top: moderateScale(10), right: moderateScale(40) }]} onPress={() => navigation.navigate('Charging1')}>
                        <View style={styles.transferCard}>
                                <Image source={require('../icon/gif-icons/plug.gif')} style={styles.icon} resizeMode='contain' resizeMethod='resize' />
                        </View>
                        <Text style={[styles.transferText, { marginBottom: moderateScale(15), marginRight: moderateScale
                        (10) }]}>Charging</Text>
                        <Text style={[styles.transferText, { bottom: moderateScale(20), marginRight: moderateScale(5) }]}>station</Text>
                    </Pressable>
                </View>

                    <View style={styles.heading}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4f4845', '#4f4845', '#704e43',]} style={styles.line1}></LinearGradient>
                        <Text style={styles.text2}>DESIGN SERVICES</Text>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#704e43', '#4f4845', '#4f4845',]} style={styles.line2}></LinearGradient>
                    </View>

                    <View style={[styles.transferView, {bottom: moderateScale(20), justifyContent: 'flex-start', right: moderateScale(15) }]}>
                        <Pressable style={styles.transferTab} onPress={() => navigation.navigate('Graphicwork')}>
                            <View style={styles.transferCard}>
                                <Image source={require('../icon/gif-icons/Mandal.gif')} style={[styles.icon, { marginRight: moderateScale(3) }]} resizeMode='contain' resizeMethod='resize' />
                            </View>
                            <Text style={[styles.transferText, { right: moderateScale(5) }]}>Graphic</Text>
                            <Text style={[styles.transferText, { bottom: moderateScale(5), right: moderateScale(5) }]}>work</Text>
                        </Pressable>

                        <Pressable style={[styles.transferTab, { top: moderateScale(10), right: moderateScale(15) }]} onPress={() => navigation.navigate('Seatcover')}>
                            <View style={styles.transferCard}>
                                <Image source={require('../icon/gif-icons/Saftybelt.gif')} style={styles.icon} resizeMode='contain' resizeMethod='resize' />
                            </View>
                            <Text style={[styles.transferText, { marginBottom: moderateScale(15) }]}>Seat cover</Text>
                            <Text style={[styles.transferText, { bottom: moderateScale(20) }]}>design</Text>
                        </Pressable>
                        <Pressable style={[styles.transferTab, { top: moderateScale(10), right: moderateScale(40) }]} onPress={() => navigation.navigate('Interior')}>
                            <View style={styles.transferCard}>
                                <Image source={require('../icon/gif-icons/MagicWind.gif')} style={styles.icon} resizeMode='contain' resizeMethod='resize' />
                            </View>
                            <Text style={[styles.transferText, { marginBottom: moderateScale(15) }]}>Interior</Text>
                            <Text style={[styles.transferText, { bottom: moderateScale(20) }]}>design</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </Pressable>
        </Modal>
    );
}

export default Screen2

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333',
        elevation: 5,
        alignItems: 'center',
        height: verticalScale(450),
        justifyContent: 'center',
        borderRadius: moderateScale(30),
        top: moderateScale(20)
    },
    shape: {
        height: verticalScale(6),
        width: scale(40),
        backgroundColor: '#545357',
        borderRadius: moderateScale(10),
        marginTop: moderateScale(10)

    },
    otherServices: {
        width: '94%',
        flexDirection: 'column'
    },
    transferView: {
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: moderateScale(20)
    },
    transferTab: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: moderateScale(20)
    },
    iconcontainer: {
        width: scale(60),
        height: scale(60),
        borderRadius: scale(30),
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    transferCard: {
        width: scale(60),
        height: scale(60),
        borderRadius: moderateScale(30),
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: scale(32),
        height: scale(32),
    },
    transferText: {
        marginTop: moderateScale(5),
        marginLeft: moderateScale(10),
        color: 'white',
        fontSize: moderateScale(12),
    },
    heading: {
        flexDirection: 'row',
        marginTop: moderateScale(50),
        alignSelf: 'center'
    },
    line1: {
        height: verticalScale(2),
        width: scale(70),
        marginRight: moderateScale(5)
    },
    line2: {
        height: verticalScale(2),
        width: scale(70),
        marginLeft: moderateScale(5)
    },
    text2: {
        color: '#ffffff',
        bottom: moderateScale(10),
        fontSize: moderateScale(15)
    },

})