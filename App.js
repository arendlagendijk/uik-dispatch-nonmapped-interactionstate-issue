import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  light as lightTheme,
  mapping,
} from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import { CustomButton } from './CustomButton.component';
import { default as customMapping } from "./custom-mapping.json";


export default function App() {
  return (
    <ApplicationProvider mapping={mapping} customMapping={customMapping} theme={lightTheme}>
      <View style={styles.container}>
        <CustomButton style={styles.button}><Text>Press me!</Text></CustomButton>
      </View>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 16
  }
});
