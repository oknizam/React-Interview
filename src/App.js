import './App.css';
import Counter from './components/Counter';
import CommonComponent from './components/UI/CommonComponent';
import Form from './components/UI/Form';
import Layout from './components/UI/Layout';
import List from './components/UI/List';

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
    </div>
  );
}

export default App;
