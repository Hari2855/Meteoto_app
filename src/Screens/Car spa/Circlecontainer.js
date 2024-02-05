import React, { useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const CircleContainer = ({ onHeartPress }) => {
    const [isHeartFilled, setHeartFilled] = useState(false);

    return (
        <Pressable style={styles.circle} onPress={() => {
            setHeartFilled(!isHeartFilled);
            onHeartPress(isHeartFilled);
        }}>
            {isHeartFilled ? (
                <Ionicons name='heart' color={'#FF4949'} size={20} /> // Filled heart
            ) : (
                <Ionicons name='heart-outline' color={'#FF4949'} size={20} /> // Outline heart
            )}
        </Pressable>
    );
};

export default CircleContainer;

const styles = StyleSheet.create({
    circle: {
        width: scale(32),
        height: scale(32),
        borderRadius: scale(16),
        borderWidth: 1,
        borderColor: '#FFC2AE',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: moderateScale(40)
    },
})
