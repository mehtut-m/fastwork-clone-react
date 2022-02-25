import React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DraftsIcon from '@mui/icons-material/Drafts';
import PhoneIcon from '@mui/icons-material/Phone';
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
          <Link to="#"></Link>
          <ListItem>{item.items16}</ListItem>
        </Link>
      </List>

      <List component="div" marginTop={5}>
        <Typography sx={{ mb: 2 }}>{item.headTitle4}</Typography>

        <Link to="#">
          <ListItem>{item.items17}</ListItem>
          <ListItem>{item.items18}</ListItem>
          <ListItem>{item.items19}</ListItem>
          <ListItem>{item.items20}</ListItem>
          <ListItem>{item.items21}</ListItem>
        </Link>
      </List>
    </>
  );
}

export default FooterMap;
