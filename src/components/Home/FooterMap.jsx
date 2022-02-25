import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function FooterMap({ item }) {
  return (
    <>
      <List component="div" marginTop={5} marginBottom={5} color="white">
        <Typography sx={{ mb: 3 }}>{item.headTitle1}</Typography>

        <Link to="#">
          <ListItem>{item.items1}</ListItem>
        </Link>
        <Link to="#">
          <ListItem>{item.items2}</ListItem>
        </Link>
        <Link to="#">
          <ListItem>{item.items3}</ListItem>
        </Link>
        <Link to="#">
          <ListItem>{item.items4}</ListItem>
        </Link>
        <Link to="#">
          <ListItem>{item.items5}</ListItem>
        </Link>
        <Link to="#">
          <ListItem>{item.items6}</ListItem>
        </Link>
        <Link to="#">
          <ListItem>{item.items7}</ListItem>
        </Link>
      </List>

      <List component="div" color="white" marginTop={5}>
        <Typography sx={{ mb: 3 }}>{item.headTitle2}</Typography>

        <Link to="#">
          <ListItem>{item.items8}</ListItem>
        </Link>
        <Link to="#">
          <ListItem>{item.items9}</ListItem>
        </Link>
        <Link to="#">
          <ListItem>{item.items10}</ListItem>
        </Link>
        <Link to="#">
          <ListItem>{item.items11}</ListItem>
        </Link>
        <Link to="#">
          <ListItem>{item.items12}</ListItem>
        </Link>
        <Link to="#">
          <ListItem>{item.items13}</ListItem>
        </Link>
        <Link to="#">
          <ListItem>{item.items14}</ListItem>
        </Link>
      </List>

      <List component="div" marginTop={5}>
        <Typography sx={{ mb: 2 }}>{item.headTitle3}</Typography>

        <Link to="#">
          <ListItem>{item.items15}</ListItem>
        </Link>
        <Link to="#">
          <ListItem>{item.items16}</ListItem>
        </Link>
      </List>

      <List component="div" marginTop={5}>
        <Typography sx={{ mb: 2 }}>{item.headTitle4}</Typography>

        <Link to="#">
          <ListItem>{item.items17}</ListItem>
        </Link>
        <Link to="#">
          <ListItem>{item.items18}</ListItem>
        </Link>
        <Link to="#">
          <ListItem>{item.items19}</ListItem>
        </Link>
        <Link to="#">
          <ListItem>{item.items20}</ListItem>
        </Link>
        <Link to="#">
          <ListItem>{item.items21}</ListItem>
        </Link>
      </List>
    </>
  );
}

export default FooterMap;
