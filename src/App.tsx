import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Program from "./pages/Program";
import JoinUs from "./pages/JoinUs";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";

import SmoothScroll from "./utils/SmoothScroll";

const App = () => {
  return (
    <SmoothScroll>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recruit" element={<JoinUs />} />
          <Route path="/program" element={<Program />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </SmoothScroll>
    
  );
};

export default App;
