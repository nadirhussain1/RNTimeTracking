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
  AsyncStorage,
} from 'react-native';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import {newTimer} from './utils/TimerUtils';

const ASYNC_STORAGE_COMMENTS_KEY = 'ASYNC_STORAGE_COMMENTS_KEY';
const TIME_INTERVAL = 1000;

export default class App extends React.Component{



  state = {
    timers:[
        {
          id:1,
          title:'Default Task',
          project:'Default Project',
          time:0,
          isRunning:false,

        },
    ],
  };






  async componentDidMount (){
    try{
        console.log("Inside componentDidMount");
        const timersData = await AsyncStorage.getItem(ASYNC_STORAGE_COMMENTS_KEY);
        console.log("loaded data"+timersData);
        if(!timersData){
          return
        }
        this.setState({
            timers:  JSON.parse(timersData),
          });



          this.intervalId = setInterval( () => {
              const{timers} = this.state;

              this.setState({
                timers : timers.map(timer =>{
                  const{time,isRunning} = timer;

                  return{
                    ...timer,
                    time:isRunning? time+TIME_INTERVAL : time,

                  };

                  }),

                });

            }, TIME_INTERVAL);

    }catch(e){
      console.log("Error loading data"+e)
    }

  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }




  handleNewTimerCreation = timer => {
      const {timers} = this.state;
      let updatedTimers = [newTimer(timer),...timers];
      let updatedTimersString=JSON.stringify(updatedTimers);

      console.log('Updated data string'+updatedTimersString);

      this.setState({timers: updatedTimers});


      try{
          AsyncStorage.setItem(ASYNC_STORAGE_COMMENTS_KEY,updatedTimersString );
      }catch(e){
        console.log('Error on saving timers to asyncstorage'+e);
      }
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
    let filteredTimers = this.state.timers.filter( t => t.id !== timerId);
    let filteredTimersString= JSON.stringify(filteredTimers);
     this.setState({
         timers:filteredTimers,
       });

       try{
           AsyncStorage.setItem(ASYNC_STORAGE_COMMENTS_KEY,filteredTimersString );
       }catch(e){
         console.log('Error on saving timers to asyncstorage'+e);
       }
  }

  toggleTimer = timerId => {
     const{timers} = this.state;

     this.setState({
       timers: timers.map(timer => {
           const { id, isRunning } = timer;
           if( id === timerId){

              return{
                 ...timer,
                 isRunning:!isRunning,
              };
           }
           return timer;
         }),

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
                        toggleTimer = {this.toggleTimer}
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
