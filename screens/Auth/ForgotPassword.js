import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';

import { COLORS, FONTS, SIZES, WIDTH, icons, images } from '../../constants';
import { InputCustom, ButtonCustom } from '../../CustomComponent';

const { width, height } = Dimensions.get('window');

const ForgotPassword = (props) => {
    const [email, setEmail] = useState('');
    return (
        <ImageBackground source={images.signup} style={styles.wrapper} resizeMode="stretch">
            <View style={styles.logo}>
                <Image source={icons.logoLogin} />
            </View>
            <Text style={styles.title}>Forgot password</Text>
            <View style={styles.form}>
                <View style={styles.formGroup}>
                    <InputCustom
                        style={styles.input}
                        placeholder="Email address"
                        keyboardType="email-address"
                        value={email}
                        autoCapitalize="none"
                        onChangeText={setEmail}
                        placeholderTextColor="#fff"
                    />
                </View>
                <ButtonCustom buttonStyle={{ marginTop: 10 }} text="Submit" />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 20,
    },
    logo: {
        marginTop: 80,
        // marginTop: 36,
    },
    title: {
        color: COLORS.white,
        fontSize: SIZES.xLarge,
        fontWeight: 600,
        fontFamily: FONTS.medium,
    },
    form: {
        alignItems: 'center',
        marginTop: 82,
    },
    formGroup: {
        marginBottom: 13,
        justifyContent: 'center',
        width: WIDTH.width100,
    },
});

export default ForgotPassword;
