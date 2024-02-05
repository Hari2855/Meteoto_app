import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import LottieView from 'lottie-react-native';

const Lodingmodel = ({ navigation, isVisible, closeModal }) => {

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            backdropOpacity={0.50}
            animationIn="fadeIn"
            animationOut="fadeOut"
            backdropColor='gray'
            style={{ margin: 0, justifyContent: 'flex-end' }}
        >
            <View style={styles.container}>
                <LottieView
                    source={require('./ani1.json')}
                    autoPlay
                    loop
                    style={{ width: scale(250), height: scale(250)}}
                />
                {/* <Image source={require('./icon/gif-icons/loader.gif')} style={{height: scale(200), width: scale(200)}}/> */}
            </View>
        </Modal>
    );
}

export default Lodingmodel

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'none',
        height: scale(244),
        width: scale(312),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: moderateScale(22),
        bottom: moderateScale(250),
        borderRadius: moderateScale(10)
    },

})