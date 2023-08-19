import { Link, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Breadcrumbs } from './shared/ui/Breadcrumbs/Bread';
import { useState } from 'react';

function App() {
  const [jwtToken, setJwtToken] = useState('');

  return (
    <div className="container">
      <div>
        <div>
          <Link to="/" className="text-logo-link mb-1">
            useful links
          </Link>
        </div>
        <div className="mb-1 flex gap-0-5" style={{ justifyContent: 'flex-end' }}>
          {jwtToken === '' ? (
            <Link className="link" to="/login">
              Login
            </Link>
          ) : (
            <button type="button" onClick={() => setJwtToken('')} className="link link-btn">
              Log out
            </button>
          )}
        </div>
      </div>
      <div>
        <Navbar jwtToken={jwtToken} />
        <Breadcrumbs />
        <div className="mt-1">
          <Outlet context={{ jwtToken, setJwtToken }} />
        </div>
      </div>
    </div>
  );
}

export default App;
