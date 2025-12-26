import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import { ThemeContext } from "./components/Home";
import AppRoutes from './components/Routes/Routes';
import { Provider } from 'react-redux'
import store from "./redux/store";

function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    setMode((prev) => prev === "dark" ? "" : "dark");
  }
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ mode, toggleMode }}>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
