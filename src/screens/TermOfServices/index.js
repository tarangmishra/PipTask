import React, { useState } from 'react'
import { View, FlatList, KeyboardAvoidingView } from 'react-native'
import { PipText,  } from '../../components'
import useStyles from './style'
import { FormInputPasswordField } from '../../../src/components/form'
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native'
import { i18n } from 'react-native-i18n-localize'
import { SignUpFormSchema } from '../../constants/formSchemas/SignUpFormSchema'
import { ErrorMessage } from '@hookform/error-message';
import { useRoute } from '@react-navigation/native'


const TermOfServices = () => {
    const styles = useStyles();
    const route = useRoute();
    const navigation = useNavigation();
    const { control, formState: { errors }, handleSubmit } = useForm();
    const [value, setValue] = useState('');
    const submit = () => {
        
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={{padding: "2%"}}>
                <PipText title={i18n.t('translation.Pentair')} orgStyle={styles.titleStyle} />
                <PipText title={i18n.t('translation.Accept')} orgStyle={styles.cancelTitle} />
            </View>
            <View style={styles.line} />
            <PipText title={i18n.t('translation.TileTesrmServices')} orgStyle={styles.welcomestyle} />
            <PipText title={i18n.t('translation.TermOfServices')} orgStyle={styles.hintStyle} />
            <PipText title={i18n.t('translation.TermOfServices2')} orgStyle={styles.hintStyleServices} />
           
        </KeyboardAvoidingView>
    );
}
export default TermOfServices;
