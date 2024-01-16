import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useAuth0 } from "@auth0/auth0-react";
import AuthLogin from '../components/auth/AuthLogin';
import AuthLogout from '../components/auth/AuthLogout';
import Profile from '../components/auth/Profile';


const MainNavigation = () => {

  const { isAuthenticated } = useAuth0();

  return (
    <>
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
            <li>
              {isAuthenticated ? <AuthLogout></AuthLogout> : <AuthLogin></AuthLogin>}
            </li>
          </ul>
        </nav>
      </header>
      <Profile></Profile>
    </>
  );
};

export default MainNavigation;