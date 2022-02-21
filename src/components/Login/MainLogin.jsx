import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { login } from '../../apis/auth';

import FacebookLoginButton from './FacebookLoginButton';
import GoogleLoginButton from './GoogleLoginButton';

function MainLogin({
  email,
  handleClickLogin,
  setEmail,
  validateEmail,
  emailError,
}) {
  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        sx={{ mb: 3, fontWeight: 'bold', color: 'blue' }}
      >
        Fastwork
      </Typography>

      <Typography
        component="h1"
        variant="h5"
        sx={{ textAlign: 'start', mb: 2, fontWeight: 'bold' }}
      >
        เข้าสู่ระบบ
      </Typography>

      <Box>
        <GoogleLoginButton />
        <FacebookLoginButton />
      </Box>
      <Divider sx={{ mt: 2 }}>หรือ</Divider>

      <Box
        component="form"
        sx={{ mt: 1 }}
        novalidate={true}
        onSubmit={handleClickLogin}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="email"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              required
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <span
              sx={{
                fontWeight: 'bold',
                color: 'red',
              }}
            >
              {emailError}
            </span>
          </Grid>
        </Grid>

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
            ไม่เคยมีบัญชี?{' '}
            <Link href="/register" variant="body2">
              สร้างบัญชี
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default MainLogin;
