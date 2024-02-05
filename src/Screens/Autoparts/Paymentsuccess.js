import React, {useState} from 'react'
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Feather from 'react-native-vector-icons/Feather'
import Ratingmodel from './3D-wheel/Ratingmodel'

const Paymentsuccess = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{height: verticalScale(850)}}>
                <View style={styles.header}>
                    <Pressable style={styles.icons} onPress={() => navigation.navigate('Partdetails')}>
                        <Image source={require('../Screens/icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
                    </Pressable>

                    <Text style={styles.TEXT}>AUTOPARTS</Text>
                </View>
                <View style={styles.container1}>
                    <Image source={require('../Screens/icon/gif-icons/verified.gif')} style={styles.img} />
                    <Text style={styles.text}>Payment Successful!</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.bill}>
                    <View style={styles.container2}>
                        <Text style={styles.text2}>I N V O I C E   D E T A I L S</Text>
                        <Pressable>
                            <Text style={[styles.text2, { color: '#33CCCC', marginRight: moderateScale(20) }]}>Invoice</Text>
                        </Pressable>
                    </View>
                    <View style={styles.container3}>
                        <Text style={styles.text3}>Service Name:<Text style={{color: '#333333'}}> Car Service</Text></Text>
                        <Text style={styles.text3}>Charges:<Text style={{ color: '#333333' }}> ₹3000</Text></Text>
                    </View>
                    <View style={[styles.container3, {borderStyle: 'dashed'}]}>
                        <Text style={styles.text3}>Shope Name:<Text style={{ color: '#333333' }}> GD Car works</Text></Text>
                        <Text style={styles.text3}>Address:<Text style={{ color: '#333333' }}> Indrapuri, Sector-A, Near BHEL, Bhopal</Text></Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.text3, {marginTop: moderateScale(10)}]}>Transaction ID:<Text style={{ color: '#333333' }}> IJBVKJ7657655766787</Text></Text>
                    <Pressable>
                    <Feather name='clipboard' color={'#33CCCC'} size={16} style={{marginTop: moderateScale(10), marginLeft: moderateScale(50)}}/>
                    </Pressable>
                    </View>
                    <Text style={[styles.text3, {marginTop: moderateScale(20)}]}>Credited from:</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Pressable style={styles.imgcontainer}>
                            <Image source={require('./icon/imges/bank.png')} style={styles.img1}/>
                        </Pressable>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={[styles.text3, {color: '#333333', marginTop: moderateScale(5)}]}>XXXXXXX4030</Text>
                            <Text style={[styles.text3, { color: '#333333' }]}>UTR: 121212121212</Text>
                        </View>
                        <Pressable>
                            <Feather name='clipboard' color={'#33CCCC'} size={16} style={{ marginTop: moderateScale(23), marginLeft: moderateScale(113) }} />
                        </Pressable>
                    </View>
                </View>
                <Text style={styles.text1}>{`Thanks for \nbelieving us :)`}</Text>
            </ScrollView>
            <Pressable style={styles.button} onPress={toggleModal}>
                <Text style={styles.Text8}>RATE YOUR EXPERIENCE</Text>
            </Pressable>
            <Ratingmodel isVisible={isModalVisible} closeModal={toggleModal} navigation={navigation} />
        </View>
    )
}

export default Paymentsuccess

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
        marginLeft: moderateScale(100),
        bottom: moderateScale(10)
    },
    container1: {
        backgroundColor: '#ffffff',
        height: scale(244),
        width: scale(312),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: moderateScale(22),
        borderRadius: moderateScale(10),
        marginTop: moderateScale(20)
    },
    text: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: '#333333',
        marginTop: moderateScale(10)
    },
    img: {
        width: scale(100),
        height: scale(100)
    },
    text1: {
        fontSize: moderateScale(40),
        color: '#666666',
        fontWeight: '200',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(80)
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        marginLeft: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(60),
        bottom: moderateScale(30)
    },
    Text8: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    },
    line: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(20)
    },
    bill: {
        width: moderateScale(320),
        height: verticalScale(290),
        borderRadius: moderateScale(5),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20)
    },
    container2: {
        width: moderateScale(320),
        height: verticalScale(36),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#e2e2e2'
    },
    text2: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#333333',
        left: moderateScale(10)
    },
    container3: {
        width: moderateScale(320),
        height: verticalScale(56),
        borderBottomWidth: 1,
        borderColor: '#e2e2e2',
        // alignItems: 'center',
        justifyContent: 'center'

    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#666666',
        marginLeft: moderateScale(10)
    },
    imgcontainer: {
        width: scale(32),
        height: scale(32),
        borderRadius: scale(20),
        borderWidth: 1,
        borderColor: '#999999',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: moderateScale(10),
        marginTop: moderateScale(5)
    },
    img1: {
        width: scale(25),
        height: scale(25),
        borderRadius: scale(15),
    }
})