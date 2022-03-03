import { useContext, useState } from 'react';
import { LoadingContext } from '../../../contexts/LoadingContext';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { addPostImage } from '../../../apis/post';
import { createPost } from '../../../services/upload';
import ThumbnailGallery from './ThumbnailGallery';

function ThumbnailForm({
  activeStep,
  handleBack,
  handleNext,
  categoryForm,
  setCategoryForm,
}) {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
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
    setIsLoading(true);
    const formData = new FormData();
    for (const element of imgArr) {
      formData.append('image', element);
    }
    formData.append('postId', postId);
    const res = await addPostImage(formData);
    await createPost(imgArr);
    if (res.status === 200) {
      setCategoryForm((prev) => ({ ...prev, images: imgArr }));
    }
    setIsLoading(false);
    handleNext();
  };

  return (
    <Box>
      <Box>
        <Typography sx={{ fontSize: '1.25rem', mt: '.75rem', mb: '.5rem' }}>
          อัพโหลดรูปผลงาน {imgArr.length} / 12
        </Typography>
        <Typography>
          ลูกค้าอยากเห็นฝีมือของคุณ เลือกรูปขั้นต่ำ 3 รูป ที่แสดงผลงานของคุณ
        </Typography>
        <Typography sx={{ fontSize: '1.25rem', mt: '1rem', mb: '.5rem' }}>
          อธิบายเพิ่มเติมเกี่ยวกับตัวงาน
        </Typography>

        <label htmlFor="contained-button-file">
          <Input
            multiple
            accept="image/*"
            id="contained-button-file"
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

          <LoadingButton
            variant="contained"
            loading={isLoading}
            onClick={handleClickNext}
            sx={{ mt: 3, ml: 1 }}
          >
            บันทึกและไปต่อ
          </LoadingButton>
        </Box>
      </Box>
      <ThumbnailGallery imgArr={imgArr} />
    </Box>
  );
}

export default ThumbnailForm;
