import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { blue } from '@mui/material/colors';
import { FaQuoteLeft } from 'react-icons/fa';

function UserReviewCard({ item }) {
  return (
    <Box
      sx={{
        boxShadow: 5,
        width: '22.5rem',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between',
        padding: '1.5rem',
        borderRadius: '8px',
        margin: '1.5rem',
        // border: '1px solid blue',
      }}
    >
      <Box display="flex">
        {/* Icon quote */}
        <Box sx={{ p: 1, mt: '1rem' }}>
          <FaQuoteLeft style={{ color: blue[50], fontSize: '32px' }} />
        </Box>

        {/* Description */}
        <Box>
          <Typography
            component="p"
            sx={{ textAlign: 'left', mx: '1rem', mt: '1rem', color: '#728197' }}
          >
            {item.comment}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: '1rem',
        }}
      >
        <img
          src={item.profileImg}
          alt="Images"
          style={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />

        {/* Name */}
        <Typography
          textAlign="start"
          sx={{ fontWeight: 'bold', mx: '1rem', color: '#7900FF' }}
        >
          {item.name}
          <Typography sx={{ color: '#728197' }}>{item.position}</Typography>
        </Typography>
      </Box>
    </Box>
  );
}

export default UserReviewCard;
