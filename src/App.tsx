import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Home, About, Contact, Projects } from "./pages";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import { hotjar } from "react-hotjar";

function App() {
  useEffect(() => {
    hotjar.initialize(3794634, 6);
  }, []);
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
