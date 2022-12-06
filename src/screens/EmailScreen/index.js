import React from 'react'
import { View } from 'react-native'
import { PipButton, PipText } from '../../components'
import useStyles from './style'
import { FormInputEmailField } from '../../../src/components/form'
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native'
import { i18n } from 'react-native-i18n-localize'
import {SignUpFormSchema} from '../../constants/formSchemas/SignUpFormSchema'

const EmailScreen = () => {
    const styles = useStyles();
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();
    const onSubmit = async form => {
        console.log("form ", form.Name)
        navigation.navigate('LoginScreen', {email: form.Name})
    }
    return (
        <View style={styles.container}>
            <PipText title={i18n.t('translation.Pentair')} orgStyle={styles.titleStyle} />
            <View style={styles.line} />
            <PipText title={i18n.t('translation.Welcome')}  orgStyle={styles.welcomestyle} />
            <PipText title={i18n.t('translation.WelcomeHint')} orgStyle={styles.hintStyle} />
            <FormInputEmailField
                title={SignUpFormSchema.email.title}
                control={control}
                name={"Name"}
                rules={"Rules"} 
                placeHolder={SignUpFormSchema.email.title}/>
            <PipButton onPress={handleSubmit(onSubmit)} title={"Get Started"} btnStyle={styles.bottomView} />
        </View>
    );
}
export default EmailScreen;
