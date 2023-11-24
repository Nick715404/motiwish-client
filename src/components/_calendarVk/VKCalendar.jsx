import './VKCalendar.scss';
import { useState } from 'react';

import { LocaleProvider, Calendar } from '@vkontakte/vkui';

export default function VKCalendar() {

  const [value, setValue] = useState(() => new Date());
  const [enableTime, setEnableTime] = useState(false);
  const [disablePast, setDisablePast] = useState(false);
  const [disableFuture, setDisableFuture] = useState(false);
  const [disablePickers, setDisablePickers] = useState(false);
  const [showNeighboringMonth, setShowNeighboringMonth] = useState(false);
  const [locale, setLocale] = useState('ru');
  const [size, setSize] = useState('s');
  const [listenDayChangesForUpdate, setListenDayChangesForUpdate] = useState(false);

  return (
    <div className='calendar-box'>
      <LocaleProvider value={locale}>
        <Calendar
          value={value}
          onChange={setValue}
          enableTime={enableTime}
          disablePast={disablePast}
          disableFuture={disableFuture}
          disablePickers={disablePickers}
          showNeighboringMonth={showNeighboringMonth}
          size={size}
          listenDayChangesForUpdate={listenDayChangesForUpdate}
        />
      </LocaleProvider>
    </div>
  )
}
