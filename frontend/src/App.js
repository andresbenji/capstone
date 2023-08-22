import Footer from './components/footer';
import './App.css';
import './components/footer.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {

  return (
   <>
   <Router >
   {/* <Header /> */}
    <Routes>
          <Route path="/home" element={<Footer/>} />
          {/* { <Route path="/products" element={<ProductList/>} /> } */}
          {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  <Footer />
  </Router>
   </>
  );
};


export default App;