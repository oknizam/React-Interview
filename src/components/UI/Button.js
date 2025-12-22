import { memo } from "react";

const Button = ({ onClick, buttonLabel, type = "", styles = {} }) => {
  return (
    <button style={styles} type={type} onClick={onClick}>{buttonLabel}</button>
  )
}

export default memo(Button);

// This is Stateless component
// This is Pure component  because it re-renders only on change of its props, it do shalllow check