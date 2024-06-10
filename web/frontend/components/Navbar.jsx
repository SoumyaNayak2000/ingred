import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';

export function Navbar() {
  return (
    <div className="navmenu-section">
      <ul>
        <li title="Home">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <HomeIcon />
          </NavLink>
        </li>
        <li title="Menu">
          <NavLink
            to="/menu"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {" "}
            <MenuIcon />{" "}
          </NavLink>
        </li>
        <li title="Product">
          <NavLink
            to="/product"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {" "}
            <CategoryTwoToneIcon />{" "}
          </NavLink>
        </li>
      
      </ul>
    </div>
  );
}
