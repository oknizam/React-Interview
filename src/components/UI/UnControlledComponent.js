import { useRef } from "react";
import Button from "./Button";

const UnControlledComponent = () => {
  const fileRef = useRef(null);

  const handleOnClick = () => {
    console.log("File Object", fileRef.current?.files?.[0])
  }
  return (
    <>
      <h3>UnControlled Component</h3>
      <input type="file" ref={fileRef} />
      <Button buttonLabel="Submit" onClick={handleOnClick} />
    </>
  )
};

export default UnControlledComponent;

//  UnControlledComponents are like controlled using ref , we can have access to complete element, we can update value for any attributes of element

//  why we are using ref for file input is like , if you use value={inpitfile} will face security problems when we show file like this , i just took example here

// we use ref in larger forms , to handle data at submit only, if we use state unnecessary re render happens

//  we use ref in non react libraries like jQuery, rich text editors, charts etc