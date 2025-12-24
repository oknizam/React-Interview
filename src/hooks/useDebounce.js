import { useEffect, useState } from "react"

const useDebounce = (value, delay) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    let timeoout = null;
    timeoout = setTimeout(() => {
      setSearchText(value);
    }, delay)
    return () => {
      clearTimeout(timeoout)
    }

  }, [value, delay]);

  return searchText;

}

export default useDebounce;