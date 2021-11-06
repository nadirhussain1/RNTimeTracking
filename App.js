/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import uuidv4 from 'uuid/v4';
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';


export default class App extends React.Component{
  state = {
    timers:[
     {
         id:uuidv4(),
         title:'Study the book',
         project:'Learning & Growth' ,
         time:5454099,
         isRunning:true,
     },
     {
          id:uuidv4(),
          title:'Eat dinner',
          project:'Eating',
          time:1239989,
          isRunning:false,
     },

    ],
  };

  render(){
    const{timers} = this.state;
     return (
          <View style={styles.rootContainer}>
              <Text style={styles.title}>Timers</Text>
              <ScrollView
                 contentInsetAdjustmentBehavior="automatic"
                  style={styles.scrollContainer}>

                  <ToggleableTimerForm isOpen={false}/>
                  {timers.map(({id,title,project,time,isRunning}) => (

                    <EditableTimer
                        key={id}
                        id={id}
                        title={title}
                        project={project}
                        time={time}
                        isRunning={isRunning}
                      />

                    ))}


            </ScrollView>
         </View>
     );
  }
}

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
