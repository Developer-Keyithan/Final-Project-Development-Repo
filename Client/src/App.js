import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import LandingPage from './Pages/JSX/LandingPage';
import ProductPage from './Pages/JSX/ProductPage';
import SignUp from './Components/Sign Up/SignUp';
import Login from './Components/Login/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
