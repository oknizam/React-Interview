import { useState } from "react";
import InputBox from "./InputBox";

const ControlledComponent = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <h3>Controlled Component</h3>
      <InputBox label="Normal state" value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  )
};

export default ControlledComponent;

// input values are handled with state variables are called controlled components