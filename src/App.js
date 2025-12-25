import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import { ThemeContext } from "./components/Home";
import AppRoutes from './components/Routes/Routes';

function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    setMode((prev) => prev === "dark" ? "" : "dark");
  }
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ mode, toggleMode }}>
        <AppRoutes />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
