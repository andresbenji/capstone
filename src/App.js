import Footer from "./components/footer";
import "./App.css";
import "./components/footer.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "../src/components/contact";
import RentalsPage from "./components/rentalPage";

const App = () => {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/home" element={<Footer />} />
          {/* { <Route path="/products" element={<ProductList/>} /> } */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </Router>
      <Contact />
      <RentalsPage />
    </>
  );
};

export default App;
