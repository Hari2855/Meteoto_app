import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';

const GlassImageContainer = ({ imgSource, labelText }) => {
    const [isCheckVisible, setCheckVisible] = useState(false);

    const toggleCheckVisibility = () => {
        setCheckVisible(!isCheckVisible);
    };

    return (
        <View style={styles.imgContainer}>
            <Pressable onPress={toggleCheckVisibility}>
                <Image source={imgSource} style={styles.img1} />
                <Text style={styles.Text4}>{labelText}</Text>
            </Pressable>
            {isCheckVisible && (
                <Feather name='check' color={'red'} size={24} style={styles.checkImg} />
            )}
        </View>
    );
};

export default GlassImageContainer;

const styles = StyleSheet.create({
    imgContainer: {
        height: verticalScale(152),
        width: moderateScale(152),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        alignItems: 'center',
    },
    img1: {
        width: moderateScale(136),
        height: verticalScale(88),
        borderWidth: 1,
        borderColor: '#dadada',
        marginTop: moderateScale(5),
        borderRadius: moderateScale(10),
    },
    Text4: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#333333',
        marginTop: moderateScale(20),
    },
    checkImg: {
        width: moderateScale(24),
        height: moderateScale(24),
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
});
