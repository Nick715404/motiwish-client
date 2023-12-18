import './StatisticWheel.scss';

import { useState, useEffect } from 'react';

export default function StatisticWheel({ children }) {

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // После монтирования компонента добавляем класс для запуска анимации
    setIsAnimated(true);

    // Через 1 секунду (1000 миллисекунд) снимаем класс, чтобы анимация не проигрывалась повторно
    const timeoutId = setTimeout(() => {
      setIsAnimated(false);
    }, 1000);

    return () => clearTimeout(timeoutId); // Очищаем таймер при размонтировании компонента
  }, []); 

  return (
    <div className='statistic-wheel'>
      <div className="statistic-wheel__border">
        <span className={`statistic-wheel__tasks-count ${isAnimated ? 'animation-fadeFromLeft' : ''}`}>{children}</span>
        <span className={`statistic-wheel-done-tasks__text ${isAnimated ? 'animation-fadeFromRight' : ''}`}>задач выполнено</span>
      </div>
    </div>
  )
}
