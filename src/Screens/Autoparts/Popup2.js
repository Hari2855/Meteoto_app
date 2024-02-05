import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, ScrollView, } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const Popup2 = ({ navigation, isVisible, closeModal }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                closeModal();
                navigation.navigate('Ordersuccess')
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
            backdropOpacity={0.50}
            animationIn="fadeIn"
            animationOut="fadeOut"
            backdropColor='gray'
            style={{ margin: 0, justifyContent: 'flex-end' }}
        >
            <View style={styles.container}>
                <Image source={require('../icon/gif-icons/loading.gif')} style={styles.img} />
                <Text style={styles.text}>{`Please wait! We are confirming
                    your Order :)`}</Text>
            </View>
        </Modal>
    );
}

export default Popup2

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        height: scale(244),
        width: scale(312),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: moderateScale(22),
        bottom: moderateScale(250),
        borderRadius: moderateScale(10)
    },
    text: {
        fontSize: moderateScale(16),
        color: '#333333',
        marginTop: moderateScale(5)
    },
    img: {
        width: scale(100),
        height: scale(100)
    }
    
})