import React, { useCallback, useEffect } from 'react'
import { View, Image, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { PipText } from '../../components'
import { useTranslation } from 'react-i18next';
import useStyles from './style'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const { width } = Dimensions.get('window');
const HomeScreen = () => {
    const styles = useStyles(width);
    const { t, i18n } = useTranslation();
    const images = [img1, img2, img3, img4];

    const setLanguage = useCallback(
        language => {
            i18n.changeLanguage(language).catch(err => console.log(err));
        },
        [i18n],
    );
    useEffect(() => {
        setLanguage('en')
    }, [setLanguage, 'en']);

    const skipFunction = () => {

    }
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <SwiperFlatList
                    paginationStyle={styles.pagination}
                    showPagination
                    data={images}
                    paginationActiveColor='red'
                    renderItem={({ item, index }) => (
                        <View>
                            <Image style={styles.imageStyle} source={item} />
                            <PipText orgStyle={styles.pentair} title="PENTAIR" />
                            <PipText orgStyle={styles.orgStyle} title="TAKE CONTROL OF YOUR HOME'S WATER" />
                            <PipText orgStyle={styles.marksStyle} title="Stay smart, connected and protected" />
                        </View>
                    )}
                />
            </View>
            <TouchableWithoutFeedback onPress={() => { skipFunction() }}>
                <View style={styles.secondContainer}>
                    <PipText titleStyle={styles.skipText} title={t('pentair.deviceOffline')} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}
export default HomeScreen;
