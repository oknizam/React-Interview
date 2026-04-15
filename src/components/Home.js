import { createContext, lazy, Suspense, useContext, useState } from 'react';
import CompanyData from '../components/CompanyData';
import Counter from '../components/Counter';
import ErrorBoundry from '../components/ErrorBoundry';
import TodoList from '../components/TodoList';
import CommonComponent from '../components/UI/CommonComponent';
import ControlledComponent from '../components/UI/ControlledComponent';
import Form from '../components/UI/Form';
import Layout from '../components/UI/Layout';
import List from '../components/UI/List';
import ThemeToggle from '../components/UI/ThemeToggle';
import UnControlledComponent from '../components/UI/UnControlledComponent';
import ImageLazy from './UI/ImageLazy';
import LazyLoad from '../components/LazyLoad';
import Modal from './UI/Modal';
import User from './UI/User';
import ProgressBar from './UI/HorizontalProgressBar';
import TestHOC from './TestHOC';
import CounterComponent from './CounterComponent';
import Card from './Card';
import CustomTable from './UI/Table';
import SearchUser from './SearchUser';
import { RealTime, StopWatch } from './StopWatch';

export const ThemeContext = createContext();

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const LoadPostsLazy = lazy(() => import("../components/LoadPosts"));
  const themeContext = useContext(ThemeContext);
  const { mode } = themeContext;
  return (
    <div style={{ backgroundColor: mode === 'dark' ? "#33335d" : "", padding: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 data-testid="header" style={{ color: mode === 'dark' ? "#efefef" : "#33335d" }}> Hello React, I am Spidy!!!!</h1>
        <ThemeToggle />
        <a href='/about' style={{ color: "#000" }} >About</a>
      </div>
      <hr />
      <a href='/users' style={{ color: "#000" }} >Click here to go users page</a> <br />
      <a href='/todo' style={{ color: "#000" }} >Click here to todo app</a> <br />
      <a href='/concurrent-ui' style={{ color: "#000" }} >Click here to check Concurrent UI demo</a>
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
      <ErrorBoundry>
        <TodoList />
      </ErrorBoundry>
      <hr />
      <Suspense fallback={<div>loading....</div>}>
        <LoadPostsLazy />
      </Suspense>
      <hr />
      <ErrorBoundry>
        <CompanyData />
      </ErrorBoundry>
      <hr />
      <>
        <h3>Lazy image loading</h3>
        <ImageLazy url="/lazy-load-image.jpg" />
      </>
      <hr />
      <LazyLoad />
      <hr />
      <>
        <h3> React portal </h3>
        <Modal isOpen={open} onClose={handleClose}>
          <h4>Hello React portal</h4>
        </Modal>
        <button onClick={() => setOpen(true)}>Open Custom Modal</button>
      </>
      <hr />
      <>
        <h3> React Prop types </h3>
        <User name={"Nizam"} age={28} />
      </>
      <hr />
      <>
        <h3> Horizontal Progress Bars </h3>
        <ProgressBar width="60%" background="green" /> <br />
        <ProgressBar width="70%" background="linear-gradient(to right, green 50%, red 50%)" /><br />
        <ProgressBar width="100%" background="linear-gradient(to right, green, red, blue, orange,yellow)" />
      </>

      <hr />
      <TestHOC name="nizam" />
      <hr />
      <CounterComponent />

      <hr />
      <Card name={123} city="Davanagere" />

      <hr />
      <CustomTable columns={
        [
          { key: "name", title: "Name" },
          { key: "role", title: "Role" }]
      }
        data={
          [
            {
              name: "Nizam", role: "Front End"
            },
            {
              name: "Rahul", role: "Back End"
            },
          ]
        } />

      <hr />
      <SearchUser />
      <hr />
      <StopWatch />
      <RealTime />

    </div>
  )
}

export default Home;