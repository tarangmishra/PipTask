import React, { useState } from 'react';
import {
    Button,
    Image, Modal, Text, View
} from 'react-native';
import { PipColors } from '../utils/colors';
import { ScaledSheet } from 'react-native-size-matters'
import success from '../images/accept.png'
import { i18n } from 'react-native-i18n-localize'

const PipModal = ({ modalVisible }) => {
    // const [modalVisible, setModalVisible] = useState(false);
    const styles = useStyles();
    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <>
                <View style={styles.centeredView}>

                    <Image style={styles.imageStyle} source={success} />
                    <Text style={styles.modalText}>{i18n.t('translation.PasswordChanged')}</Text>
                    <Text style={styles.passwordSuccessText}>{i18n.t('translation.PasswordChangeSuccess')}</Text>
                    <Button onPress={()=>{!modalVisible}} title='Continue' style={styles.button} />

                </View>
            </>
        </Modal>
    );
};

function useStyles() {
    return ScaledSheet.create({
        centeredView: {
            position: 'absolute',
            flex: 1,
            width: '100%',
            height: '35%',
            backgroundColor: "white",
            bottom: 0,
            padding: '35@s',
            borderTopLeftRadius: '35@s',
            borderTopRightRadius: '25@s',
            shadowColor: "#000",
            shadowOpacity: '0.25@s',
            shadowRadius: '4@s',
            elevation: '5@s'
        },
        imageStyle: {
            width: '25%',
            height: '25%',
            alignSelf: 'center'
        },
        modalText: {
            marginTop: '12@s',
            textAlign: "center",
            fontSize: '18@s'
        },
        passwordSuccessText: {
            marginTop: '10@s',
            textAlign: "center",
            fontSize: '13@s'
        },
        button: {
            position: 'absolute',
            bottom: 0,
            backgroundColor: PipColors.pipbuttonColor,
            borderRadius: '15@s',
            marginTop: '3%'
        }
    });
}

export default PipModal;
