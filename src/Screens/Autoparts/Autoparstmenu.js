import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import CancelModel1 from './CancelModel1'
import ModelScreen from './ModelScreen'

const Autoparsmenu = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible1, setModalVisible1] = useState(false);
    const [selectedImageCount, setSelectedImageCount] = useState(0);


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleModal1 = () => {
        setModalVisible1(!isModalVisible1);
    };

    const handleCancelSearch = () => {
        toggleModal1();
        setSelectedImageCount(0);
        navigation.navigate('Home');
    };

    const Nav = () => {
        if (selectedImageCount > 0) {
            navigation.navigate('Cart')
            
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.icons} onPress={toggleModal1}>
                    <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
                </Pressable>
                <CancelModel1 isVisible={isModalVisible1}
                    onCancel={toggleModal1}
                    onConfirm={handleCancelSearch}
                    navigation={navigation}
                />

                <Text style={styles.TEXT}>AUTOPARTS</Text>
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
            <Text style={styles.heading}>SELECT AUTOPART FROM CATEGORY</Text>

            <View style={styles.partContainer}>
                <View style={styles.partdetails}>
                    <View style={styles.part}>
                        <Pressable style={styles.press} onPress={toggleModal}>
                            <Image source={require('../icon/parts/Engine1.png')} style={[styles.im, {position: 'absolute'}]} />
                            {selectedImageCount > 0 && (
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>{selectedImageCount}</Text>
                                </View>
                            )}
                        </Pressable>
                        <ModelScreen
                            isVisible={isModalVisible}
                            closeModal={toggleModal}
                            navigation={navigation}
                            selectedImageCount={selectedImageCount}
                            setSelectedImageCount={setSelectedImageCount}
                        />
                        <Text style={styles.Text4}>Engine</Text>
                        <Text style={styles.Text4}>parts</Text>
                    </View>

                    <View style={styles.part}>
                        <Pressable style={styles.press}>
                            <Image source={require('../icon/parts/Air.png')} style={styles.im} />
                        </Pressable>
                        <Text style={styles.Text4}>AC</Text>
                        <Text style={styles.Text4}>parts</Text>
                    </View>
                    <View style={styles.part}>
                        <Pressable style={styles.press}>
                            <Image source={require('../icon/parts/Suspention1.png')} style={styles.im} />
                        </Pressable>
                        <Text style={styles.Text4}>Suspension</Text>
                    </View>
                    <View style={styles.part}>
                        <Pressable style={styles.press}>
                            <Image source={require('../icon/parts/Break1.png')} style={styles.im} />
                        </Pressable>
                        <Text style={styles.Text4}>Brake</Text>
                        <Text style={styles.Text4}>system</Text>
                    </View>
                </View>
                <View style={styles.partdetails}>
                    <View style={styles.part}>
                        <Pressable style={styles.press}>
                            <Image source={require('../icon/parts/Sensor1.png')} style={styles.im} />
                        </Pressable>
                        <Text style={styles.Text4}>Sensors</Text>
                    </View>
                    <View style={styles.part}>
                        <Pressable style={styles.press}>
                            <Image source={require('../icon/parts/Body1.png')} style={styles.im} />
                        </Pressable>
                        <Text style={styles.Text4}>Body</Text>
                        <Text style={styles.Text4}>parts</Text>
                    </View>
                    <View style={styles.part}>
                        <Pressable style={styles.press}>
                            <Image source={require('../icon/parts/Electronic1.png')} style={styles.im} />
                        </Pressable>
                        <Text style={styles.Text4}>Electronic</Text>
                        <Text style={styles.Text4}>component</Text>
                    </View>
                    <View style={styles.part}>
                        <Pressable style={styles.press}>
                            <Image source={require('../icon/parts/Tyre1.png')} style={styles.im} />
                        </Pressable>
                        <Text style={styles.Text4}>Tyre</Text>
                        <Text style={styles.Text4}>shoppe</Text>
                    </View>
                </View>
                <View style={styles.partdetails1}>
                    <View style={styles.part}>
                        <Pressable style={styles.press}>
                            <Image source={require('../icon/parts/Oil1.png')} style={[styles.im, {width: scale(21), height: scale(28)}]} />
                        </Pressable>
                        <Text style={styles.Text4}>Oil &</Text>
                        <Text style={styles.Text4}>fluid</Text>
                    </View>
                    <View style={[styles.part, {marginRight: moderateScale(85)}]}>
                        <Pressable style={styles.press}>
                            <Image source={require('../icon/parts/Battery1.png')} style={styles.im} />
                        </Pressable>
                        <Text style={styles.Text4}>Battery</Text>
                        <Text style={styles.Text4}>shoppe</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.Text5}>{`Note: All the parts images are for demonstrations \npurpose.`}</Text>
            <Pressable style={[styles.button, {backgroundColor: selectedImageCount > 0 ? '#33CCCC' : 'gray'}]} onPress={Nav}>
                <Text style={styles.TEXT7}>GO TO CART</Text>
            </Pressable>
        </View>
    )
}

export default Autoparsmenu

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
        marginTop: moderateScale(30)
    },
    partContainer: {
        width: moderateScale(360),
        height: verticalScale(330),
        alignSelf: 'center',
        marginTop: moderateScale(15),
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderColor: '#4c4c4c'
    },
    partdetails: {
        width: moderateScale(320),
        height: verticalScale(104),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: moderateScale(10),
        alignSelf: 'center'
    },
    part: {
        width: moderateScale(68),
        height: verticalScale(104),
        flexDirection: 'column',
        alignItems: 'center'
    },
    press: {
        height: scale(60),
        width: scale(60),
        borderRadius: scale(30),
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    im: {
        width: scale(30),
        height: scale(30)
    },
    Text4: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#ffffff',
    },
    partdetails1: {
        width: moderateScale(236),
        height: verticalScale(104),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: moderateScale(20)
    },
    Text5: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(10)
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        backgroundColor: 'gray',
        alignSelf: 'center',
        borderRadius: moderateScale(5),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(20)
    },
    TEXT7: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    },
    badge: {
        width: scale(16),
        height: scale(16),
        borderRadius: scale(10),
        backgroundColor: '#33CCCC',
        alignItems: 'center',
        justifyContent: 'center',
        left: moderateScale(20),
        bottom: moderateScale(20)
    },
    badgeText: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#ffffff',
        fontFamily: 'Nunito'
    }
})