import { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import axios from '../../config/axios';
import { AuthContext } from '../../contexts/AuthContext';

function GoogleLoginButton() {
  const { googleLogin } = useContext(AuthContext);

  return (
    <GoogleLogin
      className="google-login-btn"
      clientId="935007545484-2pujoncg02i3d5sbq76c0pl5a8i2ju60.apps.googleusercontent.com"
      onSuccess={async res => await googleLogin(res)}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default GoogleLoginButton;
