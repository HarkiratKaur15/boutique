import React, { useState } from 'react'
// import { Calendar } from 'antd';
import { DatePicker } from 'rc-datepicker';
import 'moment/locale/it.js';
import 'rc-datepicker/lib/style.css';
import 'moment/locale/fr.js'
import 'moment/locale/es.js'
// import './style.scss';
const BookNow = () => {
    // const onPanelChange = (value, mode) => {
    //     console.log(value.format('YYYY-MM-DD'), mode);
    //   };
    const [date, setDate] = useState();

     const onChange = (jsDate, dateString) => {
      setDate(jsDate);
      }
  return (
 
    <div className='bg-stone-100'>
    <div className='bg-stone-100 w-1/2 mx-auto'>
        <h1 className='text-[#40251B] font-semibold text-6xl'>Conceptual Development</h1>
      
        <div className=" w-[300px] gap-8 border-[1px] border-rounded-t-sm">
        {/* <Calendar fullscreen={false} onPanelChange={onPanelChange} /> */}
        <DatePicker onChange={onChange} locale='en' value={date} className='my-react-datepicker'/>
        </div>
    </div></div>

   
 )
}

export default BookNow