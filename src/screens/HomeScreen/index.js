import React, { useState, useRef } from 'react'
import { View, Image, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { PipButton, PipText } from '../../components'
import useStyles from './style'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native';
import { i18n } from 'react-native-i18n-localize'

const { width } = Dimensions.get('window');
const HomeScreen = () => {
    const styles = useStyles(width);
    const images = [img1, img2, img3, img4];
    const [currIndex, setCurrIndex] = useState(0)
    const [pageIndex, setPageIndex] = useState(0)
    const navigation = useNavigation();
    const swiper = useRef(null)

    const skipFunction = () => {
        setCurrIndex(currIndex + 1)
        swiper.current.scrollTo(currIndex, true);
    }
    const particularImageSelected = (item, index) => {
        setPageIndex(index)
    }
    const FouthSlide = (item) => {
        return (
            <View style={{flex:1}}>
                <Image style={styles.imageStyle} source={item} />
                <PipText orgStyle={styles.pentair} title={i18n.t('translation.Pentair')} />
                <PipText orgStyle={styles.orgStyle} title={i18n.t('translation.Enjoy')} />
                <PipText orgStyle={styles.marksStyle} title={i18n.t('translation.Peace')} />
                <PipButton onPress={() => { navigation.navigate('EmailScreen') }} btnStyle={styles.btnStyle} title={"Continue"} />
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Swiper showsPagination={pageIndex===3?false:true}
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
                                <View style={{flex:1}}>
                                    <Image style={styles.imageStyle} source={item} />
                                    <PipText orgStyle={styles.pentair} title={i18n.t('translation.Pentair')} />
                                    <PipText orgStyle={styles.orgStyle} title={i18n.t('translation.Water')} />
                                    <PipText orgStyle={styles.marksStyle} title={i18n.t('translation.Smart')} />
                                </View>
                                : pageIndex === 1 ?
                                    <View style={{flex:1}}>
                                        <Image style={styles.imageStyle} source={item} />
                                        <PipText orgStyle={styles.pentair} title={i18n.t('translation.Pentair')} />
                                        <PipText orgStyle={styles.orgStyle} title={i18n.t('translation.ManageSystem')} />
                                        <PipText orgStyle={styles.marksStyle} title={i18n.t('translation.Status')} />
                                    </View> : pageIndex === 2 ?
                                        <View style={{flex:1}}>
                                            <Image style={styles.imageStyle} source={item} />
                                            <PipText orgStyle={styles.pentair} title={i18n.t('translation.Pentair')} />
                                            <PipText orgStyle={styles.orgStyle} title={i18n.t('translation.Todo')} />
                                            <PipText orgStyle={styles.marksStyle} title={i18n.t('translation.Receive')} />
                                        </View> : pageIndex === 3 ?
                                            FouthSlide(item) : null
                            }
                        </>
                    ))}
                </Swiper>
            </View>
            {(pageIndex != 3) ?
                <TouchableWithoutFeedback onPress={() => { skipFunction() }}>
                    <View >
                        <PipText title={i18n.t('translation.Skip')} orgStyle={styles.skipText}></PipText>
                    </View>
                </TouchableWithoutFeedback> : null}

        </View>
    )
}
export default HomeScreen;
