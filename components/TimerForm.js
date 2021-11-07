import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import TimerButton from './TimerButton';

export default class TimerForm extends React.Component {
     constructor(props){
       super(props)

       const{id,title,project} = props;

       this.state = {
          title :  id ? title : '',
          project : id ? project : '',
       };
     }

     handleTitleChange = title => {
       this.setState({title});
     }

     handleProjectChange = project => {
       this.setState({project});
     }

     handleSubmit = () => {
        const{id,onSubmit} = this.props;
        const{title,project} = this.state;

        onSubmit({id,title,project});
     }


     render(){

      const{id,onClose} = this.props;
      const{title,project} = this.state;

      const submitText = id ? 'Update' : 'Create';

      return(
        <View style = {styles.rootContainer}>
          <Text style={styles.title}>Title</Text>
          <TextInput
            style={styles.inputContainer}
            value={title}
            onChangeText={this.handleTitleChange}
          />
          <Text style={styles.project}>Project</Text>
          <TextInput
            style={styles.inputContainer}
            value={project}
            onChangeText = {this.handleProjectChange}
            />

          <View style={styles.buttonsContainer}>

           <TimerButton
             color='#21BA45'
             title = {submitText}
             onPress={this.handleSubmit}
             />

           <TimerButton
            color='#DB2828'
            title = 'Cancel'
            onPress={onClose}
            />

          </View>

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
      fontSize:14,
      fontWeight:'bold',
      color:'#000',
   },

   project:{
      fontSize:14,
      fontWeight:'bold',
      color:'#000',
      marginTop:15,
   },

   inputContainer:{
     backgroundColor:'white',
     borderWidth:1,
     borderColor:'#D0D0D0',
     borderRadius:2,
     marginTop:2,
     height:40,
     fontSize:12,
     paddingHorizontal:10,
   },

   buttonsContainer:{
     flexDirection:'row',
     justifyContent:'space-between',
     height:30,
     marginTop:20,
   }

});
