import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from './Pages/JSX/LandingPage';
import ProductPage from './Pages/JSX/ProductPage';
import SignUp from './Components/Sign Up/SignUp';
import Login from './Components/Login/Login';
import Review from './Components/Reviews/Review';
import ProductOverviewPage from './Pages/JSX/ProductOverviewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Overview" element={<ProductOverviewPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
