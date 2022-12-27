import React from 'react'
import { View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { PipButton, PipText } from '../../components'
import useStyles from './style'
import { FormInputEmailField, FormInputPasswordField } from '../../../src/components/form'
import { useForm } from 'react-hook-form';
import { useRoute } from '@react-navigation/native'
import { i18n } from 'react-native-i18n-localize'
import { SignUpFormSchema } from '../../constants/formSchemas/SignUpFormSchema';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux';

const LoginScreen = (props) => {
    const styles = useStyles();
    const route = useRoute();
    const navigation = useNavigation();
    const { control, formState: { errors }, handleSubmit } = useForm();

    const SignUp = () => {
       navigation.navigate('SignUpScreen', { email: route.params.email })
    }
    const onSubmit = () => {
        navigation.navigate('ForgotPasswordScreen', { email: route.params.email })
    }
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <PipText title={i18n.t('translation.Pentair')} orgStyle={styles.titleStyle} />
            <View style={styles.line} />
            <PipText title={i18n.t('translation.AlreadyAccount')} orgStyle={styles.welcomestyle} />
            <PipText title={i18n.t('translation.Signin')} orgStyle={styles.hintStyle} />
            <View style={{ marginTop: '3%', marginStart: '1%' }}>
                <FormInputEmailField
                    title={SignUpFormSchema.email.title}
                    editable={false}
                    emailedittitle={true}
                    control={control}
                    inputStyle={styles.disbaleTextInput}
                    placeHolder={route.params.email}
                    name={SignUpFormSchema.email.name}
                    rules={SignUpFormSchema.email.rules} />
            </View>
            <View style={{ marginTop: '3%', marginStart: '1%' }}>
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
            </View>
            <TouchableOpacity onPress={onSubmit}>
                <PipText title={i18n.t('translation.ForgotPassword')} orgStyle={styles.forgotPassword} />
            </TouchableOpacity>
            <PipButton onPress={SignUp} title={i18n.t('translation.SingUpbutton')} btnStyle={styles.bottomViewSingin} />
            <PipButton whiteBackground={true} title={i18n.t('translation.Switchaccount')} buttonStyle={styles.bottomView} />
        </KeyboardAvoidingView>
    );
}
// const mapStateToProps = state => {
//     console.log("login screen map state to props ", state.emailscreenReducer.data)
//     return {
//       getEmailScreenData: state.emailscreenReducer,
//     }
//   }
//   const mapDispatchToProps = (dispatch) => ({
   
//   });
export default LoginScreen;

