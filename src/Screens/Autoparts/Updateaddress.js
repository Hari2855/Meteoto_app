import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image, ScrollView, TextInput, } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import { SelectList } from 'react-native-dropdown-select-list'
import Popup from './Popup'

const Updateaddress = ({navigation}) => {
    const [selected, setSelected] = useState("");
    const [popupVisible, setPopupVisible] = useState(false);

    const showPopup = () => {
        navigation.navigate('Address1')
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    const data = [
        { key: '1', value: 'Bhopal',},
        { key: '2', value: 'Indore(comming soon)', disabled: true },
        { key: '3', value: 'Gwalior(comming soon', disabled: true },
        { key: '4', value: 'Jabalpur(comming soon)', disabled: true },
    ]


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.icons} onPress={() => navigation.navigate('Address1')}>
                    <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.imges} />
                </Pressable>

                <Text style={styles.TEXT}>AUTOPARTS</Text>
            </View>
            <Text style={styles.Text1}>UPDATE ADDRESS</Text>

            <View style={styles.blockcontainer}>
                <Text style={styles.Text2}>House/ Flat/ Block No.</Text>
                <TextInput style={styles.input} placeholder='LIG-65' placeholderTextColor={"#B8B8B8"}></TextInput>
            </View>

            <View style={styles.blockcontainer}>
                <Text style={styles.Text2}>Apartment/ Road/ Area</Text>
                <TextInput style={styles.input} placeholder='Shahpura, Street-2' placeholderTextColor={"#B8B8B8"}></TextInput>
            </View>
            <View style={styles.blockcontainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.Text2}>Pincode</Text>
                    <Text style={[styles.Text2, { marginLeft: moderateScale(40) }]}>City</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={[styles.input, { width: scale(80) }]} placeholder='462100' placeholderTextColor={"#B8B8B8"}></TextInput>
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={data}
                        save="value"
                        boxStyles={{backgroundColor: '#ffffff', borderWidth: 0, height: scale(48), marginTop: moderateScale(15), marginLeft: moderateScale(15), width: moderateScale(224)}}
                        dropdownStyles={{backgroundColor: '#ffffff', width: moderateScale(224), marginLeft: moderateScale(15)}}
                        inputStyles={{color: '#333333', fontWeight: '400'}}
                        dropdownTextStyles={{color: '#333333'}}
                    />
                </View>
            </View>
            <Pressable style={styles.button} onPress={showPopup}>
                <Text style={styles.Text3}>SAVE CHANGES</Text>
            </Pressable>
            <Popup isVisible={popupVisible} onClose={closePopup} />
        </View>
    )
}

export default Updateaddress

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
    Text1: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#cccccc',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(10)
    },
    blockcontainer: {
        width: moderateScale(320),
        height: verticalScale(84),
        // borderWidth: 1,
        // borderColor: '#7a42c4',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20)
    },
    Text2: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: '#ffffff'
    },
    input: {
        width: moderateScale(320),
        height: verticalScale(48),
        borderRadius: moderateScale(10),
        backgroundColor: '#ffffff',
        marginTop: moderateScale(15),
        paddingLeft: scale(15),
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        marginLeft: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(220)
    },
    Text3: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    }
})