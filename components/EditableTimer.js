import React from 'react';
import {View} from 'react-native';

import TimerForm from './TimerForm';
import Timer from './Timer';

export default class EditableTimer extends React.Component{
  render(){
    const{id,title,project,time,isEdit} = this.props;
    
    return(
      <View>
       {isEdit && <TimerForm id={id} title={title} project={project}/>}
       {!isEdit && <Timer id={id} title={title} project={project} time={time} />}
       </View>
    );
  }
}
