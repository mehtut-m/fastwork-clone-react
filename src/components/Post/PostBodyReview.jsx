import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PostBodyReviewComment from './PostBodyReviewComment';

function PostBodyReview() {
  return (
    <>
      <Typography // ! number.length
        component="h2"
        sx={{
          fontSize: '2rem',
          textAlign: 'start',
          color: '#7900FF',
          marginTop: '1.125rem',
        }}
      >
        รีวิวจากผู้ว่าจ้าง (18)
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            borderRadius: '50%',
            background: '#7900FF',
            aspectRatio: '1',
            width: '11.875rem',
            height: '11.875rem',
            margin: '1.875rem',
            alignItems: 'center',
            justifyContent: 'center',
            flexFlow: 'column',
          }}
        >
          <Typography component="h2" sx={{ color: '#fff', fontSize: '2rem' }}>
            3.5
          </Typography>
          <Typography
            component="p"
            sx={{ color: '#fff', fontSize: '1.125rem' }}
          >
            จาก 5.0
          </Typography>
        </Box>
        <Box
          sx={{
            borderLeft: '2px solid gray',
            display: 'flex',
            flexFlow: 'column',
            width: '70%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography component="p">คะแนนเฉลี่ย</Typography>
          <Box sx={{ display: 'flex', color: '#F2A218' }}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
            <StarBorderIcon />
          </Box>
        </Box>
      </Box>
      <PostBodyReviewComment />
      <PostBodyReviewComment />
      <PostBodyReviewComment />
      <Button
        sx={{
          border: '1px solid gray',
          fontSize: '1.125rem',
          width: '15.875rem',
          height: '3rem',
          marginTop: '2.875rem',
        }}
      >
        ดูรีวิวเพิ่มเติม
      </Button>
    </>
  );
}

export default PostBodyReview;
