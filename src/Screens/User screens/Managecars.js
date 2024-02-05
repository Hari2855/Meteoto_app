import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const Managecars = ({ navigation }) => {
    const [containers, setContainers] = useState([
        { id: 1, visible: true },
        { id: 2, visible: true },
        { id: 3, visible: true },
        // Add more objects for additional containers as needed
    ]);

    const [showDeleteButton, setShowDeleteButton] = useState(true);

    const handleDeleteCar = (containerId) => {
        // Check how many containers will be left after deleting
        const remainingContainers = containers.filter(container => container.id !== containerId);

        // Update the state to show/hide the delete button
        setShowDeleteButton(remainingContainers.length > 1);

        const updatedContainers = containers.map((container) =>
            container.id === containerId ? { ...container, visible: false } : container
        );

        setContainers(updatedContainers);
    };


    return (
        <View style={styles.containe}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('User')}>
                    <MaterialIcons name='keyboard-arrow-left' color={'#ffffff'} size={24} style={{ marginLeft: moderateScale(15) }} />
                </Pressable>

                <Text style={styles.text1}>MY CARS</Text>
            </View>

            <View style={styles.container2}>
                <Image source={require('../icon/gif-icons/Taxi4.gif')} style={{ width: scale(80), height: scale(84) }} />
                <Text style={styles.text2}>{`FIND ALL YOUR CARS \nAT ONE PLACE`}</Text>
            </View>

            <Pressable style={styles.container3}>
                <View style={styles.line1}></View>
                <Pressable style={styles.box} onPress={() => navigation.navigate('Addcar')}>
                    <Image source={require('../icon/imges/Plus.png')} style={{ height: scale(24), width: scale(24) }} />
                    <Text style={[styles.text5, { color: '#ffffff', marginLeft: moderateScale(5) }]}>Add Car</Text>
                </Pressable>
                <View style={styles.line1}></View>
            </Pressable>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.text3}>MY CARS</Text>
                {containers.map((container) =>
                    container.visible && (
                        <View style={styles.container1}>
                            <View style={{ width: moderateScale(68), height: verticalScale(88), marginTop: moderateScale(32), marginLeft: moderateScale(10), flexDirection: 'column', alignItems: 'center' }}>
                                <Image source={require('../icon/Profile-section-imgs/Carimgpremium.png')} style={styles.img} />
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Verna</Text>
                            </View>
                            <View style={styles.line2}></View>
                            <View style={{ width: moderateScale(112), flexDirection: 'column', marginLeft: moderateScale(15), marginTop: moderateScale(10) }}>
                                <Text style={[styles.text2, { color: '#333333' }]}>Hyundai Verna</Text>
                                <Text style={styles.text4}>MP04 MR 9807</Text>
                                <View style={{ width: moderateScale(74), flexDirection: 'row', marginTop: moderateScale(15) }}>
                                    <Image source={require('../icon/imges/Car.png')} style={{ height: scale(16), width: scale(16) }} />
                                    <Text style={[styles.text4, { marginLeft: moderateScale(5) }]}>Verna EX</Text>
                                </View>
                                <View style={{ width: moderateScale(74), flexDirection: 'row', marginTop: moderateScale(5) }}>
                                    <Image source={require('../icon/imges/Gasstation.png')} style={{ height: scale(16), width: scale(16) }} />
                                    <Text style={[styles.text4, { marginLeft: moderateScale(5) }]}>Petrol</Text>
                                </View>
                                <View style={{ width: moderateScale(74), flexDirection: 'row', marginTop: moderateScale(5) }}>
                                    <Image source={require('../icon/imges/Calendarrange.png')} style={{ height: scale(16), width: scale(16) }} />
                                    <Text style={[styles.text4, { marginLeft: moderateScale(5) }]}>2022</Text>
                                </View>
                            </View>
                            <Pressable style={styles.button} onPress={() => handleDeleteCar(container.id)}>
                                <Image source={require('../icon/imges/Trash2.png')} style={{ height: scale(24), width: scale(24) }} />
                            </Pressable>
                        </View>
                    ))}
            </ScrollView>

            <Pressable style={styles.button1} onPress={() => navigation.navigate('Mycars')}>
                <Text style={[styles.text5, { color: '#33CCCC' }]}>CANCEL</Text>
            </Pressable>
        </View>
    )
}

export default Managecars

const styles = StyleSheet.create({
    containe: {
        flex: 1,
        backgroundColor: '#333333'
    },
    header: {
        flexDirection: 'row',
        height: verticalScale(60),
        backgroundColor: '#333333',
        alignItems: 'center',
    },
    text1: {
        color: '#ffffff',
        fontSize: moderateScale(12),
        fontWeight: '500',
        marginLeft: moderateScale(115),
        marginBottom: moderateScale(5)
    },
    container2: {
        width: scale(320),
        height: verticalScale(124),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    text2: {
        color: '#000000',
        fontSize: moderateScale(16),
        fontWeight: '500',
    },

    container3: {
        width: moderateScale(360),
        height: verticalScale(48),
        marginTop: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row'
    },
    line1: {
        width: moderateScale(127.5),
        height: verticalScale(1),
        backgroundColor: '#949494'
    },
    box: {
        width: moderateScale(105),
        height: verticalScale(48),
        borderRadius: moderateScale(5),
        borderWidth: 1,
        borderColor: '#ffffff',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text3: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20)
    },
    container1: {
        width: moderateScale(320),
        height: verticalScale(136),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(15),
        flexDirection: 'row'
    },
    img: {
        height: scale(65),
        width: scale(65),
        borderRadius: scale(40)
    },
    line2: {
        height: verticalScale(136),
        width: moderateScale(1),
        backgroundColor: '#bcbcbc',
        marginLeft: moderateScale(15)
    },
    text4: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#666666',
    },
    button: {
        width: moderateScale(48),
        height: verticalScale(48),
        borderRadius: moderateScale(20),
        borderWidth: 1,
        borderColor: '#999999',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(10),
        marginLeft: moderateScale(40)
    },
    text5: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#333333'
    },
    button1: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        borderWidth: 1,
        borderColor: '#33CCCC',
        marginTop: moderateScale(60),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: moderateScale(20)
    }

})