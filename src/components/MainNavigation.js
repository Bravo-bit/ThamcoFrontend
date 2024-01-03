import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Thamco</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/' className={({ isActive }) => isActive ? classes.active : undefined} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/products' className={({ isActive }) => isActive ? classes.active : undefined}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;