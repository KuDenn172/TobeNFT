import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { MainContainer } from '../../components';
import { IconDeposit, IconTransfer, IconWithdraw, LogoOnly, MultiHexagon } from '../../assets/imageSvg/ImageSVG';
import { BORDER, COLORS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { ButtonCustom } from '../../CustomComponent';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';
import { useLanguage } from '../../contexts/LanguageContext';

const listDataPost = [
    {
        name: 'titleNFTVirtualMachine',
        description: 'nftDescription',
        img: images.to_earn02,
    },
    {
        name: 'titleNFTCard',
        description: 'nftDescription',
        img: images.to_earn01,
    },
    {
        name: 'titleNFTCard',
        description: 'nftDescription',
        img: images.to_earn01,
    },
];

const HomeWallet = ({ navigation }) => {
    const { t } = useLanguage();
    return (
        <MainContainer>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <MultiHexagon />
                        <View style={{ alignItems: 'center', position: 'absolute' }}>
                            <LogoOnly />
                            <Text style={{ ...TEXTS.textBold, fontSize: SIZES.xxLarge }}>1 986 086.06</Text>
                            <Text style={{ ...TEXTS.textRegular, fontSize: SIZES.small }}>
                                {t('available')} ~ <Text style={{ ...TEXTS.textMedium }}>$6900</Text>
                            </Text>
                            <ButtonCustom
                                text={t('detailBalance')}
                                backgroundColorBtn="#FFFFFF33"
                                onPress={() => navigation.navigate('Account')}
                                buttonStyle={styles.button}
                                buttonStyleText={{
                                    ...TEXTS.textRegular,
                                    fontSize: SIZES.small,
                                }}
                                rightIcon={
                                    <LinearGradient
                                        colors={['#FFFFFF33', '#DDDDDD33', COLORS.bodyTransp, '#FFFFFF33']}
                                        locations={[0.3392, 0.9986]}
                                        angle={295.36}
                                        style={styles.iconContinue}
                                    >
                                        <Image source={icons.continueicon} />
                                    </LinearGradient>
                                }
                            />
                        </View>
                    </View>
                    <View style={styles.actionContainer}>
                        <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('Deposit')}>
                            <LinearGradient colors={[COLORS.primary, '#7D0D6A']} style={styles.actionIcon}>
                                <IconDeposit />
                            </LinearGradient>
                            <Text style={styles.actionText}>{t('titleActionDeposit')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('WithDraw')}>
                            <LinearGradient colors={[COLORS.primary, '#7D0D6A']} style={styles.actionIcon}>
                                <IconWithdraw />
                            </LinearGradient>
                            <Text style={styles.actionText}>{t('titleWithdraw')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('Transfer')}>
                            <LinearGradient colors={[COLORS.primary, '#7D0D6A']} style={styles.actionIcon}>
                                <IconTransfer />
                            </LinearGradient>
                            <Text style={styles.actionText}>{t('titleTransfer')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 30 * WIDTH.widthScale }}>
                    <Image source={images.Shutterstock} style={styles.img} />
                    <View style={{ padding: SIZES.medium, position: 'absolute' }}>
                        <Text style={{ ...TEXTS.textMedium, fontSize: SIZES.xLarge }}>
                            {t('claim')} {'\n'}
                            <Text style={{ ...TEXTS.textBold, fontSize: SIZES.xxLarge }}>500 token</Text> {'\n'}
                            {t('itFree')}
                        </Text>

                        <ButtonCustom
                            text={[t('btnEarningNow')]}
                            buttonStyle={styles.buttonStart}
                            onPress={() => navigation.navigate('EstateNFTs')}
                        />
                    </View>
                </View>

                <View style={styles.share}>
                    <Text style={{ ...TEXTS.textMedium, fontSize: SIZES.medium, flex: 1 }}>{t('shareLink')}</Text>
                    <ButtonCustom
                        text={t('btnGetNow')}
                        onPress={() => navigation.navigate('ShareLink')}
                        backgroundLinearGradient={['#FFFFFF33', '#FFFFFF00']}
                        buttonStyle={{ ...styles.button, marginTop: 0, height: 30 * WIDTH.widthScale }}
                        buttonStyleText={{
                            fontSize: SIZES.xMedium,
                            ...TEXTS.textRegular,
                        }}
                        containerStyle={{ flex: 0.5 }}
                        rightIcon={
                            <LinearGradient
                                colors={['#FFFFFF33', '#FFFFFF00', COLORS.bodyTransp, '#FFFFFF33']}
                                style={{
                                    ...styles.iconContinue,
                                    height: 30 * WIDTH.widthScale,
                                    width: 30 * WIDTH.widthScale,
                                }}
                                locations={[0.3392, 0.9986]}
                            >
                                <Image source={icons.continueicon} />
                            </LinearGradient>
                        }
                    />
                </View>

                <View style={styles.marKetplace}>
                    <Image source={images.freepik} style={styles.img} />
                    <View style={{ padding: SIZES.medium, position: 'absolute', alignItems: 'center' }}>
                        <Text style={{ ...TEXTS.textBold, fontSize: SIZES.large }}>{t('titleNFTMarketplace')}</Text>
                        <ButtonCustom
                            text={t('gotoShop')}
                            onPress={() => navigation.navigate('NFT')}
                            backgroundColorBtn="#FFFFFF33"
                            buttonStyle={styles.buttonShop}
                            buttonStyleText={{ ...TEXTS.textRegular }}
                        />
                    </View>
                </View>

                <FlatList
                    data={listDataPost}
                    contentContainerStyle={styles.postContainer}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('MyNFT')}
                            style={{ alignSelf: 'flex-end' }}
                        >
                            <LinearGradient
                                colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                locations={[0.3392, 0.9986]}
                                angle={295.36}
                                style={styles.postNFT}
                            >
                                <Image source={item.img} style={{ ...styles.postImage }} />
                                <View style={styles.postTextContent}>
                                    <Text style={styles.postTitle} numberOfLines={2}>
                                        {t(item.name)}
                                    </Text>
                                    <Text style={styles.postText} numberOfLines={4}>
                                        {t(item.description)}
                                    </Text>
                                </View>

                                <LinearGradient
                                    colors={['#FFFFFF33', '#FFFFFF00', COLORS.bodyTransp, '#FFFFFF33']}
                                    locations={[0.3392, 0.9986]}
                                    angle={295.36}
                                    style={{
                                        ...styles.iconContinue,
                                        bottom: 7 * WIDTH.widthScale,
                                        right: 7 * WIDTH.widthScale,
                                    }}
                                >
                                    <Image source={icons.continueicon} />
                                </LinearGradient>
                            </LinearGradient>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </MainContainer>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        height: 376,
    },
    actionIcon: {
        width: 48,
        height: 48,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        ...BORDER,
        borderColor: '#FFFFFF29',
    },
    iconContinue: {
        width: 26,
        height: 26,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
    },
    button: {
        height: 26,
        width: 117,
        paddingRight: 27,
        paddingHorizontal: 0,
        marginTop: SIZES.xSmall,
    },
    buttonStart: {
        minWidth: 176,
        width:"auto",
        paddingHorizontal: 15,
        height: 39,
        marginTop: SIZES.xSmall,
    },
    buttonShop: {
        width: 133,
        height: 30,
        marginTop: 5,
    },

    actionContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: -5,
        columnGap: 53,
    },
    action: {
        alignItems: 'center',
    },
    actionText: {
        ...TEXTS.textRegular,
        fontSize: SIZES.medium,
        marginTop: 7,
    },
    marKetplace: {
        marginTop: 22,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 337,
        height: 183,
    },
    share: {
        marginTop: SIZES.xLarge,
        backgroundColor: '#08021C80',
        minHeight: 79,
        width: 337,
        borderRadius: 11,
        flexDirection: 'row',
        elevation: 1,
        paddingHorizontal: SIZES.small,
        alignItems: 'center',
    },
    postContainer: {
        marginTop: SIZES.medium,
        columnGap: 22,
        marginBottom: SIZES.large,
        height: 217,
        paddingHorizontal: SIZES.large,
    },
    postNFT: {
        ...BORDER,
        borderWidth: 2,
        borderRadius: 18,
        width: 153,
        height: 177,
        position: 'relative',
    },
    postImage: {
        position: 'absolute',
        top: -40,
        right: -8,

        width: 103,
        height: 104,
    },
    postTextContent: {
        paddingLeft: 13,
        paddingRight: 7,
        paddingBottom: 7,
        marginTop: 'auto',
        // flex: 1,
        // justifyContent: 'flex-end',
    },
    postText: {
        ...TEXTS.textRegular,
        fontSize: SIZES.xSmall,
        width: 99,
    },
    postTitle: {
        ...TEXTS.textBold,
        width: 89,
        marginBottom: 5,
    },
});

useMultiplyWidthScale(styles);
export default HomeWallet;
