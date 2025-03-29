import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Cv from "./pages/cv/Cv";
import Testing from "./Testing";
import PrivacyPolicy from "./pages/policy/PrivacyPolicy";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Router>
      <Provider store={store}> 
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Home />} /> {/* Fallback route */}
        </Routes>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
