import Home from "./components/home";
import About from "./components/about";
import RentalsPage from "./components/rentalPage";

// import Slideshow from './components/slideshow';
// import Testimonial from './components/testimonials';
// import LanguageSwitcher from './components/LanguageSwitcher';

import "./App.css";
import "./components/about.css";
import "./components/footer.css";
import "./components/home.css";
import "./components/nav.css";
import "./components/slideshow.css";
import "./components/testimonials.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactForm from "./components/contacts";
import TestZillowApi from "./components/testZillowApi";


const App = () => {
  return (
    <>
      <Router>
        {/* {<Navigation/>} */}
        {/* {<LanguageSwitcher/>} */}
        {/* {<Slideshow/>} */}
        {/* {<Testimonial/>} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/product" element={<RentalsPage />} />
          <Route path="/testzillowApi" element={<TestZillowApi />} />
          {/* <Route path="/contact" element={<ContactForm />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>

  );
};

export default App;
