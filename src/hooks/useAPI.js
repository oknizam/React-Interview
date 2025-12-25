import { useEffect, useState } from "react"

const useAPI = (url) => {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        let response = await fetch(url);
        response = await response.json();
        if (response) {
          setData(response);
        }
      }
      catch (err) {
        console.error("error in api call custom hook", err)
      }
      finally {
        setLoader(false);
      }
    })()
  }, [url])
  return { loader, data }
}

export default useAPI;