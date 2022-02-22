import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import FacebookLoginButton from './FacebookLoginButton';
import GoogleLoginButton from './GoogleLoginButton';

function MainLogin({
  email,
  handleClickLogin,
  setEmail,
  // setEmailValid,
  // emailValid,
  emailError,
  // setEmailError,
}) {
  // const handleSubmit = e => {
  //   if (email.length === 0) {
  //     setEmailError('*Email is required');
  //   } else if (email.indexOf(' ') >= 0) {
  //     setEmailError('*Email cannot contain spaces');
  //   } else {
  //     setEmailError('');
  //     setEmailValid(true);
  //   }

  //   setEmail(e.target.value);
  // };

  return (
    <>
      <Typography
        component="h1"
        variant="h5"
        // sx={{ mb: 3, fontWeight: 'bold', color: 'blue' }}
      >
        fastwork
      </Typography>

      <Typography
        component="h1"
        variant="h5"
        sx={{
          textAlign: 'start',
          width: '100%',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          my: '1rem',
        }}
      >
        เข้าสู่ระบบ
      </Typography>

      <Box>
        <GoogleLoginButton />
        <FacebookLoginButton />
      </Box>
      <Divider sx={{ my: '1rem' }}>หรือ</Divider>

      <Box
        component="form"
        autoComplete="off"
        noValidate
        sx={{ mt: 1 }}
        onSubmit={handleClickLogin}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="email"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
              // onChange={handleChange}
            />

            {emailError.length > 0 && (
              <Typography
                sx={{
                  // fontWeight: 'bold',
                  textAlign: 'start',
                  fontSize: '12px',
                  color: 'red',
                }}
              >
                {emailError}
              </Typography>
            )}
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          value={email}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={!email}
        >
          ถัดไป
        </Button>

        <Grid container justifyContent="center">
          <Grid item>
            ไม่เคยมีบัญชี?
            <Link href="/register" variant="body2" sx={{ ml: '.5rem' }}>
              สร้างบัญชี
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default MainLogin;

// ****************
// ***************
// ************
// *****************
// **********

// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
// import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import { useState } from 'react';

// import FacebookLoginButton from './FacebookLoginButton';
// import GoogleLoginButton from './GoogleLoginButton';

// function MainLogin({
//   email,
//   handleClickLogin,
//   setEmail,
//   // setEmailValid,
//   // emailValid,
//   emailError,
//   // setEmailError,
// }) {
//   // const handleSubmit = e => {
//   //   if (email.length === 0) {
//   //     setEmailError('*Email is required');
//   //   } else if (email.indexOf(' ') >= 0) {
//   //     setEmailError('*Email cannot contain spaces');
//   //   } else {
//   //     setEmailError('');
//   //     setEmailValid(true);
//   //   }

//   //   setEmail(e.target.value);
//   // };

//   return (
//     <>
//       <Typography
//         component="h1"
//         variant="h5"
//         // sx={{ mb: 3, fontWeight: 'bold', color: 'blue' }}
//       >
//         fastwork
//       </Typography>

//       <Typography
//         component="h1"
//         variant="h5"
//         sx={{
//           textAlign: 'start',
//           width: '100%',
//           fontWeight: 'bold',
//           fontSize: '1.5rem',
//           my: '1rem',
//         }}
//       >
//         เข้าสู่ระบบ
//       </Typography>

//       <Box>
//         <GoogleLoginButton />
//         <FacebookLoginButton />
//       </Box>
//       <Divider sx={{ my: '1rem' }}>หรือ</Divider>

//       <Box
//         component="form"
//         autoComplete="off"
//         noValidate
//         sx={{ mt: 1 }}
//         onSubmit={handleClickLogin}
//       >
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               type="email"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoFocus
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//               // onChange={handleChange}
//             />

//             {emailError.length > 0 && (
//               <Typography
//                 sx={{
//                   // fontWeight: 'bold',
//                   textAlign: 'start',
//                   fontSize: '12px',
//                   color: 'red',
//                 }}
//               >
//                 {emailError}
//               </Typography>
//             )}
//           </Grid>
//         </Grid>
//         <Button
//           type="submit"
//           fullWidth
//           value={email}
//           variant="contained"
//           sx={{ mt: 3, mb: 2 }}
//           disabled={!email}
//         >
//           ถัดไป
//         </Button>

//         <Grid container justifyContent="center">
//           <Grid item>
//             ไม่เคยมีบัญชี?
//             <Link href="/register" variant="body2" sx={{ ml: '.5rem' }}>
//               สร้างบัญชี
//             </Link>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// }

// export default MainLogin;
