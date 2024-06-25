import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, setTheme } from './themeSlice';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  // Läs temat från localStorage när appen laddas
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]);

  return (
    <div className={theme}>
      <Router>
        <Header />
        <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;