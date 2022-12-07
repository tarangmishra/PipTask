import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, ActivityIndicator, Modal} from 'react-native';
import { PipColors } from '../utils/colors';
import {ScaledSheet} from 'react-native-size-matters'

const PipLoader = ({isVisible}) => {
  const {dark} = useTheme();
  const styles = useStyles(dark);

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible} >
      <View style={styles.container}>
        <View style={styles.loaderViewStyle}>
          <ActivityIndicator size={35} color={dark ? 'white' : PipColors.pure_black} />
        </View>
      </View>
    </Modal>
  );
};

function useStyles(dark) {
  return ScaledSheet.create({
    container: {
      zIndex: '30@s',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      alignSelf: 'center',
    },
    loaderViewStyle: {
      padding: '10%',
      flex: 1,
      justifyContent: 'center',
      margin: '2%',
      color: dark ? PipColors.pure_black : 'white',
      borderRadius: '10@s',
      overflow: 'hidden',
      fontFamily: 'Urbanist-Regular',
      backgroundColor: dark ? '#ffffff26' : '#00000033',
    },
  });
}

export default PipLoader;


