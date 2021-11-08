import React from 'react';
import {View} from 'react-native';

import TimerForm from './TimerForm';
import Timer from './Timer';

export default class EditableTimer extends React.Component{
  state = {
    isEdit:false
  };

  handleClose = () => {
    this.setState({isEdit:false})
  }

  handleEditPress = () => {
    this.setState({isEdit:true})
  }

  handleEditedUpdate = timer => {
    const{onEditDone} = this.props;
    onEditDone(timer);

    this.handleClose();
  }

  handleRemove = () => {
    const {id,onRemovePress} = this.props;
    onRemovePress(id);
  }

  handleToggleTimer = () =>{
    const{id,toggleTimer} = this.props;
    toggleTimer(id);
  }

  render(){
    const{id,title,project,time,isRunning}=this.props;
    const{isEdit} = this.state;

    return(
      <View>

       {isEdit &&
         <TimerForm
           id={id}
           title={title}
           project={project}
           onClose = {this.handleClose}
           onSubmit = {this.handleEditedUpdate}
           />
       }

       {!isEdit &&
         <Timer
            id={id}
            title={title}
            project={project}
            time={time}
            isRunning={isRunning}
            onEditPress = {this.handleEditPress}
            onRemovePress = {this.handleRemove}
            toggleTimer = {this.handleToggleTimer}
            />
       }
       </View>
    );
  }
}
