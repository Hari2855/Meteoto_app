import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient';

const Modelscreen1 = ({navigation, isVisible, closeModal}) => {

    
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            backdropOpacity={0.5}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            style={{ margin: 0, justifyContent: 'flex-end'}}
        >
            <Pressable style={styles.container} onPress={closeModal}>
                <View style={styles.shape}></View>
                <View style={styles.heading}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4f4845', '#4f4845', '#704e43',]} style={styles.line1}></LinearGradient>
                    <Text style={styles.text2}>EMERGENCY SERVICES</Text>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#704e43', '#4f4845', '#4f4845',]} style={styles.line2}></LinearGradient>
                </View>

                <View style={styles.help}>
                    <View style={{ flexDirection: 'column' }}>
                        <Pressable style={[styles.iconcontainer, { marginTop: moderateScale(15) }]} onPress={() => navigation.navigate('Accident')}>
                            <Image source={require('../icon/emergency-icons/Fender.png')} style={{ height: scale(32), width: scale(32), tintColor: 'black',}} />
                        </Pressable>
                        <Text style={{ color: 'white', marginTop: moderateScale(5) }}>Accident</Text>
                        <Text style={{ color: 'white', marginLeft: moderateScale(15)}}>SOS</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Pressable style={[styles.iconcontainer, {marginLeft: moderateScale(10) }]} onPress={() => navigation.navigate('Keymakermap')}>
                            <Image source={require('../icon/emergency-icons/Fender5.png')} style={{ height: scale(32), width: scale(32), tintColor: 'black', }} />
                        </Pressable>
                        <Text style={{ color: 'white', marginTop: moderateScale(5), marginLeft: moderateScale(10) }}>Key issues</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Pressable style={[styles.iconcontainer, {marginTop: moderateScale(25)}]} onPress={() => navigation.navigate('Towing')}>
                            <Image source={require('../icon/emergency-icons/Fender3.png')} style={{ height: scale(32), width: scale(32), tintColor: 'black' }} />
                        </Pressable>
                        <Text style={{ color: 'white', marginTop: moderateScale(5), marginLeft: moderateScale(10) }}>Towing</Text>
                        <Text style={{ color: 'white', marginLeft: moderateScale(10)}}>service</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Pressable style={[styles.iconcontainer, {marginTop: moderateScale(30)}]} onPress={() => navigation.navigate('Fulestations')}>
                            <Image source={require('../icon/emergency-icons/Fender6.png')} style={{ height: scale(32), width: scale(32), tintColor: 'black' }} />
                        </Pressable>
                        <Text style={{ color: 'white', marginTop: moderateScale(5), marginLeft: moderateScale(15) }}>Fuel</Text>
                        <Text style={{ color: 'white', marginLeft: moderateScale(10)}}>station</Text>
                    </View>
                </View>
                <View style={styles.help}>
                    <View style={{ flexDirection: 'column' }}>
                        <Pressable style={[styles.iconcontainer, {marginTop: moderateScale(15)}]} onPress={() => navigation.navigate('Mechanic')}>
                            <Image source={require('../icon/emergency-icons/Fender7.png')} style={{ height: scale(32), width: scale(32), tintColor: 'black' }} />
                        </Pressable>
                        <Text style={{ color: 'white', marginTop: moderateScale(5), marginLeft: moderateScale(20) }}>Flat</Text>
                        <Text style={{ color: 'white', marginLeft: moderateScale(20) }}>type</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Pressable style={[styles.iconcontainer, { marginTop: moderateScale(20), marginLeft: moderateScale(10) }]} onPress={() => navigation.navigate('Hospital')}>
                            <Image source={require('../icon/emergency-icons/Fender8.png')} style={{ height: scale(32), width: scale(32), tintColor: 'black', }} />
                        </Pressable>
                        <Text style={{ color: 'white', marginTop: moderateScale(5), marginLeft: moderateScale(15) }}>Hospital</Text>
                        <Text style={{ color: 'white', marginLeft: moderateScale(23) }}>nearly</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Pressable style={[styles.iconcontainer, { marginLeft: moderateScale(10), marginTop: moderateScale(20) }]} onPress={() => navigation.navigate('Mechanic')}>
                            <Image source={require('../icon/emergency-icons/Fender2.png')} style={{ height: scale(32), width: scale(32), tintColor: 'black' }} />
                        </Pressable>
                        <Text style={{ color: 'white', marginTop: moderateScale(5), marginLeft: moderateScale(10) }}>Mechanic</Text>
                        <Text style={{ color: 'white', marginLeft: moderateScale(15) }}>support</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Pressable style={[styles.iconcontainer, {marginTop: moderateScale(20)}]} onPress={() => navigation.navigate('Mechanic')}>
                            <Image source={require('../icon/emergency-icons/Fender9.png')} style={{ height: scale(32), width: scale(32), tintColor: 'black' }} />
                        </Pressable>
                        <Text style={{ color: 'white', marginTop: moderateScale(5), marginLeft: moderateScale(10)}}>Battery</Text>
                        <Text style={{ color: 'white', marginLeft: moderateScale(15)}}>jump</Text>
                    </View>
                </View>
            </Pressable>
        </Modal>
    );
}

export default Modelscreen1

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333',
        elevation: 5,
        borderRadius: moderateScale(30),
        alignItems: 'center',
        height: verticalScale(350),
        top: moderateScale(20)
    },
    shape: {
        height: verticalScale(6),
        width: scale(40),
        backgroundColor: '#545357',
        borderRadius: moderateScale(10),
        marginTop: moderateScale(10)

    },
    text1: {
        color: '#ffffff',
        marginTop: moderateScale(50),
        fontSize: moderateScale(16)
    },
    help: {
        flexDirection: 'row',
        width: '90%',
        height: verticalScale(80),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: moderateScale(30)
    },
    iconcontainer: {
        height: scale(60),
        width: scale(60),
        backgroundColor: '#ffc2ae',
        borderRadius: moderateScale(30),
        borderWidth: 2,
        borderColor: '#ffffff',
        // marginLeft: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center'
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