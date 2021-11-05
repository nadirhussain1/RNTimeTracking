import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class TimerButton extends React.Component {

    render(){
      const {color} = this.props;
      const {title} = this.props;

      return(
        <TouchableOpacity style = {[styles.rootContainer,{borderColor:color}]}
          >
         <Text style={[styles.text,{color:color}]}> {title}</Text>

        </TouchableOpacity>
      );
    }
}

const styles = StyleSheet.create({
   rootContainer:{
      borderRadius:5,
      borderWidth:2,
      minWidth:100,
      paddingHorizontal:8,
      justifyContent:'center'
   },

   text:{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:14
   },



});
