import { useAuth0 } from "@auth0/auth0-react";
import AuthLogin from '../components/auth/AuthLogin';
import AuthLogout from '../components/auth/AuthLogout';
import Profile from '../components/auth/Profile';

function HomePage() {

  const { isAuthenticated } = useAuth0();

  return <>
    {isAuthenticated ? <> <Profile></Profile> <AuthLogout></AuthLogout> </> : <AuthLogin></AuthLogin>}
  </>

}

export default HomePage;