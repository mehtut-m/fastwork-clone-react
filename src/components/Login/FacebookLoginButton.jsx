import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import axios from '../../config/axios';
import { FACEBOOK_CLIENT_ID } from '../../config/env';
import Button from '@mui/material/Button';
import { IoLogoFacebook } from 'react-icons/io';
import { Typography } from '@mui/material';

function FacebookLoginButton() {
  const facebookLogin = async (response) => {
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
      appId={FACEBOOK_CLIENT_ID}
      callback={facebookLogin}
      disableMobileRedirect={true}
      fields="name,email,picture"
      render={(renderProps) => (
        <Button
          variant="text"
          color="primary"
          onClick={renderProps.onClick}
          sx={{
            background: 'rgb(59, 92, 171)',
            height: '2.5rem',
            textAlign: 'center',
            color: '#fff',
            width: '100%',
            textTransform: 'unset',
            '&:hover': {
              background: 'rgb(59, 92, 171)',
            },
          }}
        >
          <IoLogoFacebook style={{ fontSize: '1.5rem' }} />
          <Typography sx={{ ml: '.5rem' }}>Continue with Facebook</Typography>
        </Button>
      )}
    />
  );
}

export default FacebookLoginButton;
