import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ImageBackground} from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import CarMap from './CarMap';

const BookServiceModel = ({ navigation, isVisible, closeModal }) => {

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

                <Text style={styles.text1}>{`W H A T   S E R V I C E   Y O U   A R E   L O O K I N G   F O R \nY O U R   C A R?`}</Text>
                <View style={styles.line}></View>

                <View style={styles.container1}>

                    <ImageBackground source={require('../icon/imges/container.png')} style={styles.img}>
                        <Text style={styles.text2}>GENERAL SERVICE</Text>
                    </ImageBackground>

                    <Pressable onPress={() => navigation.navigate(CarMap)}>
                        <ImageBackground source={require('../icon/imges/container.png')} style={[styles.img, { marginTop: moderateScale(20) }]}>
                            <Text style={styles.text2}>MAJOR SERVICE</Text>
                        </ImageBackground>
                    </Pressable>
                </View>
            </Pressable>
        </Modal>
    );
}

export default BookServiceModel

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333',
        elevation: 5,
        borderRadius: moderateScale(30),
        height: verticalScale(480),
        top: moderateScale(20)
    },
    shape: {
        height: verticalScale(4),
        width: scale(32),
        backgroundColor: '#545357',
        borderRadius: moderateScale(10),
        marginTop: moderateScale(20),
        alignSelf: 'center'
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        marginTop: moderateScale(50),
        color: '#ffffff',
        marginLeft: moderateScale(20)
    },
    line: {
        width: scale(360),
        height: 1,
        backgroundColor: '#404040',
        marginTop: moderateScale(15)
    },
    container1: {
        flexDirection: 'column',
        width: moderateScale(320),
        height: verticalScale(306),
        // borderWidth: 1,
        // borderColor: '#ffffff',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: moderateScale(30)
    },
    desigen: {
        width: moderateScale(320),
        height: verticalScale(140),
        borderWidth: 2,
        borderColor: '#ffffff',
        borderRadius: moderateScale(10),
        flexDirection: 'column'
    },
    shap1: {
        width: scale(70),
        height: scale(70),
        backgroundColor: '#33CCCC',
        borderTopLeftRadius: scale(7),
        borderBottomRightRadius: scale(50),
    },
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffc2ae',
        alignSelf: 'center',
        bottom: moderateScale(10)
    },
    shap2: {
        width: scale(70),
        height: scale(70),
        backgroundColor: '#33CCCC',
        alignSelf: 'flex-end',
        bottom: moderateScale(19),
        borderTopLeftRadius: scale(50),
        borderBottomRightRadius: scale(7),
        left: moderateScale(1)
    },
    img: {
        width: scale(320),
        height: scale(140),
        alignItems: 'center',
        justifyContent: 'center'
    }

})