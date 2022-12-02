import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import { PipButton, PipText } from '../../components'
import useStyles from './style'
import { FormInputEmailField, FormInputPasswordField } from '../../../src/components/form'
import { useForm } from 'react-hook-form';

const LoginScreen = () => {
    const styles = useStyles();
    const { control, formState: { errors }, handleSubmit, setValue, getValues } = useForm();
    return (
        <View style={styles.container}>
            <PipText title="PENTAIR" orgStyle={styles.titleStyle} />
            <View style={styles.line} />
            <PipText title="Welocme to the Pentair Home app!" orgStyle={styles.welcomestyle} />
            <PipText title="Get the most out of your home's water. enter to the mail to get started" orgStyle={styles.hintStyle} />
            <FormInputEmailField
                title={"Email Address"}
                placeHolder = {"Email Address"}
                control={control}
                name={"Name"}
                rules={"Rules"} />
            <FormInputPasswordField
                title={"Password"}
                placeHolder = {"Password"}
                control={control}
                name={"Name"}
                rules={"Rules"} />
            <PipButton title={"Get Started"} btnStyle={styles.bottomView} />
        </View>
    );
}
export default LoginScreen;
