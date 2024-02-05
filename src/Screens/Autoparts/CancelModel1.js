import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const CancelModel1 = ({ isVisible, onCancel, onConfirm, }) => {
    return (
        <Modal isVisible={isVisible} backdropOpacity={0.5}>
            <View style={styles.modalContent}>
                <Text style={styles.text}>{`YOU DO NOT SEARCH FOR \n AUTOPART?`}</Text>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={onConfirm} style={styles.modalButton1}>
                        <Text style={[styles.modalButtonText, { color: '#33CCCC' }]}>NO</Text>
                    </Pressable>
                    <Pressable onPress={onCancel} style={[styles.modalButton2, { marginLeft: moderateScale(20) }]}>
                        <Text style={styles.modalButtonText}>GO BACK</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: '#666666',
        padding: moderateScale(20),
        width: moderateScale(320),
        height: verticalScale(152),
        borderRadius: moderateScale(10),
    },
    modalText: {
        fontSize: moderateScale(16),
        marginBottom: (20),
        color: '#ffffff'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        right: moderateScale(8),
        marginTop: moderateScale(20)
    },
    modalButton1: {
        width: scale(136),
        height: scale(40),
        borderRadius: scale(5),
        borderWidth: 1,
        borderColor: '#33CCCC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalButton2: {
        backgroundColor: '#33CCCC',
        width: scale(136),
        height: scale(40),
        borderRadius: scale(5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: moderateScale(12),
        fontWeight: '500'
    },
    text: {
        fontSize: moderateScale(14),
        fontWeight: '500',
        marginBottom: (20),
        color: '#ffffff'
    }
});

export default CancelModel1;
