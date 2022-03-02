import { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import { GOOGLE_CLIENT_ID } from '../../config/env';
import { AuthContext } from '../../contexts/AuthContext';
import './GoogleLoginButton.css';

function GoogleLoginButton() {
  const { googleLogin } = useContext(AuthContext);

  return (
    <GoogleLogin
      className="google-login-btn"
      clientId={GOOGLE_CLIENT_ID}
      onSuccess={async (res) => await googleLogin(res)}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default GoogleLoginButton;
