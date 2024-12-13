import React, { useState } from 'react';
import './TimePicker.css'; // Optional CSS for styling

interface TimePickerProps {
  value?: string;
  onChange: (time: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ value = '', onChange }) => {
  const [time, setTime] = useState<string>(value);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setTime(input); // Allow any input
  };

  const handleInputBlur = () => {
    // Validate the input on blur and set the time only if it's valid
    if (/^(?:[01]?\d|2[0-3]):[0-5]\d$/.test(time)) {
      onChange(time);
    } else {
      setTime(value); // Reset to last valid value if invalid
    }
  };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTime = e.target.value;
    setTime(selectedTime);
    setDropdownVisible(false);
    onChange(selectedTime);
  };

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        options.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return options;
  };

  return ( 
      <div className="time-picker">
        <div className='wrapper'>
          <input
            type="text"
            value={time}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleInputBlur();
              }
            }}
            placeholder="Enter Time HH:MM"
            className="time-picker-input"
            />
          <button
            onClick={() => setDropdownVisible(!dropdownVisible)}
            className="time-picker-dropdown-button"
            >
            {dropdownVisible ? <i className="fa-solid fa-x"></i> : <i className="fa-regular fa-clock"></i>}
          </button>
        </div>
      <div className='wrapper'>
        {dropdownVisible && (
          <select
          className="time-picker-dropdown"
          onChange={handleDropdownChange}
          value={time}
          >
            <option value="" disabled>
              Select a time
            </option>
            {generateTimeOptions().map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default TimePicker;
