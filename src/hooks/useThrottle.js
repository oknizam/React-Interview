import { useRef } from "react";

const useThrottle = (callback, delay = 1000) => {
  let timeout = useRef(null);
  return function (...args) {
    if (timeout.current) {
      return
    }
    callback(...args);
    timeout.current = setTimeout(() => {
      timeout.current = null;

    }, delay)
  }
}

export default useThrottle;