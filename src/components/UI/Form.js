import { useState } from "react"
import Button from "./Button";
import InputBox from "./InputBox";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("handle submit", `userName: ${userName}, email: ${email}`)
  }

  const handleClick = (e) => {
    e.preventDefault()
    console.log("handle submit", `userName: ${userName}, email: ${email}`)
  }

  return (
    <>
      <h4>Preventdefault with form and anchor element</h4>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <InputBox label="User name" value={userName} onChange={(e) => setUserName(e.target.value)} />
        <InputBox label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button styles={{ width: "100px" }} type="submit" buttonLabel="submit" />
      </form>
      <a href="/test_path" onClick={handleClick}>Click me</a>
    </>
  )
}

export default Form;

// In this component when we click on submit handle submit will be triggred, which will reload the page, so we can prevent their browser behavior of an event using preventdefault method of window object

//  same in case of anchor element

// After adding preventdefault for both we can prevent their default behavior
