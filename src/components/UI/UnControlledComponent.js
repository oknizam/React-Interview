import { useEffect, useRef, useState } from "react";
import Button from "./Button";

const UnControlledComponent = () => {
  const fileRef = useRef(null);
  const formRef = useRef(null);
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);


  const handleOnClick = () => {
    console.log("File Object", fileRef.current?.files?.[0])
  }



  useEffect(() => {
    // garbage collector when we make fileref null it will GC free up space after scope ended
    return () => {
      fileRef.current = null;
    }
  }, [value])

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    console.log("form data", Object.fromEntries(formData.entries()))

    // checking state update and rerender
    setValue(prev => prev + 1);
    setValue1(prev => prev + 1);
    setTimeout(() => {
      console.log("value", value, value1)
    }, 0)
  }
  console.log("rerender")
  return (
    <>
      <h3>UnControlled Component</h3>
      <input type="file" ref={fileRef} />
      <Button buttonLabel="Submit" onClick={handleOnClick} />

      <form onSubmit={handleSubmit} ref={formRef}>
        <input name="firstName" placeholder="First Name" /> <br />
        <input name="lastName" placeholder="Last Name" /><br />
        <input name="email" type="email" placeholder="Email" /><br />
        <input name="phone" placeholder="Phone" /><br />
        <input name="age" type="number" placeholder="Age" /><br />
        <input name="city" placeholder="City" /><br />
        <input name="state" placeholder="State" /><br />
        <input name="country" placeholder="Country" /><br />
        <input name="company" placeholder="Company" /><br />
        <input name="role" placeholder="Role" /><br />
        <button type="submit">submit</button>
      </form>
    </>
  )
};

export default UnControlledComponent;

//  UnControlledComponents are like controlled using ref , we can have access to complete element, we can update value for any attributes of element

//  why we are using ref for file input is like , if you use value={inpitfile} will face security problems when we show file like this , i just took example here

// we use ref in larger forms , to handle data at submit only, if we use state unnecessary re render happens

//  we use ref in non react libraries like jQuery, rich text editors, charts etc


// why we use ref for storing files , because ref will hold same data but it will not trigger rernder and also if use useState variables , some one with devtools can access sensitive information with file to avoide this we use ref for files uploads 

// one more case we use ref if we have more than 10 fields so to avoide unncessary re renders