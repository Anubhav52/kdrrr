import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contactus from "./Pages/Contactus";
import Community from "./Pages/Community";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contactus" element={<Contactus />}></Route>
        <Route path="/communities" element={<Community />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
