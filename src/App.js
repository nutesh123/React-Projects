import { Fragment, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
    <Layout>
      <Routes>
        <Route path='/' exact  element={ <HomePage />}>
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path='/auth' element={<AuthPage />}>
          </Route>
        )}
        <Route path='/profile' element={ authCtx.isLoggedIn ? <UserProfile /> : < Navigate to='/auth' />}>
        </Route>
        <Route path='*' element={ < Navigate to='/' />}>
        </Route>
      </Routes>
    </Layout>
    </Fragment>
  );
}

export default App;
