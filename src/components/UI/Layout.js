import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "10px",
    }}>
      <Header >
        <h4>This is header (Composed component with header, content and Footer) </h4>
      </Header>
      <Content>
        Here Layout Content
      </Content>
      <Footer>This is footer</Footer>
    </div>
  )

};

export default Layout;

// This component is composable component, split component into smaller , composed into main component called composable component
// here in layout, we are using flex box , which is column (y-axis) direction, justifyContent apply on main axis which is y axis, alignItems apply on cross axis
// we can apply equla gaps to elements

// we can see children props are getting passed here to <Header>,<Content> and <Footer> components u can pass any thing , we can see h4 is getting passed to header, we are rendering it in props.children in header component