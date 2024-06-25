import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;