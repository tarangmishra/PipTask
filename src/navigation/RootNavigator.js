import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, EmailScreen, LoginScreen, ForgotPasswordScreen, CheckEmailScreen, SignUpScreen } from './../screens';
const Stack = createStackNavigator();

const RootNavigator = () => {

    const Screens = (
        <>
            <Stack.Screen
                component={HomeScreen}
                name="HomeScreen"
                options={{ headerShown: false }} />
            <Stack.Screen
                component={EmailScreen}
                name='EmailScreen'
                options={{ headerShown: false }} />
            <Stack.Screen
                component={LoginScreen}
                name='LoginScreen'
                options={{ headerShown: false }} />
            <Stack.Screen
                component={ForgotPasswordScreen}
                name="ForgotPasswordScreen"
                options={{ headerShown: false }} />

            <Stack.Screen
                component={CheckEmailScreen}
                name="CheckEmailScreen"
                options={{ headerShown: false }} />

            <Stack.Screen
                component={SignUpScreen}
                name='SignUpScreen'
                options={{ headerShown: false }} />
        </>
    );

    return (

        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                    title: '',
                    headerTitleAlign: 'center',
                    initialRouteName: 'HomeScreen'
                }}>
                {Screens}
            </Stack.Navigator>
        </NavigationContainer>

    );
};
export default RootNavigator;
