import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function FooterMap({ item }) {
  return (
    <>
      <List component="div" color="white">
        <Typography sx={{ mb: 3 }}>{item.headTitle}</Typography>
        {item.items.map(text => {
          return (
            <Link to="#">
              <ListItem>{text}</ListItem>
            </Link>
          );
        })}
      </List>
    </>
  );
}

export default FooterMap;
