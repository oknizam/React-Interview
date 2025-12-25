import PageCenter from "./UI/PageCenter";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <PageCenter >
      <div style={{ display: "flex", flexDirection: "column" }}>
        About React Interview 🖥️ 🚀 ✅ ....!
        <Link style={{ textAlign: "center" }} to="portfolio">Get more info (nested routing)</Link>
      </div>
      <Outlet />
    </PageCenter>
  )
}

export default About;