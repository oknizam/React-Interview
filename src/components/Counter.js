import { useCallback, useState } from "react";
import Button from "./UI/Button";

const Counter = () => {

  const [count, setCount] = useState(0);
  const isPrevFlag = true;

  const handleClick = useCallback(() => {
    if (isPrevFlag) {
      setCount(prev => prev + 1);
      setCount(prev => prev + 1);
      return
    }
    setCount(count + 1);
    setCount(count + 1);
  }, [isPrevFlag, count]) // using use call back because this function is passed to another component , child component is also memoized because if don't memoize child component then use of suing useCallback

  return (
    <>
      <h2> {`Count: ${count}`} </h2>
      {isPrevFlag ? <Button onClick={handleClick} buttonLabel="Click with Previous counter update" /> : <Button onClick={handleClick} buttonLabel="Click without Previous counter update" />}
    </>
  )


}

export default Counter;
