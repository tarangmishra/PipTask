import React from 'react'
import { View, Text ,Image, Dimensions } from 'react-native'
import { PipText, PipButton } from '../../components'
import useStyles from './style'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const { width} = Dimensions.get('window');
const HomeScreen = () => {
    const styles = useStyles(width);
    const images = [img1, img2, img3, img4];
    return (
        <View style={styles.container}>
            <SwiperFlatList
                showPagination
                data={images}
                renderItem={({ item }) => (
                    <View >
                        <Image style={styles.imageStyle} source={item} />
                    </View>
                )}
            />
        </View>
    )
}
export default HomeScreen;
