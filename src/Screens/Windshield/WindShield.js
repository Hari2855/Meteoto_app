import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image, TextInput, ScrollView } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import CancelModel1 from '../Autoparts/CancelModel1'
import Feather from 'react-native-vector-icons/Feather';

const WindShield = ({ navigation, isVisible, closeModal }) => {
    const [isModalVisible1, setModalVisible1] = useState(false);
    const [isCheckVisible, setCheckVisible] = useState(false);
    const [isCheckVisible2, setCheckVisible2] = useState(false);
    const [isCheckVisible3, setCheckVisible3] = useState(false);
    const [isCheckVisible4, setCheckVisible4] = useState(false);
    const [isCheckVisible5, setCheckVisible5] = useState(false);
    const [isCheckVisible6, setCheckVisible6] = useState(false);
    const [isCheckVisible7, setCheckVisible7] = useState(false);
    const [isCheckVisible8, setCheckVisible8] = useState(false);
    const [isCheckVisible9, setCheckVisible9] = useState(false);
    const [isCheckVisible10, setCheckVisible10] = useState(false);


    const toggleCheckVisibility = () => {
        setCheckVisible(!isCheckVisible);
    };

    const toggleCheckVisibility2 = () => {
        setCheckVisible2(!isCheckVisible2);
    };

    const toggleCheckVisibility3 = () => {
        setCheckVisible3(!isCheckVisible3);
    };

    const toggleCheckVisibility4 = () => {
        setCheckVisible4(!isCheckVisible4);
    };

    const toggleCheckVisibility5 = () => {
        setCheckVisible5(!isCheckVisible5);
    };

    const toggleCheckVisibility6 = () => {
        setCheckVisible6(!isCheckVisible6);
    };

    const toggleCheckVisibility7 = () => {
        setCheckVisible7(!isCheckVisible7);
    };

    const toggleCheckVisibility8 = () => {
        setCheckVisible8(!isCheckVisible8);
    };

    const toggleCheckVisibility9 = () => {
        setCheckVisible9(!isCheckVisible9);
    };

    const toggleCheckVisibility10 = () => {
        setCheckVisible10(!isCheckVisible10);
    };

    const toggleModal1 = () => {
        setModalVisible1(!isModalVisible1);
    };

    const handleCancelSearch = () => {
        toggleModal1();
        navigation.navigate('Home')
    };
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{height: moderateScale(1120)}}>
                <View style={styles.header}>
                    <Pressable style={styles.icons} onPress={toggleModal1}>
                        <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
                    </Pressable>
                    <CancelModel1 isVisible={isModalVisible1}
                        onCancel={toggleModal1}
                        onConfirm={handleCancelSearch}
                        navigation={navigation}
                    />

                    <Text style={styles.TEXT}>WINDSHIELD</Text>
                </View>

                <View style={styles.cardetails}>
                    <View style={styles.details}>
                        <View style={styles.dcontainer}>
                            <Image source={require('../icon/imges/Ellipse24.png')} style={styles.imge} />

                            <View style={{ marginLeft: moderateScale(8) }}>
                                <Text style={styles.Text1}>Hyundai Verna</Text>
                                <Text style={styles.Text2}>{`Verna SX Turbo DT \nPetrol`}</Text>
                            </View>
                        </View>
                        <Pressable style={styles.edit} onPress={() => navigation.navigate('AutoHome')}>
                            <Image source={require('../icon/imges/Edit1.png')} style={styles.img} />
                        </Pressable>
                    </View>
                </View>

                <Text style={styles.Text3}>Car Selected</Text>
                <View style={styles.line}></View>
                <Text style={styles.heading}>SELECT GLASS PIECE(S)</Text>

                <View style={styles.glasscontainer}>
                    <View style={{ flexDirection: 'row', width: moderateScale(320), height: verticalScale(152) }}>
                        <Pressable
                            style={styles.imgcontainer}
                            onPress={() => toggleCheckVisibility()}
                        >
                            {isCheckVisible && (
                                <Feather name='check' color={'#33CCCC'} size={70} style={styles.checkImg} />
                            )}
                            <Image source={require('../icon/imges/Glass1.png')} style={styles.img1} />
                            <Text style={styles.Text4}>Front Windshield</Text>
                        </Pressable>


                        <Pressable
                            style={[styles.imgcontainer, { marginLeft: moderateScale(14) }]}
                            onPress={() => toggleCheckVisibility2()}
                        >
                            {isCheckVisible2 && (
                                <Feather name='check' color={'#33CCCC'} size={70} style={styles.checkImg} />
                            )}
                            <Image source={require('../icon/imges/Glass2.png')} style={styles.img1} />
                            <Text style={styles.Text4}>Front Windshield</Text>
                        </Pressable>
                    </View>

                    <View style={{ flexDirection: 'row', width: moderateScale(320), height: verticalScale(152), marginTop: moderateScale(15) }}>
                        <Pressable
                            style={styles.imgcontainer}
                            onPress={() => toggleCheckVisibility3()}
                        >
                            {isCheckVisible3 && (
                                <Feather name='check' color={'#33CCCC'} size={70} style={styles.checkImg} />
                            )}
                            <Image source={require('../icon/imges/Glass3.png')} style={styles.img1} />
                            <Text style={styles.Text4}>Front Windshield</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.imgcontainer, { marginLeft: moderateScale(14) }]}
                            onPress={() => toggleCheckVisibility4()}
                        >
                            {isCheckVisible4 && (
                                <Feather name='check' color={'#33CCCC'} size={70} style={styles.checkImg} />
                            )}
                            <Image source={require('../icon/imges/Glass4.png')} style={styles.img1} />
                            <Text style={styles.Text4}>Front Windshield</Text>
                        </Pressable>
                    </View>

                    <View style={{ flexDirection: 'row', width: moderateScale(320), height: verticalScale(152), marginTop: moderateScale(15) }}>
                        <Pressable
                            style={styles.imgcontainer}
                            onPress={() => toggleCheckVisibility5()}
                        >
                            {isCheckVisible5 && (
                                <Feather name='check' color={'#33CCCC'} size={70} style={styles.checkImg} />
                            )}
                            <Image source={require('../icon/imges/Glass5.png')} style={styles.img1} />
                            <Text style={styles.Text4}>{`Left Rear \nDoor Glass`}</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.imgcontainer, { marginLeft: moderateScale(14) }]}
                            onPress={() => toggleCheckVisibility6()}
                        >
                            {isCheckVisible6 && (
                                <Feather name='check' color={'#33CCCC'} size={70} style={styles.checkImg} />
                            )}
                            <Image source={require('../icon/imges/Glass6.png')} style={styles.img1} />
                            <Text style={styles.Text4}>{`Right Rear \nDoor Glass`}</Text>
                        </Pressable>
                    </View>

                    <View style={{ flexDirection: 'row', width: moderateScale(320), height: verticalScale(152), marginTop: moderateScale(15) }}>
                        <Pressable
                            style={styles.imgcontainer}
                            onPress={() => toggleCheckVisibility7()}
                        >
                            {isCheckVisible7 && (
                                <Feather name='check' color={'#33CCCC'} size={70} style={styles.checkImg} />
                            )}
                            <Image source={require('../icon/imges/Glass7.png')} style={styles.img1} />
                            <Text style={styles.Text4}>{`Left Front \nQuarter Glass`}</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.imgcontainer, { marginLeft: moderateScale(14) }]}
                            onPress={() => toggleCheckVisibility8()}
                        >
                            {isCheckVisible8 && (
                                <Feather name='check' color={'#33CCCC'} size={70} style={styles.checkImg} />
                            )}
                            <Image source={require('../icon/imges/Glass8.png')} style={styles.img1} />
                            <Text style={styles.Text4}>{`Right Front \nQuarter Glass`}</Text>
                        </Pressable>
                    </View>

                    <View style={{ flexDirection: 'row', width: moderateScale(320), height: verticalScale(152), marginTop: moderateScale(15) }}>
                        <Pressable
                            style={styles.imgcontainer}
                            onPress={() => toggleCheckVisibility9()}
                        >
                            {isCheckVisible9 && (
                                <Feather name='check' color={'#33CCCC'} size={70} style={styles.checkImg} />
                            )}
                            <Image source={require('../icon/imges/Glass9.png')} style={styles.img1} />
                            <Text style={styles.Text4}>{`Left Rear \nQuarter Glass`}</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.imgcontainer, { marginLeft: moderateScale(14) }]}
                            onPress={() => toggleCheckVisibility10()}
                        >
                            {isCheckVisible10 && (
                                <Feather name='check' color={'#33CCCC'} size={70} style={styles.checkImg} />
                            )}
                            <Image source={require('../icon/imges/Glass10.png')} style={styles.img1} />
                            <Text style={styles.Text4}>{`Right Rear \nQuarter Glass`}</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Time')}>
                <Text style={styles.Text5}>PROCEED</Text>
            </Pressable>
        </View>
    )
}

export default WindShield

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    header: {
        width: moderateScale(360),
        height: verticalScale(60),
        alignItems: 'center',
        flexDirection: 'row',
        // borderWidth: 1, 
        // borderColor: '#ffffff'
    },
    icons: {
        width: scale(48),
        height: scale(48),
        alignItems: 'center',
        justifyContent: 'center',
        bottom: moderateScale(10)
    },
    imges: {
        width: scale(24),
        height: scale(16),
        tintColor: '#ffffff',
        marginLeft: moderateScale(20)
    },
    TEXT: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(95),
        bottom: moderateScale(10)
    },
    cardetails: {
        width: moderateScale(320),
        height: verticalScale(88),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        // marginTop: moderateScale(20)
    },
    details: {
        width: moderateScale(306),
        height: verticalScale(60),
        // alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: moderateScale(10)
    },
    dcontainer: {
        width: moderateScale(203),
        height: verticalScale(60),
        flexDirection: 'row'
    },
    edit: {
        width: scale(48),
        height: scale(48),
        borderRadius: scale(20),
        borderWidth: 1,
        borderColor: '#999999',
        alignItems: 'center',
        justifyContent: 'center',
        left: moderateScale(10)
    },
    img: {
        width: scale(24),
        height: scale(24),
        tintColor: 'black'
    },
    imge: {
        height: scale(50),
        width: scale(50),
        borderRadius: scale(25)
    },
    Text1: {
        color: '#383838',
        fontSize: moderateScale(16),
        fontWeight: '400'
    },
    Text2: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#9e9e9e'
    },
    Text3: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#33CCCC',
        marginTop: moderateScale(5),
        marginLeft: moderateScale(18)
    },
    line: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#4c4c4c',
        marginTop: moderateScale(5)
    },
    heading: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20)
    },
    glasscontainer: {
        width: moderateScale(320),
        height: moderateScale(824),
        marginTop: moderateScale(20),
        alignSelf: 'center'
    },
    imgcontainer: {
        height: verticalScale(152),
        width: moderateScale(152),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        alignItems: 'center'
    },
    img1: {
        width: moderateScale(136),
        height: verticalScale(88),
        borderWidth: 1,
        borderColor: '#dadada',
        marginTop: moderateScale(5),
        borderRadius: moderateScale(10),
        position: 'absolute'
    },
    checkImg: {
        zIndex: 1,
        marginTop: moderateScale(20)
    },
    Text4: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: "#333333",
        marginTop: '80%',
        position: 'absolute'
    },
    little: {
        width: moderateScale(72),
        height: verticalScale(2),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(10),
        alignSelf: 'center',
        marginTop: moderateScale(30),
        bottom: moderateScale(5)
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(60),
        bottom: moderateScale(20)
    },
    Text5: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    }
})