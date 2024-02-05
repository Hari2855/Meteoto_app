import { View, Text, StyleSheet, Image, Pressable, ScrollView, Animated, Easing } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import React, {useState, useEffect} from 'react'
import Denidepopup from './Denidepop'
import Acceptpopup from './Acceptpopup'
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Undomodel from './Undomodel'

const Partconfirmmetion = ({navigation}) => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupVisible1, setPopupVisible1] = useState(false);
    const [container1Visible, setContainer1Visible] = useState(true);
    const [container2Visible, setContainer2Visible] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const animation = new Animated.Value(0);


    const toggleModal = () => {
        setModalVisible(true)
    }

    const close = () => {
        setModalVisible(false)
    }

    const showPopup = () => {
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    const showPopup1 = () => {
        setPopupVisible1(true);
    };

    const closePopup1 = () => {
        setPopupVisible1(false);
    };

    useEffect(() => {
            const timer = setTimeout(() => {
                    slideOutAnimation()
            }, 6000);

            return () => {
                clearTimeout(timer);
            };
    }, []);

    
    const slideOutAnimation = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 300,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
        }).start(() => {
            setContainer1Visible(false);
            setContainer2Visible(true);
        });
    };

    const slideInAnimation = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 300,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
        }).start(() => {
            setContainer1Visible(true);
            setContainer2Visible(false);
        });
    };

    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -100],
    });

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <Text style={styles.text1}>Confirmation pending</Text>

          {container1Visible && ( 
              <Animated.View style={[styles.container1, { transform: [{ translateX }] }]}>
           <View style={styles.container2}>
              <Image source={require('../icon/imges/Logo1.png')} style={styles.img}/>
           </View>
           <View style={styles.line1}></View>
           <View style={{flexDirection: 'column', marginLeft: moderateScale(10), marginTop: moderateScale(5)}}>
              <Text style={styles.text2}>Headlight</Text>
              <Text style={styles.text3}>OEM Part</Text>
                  <Text style={styles.text3}>Global X</Text>
                  <Text style={styles.text3}>Qt. : 02</Text>
           </View>
           <View style={{flexDirection: 'column', marginTop: moderateScale(2), marginLeft: moderateScale(80)}}>
                  <Text style={styles.text3}>Price</Text>
                  <Text style={[styles.text3, {marginTop: moderateScale(2)}]}>4000/-</Text>
                  <View style={styles.imp}>
                    <View style={{height: scale(5), width: scale(5), backgroundColor: '#FF9966', borderRadius: scale(3), marginRight: moderateScale(5)}}></View>
                    <Text style={styles.text4}>IMPORTANT</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: moderateScale(20), right: moderateScale(60)}}>
                    <Pressable style={styles.button1} onPress={showPopup}><Text style={styles.text5}>No</Text></Pressable>
                      <Denidepopup isVisible={popupVisible} onClose={closePopup} />
                    <Pressable style={styles.button2} onPress={showPopup1}><Text style={[styles.text5, {color: '#ffffff'}]}>Yes</Text></Pressable>
                    <Acceptpopup isVisible={popupVisible1} onClose={closePopup1} />

                  </View>
           </View>
          </Animated.View>
          )}

          <View style={styles.container1}>
              <View style={styles.container2}>
                  <Image source={require('../icon/imges/Logo1.png')} style={styles.img} />
              </View>
              <View style={styles.line1}></View>
              <View style={{ flexDirection: 'column', marginLeft: moderateScale(10), marginTop: moderateScale(5) }}>
                  <Text style={styles.text2}>Headlight</Text>
                  <Text style={styles.text3}>OEM Part</Text>
                  <Text style={styles.text3}>Global X</Text>
                  <Text style={styles.text3}>Qt. : 02</Text>
              </View>
              <View style={{ flexDirection: 'column', marginTop: moderateScale(2), marginLeft: moderateScale(80) }}>
                  <Text style={styles.text3}>Price</Text>
                  <Text style={[styles.text3, { marginTop: moderateScale(2) }]}>4000/-</Text>
                  <View style={{ flexDirection: 'row', marginTop: moderateScale(40), right: moderateScale(60) }}>
                      <Pressable style={styles.button1}><Text style={styles.text5}>No</Text></Pressable>
                      <Pressable style={styles.button2}><Text style={[styles.text5, { color: '#ffffff' }]}>Yes</Text></Pressable>
                  </View>
              </View>
          </View>

          <View style={styles.line2}></View>

          <Text style={[styles.text1, {marginTop: moderateScale(10)}]}>Request Accepted</Text>

          <View style={styles.container3}>
              <View style={styles.container2}>
                  <Image source={require('../icon/imges/Logo1.png')} style={styles.img} />
              </View>
              <View style={[styles.line1, {height: moderateScale(88.3)}]}></View>
              <View style={{ flexDirection: 'column', marginLeft: moderateScale(10), marginTop: moderateScale(5) }}>
                  <Text style={styles.text2}>Headlight</Text>
                  <Text style={styles.text3}>OEM Part</Text>
                  <ScrollView horizontal={true}>
                  <Text style={styles.text3}>Global X  Qt. : 02</Text>
                  </ScrollView>
              </View>
              <View style={{ flexDirection: 'column', marginTop: moderateScale(2), marginLeft: moderateScale(80) }}>
                  <Text style={styles.text3}>Price</Text>
                  <Text style={[styles.text3, { marginTop: moderateScale(2) }]}>4000/-</Text>
                  <Text style={[styles.text3, {color: '#99CC33', fontWeight: '500', marginTop: moderateScale(12), right: moderateScale(25)}]}>Accepted</Text>
              </View>
          </View>

          <View style={styles.container3}>
              <View style={styles.container2}>
                  <Image source={require('../icon/imges/Logo1.png')} style={styles.img} />
              </View>
              <View style={[styles.line1, { height: moderateScale(88.3) }]}></View>
              <View style={{ flexDirection: 'column', marginLeft: moderateScale(10), marginTop: moderateScale(5) }}>
                  <Text style={styles.text2}>Headlight</Text>
                  <Text style={styles.text3}>OEM Part</Text>
                  <ScrollView horizontal={true}>
                      <Text style={styles.text3}>Global X  Qt. : 02</Text>
                  </ScrollView>
              </View>
              <View style={{ flexDirection: 'column', marginTop: moderateScale(2), marginLeft: moderateScale(80) }}>
                  <Text style={styles.text3}>Price</Text>
                  <Text style={[styles.text3, { marginTop: moderateScale(2) }]}>4000/-</Text>
                  <Text style={[styles.text3, { color: '#99CC33', fontWeight: '500', marginTop: moderateScale(12), right: moderateScale(25) }]}>Accepted</Text>
              </View>
          </View>

          <View style={styles.line2}></View>

          <Text style={[styles.text1, { marginTop: moderateScale(10) }]}>Request Accepted</Text>

          <View style={[styles.container3, {borderTopColor: '#FF9966'}]}>
              <View style={styles.container2}>
                  <Image source={require('../icon/imges/Logo1.png')} style={styles.img} />
              </View>
              <View style={[styles.line1, { height: moderateScale(88.3) }]}></View>
              <View style={{ flexDirection: 'column', marginLeft: moderateScale(10), marginTop: moderateScale(5) }}>
                  <Text style={styles.text2}>Headlight</Text>
                  <Text style={styles.text3}>Aftermarket Part</Text>
                  <ScrollView horizontal={true}>
                      <Text style={styles.text3}>Global X  Qt. : 02</Text>
                  </ScrollView>
              </View>
              <View style={{ flexDirection: 'column', marginTop: moderateScale(2), marginLeft: moderateScale(80) }}>
                  <Text style={styles.text3}>Price</Text>
                  <Text style={[styles.text3, { marginTop: moderateScale(2) }]}>4000/-</Text>
                  <Pressable style={styles.undo} onPress={toggleModal}><Text style={styles.text6}>Undo</Text></Pressable>
              </View>
          </View>

          <View style={[styles.container3, { borderTopColor: '#FF9966' }]}>
              <View style={styles.container2}>
                  <Image source={require('../icon/imges/Logo1.png')} style={styles.img} />
              </View>
              <View style={[styles.line1, { height: moderateScale(88.3) }]}></View>
              <View style={{ flexDirection: 'column', marginLeft: moderateScale(10), marginTop: moderateScale(5) }}>
                  <Text style={styles.text2}>Headlight</Text>
                  <Text style={styles.text3}>Aftermarket Part</Text>
                  <ScrollView horizontal={true}>
                      <Text style={styles.text3}>Global X  Qt. : 02</Text>
                  </ScrollView>
              </View>
              <View style={{ flexDirection: 'column', marginTop: moderateScale(2), marginLeft: moderateScale(80) }}>
                  <Text style={styles.text3}>Price</Text>
                  <Text style={[styles.text3, { marginTop: moderateScale(2) }]}>4000/-</Text>
                  <Pressable style={styles.undo} onPress={toggleModal}><Text style={styles.text6}>Undo</Text></Pressable>
                  <Undomodel isVisible={isModalVisible} onCancel={close} navigation={navigation}/>
              </View>
          </View>

          <View style={styles.container4}>
            <View style={styles.line3}></View>
          </View>
    </ScrollView>
  )
}

export default Partconfirmmetion

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333'
    },
    text1: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: '#ffffff',
        marginLeft: moderateScale(17),
        marginTop: moderateScale(30)
    },
    container1: {
        width: moderateScale(320),
        height: verticalScale(120),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(5),
        alignSelf: 'center',
        marginTop: moderateScale(10),
        flexDirection: 'row',
        borderTopWidth: 5,
        borderColor: '#FFCC00'
    },
    container2: {
        width: scale(60),
        height: scale(60),
        borderRadius: scale(30),
        borderWidth: 1,
        borderColor: '#cbcbcb',
        marginLeft: moderateScale(15),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    img: {
        width: scale(52),
        height: scale(52)
    },
    line1: {
        height: verticalScale(115.5),
        width: moderateScale(1),
        backgroundColor: '#999999',
        marginLeft: moderateScale(10)
    },
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#333333'
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#666666',
        marginTop: moderateScale(5)
    },
    imp: {
        width: scale(67),
        height: scale(16),
        borderRadius: scale(10),
        borderWidth: 1,
        borderColor: '#FF9966',
        marginTop: moderateScale(5),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text4: {
        fontSize: moderateScale(8),
        fontWeight: '400',
        color: '#FF9966'
    },
    button1: {
        width: scale(49),
        height: scale(24),
        borderRadius: scale(12),
        borderWidth: 1,
        borderColor: '#666666',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button2: {
        width: scale(49),
        height: scale(24),
        borderRadius: scale(12),
        backgroundColor: '#99CC33',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: moderateScale(10)
    },
    text5: {
        fontSize: moderateScale(12),
        fontWeight: '500'
    },
    line2: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(25)
    },
    container3: {
        width: moderateScale(320),
        height: verticalScale(88),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        borderTopWidth: 5,
        borderTopColor: '#99CC33',
        marginTop: moderateScale(10),
        flexDirection: 'row'
    },
    undo: {
        width: scale(64),
        height: scale(24),
        borderRadius: scale(16),
        borderWidth: 1,
        borderColor: '#33CCCC',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(10),
        right: moderateScale(20)
    },
    text6: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#33CCCC'
    },
    container4: {
        width: moderateScale(360),
        height: verticalScale(28),
        // borderWidth: 1,
        // borderColor: 'red',
    },
    line3: {
        width: moderateScale(72),
        height: verticalScale(2),
        borderRadius: moderateScale(10),
        backgroundColor: '#a8a8a8',
        alignSelf: 'center',
        marginTop: moderateScale(25)
    }

})