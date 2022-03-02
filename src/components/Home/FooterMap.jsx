import React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function FooterMap({ item }) {
  console.log(item);
  return (
    <>
      <List component="div" color="white" sx={{ p: '0' }}>
        <Typography sx={{ mb: '0.75rem', fontWeight: 'bold' }}>
          {item.headTitle}
        </Typography>
        {item.items.map((text, i) => {
          return (
            <Link to="#" key={i}>
              <ListItem sx={{ padding: '0', mb: '0.5rem' }}>{text}</ListItem>
            </Link>
          );
        })}
      </List>
    </>
  );
}

export default FooterMap;
