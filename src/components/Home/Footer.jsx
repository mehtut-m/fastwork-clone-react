import { Box, Container, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import FooterMap from './FooterMap';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsLine } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import {} from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { SiBlogger } from 'react-icons/si';
import { TiSocialPinterestCircular } from 'react-icons/ti';

function Footer() {
  const footerDetail = [
    {
      headTitle: 'หมวดหมู่งาน',
      items: [
        'Graphic & Design',
        'การตลาดและโฆษณา',
        'เขียนและแปลภาษา',
        'ภาพและเสียง',
        'Web & Programming',
        'ปรึกษาและแนะนำ',
        'จัดการร้านค้าออนไลน์',
      ],
    },

    {
      headTitle: 'วิธีการใช้งาน',
      items: [
        'สมัครเป็นฟรีแลนซ์',
        'เริ่มขายงานอย่างไร',
        'การชำระค่าจ้าง',
        'รับประกันการจ้างงาน',
        'บล็อกความรู้',
        'คำถามที่เจอบ่อย',
        'จัดการการใช้ข้อมูล',
      ],
    },

    {
      headTitle: 'ผลิตภัณฑ์',
      items: ['Quidwork', 'Quidwork for Business'],
    },

    {
      headTitle: 'เกี่ยวกับ Quidwork',
      items: [
        'Feedback พวกเรา',
        'ร่วมงานกับ Quidwork',
        'เงื่อนไขการใช้บริการ',
        'นโยบายความเป็นส่วนตัว',
        'ร่วมงานกับ Quidwork',
      ],
    },
  ];

  return (
    <>
      <Box sx={{ bgcolor: 'black' }}>
        <Container>
          <Box component="div" sx={{ mt: '2rem' }}>
            <Box
              component="div"
              sx={{
                display: 'flex',
                paddingTop: '3rem',
                paddingBottom: '3rem',
                justifyContent: 'space-around',
                color: 'white',
              }}
            >
              {footerDetail.map((item, i) => {
                return <FooterMap item={item} key={i} />;
              })}

              <List component="div" sx={{ padding: '0', textAlign: 'start' }}>
                <Typography sx={{ mb: '2rem', fontWeight: 'bold' }}>
                  ติดต่อเรา
                </Typography>

                <Link to="#">
                  <ListItem sx={{ p: '0', mb: '0.5rem' }}>
                    <DraftsIcon />
                    hello@Quidwork.com
                  </ListItem>
                </Link>

                <Link to="#">
                  <ListItem sx={{ p: '0', mb: '0.5rem' }}>
                    <FaFacebookMessenger />
                    Facebook Messenger
                  </ListItem>
                </Link>

                <Link to="#">
                  <ListItem sx={{ p: '0', mb: '1rem' }}>
                    <FaPhoneAlt style={{ marginRight: 'rem' }} />
                    02-114-7008
                  </ListItem>
                </Link>

                <List component="div" sx={{ mt: '0.75rem' }}>
                  <ListItem sx={{ p: '0' }}>
                    จันทร์ - ศุกร์ 9.30 - 18.30 น.
                  </ListItem>
                  <ListItem sx={{ p: '0' }}>
                    วันหยุดนักขัตฤกษ์ 10.00-19.00 น.
                  </ListItem>
                </List>
              </List>
            </Box>

            {/* Icon Social  */}
          </Box>
        </Container>
      </Box>
      <Box sx={{ bgcolor: '#7900FF' }}>
        <Container>
          <Box>
            <List component="div">
              <Box
                component="div"
                sx={{
                  padding: '16px',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
              >
                <Box component="div" sx={{ display: 'flex', color: 'white' }}>
                  <Box sx={{ mr: 2 }}>
                    <Box sx={{ display: 'flex', gap: '.5rem' }}>
                      <Link to="#">
                        <BsLine />
                      </Link>
                      <Link to="#">
                        <BsInstagram />
                      </Link>
                      <Link to="#">
                        <FaFacebookSquare />
                      </Link>
                      <Link to="#">
                        <FaTwitter />
                      </Link>

                      <Link to="#">
                        <BsYoutube />
                      </Link>
                      <Link to="#">
                        <BsLinkedin />
                      </Link>
                      <Link to="#">
                        <SiTiktok />
                      </Link>
                      <Link to="#">
                        <SiBlogger />
                      </Link>
                      <Link to="#">
                        <TiSocialPinterestCircular />
                      </Link>
                    </Box>
                  </Box>
                </Box>

                <Box component="div" color="white">
                  <Typography>จัดทำเพื่อการศึกษา</Typography>
                </Box>
              </Box>
              {/* <Typography sx={{ color: 'white' }}>
                จัดทำเพื่อการศึกษา
              </Typography> */}
            </List>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
