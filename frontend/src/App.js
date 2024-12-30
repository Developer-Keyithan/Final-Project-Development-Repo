import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import LandingPage from './Pages/JSX/LandingPage';
import ProductPage from './Pages/JSX/ProductPage';
import LoginSignUpPage from './Pages/JSX/LoginSignUpPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/Login" element={<LoginSignUpPage />} />
        <Route path="/SignUp" element={<LoginSignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
