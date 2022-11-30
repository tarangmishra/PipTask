/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import 'react-native-gesture-handler';
import { View } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <RootNavigator />
    </View>
  );
};


export default App;
