import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient';
import Cancelmodel3 from './Cancelmodel';

const Ratingmodel = ({ navigation, isVisible, closeModal }) => {
    const [border, setborder] = useState(5)
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        if (border < 5) {
            setModalVisible(!isModalVisible);
        }
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
            <Pressable onPress={closeModal}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#D7BFA1', '#203C52']} style={styles.container}>
                    <View style={styles.shape}></View>
                    <Text style={styles.text1}>YOUR EXPERIENCE WITH THE SHOP WAS</Text>
                    <View style={styles.container1}>
                        <Pressable style={[styles.shape1, {borderWidth: border == 0 ? 3: 0, borderColor: border == 0 ? '#33CCCC': '#ffffff'}]} onPress={() => setborder(0)}>
                            <Image source={require('../icon/Icons/Terrible.png')} style={{ height: scale(20), width: scale(20), borderRadius: scale(15) }} />
                            <Text style={{ fontSize: scale(12), fontWeight: '400', color: '#333333', marginTop: scale(5) }}>Terrible</Text>
                        </Pressable>

                        <Pressable style={[styles.shape1, { borderWidth: border == 1 ? 3 : 0, borderColor: border == 1 ? '#33CCCC' : '#ffffff' }]} onPress={() => setborder(1)}>
                            <Image source={require('../icon/Icons/Unsatisfied.png')} style={{ height: scale(20), width: scale(20), borderRadius: scale(15) }} />
                            <Text style={{ fontSize: scale(12), fontWeight: '400', color: '#333333', marginTop: scale(5) }}>Unsatisfied</Text>
                        </Pressable>

                        <Pressable style={[styles.shape1, { borderWidth: border == 2 ? 3 : 0, borderColor: border == 2 ? '#33CCCC' : '#ffffff' }]} onPress={() => setborder(2)}>
                            <Image source={require('../icon/Icons/Good.png')} style={{ height: scale(20), width: scale(20), borderRadius: scale(15) }} />
                            <Text style={{ fontSize: scale(12), fontWeight: '400', color: '#333333', marginTop: scale(5) }}>Good</Text>
                        </Pressable>
                    </View>

                    <View style={[styles.container1, {width: moderateScale(185)}]}>
                        <Pressable style={[styles.shape1, { borderWidth: border == 3 ? 3 : 0, borderColor: border == 3 ? '#33CCCC' : '#ffffff' }]} onPress={() => setborder(3)}>
                            <Image source={require('../icon/Icons/Pleased.png')} style={{ height: scale(20), width: scale(20), borderRadius: scale(15) }} />
                            <Text style={{ fontSize: scale(12), fontWeight: '400', color: '#333333', marginTop: scale(5) }}>Pleased</Text>
                        </Pressable>

                        <Pressable style={[styles.shape1, { borderWidth: border == 4 ? 3 : 0, borderColor: border == 4 ? '#33CCCC' : '#ffffff' }]} onPress={() => setborder(4)}>
                            <Image source={require('../icon/Icons/Delighted.png')} style={{ height: scale(20), width: scale(20), borderRadius: scale(15) }} />
                            <Text style={{ fontSize: scale(12), fontWeight: '400', color: '#333333', marginTop: scale(5) }}>Delighted</Text>
                        </Pressable>

                    </View>

                    <Pressable style={[styles.button, { backgroundColor: border < 5 ? '#33CCCC' : '#999999' }]} onPress={toggleModal}>
                        <Text style={{fontSize: moderateScale(12), fontWeight: '500', color: '#ffffff'}}>SUBMIT RATING</Text>
                    </Pressable>
                    <Cancelmodel3 isVisible={isModalVisible} closeModal1={toggleModal} navigation={navigation} />
                </LinearGradient>
            </Pressable>
        </Modal>
    );
}

export default Ratingmodel

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333',
        elevation: 5,
        alignItems: 'center',
        height: verticalScale(440),
    },
    shape: {
        height: verticalScale(4),
        width: scale(32),
        backgroundColor: '#545357',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(15)
    },
    text1: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(60)
    },
    container1: {
        width: moderateScale(290),
        height: verticalScale(60),
        alignSelf: 'center',
        marginTop: moderateScale(30),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    shape1: {
        width: moderateScale(84),
        height: verticalScale(60),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(90)
    }
})