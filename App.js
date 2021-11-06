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
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';




const App: () => Node = () => {
  return (

      <View style={styles.rootContainer}>
         <Text style={styles.title}>Timers</Text>
         <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollContainer}>

          <ToggleableTimerForm isOpen={false}/>

          <EditableTimer
            id="1"
            title="Mow the lawn"
            project="House Chores"
            time="8986300"

          />
          <EditableTimer
            id="2"
            title="Bake squash"
            project="Kitchen Chores"
            time="3890985"
        
          />

         </ScrollView>

      </View>

  );
};

const styles = StyleSheet.create({

  rootContainer:{
    flex:1,
  },

  title:{
    fontWeight:'bold',
    fontSize:25,
    color:'#000',
    textAlign:'center',
    paddingBottom:15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
  },

  scrollContainer:{
    paddingHorizontal:15,
    marginTop:15,
  },

});

export default App;
