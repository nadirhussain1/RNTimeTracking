import React from 'react';
import {StyleSheet, View} from 'react-native';
import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

export default class ToggleableTimerForm extends React.Component {
   state={
      isOpen:false,
   }

   handleFormOpen = () => {
     this.setState({isOpen:true});
   }

   onClose = () => {
     this.setState({isOpen:false});
   }

   handleSubmit = timer => {
      const {onSubmit} = this.props;
      onSubmit(timer);

      this.setState({isOpen:false});
   }



   render(){
     const {isOpen} = this.state;
     const {onClose} = this.props;

     return(
       <View>
         {isOpen && <TimerForm onClose={this.onClose} onSubmit= {this.handleSubmit}/>}
         {!isOpen &&
           <TimerButton
             title="+"
             color='black'
             onPress={this.handleFormOpen}/>
         }
       </View>

     );
   }

  }
