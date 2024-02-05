import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image, TextInput, ScrollView } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Feather from 'react-native-vector-icons/Feather'

const Cart = ({ navigation }) => {
    const [itemCounts, setItemCounts] = useState([1]);

    const increaseCount = (index) => {
        const updatedCounts = [...itemCounts];
        updatedCounts[index] += 1;
        setItemCounts(updatedCounts);
    };

    const decreaseCount = (index) => {
        if (itemCounts[index] > 1) {
            const updatedCounts = [...itemCounts];
            updatedCounts[index] -= 1;
            setItemCounts(updatedCounts);
        } else if (itemCounts[index] === 1) {
            // Only remove the item at the specified index
            const updatedCounts = [...itemCounts];
            updatedCounts.splice(index, 1);
            setItemCounts(updatedCounts);
        }
    };;

    const renderItemContainers = () => {
        return itemCounts.map((count, index) => (
            <View style={styles.partcontainer} key={index}>
                <Pressable style={styles.part}>
                    <Image source={require('../icon/imges/Imagcontainer1.png')} style={styles.img1} />
                </Pressable>
                <View style={styles.line1}></View>
                <View style={styles.partdetails}>
                    <Text style={styles.Text5}>Alternator</Text>
                    <View style={styles.quantitycontainer}>
                        <Pressable style={styles.delete} onPress={() => decreaseCount(index)}>
                            <Feather name="trash" color={'red'} size={16} />
                        </Pressable>
                        <View style={styles.count}>
                            <Text style={styles.Text6}>{count}</Text>
                        </View>
                        <Pressable style={styles.plus} onPress={() => increaseCount(index)}>
                            <Text style={{ color: 'black', fontSize: moderateScale(16), fontWeight: '500' }}>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        ));
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.icons} onPress={() => navigation.navigate('Autoparsmenu')}>
                    <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
                </Pressable>

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

            <Text style={styles.Text4}>SELECTED PARTS</Text>

            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                {renderItemContainers()}
            </ScrollView>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Partmap')}>
                <Text style={styles.Text7}>SEARCH FOR THE PARTS</Text>
            </Pressable>
        </View>
    )
}

export default Cart

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
        elevation: 10
    },
    details: {
        width: moderateScale(306),
        height: verticalScale(60),
        // alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: moderateScale(10),
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
    Text4: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: moderateScale(18),
        marginTop: moderateScale(20)
    },
    scroll: {
        width: moderateScale(320),
        marginTop: moderateScale(10),
        alignSelf: 'center',
    },
    partcontainer: {
        width: moderateScale(320),
        height: verticalScale(84),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        elevation: 10,
        alignItems: 'center',
        marginTop: moderateScale(10)
    },
    part: {
        width: scale(52),
        height: scale(52),
        borderRadius: scale(30),
        borderWidth: 1,
        borderColor: 'gray',
        marginLeft: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    img1: {
        width: scale(45),
        height: scale(45)
    },
    line1: {
        height: verticalScale(84),
        width: moderateScale(1.5),
        backgroundColor: '#999999',
        marginLeft: moderateScale(15)
    },
    partdetails: {
        width: moderateScale(144),
        height: verticalScale(60),
        marginLeft: moderateScale(10)
    },
    Text5: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#333333'
    },
    quantitycontainer: {
        width: scale(85),
        height: scale(26),
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: scale(4),
        marginTop: moderateScale(13),
        flexDirection: 'row'
    },
    delete: {
        height: scale(25),
        width: scale(27.66),
        borderRightWidth: 1,
        borderColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    count: {
        height: scale(25),
        width: scale(27.66),
        alignItems: 'center',
        justifyContent: 'center'
    },
    plus: {
        height: scale(25),
        width: scale(27.66),
        borderLeftWidth: 1,
        borderColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text6: {
        color: 'black', 
        fontSize: moderateScale(16), 
        fontWeight: '500'
    },
    button: {
        width: scale(320),
        height: scale(40),
        borderRadius: scale(5),
        backgroundColor: '#33CCCC',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: moderateScale(10)
    },
    Text7: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff',
    }
})