import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import RentalPage from "./components/rentalPage";
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
import "./components/rentalPage.css";

const App = () => {
  return (
    <>
      <Router>
        {/* {<Navigation/>} */}
        {/* {<LanguageSwitcher/>} */}
        {/* {<Slideshow/>} */}
        {/* {<Testimonial/>} */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rentalPage" element={<RentalPage />} />
          {/* { <Route path="/products" element={<ProductList/>} /> } */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default App;
