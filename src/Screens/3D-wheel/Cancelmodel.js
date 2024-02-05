import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient';
import Ratingmodel from './Ratingmodel';

const Cancelmodel3 = ({ navigation, isVisible, closeModal1 }) => {
    const [screen, setborder] = useState(6)



    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal1}
            backdropOpacity={0.5}
            animationIn= 'fadeIn'
            animationOut='fadeOut'
            style={{ margin: 0, justifyContent: 'flex-end' }}
        >
            <Pressable onPress={closeModal1}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#697072', '#515f67', '#2d4558']} style={styles.container}>
                    <View style={styles.shape}></View>
                    <Text style={styles.text1}>THANKS FOR RATING!!</Text>
                    <Text style={[styles.text2, {marginTop: moderateScale(30)}]}>YOUR VALUABLE FEEDBACK HELP US</Text>
                    <Text style={[styles.text2, { marginTop: moderateScale(5)}]}>TO IMPROVE YOUR SERVICE.</Text>

                    <Pressable style={styles.button} onPress={() => {closeModal1(), navigation.navigate('Home')}}>
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#33CCCC' }}>Close</Text>
                    </Pressable>
                </LinearGradient>
            </Pressable>
        </Modal>
    );
}

export default Cancelmodel3

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333',
        elevation: 5,
        alignItems: 'center',
        height: verticalScale(440),
    },
    shape: {
        height: verticalScale(4),
        width: scale(32),
        backgroundColor: '#545357',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(15)
    },
    text1: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(120)
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        borderWidth: 1,
        borderColor: '#33CCCC',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(150)
    },
    text2: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        alignSelf: 'center'
    }
})