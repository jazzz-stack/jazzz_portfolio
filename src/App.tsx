import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./App.css";
import Header from "./components/Header";
import Cv from "./pages/cv/Cv";

function App() {
  return (
    <Router>
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} /> {/* Fallback route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
