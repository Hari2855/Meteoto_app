import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Serviceinvoice = ({navigation}) => {
    const [first, setfirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [third, setThird] = useState(0)
    const [four, setFour] = useState(0)
    const [five, setFive] = useState(0)


  return (
    <View style={styles.container}>
          <View style={styles.header}>
              <Pressable onPress={() => navigation.navigate('User')}>
                  <MaterialIcons name='keyboard-arrow-left' color={'#ffffff'} size={24} style={{ left: moderateScale(20) }} />
              </Pressable>
              <Text style={styles.text1}>SERVICES INVOICE</Text>
          </View>

          <View style={styles.container1}>
              <Image source={require('../icon/profile-options-img/Gif/Bill.gif')} style={{ width: scale(80), height: scale(84) }} />
              <Text style={styles.text2}>{`FIND ALL YOUR SERVICE\nINVOICE AT ONE PLACE`}</Text>
          </View>

          <View style={styles.line1}></View>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={styles.containe2}>
              <Pressable style={[styles.container2, { backgroundColor: first == 1 ? '#33CCCC' : '#333333' }]} onPress={() => setfirst(first === 1 ? 0 : 1)}>
                {first == 0 ? <View>
                  <Text style={styles.text3}>This Week</Text>
                </View> :
                      <Text style={styles.text3}>This Week  x</Text>}
            </Pressable>

              <Pressable style={[styles.container2, { backgroundColor: second == 1 ? '#33CCCC' : '#333333', marginLeft: moderateScale(20) }]} onPress={() => setSecond(second === 1 ? 0 : 1)}>
                  {second == 0 ? <View>
                      <Text style={styles.text3}>Last Month</Text>
                  </View> :
                      <Text style={styles.text3}>Last Month  x</Text>}
              </Pressable>

              <Pressable style={[styles.container2, { backgroundColor: third == 1 ? '#33CCCC' : '#333333', marginLeft: moderateScale(20) }]} onPress={() => setThird(third === 1 ? 0 : 1)}>
                  {third == 0 ? <View>
                      <Text style={styles.text3}>Last 3-Month</Text>
                  </View> :
                      <Text style={styles.text3}>Last 3-Month  x</Text>}
              </Pressable>

              <Pressable style={[styles.container2, { backgroundColor: four == 1 ? '#33CCCC' : '#333333', marginLeft: moderateScale(20) }]} onPress={() => setFour(four === 1 ? 0 : 1)}>
                  {four == 0 ? <View>
                      <Text style={styles.text3}>Last 6-Month</Text>
                  </View> :
                      <Text style={styles.text3}>Last 6-Month  x</Text>}
              </Pressable>

              <Pressable style={[styles.container2, { backgroundColor: five == 1 ? '#33CCCC' : '#333333', marginLeft: moderateScale(20) }]} onPress={() => setFive(five === 1 ? 0 : 1)}>
                  {five == 0 ? <View>
                      <Text style={styles.text3}>Last Year</Text>
                  </View> :
                      <Text style={styles.text3}>Last Year  x</Text>}
              </Pressable>
          </ScrollView>

          <ScrollView showsVerticalScrollIndicator={false}>
              <View style={[styles.view, { marginTop: moderateScale(20) }]}>
                  <View style={{ alignItems: 'center' }}>
                      <Image source={require('../icon/imges/Rectangle.png')} style={styles.img1} />
                      <Text style={styles.Text5}>Premium Car</Text>
                      <Image source={require('../icon/Profile-section-imgs/Carimgpremium.png')} style={[styles.img, { bottom: moderateScale(15) }]} />
                      <Text style={{ color: '#878787', marginLeft: scale(10), bottom: moderateScale(15) }}>Verna</Text>
                  </View>
                  <View style={[styles.line2, { right: moderateScale(8) }]}></View>

                  <View style={styles.container5}>
                      <Text style={styles.Text1}>General Service</Text>
                      <Text style={[styles.Text2, { marginTop: moderateScale(10), color: '#333333' }]}>Apex Garage</Text>
                      <Text style={styles.Text2}>19-08-2023</Text>
                  </View>

                  <View style={styles.container5}>
                      <Text style={[styles.Text3, {marginLeft: moderateScale(13)}]}>₹15068</Text>

                      <Pressable style={[styles.pay, {right: moderateScale(8)}]} onPress={() => navigation.navigate('Invoice2')}>
                          <Text style={styles.Text4}>See more</Text>
                      </Pressable>
                  </View>
              </View>

              <View style={[styles.view, { marginTop: moderateScale(20) }]}>
                  <View style={{ alignItems: 'center' }}>
                      <Image source={require('../icon/Profile-section-imgs/Carimgnormal.png')} style={styles.img} />
                      <Text style={{ color: '#878787', marginLeft: scale(10) }}>i10</Text>
                  </View>
                  <View style={styles.line2}></View>

                  <View style={styles.container5}>
                      <Text style={styles.Text1}>General Service</Text>
                      <Text style={[styles.Text2, { marginTop: moderateScale(10), color:'#333333' }]}>Apex Garage</Text>
                      <Text style={styles.Text2}>19-08-2023</Text>
                  </View>

                  <View style={styles.container5}>
                      <Text style={styles.Text3}>₹15068</Text>

                      <Pressable style={styles.pay}>
                          <Text style={styles.Text4}>See more</Text>
                      </Pressable>
                  </View>
              </View>

              <View style={[styles.view, { marginTop: moderateScale(20) }]}>
                  <View style={{ alignItems: 'center' }}>
                      <Image source={require('../icon/Profile-section-imgs/Carimgnormal.png')} style={styles.img} />
                      <Text style={{ color: '#878787', marginLeft: scale(10) }}>i10</Text>
                  </View>
                  <View style={styles.line2}></View>

                  <View style={styles.container5}>
                      <Text style={styles.Text1}>General Service</Text>
                      <Text style={[styles.Text2, { marginTop: moderateScale(10), color: '#333333' }]}>Apex Garage</Text>
                      <Text style={styles.Text2}>19-08-2023</Text>
                  </View>

                  <View style={styles.container5}>
                      <Text style={styles.Text3}>₹15068</Text>

                      <Pressable style={styles.pay}>
                          <Text style={styles.Text4}>See more</Text>
                      </Pressable>
                  </View>
              </View>

              <View style={[styles.view, { marginTop: moderateScale(20) }]}>
                  <View style={{ alignItems: 'center' }}>
                      <Image source={require('../icon/Profile-section-imgs/Carimgnormal.png')} style={styles.img} />
                      <Text style={{ color: '#878787', marginLeft: scale(10) }}>i10</Text>
                  </View>
                  <View style={styles.line2}></View>

                  <View style={styles.container5}>
                      <Text style={styles.Text1}>General Service</Text>
                      <Text style={[styles.Text2, { marginTop: moderateScale(10), color: '#333333' }]}>Apex Garage</Text>
                      <Text style={styles.Text2}>19-08-2023</Text>
                  </View>

                  <View style={styles.container5}>
                      <Text style={styles.Text3}>₹15068</Text>

                      <Pressable style={styles.pay}>
                          <Text style={styles.Text4}>See more</Text>
                      </Pressable>
                  </View>
              </View>

              <View style={[styles.view, { marginTop: moderateScale(20) }]}>
                  <View style={{ alignItems: 'center' }}>
                      <Image source={require('../icon/Profile-section-imgs/Carimgnormal.png')} style={styles.img} />
                      <Text style={{ color: '#878787', marginLeft: scale(10) }}>i10</Text>
                  </View>
                  <View style={styles.line2}></View>

                  <View style={styles.container5}>
                      <Text style={styles.Text1}>General Service</Text>
                      <Text style={[styles.Text2, { marginTop: moderateScale(10), color: '#333333' }]}>Apex Garage</Text>
                      <Text style={styles.Text2}>19-08-2023</Text>
                  </View>

                  <View style={styles.container5}>
                      <Text style={styles.Text3}>₹15068</Text>

                      <Pressable style={styles.pay}>
                          <Text style={styles.Text4}>See more</Text>
                      </Pressable>
                  </View>
              </View>
          </ScrollView>

          <View style={styles.line3}></View>
    </View>
  )
}

export default Serviceinvoice

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    header: {
        width: '100%',
        height: moderateScale(60),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    text1: {
        color: '#ffffff',
        fontSize: moderateScale(12),
        fontWeight: '500',
        marginLeft: moderateScale(95)
    },
    container1: {
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
    line1: {
        width: moderateScale(360),
        height: moderateScale(1),
        backgroundColor: '#999999',
        marginTop: moderateScale(50)
    },
    container2: {
        width: scale(93),
        height: scale(24),
        borderRadius: scale(12),
        borderWidth: 1,
        borderColor: '#cccccc',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    },
    view: {
        width: moderateScale(320),
        height: verticalScale(136),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(5),
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center'
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
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#333333',
        marginTop: moderateScale(3),
        marginLeft: moderateScale(20)
    },
    Text4: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#33CCCC'
    },
    Text5: {
        fontSize: moderateScale(8),
        fontWeight: '400',
        color: '#ffffff',
        bottom: moderateScale(33)
    },
    line2: {
        width: moderateScale(1),
        height: verticalScale(136),
        backgroundColor: 'gray',
        marginLeft: moderateScale(15)
    },
    img: {
        height: scale(60),
        width: scale(60),
        marginLeft: moderateScale(12),
    },
    img1: {
        width: scale(80),
        height: scale(16),
        bottom: moderateScale(18),
    },
    pay: {
        width: scale(81),
        height: scale(24),
        borderRadius: moderateScale(12),
        borderWidth: 1,
        borderColor: '#666666',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(70)
    },
    line3: {
        width: moderateScale(72),
        height: verticalScale(2),
        borderRadius: moderateScale(12),
        backgroundColor: '#B4B4B4',
        alignSelf: 'center',
        marginTop: moderateScale(25),
        bottom: moderateScale(5)
    },
    containe2: {
        marginTop: moderateScale(10), 
        paddingLeft: moderateScale(10),
        height: moderateScale(24),
        paddingBottom: moderateScale(80)
    },
})