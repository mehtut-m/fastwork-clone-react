import { Box } from '@mui/system';
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography } from '@mui/material';

function CheckoutGallery({ items }) {
  return (
    <Box sx={{ my: '2rem' }}>
      {items.length > 0 && (
        <Typography sx={{ fontSize: '1.25rem' }}>Preview</Typography>
      )}
      <ImageList
        sx={{
          width: '100%',
          height: 450,
          maxWidth: '500px',
          maxHeight: '300px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          borderRadius: '5px',
        }}
        cols={2}
        rowHeight={164}
      >
        {items.map((item) => (
          <ImageListItem key={item}>
            <img
              src={item}
              style={{ width: '164px', objectFit: 'contain', margin: '0 auto' }}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default CheckoutGallery;
