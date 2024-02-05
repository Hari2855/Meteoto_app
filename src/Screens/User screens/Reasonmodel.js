import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import { RadioButton } from 'react-native-paper';
import Closemodel from './Closemodel';

const Reasonmodel = ({ navigation, isVisible, closeModal }) => {
    const [checked, setChecked] = useState(false);
    const [text, setText] = useState(false)
    const [isModalVisible, setModalVisible] = useState(false)


    const toggleModal = () => {
        if (checked != false) {
            setModalVisible(!isModalVisible)
        }
    }


    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            backdropOpacity={0.5}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            style={{ margin: 0, justifyContent: 'flex-end', }}
        >

            <Pressable style={styles.container} onPress={closeModal}>
                <View style={styles.shape}></View>

                <Text style={styles.text1}>{`Please, let us know why you are \ncancelling this order!`}</Text>

                <View style={styles.line2}></View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={[styles.text2, { right: moderateScale(3) }]}>I got same part in lesser price.</Text>
                </View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={[styles.text2, { marginLeft: moderateScale(10) }]}>You need part from any specific brand.</Text>
                </View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="third"
                        status={checked === 'third' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('third')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={[styles.text2, {left: moderateScale(10)}]}>Product is not required anymore.</Text>
                </View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="four"
                        status={checked === 'four' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('four')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={[styles.text2, { left: moderateScale(5) }]}>Mistakenly Ordered wrong Part.</Text>
                </View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="five"
                        status={checked === 'five' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('five')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={[styles.text2, {right: moderateScale(5)}]}>Delay in shipping as expected.</Text>
                </View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="six"
                        status={checked === 'six' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('six')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={[styles.text2, { right: moderateScale(95) }]}>Other reason.</Text>
                </View>

                <TextInput style={styles.input} placeholder='Write your reason here' placeholderTextColor={'#B8B8B8'} onPressIn={() => { return setText(true), setChecked('six') }} />

                <Pressable style={[styles.button, { backgroundColor: checked == false ? 'gray' : '#33CCCC' }]} onPress={toggleModal}>
                    <Text style={styles.text6}>CANCEL ORDER</Text>
                </Pressable>
                <Closemodel isVisible={isModalVisible} closeModal={toggleModal} navigation={navigation} />
            </Pressable>
        </Modal>
    );
}

export default Reasonmodel

const styles = StyleSheet.create({
    container: {
        width: moderateScale(360),
        backgroundColor: '#333333',
        elevation: 5,
        height: verticalScale(610),
        borderTopLeftRadius: (30),
        borderTopRightRadius: (30)
    },
    shape: {
        height: verticalScale(4),
        width: scale(68),
        backgroundColor: '#545357',
        borderRadius: moderateScale(10),
        marginTop: moderateScale(15),
        alignSelf: 'center'
    },
    text1: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(56)
    },
    line2: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#999999',
        marginTop: moderateScale(20)
    },
    radiocontainer: {
        width: moderateScale(320),
        height: verticalScale(49),
        marginLeft: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    text2: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        marginRight: moderateScale(105)
    },
    input: {
        width: moderateScale(320),
        height: verticalScale(48),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(10),
        alignSelf: 'center',
        paddingLeft: moderateScale(20),
        fontSize: moderateScale(12),
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        backgroundColor: '#33CCCC',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(60)
    },
    text6: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    }

})