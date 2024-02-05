import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const Fileuploadmodel = ({ navigation, isVisible, closeModal }) => {
    useEffect(() => {
        if (isVisible == true) {
            const timer = setTimeout(() => {
                closeModal()
            }, 4000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [isVisible]);


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
                <Text style={styles.text}>File has been Selected</Text>
            </View>
        </Modal>
    );
}

export default Fileuploadmodel

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#99CC33',
        height: scale(48),
        width: scale(280),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: moderateScale(5),
        bottom: moderateScale(13),
        borderWidth: 1,
        borderColor: '#ffffff'

    },
    text: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
    }
})