import React from 'react';
import SubCategoryItem from './SubCategoryItem';
import { Box } from '@mui/material';

const menus = {
  'Graphic & Design': [
    {
      id: '2',
      title: 'วาดภาพประกอบ',
      img: 'https://storage.googleapis.com/fastwork-static/1ddade40-d75e-4e9a-8b0e-02030795acaa.jpg',
    },
    {
      id: '1',
      title: 'Logo',
      img: 'https://storage.googleapis.com/fastwork-static/bg-logo.jpg',
    },
    {
      id: '3',
      title: 'ออกแบบ Character & Mascot',
      img: 'https://storage.googleapis.com/fastwork-static/4f21d113-2c13-4a84-b39e-4b638b093911.jpg',
    },
    {
      id: '4',
      title: 'Banner โฆษณา',
      img: 'https://storage.googleapis.com/fastwork-static/bg-banner.jpg',
    },
    {
      id: '5',
      title: 'วาดแฟนอาร์ต',
      img: 'https://storage.googleapis.com/fastwork-asset/subcategory_images/fan-art/fanart-web.png',
    },
    {
      id: '5',
      title: 'Label & Packaging',
      img: 'https://storage.googleapis.com/fastwork-static/bg-packaging.jpg',
    },
    {
      id: '#',
      title: 'เขียนแบบวิศวกรรมและออกแบบโครงสร้าง',
      img: 'https://storage.googleapis.com/fastwork-static/3cc26adb-d012-4c62-a26f-f9b1f2a14e52.jpg',
    },
    {
      id: '#',
      title: 'วาดภาพเหมือน Portrait',
      img: 'https://storage.googleapis.com/fastwork-static/6e11d38a-f10e-46a6-b3fa-0c4597fa86e3.jpg',
    },
  ],
};

const SubCategoryMenu = ({ subCatOn }) => {
  const show = subCatOn ? 'unset' : '0px';
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        display: 'grid',
        gap: '6px',
        gridTemplateColumns: 'repeat(4, 1fr)',
        px: '2rem',
        overflow: 'hidden',
        transition: 'max-height 0.5s cubic-bezier(0, 1, 0, 1)',
        maxHeight: show,
      }}
    >
      {menus['Graphic & Design'].map((item) => (
        <SubCategoryItem subCategoryItem={item} />
      ))}
    </Box>
  );
};

export default SubCategoryMenu;
