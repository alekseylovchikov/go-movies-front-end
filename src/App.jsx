import { Link, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Alert from './components/Alert';
import { Breadcrumbs } from './shared/ui/Breadcrumbs/Bread';
import { useState } from 'react';

function App() {
  const [jwtToken, setJwtToken] = useState('');
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertClassName, setAlertClassName] = useState('');

  return (
    <div className="container">
      <div>
        <div>
          <Link to="/" className="text-logo-link mb-1">
            USEFUL LINKS
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
          <Alert alert={alertMessage} />
          <Outlet context={{ jwtToken, setJwtToken, setAlertClassName, setAlertMessage }} />
        </div>
      </div>
    </div>
  );
}

export default App;
