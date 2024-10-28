import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/HomePage'; // Crée ces pages séparément
import AdoptPage from './pages/AdoptPage';
import AboutUsPage from './pages/AboutUsPage';
import AddAnimalPage from './pages/AddAnimalPage';
import TestPage from './pages/TestPage';
import Footer from './components/footer/Footer'

function App() {
  return (
      <Router>
        <Header />  {/* Le Header sera affiché sur toutes les pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />  {/* Page d'accueil */}
          <Route path="/adopt" element={<AdoptPage />} />  {/* Page d'adoption */}
          <Route path="/about" element={<AboutUsPage />} />  {/* Page À propos */}
          <Route path="/addAnimal" element={<AddAnimalPage />} />
          <Route path="/test" element={<TestPage />} /> {/* Route de test */}
        </Routes>
        <Footer /> 
      </Router>
  );
}

export default App;