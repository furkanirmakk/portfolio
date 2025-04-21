import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from "./components/About";
import Logolar from "./components/Logolar";
import Project from "./components/Project";
import Logolar2 from "./components/Logolar2";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";

function LayoutWrapper() {
  const location = useLocation();

  const isDetailPage = location.pathname.startsWith("/product/");

  return (
    <>
      {!isDetailPage && <About />}
      {!isDetailPage && <Logolar />}
      {!isDetailPage && <Logolar2 />}
      
      <Routes>
        <Route path="/" element={<Project />} />
        <Route path="/project" element={<Project />} />
        <Route path="/product/:id" element={<ProjectDetails />} />
      </Routes>

      {!isDetailPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
