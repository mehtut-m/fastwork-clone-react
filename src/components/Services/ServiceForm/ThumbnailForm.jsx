import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { addPostImage } from '../../../apis/post';

import { createPost } from '../../../services/upload';

function ThumbnailForm({
  activeStep,
  handleBack,
  handleNext,
  categoryForm,
  setCategoryForm,
}) {
  const { postId, name } = categoryForm;
  const [imgArr, setImgArr] = useState([]);
  const Input = styled('input')({
    display: 'none',
  });

  const handleSelectImage = async (e) => {
    const imgArr = e.target.files;
    if (imgArr.length >= 3 && imgArr.length <= 12) {
      setImgArr([...e.target.files]);
    } else {
      // Error handle
    }
  };

  const handleClickNext = async () => {
    const formData = new FormData();
    for (const element of imgArr) {
      formData.append('image', element);
    }
    formData.append('postId', postId);
    const res = await addPostImage(formData);
    setCategoryForm((prev) => ({ ...prev, images: imgArr }));
    await createPost(imgArr);
    handleNext();
  };

  return (
    <>
      <Typography sx={{ fontSize: '1.25rem' }}>
        อัพโหลดรูปผลงาน {imgArr.length} / 12
      </Typography>
      <Typography>
        ลูกค้าอยากเห็นฝีมือของคุณ เลือกรูปขั้นต่ำ 3 รูป ที่แสดงผลงานของคุณ
      </Typography>
      <Typography sx={{ fontSize: '1.25rem' }}>
        อธิบายเพิ่มเติมเกี่ยวกับตัวงาน
      </Typography>

      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleSelectImage}
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>

      <Box sx={{ display: 'flex', justifyContent: `flex-end` }}>
        {activeStep !== 0 && (
          <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
            กลับ
          </Button>
        )}

        <Button
          variant="contained"
          onClick={handleClickNext}
          sx={{ mt: 3, ml: 1 }}
        >
          บันทึกและไปต่อ
        </Button>
      </Box>
    </>
  );
}

export default ThumbnailForm;
