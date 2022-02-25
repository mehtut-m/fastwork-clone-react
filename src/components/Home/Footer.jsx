import { Box, Container, Link, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DraftsIcon from '@mui/icons-material/Drafts';
import PhoneIcon from '@mui/icons-material/Phone';
import { white } from '@mui/material/colors';

function Footer() {
  return (
    <Box component="div">
      <Box
        component="div"
        display="flex"
        bgcolor="black"
        justifyContent="space-around"
        marginTop={5}
        // maxWidth="100%"
        color="white"
      >
        <Box component="div" marginTop={5} marginBottom={5} color="white">
          <Typography sx={{ mb: 2 }}>หมวดหมู่งาน</Typography>

          <Link mb={2} href="#">
            Graphic & Design
          </Link>

          <br />

          <Link href="#">การตลาดและโฆษณา</Link>

          <br />

          <Link href="#">เขียนและแปลภาษา</Link>

          <br />

          <Link href="#">ภาพและเสียง</Link>

          <br />

          <Link href="#">Web & Programming</Link>

          <br />

          <Link href="#">ปรึกษาและแนะนำ</Link>

          <br />

          <Link href="#">จัดการร้านค้าออนไลน์</Link>
        </Box>

        {/*  */}
        {/*  */}

        <Box component="div" color="white" marginTop={5}>
          <Typography sx={{ mb: 2 }}>วิธีการใช้งาน</Typography>
          <Link href="#">สมัครเป็นฟรีแลนซ์</Link>

          <br />

          <Link href="#">เริ่มขายงานอย่างไร</Link>

          <br />

          <Link href="#">การชำระค่าจ้าง</Link>

          <br />

          <Link href="#">รับประกันการจ้างงาน</Link>

          <br />

          <Link href="#">บล็อกความรู้</Link>

          <br />

          <Link href="#">คำถามที่เจอบ่อย</Link>

          <br />

          <Link href="#">จัดการการใช้ข้อมูล</Link>
        </Box>

        <Box component="div" marginTop={5}>
          <Typography sx={{ mb: 2 }}>ผลิตภัณฑ์</Typography>
          <Link href="#">Fastwork</Link>

          <br />

          <Link href="#">Fastwork for Business</Link>
        </Box>

        <Box component="div" marginTop={5}>
          <Typography sx={{ mb: 2 }}>เกี่ยวกับ Fastwork</Typography>
          <Link href="#">Feedback พวกเรา</Link>

          <br />

          <Link href="#">ร่วมงานกับ Fastwork</Link>

          <br />

          <Link href="#">เงื่อนไขการใช้บริการ</Link>

          <br />

          <Link to="#">นโยบายความเป็นส่วนตัว</Link>
        </Box>

        <Box component="div" marginTop={5}>
          <Typography sx={{ mb: 2 }}>ติดต่อเรา</Typography>
          <Link href="hello@fastwork.com" display="flex">
            <DraftsIcon sx={{ color: 'white' }} /> hello@fastwork.com
          </Link>
          <Link href="#" display="flex">
            <PhoneIcon sx={{ color: 'white' }} /> 02-114-7008
          </Link>
          <Box component="div" marginTop={7}>
            <Typography>จันทร์ - ศุกร์ 9.30 - 18.30 น.</Typography>
            <Typography>เสาร์ - อาทิตย์,</Typography>
            <Typography> วันหยุดนักขัตฤกษ์ 10.00-19.00 น.</Typography>
          </Box>
        </Box>

        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}

        {/* Icon Social  */}
        <Box component="div">
          <Box component="div" mt={5}>
            <Box component="div" sx={{}}>
              <Typography>
                <Link href="https://www.instagram.com/fastworkco/">
                  <InstagramIcon />
                </Link>
                <Link href="https://www.facebook.com/fastworkco">
                  <FacebookIcon />
                </Link>
                <Link href="https://twitter.com/fastworkco">
                  <TwitterIcon />
                </Link>

                <Link href="https://www.youtube.com/channel/UCroiT_lHdQl7iGZ6CxlmwAg">
                  <YouTubeIcon />
                </Link>
                <Link href="https://www.linkedin.com/company/fastworkco">
                  <LinkedInIcon />
                </Link>
                <Link href="https://www.blockdit.com/fastworkco">
                  <img src="" alt="" width="14px" height="16px" />
                </Link>
              </Typography>
            </Box>

            <Box component="div">
              <Box>© สงวนลิขสิทธิ์ บริษัทฟาสต์เวิร์ค เทคโนโลยีส์ จำกัด</Box>
              <Box>
                <Link
                  href="//www.trustmarkthai.com/callbackData/popup.php?data=11-30-5-4c87a2a0a9a2281d7b5fefb5b727743372ca8bbf695&amp;markID=firstmar"
                  title="กรมพัฒนาธุรกิจการค้า Trustmarkthai"
                >
                  <img
                    alt="กรมพัฒนาธุรกิจการค้า Trustmarkthai"
                    src="https://www.trustmarkthai.com/trust_banners/bns_registered.png"
                    // maxWidth="100%"
                    // maxHeight="40px"
                  />
                </Link>
                <Typography>จัดทำเพื่อการศึกษา</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
