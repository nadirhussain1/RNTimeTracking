import React from 'react';
import {StyleSheet, View} from 'react-native';
import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

export default class ToggleableTimerForm extends React.Component {
    render(){
      const {isOpen} = this.props;
      return(
        <View>
          {isOpen && <TimerForm/>}
          {!isOpen && <TimerButton title="+" color='black' />}
        </View>

      );
    }
  }
