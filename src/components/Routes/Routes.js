import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import About from "../About";
import Home from "../Home";
import Portfolio from "../Portfolio";
import PageCenter from "../UI/PageCenter";


const AppRoutes = () => {
  const LazyLoadUsers = lazy(() => import("../Users"))
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} >
        <Route path="portfolio" element={<Portfolio />} />  {/* nested route should be relative not absolute */}
      </Route>
      <Route path="/users" element={<Suspense fallback={<PageCenter>Loading ⚙️⚙️⚙️ ....!</PageCenter>}> {/* route based code splitting */}
        <LazyLoadUsers />
      </Suspense>} />
    </Routes>
  )
}

export default AppRoutes;