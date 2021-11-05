/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TimerForm from './components/TimerForm';




const App: () => Node = () => {
  return (
    <SafeAreaView >
      <StatusBar barStyle= 'light-content' />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">

        <TimerForm submitText='Create'/>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
