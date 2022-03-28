import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import './App.css';
import Login from './src/Login';
import Main from './src/Main';

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="App">
      <Auth0Provider
        domain="dev-ahn5wgpa.us.auth0.com"
        clientId="F8kijmEMa16YpFCOkSJn4wdip4lpFa5Y"
        redirectUri={window.location.origin}
      >
        <Login/>
        {/* <Main /> */}
      </Auth0Provider>
    </div>
  );
}

export default App;
