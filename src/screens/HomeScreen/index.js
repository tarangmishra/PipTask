import React, { useCallback, useEffect, useState, useRef } from 'react'
import { View, Image, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { PipButton, PipText } from '../../components'
import { useTranslation } from 'react-i18next';
import useStyles from './style'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const HomeScreen = () => {
    const styles = useStyles(width);
    const { t, i18n } = useTranslation();
    const images = [img1, img2, img3, img4];
    const [currIndex, setCurrIndex] = useState(0)
    const [pageIndex, setPageIndex] = useState(0)
    const navigation = useNavigation();
    const swiper = useRef(null)

    const setLanguage = useCallback(
        language => {
            i18n.changeLanguage(language).catch(err => console.log(err));
        },
        [i18n]
    );
    useEffect(() => {
        setLanguage('en')
    }, [setLanguage, 'en']);

    const skipFunction = () => {
        setCurrIndex(currIndex + 1)
        swiper.current.scrollTo(currIndex, true);
    }
    const particularImageSelected = (item, index) => {
        console.log("item  = ", item + " index = ", index)
        setPageIndex(index)
    }
    const FouthSlide = (item) => {
        return (
            <View>
                <Image style={styles.imageStyle} source={item} />
                <PipText orgStyle={styles.pentair} title={t('pentair.deviceOffline')} />
                <PipText orgStyle={styles.orgStyle} title="Worry a lot less, enjoy a lot more" />
                <PipText orgStyle={styles.marksStyle} title="Peace of mind at your fingertips" />
                <PipButton onPress={() => { navigation.navigate('EmailScreen') }} btnStyle={styles.btnStyle} title={"Continue"} />
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Swiper showsPagination={true}
                    paginationStyle={styles.pagination}
                    ref={swiper}
                    loop={false}
                    index={currIndex}
                    onIndexChanged={(index) => {
                        let item = images[index]
                        particularImageSelected(item, index)
                    }}>
                    {images.map((item, index) => (
                        <>
                            {pageIndex === 0 ?
                                <View>
                                    <Image style={styles.imageStyle} source={item} />
                                    <PipText orgStyle={styles.pentair} title="PENTAIR" />
                                    <PipText orgStyle={styles.orgStyle} title="Take control of your home's water" />
                                    <PipText orgStyle={styles.marksStyle} title="Stay smart, connected and protected" />
                                </View>
                                : pageIndex === 1 ?
                                    <View>
                                        <Image style={styles.imageStyle} source={item} />
                                        <PipText orgStyle={styles.pentair} title="PENTAIR" />
                                        <PipText orgStyle={styles.orgStyle} title="Manage systems on the go." />
                                        <PipText orgStyle={styles.marksStyle} title="Get status information, home or away, 24/7" />
                                    </View> : pageIndex === 2 ?
                                        <View>
                                            <Image style={styles.imageStyle} source={item} />
                                            <PipText orgStyle={styles.pentair} title="PENTAIR" />
                                            <PipText orgStyle={styles.orgStyle} title="We'll let you know what to do, when." />
                                            <PipText orgStyle={styles.marksStyle} title="Receive alerts sent in your phone- and if you choose-your trusted pros" />
                                        </View> : pageIndex === 3 ?
                                            FouthSlide(item) : null
                            }
                        </>
                    ))}
                </Swiper>
            </View>
            {(pageIndex != 3) ?
                <TouchableWithoutFeedback onPress={() => { skipFunction() }}>
                    <View style={styles.secondContainer}>
                        <PipText titleStyle={styles.skipText}>{t('deviceOffline')}</PipText>
                    </View>
                </TouchableWithoutFeedback> : null}

        </View>
    )
}
export default HomeScreen;
