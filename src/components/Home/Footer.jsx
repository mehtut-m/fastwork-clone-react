import { Box, Container, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import FooterMap from './FooterMap';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DraftsIcon from '@mui/icons-material/Drafts';
import PhoneIcon from '@mui/icons-material/Phone';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from 'react-router-dom';

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
      items: ['Fastwork', 'Fastwork for Business'],
    },

    {
      headTitle: 'เกี่ยวกับ Fastwork',
      items: [
        'Feedback พวกเรา',
        'ร่วมงานกับ Fastwork',
        'เงื่อนไขการใช้บริการ',
        'นโยบายความเป็นส่วนตัว',
        'ร่วมงานกับ Fastwork',
      ],
    },
  ];

  return (
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
              gap: '2',
            }}
          >
            {footerDetail.map((item, i) => {
              return <FooterMap item={item} key={i} />;
            })}

            <List component="div" sx={{ padding: '0', textAlign: 'start' }}>
              <Typography sx={{ mb: '2rem', fontWeight: 'bold' }}>
                ติดต่อเรา
              </Typography>

              <Link to="hello@fastwork.com">
                <ListItem sx={{ p: '0', mb: '0.5rem' }}>
                  <DraftsIcon />
                  hello@fastwork.com
                </ListItem>
              </Link>

              <Link to="https://www.facebook.com/fastworkco">
                <ListItem sx={{ p: '0', mb: '0.5rem' }}>
                  <CommentIcon />
                  Facebook Messenger
                </ListItem>
              </Link>

              <Link to="#">
                <ListItem sx={{ p: '0', mb: '1rem' }}>
                  <PhoneIcon />
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
          <Box sx={{ bgcolor: '#7900FF' }}>
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
                  <Typography>
                    <Link to="https://www.instagram.com/fastworkco/">
                      <InstagramIcon />
                    </Link>
                    <Link to="https://www.facebook.com/fastworkco">
                      <FacebookIcon />
                    </Link>
                    <Link to="https://twitter.com/fastworkco">
                      <TwitterIcon />
                    </Link>

                    <Link to="https://www.youtube.com/channel/UCroiT_lHdQl7iGZ6CxlmwAg">
                      <YouTubeIcon />
                    </Link>
                    <Link to="https://www.linkedin.com/company/fastworkco">
                      <LinkedInIcon />
                    </Link>
                  </Typography>
                  <Typography>Sitemaps 🇮🇩 Fastwork Indonesia</Typography>
                </Box>

                <Box component="div" color="white" sx={{ display: 'flex' }}>
                  <Typography>
                    © สงวนลิขสิทธิ์ บริษัทฟาสต์เวิร์ค เทคโนโลยีส์ จำกัด
                  </Typography>
                  <Box sx={{ ml: ' 0.8rem' }}>
                    <Link
                      to="//www.trustmarkthai.com/callbackData/popup.php?data=11-30-5-4c87a2a0a9a2281d7b5fefb5b727743372ca8bbf695&amp;markID=firstmar"
                      title="กรมพัฒนาธุรกิจการค้า Trustmarkthai"
                    >
                      <img
                        alt="กรมพัฒนาธุรกิจการค้า Trustmarkthai"
                        src="https://www.trustmarkthai.com/trust_banners/bns_registered.png"
                        width="69px"
                      />
                    </Link>
                  </Box>
                </Box>
              </Box>
              <Typography sx={{ color: 'white' }}>
                จัดทำเพื่อการศึกษา
              </Typography>
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
