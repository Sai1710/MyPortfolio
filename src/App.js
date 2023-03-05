import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { ProjectProvider } from "./Context/ProjectContext";
import ProjectContext from "./Context/ProjectContext";
import { useState, useContext, useEffect } from "react";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer";
function App() {
  return (
    <ProjectProvider>
      <Router>
        <div className="bg-white px-1 md:px-20 lg:px-40">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ProjectProvider>
  );
}

export default App;
