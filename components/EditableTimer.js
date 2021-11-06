import React from 'react';
import {View} from 'react-native';

import TimerForm from './TimerForm';
import Timer from './Timer';

export default function EditableTimer ({id,title,project,time,isRunning,isEdit})
{
    return(
      <View>
       {isEdit && <TimerForm id={id} title={title} project={project}/>}
       {!isEdit && <Timer id={id} title={title} project={project} time={time} isRunning={isRunning}/>}
       </View>
    );

}
