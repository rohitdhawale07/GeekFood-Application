import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage.js";
import Quotes from "./components/Quotes.js";
import Resturants from "./components/Resturants.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact.js";
import Navbar from "./components/Navbar.js";
import Foods from "./components/Foods.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/resturants" element={<Resturants />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
