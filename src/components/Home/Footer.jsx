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
      headTitle1: 'หมวดหมู่งาน',
      items1: 'Graphic & Design',
      items2: 'การตลาดและโฆษณา',
      items3: 'เขียนและแปลภาษา',
      items4: 'ภาพและเสียง',
      items5: 'Web & Programming',
      items6: 'ปรึกษาและแนะนำ',
      items7: 'จัดการร้านค้าออนไลน์',
    },

    {
      headTitle2: 'วิธีการใช้งาน',
      items8: 'สมัครเป็นฟรีแลนซ์',
      items9: 'เริ่มขายงานอย่างไร',
      items10: 'การชำระค่าจ้าง',
      items11: 'รับประกันการจ้างงาน',
      items12: 'บล็อกความรู้',
      items13: 'คำถามที่เจอบ่อย',
      items14: 'จัดการการใช้ข้อมูล',
    },

    {
      headTitle3: 'ผลิตภัณฑ์',
      items15: 'Fastwork',
      items16: 'Fastwork for Business',
    },

    {
      headTitle4: 'เกี่ยวกับ Fastwork',
      items17: 'Feedback พวกเรา',
      items18: 'ร่วมงานกับ Fastwork',
      items19: 'เงื่อนไขการใช้บริการ',
      items20: 'นโยบายความเป็นส่วนตัว',
      items21: 'ร่วมงานกับ Fastwork',
    },
    {
      headTitle5: 'ติดต่อเรา',
      items22: 'hello@fastwork.com',
      items23: '02-114-7008',
      items24: 'จันทร์ - ศุกร์ 9.30 - 18.30 น.',
      items25: 'เสาร์ - อาทิตย์',
      items26: 'วันหยุดนักขัตฤกษ์ 10.00-19.00 น.',
    },
  ];

  return (
    <Box component="div">
      <Box
        component="div"
        display="flex"
        bgcolor="black"
        justifyContent="space-around"
        marginTop={5}
        color="white"
      >
        {footerDetail.map(item => {
          return <FooterMap item={item} />;
        })}

        <List component="div" marginTop={5}>
          <Typography sx={{ mb: 2 }}>ติดต่อเรา</Typography>

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
            <ListItem></ListItem>
            <ListItem>จันทร์ - ศุกร์ 9.30 - 18.30 น.</ListItem>
            <ListItem>วันหยุดนักขัตฤกษ์ 10.00-19.00 น.</ListItem>
          </List>
        </List>

        {/* Icon Social  */}

        <List component="div">
          <Box component="div" mt={5}>
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
