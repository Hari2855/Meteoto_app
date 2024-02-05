import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Octicons from 'react-native-vector-icons/Octicons'

const Checkmodal = ({ navigation, isVisible, closeModal }) => {
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            backdropOpacity={0.1}
            animationIn="fadeIn"
            animationOut="fadeOut"
            style={{ margin: 0, justifyContent: 'flex-end', }
            }
        >
            <Pressable style={style.container} onPress={closeModal}>
            <Octicons name='check' color={'#ffffff'} size={100} />
            </Pressable>
        </Modal >
  )
}

export default Checkmodal

const style = StyleSheet.create({
    container: {
        height: verticalScale(152),
        width: moderateScale(152),
        borderRadius: moderateScale(5),
        // backgroundColor: '#ffffff',
        marginLeft: moderateScale(18),
        bottom: moderateScale(313),
        alignItems: 'center', 
        justifyContent: 'center'
    }
})