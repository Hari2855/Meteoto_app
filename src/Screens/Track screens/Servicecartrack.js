import React from 'react'
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Servicecartrack = ({ navigation }) => {


    return (
        <ScrollView contentContainerStyle={styles.container1}>
            <View style={styles.container2}>
                <Pressable onPress={() => navigation.navigate('Track')}>
                    <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={{ height: scale(16), width: scale(24), tintColor: '#ffffff', marginLeft: moderateScale(20) }} />
                </Pressable>
                <Text style={styles.text1}>CAR SERVICE</Text>
            </View>

            <View style={styles.view}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../icon/Profile-section-imgs/Carimgnormal.png')} style={styles.img} />
                </View>
                <View style={styles.line1}></View>

                <View style={styles.container5}>
                    <Text style={styles.Text1}>General Service</Text>
                    <Text style={[styles.Text2, { marginTop: moderateScale(10), color: '#333333' }]}>Hyundai i10</Text>
                    <Text style={styles.Text2}>MP04 AB 1234</Text>
                </View>

                <View style={styles.container5}>
                    <Text style={[styles.Text3, { marginTop: moderateScale(5), marginLeft: moderateScale(40) }]}>Status</Text>
                    <Text style={[styles.Text3, { color: '#33CCCC', marginLeft: moderateScale(35) }]}>In Garage</Text>
                </View>

                <View style={styles.imgcontainer2}>
                    <Pressable style={styles.icon}>
                        <Feather name='phone-call' color={'#6a6a6a'} size={24} />
                    </Pressable>

                    <Pressable style={[styles.icon, { left: moderateScale(10) }]}>
                        <Feather name='message-circle' color={'#6a6a6a'} size={24} />
                    </Pressable>
                </View>
            </View>

            <View style={styles.container3}>
                <View style={styles.container4}>
                    <Text style={styles.text2}>SERVICE  STATUS</Text>
                    <Pressable>
                        <AntDesign name='exclamationcircleo' color={'#FFCC00'} size={20} style={{ right: moderateScale(10) }} />
                    </Pressable>
                </View>
                <View style={styles.line2}></View>
                <Text style={styles.text3}>{`When Mechanic servicing your Car & in case he \nmight find issue with any Part. Then he will ask \nfor your confirmation for changing it!`}</Text>
                <Pressable style={styles.container6} onPress={() => navigation.navigate('Jobcard')}>
                    <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#33CCCC' }}>CHECK JOB CARD</Text>
                </Pressable>
            </View>

            <View style={styles.container7}>
                <Text style={[styles.text2, { top: moderateScale(10) }]}>VEHICLE  ISSUE(S)</Text>
                <View style={[styles.line2, { top: moderateScale(10) }]}></View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.text4}>{`Lorem Ipsum has been the industry's standard \ndummy text ever since the 1500s, when an \nunknown printer took a galley of type and \nscrambled it to make a type specimen book. It \nhas survived not only five centuries, but also the \nleap into electronic typesetting, remaining \nessentially unchanged. It was popularised in the \n1960s with the release of Letraset sheets \ncontaining Lorem Ipsum passages, and more \nrecently with desktop publishing software like \nAldus PageMaker including versions of Lorem \nIpsum.`}</Text>
                </ScrollView>
                <View style={{ height: verticalScale(30) }}></View>
            </View>

            <View style={styles.container8}>
                <Image source={require('../icon/profile-options-img/Gif/Bill.gif')} style={styles.img1} />
                <Text style={styles.text2}>INVOICE NUMBER:<Text style={[styles.text2, { color: '#333333' }]}>  45687875657</Text></Text>
            </View>

            <View style={styles.container9}>
                <Text style={[styles.text2, { marginTop: moderateScale(10) }]}>GARAGE DETAILS</Text>
                <View style={styles.line2}></View>
                <Text style={styles.text5}>APEX GARAGE</Text>
                <View style={styles.textcontainer}>
                    <Image source={require('../icon/imges/Mappin.png')} style={{width: scale(12), height: scale(12)}}/>
                    <Text style={{fontSize: moderateScale(12), fontWeight: '400', color: '#666666', bottom: moderateScale(2), marginLeft: moderateScale(5)}}>Indrapuri, Sector-A, Near BHEL, Bhopal</Text>
                </View>
                <View style={styles.textcontainer1}>
                    <Image source={require('../icon/imges/Map.png')} style={{ width: scale(12), height: scale(12) }} />
                    <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666', bottom: moderateScale(2), marginLeft: moderateScale(5) }}>2.7 KM (5 min)</Text>
                </View>
                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666',marginLeft: moderateScale(10), marginTop: moderateScale(5) }}>Away from your location</Text>

                <Pressable>
                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#33CCCC',marginTop: moderateScale(20), alignSelf: 'flex-end', right: moderateScale(80)}}>LOCATE ME</Text>
                </Pressable>
            </View>

            <View style={styles.line3}></View>
        </ScrollView>
    )
}

export default Servicecartrack

const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#333333',
        width: moderateScale(360),
        height: verticalScale(850)
    },
    container2: {
        width: '100%',
        height: verticalScale(60),
        alignItems: 'center',
        flexDirection: 'row',
    },
    text1: {
        color: '#ffffff',
        fontSize: moderateScale(12),
        fontWeight: '500',
        marginLeft: moderateScale(95),
        marginBottom: moderateScale(5)
    },
    view: {
        width: moderateScale(320),
        height: verticalScale(120),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(5),
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: moderateScale(20)
    },
    img: {
        height: scale(60),
        width: scale(60),
        marginLeft: moderateScale(12),
    },
    line1: {
        width: moderateScale(1),
        height: verticalScale(120),
        backgroundColor: 'gray',
        marginLeft: moderateScale(15)
    },
    container5: {
        flexDirection: 'column',
        width: moderateScale(120),
        height: verticalScale(120),
        marginLeft: moderateScale(10),
        marginTop: moderateScale(5)
    },
    Text1: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#333333',
    },
    Text2: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#666666',
    },
    Text3: {
        fontSize: moderateScale(10),
        fontWeight: '500',
        color: '#666666',
    },
    pay: {
        width: scale(81),
        height: scale(24),
        borderRadius: moderateScale(12),
        borderWidth: 1,
        borderColor: '#666666',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(50)
    },
    Text4: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#33CCCC'
    },
    imgcontainer2: {
        height: verticalScale(48),
        width: moderateScale(110),
        flexDirection: 'row',
        right: moderateScale(145),
        marginTop: moderateScale(30)
    },
    icon: {
        width: scale(48),
        height: scale(48),
        borderRadius: scale(20),
        borderWidth: 1,
        borderColor: '#aeaeae',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container3: {
        width: moderateScale(320),
        height: verticalScale(165),
        borderRadius: moderateScale(5),
        marginTop: moderateScale(10),
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        flexDirection: 'column'
    },
    container4: {
        width: moderateScale(320),
        height: verticalScale(28),
        marginTop: moderateScale(5),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text2: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#666666',
        left: moderateScale(10)
    },
    line2: {
        width: moderateScale(320),
        height: verticalScale(1),
        backgroundColor: 'lightgray',
        marginTop: moderateScale(5)
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#333333',
        marginTop: moderateScale(15),
        right: moderateScale(20)
    },
    container6: {
        width: scale(136),
        height: scale(40),
        borderRadius: scale(5),
        borderWidth: 1,
        borderColor: '#33CCCC',
        marginTop: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    container7: {
        width: moderateScale(320),
        height: verticalScale(156),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        marginTop: moderateScale(10),
        alignSelf: 'center',
        flexDirection: 'column'
    },
    scrolltext: {
        width: moderateScale(296),
        height: verticalScale(73),
        marginTop: moderateScale(25),
        marginLeft: moderateScale(10)
    },
    text4: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#000000',
        marginLeft: moderateScale(10),
        top: moderateScale(30)
    },
    container8: {
        width: moderateScale(320),
        height: verticalScale(56),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        alignItems: 'center',
        flexDirection: 'row'
    },
    img1: {
        width: scale(32),
        height: scale(32),
        marginLeft: moderateScale(10)
    },
    container9: {
        width: moderateScale(320),
        height: verticalScale(208),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        flexDirection: 'column',
    },
    text5: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#333333',
        marginLeft: moderateScale(10),
        marginTop: moderateScale(15)
    },
    textcontainer: {
        width: moderateScale(300),
        height: verticalScale(16),
        alignSelf: 'center',
        marginTop: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center'
    },
    textcontainer1: {
        width: moderateScale(100),
        height: verticalScale(16),
        marginTop: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: moderateScale(10)
    },
    line3: {
        width: moderateScale(72),
        height: verticalScale(2),
        borderRadius: moderateScale(10),
        backgroundColor: '#a6a6a6',
        alignSelf: 'center',
        marginTop: moderateScale(25)
    }
})