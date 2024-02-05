import { View, Image, Text, StyleSheet, ScrollView, TextInput, ImageBackground, Pressable } from 'react-native'
import React, { useState, useEffect, useRef} from 'react'
import { verticalScale, scale, moderateScale } from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import {FlatList, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Modelscreen1 from './Modelscreen1'
import Screen2 from './Modelscreen2'
import Screen3 from './ModelScreen3'
import i1 from '../icon/imges/1.png'
import i2 from '../icon/imges/2.png'
import i3 from '../icon/imges/3.png'
import i4 from '../icon/imges/4.png'
import Locationmodel from './Locationmodel'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width


const Home = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalVisible, setModalVisible] = useState(false);
  const [Screen, SetScreen] = useState(false);
  const [Screen1, SetScreen1] = useState(false);
  const flatListRef = useRef(null);
  const data1 = ([i1,i2,i3,i4])
  const [isLocationModelVisible, setLocationModelVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data1.length;
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({ index: nextIndex });
      // setLocationModelVisible(true);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLocationModelVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (event) => {
    const x = event.nativeEvent.contentOffset.x;
    setCurrentIndex(Math.round(x / WIDTH));
  };


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };



  const toggleScreen = () => {
    SetScreen(!Screen);
  };

  const toggleScreen2 = () => {
    SetScreen1(!Screen1);
  };


  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Image source={require('../icon/imges/Icon.png')} style={{ height: scale(24), width: scale(100), bottom: moderateScale(5), right: moderateScale(10) }} />
          <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between',width: scale(128), height: scale(32), left: scale(10)}}>
            <Pressable style={styles.circle} onPress={toggleScreen2}>
              <Image source={require('../icon/imges/Honeymooon.png')} style={{height: scale(20), width: scale(20)}}/>
            </Pressable>
            <Screen3 isVisible={Screen1} closeModal={toggleScreen2} navigation={navigation} />
            <Pressable>
              <Image source={require('../icon/Icons/HeartCircle.png')} style={{ height: scale(32), width: scale(32), }} />
            </Pressable>
            <Pressable>
              <Image source={require('../icon/Icons/Message.png')} style={{ height: scale(32), width: scale(32),}} />
            </Pressable>
          </View>
        </View>
        <View style={styles.container3}>
          <TextInput style={styles.textinput} placeholder='Search for services, parts and more' placeholderTextColor = '#ffffff'>
          </TextInput>
          <Pressable>
            <SimpleLineIcons name='microphone' color={'#ffffff'} size={24} style={{right: scale(35)}}/>
          </Pressable>
        </View>
      </View>
      <ImageBackground source={require('../icon/imges/Imgback.png')} style={styles.container4}>
        <Text style={styles.text1}>Emergency Help</Text>
        <View style={styles.help}>
          <View style={{ flexDirection: 'column' }}>
            <Pressable style={styles.iconcontainer} onPress={() => navigation.navigate('Accident')}>
              <Image source={require('../icon/emergency-icons/Fender.png')} style={{ height: scale(36), width: scale(36), tintColor: 'black' }} />
            </Pressable>
            <Text style={{ color: 'white', marginTop: moderateScale(5) }}>Accident</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Pressable style={[styles.iconcontainer, { marginTop: moderateScale(20), marginLeft: moderateScale(10) }]} onPress={() => navigation.navigate('Mechanic')}>
              <Image source={require('../icon/emergency-icons/Fender2.png')} style={{ height: scale(36), width: scale(36), tintColor: 'black', }} />
            </Pressable>
            <Text style={{ color: 'white', marginTop: moderateScale(5), marginLeft: moderateScale(10) }}>Mechanic</Text>
            <Text style={{ color: 'white', marginLeft: moderateScale(25) }}>24X7</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Pressable style={[styles.iconcontainer, { marginLeft: moderateScale(10) }]} onPress={() => navigation.navigate('Towing')}>
              <Image source={require('../icon/emergency-icons/Fender3.png')} style={{ height: scale(36), width: scale(36), tintColor: 'black' }} />
            </Pressable>
            <Text style={{ color: 'white', marginTop: moderateScale(5), marginLeft: moderateScale(10) }}>Car towing</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Pressable style={styles.iconcontainer} onPress={toggleModal}>
              <Image source={require('../icon/emergency-icons/Fender4.png')} style={{ height: scale(36), width: scale(36), tintColor: 'black' }} />
            </Pressable>
            <Text style={{ color: 'white', marginTop: moderateScale(5), marginLeft: moderateScale(15) }}>More</Text>
            <Modelscreen1 isVisible={isModalVisible} closeModal={toggleModal} navigation={navigation} />
          </View>
        </View>
      </ImageBackground>

      <Locationmodel isVisible={isLocationModelVisible} closeModal={() => setLocationModelVisible(false)}  navigation={navigation} />

      <View style={styles.maniContainer}>
        <View style={{ height: HEIGHT / 5, marginTop: moderateScale(5) }}>
          <FlatList
          ref={flatListRef} 
            data={data1}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            pagingEnabled
            onMomentumScrollEnd={handleScroll} renderItem={({ item, index }) => {
            return (
              <View style={{ width: WIDTH, height: HEIGHT / 5, justifyContent: 'center', alignItems: 'center' }}>
                <Pressable style={{ width: '100%', height: '100%', borderRadius: verticalScale(10) }}>
                  <Image source={item} style={{ height: '100%', width: '100%' }} />
                  <View style={{ width: WIDTH, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', bottom: moderateScale(20) }}>
                    {
                      data1.map((item, index) => {
                        return (
                          <View style={{ width: currentIndex == index ? 10 : 8, height: currentIndex == index ? 10 : 8, borderRadius: currentIndex == index ? 15 : 10, backgroundColor: currentIndex == index ? 'orange' : '#ffffff', marginLeft: moderateScale(5) }}></View>
                        )
                      })
                    }
                  </View>
                </Pressable>
              </View>
            )
          }}
          
          />
        </View>
        <View style={styles.services}>
          <View style={styles.heading}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4f4845', '#4f4845', '#704e43',]} style={styles.line1}></LinearGradient>
            <Text style={styles.text2}>POPULAR SERVICES</Text>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#704e43', '#4f4845', '#4f4845',]} style={styles.line2}></LinearGradient>
          </View>
          <ImageBackground source={require('../icon/imges/Service.png')} style={styles.servicesContainer}>
            <View style={styles.gifContainer}>
              <Pressable style={[styles.gifContainer1, { marginLeft: moderateScale(5) }]} onPress={() => navigation.navigate('CarForm')}>
                <Image source={require('../icon/gif-icons/Service1.gif')} style={{ width: scale(45), height: scale(45), }} resizeMode='contain' resizeMethod='resize' />
              </Pressable>

              <Pressable style={[styles.gifContainer1, { marginLeft: moderateScale(20) }]} onPress={() => navigation.navigate('Autoparsmenu')}>
                <Image source={require('../icon/gif-icons/Autoparts1.gif')} style={{ width: scale(45), height: scale(45) }} resizeMode='contain' resizeMethod='resize' />
              </Pressable>
            </View>
            <View style={styles.textContainer}>
              <Text style={{ color: '#ffffff', marginTop: moderateScale(5), marginRight: moderateScale(50) }}>Car services</Text>
              <Text style={{ color: '#ffffff', marginTop: moderateScale(5) }}>Autoparts</Text>
            </View>

            <View style={[styles.heading, { marginTop: moderateScale(60) }]}>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4f4845', '#4f4845', '#704e43',]} style={styles.line1}></LinearGradient>
              <Text style={styles.text2}>OUR SERVICES</Text>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#704e43', '#4f4845', '#4f4845',]} style={styles.line2}></LinearGradient>
            </View>
            <View style={styles.otherServices}>
              <View style={styles.transferView}>
                <Pressable style={styles.transferTab} onPress={() => navigation.navigate('Accessories')}>
                  <View style={styles.transferCard}>
                    <Image source={require('../icon/gif-icons/International1.gif')} style={[styles.icon, { marginRight: moderateScale(3) }]} resizeMode='contain' resizeMethod='resize' />
                  </View>
                  <Text style={[styles.transferText, { marginBottom: moderateScale(16) }]}>Accessories</Text>
                </Pressable>
                <Pressable style={styles.transferTab} onPress={() => navigation.navigate('Denting&Penting')}>
                  <View style={styles.transferCard}>
                    <Image source={require('../icon/gif-icons/PaintRoller.gif')} style={styles.icon} resizeMode='contain' resizeMethod='resize' />
                  </View>
                  <Text style={styles.transferText}>{`Denting/ \nPanting`}</Text>
                </Pressable>
                <Pressable style={styles.transferTab} onPress={() => navigation.navigate('HomeScreen')}>
                  <View style={styles.transferCard}>
                    <Image source={require('../icon/gif-icons/Suspention1.gif')} style={styles.icon} resizeMode='contain' resizeMethod='resize' />
                  </View>
                  <Text style={styles.transferText}>{`3D wheel \nalignment`}</Text>
                </Pressable>
                <Pressable style={styles.transferTab} onPress={() => navigation.navigate('fastag')}>
                  <View style={styles.transferCard}>
                    <Image source={require('../icon/gif-icons/Fastag.gif')} style={styles.icon} resizeMode='contain' resizeMethod='resize' />
                  </View>
                  <Text style={styles.transferText}>{`Fastag \nrecharge`}</Text>
                </Pressable>
              </View>


              <View style={[styles.transferView, { marginTop: moderateScale(30) }]}>
                <Pressable style={styles.transferTab} onPress={() => navigation.navigate('Graphicwork')}>
                  <View style={styles.transferCard}>
                    <Image source={require('../icon/gif-icons/Mandal.gif')} style={[styles.icon, { marginRight: moderateScale(3) }]} resizeMode='contain' resizeMethod='resize' />
                  </View>
                  <Text style={[styles.transferText, { right: moderateScale(5) }]}>Graphic</Text>
                  <Text style={[styles.transferText, { bottom: moderateScale(5), right: moderateScale(5) }]}>work</Text>
                </Pressable>

                <Pressable style={styles.transferTab} onPress={() => navigation.navigate('Seatcover')}>
                  <View style={styles.transferCard}>
                    <Image source={require('../icon/gif-icons/Saftybelt.gif')} style={styles.icon} resizeMode='contain' resizeMethod='resize' />
                  </View>
                  <Text style={[styles.transferText, { marginBottom: moderateScale(15) }]}>Seat Cover</Text>
                </Pressable>
                <Pressable style={styles.transferTab} onPress={() => navigation.navigate('Interior')}>
                  <View style={styles.transferCard}>
                    <Image source={require('../icon/gif-icons/MagicWind.gif')} style={styles.icon} resizeMode='contain' resizeMethod='resize' />
                  </View>
                  <Text style={[styles.transferText, {marginRight: moderateScale(5)}]}>{`Interior \nDesign`}</Text>
                </Pressable>
                <Pressable style={styles.transferTab} onPress={toggleScreen}>
                  <View style={styles.transferCard}>
                    <Image source={require('../icon/emergency-icons/Fender4.png')} style={styles.icon} resizeMode='contain' resizeMethod='resize' />
                  </View>
                  <Text style={[styles.transferText, { marginBottom: moderateScale(15), marginRight: moderateScale(5) }]}>See all</Text>
                </Pressable>
                <Screen2 isVisible={Screen} closeModal={toggleScreen} navigation={navigation} />
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.OfferContainer}>
          <ImageBackground source={require('../icon/imges/Offerpattern.png')} style={styles.img}>
            <Text style={styles.text3}>Offers For You!</Text>
            <ScrollView horizontal={true} style={{ marginTop: moderateScale(20), width: '94%' }}>
              <Pressable>
                <Image source={require('../icon/imges/Offer.png')} style={styles.img1} />
              </Pressable>
              <Pressable>
                <Image source={require('../icon/imges/Offer2.png')} style={styles.img1} />
              </Pressable>
              <Pressable>
                <Image source={require('../icon/imges/Offer3.png')} style={styles.img1} />
              </Pressable>
              <Pressable>
                <Image source={require('../icon/imges/Offer4.png')} style={styles.img1} />
              </Pressable>
            </ScrollView>

            <Pressable style={{ flexDirection: 'row', alignSelf: 'center', width: '94%', justifyContent: 'flex-end' }}>
              <Text style={{ color: 'white', marginBottom: moderateScale(30), marginRight: moderateScale(5) }}>See all</Text>
              <Fontisto name='arrow-right-l' color={'#ffffff'} size={20} style={{ marginRight: moderateScale(20) }} />
            </Pressable>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.social}>
        <View style={styles.socialicon}>
          <Text style={styles.text4}>Contact Us</Text>
          <View style={styles.icons}>
            <Image source={require('../icon/emergency-icons/Whatsapp.png')} style={styles.imgs} />
            <Image source={require('../icon/emergency-icons/Instagram.png')} style={styles.imgs} />
            <Image source={require('../icon/emergency-icons/Youtube.png')} style={styles.imgs} />
            <Image source={require('../icon/emergency-icons/Twitter.png')} style={styles.imgs} />
          </View>
        </View>
      </View>
      <View style={styles.ad}>
        <Text style={{color: '#ffffff', fontSize: scale(20), fontWeight: '500'}}>Ad</Text>
      </View>
      <View style={styles.greeting1}>
        <View style={{width: '100%', height: moderateScale(190), backgroundColor: '#333333', marginTop: moderateScale(5)}}>
          <Text style={{color: '#ffffff', fontSize: moderateScale(10), marginLeft: moderateScale(20), fontWeight: '500', top: moderateScale(30)}}>WE ARE MAKING</Text>
          <ImageBackground style={styles.greeting} source={require('../icon/imges/Offerpattern.png')}>
          <Text style={styles.text5}>MECHANIC SERVICES</Text>
            <Text style={{color: '#ffffff', marginLeft: moderateScale(20), fontSize: moderateScale(10), marginTop: moderateScale(5), fontWeight: '500'}}>EASY, AFFORTABLE & QUALITATIVE</Text>
            <View style={{flexDirection: 'row',}}>
              <Text style={{ color: '#ffffff', marginLeft: moderateScale(20), fontSize: moderateScale(10), fontWeight: '500', marginTop: moderateScale(5) }}>MADE BY METEOTO WITH</Text>
              <Ionicons name='heart' color={'red'} size={12} style={{marginTop: moderateScale(6), marginLeft: moderateScale(2)}}/>
            </View>
        </ImageBackground>
        </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
  },
  container1: {
    flexDirection: 'column',
    marginTop: moderateScale(10)
  },
  container2: {
    height: verticalScale(60),
    width: moderateScale(360),
    borderColor: '#cacaca',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  indicatorContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10,
},
  indicator: {
  width: 10,
  height: 10,
  borderRadius: 5,
  backgroundColor: 'gray',
  marginHorizontal: 5,
},
  activeIndicator: {
  backgroundColor: 'blue',
  width: 10,
  height: 10,
  borderRadius: 5,
},
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
    width: moderateScale(360),
    height: verticalScale(100),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  circle: {
    height: scale(32),
    width: scale(32),
    backgroundColor: '#ffffff',
    borderRadius: scale(16),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textinput: {
    width: moderateScale(320),
    height: verticalScale(53),
    color: 'white',
    borderWidth: 1,
    borderRadius: moderateScale(8),
    left: moderateScale(20),
    borderColor: '#ffffff',
    paddingLeft: moderateScale(20)
  },
  container4: {
    height: verticalScale(174),
    borderColor: '#cacaca',
    width: '100%',
  },
  maniContainer: {
    height: verticalScale(830),
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: 'ffffff',
  },
  text1: {
    color: '#ffffff',
    fontSize: moderateScale(12),
    fontWeight: '500',
    marginLeft: moderateScale(20),
    fontFamily: 'Nunito Sans'
  },
  help: {
    flexDirection: 'row',
    width: scale(312),
    height: verticalScale(98),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(10),
  },
  iconcontainer: {
    height: scale(60),
    width: scale(60),
    backgroundColor: '#ffc2ae',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ffffff',
    // marginLeft: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center'
  },
  services: {
    width: '100%',
    height: moderateScale(500),
    backgroundColor: '#333333',
    marginTop: moderateScale(5),
    alignItems: 'center'
  },
  heading: {
    flexDirection: 'row',
    marginTop: moderateScale(30),
    alignSelf: 'center'
  },
  line1: {
    height: verticalScale(2),
    width: scale(70),
    marginRight: moderateScale(5)
  },
  line2: {
    height: verticalScale(2),
    width: scale(70),
    marginLeft: moderateScale(5)
  },
  text2: {
    color: '#ffffff',
    bottom: moderateScale(8)
  },
  servicesContainer: {
    width: '100%',
    height: '95%',
    marginTop: moderateScale(10)
  },
  gifContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
  },
  gifContainer1: {
    width: '45%',
    height: verticalScale(80),
    backgroundColor: '#ffffff',
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'space-around'
  },
  otherServices: {
    width: '94%',
    flexDirection: 'column'
  },
  transferView: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: moderateScale(10)
  },
  transferTab: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: moderateScale(20)
  },
  transferCard: {
    width: scale(60),
    height: scale(60),
    borderRadius: moderateScale(30),
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: scale(32),
    height: scale(32),
  },
  transferText: {
    marginTop: moderateScale(5),
    marginLeft: moderateScale(10),
    color: 'white',
    fontSize: moderateScale(12),
  },
  OfferContainer: {
    width: '100%',
    height: verticalScale(210),
    backgroundColor: '#333333',
    marginTop: moderateScale(5)
  },
  text3: {
    color: '#ffffff',
    fontSize: moderateScale(20),
    marginLeft: moderateScale(20),
    bottom: moderateScale(5)
  },
  img: {
    width: '100%',
    height: '90%',
    marginTop: moderateScale(40)
  },
  img1: {
    height: verticalScale(90),
    width: scale(150),
    marginLeft: moderateScale(20),
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: moderateScale(5)
  },
  social: {
    width: '100%',
    height: verticalScale(156),
    backgroundColor: '#ffffff',
  },
  socialicon: {
    height: '84%',
    backgroundColor: '#333333',
    marginTop: moderateScale(5),
    flexDirection: 'column',
  },
  text4: {
    color: '#ffffff',
    fontSize: moderateScale(20),
    fontWeight: '400',
    marginLeft: moderateScale(15),
    marginTop: moderateScale(10)
  },
  icons: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    marginTop: moderateScale(20)
  },
  ad: {
    width: '100%',
    height: verticalScale(60),
    backgroundColor: '#333333',
    bottom: moderateScale(17),
    alignItems: 'center',
    justifyContent: 'center'
  },
  greeting1: {
    height: verticalScale(200),
    width: '100%',
    backgroundColor: '#ffffff',
  },
  greeting: {
    height: verticalScale(195),
    width: '100%',
    backgroundColor: '#333333',
    marginTop: moderateScale(30),
  },
  img2: {
    height: '100%',
    marginTop: moderateScale(35)
  },
  imgs: {
    height: scale(56),
    width: scale(56),
    borderRadius: scale(30),
    borderWidth: 2,
    borderColor: '#ffffff'
  },
  text5: {
    color: '#ffffff',
    marginLeft: moderateScale(20),
    fontSize: moderateScale(20),
    fontWeight: '400',
    marginTop: moderateScale(5)
  }
})