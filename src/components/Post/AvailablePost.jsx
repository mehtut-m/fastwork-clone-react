import { Box } from '@mui/system';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import React from 'react';
import PostItem from './PostItem';

function AvailablePost() {
  return (
    <Box>
      <PostItem />
      <FormGroup
        sx={{
          borderRadius: '5px',
          border: '1px solid #cE9E5E5',
          marginTop: '.75rem',
        }}
      >
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="แสดงงานนี้"
        />
      </FormGroup>
    </Box>
  );
}

export default AvailablePost;
