import { createContext, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import ErrorBoundry from './components/ErrorBoundry';
import LoadPosts from './components/LoadPosts';
import TodoList from './components/TodoList';
import CommonComponent from './components/UI/CommonComponent';
import ControlledComponent from './components/UI/ControlledComponent';
import Form from './components/UI/Form';
import Layout from './components/UI/Layout';
import List from './components/UI/List';
import ThemeToggle from './components/UI/ThemeToggle';
import UnControlledComponent from './components/UI/UnControlledComponent';
import Users from './components/Users';

export const ThemeContext = createContext();

function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    setMode((prev) => prev === "dark" ? "" : "dark");
  }
  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <div style={{ backgroundColor: mode === 'dark' ? "#33335d" : "", padding: 10 }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ color: mode === 'dark' ? "#efefef" : "#33335d" }}> Hello React, I am Spidy!!!!</h1>
          <ThemeToggle />
        </div>
        <hr />
        <Counter />
        <hr />
        <Layout />
        <hr />
        <List />
        <hr />
        <Form />
        <hr />
        <CommonComponent />
        <hr />
        <ControlledComponent />
        <hr />
        <UnControlledComponent />
        <hr />
        <Users />
        <hr />
        <ErrorBoundry>
          <TodoList />
        </ErrorBoundry>
        <hr />
        <LoadPosts />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
