import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Om mig</Link></li>
          <li><Link to="/projects">Projekt</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;