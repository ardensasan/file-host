import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './Pages/Profile';
import Error from './Pages/Error';
import Files from './Pages/Files';
import File from './Pages/File';
import ResetPassword from './Pages/ResetPassword';
const App = () => {
  return (
    <Auth0Provider
      domain="dev-ahn5wgpa.us.auth0.com"
      clientId="tKZj5erCThmRBo0M53n8NigcI0leJehi"
      redirectUri={window.location.origin}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='/files' element={<Files />} />
          <Route path='/file/:id' element={<File />} />
          <Route path='*' element={<Error errorCode={"404"} />} />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
