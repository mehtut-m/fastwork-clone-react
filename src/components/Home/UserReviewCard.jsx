import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { blue } from '@mui/material/colors';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

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
        <FormatQuoteIcon sx={{ color: blue[100], fontSize: '50px' }} />
        <i class="fas fa-quote-left "></i>

        {/* Description */}
        <Typography component="p" sx={{ textAlign: 'left', mx: '1rem' }}>
          {item.comment}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src={item.profileImg}
          alt="Images"
          width={50}
          height={50}
          style={{ borderRadius: '50%' }}
        />

        {/* Name */}
        <Typography textAlign="start" sx={{ fontWeight: 'bold', mx: '1rem' }}>
          {item.name}
          <Typography>{item.position}</Typography>
        </Typography>
      </Box>
    </Box>
  );
}

export default UserReviewCard;
