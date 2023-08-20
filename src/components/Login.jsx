import { useState } from 'react';
import { Title } from '../shared/ui/Title';
import { Input } from './form/Input';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setJwtToken, setAlertMessage, setAlertClassName } = useOutletContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setAlertMessage(null);

    if (email === 'admin@test.com') {
      setJwtToken('abc');
      setAlertMessage({ message: 'Login successful' });
      setAlertClassName('success');
      navigate('/');
    } else {
      setAlertMessage({ message: 'Login failed' });
      setAlertClassName('danger');
    }
  };

  return (
    <div>
      <Title>Login</Title>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          title="Email"
          type="email"
          className=""
          name="email"
          autoComplete="email-new"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          title="Password"
          type="password"
          className=""
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button type="submit" className="link link-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
