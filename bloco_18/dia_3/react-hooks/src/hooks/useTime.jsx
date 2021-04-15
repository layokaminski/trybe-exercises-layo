import { useState, useEffect } from 'react';

const useTime = () => {
  const [ time, setTime ] = useState(0);
  const [ randomNumber, setRandomNumber ] = useState();

  const min = 1;
  const max = 100;

  const ifMultiple = randomNumber && (randomNumber % 3 === 0 || randomNumber % 5 === 0);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const newTime = time + 1
      const checkTime = newTime > 0 && newTime % 10;
      if (checkTime === 0) {
        setRandomNumber(Math.round(Math.random() * (max - min) + min));
      }
      setTime(newTime);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    }
  }, [time]);

  useEffect(() => {
    if(ifMultiple) {
      setTimeout(() => {
        setRandomNumber();
      }, 4000);
    }
  }, [randomNumber, ifMultiple]);

  return { 
    time, 
    randomNumber, 
    ifMultiple,
  }
}

export default useTime;
