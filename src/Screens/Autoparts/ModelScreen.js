import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, ScrollView, } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ModelScreen = ({ navigation, isVisible, closeModal, selectedImageCount, setSelectedImageCount }) => {
    const [itemIconStates, setItemIconStates] = useState(Array(4).fill(false));
    const [itemIconStates1, setItemIconStates1] = useState(Array(4).fill(false));
    const [itemIconStates2, setItemIconStates2] = useState(Array(4).fill(false));

    const toggleItemIcon = (index) => {
        const updatedStates = [...itemIconStates];
        updatedStates[index] = !updatedStates[index];
        setItemIconStates(updatedStates);
        setSelectedImageCount(updatedStates.filter((state) => state).length);
    };

    const toggleItemIcon1 = (index1) => {
        const updatedStates1 = [...itemIconStates1];
        updatedStates1[index1] = !updatedStates1[index1];
        setItemIconStates1(updatedStates1);
    };

    const toggleItemIcon2 = (index2) => {
        const updatedStates2 = [...itemIconStates2];
        updatedStates2[index2] = !updatedStates2[index2];
        setItemIconStates2(updatedStates2);
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
                    <TextInput style={styles.textinput} placeholder='Search for engine part' placeholderTextColor={'#737373'}></TextInput>
                    <Pressable>
                        <Ionicons name='search-outline' color={'#909090'} size={(24)} style={{ right: moderateScale(40) }} />
                    </Pressable>
                </View>

                <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                    <View style={styles.itemContainer}>
                        {itemIconStates.map((isCheckIcon, index) => (
                            <View style={styles.itemView} key={index}>
                                <Pressable style={styles.icon} onPress={() => toggleItemIcon(index)}>
                                    {isCheckIcon ? (
                                        <Ionicons name="checkmark" color="#33CCCC" size={32} />
                                    ) : (
                                            <Image source={require('../icon/imges/Imagcontainer1.png')} style={styles.img} />
                                    )}
                                </Pressable>
                                <Text style={styles.text2}>Alternator</Text>
                            </View>
                        ))}
                    </View>

                    <View style={styles.itemContainer}>
                        {itemIconStates1.map((isCheckIcon1, index1) => (
                            <View style={styles.itemView} key={index1}>
                                <Pressable style={styles.icon} onPress={() => toggleItemIcon1(index1)}>
                                    {isCheckIcon1 ? (
                                        <Ionicons name="checkmark" color="#33CCCC" size={32} />
                                    ) : (
                                        <Image source={require('../icon/imges/Imagcontainer1.png')} style={styles.img} />
                                    )}
                                </Pressable>
                                <Text style={styles.text2}>Alternator</Text>
                            </View>
                        ))}
                    </View>

                    <View style={styles.itemContainer}>
                        {itemIconStates2.map((isCheckIcon2, index2) => (
                            <View style={styles.itemView} key={index2}>
                                <Pressable style={styles.icon} onPress={() => toggleItemIcon2(index2)}>
                                    {isCheckIcon2 ? (
                                        <Ionicons name="checkmark" color="#33CCCC" size={32} />
                                    ) : (
                                        <Image source={require('../icon/imges/Imagcontainer1.png')} style={styles.img} />
                                    )}
                                </Pressable>
                                <Text style={styles.text2}>Alternator</Text>
                            </View>
                        ))}
                    </View>

                </ScrollView>
                <Pressable style={styles.button} onPress={closeModal}>
                    <Text style={styles.text3}>ADD TO CART</Text>
                </Pressable>
            </Pressable>
        </Modal>
    );
}

export default ModelScreen

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
        height: scale(52),
        width: scale(52)
    },
    text2: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#ffffff',
        // marginLeft: moderateScale(8)
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: moderateScale(10)
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    }
})