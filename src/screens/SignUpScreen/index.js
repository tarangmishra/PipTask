import React, { useState } from 'react'
import { View, FlatList, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import { PipButton, PipText, PipCheckBox } from '../../components'
import useStyles from './style'
import { FormInputPasswordField } from '../../../src/components/form'
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native'
import { i18n } from 'react-native-i18n-localize'
import { SignUpFormSchema } from '../../constants/formSchemas/SignUpFormSchema'
import { ErrorMessage } from '@hookform/error-message';
import { useRoute } from '@react-navigation/native'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const SignUpScreen = () => {
    const validation = Yup.object().shape({
        chooseCb: Yup.bool().oneOf([true], i18n.t('translation.ErrroTerm')),
    })
    const optionsForm = { resolver: yupResolver(validation) }
    const datas = ["At least 8 character", "1 uppercase and 1 smaller case required", "1 number", "1 special character"]
    const styles = useStyles();
    const route = useRoute();
    const navigation = useNavigation();
    const { control, formState: { errors }, handleSubmit } = useForm(optionsForm);
    const [value, setValue] = useState('');
    const submit =  async form => {

    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={{ padding: "2%" }}>
                <PipText title={i18n.t('translation.Pentair')} orgStyle={styles.titleStyle} />
                <PipText title={i18n.t('translation.Cancel')} orgStyle={styles.cancelTitle} />
            </View>
            <View style={styles.line} />
            <PipText title={i18n.t('translation.SignupTitle')} orgStyle={styles.welcomestyle} />
            <PipText title={i18n.t('translation.CreatePassword')} orgStyle={styles.hintStyle} />
            <PipText title={i18n.t('translation.CreatePassword')} orgStyle={styles.emailexist} />
            <FormInputPasswordField
                title={SignUpFormSchema.createpassword.title}
                placeHolder={SignUpFormSchema.createpassword.title}
                control={control}
                name={SignUpFormSchema.createpassword.name}
                rules={SignUpFormSchema.createpassword.rules}
                inputStyle={styles.passwordstyle} />
            <ErrorMessage
                errors={errors}
                name={SignUpFormSchema.newpassword.name}
                render={({ message }) => <PipText orgStyle={styles.validpassword} title={i18n.t('translation.Validpassword')} />}
            />
            <FormInputPasswordField
                title={SignUpFormSchema.confirmpassw.title}
                placeHolder={SignUpFormSchema.confirmpassw.title}
                control={control}
                name={SignUpFormSchema.confirmpassw.name}
                rules={SignUpFormSchema.confirmpassw.rules}
                inputStyle={styles.passwordstyle} />
            <ErrorMessage
                errors={errors}
                name={SignUpFormSchema.confirmpassword.name}
                render={({ message }) => <PipText orgStyle={styles.validpassword} title={i18n.t('translation.Validpassword')} />}
            />
            <View style={styles.centerview}>
                <FlatList data={datas} renderItem={({ item }) => {
                    return (
                        <>
                            <PipText orgStyle={styles.flatText} title={item} />
                        </>
                    );
                }} />
            </View>
            <PipCheckBox
                title={i18n.t('translation.AgreeTerm')}
                subtitle={i18n.t('translation.TermServices')}
                orgStyle={styles.termandservices} />
            <ErrorMessage
                errors={errors}
                name={SignUpFormSchema.confirmpassword.name}
                render={({ message }) => <PipText orgStyle={styles.validpassword} title={i18n.t('translation.ErrroTerm')} />}
            />
            <PipCheckBox title={i18n.t('translation.BriefTerms')} />
            <PipText title={i18n.t('translation.PersonalPoint')} subtitle={i18n.t('translation.PrivacyNotice')} orgStyle={styles.personinfoTest} privacyStyle={styles.termandservices} />
            <PipButton onPress={handleSubmit(submit)} title={i18n.t('translation.CreateAccount')} btnStyle={styles.bottomView} />
        </KeyboardAvoidingView>
    );
}
export default SignUpScreen;
