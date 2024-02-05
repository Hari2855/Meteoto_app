import React, { useState } from 'react'
import { View, Text, StyleSheet, Image,TextInput, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import CancelModel from './Cancelmodel'
import DocumentPicker from 'react-native-document-picker'
import Filemodel from './filemodel'
import ChangesSaved from '../../ChangesSaved'

const Mycarform = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible1, setModalVisible1] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleCancelSearch = () => {
        toggleModal();
        navigation.navigate('Addcar')
    };

    const toggleModal1 = () => {
        setModalVisible1(!isModalVisible1);
    };

    const toggleModal2 = () => {
        setModalVisible2(!isModalVisible2);
    };

    const nextpage = () => {
        navigation.navigate('Caradded')
        toggleModal2()
    }

    const selectdocument = async () => {
       try {
           const doc = await DocumentPicker.pickSingle({type: [DocumentPicker.types.pdf]});
           console.log(doc)
       } catch (error) {
        if (DocumentPicker.isCancel(error)) {
            console.log('User cancel the upload', error);
        }
        else {
            console.log(error);
        }
        
       }
    }
  return (
    <View style={styles.container}>
          <View style={styles.header}>
              <Pressable onPress={toggleModal}>
                  <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={{ height: scale(16), width: scale(24), tintColor: '#ffffff', marginLeft: moderateScale(30) }} />
              </Pressable>
              <CancelModel isVisible={isModalVisible}
                  onCancel={toggleModal}
                  onConfirm={handleCancelSearch}
                  navigation={navigation}
              />

              <Text style={styles.text1}>MY CARS</Text>
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
                  <Pressable style={styles.edit} onPress={() => navigation.navigate('Addcar')}>
                      <Image source={require('../icon/imges/Vector.png')} style={styles.img} />
                  </Pressable>
              </View>
          </View>

          <View style={styles.line1}></View>

          <Text style={styles.text3}>Owner Full Name</Text>
          <TextInput style={styles.input} placeholder='Enter your name' placeholderTextColor={'#B8B8B8'} fontSize={moderateScale(12)}></TextInput>

          <Text style={styles.text3}>Card Number</Text>
          <TextInput style={styles.input} placeholder='MP04 SA 9XXX' placeholderTextColor={'#B8B8B8'} fontSize={moderateScale(12)}></TextInput>

          <Text style={styles.text3}>Model Year</Text>
          <TextInput style={styles.input} placeholder='2000' placeholderTextColor={'#B8B8B8'} fontSize={moderateScale(12)} inputMode='numeric'></TextInput>

          <Text style={styles.text3}>Upload<Text style={[styles.text3, { fontSize: moderateScale(12), color: '#cacaca'}]}> (optional)</Text></Text>
          <Pressable style={styles.card}>
            <Image source={require('../icon/imges/Plus.png')} style={{height: scale(24), width: scale(24)}}/>
              <Text style={[styles.Text2, {fontWeight: '500', color: '#ffffff', marginLeft: moderateScale(10)}]}>Registration Card</Text>
          </Pressable>
          <Filemodel isVisible={isModalVisible1}  navigation={navigation} />

          <Pressable style={styles.button} onPress={() => {return nextpage(), toggleModal2()}}>
            <Text style={styles.text2}>SAVE MY CAR</Text>
          </Pressable>
          <ChangesSaved isVisible={isModalVisible2} navigation={navigation} />
    </View>
  )
}

export default Mycarform

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    header: {
        flexDirection: 'row',
        height: verticalScale(60),
        backgroundColor: '#333333',
        alignItems: 'center',
    },
    text1: {
        color: '#ffffff',
        fontSize: moderateScale(12),
        fontWeight: '500',
        marginLeft: moderateScale(100),
        marginBottom: moderateScale(5)
    },
    cardetails: {
        width: moderateScale(320),
        height: verticalScale(88),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
    },
    details: {
        width: moderateScale(306),
        height: verticalScale(60),
        // alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: moderateScale(10)
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
    line1: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#969696',
        marginTop: moderateScale(20)
    },
    text3: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20)
    },
    input: {
        width: moderateScale(320),
        height: verticalScale(48),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        borderRadius: moderateScale(8),
        paddingLeft: moderateScale(20)
    },
    card: {
        width: moderateScale(168),
        height: verticalScale(48),
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: moderateScale(5),
        marginLeft: moderateScale(20),
        marginTop: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(60)
    },
    text2: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    }
})