import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const DeleteModel = ({ isVisible, onCancel, onConfirm, }) => {
    return (
        <Modal isVisible={isVisible} backdropOpacity={0.5}>
            <View style={styles.modalContent}>
                <Text style={[styles.modalText, { fontWeight: '500' }]}>Do you want to delete it?</Text>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={onConfirm} style={styles.modalButton1}>
                        <Text style={[styles.modalButtonText, { color: '#33CCCC' }]}>YES</Text>
                    </Pressable>
                    <Pressable onPress={onCancel} style={[styles.modalButton2, { marginLeft: moderateScale(20) }]}>
                        <Text style={styles.modalButtonText}>NO</Text>
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
        height: verticalScale(140),
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
});

export default DeleteModel;
