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

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import {newTimer} from './utils/TimerUtils';


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

  handleNewTimerCreation = timer => {
      const {timers} = this.state;

      this.setState({timers: [newTimer(timer),...timers]});
  }

  updateEditedTimer = attrs => {
     const{timers} = this.state;

     this.setState({
       timers: timers.map(timer => {

           if(timer.id === attrs.id){
              const{title,project} = attrs;
              return{
                 ...timer,
                 title,
                 project,
              };
           }
           return timer;
         }),

       });
  }

  removeTimer = timerId => {
     this.setState({
         timers:this.state.timers.filter( t => t.id !== timerId),
       });
  }

  render(){
    const{timers} = this.state;
     return (
          <View style={styles.rootContainer}>
              <Text style={styles.title}>Timers</Text>
              <ScrollView
                 contentInsetAdjustmentBehavior="automatic"
                  style={styles.scrollContainer}>

                  <ToggleableTimerForm
                    isOpen={false}
                    onSubmit={this.handleNewTimerCreation}
                  />

                  {timers.map(({id,title,project,time,isRunning}) => (

                    <EditableTimer
                        key={id}
                        id={id}
                        title={title}
                        project={project}
                        time={time}
                        isRunning={isRunning}
                        onEditDone={this.updateEditedTimer}
                        onRemovePress = {this.removeTimer}
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
