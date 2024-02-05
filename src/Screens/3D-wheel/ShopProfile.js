import React, {useState} from 'react'
import { View, Text, Image, Pressable, StyleSheet, ScrollView, TextInput } from 'react-native'
import { scale, verticalScale, moderateScale, } from 'react-native-size-matters'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import Ratingmodel from './Ratingmodel'
import CircleContainer from './Circlecontainer'

const ShopProfile = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.icons} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
                </Pressable>
                <Text style={styles.TEXT}>SHOPE PROFILE</Text>
            </View>

            <View style={styles.container1}>
                <Image source={require('../icon/imges/Shop.png')} style={styles.img} />
                <Image source={require('../icon/imges/Pro.png')} style={[styles.img, { width: scale(40) }]} />
            </View>

            <View style={styles.container2}>
                <Text style={styles.Text1}>HARPREET GARAGR & AUTO PARTS</Text>

                <View style={styles.container3}>
                    <View style={styles.rating}>
                        <MaterialCommunityIcons name='star-circle' color={'#33CCCC'} size={16} />
                        <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>4.6</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.rating, { width: scale(60), marginLeft: moderateScale(10) }]}>
                            <MaterialCommunityIcons name='map-marker-distance' color={'#33CCCC'} size={16} />
                            <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>5.2 km</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.container4}>
                    <Pressable style={styles.iconContainer}>
                        <Feather name='phone-call' color={'#333333'} size={24} />
                    </Pressable>
                    <Pressable style={styles.iconContainer}>
                        <Ionicons name='location-outline' color={'#333333'} size={28} />
                    </Pressable>
                    <Pressable style={styles.iconContainer}>
                        <Feather name='share-2' color={'#333333'} size={24} />
                    </Pressable>
                </View>

                <View style={styles.line}></View>

                <View style={styles.container5}>
                    <Text style={styles.Text2}>T I M I N G</Text>
                    <Text style={[styles.Text3, { marginTop: moderateScale(10) }]}>10:00 AM - 9:00 PM</Text>
                    <Text style={styles.Text3}>Closed: <Text style={{ fontWeight: '500', color: '#333333' }}>Sunday, Friday</Text></Text>
                </View>

                <View style={[styles.line, { height: scale(0.5) }]}></View>

                <Text style={styles.Text4}>{`Indrapuri, Sector-A, Near BHEL, \nBhopal`}</Text>
                <Text style={[styles.Text3, { marginLeft: moderateScale(28), marginTop: moderateScale(10) }]}>{`2.7KM (5 min) \nAway from your location`}</Text>
            </View>

            <View style={styles.container6}>
                <Text style={[styles.Text2, {marginRight: moderateScale(40)}]}>ADD TO FAVOURITE</Text>
                <CircleContainer onHeartPress={(isFilled) => { console.log('Heart Pressed. Filled:', isFilled); }}/>
            </View>

            <View style={styles.container7}>
                <Text style={[styles.Text2, { marginLeft: moderateScale(18), marginTop: moderateScale(15) }]}>O T H E R   S E R V I C E S (S)</Text>
                <View style={styles.line}></View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginLeft: moderateScale(18), marginTop: moderateScale(10) }}>
                        <Text style={styles.Text2}>Service</Text>
                        <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>Tyre Rotation</Text>
                        <ScrollView horizontal={true} style={{ width: scale(180) }}>
                            <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>Wheel Balancing & Wheel Alignment</Text>
                        </ScrollView>
                        <ScrollView horizontal={true} style={{ width: scale(180) }}>
                            <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>Wheel Balancing & Wheel Alignment</Text>
                        </ScrollView>
                    </View>
                    <View style={{ marginLeft: moderateScale(40), marginTop: moderateScale(10) }}>
                        <Text style={styles.Text2}>Price (₹)</Text>
                        <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>300</Text>
                        <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>300</Text>
                        <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>300</Text>
                    </View>
                </View>
            </View>

            <View style={styles.container8}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={[styles.Text2, { right: moderateScale(10), marginTop: moderateScale(15) }]}>P H O T O S   B Y   O W N E R</Text>
                    <Pressable onPress={() => navigation.navigate('Profile1')}>
                        <Text style={[styles.Text2, { marginLeft: moderateScale(18), marginTop: moderateScale(15), color: '#333333' }]}>See all</Text>
                    </Pressable>
                </View>
                <View style={styles.line}></View>
                <View style={styles.box1}>
                    <Image source={require('../icon/imges/Shop.png')} style={styles.img} />
                    <Image source={require('../icon/imges/Pro.png')} style={[styles.img, { width: scale(40), marginLeft: moderateScale(10) }]} />
                </View>

            </View>

            <View style={styles.line1}></View>

            <View style={styles.box2}>
                <Text style={styles.Text5}>Reviews</Text>
                <Text style={[styles.Text2, { color: '#ffffff', marginTop: moderateScale(10) }]}>(30 reviews)</Text>
            </View>
            <View style={styles.review}>
                <Text style={{ fontSize: moderateScale(10), fontWeight: '500', color: '#333333' }}>4.6</Text>
            </View>
            <ScrollView style={{ marginTop: moderateScale(20), height: moderateScale(300) }} nestedScrollEnabled={true}>
                <View style={styles.box3}>
                    <View style={{ flexDirection: 'row', width: scale(288), height: scale(29), top: scale(10), alignSelf: 'center' }}>
                        <Image source={require('../icon/profile-imgs/Aditya.png')} style={{ height: scale(26), width: scale(26) }} />
                        <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#393939', marginTop: moderateScale(2), marginLeft: moderateScale(10) }}>Aadvik Saini</Text>

                        <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#393939', marginTop: moderateScale(2), marginLeft: moderateScale(95) }}>28 July 2023</Text>
                    </View>
                    <View style={[styles.line, { marginTop: moderateScale(15) }]}></View>
                    <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#666666', marginLeft: moderateScale(10), marginTop: moderateScale(15) }}>"Good Service, Thanks Harapreet garage!"</Text>
                    <Pressable onPress={() => navigation.navigate('Replies')}>
                    <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#33CCCC', alignSelf: 'flex-end', right: moderateScale(30), marginTop: moderateScale(40) }}>3 replies</Text>
                    </Pressable>
                </View>

                <View style={[styles.box3, { marginTop: moderateScale(20) }]}>
                    <View style={{ flexDirection: 'row', width: scale(288), height: scale(29), top: scale(10), alignSelf: 'center' }}>
                        <Image source={require('../icon/profile-imgs/Aditya.png')} style={{ height: scale(26), width: scale(26) }} />
                        <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#393939', marginTop: moderateScale(2), marginLeft: moderateScale(10) }}>Aadvik Saini</Text>

                        <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#393939', marginTop: moderateScale(2), marginLeft: moderateScale(95) }}>28 July 2023</Text>
                    </View>
                    <View style={[styles.line, { marginTop: moderateScale(15) }]}></View>
                    <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#666666', marginLeft: moderateScale(10), marginTop: moderateScale(15) }}>"Good Service, Thanks Harapreet garage!"</Text>

                    <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#666666', marginLeft: moderateScale(15), marginTop: moderateScale(5) }}>Thanks meteoto!</Text>

                </View>

                <View style={[styles.box3, { marginTop: moderateScale(20) }]}>
                    <View style={{ flexDirection: 'row', width: scale(288), height: scale(29), top: scale(10), alignSelf: 'center' }}>
                        <Image source={require('../icon/profile-imgs/Aditya.png')} style={{ height: scale(26), width: scale(26) }} />
                        <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#393939', marginTop: moderateScale(2), marginLeft: moderateScale(10) }}>Aadvik Saini</Text>

                        <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#393939', marginTop: moderateScale(2), marginLeft: moderateScale(95) }}>28 July 2023</Text>
                    </View>
                    <View style={[styles.line, { marginTop: moderateScale(15) }]}></View>
                    <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#666666', marginLeft: moderateScale(10), marginTop: moderateScale(15) }}>"Exceptional teacher, made physic enjoybale"</Text>

                    <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#666666', marginLeft: moderateScale(15), marginTop: moderateScale(5) }}>and  understable.Highely recommended!"</Text>
                </View>

                <View style={[styles.box3, { marginTop: moderateScale(20) }]}>
                    <View style={{ flexDirection: 'row', width: scale(288), height: scale(29), top: scale(10), alignSelf: 'center' }}>
                        <Image source={require('../icon/profile-imgs/Aditya.png')} style={{ height: scale(26), width: scale(26) }} />
                        <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#393939', marginTop: moderateScale(2), marginLeft: moderateScale(10) }}>Aadvik Saini</Text>

                        <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#393939', marginTop: moderateScale(2), marginLeft: moderateScale(95) }}>28 July 2023</Text>
                    </View>
                    <View style={[styles.line, { marginTop: moderateScale(15) }]}></View>
                    <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#666666', marginLeft: moderateScale(10), marginTop: moderateScale(15) }}>"Exceptional teacher, made physic enjoybale"</Text>

                    <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#666666', marginLeft: moderateScale(15), marginTop: moderateScale(5) }}>and  understable.Highely recommended!</Text>
                </View>

                <View style={[styles.box3, { marginTop: moderateScale(20) }]}>
                    <View style={{ flexDirection: 'row', width: scale(288), height: scale(29), top: scale(10), alignSelf: 'center' }}>
                        <Image source={require('../icon/profile-imgs/Aditya.png')} style={{ height: scale(26), width: scale(26) }} />
                        <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#393939', marginTop: moderateScale(2), marginLeft: moderateScale(10) }}>Aadvik Saini</Text>

                        <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#393939', marginTop: moderateScale(2), marginLeft: moderateScale(95) }}>28 July 2023</Text>
                    </View>
                    <View style={[styles.line, { marginTop: moderateScale(15) }]}></View>
                    <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#666666', marginLeft: moderateScale(10), marginTop: moderateScale(15) }}>"Exceptional teacher, made physic enjoybale"</Text>

                    <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#666666', marginLeft: moderateScale(15), marginTop: moderateScale(5) }}>and  understable.Highely recommended!"</Text>
                </View>

                <View style={[styles.box3, { marginTop: moderateScale(20) }]}>
                    <View style={{ flexDirection: 'row', width: scale(288), height: scale(29), top: scale(10), alignSelf: 'center' }}>
                        <Image source={require('../icon/profile-imgs/Aditya.png')} style={{ height: scale(26), width: scale(26) }} />
                        <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#393939', marginTop: moderateScale(2), marginLeft: moderateScale(10) }}>Aadvik Saini</Text>

                        <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#393939', marginTop: moderateScale(2), marginLeft: moderateScale(95) }}>28 July 2023</Text>
                    </View>
                    <View style={[styles.line, { marginTop: moderateScale(15) }]}></View>
                    <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#666666', marginLeft: moderateScale(10), marginTop: moderateScale(15) }}>"Exceptional teacher, made physic enjoybale"</Text>

                    <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: '#666666', marginLeft: moderateScale(15), marginTop: moderateScale(5) }}>and  understable.Highely recommended!"</Text>
                </View>
            </ScrollView>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder= 'Share your experience'
                    placeholderTextColor={'#B8B8B8'}
                    style={styles.input}
                />
                <Image source={require('../icon/imges/Upload.png')} style={styles.image} />
            </View>

            <View style={[styles.line1, {marginTop: moderateScale(5), backgroundColor: '#4D4D4D'}]}></View>

            <Pressable style={styles.rate} onPress={toggleModal}>
                <MaterialCommunityIcons name='star-circle' color={'#33CCCC'} size={24}/>
                <Text style={{fontSize: moderateScale(12), fontWeight: '500', color: '#ffffff', marginLeft: moderateScale(2)}}>Rate this Shop</Text>
            </Pressable>
            <Ratingmodel isVisible={isModalVisible} closeModal={toggleModal} navigation={navigation} />

            <View style={[styles.line1, { marginTop: moderateScale(20), backgroundColor: '#4D4D4D' }]}></View>

            <Text style={styles.Text6}>Write us your experience</Text>

            <TextInput style={styles.input1} placeholder='Write here...' placeholderTextColor={'#B8B8B8'}/>

            <Text style={styles.Text7}>{`Your Satisfaction \nis our Destiny.`}</Text>
        </ScrollView>
    )
}

export default ShopProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
        elevation: 10
    },
    header: {
        width: moderateScale(360),
        height: verticalScale(60),
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 10
    },
    icons: {
        width: scale(48),
        height: scale(48),
        alignItems: 'center',
        justifyContent: 'center'
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
        marginLeft: moderateScale(85)
    },
    container1: {
        width: moderateScale(320),
        height: verticalScale(168),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        elevation: 10
    },
    img: {
        width: scale(260),
        height: scale(165),
        borderRadius: scale(5)
    },
    container2: {
        width: moderateScale(320),
        height: verticalScale(340),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        flexDirection: 'column',
        elevation: 10
    },
    Text1: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#333333',
        marginTop: moderateScale(25),
        alignSelf: 'center'
    },
    container3: {
        width: moderateScale(115),
        height: verticalScale(16),
        marginLeft: moderateScale(28),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(10)
    },
    rating: {
        width: scale(39),
        height: scale(16),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container4: {
        width: moderateScale(168),
        height: verticalScale(48),
        marginLeft: moderateScale(26),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: moderateScale(20)
    },
    iconContainer: {
        width: scale(48),
        height: scale(48),
        borderWidth: 1,
        borderRadius: scale(20),
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        width: moderateScale(320),
        height: verticalScale(0.5),
        backgroundColor: '#666666',
        marginTop: moderateScale(10)
    },
    container5: {
        height: verticalScale(68),
        width: moderateScale(134),
        marginLeft: moderateScale(28),
        marginTop: moderateScale(10),
        flexDirection: 'column'
    },
    Text2: {
        fontSize: moderateScale(12),
        color: '#333333',
        fontWeight: '500',
    },
    Text3: {
        fontWeight: '400',
        fontSize: moderateScale(12)
    },
    Text4: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#333333',
        marginLeft: moderateScale(28),
        marginTop: moderateScale(10)
    },
    container6: {
        width: moderateScale(320),
        height: verticalScale(64),
        borderRadius: moderateScale(5),
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        marginTop: moderateScale(10),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        elevation: 10
    },
    circle: {
        width: scale(32),
        height: scale(32),
        borderRadius: scale(16),
        borderWidth: 1,
        borderColor: '#FF4949',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container7: {
        width: moderateScale(320),
        height: verticalScale(160),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        flexDirection: 'column',
        elevation: 10
    },
    container8: {
        width: moderateScale(320),
        height: verticalScale(220),
        borderRadius: moderateScale(5),
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        marginTop: moderateScale(10),
        elevation: 10
    },
    box1: {
        flexDirection: 'row',
        marginTop: moderateScale(20),
        marginLeft: moderateScale(3)
    },
    line1: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#666666',
        marginTop: moderateScale(30)
    },
    container9: {
        width: moderateScale(320),
        height: verticalScale(434),
        alignSelf: 'center',
        marginTop: moderateScale(10),
        borderWidth: 1,
        borderColor: 'yellow'
    },
    box2: {
        width: scale(315),
        height: scale(30),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    Text5: {
        fontSize: moderateScale(24),
        fontWeight: '300',
        color: '#ffffff',
    },
    review: {
        width: scale(39),
        height: scale(18),
        borderRadius: scale(20),
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(5),
        marginLeft: moderateScale(18)
    },
    box3: {
        width: moderateScale(320),
        height: verticalScale(150),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: moderateScale(320),
        height: verticalScale(60),
        padding: moderateScale(10),
        margin: moderateScale(20),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center'
    },
    input: {
        flex: 1,
    },
    image: {
        width: moderateScale(20),
        height: moderateScale(20),
        margin: moderateScale(5),
    },
    rate: {
        width: moderateScale(140),
        height: verticalScale(48),
        borderRadius: moderateScale(5),
        borderWidth: 1,
        borderColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text6: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: '#fffffff',
        color: '#ffffff', 
        marginLeft: moderateScale(20),
        marginTop: moderateScale(30)
    },
    input1: {
        width: moderateScale(320),
        height: verticalScale(120),
        borderRadius: moderateScale(10),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        paddingBottom: moderateScale(80),
        paddingLeft: moderateScale(20)

    },
    Text7: {
        fontSize: moderateScale(40),
        fontWeight: '200',
        color: '#666666',
        alignSelf: 'center',
        marginTop: moderateScale(120),
        bottom: moderateScale(60)
    },
    shape: {
        width: scale(72),
        height: scale(2),
        borderRadius: scale(10),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(30),
        bottom: moderateScale(10)
    }
})