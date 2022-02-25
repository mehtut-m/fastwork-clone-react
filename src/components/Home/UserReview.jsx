import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { blue } from '@mui/material/colors';
import Profile1 from '../../assets/profile-1.png';

function UserReview() {
  return (
    <Container
      sx={{
        width: '80vw',
        // maxWidth: 'unset',
      }}
      style={{ maxWidth: 'unset' }}
    >
      <Box
        sx={{
          mt: 8,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: 'start',
            mt: 3,
            fontSize: '2rem',
            color: 'rgba(121, 0, 255, 1)',
          }}
        >
          ความคิดเห็นจากผู้ใช้บริการ
        </Typography>
      </Box>

      <Box
        sx={{
          mt: 8,
          display: 'flex',
          justifyContent: 'space-evenly',
          gap: '1rem',
          fontSize: '1rem',
          // border: '1px solid red',
        }}
      >
        <Box
          sx={{
            boxShadow: 5,
            width: 400,
            height: 300,
            // border: '1px solid blue',
          }}
        >
          <Box display="flex" mt="10px " alignItems="center">
            <FormatQuoteIcon
              sx={{ color: blue[100], fontSize: '50px', marginLeft: 2 }}
            />

            {/* Description */}
            <Typography
              component="p"
              sx={{ textAlign: 'left', margin: '20px 0 0 20px' }}
            >
              ใช้ Fastwork ช่วยประหยัดเวลาได้มาก เพราะมีตัวเลือกหลากหลาย
              ทั้งผลงานและรีวิวการันตี
              มั่นใจได้ว่าจะได้ผลงานตรงกับความต้องการของเราจริงๆ
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', marginTop: 7 }}>
            <img
              src={Profile1}
              alt="Images"
              width={50}
              height={50}
              style={{ marginLeft: '20px', borderRadius: '50%' }}
            />

            {/* Name */}
            <Typography textAlign="start" sx={{ fontWeight: 'bold', mx: 2 }}>
              คุณสุกฤตา ประวีณเมธ
              <Typography>
                ผู้ช่วยกรรมการผู้จัดการ ทรัพย์เจริญแทรเวล (2007)
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default UserReview;
