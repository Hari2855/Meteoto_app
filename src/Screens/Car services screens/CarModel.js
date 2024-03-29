import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, ScrollView, } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CarVarientmodel from './CarVarientmodel';

const CarModel = ({ navigation, isVisible, closeModal }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        closeModal
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

                <Text style={styles.text1}>ENGINE PARTS</Text>

                <View style={styles.line}></View>

                <View style={styles.input}>
                    <TextInput style={styles.textinput} placeholder='Search your car model' placeholderTextColor={'#737373'}></TextInput>
                    <Pressable>
                        <Ionicons name='search-outline' color={'#909090'} size={(24)} style={{ right: moderateScale(40) }} />
                    </Pressable>
                </View>

                <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car1.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Xcent</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car2.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Grand-</Text>
                            <Text style={styles.text2}>i10</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car3.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Venue</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car4.png')} style={styles.img} />
                            </Pressable>
                            <CarVarientmodel isVisible={isModalVisible} closeModal={toggleModal} navigation={navigation} />
                            <Text style={styles.text2}>Verna</Text>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car1.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Xcent</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car2.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Grand-</Text>
                            <Text style={styles.text2}>i10</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car3.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Venue</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car4.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Verna</Text>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car1.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Xcent</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car2.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Grand-</Text>
                            <Text style={styles.text2}>i10</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car3.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Venue</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car4.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Verna</Text>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car1.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Xcent</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car2.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Grand-</Text>
                            <Text style={styles.text2}>i10</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car3.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Venue</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car4.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Verna</Text>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car1.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Xcent</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car2.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Grand-</Text>
                            <Text style={styles.text2}>i10</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car3.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Venue</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car4.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Verna</Text>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car1.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Xcent</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car2.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Grand-</Text>
                            <Text style={styles.text2}>i10</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car3.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Venue</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Pressable onPress={toggleModal}>
                                <Image source={require('../icon/Profile-section-imgs/car4.png')} style={styles.img} />
                            </Pressable>
                            <Text style={styles.text2}>Verna</Text>
                        </View>
                    </View>
                </ScrollView>
            </Pressable>
        </Modal>
    );
}

export default CarModel

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
        elevation: 5,
        alignItems: 'center',
        height: verticalScale(450),
        width: '100%',
        position: 'absolute'
    },
    shape: {
        height: verticalScale(4),
        width: scale(32),
        backgroundColor: '#545357',
        borderRadius: moderateScale(10),
        marginTop: moderateScale(10)

    },
    text1: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        alignSelf: 'flex-start',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(40)
    },
    line: {
        width: scale(360),
        height: moderateScale(1),
        backgroundColor: '#4c4c4c',
        marginTop: moderateScale(10)
    },
    input: {
        width: moderateScale(360),
        height: verticalScale(52),
        borderRadius: moderateScale(5),
        marginTop: moderateScale(30),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textinput: {
        width: moderateScale(320),
        height: verticalScale(52),
        color: 'white',
        borderWidth: 1,
        borderRadius: moderateScale(8),
        left: moderateScale(20),
        borderColor: '#868686',
        paddingLeft: moderateScale(20),
    },
    scroll: {
        width: moderateScale(320),
        alignSelf: 'center',
        marginTop: moderateScale(30),
        flexDirection: 'column',
    },
    itemContainer: {
        height: verticalScale(104),
        width: moderateScale(320),
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemView: {
        height: verticalScale(104),
        width: moderateScale(68),
        // borderWidth: 1,
        // borderColor: 'green',
        flexDirection: 'column',
        alignItems: 'center'
    },
    icon: {
        height: scale(60),
        width: scale(60),
        borderRadius: scale(30),
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: scale(60),
        width: scale(60),
        borderRadius: scale(30)
    },
    text2: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#ffffff',
        // marginLeft: moderateScale(8)
    },
})