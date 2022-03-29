import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import Main from './Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Pages/Profile';
import Error from './Pages/Error';
import Files from './Pages/Files';
const App = () => {
  return (
    <Auth0Provider
      domain="dev-ahn5wgpa.us.auth0.com"
      clientId="tKZj5erCThmRBo0M53n8NigcI0leJehi"
      redirectUri={window.location.origin}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/files' element={<Files />} />
          <Route path='*' element={<Error errorCode={"404"}/>}/>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
