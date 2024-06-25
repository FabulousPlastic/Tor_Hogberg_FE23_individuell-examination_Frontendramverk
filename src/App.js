import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from './themeSlice';
import Header from './components/Header';
import AboutPage from './pages/AboutPage'; // "Who" page
import ProjectsPage from './pages/ProjectsPage'; // "What" page
import ContactPage from './pages/ContactPage'; // "Write" page
import Footer from './components/Footer';
import './App.css'; // Import CSS file

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
    document.body.className = theme; // Set className on body based on theme
  }, [theme]);

  return (
    <div className={theme}>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<AboutPage />} />
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