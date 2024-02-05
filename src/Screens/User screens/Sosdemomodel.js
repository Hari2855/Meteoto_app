import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const Sosdemomodel = ({ navigation, isVisible, closeModal1 }) => {


    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal1}
            backdropOpacity={0.1}
            animationIn="fadeIn"
            animationOut="fadeOut"
            style={{ margin: 0, justifyContent: 'center' }}
        >
            <Pressable style={styles.container} onPress={closeModal1}>
                <Text style={styles.text}>D E M O   P U R P O S E</Text>
                <View style={styles.line1}></View>
                <Image source={require('../icon/imges/Screenshot-img.png')} style={styles.img}/>
            </Pressable>
        </Modal>
    );
}

export default Sosdemomodel

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        height: scale(660),
        width: scale(320),
        flexDirection: 'column',
        alignSelf: 'center',
        borderRadius: moderateScale(5),

    },
    circle: {
        width: scale(32),
        height: scale(32),
        borderRadius: scale(20),
        backgroundColor: '#ffffff',
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: scale(296),
        height: scale(600),
        alignSelf: 'center',
        marginTop: moderateScale(10)
    },
    text: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#666666',
        marginTop: moderateScale(15),
        marginLeft: moderateScale(15)
    },
    line1: {
        width: moderateScale(320),
        height: verticalScale(1),
        backgroundColor: '#929292',
        marginTop: moderateScale(10)
    },
})