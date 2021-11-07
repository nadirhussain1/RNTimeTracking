import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TimerButton from './TimerButton';
import {millisecondsToHuman} from '../utils/TimerUtils'


export default class Timer extends React.Component {
    render(){

     const { time , title , project,onEditPress,onRemovePress} = this.props;
     const formattedTime=millisecondsToHuman(time);

      return(
        <View style={styles.rootContainer}>
           <Text style={styles.title}>{title}</Text>
           <Text style={styles.project}>{project}</Text>
           <Text style={styles.time}>{formattedTime}</Text>

           <View style={styles.buttonsContainer}>
                <TimerButton title='Edit' color='blue' onPress={onEditPress} />
                <TimerButton title='Remove' color='blue' onPress={onRemovePress} />
           </View>

           <TimerButton title='Start' color='#21BA45' />

        </View>

      );
    }
  }


  const styles = StyleSheet.create({

    rootContainer:{
      flexDirection:'column',
      borderRadius:10,
      backgroundColor:'white',
      borderWidth:2,
      borderColor:'#D0D0D0',
      padding:10,
      marginTop:15,
    },

    title:{
      fontWeight:'bold',
      fontSize:14,
      color:'#000',

    },

    project:{
      fontSize:12,
      color:'#000',
    },

    time:{
      fontWeight:'bold',
      fontSize:26,
      textAlign:'center'
    },

    buttonsContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:20,
      marginBottom:10,
    }

  });
