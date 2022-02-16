import { Typography } from '@mui/material';
import React from 'react';

function ThumbnailForm() {
  return (
    <>
      <Typography sx={{ fontSize: '1.25rem' }}>
        อัพโหลดรูปผลงาน 0 / 12
      </Typography>
      <Typography>
        ลูกค้าอยากเห็นฝีมือของคุณ เลือกรูปขั้นต่ำ 3 รูป ที่แสดงผลงานของคุณ
      </Typography>
      <Typography sx={{ fontSize: '1.25rem' }}>
        อธิบายเพิ่มเติมเกี่ยวกับตัวงาน
      </Typography>
    </>
  );
}

export default ThumbnailForm;
