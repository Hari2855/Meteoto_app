import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Cashmodal2 from './Cashmodal2';

const Cashmodal = ({ navigation, isVisible, closeModal }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


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
                <Text style={styles.text1}>C A S H   P A Y M E N T</Text>
                <View style={styles.line}></View>
                <Image source={require('../icon/imges/Maskgroup.png')} style={styles.img}/>
                <Text style={styles.text2}>Ask the garage to confirm payment request</Text>
                <Text style={[styles.text2, { marginTop: moderateScale(2) }]}>for Cash Payment</Text>
                <Pressable style={styles.button} onPress={toggleModal}>
                    <Text style={styles.text3}>MAKE REQUEST</Text>
                </Pressable>
                <Cashmodal2 isVisible={isModalVisible} closeModal={toggleModal} navigation={navigation} />
            </Pressable>
        </Modal>
    );
}

export default Cashmodal

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333',
        elevation: 5,
        height: verticalScale(330),
    },
    shape: {
        height: verticalScale(4),
        width: scale(40),
        backgroundColor: '#337070',
        borderRadius: moderateScale(10),
        marginTop: moderateScale(15),
        alignSelf: 'center'
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(30)
    },
    line: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(10)
    },
    img: {
        width: scale(50),
        height: scale(50),
        alignSelf: 'center',
        marginTop: moderateScale(20)
    },
    text2: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        marginTop: moderateScale(10),
        alignSelf: 'center'
    },
    button: {
        width: moderateScale(307),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(80)
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    }
})