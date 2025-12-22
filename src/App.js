import './App.css';
import Counter from './components/Counter';
import CommonComponent from './components/UI/CommonComponent';
import ControlledComponent from './components/UI/ControlledComponent';
import Form from './components/UI/Form';
import Layout from './components/UI/Layout';
import List from './components/UI/List';
import UnControlledComponent from './components/UI/UnControlledComponent';
import Users from './components/UI/Users';

function App() {
  return (
    <div className="App">
      <h1> Hello React, I am Spidy!!!!</h1>
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
    </div>
  );
}

export default App;
