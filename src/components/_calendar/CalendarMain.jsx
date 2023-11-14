import './Calendar.scss';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ru } from 'date-fns/locale';

import { events } from './Calendar.data';

export default function CalendarMain() {

  const [newEvents, setNewEvent] = useState({ title: '', start: '', end: '' });

  const [allEvents, setAllEvent] = useState(events);

  const locales = {
    'ru': ru,
  }

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
  })

  let formats = {
    dateFormat: 'dd',

    dayFormat: (date, culture, localizer) =>
      localizer.format(date, 'DDD', culture),

    dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
      localizer.format(start, { date: 'short' }, culture) + ' — ' +
      localizer.format(end, { date: 'short' }, culture)
  }

  const handleAddEvents = () => {
    setAllEvent([...allEvents, newEvents]);
  }

  return (
    <div className='calendar-box'>
      <Calendar
        formats={formats}
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        culture='ru'
        style={{ height: 500, margin: '50px' }} />
    </div>
  )
}
