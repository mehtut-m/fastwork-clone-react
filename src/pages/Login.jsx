import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';

function Login() {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: 'calc(100vh - 72px)',
        marginTop: '4rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          fastwork
        </Typography>
        <Typography component="h1" variant="h5">
          เข้าสู่ระบบ
        </Typography>

        <br />

        <button component="h1" variant="h5">
          Sign In with Facebook
        </button>
        <button component="h1" variant="h5">
          Sign In with Google
        </button>

        <br />

        <Typography component="h1" variant="h5">
          --------- หรือ ---------
        </Typography>

        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField required fullWidth />
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
              <Link to="#" variant="body2">
                ไม่เคยมีบัญชี? สร้างบัญชี
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 5 }} /> */}
    </Container>
  );
}

export default Login;
