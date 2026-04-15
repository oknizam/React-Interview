import { useEffect, useRef, useState } from "react";


export function StopWatch() {
  const [time, setTime] = useState(0); // miliseconds
  const [isRunning, setIsRunning] = useState(false);
  const ref = useRef(null);

  const start = () => {
    if (isRunning) return
    setIsRunning(true);

    ref.current = setInterval(() => {
      setTime((prev) => prev + 10)
    }, 10);
  }


  const stop = () => {
    clearInterval(ref.current);
    setIsRunning(false);
  }


  const reset = () => {
    clearInterval(ref.current);
    setIsRunning(false);
    setTime(0);
  }


  const formateTime = () => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const miliseconds = Math.floor((time % 1000) / 10)

    return `${minutes}:${seconds}:${miliseconds}`
  }


  return (
    <>
      <div>{formateTime()}</div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}


export function RealTime() {
  const [time, setTime] = useState(new Date());
  const ref = useRef(null);
  useEffect(() => {
    ref.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(ref.current)
    }
  }, []);

  const formateTime = () => {
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`
  }

  return (
    <div>Time: {formateTime()}</div>
  )
}