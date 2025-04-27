import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from 'react';

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>();

  return (
    <div className="bg-base-100 border border-base-300 shadow-lg w-fit rounded-box p-4">
      <div className="text-lg 
        [&_.rdp]:text-base 
        [&_.rdp-day]:w-12 
        [&_.rdp-day]:h-12 
        [&_.rdp-day]:text-lg 
        [&_.rdp-day_selected]:bg-primary 
        [&_.rdp-day_selected]:text-white 
        [&_.rdp-day_selected]:rounded-full 
        [&_.rdp-day_selected]:scale-110 
        [&_.rdp-day_selected]:transition-transform 
        [&_.rdp-day_selected]:duration-200
      ">
        <DayPicker 
          mode="single"
          selected={selectedDay} 
          onSelect={setSelectedDay} 
        />
      </div>
    </div>
  );
};

export default Calendar;
