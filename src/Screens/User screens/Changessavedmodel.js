import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const ChangesSaved = ({ navigation, isVisible, closeModal }) => {


    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            backdropOpacity={0.1}
            animationIn="fadeIn"
            animationOut="fadeOut"
            style={{ margin: 0, justifyContent: 'flex-start'}}
        >
            <View style={styles.container}>
                <View style={styles.circle}>
                    <Image source={require('../icon/Icons/tic.png')} style={styles.img} />
                </View>
                <Text style={styles.text}>CHANGES ARE SAVED!</Text>
            </View>
        </Modal>
    );
}

export default ChangesSaved

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#99CC33',
        height: scale(48),
        width: scale(280),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(20)

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
        fontWeight: '500',
        color: '#ffffff',
        right: moderateScale(30)
    }
})