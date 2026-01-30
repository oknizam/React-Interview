import { createContext, lazy, Suspense, useContext } from 'react';
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

export const ThemeContext = createContext();

const Home = () => {

  const LoadPostsLazy = lazy(() => import("../components/LoadPosts"));
  const themeContext = useContext(ThemeContext);
  const { mode } = themeContext;
  return (
    <div style={{ backgroundColor: mode === 'dark' ? "#33335d" : "", padding: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ color: mode === 'dark' ? "#efefef" : "#33335d" }}> Hello React, I am Spidy!!!!</h1>
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
    </div>
  )
}

export default Home;