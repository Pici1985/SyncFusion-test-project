import '../styles/global.scss';
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { enableRipple, rightToLeft } from '@syncfusion/ej2-base';
import { useState } from 'react';


const SampleTimePicker = () => {
  const[timeValue, setTimeValue] = useState<Date | undefined | null>(null); 
  // initialize the min and max time value
  const minTime = (new Date('8/3/2017 9:00 AM'));
  const maxTime = (new Date('8/3/2017 5:00 PM'));

  enableRipple(true);

  return(
    <div style={{
      width: '200px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <TimePickerComponent 
        id="time"
        placeholder='Enter Time HH:MM'
        min={minTime} 
        max={maxTime}
        step={60}
        format={'HH:mm'}
        onChange={(value: any) => {
          setTimeValue(value.value.toString())
          console.log(timeValue)
        }}
        style={{
          width: '500px',
          display: 'flex',
          justifyContent: 'center',
          borderRight: '1px solid rgba(0, 0, 0, 0.42)'
        }}
        />
    </div>
  ) 
  
};

export default SampleTimePicker;
