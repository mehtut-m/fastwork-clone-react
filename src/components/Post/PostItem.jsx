import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';

function PostItem() {
  return (
    <Card sx={{ maxWidth: 321, maxHeight: 360, minWidth: 242 }}>
      <Link to={`/product/:id`}>
        <CardMedia
          sx={{ backgroundColor: 'red', height: '187px' }}
          component="img"
          height="140"
          image="https://storage.googleapis.com/fastwork-static/987bd900-9051-4a55-b93f-cff333ee921f.jpg"
          alt="green iguana"
        />

        <CardContent sx={{ position: 'relative', pt: '1.5rem', pb: '.125rem' }}>
          <Avatar
            sx={{
              position: 'absolute',
              transform: 'translateY(50%)',
              top: '-50%',
            }}
          />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: 'start', fontSize: '1.125rem' }}
          >
            ออกแบบโลโก้สำหรับทุกธุรกิจ คุยง่าย ส่งงานไว
          </Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', padding: '0' }}>
            <StarIcon sx={{ color: '#FBBC05', fontSize: '1.25rem' }} />
            <Typography>4.86 (78)</Typography>
          </Box>

          <Box sx={{ p: '5px 4px', color: '#000', height: '50px' }}>
            <Typography sx={{}}>เริ่มต้น</Typography>
            <Typography sx={{}}>฿ 4,500</Typography>
          </Box>
        </CardActions>
      </Link>
    </Card>
  );
}

export default PostItem;
