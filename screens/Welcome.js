import React, { useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';

import { SIZES, WIDTH, images } from '../constants';
import Logo from '../assets/imageSvg/ImageSVG';

const Welcome = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const welcome = setTimeout(() => {
            navigation.dispatch(StackActions.replace('AuthNavigator'));
            // navigation.navigate('AuthNavigator');
        }, 2000);

        return () => {
            clearTimeout(welcome);
        };
    }, [navigation]);

    return (
        <ImageBackground style={styles.wrapper} source={images.banner} resizeMode="stretch">
            <View style={styles.logo}>
                <Logo />
            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: SIZES.large,
    },
    logo: {
        marginTop: 204 * WIDTH.widthScale,
    },
});
export default Welcome;
