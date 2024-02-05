import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const Aadharcarmodel = ({ navigation, isVisible, closeModal }) => {
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            backdropOpacity={0.5}
            animationIn="fadeIn"
            animationOut="fadeOut"
            style={{ margin: 0, justifyContent: 'center' }}
        >
            <View style={styles.container}>
                <Image source={require('../icon/imges/success-card.png')} style={styles.img}/>
            </View>
        </Modal>
    );
}

export default Aadharcarmodel

const styles = StyleSheet.create({
    container: {
        height: scale(320),
        width: scale(244),
        justifyContent: 'center',
        alignSelf: 'center',

    },
    img: {
        width: moderateScale(312),
        height: verticalScale(244),
        borderRadius: moderateScale(8),
        alignSelf: 'center'
    }
})