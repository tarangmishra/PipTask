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
import { I18nLocalize } from 'react-native-i18n-localize'
import english from './languages/english.json'
import { store } from './src/redux';
import { Provider } from 'react-redux'

I18nLocalize.initialLanguage({ english })
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </View>
  );
};


export default App;
