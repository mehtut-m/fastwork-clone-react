import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';

function Login() {
  const handleSubmitLogin = (event) => {
    event.preventDefault();
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
          onSubmit={handleSubmitLogin}
        >
          <p>FACEBOOK LOGIN</p>
          <hr />
          <p>GMAIL LOGIN</p>
          <Divider>หรือ</Divider>
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
              <Link href="/b" variant="body2">
                ไม่เคยมีบัญชี? สร้างบัญชี
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
