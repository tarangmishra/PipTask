import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, EmailScreen } from './../screens';
import { PipColors } from '../utils/colors';
const Stack = createStackNavigator();

const RootNavigator = (props) => {
    const scheme = useColorScheme();

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
        </>
    );

    const lightTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: PipColors.pure_white,
        },
    };

    const darkTheme = {
        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
            background: PipColors.pure_black,
        },
    };

    return (

        <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
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
