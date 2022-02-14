import { Button } from '@mui/material';
import FacebookLogin from 'react-facebook-login/';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

function FacebookLoginButton() {
  return (
    <FacebookLogin
      appId="1088597931155576"
      //   callback={responseFacebook}
      //   render={(renderProps) => (
      //     <Button onClick={renderProps.onClick}>
      //       This is my custom FB button
      //     </Button>
      //   )}
    />
  );
}

export default FacebookLoginButton;
