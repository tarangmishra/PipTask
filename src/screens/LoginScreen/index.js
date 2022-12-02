import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import { PipButton, PipText } from '../../components'
import useStyles from './style'
import { FormInputEmailField, FormInputPasswordField } from '../../../src/components/form'
import { useForm } from 'react-hook-form';
import { useRoute } from '@react-navigation/native'
import { SignUpFormSchema } from '../../constants/formSchemas/SignUpFormSchema';

const LoginScreen = (props) => {
    const styles = useStyles();
    const route = useRoute();
    const { control, formState: { errors }, handleSubmit, setValue, getValues } = useForm();
    return (
        <View style={styles.container}>
             {/* {console.log("props ", route.params.email)} */}
            <PipText title="PENTAIR" orgStyle={styles.titleStyle} />
            <View style={styles.line} />
            <PipText title="Welocme to the Pentair Home app!" orgStyle={styles.welcomestyle} />
            <PipText title="Get the most out of your home's water. enter to the mail to get started" orgStyle={styles.hintStyle} />
            <FormInputEmailField
                title={SignUpFormSchema.email.title}
                placeHolder={route.params.email}
                editable = {false}
                control={control}
                inputStyle = {styles.disbaleTextInput}
                name={SignUpFormSchema.email.name}
                rules={SignUpFormSchema.email.rules} />
            <FormInputPasswordField
                title={"Password"}
                placeHolder={"Password"}
                control={control}
                name={"Password"}
                rules={"Rules"} />
            <PipButton title={"Get Started"} btnStyle={styles.bottomView} />
        </View>
    );
}
export default LoginScreen;
