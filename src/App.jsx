import { useEffect, useRef, useState } from 'react';
import Button from './components/Button';
import formatTime from './utils/formatTime';
import './App.css'

export default function App() {
  const [time, setTime] = useState(300);
  const timerRef = useRef(null);

  let countdown = () => {
  setTime((prev) => {
    if (prev <= 1) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      return 0;
    }
    return prev - 1;
  });
};

  function start() {
    if (timerRef.current || time === 0) {
      return;
    };

    timerRef.current = setInterval(countdown, 1000);
  };

  function stop() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  function reset() {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime(300);
  };

  useEffect(() => {
    reset();
  }, []);

  useEffect(() => {
  if (time <= 0) {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
}, [time]);

  return (
    <div className='main-wrapper'>
      <h1>{formatTime(time)}</h1>
      <div className='btn-container'>
        <Button 
          name={"START"} 
          trigger={start} 
          disabled={time === 0} 
        />
        <Button 
          name={"STOP"} 
          trigger={stop} 
          disabled={time === 0}
        />
        <Button 
          name={"RESET"} 
          trigger={reset} 
        />
      </div>
    </div>
  );
};
