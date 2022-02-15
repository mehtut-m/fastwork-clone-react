import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

function LoginEmail() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitLoginEmail = e => {
    e.preventDefault();
    console.log('email: ' + email);
    console.log('password: ' + password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '3',
          borderRadius: 5,
          padding: 8,
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
          onSubmit={handleSubmitLoginEmail}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            id="password"
            label="Password"
            name="password"
            autoComplete="off"
            autoFocus
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            เข้าสู่ระบบ
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="/forgetPassword" variant="body2">
                ลืมรหัสผ่าน
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginEmail;
