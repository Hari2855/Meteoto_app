import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const Defaultmodel = ({ navigation, isVisible, closeModal }) => {
    useEffect(() => {
        if (isVisible == true) {
            const timer = setTimeout(() => {
                closeModal()
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [isVisible]);


    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            backdropOpacity={0.1}
            animationIn="fadeIn"
            animationOut="fadeOut"
            style={{ margin: 0, justifyContent: 'center' }}
        >
            <View style={styles.container}>
                <Text style={styles.text}>{`Default contact will be \navailable for Direct Dial \nthrough App.`}</Text>
            </View>
        </Modal>
    );
}

export default Defaultmodel

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        height: scale(84),
        width: scale(180),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderRadius: moderateScale(5),
        bottom: moderateScale(95)

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
        width: scale(24),
        height: scale(24),
        borderRadius: scale(15)
    },
    text: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#666666',
        right: moderateScale(15)
    }
})