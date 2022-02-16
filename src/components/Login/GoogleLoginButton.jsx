import GoogleLogin from 'react-google-login';
import axios from '../../config/axios';

function GoogleLoginButton() {
  const googleLogin = async (response) => {
    try {
      const { tokenId } = response;
      console.log(tokenId);
      const res = await axios.post('/auth/login/google', {
        tokenId,
      });
      console.log('from backend res => ', res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GoogleLogin
      className="google-login-btn"
      clientId="935007545484-2pujoncg02i3d5sbq76c0pl5a8i2ju60.apps.googleusercontent.com"
      onSuccess={googleLogin}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default GoogleLoginButton;
