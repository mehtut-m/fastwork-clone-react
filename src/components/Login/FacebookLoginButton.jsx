import FacebookLogin from 'react-facebook-login/';
import axios from '../../config/axios';

function FacebookLoginButton() {
  const facebookLogin = async response => {
    try {
      const { accessToken } = response;
      const res = await axios.post('auth/login/fb', {
        accessToken,
      });
      console.log('from backend res => ', res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FacebookLogin
      appId="276357331272102"
      callback={facebookLogin}
      disableMobileRedirect={true}
      fields="name,email,picture"
    />
  );
}

export default FacebookLoginButton;
