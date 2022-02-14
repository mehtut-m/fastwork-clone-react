import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GoogleLoginButton from '../components/Login/GoogleLoginButton';
import FacebookLoginButton from '../components/Login/FacebookLoginButton';
import { useState } from 'react';

export default function SignUp() {
  const [formInput, setFormInput] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: 'calc(100vh - 72px)',
      }}
    >
      <Box
        sx={{
          paddingTop: '4rem',
        }}
      >
        <Typography component="h1" variant="h5">
          fastwork
        </Typography>

        <Typography
          component="h1"
          variant="h5"
          sx={{ textAlign: 'start', width: '100%' }}
        >
          สร้างบัญชี
        </Typography>
        <Box>
          <GoogleLoginButton />
          <FacebookLoginButton />
        </Box>
        <Divider>หรือ</Divider>

        {/* Register Form */}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              มีบัญชีอยู่แล้ว ?
              <Link href="/register" variant="body2">
                เข้าสู่ระบบ
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
