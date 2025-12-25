import { useContext } from "react";
import { ThemeContext } from "../Home";

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);
  const { mode, toggleMode } = themeContext;
  return (
    <div>
      <label>Toggle mode {mode === "dark" ? "Normal" : "Dark"}</label>
      <input type="checkbox" checked={mode === "dark"} onChange={toggleMode} />
    </div>
  )
}

export default ThemeToggle;