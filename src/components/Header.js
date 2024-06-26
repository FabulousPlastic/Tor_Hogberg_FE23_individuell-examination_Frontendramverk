import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../themeSlice';
import './Header.css';

const Header = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Who
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active">
              What
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Write
            </NavLink>
          </li>
        </ul>
      </nav>
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
    </header>
  );
};

export default Header;