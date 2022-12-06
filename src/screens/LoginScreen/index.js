import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
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
    const { control, formState: { errors }, handleSubmit, setValue, getValues } = useForm();
    return (
        <View style={styles.container}>
            {console.log("props ", route.params.email)}
            <PipText title={i18n.t('translation.Pentair')} orgStyle={styles.titleStyle} />
            <View style={styles.line} />
            <PipText title={i18n.t('translation.AlreadyAccount')} orgStyle={styles.welcomestyle} />
            <PipText title={i18n.t('translation.Signin')} orgStyle={styles.hintStyle} />
            <FormInputEmailField
                title={"Email"}
                editable={false}
                control={control}
                inputStyle={styles.disbaleTextInput}
                placeHolder= {route.params.email}
                name={"email"}
                rules={"email"} />
            <FormInputPasswordField
                title={"Password"}
                placeHolder={"Password"}
                control={control}
                name={"Password"}
                rules={"Rules"}
                inputStyle={styles.passwordstyle} />
            <PipButton title={"Get Started"} btnStyle={styles.bottomView} />
        </View>
    );
}
export default LoginScreen;
