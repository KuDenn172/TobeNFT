import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { MainContainer } from '../../components';
import { BORDER, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { ButtonCustom, InputCustom } from '../../CustomComponent';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';

const Contact = ({ navigation }) => {
    return (
        <MainContainer borderBackground>
            <View style={styles.wrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={styles.back} />
                </TouchableOpacity>
                <Text style={styles.title}>CONTACT US</Text>

                <View style={styles.form}>
                    <View style={styles.formName}>
                        <View style={{ ...styles.formGroup, width: 146 * WIDTH.widthScale }}>
                            <Text style={styles.label}>Fist name*</Text>
                            <InputCustom placeholderColor="#536981" style={styles.input} placeholder="Fist name" />
                        </View>
                        <View style={{ ...styles.formGroup, width: 146 * WIDTH.widthScale }}>
                            <Text style={styles.label}>Last name*</Text>
                            <InputCustom placeholderColor="#536981" style={styles.input} placeholder="Last name" />
                        </View>
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Email*</Text>
                        <InputCustom placeholderColor="#536981" style={styles.input} placeholder="Email" />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Phone*</Text>
                        <InputCustom placeholderColor="#536981" style={styles.input} placeholder="Phone" />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Title*</Text>
                        <InputCustom placeholderColor="#536981" style={styles.input} placeholder="Title" />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Content*</Text>
                        <InputCustom
                            placeholderColor="#536981"
                            style={{ ...styles.input, height: 70 * WIDTH.widthScale }}
                            numberOfLines={4}
                            multiline
                            placeholder="Content"
                        />
                    </View>

                    <ButtonCustom
                        text="Submit"
                        buttonStyle={styles.button}
                        buttonStyleText={styles.buttonText}
                        backgroundLinearGradient={['#800966', '#F61173']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    />
                </View>

                <Image source={images.contact} style={styles.imgFooter} />
            </View>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    wrapper: { flex: 1, },
    back: {
        margin: 8,
        padding: 8,
    },
    title: {
        ...TEXTS.textBold,
        fontSize: SIZES.xLarge,
        textAlign: 'center',
    },
    form: {
        alignItems: 'center',
        width: WIDTH.width82,
        rowGap: 7,
    },
    formName: {
        flexDirection: 'row',
        width: 318,
        justifyContent: 'space-between',
    },
    formGroup: {},
    label: {
        ...TEXTS.textRegular,
        fontSize: SIZES.xSmall,
        marginBottom: 3,
        marginLeft: 5,
    },
    input: {
        width: 318,
        height: 24,
        backgroundColor: '#fff',
        ...BORDER,
        borderColor: '#EAEAEA',
        borderRadius: 22,
        color: '#536981',
    },
    button: {
        width: 82,
        height: 24,
        borderWidth: 0,
        marginTop: 3,
    },
    buttonText: {
        ...TEXTS.textBold,
        fontSize: SIZES.xSmall,
    },
    imgFooter: {
        alignSelf: 'center',
        marginTop: 5,
        height: 133,
        width: 211,
    },
});
useMultiplyWidthScale(styles);
export default Contact;
