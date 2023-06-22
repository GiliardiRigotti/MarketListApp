import 'expo-dev-client';
import 'react-native-get-random-values';
import 'react-native-gesture-handler';
import React from 'react';
import { registerRootComponent } from 'expo'
import { App } from './app/App';


registerRootComponent(() => (
  <App />
));
