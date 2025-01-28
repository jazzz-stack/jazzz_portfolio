import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Cv from "./pages/cv/Cv";
import Testing from "./Testing";
import PrivacyPolicy from "./pages/policy/PrivacyPolicy";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="pt-20">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testing" element={<Testing />} />
            <Route path="/policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<Home />} /> {/* Fallback route */}
          </Routes>
        </HashRouter>
      </div>
    </Router>
  );
}

export default App;
