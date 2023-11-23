import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Thamco</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/' activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/products' activeClassName={classes.active}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;