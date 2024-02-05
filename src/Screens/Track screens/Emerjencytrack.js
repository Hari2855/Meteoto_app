import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable, ScrollView } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'


const Emergencytrack = ({ navigation }) => {
    const [color, setColor] = useState(0)


    return (
        <View style={styles.container1}>
            <View style={styles.container2}>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={{ height: scale(16), width: scale(24), tintColor: '#ffffff', marginLeft: moderateScale(20) }} />
                </Pressable>
                <Text style={styles.text1}>TRACK STATUS</Text>
            </View>

            <View style={styles.container3}>
                <Image source={require('../icon/gif-icons/Soon.gif')} style={{ width: scale(80), height: scale(84) }} />
                <Text style={styles.text2}>{`TRACK YOUR SERVICE \n& ORDER STATUS HERE`}</Text>
            </View>

            <View style={styles.container4}>
                <Pressable style={[styles.box1, { backgroundColor: color == 1 ? '#33cccc' : '#333333' }]} onPress={() => setColor(1)}>
                    <Text style={styles.text3}>Car Service</Text>
                </Pressable>
                <Pressable style={[styles.box2, { backgroundColor: color == 2 ? '#33cccc' : '#333333' }]} onPress={() => setColor(2)}>
                    <Text style={styles.text3}>Autoparts</Text>
                </Pressable>
                <Pressable style={[styles.box3, { backgroundColor: color == 0 ? '#33cccc' : '#333333' }]} onPress={() => setColor(0)}>
                    <Text style={styles.text3}>Emergency</Text>
                </Pressable>
            </View>

            {color == 1 ? <View>
                <ScrollView contentContainerStyle={styles.carservice} showsVerticalScrollIndicator={false}>
                    <View style={styles.view}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={require('../icon/Profile-section-imgs/Carimgnormal.png')} style={styles.img} />
                            <Text style={{ color: '#878787', marginLeft: scale(10) }}>i10</Text>
                        </View>
                        <View style={styles.line1}></View>

                        <View style={styles.container5}>
                            <Text style={styles.Text1}>General Service</Text>
                            <Text style={[styles.Text2, { marginTop: moderateScale(10) }]}>Apex Garage</Text>
                            <Text style={styles.Text2}>19-08-2023</Text>
                            <Text style={[styles.Text1, { color: '#666666', marginTop: moderateScale(35) }]}>OTP <Text style={{ color: '#33CCCC' }}>2379</Text></Text>
                        </View>

                        <View style={styles.container5}>
                            <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>Status</Text>
                            <Text style={[styles.Text3, { top: moderateScale(5), color: '#99CC33' }]}>Completed</Text>
                            <Pressable style={styles.pay} onPress={() => navigation.navigate('Bill1')}>
                                <Text style={styles.Text4}>PayNow</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={[styles.view, { marginTop: moderateScale(20) }]}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={require('../icon/imges/Rectangle.png')} style={styles.img1} />
                            <Text style={styles.Text5}>Premium Car</Text>
                            <Image source={require('../icon/Profile-section-imgs/Carimgpremium.png')} style={[styles.img, { bottom: moderateScale(15) }]} />
                            <Text style={{ color: '#878787', marginLeft: scale(10), bottom: moderateScale(15) }}>Verna</Text>
                        </View>
                        <View style={[styles.line1, { right: moderateScale(8) }]}></View>

                        <View style={styles.container5}>
                            <Text style={styles.Text1}>General Service</Text>
                            <Text style={[styles.Text2, { marginTop: moderateScale(10) }]}>Apex Garage</Text>
                            <Text style={styles.Text2}>19-08-2023</Text>
                            <Text style={[styles.Text1, { color: '#666666', marginTop: moderateScale(35) }]}>OTP <Text style={{ color: '#33CCCC' }}>2379</Text></Text>
                        </View>

                        <View style={styles.container5}>
                            <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>Status</Text>
                            <Text style={[styles.Text3, { top: moderateScale(5), color: '#33CCCC' }]}>In Garage</Text>
                        </View>
                    </View>

                    <View style={[styles.view, { marginTop: moderateScale(20) }]}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={require('../icon/Profile-section-imgs/Carimgnormal.png')} style={styles.img} />
                            <Text style={{ color: '#878787', marginLeft: scale(10) }}>i10</Text>
                        </View>
                        <View style={styles.line1}></View>

                        <View style={styles.container5}>
                            <Text style={styles.Text1}>General Service</Text>
                            <Text style={[styles.Text2, { marginTop: moderateScale(10) }]}>Apex Garage</Text>
                            <Text style={styles.Text2}>19-08-2023</Text>
                        </View>

                        <View style={styles.container5}>
                            <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>Status</Text>
                            <Text style={[styles.Text3, { top: moderateScale(5), color: '#33CCCC' }]}>Searching</Text>

                            <Pressable style={styles.pay}>
                                <Text style={[styles.Text4, { color: '#666666' }]}>See more</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={[styles.view, { marginTop: moderateScale(20), flexDirection: 'column' }]}>
                        <View style={styles.cancel}>
                            <Text style={[styles.Text4, { color: '#ffffff' }]}>You can cancel within 02:00 min</Text>
                            <Pressable style={styles.cancelcontainer}>
                                <Text style={[styles.Text4, { color: '#ff4c00' }]}>Cancel</Text>
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ alignItems: 'center', top: moderateScale(25) }}>
                                <Image source={require('../icon/Profile-section-imgs/Carimgnormal.png')} style={[styles.img, { bottom: moderateScale(15) }]} />
                                <Text style={{ color: '#878787', marginLeft: scale(10), bottom: moderateScale(15) }}>i10</Text>
                            </View>
                            <View style={[styles.line1, { height: verticalScale(107), top: moderateScale(0.1), right: moderateScale(1) }]}></View>
                            <View style={[styles.container5, { height: verticalScale(105), }]}>
                                <Text style={[styles.Text1, { marginTop: moderateScale(5) }]}>General Service</Text>
                                <Text style={[styles.Text2, { marginTop: moderateScale(5) }]}>Apex Garage</Text>
                                <Text style={[styles.Text2, { marginTop: moderateScale(5) }]}>19-08-2023</Text>
                                <Text style={[styles.Text1, { color: '#666666', marginTop: moderateScale(10) }]}>OTP <Text style={{ color: '#33CCCC' }}>2379</Text></Text>
                            </View>

                            <View style={[styles.container5, { width: moderateScale(90), }]}>
                                <Text style={[styles.Text3, { marginTop: moderateScale(9) }]}>Status</Text>
                                <Text style={[styles.Text3, { top: moderateScale(5), color: '#33CCCC' }]}>On Waiting</Text>
                                <Text style={[styles.Text3, { marginTop: moderateScale(15) }]}>Remark</Text>
                                <Text style={[styles.Text3, { top: moderateScale(5), color: '#33CCCC' }]}>Pickup</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.view, { marginTop: moderateScale(20) }]}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={require('../icon/Profile-section-imgs/Carimgnormal.png')} style={styles.img} />
                            <Text style={{ color: '#878787', marginLeft: scale(10) }}>i10</Text>
                        </View>
                        <View style={styles.line1}></View>

                        <View style={styles.container5}>
                            <Text style={styles.Text1}>General Service</Text>
                            <Text style={[styles.Text2, { marginTop: moderateScale(10) }]}>Apex Garage</Text>
                            <Text style={[styles.Text2, { marginTop: moderateScale(5) }]}>19-08-2023</Text>
                            <Text style={[styles.Text1, { color: '#666666', marginTop: moderateScale(35) }]}>OTP <Text style={{ color: '#33CCCC' }}>2379</Text></Text>
                        </View>

                        <View style={styles.container5}>
                            <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>Status</Text>
                            <Text style={[styles.Text3, { top: moderateScale(5), color: '#33CCCC' }]}>Sheduled</Text>
                            <Text style={[styles.Text3, { marginTop: moderateScale(15) }]}>Remark</Text>
                            <Text style={[styles.Text3, { top: moderateScale(5), color: '#33CCCC' }]}>Drag to Garage</Text>

                            <Pressable style={[styles.pay, { bottom: moderateScale(25) }]}>
                                <Text style={[styles.Text4, { color: '#666666' }]}>See more</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={[styles.view, { marginTop: moderateScale(20) }]}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={require('../icon/Profile-section-imgs/Carimgnormal.png')} style={styles.img} />
                            <Text style={{ color: '#878787', marginLeft: scale(10) }}>i10</Text>
                        </View>
                        <View style={styles.line1}></View>

                        <View style={styles.container5}>
                            <Text style={styles.Text1}>General Service</Text>
                            <Text style={[styles.Text2, { marginTop: moderateScale(10) }]}>Apex Garage</Text>
                            <Text style={styles.Text2}>19-08-2023</Text>
                        </View>

                        <View style={styles.container5}>
                            <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>Status</Text>
                            <Text style={[styles.Text3, { top: moderateScale(5), color: '#33CCCC' }]}>Searching</Text>

                            <Pressable style={styles.pay}>
                                <Text style={[styles.Text4, { color: '#666666' }]}>See more</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={[styles.view, { marginTop: moderateScale(20) }]}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={require('../icon/Profile-section-imgs/Carimgnormal.png')} style={styles.img} />
                            <Text style={{ color: '#878787', marginLeft: scale(10) }}>i10</Text>
                        </View>
                        <View style={styles.line1}></View>

                        <View style={styles.container5}>
                            <Text style={styles.Text1}>General Service</Text>
                            <Text style={[styles.Text2, { marginTop: moderateScale(10) }]}>Apex Garage</Text>
                            <Text style={styles.Text2}>19-08-2023</Text>
                        </View>

                        <View style={styles.container5}>
                            <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>Status</Text>
                            <Text style={[styles.Text3, { top: moderateScale(5), color: '#33CCCC' }]}>Delivered</Text>

                            <Pressable style={styles.pay}>
                                <Text style={[styles.Text4, { color: '#666666' }]}>See Invoice</Text>
                            </Pressable>
                        </View>
                    </View>

                </ScrollView>
            </View> :

                color == 2 ? <View>
                    <ScrollView contentContainerStyle={styles.carservice}>
                        <Text style={[styles.Text4, { color: '#ffffff' }]}>12/09/2023</Text>
                        <View style={styles.container6}>
                            <View style={styles.line2}></View>
                            <Text style={[styles.Text4, { color: '#666666', marginTop: moderateScale(10), marginLeft: moderateScale(20) }]}>S I N G L E   P A R T</Text>
                            <View style={styles.line3}></View>
                            <View style={styles.container7}>
                                <Pressable style={styles.imgcontainer}>
                                    <Image source={require('../icon/imges/Imagcontainer1.png')} style={{ width: scale(32), height: scale(32) }} />
                                </Pressable>
                                <View style={{ flexDirection: 'column', marginLeft: moderateScale(10) }}>
                                    <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#333333' }}>Alternator</Text>
                                    <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666' }}>Brand: OEM</Text>
                                </View>
                                <Pressable>
                                    <Text style={[styles.Text4, { marginTop: moderateScale(5), left: moderateScale(140) }]}>Track</Text>
                                </Pressable>
                            </View>
                            <View style={styles.dot}>
                                <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#666666', top: moderateScale(5), alignSelf: 'flex-end', right: moderateScale(15) }}>Status: Out of Delivery</Text>
                            </View>
                        </View>
                    </ScrollView>

               
                </View> :

                    <ScrollView contentContainerStyle={styles.carservice}>
                        <View style={styles.container8}>
                            <View style={{ flexDirection: 'row', height: verticalScale(144), width: moderateScale(320) }}>
                                <View style={styles.container9}>
                                    <Pressable style={styles.imgcontainer1}>
                                        <Image source={require('../icon/emergency-icons/Fender.png')} style={styles.img2} />
                                    </Pressable>
                                    <Text style={[styles.Text4, { left: moderateScale(10), top: moderateScale(10), color: '#666666', fontWeight: '400' }]}>Status:</Text>
                                    <Text style={[styles.Text4, { left: moderateScale(10), top: moderateScale(15), }]}>Arriving</Text>
                                </View>
                                <View style={[styles.line1, { height: verticalScale(144), left: moderateScale(2) }]}></View>
                                <View style={styles.container10}>
                                    <Text style={styles.Text1}>Mechanic Support</Text>
                                    <Text style={[styles.Text4, { fontWeight: '400', color: '#666666', top: moderateScale(5) }]}>Gurpreet Singh</Text>
                                    <Text style={[styles.Text4, { fontWeight: '400', color: '#666666', top: moderateScale(5) }]}>Apex Garage</Text>
                                    <Text style={[styles.Text4, { fontWeight: '400', color: '#666666', top: moderateScale(20) }]}>Service Charge</Text>
                                    <Text style={[styles.Text4, { fontWeight: '500', color: '#333333', top: moderateScale(18) }]}>₹500</Text>
                                </View>
                                <View style={styles.textcontainer}>
                                    <Text style={[styles.Text1, { color: '#666666' }]}>OTP</Text>
                                    <Text style={[styles.Text1, { color: '#33CCCC' }]}>2379</Text>
                                    <View style={styles.imgcontainer2}>
                                        <Pressable style={styles.icon}>
                                            <Feather name='phone-call' color={'#6a6a6a'} size={24} />
                                        </Pressable>

                                        <Pressable style={[styles.icon, { left: moderateScale(10) }]}>
                                            <Feather name='message-circle' color={'#6a6a6a'} size={24} />
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.container11}>
                                <View style={styles.time}>
                                    <Text style={[styles.Text4, { color: '#ffffff' }]}>You can cancel within 02:00 min</Text>
                                </View>
                                <Pressable style={styles.cancelcontainer1}>
                                    <Text style={[styles.Text4, { color: '#FF3F00' }]}>Cancel</Text>
                                </Pressable>
                            </View>
                        </View>

                        <View style={[styles.container8, { marginTop: moderateScale(20), height: moderateScale(150), flexDirection: 'row' }]}>
                            <View style={styles.container9}>
                                <Pressable style={styles.imgcontainer1}>
                                    <Image source={require('../icon/emergency-icons/Fender.png')} style={styles.img2} />
                                </Pressable>
                                <Text style={[styles.Text4, { left: moderateScale(10), top: moderateScale(10), color: '#666666', fontWeight: '400' }]}>Status:</Text>
                                <Text style={[styles.Text4, { left: moderateScale(10), top: moderateScale(15), }]}>Reached</Text>
                            </View>
                            <View style={[styles.line1, { height: verticalScale(142), left: moderateScale(2) }]}></View>
                            <View style={styles.container10}>
                                <Text style={styles.Text1}>Mechanic Support</Text>
                                <Text style={[styles.Text4, { fontWeight: '400', color: '#666666', top: moderateScale(5) }]}>Gurpreet Singh</Text>
                                <Text style={[styles.Text4, { fontWeight: '400', color: '#666666', top: moderateScale(5) }]}>Apex Garage</Text>
                                <Text style={[styles.Text4, { fontWeight: '400', color: '#666666', top: moderateScale(20) }]}>Service Charge</Text>
                                <Text style={[styles.Text4, { fontWeight: '500', color: '#333333', top: moderateScale(18) }]}>₹500</Text>
                            </View>
                            <View style={styles.textcontainer}>
                                <Text style={[styles.Text1, { color: '#666666' }]}>OTP</Text>
                                <Text style={[styles.Text1, { color: '#33CCCC' }]}>2379</Text>
                                <View style={styles.imgcontainer2}>
                                    <Pressable style={styles.icon}>
                                        <Feather name='phone-call' color={'#6a6a6a'} size={24} />
                                    </Pressable>

                                    <Pressable style={[styles.icon, { left: moderateScale(10) }]}>
                                        <Feather name='message-circle' color={'#6a6a6a'} size={24} />
                                    </Pressable>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.container8, { marginTop: moderateScale(20), height: moderateScale(150), flexDirection: 'row' }]}>
                            <View style={styles.container9}>
                                <Pressable style={styles.imgcontainer1}>
                                    <Image source={require('../icon/emergency-icons/Fender.png')} style={styles.img2} />
                                </Pressable>
                                <Text style={[styles.Text4, { left: moderateScale(10), top: moderateScale(10), color: '#666666', fontWeight: '400' }]}>Status:</Text>
                                <Text style={[styles.Text4, { left: moderateScale(10), top: moderateScale(15), color: '#99CC33' }]}>Completed</Text>
                            </View>
                            <View style={[styles.line1, { height: verticalScale(142), left: moderateScale(2) }]}></View>
                            <View style={styles.container10}>
                                <Text style={styles.Text1}>Mechanic Support</Text>
                                <Text style={[styles.Text4, { fontWeight: '400', color: '#666666', top: moderateScale(5) }]}>Gurpreet Singh</Text>
                                <Text style={[styles.Text4, { fontWeight: '400', color: '#666666', top: moderateScale(5) }]}>Apex Garage</Text>
                                <Text style={[styles.Text4, { fontWeight: '400', color: '#666666', top: moderateScale(20) }]}>Service Charge</Text>
                                <Text style={[styles.Text4, { fontWeight: '500', color: '#333333', top: moderateScale(18) }]}>₹500</Text>
                            </View>
                            <View style={styles.textcontainer}>
                                <View style={[styles.imgcontainer2, { marginTop: moderateScale(75) }]}>
                                    <Pressable style={styles.icon}>
                                        <Feather name='phone-call' color={'#6a6a6a'} size={24} />
                                    </Pressable>

                                    <Pressable style={[styles.icon, { left: moderateScale(10) }]}>
                                        <Feather name='message-circle' color={'#6a6a6a'} size={24} />
                                    </Pressable>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.container8, { marginTop: moderateScale(20), height: moderateScale(150), flexDirection: 'row' }]}>
                            <View style={styles.container9}>
                                <Pressable style={styles.imgcontainer1}>
                                    <Image source={require('../icon/emergency-icons/Fender.png')} style={styles.img2} />
                                </Pressable>
                                <Text style={[styles.Text4, { left: moderateScale(10), top: moderateScale(10), color: '#666666', fontWeight: '400' }]}>Status:</Text>
                                <Text style={[styles.Text4, { left: moderateScale(10), top: moderateScale(15), color: '#FF3F00' }]}>Cancelled</Text>
                            </View>
                            <View style={[styles.line1, { height: verticalScale(142), left: moderateScale(2) }]}></View>
                            <View style={styles.container10}>
                                <Text style={styles.Text1}>Mechanic Support</Text>
                                <Text style={[styles.Text4, { fontWeight: '400', color: '#666666', top: moderateScale(5) }]}>Gurpreet Singh</Text>
                                <Text style={[styles.Text4, { fontWeight: '400', color: '#666666', top: moderateScale(5) }]}>Apex Garage</Text>
                                <Text style={[styles.Text4, { fontWeight: '400', color: '#666666', top: moderateScale(20) }]}>Service Charge</Text>
                                <Text style={[styles.Text4, { fontWeight: '500', color: '#333333', top: moderateScale(18) }]}>₹500</Text>
                            </View>
                            <View style={styles.textcontainer}>
                                <View style={[styles.imgcontainer2, { marginTop: moderateScale(75) }]}>
                                    <Pressable style={styles.icon}>
                                        <Feather name='phone-call' color={'#6a6a6a'} size={24} />
                                    </Pressable>

                                    <Pressable style={[styles.icon, { left: moderateScale(10) }]}>
                                        <Feather name='message-circle' color={'#6a6a6a'} size={24} />
                                    </Pressable>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.container8, { marginTop: moderateScale(20), height: moderateScale(150), flexDirection: 'row' }]}>
                            <View style={styles.container9}>
                                <Pressable style={styles.imgcontainer1}>
                                    <Image source={require('../icon/emergency-icons/Fender.png')} style={styles.img2} />
                                </Pressable>
                                <Text style={[styles.Text4, { left: moderateScale(10), top: moderateScale(10), color: '#666666', fontWeight: '400' }]}>Status:</Text>
                                <Text style={[styles.Text4, { left: moderateScale(5), top: moderateScale(15), color: '#FF3F00', fontSize: moderateScale(11) }]}>Incomplete</Text>
                            </View>
                            <View style={[styles.line1, { height: verticalScale(142), left: moderateScale(2) }]}></View>
                            <View style={styles.container10}>
                                <Text style={styles.Text1}>Mechanic Support</Text>
                                <Text style={[styles.Text4, { fontWeight: '400', color: '#666666', top: moderateScale(5) }]}>Gurpreet Singh</Text>
                                <Text style={[styles.Text4, { fontWeight: '400', color: '#666666', top: moderateScale(5) }]}>Apex Garage</Text>
                                <Text style={[styles.Text4, { fontWeight: '400', color: '#666666', top: moderateScale(20) }]}>Service Charge</Text>
                                <Text style={[styles.Text4, { fontWeight: '500', color: '#333333', top: moderateScale(18) }]}>₹500</Text>
                            </View>
                            <View style={styles.textcontainer}>
                                <View style={[styles.imgcontainer2, { marginTop: moderateScale(75) }]}>
                                    <Pressable style={styles.icon}>
                                        <Feather name='phone-call' color={'#6a6a6a'} size={24} />
                                    </Pressable>

                                    <Pressable style={[styles.icon, { left: moderateScale(10) }]}>
                                        <Feather name='message-circle' color={'#6a6a6a'} size={24} />
                                    </Pressable>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.container8, { marginTop: moderateScale(20), height: moderateScale(150), flexDirection: 'row' }]}>
                            <View style={styles.container9}>
                                <Pressable style={styles.imgcontainer1}>
                                    <Image source={require('../icon/emergency-icons/Fender.png')} style={styles.img2} />
                                </Pressable>
                                <Text style={[styles.Text4, { left: moderateScale(10), top: moderateScale(10), color: '#666666', fontWeight: '400' }]}>Status:</Text>
                                <Text style={[styles.Text4, { left: moderateScale(10), top: moderateScale(15), color: '#FF3F00' }]}>Denied</Text>
                            </View>
                            <View style={[styles.line1, { height: verticalScale(142), left: moderateScale(2) }]}></View>
                            <View style={styles.container10}>
                                <Text style={styles.Text1}>Mechanic Support</Text>
                                <Text style={[styles.Text4, { fontWeight: '400', color: '#666666', top: moderateScale(5) }]}>Gurpreet Singh</Text>
                                <Text style={[styles.Text4, { fontWeight: '400', color: '#666666', top: moderateScale(5) }]}>Apex Garage</Text>
                                <Text style={[styles.Text4, { fontWeight: '400', color: '#666666', top: moderateScale(20) }]}>Service Charge</Text>
                                <Text style={[styles.Text4, { fontWeight: '500', color: '#333333', top: moderateScale(18) }]}>₹500</Text>
                            </View>
                            <View style={styles.textcontainer}>
                                <View style={[styles.imgcontainer2, { marginTop: moderateScale(75) }]}>
                                    <Pressable style={styles.icon}>
                                        <Feather name='phone-call' color={'#6a6a6a'} size={24} />
                                    </Pressable>

                                    <Pressable style={[styles.icon, { left: moderateScale(10) }]}>
                                        <Feather name='message-circle' color={'#6a6a6a'} size={24} />
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
            }
        </View>
    )
}

export default Emergencytrack

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#333333'
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
        marginLeft: moderateScale(85),
        marginBottom: moderateScale(5)
    },
    container3: {
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
    container4: {
        width: moderateScale(312),
        height: verticalScale(48),
        alignSelf: 'center',
        marginTop: moderateScale(50),
        alignItems: 'center',
        flexDirection: 'row'
    },
    line1: {
        width: moderateScale(1),
        height: verticalScale(136),
        backgroundColor: 'gray',
        marginLeft: moderateScale(15)
    },
    box1: {
        width: moderateScale(105),
        height: verticalScale(40),
        borderWidth: 1,
        borderColor: '#79767d',
        borderRadius: moderateScale(20),
        borderRightWidth: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box2: {
        width: moderateScale(105),
        height: verticalScale(40),
        borderWidth: 1,
        borderColor: '#79767d',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box3: {
        width: moderateScale(105),
        height: verticalScale(40),
        borderWidth: 1,
        borderColor: '#79767d',
        borderRadius: moderateScale(20),
        borderLeftWidth: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text3: {
        color: '#ffffff',
        fontSize: moderateScale(12),
        fontWeight: '500'
    },
    carservice: {
        width: moderateScale(320),
        alignSelf: 'center',
        flexDirection: 'column',
        marginTop: moderateScale(40),
        height: verticalScale(1450)
    },
    view: {
        width: moderateScale(320),
        height: verticalScale(136),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(5),
        alignItems: 'center',
        flexDirection: 'row'
    },
    img: {
        height: scale(60),
        width: scale(60),
        marginLeft: moderateScale(12),
    },
    Status: {
        // borderLeftWidth: 0.5,
        // borderColor: 'lightgray',
        height: '100%',
        marginLeft: moderateScale(20),
        flexDirection: 'row',
    },
    line: {
        height: '100%',
        width: scale(5),
        backgroundColor: 'gray',
    },
    text4: {
        color: '#9e9e9e',
        fontSize: moderateScale(18),
        fontWeight: '400',
        marginTop: moderateScale(8)
    },
    text5: {
        fontSize: moderateScale(13),
        color: '#595959',
        fontWeight: '500',
        marginTop: moderateScale(10)
    },
    text6: {
        fontSize: moderateScale(15),
        color: '#9a9a9a',
        // top: moderateScale(5)
    },
    text7: {
        top: moderateScale(11),
        marginLeft: moderateScale(20),
        fontSize: moderateScale(16),
        color: '#b4b4b4',
        fontWeight: '400'
    },
    text8: {
        color: '#99CC33',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(12),
        fontSize: moderateScale(14),
        fontWeight: '500'
    },
    more: {
        width: scale(88),
        height: scale(24),
        borderWidth: 1,
        borderRadius: scale(12),
        borderColor: '#aaaaaa',
        alignItems: 'center',
        marginTop: moderateScale(50)
    },
    imgs: {
        width: scale(80),
        height: scale(16),
        bottom: moderateScale(24)
    },
    text9: {
        color: '#ffd53f',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(12),
        fontSize: moderateScale(14),
        fontWeight: '500'
    },

    container5: {
        flexDirection: 'column',
        width: moderateScale(120),
        height: verticalScale(120),
        marginLeft: moderateScale(10)
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
    img1: {
        width: scale(80),
        height: scale(16),
        bottom: moderateScale(18),
    },
    Text5: {
        fontSize: moderateScale(8),
        fontWeight: '400',
        color: '#ffffff',
        bottom: moderateScale(33)
    },
    cancel: {
        width: moderateScale(320),
        height: verticalScale(30),
        backgroundColor: '#ffcc00',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    cancelcontainer: {
        width: scale(72),
        height: scale(20),
        borderRadius: scale(20),
        borderWidth: 1,
        borderColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        left: moderateScale(10)
    },
    container6: {
        height: verticalScale(132),
        width: moderateScale(320),
        borderWidth: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        marginTop: moderateScale(5),
        borderBottomLeftRadius: moderateScale(5),
        borderBottomRightRadius: moderateScale(5)
    },
    line2: {
        height: verticalScale(4),
        width: moderateScale(318),
        backgroundColor: '#FFCC00',
    },
    line3: {
        width: moderateScale(320),
        height: verticalScale(1),
        backgroundColor: '#666666',
        marginTop: moderateScale(10)
    },
    container7: {
        width: moderateScale(296),
        height: verticalScale(32),
        // borderWidth: 1,
        // borderColor: '#33CCCC',
        marginTop: moderateScale(15),
        alignSelf: 'center',
        flexDirection: 'row'
    },
    imgcontainer: {
        width: scale(35),
        height: scale(35),
        borderRadius: scale(20),
        borderWidth: 1.5,
        borderColor: '#a9a9a9'
    },
    dot: {
        width: moderateScale(320),
        height: verticalScale(22),
        borderTopWidth: 1,
        borderColor: '#999999',
        borderStyle: 'dashed',
        marginTop: moderateScale(10)
    },
    container8: {
        width: moderateScale(320),
        height: verticalScale(184),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(5),
        flexDirection: 'column'
    },
    container9: {
        width: moderateScale(60),
        height: moderateScale(116),
        marginTop: moderateScale(20),
        marginLeft: moderateScale(15)
    },
    imgcontainer1: {
        width: scale(60),
        height: scale(60),
        borderRadius: scale(30),
        borderWidth: 2,
        borderColor: '#997b70',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffc2ae'
    },
    img2: {
        width: scale(32),
        height: scale(32)
    },
    container10: {
        width: moderateScale(137),
        height: verticalScale(100),
        // borderWidth: 1,
        // borderColor: 'blue',
        marginTop: moderateScale(15),
        marginLeft: moderateScale(10)
    },
    textcontainer: {
        marginTop: moderateScale(15),
        marginLeft: moderateScale(30)
    },
    imgcontainer2: {
        height: verticalScale(48),
        width: moderateScale(110),
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: 'red',
        right: moderateScale(65),
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
    container11: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderTopWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#999999',
        alignItems: 'center',
        flexDirection: 'row'
    },
    time: {
        width: moderateScale(216),
        height: verticalScale(24),
        backgroundColor: '#FFCC00',
        alignItems: 'center',
        justifyContent: 'center',
        left: moderateScale(10)
    },
    cancelcontainer1: {
        width: scale(72),
        height: scale(24),
        borderRadius: scale(12),
        borderWidth: 1,
        borderColor: '#666666',
        alignItems: 'center',
        justifyContent: 'center',
        left: moderateScale(20)
    }
})