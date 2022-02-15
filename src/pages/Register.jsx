import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GoogleLoginButton from '../components/Login/GoogleLoginButton';
import FacebookLoginButton from '../components/Login/FacebookLoginButton';
import { useState } from 'react';
import { register } from '../apis/auth';

export default function SignUp() {
  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    setFormInput((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await register(formInput);
    console.log(res);
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
          boxShadow: '4px 4px 18px 0px rgba(0,0,0,0.25);',
          borderRadius: '10px',
          marginTop: '4rem',
          padding: '1rem',
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
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
                onChange={handleChange}
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
                onChange={handleChange}
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
