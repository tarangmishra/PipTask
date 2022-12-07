import React, { useCallback, useState } from 'react'
import { View, KeyboardAvoidingView } from 'react-native'
import { PipButton, PipText } from '../../components'
import useStyles from './style'
import { FormInputEmailField, FormInputPasswordField } from '../../../src/components/form'
import { useForm } from 'react-hook-form';
import { useRoute } from '@react-navigation/native'
import { i18n } from 'react-native-i18n-localize'
import { SignUpFormSchema } from '../../constants/formSchemas/SignUpFormSchema';
import { ErrorMessage } from '@hookform/error-message';

const LoginScreen = (props) => {
    const styles = useStyles();
    const route = useRoute();
    const { control, formState: { errors }, handleSubmit } = useForm();

    const SignIn = async form => {
        { console.log("props ", form.password) }
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <PipText title={i18n.t('translation.Pentair')} orgStyle={styles.titleStyle} />
            <View style={styles.line} />
            <PipText title={i18n.t('translation.AlreadyAccount')} orgStyle={styles.welcomestyle} />
            <PipText title={i18n.t('translation.Signin')} orgStyle={styles.hintStyle} />
            <FormInputEmailField
                title={SignUpFormSchema.email.title}
                editable={false}
                control={control}
                inputStyle={styles.disbaleTextInput}
                placeHolder={route.params.email}
                name={SignUpFormSchema.email.name}
                rules={SignUpFormSchema.email.rules} />
            <FormInputPasswordField
                title={SignUpFormSchema.password.title}
                placeHolder={SignUpFormSchema.password.title}
                control={control}
                name={SignUpFormSchema.password.name}
                rules={SignUpFormSchema.password.rules}
                inputStyle={styles.passwordstyle} />
            <ErrorMessage
                errors={errors}
                name={SignUpFormSchema.password.name}
                render={({ message }) => <PipText orgStyle={styles.validpassword} title={i18n.t('translation.Validpassword')} />}
            />
            <PipText title={i18n.t('translation.ForgotPassword')} orgStyle={styles.forgotPassword} />
            <PipButton onPress={handleSubmit(SignIn)} title={i18n.t('translation.Signinbutton')} btnStyle={styles.bottomViewSingin} />
            <PipButton title={i18n.t('translation.Switchaccount')} buttonStyle={styles.bottomView} />
        </KeyboardAvoidingView>
    );
}
export default LoginScreen;
