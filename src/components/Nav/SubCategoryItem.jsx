import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const SubCategoryItem = ({ subCategoryItem }) => {
  return (
    <Box
      sx={{
        background: `rgba(0,0,0,.5) url(${subCategoryItem.img})`,
        backgroundBlendMode: 'saturation',
        borderRadius: '0.375rem',
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'flex-end',
        height: '5rem',
        p: '0.75rem 1rem',
      }}
    >
      <Box
        sx={{
          fontWeight: 700,
        }}
      >
        <Typography textAlign="start" color="#fff">
          {subCategoryItem.title}
        </Typography>
      </Box>
    </Box>
  );
};

export default SubCategoryItem;
