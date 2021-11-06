import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function TimerButton ({color,title,onPress}) {
      return(
        <TouchableOpacity
          style = {[styles.rootContainer,{borderColor:color}]}
          onPress = {onPress}
          >
         <Text style={[styles.text,{color:color}]}> {title}</Text>

        </TouchableOpacity>
      );
}

const styles = StyleSheet.create({
   rootContainer:{
      borderRadius:5,
      borderWidth:2,
      minWidth:100,
      height:35,
      paddingHorizontal:8,
      justifyContent:'center'
   },

   text:{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:14
   },



});
