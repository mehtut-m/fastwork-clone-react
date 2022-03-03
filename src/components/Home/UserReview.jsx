import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Profile1 from '../../assets/profile-1.jpg';
import Profile2 from '../../assets/profile-2.jpg';
import Profile3 from '../../assets/profile-3.jpg';
import UserReviewCard from './UserReviewCard';

function UserReview() {
  const cardDetail = [
    {
      name: 'คุณอดัม สมิธ',
      position: 'กรรมการผู้จัดการ แทรเวล จำกัด',
      comment:
        'ใช้ Quidwork ช่วยประหยัดเวลาได้มาก เพราะมีตัวเลือกหลากหลายทั้งผลงานและรีวิวการันตีมั่นใจได้ว่าจะได้ผลงานตรงกับความต้องการของเราจริงๆ',
      profileImg: Profile1,
    },
    {
      name: 'คุณจอห์น โด',
      position: 'เจ้าหน้าที่ฝ่ายการตลาด บริษัทเอกชน',
      comment:
        'เวลามีปัญหาจะคิดถึง Quidwork เป็นอย่างแรก สะดวก รวดเร็ว เทียบราคาและผลงานได้ เป็นผู้ช่วยธุรกิจอย่างแท้จริง',
      profileImg: Profile2,
    },
    {
      name: 'คุณโทมัส เอดิสัน',
      position: 'เจ้าของธุรกิจ Start up Software',
      comment:
        'เอาสิ่งที่เราไม่ถนัดให้คนอื่นที่เก่งกว่าเรา แบบนี้ถึงจะทำให้ธุรกิจเราโตไปได้',
      profileImg: Profile3,
    },
  ];
  return (
    <Container>
      <Box
        sx={{
          mt: 8,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: '2rem',
            textAlign: 'start',
            color: 'rgba(121, 0, 255, 1)',
          }}
        >
          ความคิดเห็นจากผู้ใช้บริการ
        </Typography>
      </Box>

      <Box
        sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'space-evenly',
          gap: '1rem',
          fontSize: '1rem',

          // border: '1px solid red',
        }}
      >
        {cardDetail.map((item, i) => {
          return <UserReviewCard item={item} key={i} />;
        })}
      </Box>
    </Container>
  );
}

export default UserReview;
