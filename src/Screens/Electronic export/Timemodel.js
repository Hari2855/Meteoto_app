import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient';

const Timemodel = ({ navigation, isVisible, closeModal }) => {


    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            backdropOpacity={0.5}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            style={{ margin: 0, justifyContent: 'flex-end' }}
        >
            <Pressable style={styles.container} onPress={closeModal}>
                <View style={styles.shape}></View>
            </Pressable>
        </Modal>
    );
}

export default Timemodel

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

})