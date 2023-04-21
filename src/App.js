
import './App.css';
import { Global } from '@emotion/react';
import { Reset } from './styles/Global/reset';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Main from './pages/Main/Main';
import AuthRoute from './components/Routes/AuthRoute/AuthRoute';
import { Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <>
      <Global styles={ Reset }></Global>
      <Routes>
        <Route exact path="/login" element={<AuthRoute path="/login" element={<Login />} /> } />
        <Route path="/register" element={<AuthRoute path="/register" element={<Register />} /> } />
        <Route path="/" element={<AuthRoute path="/" element={<Main />} /> } />
      </Routes>
    </>
  );
}

export default App;
