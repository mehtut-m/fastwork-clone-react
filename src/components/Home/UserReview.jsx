import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Profile1 from '../../assets/profile-1.png';
import Profile2 from '../../assets/profile-2.png';
import Profile3 from '../../assets/profile-3.jpg';
import UserReviewCard from './UserReviewCard';

function UserReview() {
  const cardDetail = [
    {
      name: 'คุณสุกฤตา ประวีณเมธ',
      position: 'ผู้ช่วยกรรมการผู้จัดการ ทรัพย์เจริญแทรเวล (2007)',
      comment:
        'ใช้ Quidwork ช่วยประหยัดเวลาได้มาก เพราะมีตัวเลือกหลากหลายทั้งผลงานและรีวิวการันตีมั่นใจได้ว่าจะได้ผลงานตรงกับความต้องการของเราจริงๆ',
      profileImg: Profile1,
    },
    {
      name: 'คุณอังกูร บุณยะโอภาส',
      position: 'CEO เครื่องสำอางแบรนด์ Evecosmetics',
      comment:
        'เวลามีปัญหาจะคิดถึง Quidwork เป็นอย่างแรก สะดวก รวดเร็ว เทียบราคาและผลงานได้ เป็นผู้ช่วยธุรกิจอย่างแท้จริง',
      profileImg: Profile2,
    },
    {
      name: 'คุณเตวิช บริบูรณ์ชัยศิริ',
      position: 'เจ้าของธุรกิจ ลิ้มเหล่าโหงว Bistro',
      comment:
        'เอาสิ่งที่เราไม่ถนัดให้คนอื่นที่เก่งกว่าเรา แบบนี้ถึงจะทำให้ธุรกิจเราโตไปได้',
      profileImg: Profile3,
    },
  ];
  return (
    <Container
      sx={{
        width: '80vw',
      }}
      style={{ maxWidth: 'unset' }}
    >
      <Box
        sx={{
          mt: 8,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: 'start',
            mt: 3,
            fontSize: '2rem',
            color: 'rgba(121, 0, 255, 1)',
          }}
        >
          ความคิดเห็นจากผู้ใช้บริการ
        </Typography>
      </Box>

      <Box
        sx={{
          mt: 8,
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
