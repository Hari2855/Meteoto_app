import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const Hospital = ({navigation}) => {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
              <Pressable style={styles.icons} onPress={() => navigation.navigate('Home')}>
                  <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
              </Pressable>

              <Text style={styles.TEXT}>HOSPITAL NEARBY</Text>
        </View>
          <View style={styles.indecator}>
              <View style={styles.dot1}></View>
              <Text style={styles.text1}>OPEN</Text>
              <View style={styles.dot2}></View>
              <Text style={styles.text1}>CLOSE</Text>
          </View>

          <ScrollView style={styles.scroll}>
              <View style={styles.detaisContainer}>
                  <View style={styles.iconContainer}>
                      <Image source={require('../icon/static-icons/hospital.png')} style={styles.img} />
                  </View>
                  <View style={styles.textContainer}>
                      <Text style={styles.text2}>LEELAVATI HOSPITAL</Text>
                      <Text style={styles.text3}>5.2 km far from you</Text>
                      <Text style={styles.text4}>Speciality</Text>
                      <Text style={styles.text4}>Heart, Trauma, Ortho</Text>
                  </View>

                  <View style={styles.mapcontainer}>
                      <View style={[styles.dot1, { left: scale(18) }]}></View>
                      <Pressable style={styles.imgecontainer}>
                          <Image source={require('../icon/static-icons/map.png')} style={styles.imga} />
                      </Pressable>
                  </View>
              </View>

              <View style={styles.detaisContainer}>
                  <View style={styles.iconContainer}>
                      <Image source={require('../icon/static-icons/hospital.png')} style={styles.img} />
                  </View>
                  <View style={styles.textContainer}>
                      <Text style={styles.text2}>LEELAVATI HOSPITAL</Text>
                      <Text style={styles.text3}>5.2 km far from you</Text>
                      <Text style={styles.text4}>Speciality</Text>
                      <Text style={styles.text4}>Heart, Trauma, Ortho</Text>
                  </View>

                  <View style={styles.mapcontainer}>
                      <View style={[styles.dot1, { left: scale(18) }]}></View>
                      <Pressable style={styles.imgecontainer}>
                          <Image source={require('../icon/static-icons/map.png')} style={styles.imga} />
                      </Pressable>
                  </View>
              </View>

              <View style={styles.detaisContainer}>
                  <View style={styles.iconContainer}>
                      <Image source={require('../icon/static-icons/hospital.png')} style={styles.img} />
                  </View>
                  <View style={styles.textContainer}>
                      <Text style={styles.text2}>LEELAVATI HOSPITAL</Text>
                      <Text style={styles.text3}>5.2 km far from you</Text>
                      <Text style={styles.text4}>Speciality</Text>
                      <Text style={styles.text4}>Heart, Trauma, Ortho</Text>
                  </View>

                  <View style={styles.mapcontainer}>
                      <View style={[styles.dot2, { left: scale(18) }]}></View>
                      <Pressable style={styles.imgecontainer}>
                          <Image source={require('../icon/static-icons/map.png')} style={styles.imga} />
                      </Pressable>
                  </View>
              </View>

              <View style={styles.detaisContainer}>
                  <View style={styles.iconContainer}>
                      <Image source={require('../icon/static-icons/hospital.png')} style={styles.img} />
                  </View>
                  <View style={styles.textContainer}>
                      <Text style={styles.text2}>LEELAVATI HOSPITAL</Text>
                      <Text style={styles.text3}>5.2 km far from you</Text>
                      <Text style={styles.text4}>Speciality</Text>
                      <Text style={styles.text4}>Heart, Trauma, Ortho</Text>
                  </View>

                  <View style={styles.mapcontainer}>
                      <View style={[styles.dot1, { left: scale(18) }]}></View>
                      <Pressable style={styles.imgecontainer}>
                          <Image source={require('../icon/static-icons/map.png')} style={styles.imga} />
                      </Pressable>
                  </View>
              </View>

              <View style={styles.detaisContainer}>
                  <View style={styles.iconContainer}>
                      <Image source={require('../icon/static-icons/hospital.png')} style={styles.img} />
                  </View>
                  <View style={styles.textContainer}>
                      <Text style={styles.text2}>LEELAVATI HOSPITAL</Text>
                      <Text style={styles.text3}>5.2 km far from you</Text>
                      <Text style={styles.text4}>Speciality</Text>
                      <Text style={styles.text4}>Heart, Trauma, Ortho</Text>
                  </View>

                  <View style={styles.mapcontainer}>
                      <View style={[styles.dot1, { left: scale(18) }]}></View>
                      <Pressable style={styles.imgecontainer}>
                          <Image source={require('../icon/static-icons/map.png')} style={styles.imga} />
                      </Pressable>
                  </View>
              </View>

              <View style={styles.detaisContainer}>
                  <View style={styles.iconContainer}>
                      <Image source={require('../icon/static-icons/hospital.png')} style={styles.img} />
                  </View>
                  <View style={styles.textContainer}>
                      <Text style={styles.text2}>LEELAVATI HOSPITAL</Text>
                      <Text style={styles.text3}>5.2 km far from you</Text>
                      <Text style={styles.text4}>Speciality</Text>
                      <Text style={styles.text4}>Heart, Trauma, Ortho</Text>
                  </View>

                  <View style={styles.mapcontainer}>
                      <View style={[styles.dot2, { left: scale(18) }]}></View>
                      <Pressable style={styles.imgecontainer}>
                          <Image source={require('../icon/static-icons/map.png')} style={styles.imga} />
                      </Pressable>
                  </View>
              </View>
          </ScrollView>
      </View>
  )
}

export default Hospital

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    header: {
        width: moderateScale(360),
        height: verticalScale(60),
        alignItems: 'center',
        flexDirection: 'row'
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
        fontWeight: '900',
        color: '#ffffff',
        marginLeft: moderateScale(70)
    },
    indecator: {
        width: scale(92),
        height: verticalScale(12),
        left: moderateScale(10),
        top: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    dot1: {
        width: scale(8),
        height: scale(8),
        borderRadius: scale(4),
        backgroundColor: '#99CC33'
    },
    text1: {
        fontSize: moderateScale(10),
        fontWeight: '400',
        color: '#FFFFFF',
        bottom: scale(1)
    },
    dot2: {
        width: scale(8),
        height: scale(8),
        borderRadius: scale(4),
        backgroundColor: '#D63300',
        marginLeft: moderateScale(5)
    },
    scroll: {
        marginTop: moderateScale(10)
    },
    detaisContainer: {
        width: scale(320),
        height: verticalScale(96),
        borderRadius: scale(8),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        right: moderateScale(5),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: moderateScale(20)
    },
    iconContainer: {
        width: scale(60),
        height: scale(88),
        backgroundColor: '#ffffff',
        elevation: 5,
        borderRadius: scale(5),
        alignItems: 'center',
        justifyContent: 'center',
        right: moderateScale(5)
    },
    img: {
        width: scale(40),
        height: scale(40)
    },
    textContainer: {
        flexDirection: 'column',
        right: moderateScale(20)
    },
    text2: {
        color: '#000000',
        fontSize: moderateScale(12),
        fontWeight: '600',
        marginBottom: moderateScale(25)
    },
    text3: {
        color: '#000000',
        fontSize: moderateScale(10),
        fontWeight: '500',
        bottom: moderateScale(12)
    },
    text4: {
        color: '#000000',
        fontSize: moderateScale(12),
        fontWeight: '400',
        bottom: moderateScale(12)
    },
    imge: {
        width: scale(48),
        height: scale(48),
        borderRadius: scale(20)
    },
    mapcontainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: scale(80),
    },
    imgecontainer: {
        width: scale(48),
        height: scale(48),
        borderRadius: scale(20),
        borderWidth: 1,
        borderColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: moderateScale(5)
    },
    imga: {
        height: scale(24),
        width: scale(24),
        tintColor: 'black'
    }
})