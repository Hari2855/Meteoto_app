import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Loadingmodel from './Loadingmodel';
import Animated, {
    useAnimatedGestureHandler,
    withSpring,
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    runOnJS,
} from 'react-native-reanimated';




const Accident = ({ navigation }) => {
    const [showLottie, setShowLottie] = useState(false)
    const [isModalVisible, setModalVisible] = useState(false);


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    
    const X = useSharedValue(0);
    const [toggled, setToggled] = useState(false);

    const handleComplete = (isToggled) => {
        if (isToggled !== toggled) {
            setToggled(isToggled);
            toggleModal();
            nav()
            if (isToggled) {
                setShowLottie(true);
            }
        }
    };

    const nav = () => {
        toggleModal()
        const timer = setTimeout(() => {
            navigation.navigate('Emerjencycall')
        }, 4000);

        return () => {
            clearTimeout(timer);
        };
    }

    const handleGestureEvent = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.completed = toggled;
        },
        onActive: (e, ctx) => {
            let newValue;
            if (ctx.completed) {
                newValue = 290 + e.translationX;
            } else {
                newValue = e.translationX;
            }
            if (newValue >= 0 && newValue <= 300) {
                X.value = newValue;
            }
        },
        onEnd: () => {
            if (X.value < 320 / 2) {
                X.value = withSpring(0);
                runOnJS(handleComplete)(false);
            } else {
                X.value = withSpring(271.5);
                runOnJS(handleComplete)(true);
            }
        },
    });

    const AnimatedStyle = {
        swipeStyle: useAnimatedStyle(() => {
            return {
                transform: [{ translateX: X.value }],
            };
        }),
        swipeText: useAnimatedStyle(() => {
            return {
                opacity: interpolate(X.value, [0, 150], [1, 0], Extrapolate.CLAMP),
                transform: [{ translateX: interpolate(X.value, [0, 150], [0, 320 / 2 - 50]) }],
            };
        }),
        overlayView: useAnimatedStyle(() => {
            return {
                width: X.value,
            };
        }),
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../icon/emergency-icons/Leftarrow.png')} style={styles.img} />
                </Pressable>
                <Text style={styles.text1}>SOS CONFIRMATION</Text>
            </View>

            <Image source={require('../icon/illustration/Sos.png')} style={styles.img1} />

            <View style={styles.textcontainer}>
                <Text style={styles.text2}>ARE YOU SURE YOU WANT TO SEND</Text>
                <Text style={styles.text3}>SOS NOTIFICATION</Text>
                <Text style={styles.text2}>TO YOUR CONTACTS!</Text>
            </View>

            <View style={styles.button}>
                <Animated.View
                    style={[
                        {
                            height: verticalScale(38),
                            width: 0,
                            backgroundColor: '#33cccc',
                            alignSelf: 'center',
                            borderWidth: 1,
                            borderColor: '#33cccc',
                            marginTop: moderateScale(150),
                            paddingLeft: moderateScale(10),
                            paddingRight: moderateScale(10),
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            position: 'absolute',
                            left: 0,
                        },
                        AnimatedStyle.overlayView,
                    ]}
                ></Animated.View>
                <PanGestureHandler onGestureEvent={handleGestureEvent}>
                    <Animated.View
                        style={[
                            {
                                width: scale(50),
                                height: scale(40),
                                backgroundColor: '#33cccc',
                                position: 'absolute',
                                left: 0,
                                alignItems: 'center',
                                borderRadius: moderateScale(1),
                                justifyContent: 'center',
                            },
                            AnimatedStyle.swipeStyle,
                        ]}
                    >
                        <Image source={require('../icon/imges/Arr1.png')} style={styles.img2} />
                    </Animated.View>
                </PanGestureHandler>
                <Animated.Text style={[styles.text4, AnimatedStyle.swipeText]}>SWIPE TO CONFIRM</Animated.Text>
                <Loadingmodel isVisible={isModalVisible} navigation={navigation}/>
            </View>
        </View>
    );
};

export default Accident;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    header: {
        width: '100%',
        height: moderateScale(60),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text1: {
        color: '#FF9966',
        fontSize: moderateScale(16),
        fontWeight: '500',
        marginLeft: moderateScale(80),
    },
    img: {
        height: scale(30),
        width: scale(30),
        tintColor: '#ffffff',
        left: moderateScale(20),
    },
    img1: {
        width: scale(220),
        height: scale(148),
        alignSelf: 'center',
        top: moderateScale(60),
    },
    textcontainer: {
        width: scale(281),
        height: scale(84),
        alignSelf: 'center',
        marginTop: moderateScale(200),
        flexDirection: 'column',
        alignItems: 'center',
    },
    text2: {
        color: '#ffffff',
        fontSize: moderateScale(17),
        fontWeight: '400',
    },
    text3: {
        fontSize: moderateScale(24),
        color: '#FF9966',
        fontWeight: '500',
    },
    button: {
        height: verticalScale(40),
        width: moderateScale(320),
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#33cccc',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(150),
        paddingLeft: moderateScale(10),
        paddingRight: moderateScale(10),
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    img2: {
        height: scale(24),
        width: scale(24),
    },
    text4: {
        color: '#33cccc',
        alignSelf: 'center',
    },
});
