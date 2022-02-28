import { Box, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import FooterMap from './FooterMap';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DraftsIcon from '@mui/icons-material/Drafts';
import PhoneIcon from '@mui/icons-material/Phone';
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
    <Box component="div">
      <Box
        component="div"
        display="flex"
        bgcolor="black"
        justifyContent="space-around"
        color="white"
      >
        {footerDetail.map(item => {
          return <FooterMap item={item} />;
        })}

        <List component="div">
          <Typography sx={{ mb: 3 }}>ติดต่อเรา</Typography>

          <Link to="hello@fastwork.com" display="flex">
            <ListItem>
              <DraftsIcon />
              hello@fastwork.com
            </ListItem>
          </Link>

          <Link to="#" display="flex">
            <ListItem>
              <PhoneIcon />
              02-114-7008
            </ListItem>
          </Link>

          <List component="div">
            <ListItem>จันทร์ - ศุกร์ 9.30 - 18.30 น.</ListItem>
            <ListItem>วันหยุดนักขัตฤกษ์ 10.00-19.00 น.</ListItem>
          </List>
        </List>

        {/* Icon Social  */}

        <List component="div">
          <Box component="div">
            <Box component="div">
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
                <Link to="https://www.blockdit.com/fastworkco">
                  <img src="" alt="" width="14px" height="16px" />
                </Link>
              </Typography>
            </Box>

            <Box component="div">
              <Box>© สงวนลิขสิทธิ์ บริษัทฟาสต์เวิร์ค เทคโนโลยีส์ จำกัด</Box>

              <Box>
                <Link
                  to="//www.trustmarkthai.com/callbackData/popup.php?data=11-30-5-4c87a2a0a9a2281d7b5fefb5b727743372ca8bbf695&amp;markID=firstmar"
                  title="กรมพัฒนาธุรกิจการค้า Trustmarkthai"
                >
                  <img
                    alt="กรมพัฒนาธุรกิจการค้า Trustmarkthai"
                    src="https://www.trustmarkthai.com/trust_banners/bns_registered.png"
                  />
                </Link>
                <Typography>จัดทำเพื่อการศึกษา</Typography>
              </Box>
            </Box>
          </Box>
        </List>
      </Box>
    </Box>
  );
}

export default Footer;
