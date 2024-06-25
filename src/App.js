import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, setTheme } from './themeSlice';
import Header from './components/Header';
import HomePage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import './App.css'; // Import CSS-filen

const App = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]);

  useEffect(() => {
    document.body.className = theme; // Sätt klassnamn på body baserat på temat
  }, [theme]);

  return (
    <div className={theme}>
      <Router>
        <Header />
        <div className="toggle-container">
          <label className="toggle-button">
            <input 
              type="checkbox" 
              checked={theme === 'dark'} 
              onChange={() => dispatch(toggleTheme())} 
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;