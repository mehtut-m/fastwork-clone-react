import {
  Box,
  Button,
  // Checkbox,
  Container,
  Divider,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import FacebookLoginButton from '../components/Login/FacebookLoginButton';
import GoogleLoginButton from '../components/Login/GoogleLoginButton';

function Login() {
  const [email, setEmail] = useState('');

  const handleSubmitLogin = e => {
    e.preventDefault();
    console.log('email: ' + email);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          boxShadow: '4px 4px 18px 0px rgba(0,0,0,0.25);',
          borderRadius: '10px',
          marginTop: '5rem',
          padding: '1rem',
        }}
      >
        <Typography component="h1" variant="h4">
          Fastwork
        </Typography>
        <br />

        <Typography component="h1" variant="h5">
          เข้าสู่ระบบ
        </Typography>

        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={handleSubmitLogin}
        >
          <Box>
            <GoogleLoginButton />
            <FacebookLoginButton />
          </Box>
          <Divider sx={{ mt: 2 }}>หรือ</Divider>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            ถัดไป
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              ไม่เคยมีบัญชี ?
              <Link href="/register" variant="body2">
                สร้างบัญชี
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
