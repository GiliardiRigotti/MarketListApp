import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

import { ListRealmContext } from './models';
import { Routes } from './routes';

export const App = () => {
  const { RealmProvider } = ListRealmContext;

  return (
    <SafeAreaView style={styles.screen}>
      <RealmProvider>
        <Routes />
      </RealmProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
