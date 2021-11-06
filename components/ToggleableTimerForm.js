import React from 'react';
import {StyleSheet, View} from 'react-native';
import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

export default function ToggleableTimerForm ({isOpen}) {
      return(
        <View>
          {isOpen && <TimerForm/>}
          {!isOpen && <TimerButton title="+" color='black' />}
        </View>

      );
  }
