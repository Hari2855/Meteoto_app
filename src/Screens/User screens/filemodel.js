import React, {useEffect} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const Filemodel = ({ isVisible, onCancel, onConfirm, }) => {
    useEffect(() => {
            const timer = setTimeout(() => {
                onCancel
            }, 6000);

            return () => {
                clearTimeout(timer);
            };
    }, [isVisible]);
    return (
        <Modal isVisible={isVisible} backdropOpacity={0.5}>
            <View style={styles.modalContent}>
                <Text style={styles.text}>File has been Selected</Text>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: '#99CC33',
        width: moderateScale(320),
        height: verticalScale(48),
        borderRadius: moderateScale(5),
        borderWidth: 1,
        borderColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    }
});

export default Filemodel;
