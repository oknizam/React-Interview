
const InputBox = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label> <br />
      <input type="text" value={value} onChange={onChange} />
    </div>
  )
}

export default InputBox;